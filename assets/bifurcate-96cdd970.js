import{d as y,j as a,v as O,x as m,y as d}from"./index-3638f854.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 4a1 1 0 100 2 1 1 0 000-2zM3 5a3 3 0 114.09 2.8 6 6 0 00.93 2.25A4.54 4.54 0 0012 12c2.04 0 3.25-.9 3.98-1.95.52-.75.8-1.59.93-2.25a3 3 0 112.02.05 8.01 8.01 0 01-1.3 3.35A6.4 6.4 0 0113 13.94v2.23a3 3 0 11-2 0v-2.23a6.4 6.4 0 01-4.62-2.74 8.01 8.01 0 01-1.31-3.35A3 3 0 013 5zm15-1a1 1 0 100 2 1 1 0 000-2zm-6 14a1 1 0 100 2 1 1 0 000-2z"}}]},j=y({name:"BifurcateIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-bifurcate",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(b,v.value)}});export{j as default};
