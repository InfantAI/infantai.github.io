import{d as y,j as a,v as O,x as h,y as m}from"./index-3638f854.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .86L22 6.4V9H2V6.41L12 .86zM5.06 7h13.88L12 3.14 5.06 7zM7 11v8H5v-8h2zm6 0v8h-2v-8h2zm6 0v8h-2v-8h2zM2 21h20v2H2v-2z"}}]},b=y({name:"InstitutionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=O(r),v=a(()=>["t-icon","t-icon-institution",i.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
