import{d as m,j as a,v as y,x as O,y as h}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.89 1.86l8.08 3.54L22 2.38V10h-2V5.62l-3 1.5V10h-2V7.15L9 4.53v10.85l2.34 1.17-.89 1.8-2.4-1.21L2 20.77V5.97l5.89-4.11zM7 15.43V4.93l-3 2.1v10.2l3-1.8zm10.25-1.93a2.75 2.75 0 011.95 4.7h-.01a2.74 2.74 0 01-4.69-1.95 2.75 2.75 0 012.75-2.75zm4 5.33a4.75 4.75 0 10-1.41 1.41l1.66 1.67 1.41-1.4-1.67-1.68z"}}]},b=m({name:"MapSearchIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-map-search",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
