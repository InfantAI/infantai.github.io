import{_ as O}from"./dep-f0c03047-1764bf98.js";import{d,j as a,v as y,x as g}from"./index-c831df68.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 8h3L8 1.33 3 8h3v6.67h4V8z",fillOpacity:.9}}]},b=d({name:"ArrowUpTriangleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),c=a(()=>["t-icon","t-icon-arrow-up-triangle-filled",l.value]),u=a(()=>p(p({},s.value),r.style)),f=a(()=>({class:c.value,style:u.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>g(m,f.value)}});export{b as default};
