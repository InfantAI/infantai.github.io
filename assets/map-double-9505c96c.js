import{d as m,j as l,v as y,x as O,y as d}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 1.84l4.57 2.67 5.43-2.26v6.37L22 6.75v12.2l-5.5 3.2-4.57-2.66-5.43 2.26v-6.38L2 17.25V5.05l5.5-3.2zm-1 11.37V9.55l5.12-2.99-4.12-2.4L4 6.2v8.05l2.5-1.04zm5.87-6.65l3.13 1.82V5.25l-3.13 1.3zm5.13 4.23v8.47L20 17.8V9.75l-2.5 1.04zm-2 8.47V10.7L13 9.24v8.56l2.5 1.46zM11 17.7V9.24L8.5 10.7v8.05l2.5-1.04z"}}]},j=m({name:"MapDoubleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:p}=y(t),c=l(()=>["t-icon","t-icon-map-double",a.value]),v=l(()=>s(s({},p.value),r.style)),u=l(()=>({class:c.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(b,u.value)}});export{j as default};
