import{d as y,j as a,v as m,x as O,y as h}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v3h-2V1h2zm7.49 3.93l-2.13 2.12-1.41-1.41 2.12-2.13 1.42 1.42zM4.93 3.5l2.12 2.13-1.41 1.41L3.5 4.93 4.93 3.5zM12 8a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm-5-1h3v2H1v-2zm19 0h3v2h-3v-2zM7.05 18.36l-2.12 2.12-1.42-1.4 2.13-2.13 1.41 1.41zm11.31-1.41l2.13 2.12-1.42 1.41-2.12-2.12 1.41-1.41zM13 20v3h-2v-3h2z"}}]},g=y({name:"SunnyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),v=a(()=>["t-icon","t-icon-sunny",l.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{g as default};
