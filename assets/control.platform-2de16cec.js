import{_ as m}from"./dep-f0c03047-1764bf98.js";import{d as O,j as o,v as y,x as d}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .86L22 6.4V17.6l-10 5.55L2 17.6V6.4L12 .86zM4 8.9v7.51l7 3.89v-7.7L4 8.9zm9 11.4l7-3.89V8.9l-7 3.7v7.7zm-1-9.43l7.12-3.77L12 3.14 4.88 7.1 12 10.87z"}}]},j=O({name:"ControlPlatformIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:s}=y(t),p=o(()=>["t-icon","t-icon-control.platform",l.value]),v=o(()=>c(c({},s.value),r.style)),f=o(()=>({class:p.value,style:v.value,onClick:u=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:u})}}));return()=>d(g,f.value)}});export{j as default};
