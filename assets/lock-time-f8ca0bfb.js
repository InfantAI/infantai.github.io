import{d as m,j as a,v as h,x as y,y as O}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.5 7.5a6.5 6.5 0 0113 0V9h2v2.5h-2V11h-13v9h6v2h-8V9h2V7.5zm2 1.5h9V7.5a4.5 4.5 0 10-9 0V9zm11 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM13 18.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm-4-4h2.5v2H9v-2zm10.5 1.75v1.84l1.41 1.41-1.41 1.41-2-2v-2.66h2z"}}]},b=m({name:"LockTimeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=h(r),v=a(()=>["t-icon","t-icon-lock-time",o.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
