import{d as h,j as a,v as y,x as O,y as m}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.75 2.5h10.5v2.75c0 1.57-.69 2.98-1.78 3.94a9.03 9.03 0 014.4 3.95l.5.88-1.76.97-.48-.88A7 7 0 005 17.5v.5c0 1.1.9 2 2 2h7v2H7a4 4 0 01-4-4v-.5a9 9 0 015.53-8.3 5.24 5.24 0 01-1.78-3.95V2.5zm5.25 6c1.8 0 3.25-1.46 3.25-3.25V4.5h-6.5v.75c0 1.8 1.46 3.25 3.25 3.25zm4 7.5h7v2h-7v-2zm0 4h7v2h-7v-2z"}}]},b=h({name:"WealthIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),v=a(()=>["t-icon","t-icon-wealth",l.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
