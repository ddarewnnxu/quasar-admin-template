(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{a29b:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("co-table",{attrs:{"row-key":"id",stickyHeader:"",stickyLastColumn:"",data:e.data,columns:e.columns,"visible-columns":e.visibleColumns,selection:"multiple",selected:e.selected,fullscreen:e.tableFullscreen,loading:e.loading,"loading-spinner":"ios"},on:{"update:selected":function(l){e.selected=l},"update:fullscreen":function(l){e.tableFullscreen=l}},scopedSlots:e._u([{key:"top",fn:function(l){return[t("div",{staticClass:"row q-col-gutter-x-md q-col-gutter-y-xs full-width"},[t("co-input",{staticClass:"col",attrs:{standout:"",dense:"",clearable:"",placeholder:"查询","input-class":"text-center"},on:{click:function(l){return e.$refs.searchPopup.show()}},scopedSlots:e._u([{key:"after",fn:function(){return[t("q-btn",{attrs:{color:"primary",icon:"search"},on:{click:e.doQuery}}),t("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{"auto-close":"",color:"primary",icon:"apps"}},[t("div",{staticClass:"row no-wrap q-pa-sm"},[t("div",{staticClass:"column"},[t("q-btn",{attrs:{flat:"",label:"全屏",icon:l.inFullscreen?"fullscreen_exit":"fullscreen"},nativeOn:{click:function(t){return e.toggleTableFullscreen(l)}}}),t("q-separator"),e._l(e.columns,(function(l){return t("q-toggle",{key:l.name,attrs:{val:l.name,label:l.label},model:{value:e.visibleColumns,callback:function(l){e.visibleColumns=l},expression:"visibleColumns"}})}))],2)])])]},proxy:!0}],null,!0),model:{value:e.queryModel,callback:function(l){e.queryModel=l},expression:"queryModel"}},[t("co-dialog",{ref:"searchPopup",attrs:{"card-style":"width:700px; max-width:95vw;",loading:e.loading,"loading-spinner":"dots",square:"",seamless:""}},[t("co-form",{ref:"searchform",staticClass:"q-pa-md",attrs:{"label-width":"small","label-align":"right"}},[t("div",{staticClass:"row q-col-gutter-x-lg q-col-gutter-y-md"},[t("co-tree-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"TreeSingle",placeholder:"Tree单选",nodes:e.treeDatas(),"node-key":"id","label-key":"name",selectable:"",selected:e.query.selected,"filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:selected":function(l){return e.$set(e.query,"selected",l)},"selected-label":function(l){return e.querySelectedLabel=l}}}),t("co-input",{ref:"input1",staticClass:"col-12 col-sm-6",attrs:{"form-label":"名称很长怎么办",clearable:""},on:{blur:function(l){return e.$q.notify({message:"名称 blur notify"})}},model:{value:e.query.name,callback:function(l){e.$set(e.query,"name",l)},expression:"query.name"}}),t("co-tree-select",{ref:"treeInputMultiple",staticClass:"col-12",attrs:{"form-label":"Tree",placeholder:"Tree多选",nodes:e.treeDatas(),"node-key":"id","label-key":"name",ticked:e.query.ticked,"tick-strategy":"leaf-all-only-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-style":"width:300px; max-height:70vh;","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(l){return e.$set(e.query,"ticked",l)},"ticked-label":function(l){return e.queryTickedLabels=l}}}),t("co-input",{ref:"input2",staticClass:"col-12 col-sm-6",attrs:{outlined:"","form-label":"calories",label:"标签"},scopedSlots:e._u([{key:"append",fn:function(){return[e.query.calories?t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(l){e.query.calories=""}}}):t("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"before",fn:function(){return[t("q-icon",{attrs:{name:"expand_less"}})]},proxy:!0},{key:"after",fn:function(){return[t("q-icon",{attrs:{name:"add"}})]},proxy:!0}],null,!0),model:{value:e.query.calories,callback:function(l){e.$set(e.query,"calories",l)},expression:"query.calories"}}),t("co-input",{staticClass:"col-12 col-sm-6",attrs:{dense:"",outlined:"","form-label":"fat","lazy-rules":"",rules:[function(e){return!!e||"不能空"},function(e){return 11===e.length||"请输入11个字符"}]},model:{value:e.query.fat,callback:function(l){e.$set(e.query,"fat",l)},expression:"query.fat"}}),t("co-input",{ref:"input4",staticClass:"col-12 col-sm-6",attrs:{"form-label":"protein",filled:""},model:{value:e.query.protein,callback:function(l){e.$set(e.query,"protein",l)},expression:"query.protein"}}),t("co-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"sodium",outlined:!1},model:{value:e.query.sodium,callback:function(l){e.$set(e.query,"sodium",l)},expression:"query.sodium"}}),t("co-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"calcium",placeholder:"calcium"},model:{value:e.query.calcium,callback:function(l){e.$set(e.query,"calcium",l)},expression:"query.calcium"}}),t("co-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"iron",placeholder:"places",clearable:""},model:{value:e.query.iron,callback:function(l){e.$set(e.query,"iron",l)},expression:"query.iron"}}),t("co-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"单选map",placeholder:"选择","no-filter":"",options:e.mapOptions,"option-value":"id","option-label":"desc","filter-key-like":"letters","filter-key-equal":"id",clearable:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","emit-value":"","map-options":""},on:{"value-label":function(l){return e.querySelectSingleLabel=l}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"add"}})]},proxy:!0},{key:"after",fn:function(){return[t("q-icon",{attrs:{name:"menu"}})]},proxy:!0}],null,!0),model:{value:e.query.selectSingle,callback:function(l){e.$set(e.query,"selectSingle",l)},expression:"query.selectSingle"}}),t("co-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"单选list",clearable:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",placeholder:"选择巨头",options:e.listOptions},on:{"value-label":function(l){return e.querySelectSingleLabel=l}},model:{value:e.query.selectSingle,callback:function(l){e.$set(e.query,"selectSingle",l)},expression:"query.selectSingle"}}),t("co-field",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"options"},scopedSlots:e._u([{key:"control",fn:function(){return[t("div",{staticClass:"q-gutter-sm"},[t("q-radio",{attrs:{dense:"",name:"shape",val:"facebook",label:"Facebook"},model:{value:e.query.selectCompany,callback:function(l){e.$set(e.query,"selectCompany",l)},expression:"query.selectCompany"}}),t("q-radio",{attrs:{dense:"",name:"shape",val:"腾讯",label:"腾讯控股"},model:{value:e.query.selectCompany,callback:function(l){e.$set(e.query,"selectCompany",l)},expression:"query.selectCompany"}})],1)]},proxy:!0}],null,!0)}),t("co-input",{staticClass:"col-12 col-sm-6",attrs:{"label-align":"right",mask:"####-##-##",placeholder:"####-##-##","form-label":"dateinput"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}})]},proxy:!0}],null,!0),model:{value:e.query.date,callback:function(l){e.$set(e.query,"date",l)},expression:"query.date"}},[t("q-popup-proxy",{ref:"popupDateinput"},[t("co-date",{on:{input:function(l){return e.$refs.popupDateinput.hide()}},model:{value:e.query.date,callback:function(l){e.$set(e.query,"date",l)},expression:"query.date"}})],1)],1),t("co-date-select",{staticClass:"col-12",attrs:{"form-label":"date2",placeholder:"日期范围选","range-separator":" 至 ",clearable:"",range:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"event"}})]},proxy:!0}],null,!0),model:{value:e.query.dateRange,callback:function(l){e.$set(e.query,"dateRange",l)},expression:"query.dateRange"}}),t("co-date-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"date3",placeholder:"日期单选"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"event"}})]},proxy:!0}],null,!0),model:{value:e.query.dateSingle,callback:function(l){e.$set(e.query,"dateSingle",l)},expression:"query.dateSingle"}}),t("co-option-group",{staticClass:"col-12 col-sm-6",attrs:{inline:!0,"form-label":"optionsGroup",options:e.mapOptions,"option-label":"desc","option-value":"id"},on:{"value-label":function(l){return e.querySelectSingleLabel=l}},model:{value:e.query.selectSingle,callback:function(l){e.$set(e.query,"selectSingle",l)},expression:"query.selectSingle"}}),t("co-option-group",{staticClass:"col-12 col-sm-6",attrs:{inline:!0,"form-label":"optionsGroup",options:e.mapOptions,"option-label":"desc","option-value":"id",type:"checkbox"},on:{"value-label":function(l){return e.querySelectMultipleLabels=l}},model:{value:e.query.selectMultiple,callback:function(l){e.$set(e.query,"selectMultiple",l)},expression:"query.selectMultiple"}}),t("co-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"多选","no-filter":"",options:e.mapOptions,"option-value":"id","option-label":"desc","filter-key-like":"letters",clearable:"","use-input":"","input-debounce":"0","map-options":"",multiple:"","emit-value":""},on:{"value-label":function(l){return e.querySelectMultipleLabels=l}},model:{value:e.query.selectMultiple,callback:function(l){e.$set(e.query,"selectMultiple",l)},expression:"query.selectMultiple"}})],1)]),t("q-card-actions",{attrs:{align:"center"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"查询",type:"submit",color:"primary",icon:"search"},on:{click:e.doQuery}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"关闭",flat:""}})],1)],1)],1)],1)]}},{key:"body-cell-name",fn:function(e){return[t("q-td",{attrs:{props:e}},[t("div",[t("q-badge",{attrs:{color:"purple",label:e.value}})],1)])]}},{key:"pagination",fn:function(){return[t("q-pagination",{attrs:{max:500,"direction-links":!0,"boundary-links":!1,input:"","input-class":"text-orange-10"},model:{value:e.currentPage,callback:function(l){e.currentPage=l},expression:"currentPage"}}),t("q-select",{attrs:{dense:"","options-dense":"",borderless:"",flat:"",options:e.numberPerPageOptions,"emit-value":"","map-options":""},model:{value:e.numberPerPage,callback:function(l){e.numberPerPage=l},expression:"numberPerPage"}})]},proxy:!0}])})],1)},n=[],o=(t("b64b"),t("a15b"),t("486f")),s=t("5ec7"),r=t("38cc"),c={name:"PageSearchDialog",data:function(){return{query:{name:"小明",selected:7,ticked:[7,49],selectSingle:"facebook",selectMultiple:["twitter","apple"]},querySelectedLabel:"",queryTickedLabels:null,querySelectSingleLabel:null,querySelectMultipleLabels:null,shape:"",selectModel:"",selectModels:[],selectDate:"",selectDateRange:{from:"2020-11-14",to:"2020-11-22"},listOptions:r["a"],mapOptions:r["b"],currentPage:0,numberPerPage:10,numberPerPageOptions:[{label:"10/页",value:10},{label:"20/页",value:20},{label:"30/页",value:30},{label:"40/页",value:40},{label:"50/页",value:50},{label:"100/页",value:100}],loading:!1,selected:[],tableFullscreen:null,visibleColumns:s["d"],columns:s["a"],data:s["b"]}},watch:{},created:function(){},mounted:function(){this.$refs.searchPopup.show(),this.$nextTick((function(){this.$refs.searchPopup.hide()}))},computed:{queryModel:{get:function(){for(var e=[],l=0,t=Object.keys(this.query);l<t.length;l++){var a=t[l];if("selected"===a)this.querySelectedLabel&&e.push(this.querySelectedLabel);else if("ticked"===a)this.queryTickedLabels&&e.push("["+this.queryTickedLabels.join(",")+"]");else if("dateRange"===a){var n=this.query[a];n&&e.push("["+n.join(",")+"]")}else if("selectSingle"===a)this.querySelectSingleLabel&&e.push(this.querySelectSingleLabel);else if("selectMultiple"===a)this.querySelectMultipleLabels&&e.push("["+this.querySelectMultipleLabels.join(",")+"]");else{var o=this.query[a];o&&e.push(o)}}return e.join(", ")},set:function(e){if(!e){this.querySelectedLabel=null,this.queryTickedLabels=null,this.querySelectSingleLabel=null,this.querySelectMultipleLabels=null;for(var l=0,t=Object.keys(this.query);l<t.length;l++){var a=t[l];this.query[a]=null}}}}},methods:{doQuery:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),1e3)},treeDatas:function(){return o["a"].content},rowLooooooongButtonClick:function(){this.$q.notify({type:"positive",message:"rowLooooooongButtonClick"})},toggleTableFullscreen:function(e){var l=this;e.toggleFullscreen(),this.$nextTick((function(){console.log("tableFullscreen=",l.tableFullscreen)}))}}},i=c,u=t("2877"),p=t("9c40"),d=t("f20b"),b=t("eb85"),y=t("9564"),f=t("0016"),m=t("3786"),q=t("7cbe"),g=t("4b7e"),k=t("db86"),v=t("58a8"),h=t("3b16"),x=t("ddd8"),S=t("7f67"),C=t("eebe"),w=t.n(C),$=Object(u["a"])(i,a,n,!1,null,null,null);l["default"]=$.exports;w()($,"components",{QBtn:p["a"],QBtnDropdown:d["a"],QSeparator:b["a"],QToggle:y["a"],QIcon:f["a"],QRadio:m["a"],QPopupProxy:q["a"],QCardActions:g["a"],QTd:k["a"],QBadge:v["a"],QPagination:h["a"],QSelect:x["a"]}),w()($,"directives",{ClosePopup:S["a"]})}}]);