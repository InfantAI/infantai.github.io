import{d as m,j as o,v as d,x as y,y as O}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .8l11 7.16v8.08L12 23.2 1 16.04V7.96L12 .8zm-9 9.62v3.16L5.26 12 3 10.42zm.79 5.05L11 20.16v-4.14l-4-2.8-3.21 2.25zM8.74 12L12 14.28 15.26 12 12 9.72 8.74 12zM13 7.98l4 2.8 3.21-2.25L13 3.84v4.14zm-2-4.14l-7.21 4.7L7 10.77l4-2.8V3.84zm10 6.58L18.74 12 21 13.58v-3.16zm-.79 5.05L17 13.22l-4 2.8v4.14l7.21-4.7z"}}]},b=m({name:"LogoCodepenIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:c}=d(t),p=o(()=>["t-icon","t-icon-logo-codepen",l.value]),v=o(()=>s(s({},c.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
