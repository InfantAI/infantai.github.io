import{d as f,r as k,N as b,h as o,o as r,c as y,b as t,a as c,t as s,e as p,w as u,i as _,g as C}from"./index-dfbb01d3.js";const D={class:"operator-block operator-gap"},E={class:"operator-content"},B={class:"operator-title"},N={class:"operator-title-subtitle"},V={class:"operator-item"},$={class:"operator-item-info"},w={class:"operator-footer"},z={class:"operator-footer-percentage"},x=f({__name:"version",props:{data:{type:Object,default:()=>({})}},emits:["change-status"],setup(d,{emit:m}){const n=d,e=k(n.data),g=m,v=()=>{g("change-status",e.value.id)};return b(()=>n.data,a=>{e.value=a}),(a,F)=>{const l=o("t-icon"),i=o("t-tag"),h=o("t-progress");return r(),y("div",D,[t("div",E,[t("div",B,[c(l,{name:"cart",class:"operator-title-icon"}),t("h1",null,s(e.value.name),1),t("div",N,s(e.value.subtitle),1),t("div",{class:"operator-title-tags",onClick:v},[e.value.status==1?(r(),p(i,{key:0,class:"operator-title-tag",theme:"success",size:"medium"},{default:u(()=>[_(s(a.$t("pages.program.statusEnum.on")),1)]),_:1})):(r(),p(i,{key:1,class:"operator-title-tag",size:"medium"},{default:u(()=>[_(s(a.$t("pages.program.statusEnum.off")),1)]),_:1}))])]),t("div",V,[t("span",$,s(e.value.info),1),c(l,{class:"operator-item-icon",name:"chevron-right",size:"small",style:{color:"rgb(0 0 0 / 26%)"}})])]),t("div",w,[t("span",z,s(a.$t("pages.program.serviced"))+" "+s(e.value.use)+" "+s(a.$t("pages.program.days")),1),c(h,{class:"operator-progress",theme:"line",percentage:e.value.use/e.value.stock*100,label:!1,color:e.value.use/e.value.stock<.5?"#E24D59":"","track-color":e.value.use/e.value.stock<.5?"#FCD4D4":"#D4E3FC"},null,8,["percentage","color","track-color"])])])}}});const j=C(x,[["__scopeId","data-v-bb7ad756"]]);export{j as default};
