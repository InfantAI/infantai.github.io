import{d as y,j as a,v as O,x as h,y as d}from"./index-3638f854.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.03 3.38l.47.01c.37.03.83.13 1.25.42.45.3.79.75.94 1.36.14.6.08 1.15-.18 1.65a2.7 2.7 0 01-1 1c-.52.33-1.16.54-1.65.67l-1.07 1.86a5.99 5.99 0 01.68 8.65H22v2H2v-2h2.7A8 8 0 0110 5h3v2h-3a6 6 0 000 12h5a4 4 0 10-4-4v1H9v-1a5.98 5.98 0 014.95-5.91l1.73-3.01a6.56 6.56 0 01-.25-1.77c.01-.42.1-.91.38-1.36.3-.47.75-.8 1.33-.97.6-.18 1.17-.12 1.66.11.46.23.77.58.99.88.1.14.17.28.24.41zm-3.8 5.75c.28.05.56.13.82.23l1.5-2.58.4-.11c.57-.15 1.13-.3 1.52-.54.18-.12.25-.2.27-.25.01-.02.04-.08 0-.23-.03-.14-.08-.17-.1-.18a.68.68 0 00-.3-.09 2.05 2.05 0 00-.68.06l-.99.29-.25-1a1.16 1.16 0 00-.06-.2 2.04 2.04 0 00-.22-.41.67.67 0 00-.22-.23c-.02-.01-.07-.03-.2 0-.17.05-.2.1-.21.13a.74.74 0 00-.08.35c-.01.46.13 1 .29 1.58l.1.41-1.59 2.77z"}}]},b=y({name:"ChickenIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:c,style:s}=O(t),p=a(()=>["t-icon","t-icon-chicken",c.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(m,u.value)}});export{b as default};
