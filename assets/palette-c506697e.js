import{d as y,j as a,v as O,x as m,y as d}from"./index-a2c26395.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 00-9 9c0 5 3.71 8.9 8.65 8.9l-.15-.25-.02-.04a4.03 4.03 0 01-.65-2.37c.06-.94.5-1.86 1.41-2.62 1.03-.86 2.26-.88 3.22-.84.21 0 .42.01.6.03.77.04 1.37.07 1.95-.09 1.86-.5 2.89-1.73 3-3.32C21.31 6.62 17.1 3 12 3zM1 12A11 11 0 0112 1c5.93 0 11.42 4.29 11 10.53-.17 2.57-1.91 4.43-4.46 5.12-.94.25-1.94.2-2.71.15l-.45-.03c-.92-.03-1.45.05-1.86.39-.52.44-.68.86-.7 1.2a2.04 2.04 0 00.38 1.23c.1.15.24.38.35.6.12.24.28.61.3 1.02 0 .49-.2 1-.7 1.34-.43.27-.97.35-1.5.35C5.55 22.9 1 18.04 1 12zm8.75-5a2 2 0 114 0 2 2 0 01-4 0zm-4.72 3a2 2 0 114 0 2 2 0 01-4 0zm9.49 0a2 2 0 114 0 2 2 0 01-4 0z"}}]},b=y({name:"PaletteIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-palette",l.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
