import{d as O,j as l,v as y,x as d,y as m}from"./index-a2efab08.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1.59L22.41 21 21 22.41l-7.3-7.3-2.56-2.55c-1.37.18-2.69.8-3.74 1.84l-.7.71-1.42-1.41.7-.71c1.02-1 2.22-1.71 3.49-2.1l-.37-.38-3.07-3.06A13 13 0 002.81 9.8l-.71.7L.69 9.1l.7-.7c.97-.97 2.03-1.78 3.17-2.43L1.59 3 3 1.59zM21.2 9.8a12.98 12.98 0 00-10.94-3.7l-1 .14L9 4.27l1-.14c4.47-.6 9.16.82 12.6 4.26l.71.71-1.41 1.41-.7-.7zm-10.61 7.78a2 2 0 012.82 0l.71.7L12 20.41 9.88 18.3l.7-.7z"}}]},j=O({name:"WifiOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=y(t),f=l(()=>["t-icon","t-icon-wifi-off",a.value]),p=l(()=>c(c({},s.value),r.style)),u=l(()=>({class:f.value,style:p.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>d(g,u.value)}});export{j as default};
