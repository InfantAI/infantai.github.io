import{d as y,j as n,v as O,x as g,y as h}from"./index-b9cef0b8.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8792_6967)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.87 2.19a2.57 2.57 0 015.09.06 2.58 2.58 0 013.15 2.5v.84a2.58 2.58 0 013.14 2.5V15a8 8 0 01-8 8H11.9a8 8 0 01-7.74-5.97L2.9 12.2a2.3 2.3 0 013.8-2.24v-5.2a2.57 2.57 0 012.58-2.57h.6zm-.03 2.57a.57.57 0 10-1.14 0v8.74c0 1.08-1.43 1.38-1.9.47l-1.43-2.5a.3.3 0 00-.54.23l1.27 4.82A6 6 0 0011.9 21h1.35a6 6 0 006-6V8.09a.57.57 0 10-1.14 0V12h-2V4.76a.57.57 0 10-1.13 0V12h-2V2.57a.57.57 0 00-1.14 0V12h-2V4.76z"}}]}]},P=y({name:"GestureRanslationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=O(r),p=n(()=>["t-icon","t-icon-gesture-ranslation",l.value]),u=n(()=>s(s({},c.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(d,v.value)}});export{P as default};
