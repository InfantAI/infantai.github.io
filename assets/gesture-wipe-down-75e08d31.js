import{d as y,j as l,v as O,x as d,y as g}from"./index-3638f854.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{fill:"currentColor",clipPath:"url(#clip0_8792_7016)"},children:[{tag:"path",attrs:{d:"M5.93 2.52l-.7.7A11 11 0 004.2 17.6v-2.1h2v4.99H.5v-2h1.87A13 13 0 013.8 1.8l.7-.7 1.42 1.4zM10 6.65a.76.76 0 00-1.3.75l5.01 8.69-4.4 1.38v.18l5.2 2.15c.2.09.45.07.66-.04l6.13-3.55a.76.76 0 00.37-.8l-1.13-5.53a.76.76 0 00-.74-.6l-4.2-.02a.76.76 0 00-.38.1l-2.74 1.58-2.47-4.3zM7.98 4.64c1.32-.76 3-.31 3.77 1l1.48 2.56 1-.57c.42-.25.9-.38 1.39-.37l4.2.02c1.3 0 2.42.92 2.68 2.2L23.63 15a2.76 2.76 0 01-1.33 2.95l-6.13 3.54c-.74.43-1.64.49-2.43.16l-6.52-2.7.1-1.69c.06-.77.58-1.44 1.32-1.67l2.1-.66L6.96 8.4c-.77-1.32-.31-3 1-3.76z"}}]}]},w=y({name:"GestureWipeDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=O(r),p=l(()=>["t-icon","t-icon-gesture-wipe-down",a.value]),u=l(()=>c(c({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(h,v.value)}});export{w as default};
