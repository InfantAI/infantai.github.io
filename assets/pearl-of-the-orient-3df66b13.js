import{d as O,j as a,v as y,x as m,y as d}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v2.17a3 3 0 010 5.66v4.3a4 4 0 011.86 6.67l1.9 3.2h-2.33l-1.28-2.17a4 4 0 01-2.3 0L9.57 23H7.25l1.89-3.2A4 4 0 0111 13.13v-4.3a3 3 0 010-5.66V1h2zm-1 4a1 1 0 100 2 1 1 0 000-2zm0 10a2 2 0 100 4 2 2 0 000-4z"}}]},P=O({name:"PearlOfTheOrientIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),p=a(()=>["t-icon","t-icon-pearl-of-the-orient",l.value]),v=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(h,f.value)}});export{P as default};
