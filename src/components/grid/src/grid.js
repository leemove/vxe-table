import TableProps from '../../table/src/props'
import funs from '../../table/src/func'
import UtilTools from '../../../tools/utils'
import XEUtils from 'xe-utils'

const methods = {}
const propKeys = Object.keys(TableProps)

funs.forEach(name => {
  methods[name] = function () {
    return this.$refs.xTable[name].apply(this.$refs.xTable[name], arguments)
  }
})

export default {
  name: 'VxeGrid',
  props: {
    columns: Array,
    pageConfig: Object,
    proxyConfig: Object,
    toolbar: Object,
    ...TableProps
  },
  provide () {
    return {
      $grid: this
    }
  },
  data () {
    return {
      tableLoading: false,
      tableData: [],
      pendingRecords: [],
      tablePage: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  computed: {
    tableProps () {
      let rest = {}
      propKeys.forEach(key => {
        rest[key] = this[key]
      })
      return rest
    }
  },
  watch: {
    columns (value) {
      this.$refs.xTable.loadColumn(value)
    }
  },
  mounted () {
    let { columns, proxyConfig } = this
    if (columns && columns.length) {
      this.$refs.xTable.loadColumn(this.columns)
    }
    if (proxyConfig && proxyConfig.autoLoad !== false) {
      this.commitProxy('query')
    }
  },
  render (h) {
    let { $slots, $listeners, pageConfig, size, loading, toolbar, proxyConfig, tableProps, tableLoading, tablePage, tableData } = this
    return h('div', {
      class: 'vxe-grid'
    }, [
      toolbar ? h('vxe-table-toolbar', {
        ref: 'toolbar',
        props: toolbar
      }) : null,
      h('vxe-table', {
        props: Object.assign({ }, tableProps, proxyConfig ? { loading: tableLoading, data: tableData, rowClassName: this.handleRowClassName } : {}),
        on: $listeners,
        ref: 'xTable'
      }, $slots.default),
      pageConfig ? h('vxe-pagination', {
        class: ['vxe-grid--pagination', {
          'is--loading': loading
        }],
        props: Object.assign({ size }, proxyConfig ? tablePage : pageConfig),
        on: {
          'current-change': this.currentChangeEvent,
          'size-change': this.sizeChangeEvent
        }
      }) : null
    ])
  },
  methods: {
    ...methods,
    handleRowClassName ({ row }) {
      if (this.pendingRecords.some(item => item === row)) {
        return 'row--pending'
      }
      return ''
    },
    commitProxy (code) {
      let { proxyConfig = {}, tablePage } = this
      let { ajax, props = {} } = proxyConfig
      if (ajax) {
        switch (code) {
          case 'reload':
          case 'query':
            if (ajax.query) {
              this.tableLoading = true
              if (code === 'reload') {
                tablePage.currentPage = 1
                this.pendingRecords = []
              }
              return ajax.query({ page: tablePage }).then(result => {
                tablePage.total = XEUtils.get(result, props.total || 'page.total')
                this.tableData = XEUtils.get(result, props.data || 'result')
                this.tableLoading = false
              }).catch(e => {
                this.tableLoading = false
              })
            }
            break
          case 'delete':
            if (ajax.delete) {
              return this.validate().then(() => {
                let body = { removeRecords: this.getSelectRecords() }
                let { removeRecords } = body
                if (removeRecords.length) {
                  this.tableLoading = true
                  return ajax.delete({ body }).then(result => {
                    this.tableLoading = false
                  }).catch(e => {
                    this.tableLoading = false
                  }).then(() => this.commitProxy('reload'))
                } else {
                  // 请至少选择一条数据！
                }
              })
            }
            break
          case 'save':
            if (ajax.save) {
              return this.validate().then(() => {
                let body = Object.assign({ pendingRecords: this.pendingRecords }, this.getAllRecords())
                let { insertRecords, removeRecords, updateRecords, pendingRecords } = body
                if (insertRecords.length || removeRecords.length || updateRecords.length || pendingRecords.length) {
                  this.tableLoading = true
                  return ajax.save({ body }).then(result => {
                    this.tableLoading = false
                  }).catch(e => {
                    this.tableLoading = false
                  }).then(() => this.commitProxy('reload'))
                } else {
                  // 数据未更改！
                }
              })
            }
            break
        }
      }
      return this.$nextTick()
    },
    triggerPendingEvent (evnt) {
      let selectRecords = this.getSelectRecords()
      if (selectRecords.length) {
        let plus = []
        let minus = []
        selectRecords.forEach(data => {
          if (this.pendingRecords.some(item => data === item)) {
            minus.push(data)
          } else {
            plus.push(data)
          }
        })
        if (minus.length) {
          this.pendingRecords = this.pendingRecords.filter(item => minus.some(data => data !== item)).concat(plus)
        } else if (plus) {
          this.pendingRecords = this.pendingRecords.concat(plus)
        }
        this.clearSelection()
      } else {
        // 请至少选择一条数据！
      }
    },
    currentChangeEvent (currentPage) {
      this.tablePage.currentPage = currentPage
      this.commitProxy('query')
      UtilTools.emitEvent(this, 'current-page-change', [currentPage])
    },
    sizeChangeEvent (pageSize) {
      this.tablePage.currentPage = 1
      this.tablePage.pageSize = pageSize
      this.commitProxy('reload')
      UtilTools.emitEvent(this, 'page-size-change', [pageSize])
    }
  }
}
