import{d as y,j as a,v as m,x as O,y as d}from"./index-b9cef0b8.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5V10h-2V5.5l-4 1.67V9h-2V7.07l-4-2.33v12.19l1.87 1.09-1.01 1.72-1.93-1.13L2 21.5V5.93l7-4.09zm-1 15V4.73L4 7.07V18.5l4-1.67zM13.5 12h9v5.63a3 3 0 01-1.36 2.51L18 22.2l-3.14-2.05a3 3 0 01-1.36-2.5V12zm2 2v3.63a1 1 0 00.45.84L18 19.8l2.05-1.34a1 1 0 00.45-.84V14h-5z"}}]},b=y({name:"MapSafetyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=m(r),c=a(()=>["t-icon","t-icon-map-safety",l.value]),v=a(()=>s(s({},p.value),t.style)),f=a(()=>({class:c.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>O(h,f.value)}});export{b as default};
