import{d as m,j as a,v as h,x as y,y as O}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 4.77V20h2v-5h2v5h2V4.77a6.22 6.22 0 00-6 0zm8 1.61v3.72A6.98 6.98 0 0122 8h1v14H1V8h1c1.96 0 3.73.8 5 2.1V6.38l-.03.03-1.38-1.45.72-.69A8.28 8.28 0 0112 2a8.22 8.22 0 015.69 2.28l.72.69-1.38 1.44-.03-.03zM7 15a5 5 0 00-4-4.9V20h4v-5zm10 5h4v-9.9a5 5 0 00-4 4.9v5zM11 7h2v2h-2V7z"}}]},b=m({name:"Museum1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=h(t),v=a(()=>["t-icon","t-icon-museum-1",o.value]),u=a(()=>s(s({},c.value),r.style)),p=a(()=>({class:v.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,p.value)}});export{b as default};
