import{d as y,j as a,v as O,x as d,y as m}from"./index-9eb1327f.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7450)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 12c0-2.44-.87-4.67-2.32-6.4l-.64-.77 1.54-1.28.64.77a11.96 11.96 0 010 15.36l-.64.77-1.54-1.28.64-.77A9.96 9.96 0 0022 12zm-4.62-4.48a6.98 6.98 0 010 8.96l-.64.77-1.54-1.28.64-.77a4.98 4.98 0 000-6.4l-.64-.77 1.54-1.28.64.77zM12 10a2 2 0 110 4 2 2 0 010-4zM8.8 8.03l-.64.77a4.98 4.98 0 000 6.4l.64.77-1.54 1.28-.64-.77a6.98 6.98 0 010-8.96l.64-.77L8.8 8.03zm-3.84-3.2l-.64.77a9.96 9.96 0 000 12.8l.64.77-1.54 1.28-.64-.77a11.96 11.96 0 010-15.36l.64-.77 1.54 1.28z"}}]}]},b=y({name:"SensorsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-sensors",l.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{b as default};
