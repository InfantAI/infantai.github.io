import{d as f,j as a,v as m,x as y,y as O}from"./index-b9cef0b8.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V11h-2V9h-6V3H5v18h16v2H3V1zm12 2.41V7h3.59L15 3.41zM8 12v8H6v-8h2zm.5 2c0-1.1.9-2 2-2H12v2h-1.5v4H12v2h-1.5a2 2 0 01-2-2v-4zm4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm5.5-2h3a2 2 0 012 2v6h-2v-6h-1v6h-2v-8zm-3.5 2v4h1v-4h-1z"}}]},b=f({name:"FileIconIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),s=a(()=>["t-icon","t-icon-file-icon",o.value]),p=a(()=>v(v({},c.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>y(d,h.value)}});export{b as default};
