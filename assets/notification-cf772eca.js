import{d as y,j as a,v as O,x as d,y as m}from"./index-a2efab08.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 8a8 8 0 1116 0v4.7l2 3V20h-5.61a4.5 4.5 0 01-8.78 0H2v-4.3l2-3V8zm5.7 12a2.5 2.5 0 004.6 0H9.7zM12 2a6 6 0 00-6 6v5.3l-2 3V18h16v-1.7l-2-3V8a6 6 0 00-6-6z"}}]},h=y({name:"NotificationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=O(r),p=a(()=>["t-icon","t-icon-notification",o.value]),v=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>d(g,f.value)}});export{h as default};
