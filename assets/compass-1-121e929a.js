import{d as m,j as n,v as y,x as O,y as d}from"./index-a2efab08.js";function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var z={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.9 12l4.33 1.15a2.1 2.1 0 010-2.3L5.9 12zm4.95-1.77a2.1 2.1 0 012.3 0L12 5.9l-1.15 4.34zm2.48-7.13l1.59 5.98 5.98 1.6a9 9 0 00-7.57-7.58zM18.1 12l-4.34-1.15a2.1 2.1 0 010 2.3L18.1 12zm-4.96 1.77a2.1 2.1 0 01-2.3 0L12 18.1l1.15-4.34zm-2.48 7.13l-1.59-5.98-5.98-1.6a9 9 0 007.57 7.58zM3.1 10.67l5.98-1.59 1.6-5.98a9 9 0 00-7.58 7.57zM13.33 20.9a9 9 0 007.57-7.57l-5.98 1.59-1.6 5.98zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm11-.11a.11.11 0 100 .22.11.11 0 000-.22z"}}]},b=m({name:"Compass1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:c}=y(t),p=n(()=>["t-icon","t-icon-compass-1",l.value]),u=n(()=>i(i({},c.value),r.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(z,v.value)}});export{b as default};
