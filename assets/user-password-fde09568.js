import{d,j as a,v as h,x as y,y as O}from"./index-c831df68.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM17 12h4v2h-2v2h1.95l1.55 1.14v5.36h-9v-5.36L15.05 16H17v-4zm-9 4a4 4 0 00-4 4h7.55v2H2v-2a6 6 0 016-6h3.5v2H8zm7.5 2.15v2.35h5v-2.35l-.2-.15h-4.6l-.2.15z"}}]},g=d({name:"UserPasswordIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=h(t),c=a(()=>["t-icon","t-icon-user-password",o.value]),p=a(()=>i(i({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>y(m,u.value)}});export{g as default};
