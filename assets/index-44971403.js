import{e as E}from"./train-bdb91924.js";import{d as N,r as n,C as B,N as V,h as u,o as _,c as p,a as t,w as l,F as $,q as A,e as F,b as g,i as m,u as b,a3 as G,n as L,a5 as P,g as T}from"./index-dfbb01d3.js";import{_ as U}from"./Edit.vue_vue_type_script_setup_true_lang-085a7904.js";import{_ as I}from"./Preview.vue_vue_type_script_setup_true_lang-61e86002.js";import"./EditForm.vue_vue_type_script_setup_true_lang-5046e21e.js";const Q=N({__name:"index",setup(S){const r=n(!1),d=n([]),s=n(""),x=a=>{i.value=!0,s.value=a},k=a=>{c.value=!0,s.value=a},i=n(!1),c=n(!1),v=async()=>{r.value=!0,await E().then(a=>{d.value=a}).finally(()=>{r.value=!1})};return B(()=>{v()}),V(()=>i.value,a=>{a||v()}),(a,o)=>{const h=u("t-list-item-meta"),f=u("t-link"),C=u("t-list-item"),y=u("t-list");return _(),p("div",null,[t(y,{split:!0,loading:r.value?"loading":""},{default:l(()=>[(_(!0),p($,null,A(d.value,e=>(_(),F(C,{key:e.id},{action:l(()=>[g("span",null,[t(f,{theme:"success",hover:"color",style:{"margin-left":"16px"},onClick:w=>k(e.language)},{default:l(()=>[m("查看问卷")]),_:2},1032,["onClick"]),t(f,{theme:"primary",hover:"color",style:{"margin-left":"16px"},onClick:w=>x(e.language)},{default:l(()=>[m("编辑题库")]),_:2},1032,["onClick"])])]),default:l(()=>[t(h,{title:b(G).get(e.language)+"题库",description:"当前已选  "+e.selected+"/"+e.total},{image:l(()=>[g("span",{class:L("fi fi-"+b(P).get(e.language)+" span-width")},null,2)]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1},8,["loading"]),t(U,{visible:i.value,"onUpdate:visible":o[0]||(o[0]=e=>i.value=e),language:s.value},null,8,["visible","language"]),t(I,{visible:c.value,"onUpdate:visible":o[1]||(o[1]=e=>c.value=e),language:s.value},null,8,["visible","language"])])}}});const j=T(Q,[["__scopeId","data-v-fafb81f0"]]);export{j as default};
