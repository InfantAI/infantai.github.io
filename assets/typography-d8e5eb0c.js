import{d as f,j as a,v as O,x as h,y as m}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 3h15v8H2V3zm2 2v4h11V5H4zm-2 9h20v2H2v-2zm0 5h20v2H2v-2z"}}]},b=f({name:"TypographyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),c=a(()=>["t-icon","t-icon-typography",o.value]),v=a(()=>p(p({},s.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:y=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:y})}}));return()=>h(g,u.value)}});export{b as default};
