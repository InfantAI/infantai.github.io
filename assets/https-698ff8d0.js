import{d as h,j as a,v as y,x as O,y as m}from"./index-ab78ae36.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.5 7.5a6.5 6.5 0 0113 0V9h2v13h-17V9h2V7.5zm2 1.5h9V7.5a4.5 4.5 0 10-9 0V9zm-2 2v9h13v-9h-13zm4.5 4.5a2 2 0 114 0 2 2 0 01-4 0z"}}]},b=h({name:"HttpsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=y(r),c=a(()=>["t-icon","t-icon-https",o.value]),v=a(()=>s(s({},p.value),t.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
