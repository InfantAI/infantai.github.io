import{d as y,j as a,v as h,x as O,y as m}from"./index-9eb1327f.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 2.5h9v4H22V11h-2V8.5H4v11h7v2H2v-15h5.5v-4zm2 4h5v-2h-5v2zm8.5 8a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm6.5-2.25v1.84L20.41 19 19 20.41l-2-2v-2.66h2z"}}]},b=y({name:"WorkHistoryIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=h(t),c=a(()=>["t-icon","t-icon-work-history",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
