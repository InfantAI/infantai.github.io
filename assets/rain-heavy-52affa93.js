import{d as y,j as a,v as O,x as h,y as m}from"./index-ab78ae36.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.1 4h-.06A4.3 4.3 0 006.7 8.2c0 .26.03.52.07.77l.19.95-.95.21A2.5 2.5 0 004 12.53c0 .95.57 1.8 1.43 2.2l.9.44-.86 1.8-.9-.43a4.46 4.46 0 01-2.57-4 4.46 4.46 0 012.7-4.08V8.2A6.3 6.3 0 0111.1 2c.55 0 1.08.07 1.59.2a6.33 6.33 0 014.53 4.18 5.59 5.59 0 012.65 1.07A5.27 5.27 0 0122 11.67a5.33 5.33 0 01-3.31 4.9l-.92.38-.77-1.83V18h-2v-6h2v3.1l.91-.38A3.33 3.33 0 0020 11.67a3.27 3.27 0 00-1.74-2.89 3.61 3.61 0 00-1.82-.45l-.85.02-.15-.84a4.29 4.29 0 00-3.23-3.38A4.6 4.6 0 0011.1 4zm1.9 6v10h-2V10h2zm-4 2v6H7v-6h2z"}}]},b=y({name:"RainHeavyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),v=a(()=>["t-icon","t-icon-rain-heavy",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
