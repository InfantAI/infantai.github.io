import{d as y,j as a,v as d,x as O,y as g}from"./index-c831df68.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.13.92l-.1 1.19-.02.39a4.5 4.5 0 004.9 4.49l1.19-.1-.1 1.18a6.5 6.5 0 01-2.17 4.3c.74.9 1.19 2.06 1.19 3.31 0 2.98-2.5 5.34-5.5 5.34H6.6c-2.5 0-4.6-1.97-4.6-4.47a4.46 4.46 0 012.7-4.08v-.26c0-3.15 2.4-5.7 5.47-6.14a6.51 6.51 0 015.78-5.05l1.18-.1zm-4.9 5.18l.47.1a6.33 6.33 0 014.53 4.19c.73.09 1.4.32 2.02.66l.03.01a4.52 4.52 0 001.5-2.1 6.5 6.5 0 01-5.72-5.72 4.52 4.52 0 00-2.83 2.86zM11.11 8h-.07a4.3 4.3 0 00-4.34 4.21c0 .26.03.52.08.77l.18.95-.95.21A2.5 2.5 0 004 16.54a2.54 2.54 0 002.6 2.48h9.91c1.98 0 3.5-1.53 3.5-3.34a3.28 3.28 0 00-1.73-2.89 3.62 3.62 0 00-1.82-.45l-.86.02-.15-.85a4.3 4.3 0 00-3.23-3.37A4.61 4.61 0 0011.1 8z"}}]},b=y({name:"CloudyNightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=d(r),p=a(()=>["t-icon","t-icon-cloudy-night",l.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
