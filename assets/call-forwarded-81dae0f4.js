import{d,j as a,v as y,x as O,y as m}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2h8.58l1.49 6.7-1.86 1.85c1.09 1.7 2.54 3.15 4.24 4.24l1.86-1.86L22 14.42V23h-1a19.91 19.91 0 01-16.8-9.15A19.91 19.91 0 011 3V2zm2.03 2a17.9 17.9 0 008.2 14.12A17.9 17.9 0 0020 20.97v-4.95l-4.05-.9-2.18 2.18-.66-.38a16.07 16.07 0 01-6.03-6.03l-.38-.66 2.18-2.18L7.98 4H3.03zm13.16-1.72l5.41.12.12 5.42-2 .04-.04-2.12-3.3 3.3-1.41-1.42 3.3-3.3-2.13-.04.05-2z"}}]},b=d({name:"CallForwardedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-call-forwarded",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{b as default};
