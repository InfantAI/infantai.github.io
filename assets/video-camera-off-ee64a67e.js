import{d as O,j as a,v as d,x as m,y}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 25 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1.59L22.41 21 21 22.41l-4-4V20H0V4h2.59l-1-1L3 1.59zM4.59 6H2v12h13v-1.59L4.59 6zm3-2H17v4.43l7-4.2v15.19l-2-2V7.76l-5 3v2.65l-2-2V6H9.59l-2-2z"}}]},h=O({name:"VideoCameraOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=d(t),v=a(()=>["t-icon","t-icon-video-camera-off",l.value]),p=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:v.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,f.value)}});export{h as default};
