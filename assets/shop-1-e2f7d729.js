import{d as h,j as a,v as y,x as O,y as m}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 7.46V20h4v-7h8v7h4V9.46a3.98 3.98 0 01-5-.81 3.99 3.99 0 01-6 0 3.99 3.99 0 01-5 .81zM10 6a2 2 0 104 0V4h-4v2zM8 4H4v2a2 2 0 104 0V4zm8 0v2a2 2 0 104 0V4h-4zm-2 16v-5h-4v5h4z"}}]},b=h({name:"Shop1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=y(t),c=a(()=>["t-icon","t-icon-shop-1",o.value]),v=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
