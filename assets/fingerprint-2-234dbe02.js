import{d as y,j as a,v as O,x as g,y as d}from"./index-a2efab08.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 11a10 10 0 00-20 0v3c0 2.64.57 5.15 1.6 7.41l.4.91 1.83-.82-.42-.91C4.51 18.58 4 16.35 4 14v-3a8 8 0 1116 0v3h2v-3zm-4.5 0a5.5 5.5 0 10-11 0v3c0 2.8.85 5.4 2.31 7.56l.57.83 1.65-1.12-.56-.83A11.44 11.44 0 018.5 14v-3a3.5 3.5 0 117 0v3a4.5 4.5 0 004.5 4.5h2v-2h-2a2.5 2.5 0 01-2.5-2.5v-3zM11 10v4a9 9 0 004.64 7.87l.87.49.97-1.75-.87-.48A7 7 0 0113 14v-4h-2z"}}]},b=y({name:"Fingerprint2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:c}=O(t),s=a(()=>["t-icon","t-icon-fingerprint-2",i.value]),p=a(()=>v(v({},c.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>g(m,u.value)}});export{b as default};
