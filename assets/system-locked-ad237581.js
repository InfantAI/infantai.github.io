import{d as y,j as a,v as m,x as d,y as h}from"./index-dfbb01d3.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v10h-2V3H3v13h10v2H1V1zm18.5 13.5c.7 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25zm3.25 2v-.75a3.25 3.25 0 00-6.5 0v.75H15V23h9v-6.5h-1.25zm-.75 2V21h-5v-2.5h5zM2.25 21H13v2H2.25v-2z"}}]},b=y({name:"SystemLockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:i}=m(r),v=a(()=>["t-icon","t-icon-system-locked",o.value]),p=a(()=>c(c({},i.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(O,u.value)}});export{b as default};
