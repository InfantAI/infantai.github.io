import{d as m,j as a,v as y,x as O,y as h}from"./index-a2efab08.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.55 1.76l1.72.58a3.7 3.7 0 012.53 3.5V8.3h3.87a3 3 0 012.96 3.46l-1.18 7.7A3 3 0 0117.48 22H2V10.1h4.85l3.7-8.34zM6.5 12.1H4V20h2.5v-7.9zm2 7.9h8.98a1 1 0 001-.85l1.18-7.7a1 1 0 00-1-1.15H12.8V5.85a1.7 1.7 0 00-1.15-1.61L8.5 11.3V20z"}}]},g=m({name:"ThumbUp2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=y(r),c=a(()=>["t-icon","t-icon-thumb-up-2",l.value]),u=a(()=>s(s({},p.value),t.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(b,v.value)}});export{g as default};
