import{d as y,j as a,v as O,x as d,y as h}from"./index-9eb1327f.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a2 2 0 100 4 2 2 0 000-4zM8 5a4 4 0 115 3.87v1.63h4.5v2H13v8.46c3.13-.27 5.64-1.8 6.8-4.23l-1.23-1.23 4.05-4.05-.13 2.6c-.3 5.69-5.04 8.95-10.5 8.95-5.45 0-10.18-3.26-10.48-8.95l-.13-2.6 4.05 4.05-1.23 1.23c1.16 2.43 3.67 3.96 6.8 4.23V12.5H6.5v-2H11V8.87A4 4 0 018 5z"}}]},b=y({name:"AnchorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-anchor",o.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(m,u.value)}});export{b as default};
