import{d as y,j as n,v as O,x as m,y as d}from"./index-9eb1327f.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm7-3.5v1a.5.5 0 001 0v-1h2v1a2.5 2.5 0 01-5 0v-1h2zm7 0v1a.5.5 0 001 0v-1h2v1a2.5 2.5 0 01-5 0v-1h2zm-6.1 5.13l.5.87a3 3 0 005.2 0l.5-.87 1.73 1-.5.87a5 5 0 01-8.66 0l-.5-.86 1.73-1z"}}]},b=y({name:"FeelAtEaseIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=O(r),v=n(()=>["t-icon","t-icon-feel-at-ease",l.value]),p=n(()=>s(s({},c.value),t.style)),u=n(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(h,u.value)}});export{b as default};
