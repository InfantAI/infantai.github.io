import{d as m,j as a,v as y,x as O,y as h}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V23h-9v-2h7V9h-6V3H5v10H3V1zm12 2.41V7h3.59L15 3.41zM7.05 14.1L11.91 19l-4.86 4.92-1.42-1.41 2.48-2.5H1v-2h7.1l-2.47-2.52 1.42-1.4z"}}]},b=m({name:"FileImportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=y(t),c=a(()=>["t-icon","t-icon-file-import",o.value]),v=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
