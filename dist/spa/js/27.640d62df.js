(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{f640:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("co-dialog",{ref:"formDialog",attrs:{value:t.crud.status.cu>0,title:t.crud.status.title,"no-backdrop-dismiss":"","card-style":"width:600px; max-width:95vw;"},on:{"before-hide":t.crud.cancelCU}},[r("co-form",{ref:"form",staticClass:"q-pa-md row q-col-gutter-x-xl q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"center"}},[t.form.id?r("co-form-item",{staticClass:"col-12",attrs:{dense:"","form-label":"ID"}},[r("div",{staticClass:"q-mt-sm"},[t._v(t._s(t.form.id))])]):t._e(),r("co-input",{staticClass:"col-12",attrs:{dense:"","form-label":"名称",disable:!!t.crud.status.view,rules:[function(t){return t&&t.length>=3||"请输入3个以上字符"}]},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),r("co-input",{staticClass:"col-12",attrs:{dense:"","form-label":"描述",disable:!!t.crud.status.view,rules:[function(t){return t&&t.length>=3||"请输入3个以上字符"}]},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),r("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",flat:""}}),t.crud.status.view?t._e():r("q-btn",{attrs:{label:"保存",color:"primary",loading:t.crud.status.cu===t.crud.STATUS_PROCESSING,disable:t.crud.status.cu===t.crud.STATUS_PROCESSING},on:{click:t.crud.submitCU}})],1)],1),r("q-splitter",{attrs:{unit:"px",horizontal:t.$q.screen.xs,"separator-style":"background-color: transparent"},scopedSlots:t._u([{key:"before",fn:function(){return[r("co-table",{ref:"table",class:t.$q.screen.gt.xs?"q-mr-sm":"",attrs:{"row-key":"id",dense:"",data:t.crud.data,columns:t.crud.columns,"visible-columns":t.crud.visibleColumns,title:t.crud.title,loading:t.crud.loading,selected:t.crud.selections},on:{"update:selected":function(e){return t.$set(t.crud,"selections",e)},"row-click":t.dictRowClick},scopedSlots:t._u([{key:"top-right",fn:function(e){return[r("div",{staticClass:"row q-col-gutter-x-sm q-col-gutter-y-xs q-px-sm q-py-sm full-width"},[r("co-input",{staticClass:"col-auto",attrs:{placeholder:"名称、描述","content-style":"width:140px",clearable:"",dense:""},on:{clear:function(e){return t.crud.toQuery()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.crud.toQuery()}},model:{value:t.query.blurry,callback:function(e){t.$set(t.query,"blurry",e)},expression:"query.blurry"}}),r("div",{staticClass:"col-auto"},[r("q-btn",{attrs:{dense:"",color:"primary",icon:"search"},on:{click:function(e){return t.crud.toQuery()}}})],1),r("q-space"),r("crud-operation",{attrs:{permission:t.permission,"no-view":"","no-edit":"","no-label":"",dense:""}}),r("div",{staticClass:"col-auto"},[r("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{dense:"",color:"primary",icon:"apps","auto-close":""}},[r("crud-more",{attrs:{tableSlotTopProps:e}})],1)],1)],1)]}},{key:"body-cell-action",fn:function(e){return[r("q-td",{attrs:{props:e}},[r("crud-row",{attrs:{data:e.row,"no-icon":"","no-add":"",flat:"",permission:t.permission,type:t.$q.screen.gt.xs?"button":"menu"}})],1)]}},{key:"pagination",fn:function(){return[r("crud-pagination",{attrs:{"no-persistence-page-size":""}})]},proxy:!0}])})]},proxy:!0},t.$q.screen.xs?{key:"separator",fn:function(){return[r("q-avatar",{attrs:{color:"primary","text-color":"white",size:"35px",icon:"height"}})]},proxy:!0}:null,{key:"after",fn:function(){return[r("dict-detail",{ref:"dictDetail",class:t.$q.screen.gt.xs?"q-ml-sm":""})]},proxy:!0}],null,!0),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1)},a=[],n=r("9523"),o=r.n(n),s=r("ded3"),l=r.n(s),c=(r("b0c0"),r("ffd2")),d=r("efb3"),u=r("cb5f"),m=r("7b05"),f=r("d3b8"),p=(r("d3b7"),r("e6cf"),r("4328")),b=r.n(p);function y(t){return console.log("api dict add.data:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}function g(t){return console.log("api dict del.ids:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}function v(t){return console.log("api dict edit.data:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}var w={add:y,edit:v,del:g},q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("co-dialog",{ref:"formDialog",attrs:{value:t.crud.status.cu>0,title:t.crud.status.title,"no-backdrop-dismiss":"","content-style":"width:600px; max-width:95vw;"},on:{"before-hide":t.crud.cancelCU}},[r("co-form",{ref:"form",staticClass:"q-pa-md row q-col-gutter-x-xl q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"center"}},[t.form.id?r("co-form-item",{staticClass:"col-12",attrs:{dense:"","form-label":"ID"}},[r("div",{staticClass:"q-mt-sm"},[t._v(t._s(t.form.id))])]):t._e(),r("co-input",{staticClass:"col-12",attrs:{dense:"","form-label":"标签",disable:!!t.crud.status.view,rules:[function(t){return t&&t.length>=3||"请输入3个以上字符"}]},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"title"}})]},proxy:!0}]),model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),r("co-input",{staticClass:"col-12",attrs:{dense:"","form-label":"value",disable:!!t.crud.status.view,rules:[function(t){return!!t||"必填"}]},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}}),r("co-input",{staticClass:"col-12",attrs:{dense:"","form-label":"sort",disable:!!t.crud.status.view},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),r("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",flat:""}}),t.crud.status.view?t._e():r("q-btn",{attrs:{label:"保存",color:"primary",loading:t.crud.status.cu===t.crud.STATUS_PROCESSING,disable:t.crud.status.cu===t.crud.STATUS_PROCESSING},on:{click:t.crud.submitCU}})],1)],1),r("co-table",{ref:"table",attrs:{"row-key":"id",dense:"",data:t.crud.data,columns:t.crud.columns,"visible-columns":t.crud.visibleColumns,title:t.query.dictName,loading:t.crud.loading,"loading-delay":300,selection:"multiple",selected:t.crud.selections},on:{"update:selected":function(e){return t.$set(t.crud,"selections",e)},"row-click":function(e,r,i){return t.crud.selections=[r]}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[r("div",{staticClass:"row q-col-gutter-x-sm q-col-gutter-y-xs q-px-sm q-py-sm full-width"},[r("co-input",{staticClass:"col-auto",attrs:{placeholder:"标签、值","content-style":"width:140px",dense:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.crud.toQuery.apply(null,arguments)}},model:{value:t.query.blurry,callback:function(e){t.$set(t.query,"blurry",e)},expression:"query.blurry"}}),r("div",{staticClass:"col-auto"},[r("q-btn",{attrs:{dense:"",color:"primary",icon:"search"},on:{click:t.crud.toQuery}})],1),r("q-space"),r("crud-operation",{attrs:{dense:"",permission:t.permission,"no-add":!t.dictId,"no-view":"","no-edit":"","no-label":""}}),r("div",{staticClass:"col-auto"},[r("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{dense:"",color:"primary",icon:"apps","auto-close":""}},[r("crud-more",{attrs:{tableSlotTopProps:e}})],1)],1)],1)]}},{key:"body-cell-action",fn:function(e){return[r("q-td",{attrs:{props:e}},[r("crud-row",{attrs:{data:e.row,"data-add":{sort:e.row.sort+10},flat:"",permission:t.permission,type:t.$q.screen.gt.xs?"button":"menu"}})],1)]}},{key:"pagination",fn:function(){return[r("crud-pagination",{attrs:{"no-persistence-page-size":"","no-page-if-only-one-page":""}})]},proxy:!0}])})],1)},C=[];r("cca6");function k(t){return console.log("api dictDetail add.data:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}function h(t){return console.log("api dictDetail del.ids:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}function x(t){return console.log("api dictDetail edit.data:",b.a.stringify(t,{indices:!1})),new Promise((function(t,e){setTimeout((function(){t({})}),700)}))}var O,D={add:k,edit:x,del:h},S=[{name:"id",field:"id",label:"ID"},{name:"label",field:"label",label:"标签",required:!0,align:"left",format:function(t){return"".concat(t)},sortable:!0},{name:"value",label:"值",field:"value",align:"left"},{name:"sort",label:"排序",field:"sort",align:"left"},{name:"action",label:"操作",align:"center"}],$=["label","value","sort","action"],_={id:null,label:null,value:null,sort:10},P={name:"PageCrudDictDetail",components:{CrudOperation:d["a"],CrudMore:f["a"],CrudPagination:u["a"],CrudRow:m["a"]},cruds:function(){return Object(c["b"])({columns:S,visibleColumns:$,idField:"id",query:{dictName:"",dictId:null},title:"字典详情",sort:["sort,asc","id,desc"],url:"api/dict-detail",crudMethod:l()({},D),queryOnPresenterCreated:!1})},mixins:[Object(c["f"])(),Object(c["d"])(),Object(c["c"])((function(){return Object.assign({dict:{id:this.dictId}},_)})),Object(c["a"])()],data:function(){return{permission:{add:["admin","dict:add"],edit:["admin","dict:edit"],del:["admin","dict:del"]},dictId:null}}},Q=P,T=r("2877"),I=r("0016"),j=r("4b7e"),N=r("9c40"),R=r("2c91"),E=r("f20b"),U=r("db86"),A=r("7f67"),z=r("eebe"),B=r.n(z),G=Object(T["a"])(Q,q,C,!1,null,null,null),M=G.exports;B()(G,"components",{QIcon:I["a"],QCardActions:j["a"],QBtn:N["a"],QSpace:R["a"],QBtnDropdown:E["a"],QTd:U["a"]}),B()(G,"directives",{ClosePopup:A["a"]});var F=[{name:"id",field:"id",label:"ID"},{name:"name",field:"name",label:"名称",required:!0,align:"left",format:function(t){return"".concat(t)},sortable:!0},{name:"remark",label:"描述",field:"remark",align:"left"},{name:"action",label:"操作",align:"center"}],J=["name","remark","action"],H={id:null,name:null,remark:null,dictDetails:[]},K={name:"PageCrudDict",components:{CrudOperation:d["a"],CrudMore:f["a"],CrudPagination:u["a"],CrudRow:m["a"],DictDetail:M},cruds:function(){return Object(c["b"])({columns:F,visibleColumns:J,idField:"id",title:"字典列表",url:"api/dict",crudMethod:l()({},w)})},mixins:[Object(c["f"])(),Object(c["d"])(),Object(c["c"])(H),Object(c["a"])()],data:function(){return{splitter:600,permission:{add:["admin","dict:add"],edit:["admin","dict:edit"],del:["admin","dict:del"]}}},watch:{"$q.screen.gt.xs":function(t){this.splitter=t?600:250}},methods:(O={},o()(O,c["b"].HOOK.beforeRefresh,(function(){return this.$refs.dictDetail&&(this.$refs.dictDetail.dictId=null,this.$refs.dictDetail.query.dictName=""),!0})),o()(O,"dictRowClick",(function(t,e,r){this.crud.selections=[e],this.$refs.dictDetail.dictId=e.id,this.$refs.dictDetail.query.dictId=e.id,this.$refs.dictDetail.query.dictName=e.name,this.$refs.dictDetail.crud.toQuery()})),O)},L=K,V=r("8562"),W=r("cb32"),X=Object(T["a"])(L,i,a,!1,null,null,null);e["default"]=X.exports;B()(X,"components",{QCardActions:j["a"],QBtn:N["a"],QSplitter:V["a"],QSpace:R["a"],QBtnDropdown:E["a"],QTd:U["a"],QAvatar:W["a"]}),B()(X,"directives",{ClosePopup:A["a"]})}}]);