import g from"./more-62e8cfc4.js";import{d as C,r as b,N as k,h as s,o as S,e as w,w as a,a as o,i as N,t as n,b as d,u as $,g as y}from"./index-a2efab08.js";const T={class:"list-card-item_detail--name"},B={class:"list-card-item_detail--desc"},I={class:"list-card-item_detail--desc"},V=C({__name:"IQTestCard",props:{product:{type:Object}},emits:["manage-product","delete-item","change-status"],setup(i,{emit:p}){const l=i,t=b(l.product),c=p,r=e=>{c("manage-product",e)},u=e=>{c("change-status",e)},_=e=>{c("delete-item",e)};return k(()=>l.product,e=>{t.value=e}),(e,x)=>{const m=s("t-tag"),h=s("t-button"),f=s("t-dropdown"),v=s("t-card");return S(),w(v,{theme:"poster2",bordered:!1},{status:a(()=>[o(m,{theme:t.value.isSetup?"success":"default",onClick:u},{default:a(()=>[N(n(t.value.isSetup?e.$t("components.isSetup.on"):e.$t("components.isSetup.off")),1)]),_:1},8,["theme"])]),content:a(()=>[d("p",T,n(t.value.name),1),d("p",B,n(e.$t("pages.dollModel.batchNo")+t.value.name),1),d("p",I,n(t.value.description),1)]),actions:a(()=>[o(f,{disabled:!t.value.isSetup,trigger:"click",options:[{content:e.$t("components.manage"),value:"manage",onClick:()=>r(t.value)},{content:e.$t("components.delete"),value:"delete",onClick:()=>_(t.value)}]},{default:a(()=>[o(h,{theme:"default",disabled:!t.value.isSetup,shape:"square",variant:"text"},{default:a(()=>[o($(g))]),_:1},8,["disabled"])]),_:1},8,["disabled","options"])]),_:1})}}});const Q=y(V,[["__scopeId","data-v-36f57eac"]]);export{Q as default};
