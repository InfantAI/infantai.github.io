import{d as m,j as a,v as y,x as O,y as d}from"./index-b9cef0b8.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 1.8l4 2.67v6.35l12-2V22h-6v-4h-2v4H2V4.47L6 1.8zM4 5.54V20h8v-4h6v4h2v-8.82l-12 2V5.54L6 4.2 4 5.54z"}}]},b=m({name:"Museum2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),u=a(()=>["t-icon","t-icon-museum-2",l.value]),p=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:u.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
