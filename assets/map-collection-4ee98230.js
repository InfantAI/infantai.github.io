import{d as m,j as l,v as y,x as O,y as d}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5v8h-2v-5l-4 1.67V9.5h-2V7.07l-4-2.33v12.19l1.87 1.09-1.01 1.72-1.93-1.13L2 21.5V5.93l7-4.09zm-1 15V4.73L4 7.07V18.5l4-1.67zm10-6.1l2.21 3.22 3.75 1.1-2.38 3.1.1 3.91-3.68-1.3-3.68 1.3.1-3.9-2.38-3.1 3.75-1.11L18 10.73zm0 3.53l-.96 1.4-1.64.49 1.04 1.35-.05 1.7 1.61-.57 1.6.57-.04-1.7 1.04-1.35-1.64-.49-.96-1.4z"}}]},h=m({name:"MapCollectionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=y(r),p=l(()=>["t-icon","t-icon-map-collection",a.value]),v=l(()=>c(c({},s.value),t.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{h as default};
