import{d as h,j as a,v as f,x as y,y as O}from"./index-d4c9a0d0.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v18h18v2H2V2h2zm2 1h2v2H6V3zm3 0h2v2H9V3zm3 0h2v2h-2V3zm3 0h2v2h-2V3zm3 0h2v2h-2V3zm-2.57 5.79A3.78 3.78 0 0013 8a3.8 3.8 0 00-2.43.79 5.36 5.36 0 00-1.53 2.12A16 16 0 008 17v1H6v-1c0-2.05.25-4.7 1.2-6.9a7.34 7.34 0 012.13-2.88A5.79 5.79 0 0113 6c1.47 0 2.69.45 3.67 1.21a7.34 7.34 0 012.12 2.9C19.75 12.28 20 14.95 20 17v1h-2v-1c0-1.95-.25-4.29-1.04-6.1-.4-.9-.9-1.63-1.53-2.12z"}}]},b=h({name:"ChartMaximumIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=f(t),s=a(()=>["t-icon","t-icon-chart-maximum",o.value]),p=a(()=>c(c({},v.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:m=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:m})}}));return()=>y(d,u.value)}});export{b as default};
