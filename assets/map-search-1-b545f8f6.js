import{d as h,j as n,v as m,x as y,y as O}from"./index-d4c9a0d0.js";function c(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?c(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 3c1.15 0 2 .89 2 2.09 0 .8-.52 1.66-1.23 2.4-.27.3-.54.54-.77.73-.23-.2-.5-.44-.77-.73C7.53 6.75 7 5.9 7 5.1 7 3.89 7.84 3 9 3zm3.9 1.2A3.94 3.94 0 009 1a3.93 3.93 0 00-3.9 3.2H2V20h9v-2H4v-3.2l1.96-1.04 3.35 2.12 1.07-1.69-4.34-2.75L4 12.54V6.2h1.15a6.6 6.6 0 001.62 2.67 10.77 10.77 0 001.63 1.4l.04.02v.01h.01l.55.36.55-.36h.01l.04-.03a6.6 6.6 0 00.49-.36c.3-.25.72-.6 1.14-1.04a6.6 6.6 0 001.62-2.67H20v4.3h2V4.2h-9.1zm4.35 9.3a2.75 2.75 0 011.95 4.7h-.01a2.74 2.74 0 01-4.69-1.95 2.75 2.75 0 012.75-2.75zm4 5.33a4.75 4.75 0 10-1.41 1.41l1.66 1.67 1.41-1.4-1.67-1.68z"}}]},b=h({name:"MapSearch1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:s}=m(t),p=n(()=>["t-icon","t-icon-map-search-1",l.value]),v=n(()=>i(i({},s.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
