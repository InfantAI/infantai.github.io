import{d as y,j as a,v as O,x as d,y as h}from"./index-b9cef0b8.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 2v4.66l1.53-1.47 1.38 1.45L19 10.38l-3.91-3.74 1.38-1.45L18 6.66V2h2zM1 3h13v2H3v11h18v-4h2v6H1V3zm4 17h14v2H5v-2z"}}]},b=y({name:"InstallDesktopIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=O(r),c=a(()=>["t-icon","t-icon-install-desktop",l.value]),v=a(()=>i(i({},p.value),t.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(m,u.value)}});export{b as default};
