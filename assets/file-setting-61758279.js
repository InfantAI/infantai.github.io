import{d as y,j as a,v as O,x as h,y as m}from"./index-a2c26395.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V11h-2V9h-6V3H5v18h6v2H3V1zm12 2.41V7h3.59L15 3.41zm4 9.34v1.38a4 4 0 011.85 1.07l1.2-.7 1 1.74-1.2.69a4 4 0 010 2.14l1.2.69-1 1.73-1.2-.69A4 4 0 0119 21.87v1.38h-2v-1.38a4 4 0 01-1.85-1.07l-1.2.7-1-1.74 1.2-.69a4 4 0 010-2.14l-1.2-.69 1-1.73 1.2.69A4 4 0 0117 14.13v-1.38h2zm-2.75 4.28a2 2 0 000 1.94l.04.06a2 2 0 003.42 0l.04-.06a2 2 0 000-1.94l-.04-.06a2 2 0 00-3.42 0l-.04.06z"}}]},b=y({name:"FileSettingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-file-setting",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>h(g,u.value)}});export{b as default};
