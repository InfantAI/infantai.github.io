import{d as h,j as a,v as y,x as O,y as d}from"./index-b9cef0b8.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v1h3v6h-.94c.2 1.79.87 4.2 1.82 6.58 1.06 2.66 2.37 5.09 3.55 6.42H22v2h-7.85l-.14-.83v-.01a2 2 0 00-.08-.34 3.94 3.94 0 00-.36-.82c-.33-.57-.8-1-1.57-1-.76 0-1.24.43-1.57 1a3.94 3.94 0 00-.44 1.16l-.14.84H2v-2h1.57c1.18-1.33 2.5-3.76 3.55-6.42A27.7 27.7 0 008.94 8H8V2h3V1h2zm-2.05 7c-.2 2.1-.97 4.8-1.97 7.32A30.53 30.53 0 016.08 21h2.16c.1-.3.25-.65.46-1 .54-.93 1.56-2 3.3-2a3.75 3.75 0 013.3 2c.21.35.36.7.46 1h2.16a30.53 30.53 0 01-2.9-5.68c-1-2.52-1.77-5.22-1.97-7.32h-2.1zM10 6h4V4h-4v2z"}}]},w=h({name:"Tower1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),p=a(()=>["t-icon","t-icon-tower-1",o.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{w as default};
