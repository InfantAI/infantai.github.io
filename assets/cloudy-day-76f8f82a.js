import{d as f,j as a,v as d,x as O,y as m}from"./index-3638f854.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.41 6a5 5 0 019.17 0A4.5 4.5 0 0123 10.5c0 1.22-.62 2.33-1.39 3.11-.46.48-1.05.9-1.69 1.14A5.3 5.3 0 0114.75 21H5.4A4.43 4.43 0 011 16.53a4.47 4.47 0 012.56-4.05l-.01-.28A6.16 6.16 0 019.41 6zm2.12.3a6.17 6.17 0 013.95 4.08 5.25 5.25 0 013.74 2.5c.31-.13.65-.35.97-.67.51-.53.81-1.16.81-1.71a2.5 2.5 0 00-2.94-2.46l-.92.16-.22-.91a3 3 0 00-5.4-1zM9.65 8a4.15 4.15 0 00-4.03 4.98l.17.93-.93.22A2.45 2.45 0 003 16.53C3 17.91 4.1 19 5.4 19h9.35A3.3 3.3 0 0018 15.67c0-.46-.09-.9-.25-1.3a3.25 3.25 0 00-3.05-2.04l-.87.02-.14-.85A4.14 4.14 0 009.65 8z"}}]},j=f({name:"CloudyDayIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-cloudy-day",l.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:y=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:y})}}));return()=>O(g,v.value)}});export{j as default};
