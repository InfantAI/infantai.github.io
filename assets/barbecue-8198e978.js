import{d as y,j as l,v as O,x as b,y as m}from"./index-a2efab08.js";function c(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13.32 2.8a2.72 2.72 0 013.84 0l1.31 1.31L20.1 2.5l1.42 1.42-1.62 1.62 1.31 1.31a2.72 2.72 0 010 3.84L20 11.9a2.7 2.7 0 01-1.65.78 2.7 2.7 0 01-.78 1.65l-1.21 1.21a2.7 2.7 0 01-1.65.78 2.7 2.7 0 01-.78 1.65l-1.21 1.21a2.72 2.72 0 01-3.84 0l-1.32-1.31-1.62 1.61-.7-.7a.72.72 0 10-.27 1.18l.94-.33.66 1.88-.94.34a2.72 2.72 0 11.18-5.06l.33-.34-1.31-1.32a2.72 2.72 0 010-3.84l1.21-1.21a2.7 2.7 0 011.65-.78c.06-.6.32-1.19.78-1.65l1.21-1.21a2.7 2.7 0 011.65-.78c.06-.6.32-1.19.78-1.65l1.22-1.21zm.2 3.64l4.04 4.04c.28.28.74.28 1.02 0l1.21-1.21a.72.72 0 000-1.01l-1.32-1.32-.97.97-1.41-1.41.97-.97-1.32-1.32a.72.72 0 00-1.01 0l-1.21 1.21a.72.72 0 000 1.02zm2.63 5.46L12.1 7.85a.72.72 0 00-1.01 0L9.87 9.07a.72.72 0 000 1l4.05 4.06c.28.28.73.28 1.01 0l1.22-1.22a.72.72 0 000-1.01zm-3.64 3.64l-4.05-4.05a.72.72 0 00-1.01 0l-1.22 1.22a.72.72 0 000 1.01l4.05 4.05c.28.28.73.28 1.01 0l1.22-1.22a.72.72 0 000-1.01z"}}]},j=y({name:"BarbecueIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=l(()=>e.size),{className:n,style:s}=O(t),p=l(()=>["t-icon","t-icon-barbecue",n.value]),u=l(()=>i(i({},s.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>b(d,v.value)}});export{j as default};
