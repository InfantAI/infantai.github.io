import{d as f,j as v,v as m,x as d,y}from"./index-d4c9a0d0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm5 2v1h2V6h2v1h2V6h2v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h-2v-1h-2v1h-2v-1H9v1H7v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6h2zm0 3v2h2V9H9zm4 0v2h2V9h-2zm2 4h-2v2h2v-2zm-4 2v-2H9v2h2z"}}]},b=f({name:"MapGridIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=v(()=>e.size),{className:a,style:h}=m(t),s=v(()=>["t-icon","t-icon-map-grid",a.value]),p=v(()=>l(l({},h.value),r.style)),c=v(()=>({class:s.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>d(O,c.value)}});export{b as default};
