import{d as y,j as a,v as m,x as O,y as h}from"./index-9eb1327f.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v18H1V3zm2 2v14h18V5H3zm12.5 4.5a1 1 0 110 2 1 1 0 010-2zm2.4 2.8a3 3 0 10-4.8 0 4 4 0 00-1.6 3.2v1h2v-1a2 2 0 114 0v1h2v-1a4 4 0 00-1.6-3.2zM5 9h4.5v2H5V9zm0 4h4.5v2H5v-2z"}}]},b=y({name:"VerifyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),c=a(()=>["t-icon","t-icon-verify",o.value]),p=a(()=>v(v({},s.value),r.style)),f=a(()=>({class:c.value,style:p.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>O(d,f.value)}});export{b as default};
