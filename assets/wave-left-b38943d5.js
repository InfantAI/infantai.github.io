import{d as y,j as n,v as O,x as m,y as d}from"./index-a2c26395.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.16 3.2l-.83.56c-1 .7-1.88 1.57-2.57 2.57l-.57.83-1.64-1.14.56-.82C2.94 4 4 2.94 5.2 2.1l.82-.56 1.14 1.64zm4.3 3.68a.39.39 0 00-.55.55l5.23 5.23-1.41 1.42-6.6-6.6a.39.39 0 00-.55.54l6.6 6.6-1.41 1.42-5.24-5.24a.39.39 0 00-.55.55l2.09 2.08 3.15 3.16L10.81 18l-3.16-3.15a.39.39 0 00-.54.55l4.32 4.32a5.19 5.19 0 007.34 0l.84-.85c1.67-1.67 2-4.25.81-6.29l-2.22-3.8a.15.15 0 00-.27.1l.67 2.5a1 1 0 01-.28.98 1 1 0 01-1.4-.01l-5.46-5.47zm-5.47 6.3l-.42-.42a2.39 2.39 0 01.33-3.65A2.39 2.39 0 019.22 5.8a2.39 2.39 0 013.65-.33l3.08 3.08a2.15 2.15 0 013.97-.78l2.23 3.82a7.19 7.19 0 01-1.12 8.7l-.85.85a7.19 7.19 0 01-10.17 0L5.7 16.81a2.39 2.39 0 01.3-3.63z"}}]},j=y({name:"WaveLeftIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=O(r),p=n(()=>["t-icon","t-icon-wave-left",l.value]),v=n(()=>c(c({},s.value),t.style)),f=n(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,f.value)}});export{j as default};
