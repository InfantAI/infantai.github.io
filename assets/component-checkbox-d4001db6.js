import{d as m,j as o,v as h,x as y,y as O}from"./index-dfbb01d3.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h13v5.5h-2V4H4v9h3.5v2H2V2zm7 7h13v13H9V9zm2 2v9h9v-9h-9zm8.41 3L15 18.41l-2.91-2.91 1.41-1.41 1.5 1.5 3-3L19.41 14z"}}]},g=m({name:"ComponentCheckboxIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:s}=h(r),p=o(()=>["t-icon","t-icon-component-checkbox",a.value]),v=o(()=>i(i({},s.value),t.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(b,u.value)}});export{g as default};
