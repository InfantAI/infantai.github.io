import{d as y,j as a,v as O,x as g,y as m}from"./index-a2c26395.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.18 1h5.64l.65 3.24a8.5 8.5 0 011.52.88l3.13-1.06 2.82 4.88-2.49 2.18a8.58 8.58 0 010 1.76l2.49 2.18-2.82 4.88-3.13-1.06a8.5 8.5 0 01-1.52.88L14.82 23H9.18l-.65-3.24a8.5 8.5 0 01-1.52-.88l-3.13 1.06-2.82-4.88 2.48-2.18a8.59 8.59 0 010-1.76L1.06 8.94l2.82-4.88 3.13 1.06a8.5 8.5 0 011.52-.88L9.18 1zm1.64 2l-.54 2.7-.53.2A6.5 6.5 0 007.85 7l-.44.36-2.61-.88-1.18 2.04 2.07 1.82-.1.55a6.55 6.55 0 000 2.22l.1.55-2.07 1.82 1.18 2.04 2.61-.88.43.36a6.5 6.5 0 001.91 1.1l.53.2.54 2.7h2.36l.54-2.7.53-.2a6.5 6.5 0 001.9-1.1l.44-.36 2.61.88 1.18-2.04-2.07-1.82.1-.55a6.55 6.55 0 000-2.22l-.1-.55 2.07-1.82-1.18-2.04-2.61.88-.43-.36a6.5 6.5 0 00-1.91-1.1l-.53-.2-.54-2.7h-2.36zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"}}]},b=y({name:"Setting1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-setting-1",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(d,v.value)}});export{b as default};
