import{d as m,j as a,v as d,x as h,y}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.13.9l-.1 1.19-.02.39a4.5 4.5 0 004.9 4.49l1.19-.1-.1 1.18a6.5 6.5 0 01-2.17 4.3c.74.9 1.19 2.05 1.19 3.3a5.34 5.34 0 01-3.32 4.9l-.92.4L17 19.1l.93-.39a3.34 3.34 0 002.09-3.05 3.28 3.28 0 00-1.75-2.89 3.62 3.62 0 00-1.76-.45h-.06l-.85.02-.15-.85a4.3 4.3 0 00-3.24-3.37 4.61 4.61 0 00-1.17-.14 4.3 4.3 0 00-4.34 4.2c0 .27.03.53.08.78l.18.95-.95.21A2.5 2.5 0 004 16.52c0 .95.57 1.8 1.43 2.21l.9.44-.86 1.8-.9-.43A4.46 4.46 0 012 16.53a4.46 4.46 0 012.7-4.08v-.26c0-3.15 2.4-5.7 5.47-6.14A6.5 6.5 0 0115.95 1l1.18-.1zm-4.9 5.18l.46.1a6.33 6.33 0 014.54 4.19 5.6 5.6 0 012.05.67 4.51 4.51 0 001.5-2.1 6.5 6.5 0 01-5.73-5.72 4.52 4.52 0 00-2.82 2.86zm1.65 7.58l-2.06 3.32h4.02l-4.03 6.38-1.69-1.07 2.09-3.31H8.23l3.95-6.38 1.7 1.06z"}}]},b=m({name:"ThunderstormNightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=d(r),p=a(()=>["t-icon","t-icon-thunderstorm-night",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(O,v.value)}});export{b as default};
