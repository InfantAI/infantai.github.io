import{d as f,j as a,v as y,x as O,y as m}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2h16v2h-1v4h3v14H2V8h3V4H4V2zm3 2v6H4v10h5v-6h6v6h5V10h-3V4H7zm6 16v-4h-2v4h2zm0-15v2h2v2h-2v2h-2V9H9V7h2V5h2z"}}]},b=f({name:"HospitalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:v}=y(r),p=a(()=>["t-icon","t-icon-hospital",o.value]),c=a(()=>s(s({},v.value),t.style)),h=a(()=>({class:p.value,style:c.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>O(d,h.value)}});export{b as default};
