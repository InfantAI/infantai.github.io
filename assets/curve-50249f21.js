import{d as y,j as a,v as O,x as d,y as m}from"./index-a2efab08.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.33 7.44A10.9 10.9 0 003 11.76v1H1v-1c0-1.44.65-3.54 1.56-5.26a9.8 9.8 0 011.66-2.34A3.5 3.5 0 016.62 3c.94 0 1.74.49 2.36 1.08.62.6 1.17 1.39 1.63 2.23.92 1.67 1.6 3.72 1.87 5.27v.03c.18 1.16.81 3.12 1.68 4.77.44.83.9 1.53 1.36 2 .48.5.81.62.98.62.19 0 .51-.11.96-.58.43-.44.87-1.1 1.26-1.9.79-1.6 1.28-3.5 1.28-4.76v-1h2v1c0 1.64-.6 3.86-1.49 5.65-.44.9-.99 1.76-1.61 2.4A3.42 3.42 0 0116.5 21c-.99 0-1.81-.6-2.42-1.23-.64-.67-1.2-1.54-1.69-2.46a19.11 19.11 0 01-1.88-5.4 16.44 16.44 0 00-1.65-4.64A7.3 7.3 0 007.6 5.53C7.17 5.12 6.84 5 6.62 5c-.19 0-.53.12-1 .58-.44.44-.89 1.1-1.3 1.86zM4 11h5v2H4v-2zm10 0h5v2h-5v-2z"}}]},b=y({name:"CurveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=O(t),s=a(()=>["t-icon","t-icon-curve",o.value]),p=a(()=>i(i({},v.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>d(h,u.value)}});export{b as default};
