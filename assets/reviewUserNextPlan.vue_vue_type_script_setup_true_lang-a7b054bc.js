import{d as m,r as l,N as o,h as p,o as b,c as _,a as f,w as N,b as w}from"./index-a2c26395.js";const g=w("p",null,"最近的推送计划",-1),h={name:"reviewPlan"},B=m({...h,props:{data:Object,visible:Boolean,userName:String},emits:["update:visible"],setup(r,{emit:u}){const a=r,v=l(a.data);l(0);const t=l(a.visible),i=l(a.userName),c=u;return o(()=>t.value,e=>{c("update:visible",e)}),o(()=>a.data,e=>{v.value=e}),o(()=>a.visible,e=>{t.value=e}),o(()=>a.userName,e=>{i.value=e}),(e,s)=>{const d=p("t-drawer");return b(),_("div",null,[f(d,{visible:t.value,"onUpdate:visible":s[0]||(s[0]=n=>t.value=n),header:i.value,size:"large","on-overlay-click":()=>t.value=!1,placement:"right","size-draggable":!0,onCancel:s[1]||(s[1]=n=>t.value=!1)},{default:N(()=>[g]),_:1},8,["visible","header","on-overlay-click"])])}}});export{B as _};
