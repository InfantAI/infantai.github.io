import{d as m,j as a,v as y,x as O,y as d}from"./index-3638f854.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 3.05a9 9 0 000 17.9V3.05zm2 0v1.79l2.18-1.26A8.95 8.95 0 0013 3.05zm4.25 1.64L13 7.15v4.04l6.7-3.86a9.05 9.05 0 00-2.45-2.64zm3.29 4.46L13 13.5v4.04l7.95-4.59a9.1 9.1 0 00-.41-3.8zm-.33 6.54L13 19.85v1.1a9 9 0 007.21-5.26zM1 12a11 11 0 1122 0 11 11 0 01-22 0z"}}]},j=m({name:"Contrast1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),p=a(()=>["t-icon","t-icon-contrast-1",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,u.value)}});export{j as default};
