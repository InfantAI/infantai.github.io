import{d as h,j as a,v as m,x as d,y}from"./index-a2efab08.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v3.41l.4.2c.62.27 1.55.61 2.82.9C8.48 6.79 10.07 7 12 7c1.93 0 3.52-.21 4.78-.5A14.92 14.92 0 0020 5.42V2h2v13h1v2h-1v5h-2v-5H4v5H2v-5H1v-2h1V2h2zm0 13h2V8.27c-.8-.22-1.47-.45-2-.67V15zm4-6.3V15h3V8.98c-1.1-.04-2.1-.14-3-.29zm5 .28V15h3V8.7c-.9.14-1.9.24-3 .28zm5-.71V15h2V7.6c-.53.22-1.2.45-2 .67zm2.45-3.1z"}}]},b=h({name:"BridgeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),v=a(()=>["t-icon","t-icon-bridge",o.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(O,u.value)}});export{b as default};
