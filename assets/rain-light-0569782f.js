import{d as f,j as a,v as m,x as y,y as O}from"./index-3638f854.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.1 4h-.06A4.3 4.3 0 006.7 8.2c0 .26.03.52.07.77l.19.95-.95.21A2.5 2.5 0 004 12.53c0 .95.57 1.8 1.43 2.2l.9.44-.86 1.8-.9-.43a4.46 4.46 0 01-2.57-4 4.46 4.46 0 012.7-4.08V8.2A6.3 6.3 0 0111.1 2c.55 0 1.08.07 1.59.2a6.33 6.33 0 014.53 4.18 5.59 5.59 0 012.65 1.07A5.27 5.27 0 0122 11.67a5.33 5.33 0 01-3.31 4.9l-.92.38-.78-1.84.92-.4A3.33 3.33 0 0020 11.68a3.27 3.27 0 00-1.74-2.89 3.61 3.61 0 00-1.82-.45l-.85.02-.15-.84a4.29 4.29 0 00-3.23-3.38A4.6 4.6 0 0011.1 4zm-.1 6h2v2h-2v-2zm-4 2h2v2H7v-2zm8 0h2v2h-2v-2zm-4 2h2v2h-2v-2zm-4 2h2v2H7v-2zm8 0h2v2h-2v-2zm-4 2h2v2h-2v-2z"}}]},z=f({name:"RainLightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:c}=m(r),s=a(()=>["t-icon","t-icon-rain-light",i.value]),p=a(()=>v(v({},c.value),t.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(g,h.value)}});export{z as default};
