import{d as h,j as a,v as y,x as O,y as m}from"./index-dfbb01d3.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.98 3.08A8.03 8.03 0 0112 2c2.46 0 4.29 1 6.06 2.16l.83.55-1.1 1.67-.84-.55C15.28 4.73 13.85 4 12 4c-.87 0-2.05.22-2.98.79A2.97 2.97 0 007.5 7.5c0 .46.07.83.2 1.13l.37.93-1.86.74-.37-.93A5.02 5.02 0 015.5 7.5c0-2.16 1.1-3.58 2.48-4.42zM4 11h16v2h-2.96c.85.8 1.46 1.93 1.46 3.5 0 2.16-1.1 3.58-2.48 4.42A8.03 8.03 0 0111.99 22c-2.45 0-4.28-.99-6.05-2.17l-.83-.55 1.11-1.67.84.56C8.72 19.28 10.14 20 11.99 20c.88 0 2.06-.22 2.99-.79a2.97 2.97 0 001.52-2.7c0-1.3-.64-2.06-1.55-2.57A9.92 9.92 0 0011.9 13H4v-2z"}}]},b=h({name:"TextformatStrikethroughIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-textformat-strikethrough",o.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{b as default};
