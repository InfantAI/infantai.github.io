import{d,j as a,v as y,x as O,y as m}from"./index-dfbb01d3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V11h-2V9h-6V3H5v18h6v2H3V1zm12 2.41V7h3.59L15 3.41zm3 11.09a3.5 3.5 0 00-3.08 5.17l4.75-4.75A3.48 3.48 0 0018 14.5zm3.08 1.83l-4.75 4.75a3.5 3.5 0 004.74-4.74zM12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"}}]},g=d({name:"FileBlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-file-blocked",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,u.value)}});export{g as default};
