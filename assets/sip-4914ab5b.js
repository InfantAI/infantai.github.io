import{d as y,j as a,v as O,x as d,y as m}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.78 8.13a3.42 3.42 0 10-4.84-4.84l-1.75 1.75-1.28-1.29-1.42 1.42 1.29 1.28-10.7 10.7V22H6.9l10.7-10.7 1.3 1.28 1.4-1.41-1.28-1.29 1.75-1.75zM16.2 9.88L6.1 20H4.07v-2.01L14.2 7.87l2.01 2.01zm-.6-3.43l1.75-1.75a1.42 1.42 0 112.02 2.02l-1.75 1.75-2.02-2.02z"}}]},j=y({name:"SipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=O(t),c=a(()=>["t-icon","t-icon-sip",l.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{j as default};
