import{d as y,j as a,v as O,x as d,y as m}from"./index-d4c9a0d0.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.87 3l.67 1.84L21 6.45V8c0 3.15-.54 5.83-1.8 7.95a9.98 9.98 0 01-5.88 4.47c-.91.28-2.42.56-3.43.58-3.57.06-6.6-1.55-8.15-3.35L1 16.78l.97-.62 4.44-2.82-.03-.02c-.88-.4-1.76-1-2.53-1.68a10.53 10.53 0 01-1.97-2.31A5.24 5.24 0 011 6.66v-.88l21.87-2.77zM8.68 11.9L13 9.16l.84-.54 4.84-3.06-15.5 1.96c.1.24.23.5.4.76.38.64.94 1.29 1.59 1.86a8.54 8.54 0 002.04 1.37c.58.27 1.08.39 1.47.39zm4.55-.52l-2.83 1.8 1.46 2.16-1.66 1.11-1.49-2.2-4.59 2.9A9.23 9.23 0 009.86 19c.79-.01 2.1-.25 2.87-.49a7.99 7.99 0 004.75-3.58C18.49 13.23 19 10.94 19 8v-.28l-4.08 2.59 1.45 2.27-1.68 1.08-1.46-2.28z"}}]},b=y({name:"PeaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-pea",l.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,u.value)}});export{b as default};
