import{d as h,j as l,v as d,x as m,y}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm4.76 2h2.48l3.6 12h-2.09l-1.18-3.95H8.43L7.24 18H5.15l3.6-12zm.27 6.05h1.94L10 8.81l-.97 3.24zM16 9h2v2h-2V9zm2 3v6h-2v-6h2z"}}]},b=h({name:"LogoAdobeIllustrateIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:o,style:c}=d(r),p=l(()=>["t-icon","t-icon-logo-adobe-illustrate",o.value]),v=l(()=>s(s({},c.value),t.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>m(O,u.value)}});export{b as default};
