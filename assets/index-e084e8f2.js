import F from"./more-3055beee.js";import{d as x,r as B,N as S,h as n,o as l,e as c,w as a,a as d,i as m,t as o,b as _,c as I,F as P,q as V,u as q,g as D}from"./index-c831df68.js";const M={class:"list-card-item_detail--name"},j={class:"list-card-item_detail--desc"},z={class:"list-card-item_detail--desc"},A={name:"ProductCard"},E=x({...A,props:{product:{type:Object}},emits:["manage-product","delete-item","update-status"],setup(f,{emit:k}){const v=f,e=B(v.product),u=k,b=t=>{u("manage-product",t)},h=t=>{u("delete-item",t)},i=t=>{u("update-status",t)};return S(()=>v.product,t=>{e.value=t}),(t,s)=>{const g=n("t-avatar"),p=n("t-tag"),C=n("t-avatar-group"),y=n("t-button"),N=n("t-dropdown"),$=n("t-card");return l(),c($,{theme:"poster2",bordered:!1},{avatar:a(()=>[d(g,{size:"56px",image:e.value.titleImg},null,8,["image"])]),status:a(()=>[e.value.statusFlag===1?(l(),c(p,{key:0,theme:"success",onClick:s[0]||(s[0]=r=>i(e.value))},{default:a(()=>[m(o(t.$t("components.isSetup.on")),1)]),_:1})):e.value.statusFlag===2?(l(),c(p,{key:1,theme:"primary",onClick:s[1]||(s[1]=r=>i(e.value))},{default:a(()=>[m(o(t.$t("components.isSetup.stop")),1)]),_:1})):(l(),c(p,{key:2,theme:"warning",onClick:s[2]||(s[2]=r=>i(e.value))},{default:a(()=>[m(o(t.$t("components.isSetup.off")),1)]),_:1}))]),content:a(()=>[_("p",M,o(e.value.name),1),_("p",j,o(t.$t("pages.dollModel.batchNo"))+o(e.value.batchNumber?e.value.batchNumber:"NAN"),1),_("p",z,o(e.value.remarks),1)]),footer:a(()=>[d(C,{cascading:"left-up",max:4},{default:a(()=>[(l(!0),I(P,null,V(e.value.deviceImgs,(r,w)=>(l(),c(g,{key:w,image:r.img},null,8,["image"]))),128))]),_:1})]),actions:a(()=>[d(N,{disabled:e.value.statusFlag===1,trigger:"click",options:[{content:t.$t("components.manage"),value:"manage",onClick:()=>b(e.value)},{content:t.$t("components.delete"),value:"delete",onClick:()=>h(e.value)}]},{default:a(()=>[d(y,{theme:"default",disabled:e.value.statusFlag===1,shape:"square",variant:"text"},{default:a(()=>[d(q(F))]),_:1},8,["disabled"])]),_:1},8,["disabled","options"])]),_:1})}}});const T=D(E,[["__scopeId","data-v-e4e8a340"]]);export{T as P};
