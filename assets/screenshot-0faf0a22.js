import{d as y,j as a,v as O,x as h,y as m}from"./index-a2efab08.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v14h-2V4H4v12H2V2zm3.4 7h2.83L12 12.8 15.77 9h2.83l-5.19 5.22 2.69 2.7a3.3 3.3 0 014.9 2.83A3.27 3.27 0 0117.71 23a3.27 3.27 0 01-2.98-4.62L12 15.63l-2.73 2.75A3.27 3.27 0 016.29 23 3.27 3.27 0 013 19.75a3.27 3.27 0 014.9-2.83l2.69-2.7L5.4 9zm12.31 9.5c-.72 0-1.28.57-1.28 1.25S16.99 21 17.7 21c.73 0 1.29-.57 1.29-1.25s-.56-1.25-1.29-1.25zm-11.42 0c-.73 0-1.29.57-1.29 1.25S5.56 21 6.29 21c.72 0 1.28-.57 1.28-1.25S7.01 18.5 6.3 18.5z"}}]},b=y({name:"ScreenshotIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:i}=O(t),p=a(()=>["t-icon","t-icon-screenshot",o.value]),v=a(()=>c(c({},i.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
