import{d,j as a,v as y,x as O,y as h}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.1 5h-.06A4.3 4.3 0 006.7 9.2c0 .26.03.52.07.77l.19.95-.95.21A2.5 2.5 0 004 13.53c0 .95.57 1.8 1.43 2.2l.9.44-.86 1.8-.9-.43a4.46 4.46 0 01-2.57-4 4.46 4.46 0 012.7-4.08V9.2A6.3 6.3 0 0111.1 3c.55 0 1.08.07 1.59.2a6.33 6.33 0 014.53 4.18 5.59 5.59 0 012.65 1.07A5.27 5.27 0 0122 12.67a5.33 5.33 0 01-3.31 4.9l-.92.38-.78-1.84.92-.4A3.33 3.33 0 0020 12.68a3.27 3.27 0 00-1.74-2.89 3.61 3.61 0 00-1.82-.45l-.85.02-.15-.84a4.29 4.29 0 00-3.23-3.38A4.6 4.6 0 0011.1 5zm2.78 5.68L11.82 14h4.02l-4.03 6.38-1.69-1.07L12.21 16H8.23l3.95-6.38 1.7 1.06z"}}]},b=d({name:"ThunderIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-thunder",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,v.value)}});export{b as default};
