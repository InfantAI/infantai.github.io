import{d,j as a,v as y,x as O,y as h}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.5 4v16h-2V4h2zm.59 8L9 7.09l1.41 1.41-2.5 2.5h8.18l-2.5-2.5L15 7.09 19.91 12 15 16.91l-1.41-1.41 2.5-2.5H7.9l2.5 2.5L9 16.91 4.09 12zM22.5 4v16h-2V4h2z"}}]},b=d({name:"ExpandHorizontalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=y(t),c=a(()=>["t-icon","t-icon-expand-horizontal",o.value]),v=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
