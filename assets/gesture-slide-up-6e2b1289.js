import{d,j as l,v as y,x as O,y as g}from"./index-b9cef0b8.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{fill:"currentColor",clipPath:"url(#clip0_8792_7019)"},children:[{tag:"path",attrs:{d:"M.5 1.51h5.7v5h-2V4.4a11 11 0 001.02 14.37l.7.7-1.4 1.42-.71-.7A13 13 0 012.37 3.5H.5v-2zM10 8.65a.76.76 0 00-1.3.75l5.01 8.69-4.4 1.38v.18l5.2 2.15c.2.09.45.07.66-.04l6.13-3.55a.76.76 0 00.37-.8l-1.13-5.53a.76.76 0 00-.74-.6l-4.2-.02a.76.76 0 00-.38.1l-2.74 1.58-2.47-4.3zM7.98 6.64c1.32-.76 3-.31 3.77 1l1.48 2.56 1-.57c.42-.25.9-.38 1.39-.37l4.2.02c1.3 0 2.42.92 2.68 2.2L23.63 17a2.76 2.76 0 01-1.33 2.95l-6.13 3.54c-.74.43-1.64.49-2.43.16l-6.52-2.7.1-1.69c.06-.77.58-1.44 1.32-1.67l2.1-.66-3.77-6.53c-.77-1.32-.31-3 1-3.76z"}}]}]},P=d({name:"GestureSlideUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=y(r),p=l(()=>["t-icon","t-icon-gesture-slide-up",a.value]),u=l(()=>o(o({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(h,v.value)}});export{P as default};
