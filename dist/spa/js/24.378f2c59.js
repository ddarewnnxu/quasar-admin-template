(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"088b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("co-dialog",{ref:"formDialog",attrs:{value:e.crud.status.cu>0,title:e.crud.status.title,"no-backdrop-dismiss":"","card-style":"width:800px; max-width:95vw;"},on:{"before-hide":e.crud.cancelCU}},[a("co-form",{ref:"form",staticClass:"q-pa-md row q-col-gutter-x-xl q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"center"}},[e.form.id?a("co-form-item",{staticClass:"col-12",attrs:{dense:"","form-label":"ID"}},[a("div",{staticClass:"q-mt-xs"},[e._v(e._s(e.form.id))])]):e._e(),a("co-input",{staticClass:"col-12 col-sm-6",attrs:{dense:"",outlined:"","form-label":"name",disable:!!e.crud.status.view,rules:[function(e){return e&&e.length>=3||"请输入3个以上字符"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"title"}})]},proxy:!0}]),model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("co-input",{staticClass:"col-12 col-sm-6",attrs:{dense:"",outlined:"","form-label":"fat",disable:!!e.crud.status.view},model:{value:e.form.fat,callback:function(t){e.$set(e.form,"fat",t)},expression:"form.fat"}})],1),a("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",flat:""}}),e.crud.status.view?e._e():a("q-btn",{attrs:{label:"保存",color:"primary",loading:e.crud.status.cu===e.crud.STATUS_PROCESSING,disable:e.crud.status.cu===e.crud.STATUS_PROCESSING},on:{click:e.crud.submitCU}})],1)],1),a("div",{staticClass:"row q-gutter-xs full-width q-pa-md"},[a("co-input",{staticClass:"col",attrs:{clearable:"",placeholder:"查询","input-class":"text-center"},on:{click:function(t){return e.$refs.searchPopup.show()},clear:function(t){return e.crud.resetQuery()}},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{dense:"",color:"primary",icon:"search",label:"查询"},on:{click:e.crud.toQuery}})]},proxy:!0}]),model:{value:e.queryModel,callback:function(t){e.queryModel=t},expression:"queryModel"}},[a("co-dialog",{ref:"searchPopup",attrs:{seamless:"","card-style":"width:700px; max-width:95vw;"}},[a("co-form",{ref:"searchform",staticClass:"q-pa-md row q-col-gutter-x-lg q-col-gutter-y-md",attrs:{"label-width":"small","label-align":"right"}},[a("co-input",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"名字",clearable:""},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),a("co-date-select",{staticClass:"col-12 col-sm-6",attrs:{"form-label":"date",placeholder:"日期单选",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}]),model:{value:e.query.dateSingle,callback:function(t){e.$set(e.query,"dateSingle",t)},expression:"query.dateSingle"}})],1),a("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"center"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"关闭",flat:""}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"查询",color:"primary",icon:"search",loading:e.crud.loading,disable:e.crud.loading},on:{click:e.crud.toQuery}})],1)],1)],1)],1),a("co-table",{ref:"table",attrs:{"row-key":"id",dense:"","sticky-last-column":"",data:e.crud.data,columns:e.crud.columns,"visible-columns":e.crud.visibleColumns,loading:e.crud.loading,selection:"multiple",selected:e.crud.selections},on:{"update:selected":function(t){return e.$set(e.crud,"selections",t)}},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"row q-col-gutter-x-md q-col-gutter-y-xs full-width"},[a("crud-operation",{attrs:{dense:"",permission:e.permission,"no-label":""}}),a("div",{staticClass:"col-auto"},[a("q-btn-dropdown",{staticClass:"btn-dropdown-hide-droparrow",attrs:{dense:"",color:"primary",icon:"apps","auto-close":""}},[a("crud-more",{attrs:{tableSlotTopProps:t}})],1)],1),a("q-space"),e.$q.screen.gt.xs?a("crud-pagination",{attrs:{dense:""}}):e._e()],1)]}},{key:"body-cell-action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("crud-row",{attrs:{data:t.row,"no-add":"",flat:"",type:"menu","label-menu":"操作",permission:e.permission}})],1)]}},e.$q.screen.gt.xs?null:{key:"pagination",fn:function(){return[a("crud-pagination")]},proxy:!0}],null,!0)})],1)},s=[],o=a("9523"),c=a.n(o),l=a("ded3"),n=a.n(l),i=(a("b64b"),a("a15b"),a("ffd2")),u=a("efb3"),d=a("cb5f"),p=a("7b05"),m=a("d3b8"),f=a("bcc3"),b=a("5ec7"),q={name:"PageCrudCustom2",components:{CrudOperation:u["a"],CrudMore:m["a"],CrudPagination:d["a"],CrudRow:p["a"]},cruds:function(){return Object(i["b"])({columns:b["a"],visibleColumns:b["d"],idField:"id",title:"演示",url:"api/demo",crudMethod:n()({},f["a"])})},mixins:[Object(i["f"])(),Object(i["d"])(),Object(i["c"])(b["c"]),Object(i["a"])()],data:function(){return{permission:{add:["admin","user:add"],edit:["admin","user:edit"],del:["admin","user:del"]},querysLabel:""}},mounted:function(){this.$refs.searchPopup.show(),this.$nextTick((function(){this.$refs.searchPopup.hide()}))},computed:{queryModel:{get:function(){for(var e=[],t=0,a=Object.keys(this.query);t<a.length;t++){var r=a[t],s=this.query[r];s&&e.push(s)}return e.join(", ")},set:function(e){}}},methods:c()({},i["b"].HOOK.beforeRefresh,(function(){console.log("pageCrud CRUD.HOOK.beforeRefresh")}))},y=q,g=a("2877"),h=a("0016"),w=a("4b7e"),v=a("9c40"),C=a("f20b"),x=a("2c91"),k=a("db86"),S=a("7f67"),O=a("eebe"),_=a.n(O),$=Object(g["a"])(y,r,s,!1,null,null,null);t["default"]=$.exports;_()($,"components",{QIcon:h["a"],QCardActions:w["a"],QBtn:v["a"],QBtnDropdown:C["a"],QSpace:x["a"],QTd:k["a"]}),_()($,"directives",{ClosePopup:S["a"]})}}]);