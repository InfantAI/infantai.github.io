import{d as y,j as a,v as O,x as m,y as d}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.92 1.59l-.45 1.67a6.92 6.92 0 00.07 3.6 7 7 0 009.84 4.48l1.54-.75-.1 1.7a8.1 8.1 0 01-.93 3.16l-.44.9-1.8-.9.46-.9c.13-.26.24-.52.33-.76A9 9 0 018.6 7.4a9.59 9.59 0 01-.33-2.86 8 8 0 00-4.17 9.23 7.38 7.38 0 00.28.75l.03.08.01.03.38.93-1.85.75-.38-.92v-.01l-.01-.03-.04-.09a28.73 28.73 0 01-.35-.97A10 10 0 019.24 2.03l1.68-.44zM1 18h8.3l2.7 1.8 2.7-1.8H23v2h-7.7L12 22.2 8.7 20H1v-2z"}}]},h=y({name:"MoonFallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-moon-fall",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,u.value)}});export{h as default};
