import{d as O,j as n,v as y,x as m,y as d}from"./index-d4c9a0d0.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1.59L22.41 21 21 22.41l-4.04-4.03c.03.2.04.4.04.62v2h-2v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2H0v-2a5 5 0 015-5h7c.21 0 .42.01.62.04l-2.35-2.36a4.99 4.99 0 01-6.45-6.44L1.6 3 3 1.59zm2.5 5.33V7a3 3 0 003.08 3L5.5 6.92zM8.5 4c-.12 0-.24 0-.36.02l-.99.12-.23-1.99.99-.12L8.5 2a5 5 0 014.97 5.59l-.12 1-1.99-.24.12-1L11.5 7a3 3 0 00-3-3zm12.08 1.65l.5.87a7 7 0 010 6.97l-.5.87-1.74-1 .5-.87a5 5 0 000-4.98l-.5-.87 1.74-1zm-3.04 1.74l.5.87a3.5 3.5 0 010 3.49l-.5.86-1.74-1 .5-.86a1.5 1.5 0 000-1.5l-.5-.86 1.74-1z"}}]},h=O({name:"UserTalkOff1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:c}=y(t),p=n(()=>["t-icon","t-icon-user-talk-off-1",l.value]),f=n(()=>s(s({},c.value),r.style)),v=n(()=>({class:p.value,style:f.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,v.value)}});export{h as default};
