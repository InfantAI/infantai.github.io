import{d as g,j as a,v as h,x as y,y as O}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.92.59l-.45 1.67a6.92 6.92 0 00.07 3.6 7 7 0 009.84 4.48l1.54-.75-.1 1.7a8.1 8.1 0 01-.93 3.16l-.44.9-1.8-.9.46-.9c.13-.26.24-.52.33-.76A9 9 0 018.6 6.4a9.59 9.59 0 01-.33-2.86 8 8 0 00-4.17 9.23 7.38 7.38 0 00.28.75l.03.08.01.03.38.93-1.85.75-.38-.92v-.01l-.01-.03-.04-.09a28.73 28.73 0 01-.35-.97A10 10 0 019.24 1.03L10.92.6zM2 17h6v2H2v-2zm8 0h12v2H10v-2zm7 4h5v2h-5v-2zM2 21h13v2H2v-2z"}}]},b=g({name:"FogNightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=h(r),v=a(()=>["t-icon","t-icon-fog-night",o.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
