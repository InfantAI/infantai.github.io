import{d as y,j as a,v as O,x as d,y as h}from"./index-c831df68.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.5 12a10.5 10.5 0 00-19-6.17V2.5h-2v7h7v-2H4.79a8.55 8.55 0 017.21-4 8.5 8.5 0 11-8.45 9.4l-.1-1-2 .21.1 1A10.5 10.5 0 0022.5 12zM11 6v6.41l3.5 3.5 1.41-1.41L13 11.59V6h-2z"}}]},b=y({name:"HistoryIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-history",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(m,u.value)}});export{b as default};
