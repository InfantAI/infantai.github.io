import{d as y,j as a,v as h,x as O,y as g}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3.5a8.46 8.46 0 00-7.21 4H8.5v2h-7v-7h2v3.33A10.55 10.55 0 0112 1.5c5.8 0 10.5 4.7 10.5 10.5v1h-2v-1c0-4.7-3.8-8.5-8.5-8.5zM13 6v5.59l1.66 1.66-1.41 1.41L11 12.41V6h2zm-9.56 5.9l.1 1A8.5 8.5 0 0012 20.5h1v2h-1a10.5 10.5 0 01-10.44-9.4l-.1-.99 1.98-.2zM19.5 14v1.14a3.5 3.5 0 011.4.82l1-.57 1 1.73-1 .57a3.51 3.51 0 010 1.62l1 .58-1 1.73-1-.58c-.39.38-.87.66-1.4.82V23h-2v-1.14a3.5 3.5 0 01-1.4-.82l-1 .58-1-1.73 1-.58a3.5 3.5 0 010-1.62l-1-.57 1-1.73 1 .57c.39-.37.87-.66 1.4-.82V14h2zm-1 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}}]},b=y({name:"HistorySettingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=h(r),v=a(()=>["t-icon","t-icon-history-setting",l.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
