import{d as h,j as a,v as m,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.29 6L7.5 9.96l3.93-6.94A8.98 8.98 0 005.29 6zm8.36-2.85L11.47 7h8.01a9 9 0 00-5.83-3.85zM20.49 9h-4.53l4.03 7.16a8.96 8.96 0 00.5-7.16zm-1.77 8.99l-2.22-3.95-3.9 6.94a8.98 8.98 0 006.12-3zm-8.35 2.86L12.54 17H4.52a9 9 0 005.85 3.85zM3.51 15h4.53l-1.41-2.51-2.61-4.66a8.96 8.96 0 00-.5 7.17zm6.82 0h3.34l1.68-3-1.68-3h-3.33l-1.7 3 1.7 3zM3.3 5.28a10.98 10.98 0 0118.8 2.32 10.97 10.97 0 01-1.37 11.1A10.98 10.98 0 011 12c0-2.53.85-4.86 2.29-6.72z"}}]},z=h({name:"ShutterIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=m(r),p=a(()=>["t-icon","t-icon-shutter",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,v.value)}});export{z as default};
