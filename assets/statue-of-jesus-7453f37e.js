import{d as O,j as a,v as y,x as h,y as m}from"./index-9eb1327f.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 1h4v4h-4V1zM2 6h20v2.66l-7 3V17h.78l1.5 6H6.72l1.5-6H9v-5.34l-7-3V6zm7 3.48V8H5.54L9 9.48zM11 8v2.59l2 2V8h-2zm4 0v1.48L18.46 8H15zm-2 7.41l-2-2V17h2v-1.59zM14.22 19H9.78l-.5 2h5.44l-.5-2z"}}]},j=O({name:"StatueOfJesusIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=y(r),u=a(()=>["t-icon","t-icon-statue-of-jesus",l.value]),p=a(()=>i(i({},c.value),t.style)),v=a(()=>({class:u.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,v.value)}});export{j as default};
