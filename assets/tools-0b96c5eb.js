import{d as y,j as a,v as O,x as d,y as m}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.53 1.87a8.5 8.5 0 0111.5 9.79l5.14 5.15-1.41 1.42-5.99-6 .18-.57A6.5 6.5 0 008.34 3.4l4.23 4.23-4.95 4.95-4.23-4.23a6.5 6.5 0 008.27 7.61l.58-.18 5.99 6-1.42 1.4-5.15-5.15a8.5 8.5 0 01-9.8-11.48l.26-.63h1.67l3.83 3.83 2.12-2.12-3.83-3.83V2.12l.62-.25zm9.22 12.47l4.95 4.95-1.41 1.41-4.95-4.95 1.41-1.41z"}}]},j=y({name:"ToolsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-tools",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{j as default};
