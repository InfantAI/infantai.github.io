import{d as y,j as a,v as O,x as h,y as m}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1.6l4.91 4.85-1.4 1.42L13 5.4v7.11h-2V5.4L8.5 7.86 7.08 6.45 12 1.6zM2 2h5.5v2H4v10h16V4h-3.5V2H22v20H2V2zm18 14H4v4h16v-4zM6 17h2v2H6v-2zm3 0h2v2H9v-2z"}}]},b=y({name:"UninstallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:v}=O(r),c=a(()=>["t-icon","t-icon-uninstall",l.value]),p=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
