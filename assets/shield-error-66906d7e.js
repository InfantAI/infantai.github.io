import{d as h,j as a,v as d,x as m,y}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.67 23.44l.33-.94.33.94-.33.12-.33-.12zm.33-2.01a17.75 17.75 0 003.89-2.21c2.14-1.63 4.11-4 4.11-7.22V5.36l-8-2.8-8 2.8V12c0 3.22 1.97 5.59 4.1 7.2a17.75 17.75 0 003.9 2.23zm-5.1-.63C4.53 19.01 2 16.13 2 12V3.94l10-3.5 10 3.5V12c0 4.13-2.53 7.01-4.9 8.8a19.75 19.75 0 01-4.73 2.63l-.03.01h-.01L12 22.5l-.33.94h-.04a6.99 6.99 0 01-.4-.16A19.76 19.76 0 016.9 20.8zm4.1-4.3V10h2v6.5h-2zm2-8h-2v-2h2v2z"}}]},b=h({name:"ShieldErrorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=d(t),p=a(()=>["t-icon","t-icon-shield-error",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(O,u.value)}});export{b as default};
