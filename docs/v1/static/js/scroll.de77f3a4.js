(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["scroll"],{4467:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",[t._v("虚拟滚动渲染，加载 10 万行 1 万列，左右固定列")]),l("p",[t._v("大数据不建议使用双向绑定的 "),l("table-api-link",{attrs:{name:"data"}}),t._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),l("table-api-link",{attrs:{prop:"loadData"}}),t._v("/"),l("table-api-link",{attrs:{prop:"loadColumn"}}),t._v(" 函数")],1),l("p",[t._v("对于多选 type="),l("table-column-api-link",{attrs:{prop:"selection"}}),t._v(" 当数据量海量时应该绑定 "),l("table-api-link",{attrs:{prop:"checkField"}}),t._v(" 属性渲染速度更快")],1),l("p",[t._v("数据超大情况下必须使用："),l("table-api-link",{attrs:{prop:"show-overflow"}}),t._v("，"),l("table-api-link",{attrs:{prop:"show-header-overflow"}}),t._v(" 参数以及调整好 "),l("table-api-link",{attrs:{prop:"optimization"}}),t._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),l("p",{staticClass:"red"},[t._v("注意：如果要启用横向虚拟滚动，所有的列宽度必须一致，否则无法兼容")]),l("vxe-grid",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","show-header-overflow":"",height:"600",loading:t.loading,"select-config":{checkField:"checked"},optimization:{scrollX:{gt:20,oSize:4,rSize:10},scrollY:{gt:500,oSize:20,rSize:60}}}})],1)},i=[],r={data:function(){return{loading:!1}},created:function(){var t=this;this.loading=!0,setTimeout(function(){var e=window.MOCK_DATA_LIST.slice(0,1e5),l=window.MOCK_COLUMN_LIST.slice(0,1e4);t.$refs.xTable&&(t.$refs.xTable.loadColumn(l),t.$refs.xTable.loadData(e)),t.loading=!1},300)}},o=r,n=l("2877"),d=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},"9b96":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",[t._v("虚拟滚动渲染，加载 1 万行 1 万列")]),l("p",[t._v("大数据不建议使用双向绑定的 "),l("table-api-link",{attrs:{name:"data"}}),t._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),l("table-api-link",{attrs:{prop:"loadData"}}),t._v("/"),l("table-api-link",{attrs:{prop:"loadColumn"}}),t._v(" 函数")],1),l("p",{staticClass:"red"},[t._v("注意：如果要启用横向虚拟滚动，所有的列宽度必须一致，否则无法兼容")]),l("vxe-grid",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","show-header-overflow":"",height:"300",loading:t.loading,"select-config":{checkField:"checked"},optimization:{scrollX:{gt:20,oSize:4,rSize:10},scrollY:{gt:500,oSize:10,rSize:30}}}})],1)},i=[],r={data:function(){return{loading:!1}},created:function(){var t=this;this.loading=!0,setTimeout(function(){var e=window.MOCK_DATA_LIST.slice(0,1e4),l=window.MOCK_COLUMN_LIST.slice(0,1e4).map(function(t){return Object.assign({},t,{fixed:void 0})});t.$refs.xTable&&(t.$refs.xTable.loadColumn(l),t.$refs.xTable.loadData(e)),t.loading=!1},500)}},o=r,n=l("2877"),d=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},ac09:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",[t._v("虚拟滚动渲染，加载 10 万行，左右固定列")]),l("p",[t._v("大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),l("table-api-link",{attrs:{prop:"loadData"}}),t._v("/"),l("table-api-link",{attrs:{prop:"reloadData"}}),t._v(" 函数")],1),l("p",[t._v("对于多选 type="),l("table-column-api-link",{attrs:{prop:"selection"}}),t._v(" 当数据量海量时应该绑定 "),l("table-api-link",{attrs:{prop:"checkField"}}),t._v(" 属性渲染速度更快")],1),l("p",[t._v("数据超大情况下必须使用："),l("table-api-link",{attrs:{prop:"show-overflow"}}),t._v("，"),l("table-api-link",{attrs:{prop:"show-header-overflow"}}),t._v(" 参数以及调整好 "),l("table-api-link",{attrs:{prop:"optimization"}}),t._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),l("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"600",loading:t.loading,"select-config":{checkField:"checked"},optimization:{scrollY:{gt:500,oSize:20,rSize:60}}}},[l("vxe-table-column",{attrs:{type:"selection",width:"60",fixed:"left"}}),l("vxe-table-column",{attrs:{type:"index",width:"100",fixed:"left"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200"}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex",width:"200"}}),l("vxe-table-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),l("vxe-table-column",{attrs:{field:"region",title:"Region",width:"200"}}),l("vxe-table-column",{attrs:{field:"time",title:"Time",width:"200"}}),l("vxe-table-column",{attrs:{field:"address",title:"Address",width:"300"}}),l("vxe-table-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr1",title:"Attr1",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr2",title:"Attr2",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr3",title:"Attr3",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr4",title:"Attr4",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr5",title:"Attr5",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr6",title:"Attr6",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr7",title:"Attr7",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr8",title:"Attr8",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr9",title:"Attr9",width:"200"}}),l("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"age",title:"Age",width:"200",fixed:"right"}})],1)],1)},i=[],r={data:function(){return{loading:!1}},created:function(){var t=this;this.loading=!0,setTimeout(function(){var e=window.MOCK_DATA_LIST.slice(0,1e5);t.$refs.xTable&&t.$refs.xTable.reloadData(e),t.loading=!1},300)}},o=r,n=l("2877"),d=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},bba7:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",[t._v("虚拟滚动渲染，加载 1 万行，左右固定列")]),l("p",[t._v("大数据不建议使用双向绑定的 "),l("table-api-link",{attrs:{name:"data"}}),t._v(" 属性（vue 监听会大数据会短暂的卡顿），建议使用 "),l("table-api-link",{attrs:{prop:"loadData"}}),t._v("/"),l("table-api-link",{attrs:{prop:"reloadData"}}),t._v(" 函数")],1),l("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"300",loading:t.loading,optimization:{scrollY:{gt:500,oSize:10,rSize:30}}}},[t._v(">\n    "),l("vxe-table-column",{attrs:{type:"index",width:"100"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200"}}),l("vxe-table-column",{attrs:{field:"age",title:"Age",width:"200"}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex",width:"200"}}),l("vxe-table-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),l("vxe-table-column",{attrs:{field:"region",title:"Region",width:"200"}}),l("vxe-table-column",{attrs:{field:"time",title:"Time",width:"200"}}),l("vxe-table-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}}),l("vxe-table-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr1",title:"Attr1",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr2",title:"Attr2",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr3",title:"Attr3",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr4",title:"Attr4",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr5",title:"Attr5",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr6",title:"Attr6",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr7",title:"Attr7",width:"200"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr8",title:"Attr8",width:"200"}}),l("vxe-table-column",{attrs:{field:"attr9",title:"Attr9",width:"200"}}),l("vxe-table-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1)],1)},i=[],r={data:function(){return{loading:!1}},created:function(){var t=this;this.loading=!0,setTimeout(function(){var e=window.MOCK_DATA_LIST.slice(0,1e4);t.$refs.xTable&&t.$refs.xTable.loadData(e),t.loading=!1},300)}},o=r,n=l("2877"),d=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},d291:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",[t._v("虚拟滚动渲染，只会渲染可视区域的数据，对于海量数据的性能提升非常大")]),l("p",[t._v("相关参数说明 {seq: 序号, $rowIndex: 获取渲染中的行索引, rowIndex: 获取真实的行索引, row: 获取行数据, column: 获取列配置, columnIndex: 获取真实列索引，$columnIndex:获取渲染中的列索引}")]),l("vxe-table",{attrs:{border:"","highlight-hover-row":"",height:"300",data:t.tableData},on:{"update:data":function(e){t.tableData=e}}},[l("vxe-table-column",{attrs:{type:"index",width:"100"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:""}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),l("vxe-table-column",{attrs:{field:"age",title:"Age"}}),l("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),l("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),l("pre",[t._v("    "),l("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),l("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")]),l("p",[t._v("高级配置项")]),l("p",[t._v("参数 "),l("table-api-link",{attrs:{prop:"scrollX"}}),t._v(": {gt: 16, oSize: 4, rSize: 10},"),l("table-api-link",{attrs:{prop:"scrollY"}}),t._v(": {gt: 500, oSize: 30, rSize: 80}，当数据量过大时请调整到适合的参数可以使渲染更快")],1),l("p",[t._v("数据超大情况下必须使用："),l("table-api-link",{attrs:{prop:"show-overflow"}}),t._v("，"),l("table-api-link",{attrs:{prop:"show-header-overflow"}}),t._v(" 参数以及调整好 "),l("table-api-link",{attrs:{prop:"optimization"}}),t._v(" ：{scrollX,scrollY} 适合的参数可以更加流畅")],1),l("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",height:"300"}},[l("vxe-table-column",{attrs:{type:"index",width:"100"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:""}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),l("vxe-table-column",{attrs:{field:"age",title:"Age"}}),l("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),l("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),l("pre",[t._v("    "),l("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[2]))]),t._v("\n    "),l("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[3]))]),t._v("\n  ")])],1)},i=[],r=(l("5df3"),l("1c4c"),l("ac6a"),l("1487")),o=l.n(r),n={data:function(){return{tableData:[],tableData2:[],demoCodes:['\n        <vxe-table\n          border\n          highlight-hover-row\n          height="300"\n          :data.sync="tableData">\n          <vxe-table-column type="index" width="100"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 200)\n          }\n        }\n        ",'\n        <vxe-table\n          ref="xTable"\n          border\n          show-overflow\n          height="300"\n          :data.sync="tableData2">\n          <vxe-table-column type="index" width="100"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData2: []\n            }\n          },\n          created () {\n            this.$nextTick(() => {\n              this.$refs.xTable.reloadData(window.MOCK_DATA_LIST.slice(0, 10000))\n            })\n          }\n        }\n        "]}},created:function(){var t=this;this.tableData=window.MOCK_DATA_LIST.slice(0,200),this.$nextTick(function(){t.$refs.xTable.reloadData(window.MOCK_DATA_LIST.slice(0,1e4))})},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(t){o.a.highlightBlock(t)})}},d=n,s=l("2877"),c=Object(s["a"])(d,a,i,!1,null,null,null);e["default"]=c.exports}}]);