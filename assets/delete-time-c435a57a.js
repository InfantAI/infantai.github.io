import{d as m,j as a,v as h,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 1h9v3H22v2h-2.03l-.16 5.53-2-.06.16-5.47H6.03l.44 15h5.03v2H4.53l-.5-17H2V4h5.5V1zm2 3h5V3h-5v1zM13 8v7h-2V8h2zm5.5 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM13 18.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm6.5-2.25v1.84l1.41 1.41-1.41 1.41-2-2v-2.66h2z"}}]},b=m({name:"DeleteTimeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=h(r),v=a(()=>["t-icon","t-icon-delete-time",l.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
