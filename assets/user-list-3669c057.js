import{d as h,j as a,v as y,x as O,y as m}from"./index-c831df68.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM8 16a4 4 0 00-4 4h7.8v2H2v-2a6 6 0 016-6h3.75v2H8zm5.75-2h8.5v2h-8.5v-2zm0 3h8.5v2h-8.5v-2zm0 3h8.5v2h-8.5v-2z"}}]},b=h({name:"UserListIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=y(t),c=a(()=>["t-icon","t-icon-user-list",o.value]),p=a(()=>l(l({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
