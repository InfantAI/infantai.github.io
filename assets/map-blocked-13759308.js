import{d as m,j as a,v as d,x as y,y as O}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5v8h-2v-5l-4 1.67v3.33h-2V7.07l-4-2.33v12.19l1.87 1.09-1.01 1.72-1.93-1.13L2 21.5V5.93l7-4.09zm-1 15V4.73L4 7.07V18.5l4-1.67zm10-3.34a3.5 3.5 0 00-3.08 5.17l4.75-4.75A3.48 3.48 0 0018 13.5zm3.08 1.83l-4.75 4.75a3.5 3.5 0 004.74-4.74zM12.5 17a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"}}]},h=m({name:"MapBlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-map-blocked",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(b,u.value)}});export{h as default};
