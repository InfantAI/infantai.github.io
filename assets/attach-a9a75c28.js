import{d as y,j as a,v as O,x as d,y as m}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.31 3.12a5 5 0 117.07 7.07l-7.77 7.78a3 3 0 11-4.25-4.24l7.78-7.78 1.42 1.41-7.78 7.78a1 1 0 101.41 1.42l7.78-7.78a3 3 0 10-4.24-4.24L4.95 12.3a5 5 0 007.07 7.07l8.49-8.48 1.41 1.41-8.48 8.49a7 7 0 01-9.9-9.9l7.77-7.78z"}}]},b=y({name:"AttachIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-attach",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{b as default};
