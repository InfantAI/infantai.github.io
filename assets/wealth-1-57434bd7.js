import{d as y,j as a,v as O,x as m,y as d}from"./index-dfbb01d3.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5 7.97v3.53c0 .02.03.1.18.23.2.19.56.4 1.08.6 1.04.4 2.54.67 4.24.67 1.7 0 3.2-.27 4.24-.67.52-.2.87-.41 1.08-.6.15-.13.18-.21.18-.23V7.97a7.5 7.5 0 01-.54.23c-1.32.5-3.07.8-4.96.8-1.89 0-3.64-.3-4.96-.8A7.51 7.51 0 015 7.97zM18 5.5v6.52a5.5 5.5 0 11-4.9 8.78c-.8.13-1.69.2-2.6.2-1.89 0-3.64-.3-4.96-.8a5.45 5.45 0 01-1.7-.99A2.33 2.33 0 013 17.5v-12c0-.72.39-1.3.84-1.71a5.45 5.45 0 011.7-1C6.86 2.3 8.61 2 10.5 2c1.89 0 3.64.3 4.96.8.65.25 1.25.58 1.7.99.45.4.84.99.84 1.71zm-13 0c0 .02.04.1.18.23.2.19.56.4 1.08.6C7.3 6.73 8.8 7 10.5 7c1.7 0 3.2-.27 4.24-.67.52-.2.87-.41 1.08-.6.14-.13.17-.2.18-.23 0-.02-.04-.1-.18-.23-.2-.19-.56-.4-1.08-.6A12.3 12.3 0 0010.5 4c-1.7 0-3.2.27-4.24.67-.52.2-.87.41-1.08.6-.14.13-.17.2-.18.23zm0 8.47v3.53c0 .02.03.1.18.23.2.19.56.4 1.08.6 1.04.4 2.54.67 4.24.67.59 0 1.15-.03 1.68-.09a5.5 5.5 0 01.5-4.04c-.7.08-1.43.13-2.18.13-1.89 0-3.64-.3-4.96-.8a7.53 7.53 0 01-.54-.23zm12.5.03c-.13 0-.26 0-.39.02a3.5 3.5 0 10.39-.02z"}}]},b=y({name:"Wealth1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:c,style:s}=O(r),p=a(()=>["t-icon","t-icon-wealth-1",c.value]),v=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,u.value)}});export{b as default};
