import{d as y,j as a,v as O,x as m,y as d}from"./index-a2c26395.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21.2 9.8a13 13 0 00-18.4 0l-.7.71L.7 9.1l.7-.7a15 15 0 0121.22 0l.7.7-1.41 1.41-.7-.7zm-4.6 4.6a6.5 6.5 0 00-9.2 0l-.7.71-1.42-1.41.71-.71a8.5 8.5 0 0112.02 0l.7.7-1.4 1.42-.71-.7zm-6.01 3.19a2 2 0 012.82 0l.71.7L12 20.41 9.88 18.3l.7-.7z"}}]},j=y({name:"WifiIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-wifi",l.value]),f=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>m(g,u.value)}});export{j as default};
