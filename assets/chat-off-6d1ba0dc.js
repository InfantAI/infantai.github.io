import{d as O,j as a,v as y,x as d,y as h}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7519)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M23.41 22L2 .6.59 2l.91.92V22.7L6.88 18h9.7L22 23.42 23.41 22zm-8.82-6H6.12L3.5 18.3V4.92L14.59 16zm7.91 2V2H6.24l2 2H20.5v12l2 2z"}}]}]},P=O({name:"ChatOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-chat-off",l.value]),f=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>d(m,u.value)}});export{P as default};
