import{d as y,j as o,v as m,x as O,y as d}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v7h7V4H4zm9 0v16h7V4h-7zm-2 16v-7H4v7h7z"}}]},b=y({name:"ComponentLayoutIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:s}=m(r),p=o(()=>["t-icon","t-icon-component-layout",a.value]),v=o(()=>c(c({},s.value),t.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,u.value)}});export{b as default};
