import{d as g,r as o,N as l,h as r,o as N,c as y,a as d,w as C,b as V,t as x}from"./index-a2efab08.js";const B={name:"AddDays"},h=g({...B,props:{data:Object,visible:Boolean,userName:String},emits:["update:visible"],setup(m,{emit:p}){const a=m,v=o(a.data),n=o(0),s=o(a.visible),u=o(a.userName),c=(e,t)=>{console.log(e,t),console.log(n.value)},b=p;return l(()=>s.value,e=>{b("update:visible",e)}),l(()=>a.data,e=>{v.value=e}),l(()=>a.visible,e=>{s.value=e}),l(()=>a.userName,e=>{u.value=e}),(e,t)=>{const _=r("t-input"),f=r("t-dialog");return N(),y("div",null,[d(f,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=i=>s.value=i),header:"增加付费天数"},{default:C(()=>[V("p",null,"给用户"+x(u.value)+"增加：",1),d(_,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=i=>n.value=i),label:"",suffix:"Days",type:"number",onChange:c},null,8,["modelValue"])]),_:1},8,["visible"])])}}});export{h as _};
