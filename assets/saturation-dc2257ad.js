import{d as y,j as a,v as O,x as m,y as d}from"./index-ab78ae36.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .07l7.07 7a9.86 9.86 0 010 14.03 10.06 10.06 0 01-14.14 0 9.86 9.86 0 010-14.03l7.07-7zm0 2.81L6.34 8.5a7.86 7.86 0 000 11.19 8.06 8.06 0 0011.32 0 7.86 7.86 0 000-11.19L12 2.9zm-1 6.15h1A5.48 5.48 0 1112 20h-1V9.03zm2 2.15v6.67a3.48 3.48 0 000-6.67z"}}]},h=y({name:"SaturationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-saturation",o.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,v.value)}});export{h as default};
