import{d as y,j as a,v as O,x as h,y as m}from"./index-a2c26395.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm8 3.25a2 2 0 00-1.89 1.33l-.33.95-1.89-.67.34-.94a4 4 0 116.24 4.47 7 7 0 00-1.1 1.01c-.27.34-.37.61-.37.85v1.25h-2v-1.25c0-.87.39-1.57.83-2.11.43-.53.97-.97 1.4-1.32A2 2 0 0012 7.25zm-1 9.25h2v2h-2v-2z"}}]},b=y({name:"HelpRectangleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-help-rectangle",l.value]),v=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(g,u.value)}});export{b as default};
