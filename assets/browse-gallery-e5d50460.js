import{d as y,j as a,v as O,x as d,y as g}from"./index-dfbb01d3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7215)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.41 1.59l.7.72a13.96 13.96 0 010 19.38l-.7.72-1.44-1.38.69-.72a11.96 11.96 0 000-16.62l-.7-.72 1.45-1.38zM10 4a8 8 0 100 16 8 8 0 000-16zM0 12a10 10 0 1120 0 10 10 0 01-20 0zm11-5.5v5.09L14.41 15 13 16.41l-4-4V6.5h2z"}}]}]},h=y({name:"BrowseGalleryIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-browse-gallery",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(m,v.value)}});export{h as default};
