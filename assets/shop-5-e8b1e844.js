import{d as h,j as a,v as y,x as O,y as m}from"./index-9eb1327f.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.28 2h17.44l.97 2.91c.18.55.4 1.34.17 2.16A4 4 0 0121 8.65V20h1v2H2v-2h1V8.65C2.38 7.95 2 7 2 6v-.16L3.28 2zM5 9.87V20h3v-7h8v7h3V9.87a4 4 0 01-4-1.22 3.99 3.99 0 01-6 0 3.99 3.99 0 01-4 1.22zM10 6a2 2 0 104 0V4h-4v2zM8 4H4.72l-.71 2.15A2 2 0 006 8a2 2 0 002-2V4zm8 0v2a2 2 0 003.93.54c.06-.22.02-.52-.14-1L19.28 4H16zm-2 16v-5h-4v5h4z"}}]},b=h({name:"Shop5Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),p=a(()=>["t-icon","t-icon-shop-5",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
