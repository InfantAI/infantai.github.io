import{c as q,d as O,e as E}from"./doll-d764c19c.js";import{P as Z}from"./index-c9cd5c64.js";import{I as h,_ as G}from"./DialogForm.vue_vue_type_script_setup_true_lang-a28ec07f.js";import{d as H,r as n,j as J,C as K,h as u,o as c,c as m,b as f,a as o,w as r,i as z,t as Q,e as x,u as R,Z as W,I as S,F as V,q as X,M as C,g as Y}from"./index-a2c26395.js";import"./more-744ece83.js";import"./getAuth-b2761d3a.js";const ee={class:"list-card-operation"},ae={class:"search-input"},te={class:"list-card-items"},le={class:"list-card-pagination"},oe={key:1,class:"list-card-loading"},ne={name:"ListCard"},se=H({...ne,setup(ue){const a=n({current:1,pageSize:12,total:0}),i=n(void 0),y=n([]),v=n(!0),s=async()=>{try{v.value=!0;const e=await q({language:"",page:{pageIndex:a.value.current,pageSize:a.value.pageSize},query:{model:g.value}});y.value=e.content,a.value={...a.value,total:e.totalCount}}catch(e){console.log(e)}finally{v.value=!1}},D=J(()=>i.value?`确认删除后${i.value.name}的所有产品信息将被清空, 且无法恢复`:"");K(()=>{s()});const p=n(!1),g=n(""),_=n(!1),d=n({...h}),k=e=>{a.value.pageSize=e,a.value.current=1,s()},w=e=>{a.value.current=e,s()},I=e=>{_.value=!0,i.value=e},M=async()=>{console.log("deleteProduct.value",i.value),await O(i.value.id).then(()=>{C.success("删除成功"),s()}).catch(e=>{console.log(e),C.error(e.message)}).finally(()=>{_.value=!1})},P=()=>{i.value=void 0,d.value={...h}},U=e=>{p.value=!0,Object.assign(d.value,e),console.log(d.value)},B=()=>{p.value=!0,Object.assign(d.value,h)},L=async e=>{let t=0;e.statusFlag===1?t=2:t=1,console.log("product",e),await E(e.id,t),await s(),C.success("启用成功")};return(e,t)=>{const b=u("t-button"),N=u("t-input"),$=u("t-col"),F=u("t-row"),j=u("t-pagination"),A=u("t-loading"),T=u("t-dialog");return c(),m("div",null,[f("div",ee,[o(b,{onClick:B},{default:r(()=>[z(Q(e.$t("pages.dollModel.create")),1)]),_:1}),f("div",ae,[o(N,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),placeholder:e.$t("pages.dollModel.placeholder"),clearable:""},{"suffix-icon":r(()=>[g.value===""?(c(),x(R(W),{key:0,size:"var(--td-comp-size-xxxs)"})):S("",!0)]),_:1},8,["modelValue","placeholder"]),o(b,{class:"searchBtn",onClick:s},{default:r(()=>[z("确定")]),_:1})])]),o(G,{visible:p.value,"onUpdate:visible":t[1]||(t[1]=l=>p.value=l),data:d.value,onFetchData:s},null,8,["visible","data"]),a.value.total>0&&!v.value?(c(),m(V,{key:0},[f("div",te,[o(F,{gutter:[16,16]},{default:r(()=>[(c(!0),m(V,null,X(y.value.slice(a.value.pageSize*(a.value.current-1),a.value.pageSize*a.value.current),l=>(c(),x($,{key:l.index,lg:4,xs:6,xl:3},{default:r(()=>[o(Z,{class:"list-card-item",product:l,onDeleteItem:I,onManageProduct:U,onUpdateStatus:L},null,8,["product"])]),_:2},1024))),128))]),_:1})]),f("div",le,[o(j,{modelValue:a.value.current,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.current=l),"page-size":a.value.pageSize,"onUpdate:pageSize":t[3]||(t[3]=l=>a.value.pageSize=l),total:a.value.total,"page-size-options":[12,24,36],onPageSizeChange:k,onCurrentChange:w},null,8,["modelValue","page-size","total"])])],64)):v.value?(c(),m("div",oe,[o(A,{size:"large",text:e.$t("pages.dollModel.loading")},null,8,["text"])])):S("",!0),o(T,{visible:_.value,"onUpdate:visible":t[4]||(t[4]=l=>_.value=l),header:e.$t("pages.dollModel.deleteConfirm"),body:D.value,"on-cancel":P,onConfirm:M},null,8,["visible","header","body"])])}}});const ge=Y(se,[["__scopeId","data-v-8d29683a"]]);export{ge as default};
