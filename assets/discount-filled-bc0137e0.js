import{d,j as a,v as y,x as O,y as m}from"./index-b9cef0b8.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.47 7.52a1.5 1.5 0 10-2.12 2.13 1.5 1.5 0 002.12-2.13z"}},{tag:"path",attrs:{fill:"currentColor",d:"M22 2l.81 10.5-10.93 10.93L.57 12.13 11.5 1.18l10.5.8zm-8.7 4.46a3 3 0 104.24 4.25 3 3 0 00-4.25-4.25z"}}]},j=d({name:"DiscountFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=y(r),p=a(()=>["t-icon","t-icon-discount-filled",l.value]),u=a(()=>s(s({},c.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,f.value)}});export{j as default};
