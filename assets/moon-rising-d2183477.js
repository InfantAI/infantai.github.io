import{d as y,j as a,v as O,x as m,y as g}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 20h8.3l2.7-1.8 2.7 1.8H23v-2h-7.7L12 15.8 8.7 18H1v2zm19.45-3.66l.44-.9a8.1 8.1 0 00.92-3.14l.1-1.71-1.53.75a7 7 0 01-9.84-4.48 6.92 6.92 0 01-.07-3.6l.45-1.67-1.68.44a10 10 0 00-7.07 12.25 8.16 8.16 0 00.35.97l.04.1.01.02.38.93 1.85-.75-.38-.93v-.03l-.04-.08a26.4 26.4 0 01-.28-.75 8 8 0 014.17-9.23c-.04.95.08 1.9.33 2.85a9 9 0 0010.84 6.41c-.09.24-.2.5-.33.76l-.45.9 1.79.9z"}}]},h=y({name:"MoonRisingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-moon-rising",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{h as default};
