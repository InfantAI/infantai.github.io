import{d as y,j as a,v as O,x as m,y as d}from"./index-ab78ae36.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.34 4.93l-.7.7a8.97 8.97 0 000 12.73l.7.71-1.41 1.42-.7-.71a10.97 10.97 0 010-15.56l.7-.7 1.41 1.4zM19.07 3.5l.7.71a10.97 10.97 0 010 15.56l-.7.7-1.41-1.4.7-.72a8.97 8.97 0 000-12.72l-.7-.71 1.41-1.42zm-9.9 4.25l-.7.7a4.98 4.98 0 000 7.08l.7.7-1.41 1.42-.71-.71a6.98 6.98 0 010-9.9l.7-.7 1.42 1.4zm7.07-1.42l.71.71a6.98 6.98 0 010 9.9l-.7.7-1.42-1.4.7-.71a4.98 4.98 0 000-7.08l-.7-.7 1.41-1.42zM13 9v6h-2V9h2z"}}]},h=y({name:"Sensors2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-sensors-2",l.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{h as default};
