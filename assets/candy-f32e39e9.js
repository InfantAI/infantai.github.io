import{d as y,j as n,v as d,x as m,y as O}from"./index-a2efab08.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.31 3.54a2 2 0 013.4-1.24l3.99 3.98a2 2 0 01-1.24 3.4l-1.31.13a3 3 0 01-.36 3.81l-5.17 5.17a3 3 0 01-3.81.36l-.12 1.31a2 2 0 01-3.4 1.24L2.3 17.72a2 2 0 011.24-3.4l1.31-.13a3 3 0 01.36-3.81l5.17-5.17a3 3 0 013.81-.36l.12-1.31zm2.06 3.41l.67.68c.22.21.5.32.8.29l2.44-.22-3.98-3.98-.22 2.44a1 1 0 00.29.8zm-1.42 1.42l-1.74-1.75a1 1 0 00-1.42 0L9.91 8.5l5.59 5.59 1.88-1.88a1 1 0 000-1.42l-1.75-1.74-.67-.68zm-.86 7.13L8.5 9.91 6.62 11.8a1 1 0 000 1.42l4.17 4.17a1 1 0 001.42 0l1.88-1.88zm-7.47.54l-2.9.26 3.98 3.98.26-2.9-1.34-1.34z"}}]},j=y({name:"CandyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:s}=d(t),p=n(()=>["t-icon","t-icon-candy",l.value]),u=n(()=>c(c({},s.value),r.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as default};
