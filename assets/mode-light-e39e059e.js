import{d as h,j as a,v as m,x as d,y as g}from"./index-a2c26395.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7797)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 0h2v2h-2V0zM4.22 2.8l1.42 1.42-1.42 1.42-1.41-1.42L4.22 2.8zm15.56 0l1.42 1.42-1.42 1.42-1.42-1.42 1.42-1.42zM12 6a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1116 0 8 8 0 01-16 0zm-4-1h2v2H0v-2zm22 0h2v2h-2v-2zM4.22 18.36l1.42 1.42-1.42 1.41-1.41-1.41 1.41-1.42zm15.56 0l1.42 1.42-1.42 1.41-1.42-1.41 1.42-1.42zM11 22h2v2h-2v-2z"}}]}]},z=h({name:"ModeLightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),p=a(()=>["t-icon","t-icon-mode-light",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(y,u.value)}});export{z as default};
