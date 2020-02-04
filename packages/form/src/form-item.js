import VXETable from '../../v-x-e-table'
import { UtilTools } from '../../tools'
import GlobalConfig from '../../conf'

function renderPrefixIcon (h, titlePrefix) {
  return h('span', {
    class: 'vxe-form--item-title-prefix'
  }, [
    h('i', {
      class: titlePrefix.icon || GlobalConfig.icon.formPrefix
    })
  ])
}

function renderTitle (h, _vm) {
  const { title, titlePrefix } = _vm
  const titles = []
  if (titlePrefix) {
    titles.push(
      titlePrefix.message
        ? h('vxe-tooltip', {
          props: {
            content: titlePrefix.message,
            enterable: titlePrefix.enterable
          }
        }, [
          renderPrefixIcon(h, titlePrefix)
        ])
        : renderPrefixIcon(h, titlePrefix)
    )
  }
  titles.push(
    h('span', {
      class: 'vxe-form--item-title-label'
    }, UtilTools.getFuncText(title))
  )
  return titles
}

export default {
  name: 'VxeFormItem',
  props: {
    title: String,
    field: String,
    size: String,
    span: [String, Number],
    align: String,
    titleAlign: String,
    titleWidth: [String, Number],
    titlePrefix: Object,
    resetValue: { default: null },
    folding: Boolean,
    collapseNode: Boolean,
    itemRender: Object
  },
  inject: {
    $vxeform: {
      default: null
    }
  },
  data () {
    return {
      showError: false,
      showRule: null
    }
  },
  computed: {
    vSize () {
      return this.size || this.$parent.size || this.$parent.vSize
    },
    isRequired () {
      const { $vxeform, field } = this
      if ($vxeform && $vxeform.rules) {
        const rules = $vxeform.rules[field]
        if (rules) {
          return rules.some(rule => rule.required)
        }
      }
      return false
    },
    errRule () {
      const { $vxeform, field } = this
      if ($vxeform) {
        return $vxeform.invalids.find(({ property }) => field === property)
      }
      return null
    }
  },
  watch: {
    errRule (value) {
      clearTimeout(this.showErrTimeout)
      this.showError = false
      if (value) {
        this.showRule = value.rule
        this.$nextTick(() => {
          this.showError = true
        })
      } else {
        this.showErrTimeout = setTimeout(() => {
          this.showRule = null
        }, 350)
      }
    }
  },
  render (h) {
    const { $scopedSlots, $vxeform, title, folding, field, collapseNode, itemRender, isRequired, showError, showRule } = this
    const compConf = itemRender ? VXETable.renderer.get(itemRender.name) : null
    const span = this.span || $vxeform.span
    const align = this.align || $vxeform.align
    const titleAlign = this.titleAlign || $vxeform.titleAlign
    const titleWidth = this.titleWidth || $vxeform.titleWidth
    const collapseAll = $vxeform.collapseAll
    return h('div', {
      class: ['vxe-form--item', span ? `vxe-col--${span} is--span` : null, {
        'is--title': title,
        'is--hidden': folding && collapseAll,
        'is--required': isRequired,
        'is--error': showError
      }]
    }, [
      h('div', {
        class: 'vxe-form--item-inner'
      }, [
        title ? h('div', {
          class: ['vxe-form--item-title', titleAlign ? `align--${titleAlign}` : null],
          style: titleWidth ? {
            width: isNaN(titleWidth) ? titleWidth : `${titleWidth}px`
          } : null
        }, renderTitle(h, this)) : null,
        h('div', {
          class: ['vxe-form--item-content', align ? `align--${align}` : null]
        }, (compConf && compConf.renderItem ? compConf.renderItem.call(this, h, itemRender, { data: $vxeform.data, property: field, $form: $vxeform }, { $form: $vxeform }) : ($scopedSlots.default ? $scopedSlots.default.call(this) : [])).concat(
          [
            collapseNode ? h('div', {
              class: 'vxe-form--item-trigger-node',
              on: {
                click: this.toggleCollapseEvent
              }
            }, [
              h('span', {
                class: 'vxe-form--item-trigger-text'
              }, collapseAll ? GlobalConfig.i18n('vxe.form.unfolding') : GlobalConfig.i18n('vxe.form.folding')),
              h('i', {
                class: ['vxe-form--item-trigger-icon', collapseAll ? GlobalConfig.icon.formFolding : GlobalConfig.icon.formUnfolding]
              })
            ]) : null,
            showRule ? h('div', {
              class: 'vxe-form--item-valid',
              style: showRule.maxWidth ? {
                width: `${showRule.maxWidth}px`
              } : null
            }, showRule.message) : null
          ])
        )
      ])
    ])
  },
  methods: {
    toggleCollapseEvent (evnt) {
      this.$vxeform.$emit('toggle-collapse', { data: this.$vxeform.data }, evnt)
      this.$vxeform.toggleCollapse()
    }
  }
}
