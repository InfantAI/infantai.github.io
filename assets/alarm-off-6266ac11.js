import{d as O,j as a,v as m,x as y,y as d}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7187)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M.09 6.5L2.59 4l-2-2L2 .59l2 2 1.5-1.5L6.91 2.5 5.41 4l18 18L22 23.41l-3.14-3.14A10 10 0 014.72 6.13L4 5.42l-2.5 2.5L.09 6.5zm6.05 1.05a8 8 0 0011.3 11.3L6.15 7.56zm2.42-4l.97-.24a10.02 10.02 0 0112.16 12.16l-.24.97-1.94-.5.24-.96a8.02 8.02 0 00-9.73-9.73l-.97.24-.49-1.94zM18.5 1.1l5.41 5.41-1.41 1.41-5.41-5.41 1.41-1.41z"}}]}]},b=O({name:"AlarmOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),p=a(()=>["t-icon","t-icon-alarm-off",l.value]),f=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>y(g,u.value)}});export{b as default};
