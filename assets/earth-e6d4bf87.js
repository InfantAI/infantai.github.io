import{d as y,j as a,v as O,x as m,y as d}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.04 11l-.07.78.03.01V12a11 11 0 101.58-5.69l-.03-.01-.39.77c-.6 1.2-.99 2.53-1.12 3.93zm2.1-.6c.1-.54.25-1.07.44-1.57l3.64 1.37 2.02-2.05 1.74.58v4.07l3.29 1.12 1.99 4.03 4.38-5.09.34-.19a9 9 0 01-14.8 6.2l3.2-6.35-6.23-2.11zm17.72.02l-1.51.88-2.63 3.05-1.02-2.06-2.72-.92V7.3L8.7 5.85l-2 2.02-2.2-.84a9 9 0 0116.36 3.4zM4.73 17.3A8.95 8.95 0 013 12.47l3.55 1.2-1.83 3.63z"}}]},b=y({name:"EarthIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-earth",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
