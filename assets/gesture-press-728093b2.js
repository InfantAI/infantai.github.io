import{d as y,j as a,v as O,x as d,y as g}from"./index-c831df68.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 2.5a5 5 0 013.98 8.02h-1.22V7.57a2.76 2.76 0 10-5.52 0v4.1A5 5 0 0111 2.5zm5.91 8.75a7 7 0 10-8.67 2.69v1.16l-2.14-.47a1.88 1.88 0 00-1.97.79l-.94 1.41 4.3 5.6a2.76 2.76 0 002.18 1.07h7.09c1.18 0 2.24-.76 2.61-1.89l1.78-5.35c.42-1.23-.1-2.6-1.22-3.25l-3.02-1.76zM11 6.81c.42 0 .76.34.76.76v4.95h3.15a.76.76 0 01.39.1l3.62 2.12c.3.18.45.55.34.9l-1.79 5.34c-.1.31-.39.52-.71.52H9.67a.76.76 0 01-.6-.3l-3.42-4.45.1-.15 4.5 1V7.57c0-.42.33-.76.75-.76z"}}]},h=y({name:"GesturePressIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:i}=O(t),p=a(()=>["t-icon","t-icon-gesture-press",l.value]),u=a(()=>c(c({},i.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>d(m,v.value)}});export{h as default};
