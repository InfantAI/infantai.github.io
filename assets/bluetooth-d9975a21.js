import{d as y,j as l,v as O,x as m,y as d}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 .25l7.45 6.71L13.41 12l5.04 5.04-7.45 6.7v-9.33l-4 4L5.59 17l5-5-5-5L7 5.59l4 4V.25zm2 14.16v4.84l2.55-2.29L13 14.41zm0-4.82l2.55-2.55L13 4.74V9.6z"}}]},h=y({name:"BluetoothIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:o,style:c}=O(r),p=l(()=>["t-icon","t-icon-bluetooth",o.value]),u=l(()=>s(s({},c.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>m(b,v.value)}});export{h as default};
