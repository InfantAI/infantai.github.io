import{J as a,r as n}from"./index-3638f854.js";const o=(t=60)=>{let r;a(()=>{clearInterval(r)});const e=n(0);return[e,()=>{e.value=t,r=setInterval(()=>{e.value>0?e.value-=1:(clearInterval(r),e.value=0)},1e3)}]};export{o as u};
