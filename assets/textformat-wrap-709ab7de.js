import{d as m,j as a,v as y,x as O,y as d}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 4h20v2H2V4zm0 7h15a5.6 5.6 0 013.35 1.01A4.18 4.18 0 0122 15.5c0 1.55-.64 2.73-1.65 3.49A5.6 5.6 0 0117 20h-5.41l1.7-1.7 2-2 .71-.71L17.41 17l-.7.7-.3.3H17c.85 0 1.62-.22 2.15-.61.49-.37.85-.94.85-1.89s-.36-1.52-.85-1.89c-.53-.4-1.3-.61-2.15-.61H2v-2zm1 7H2v2h8v-2H3z"}}]},b=m({name:"TextformatWrapIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-textformat-wrap",o.value]),v=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>O(h,f.value)}});export{b as default};
