import{d as g,j as a,v as d,x as y,y as O}from"./index-b9cef0b8.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.3 1.2l3.72 1 2.56 8.97 4.96 1.33a2.5 2.5 0 11-1.3 4.83L1.56 12.58l.46-7.12 3.18.85.64 2.24 3.33.9.14-8.25zm1.96 2.6l-.14 8.24-6.9-1.85-.42-1.44-.15 2.33 16.12 4.31a.5.5 0 10.25-.96l-6.05-1.62-2.56-8.97-.15-.04zM2 19h20v2H2v-2z"}}]},b=g({name:"FlightLandingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=d(r),p=a(()=>["t-icon","t-icon-flight-landing",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
