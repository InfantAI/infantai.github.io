import{c as j}from"./train-e8d93948.js";import{d as q,r as c,j as A,N as p,h as o,o as l,c as g,a as s,w as t,F as w,q as b,e as x,i as F,t as v,b as y,u as G,a3 as M}from"./index-a2c26395.js";const Q=q({__name:"Preview",props:{visible:Boolean,language:String},emits:["update:visible"],setup(S,{emit:k}){const i=S,u=c(i.visible),d=c(i.language),a=c({pageIndex:1,pageSize:20,total:50}),B=k,N=A(()=>a.value.total<=r.value.length?"没有更多数据了":"load-more"),z=()=>{a.value.pageIndex++,_()},r=c([]),_=async()=>{await j({language:d.value,page:{pageIndex:a.value.pageIndex,pageSize:a.value.pageSize}}).then(e=>{r.value.push(...e.content),a.value.total=e.total})},I=()=>{r.value=[],a.value.pageIndex=1};return p(()=>i.language,e=>{d.value=e,I(),_()}),p(()=>i.visible,e=>{u.value=e}),p(()=>u.value,e=>{B("update:visible",e)}),(e,m)=>{const f=o("t-col"),L=o("t-row"),P=o("t-card"),C=o("t-list-item"),D=o("t-list"),E=o("t-dialog");return l(),g("div",null,[s(E,{visible:u.value,"onUpdate:visible":m[0]||(m[0]=n=>u.value=n),header:G(M).get(d.value)+"问卷预览",width:"640",top:"40",size:"80%"},{default:t(()=>[s(D,{"async-loading":N.value,style:{height:"600px"},onLoadMore:z},{default:t(()=>[(l(!0),g(w,null,b(r.value,n=>(l(),x(C,{key:n.id},{default:t(()=>[s(P,{title:n.question,style:{width:"100%"}},{actions:t(()=>[F(v(`比重${n.weight}%`),1)]),default:t(()=>[(l(!0),g(w,null,b(n.answers,(h,V)=>(l(),x(L,{key:V,justify:"space-between"},{default:t(()=>[s(f,{span:20},{default:t(()=>[y("div",null,v(h.answer),1)]),_:2},1024),s(f,{span:2},{default:t(()=>[y("div",null,v(h.fraction)+"分",1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1},8,["async-loading"])]),_:1},8,["visible","header"])])}}});export{Q as _};
