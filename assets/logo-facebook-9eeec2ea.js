import{d as y,j as o,v as O,x as h,y as g}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 6a6 6 0 016-6h5v6.5h-4v2h4.25L17.8 15H15v9H8v-9H4.25V8.5H8V6zm6-4a4 4 0 00-4 4v4.5H6.25V13H10v9h3v-9h3.2l.55-2.5H13v-4c0-1.1.9-2 2-2h2V2h-3z"}}]},m=y({name:"LogoFacebookIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=O(t),v=o(()=>["t-icon","t-icon-logo-facebook",a.value]),p=o(()=>c(c({},s.value),r.style)),u=o(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(b,u.value)}});export{m as default};
