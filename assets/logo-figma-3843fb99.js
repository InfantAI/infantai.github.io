import{d as m,j as a,v as g,x as y,y as O}from"./index-dfbb01d3.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 5A4.5 4.5 0 018.5.5h7a4.5 4.5 0 012.83 8A4.5 4.5 0 0113 15.74V19a4.5 4.5 0 11-7.33-3.5 4.5 4.5 0 010-7A4.5 4.5 0 014 5zm4.5 2.5H11v-5H8.5a2.5 2.5 0 000 5zm4.5-5v5h2.5a2.5 2.5 0 000-5H13zm-2 7H8.5a2.5 2.5 0 000 5H11v-5zm0 7H8.5A2.5 2.5 0 1011 19v-2.5zm2-4.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"}}]},h=m({name:"LogoFigmaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=g(t),p=a(()=>["t-icon","t-icon-logo-figma",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{h as default};
