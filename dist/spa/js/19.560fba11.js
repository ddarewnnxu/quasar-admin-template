(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"73ad":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("co-card",{staticClass:"row q-ma-none q-pa-md q-gutter-md"},[a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"leaf（只有叶子节点）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.popupTreeTicked,expanded:e.popupTreeExpanded,"tick-strategy":"leaf","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){e.popupTreeTicked=t},"update:expanded":function(t){e.popupTreeExpanded=t},"ticked-label":function(t){return e.popupTreeTickedLabels=t}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.popupTreeTicked))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.popupTreeTickedLabels))]),a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"strict（选谁是谁）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked1,"tick-strategy":"strict","filter-key-like":"nameLetter","filter-key-equal":"id","tree-style":"width:350px; max-height:60vh;","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked1",t)},"ticked-label":function(t){return e.$set(e.tree,"ticked1Labels",t)}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked1))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked1Labels))]),a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"leaf-any-with-parent（任意叶子节点选中就包含父节点）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked2,"tick-strategy":"leaf-any-with-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:"","no-ticked-expand":""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked2",t)},"ticked-label":function(t){return e.$set(e.tree,"ticked2Labels",t)}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked2))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked2Labels))]),a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"leaf-all-only-parent（选中所有叶子节点就只包含父节点）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked3,"tick-strategy":"leaf-all-only-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked3",t)},"ticked-label":function(t){return e.$set(e.tree,"ticked3Labels",t)}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked3))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked3Labels))]),a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"leaf-all-with-parent（选中所有叶子节点就包含父节点）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,ticked:e.tree.ticked4,"tick-strategy":"leaf-all-with-parent","filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:""},on:{"update:ticked":function(t){return e.$set(e.tree,"ticked4",t)},"ticked-label":function(t){return e.$set(e.tree,"ticked4Labels",t)}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked4))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.ticked4Labels))]),a("co-tree-select",{staticClass:"col-5",attrs:{placeholder:"（单选）",dense:"","node-key":"id","label-key":"name",nodes:e.treeDatas,selected:e.tree.selected1,"filter-key-like":"nameLetter","filter-key-equal":"id","tree-class":"q-pa-sm",clearable:"",selectable:""},on:{"update:selected":function(t){return e.$set(e.tree,"selected1",t)},"selected-label":function(t){return e.$set(e.tree,"selected1Label",t)}}}),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.selected1))]),a("div",{staticClass:"col-3"},[e._v(e._s(e.tree.selected1Label))])],1)],1)},s=[],c=a("486f"),r={name:"PageTreeSelect",data:function(){return{popupTreeExpanded:[],popupTreeTicked:[46],popupTreeTickedLabels:null,tree:{ticked1:[46],ticked2:[5,19],ticked3:[5],selected1:45}}},mounted:function(){},computed:{treeDatas:function(){return c["a"].content}},watch:{popupTreeExpanded:function(e){console.log("pageTreeSelect.popupTreeExpanded",this.popupTreeExpanded)},popupTreeTicked:function(e){console.log("pageTreeSelect.popupTreeTicked",this.popupTreeTicked)}},methods:{}},i=r,d=a("2877"),n=Object(d["a"])(i,l,s,!1,null,null,null);t["default"]=n.exports}}]);