import{d as f,j as n,v as y,x as d,y as O}from"./index-9eb1327f.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 18H3v2h19v-2zm-2-2a2 2 0 002-2V6a2 2 0 00-2-2h-4v2h4v3h-3.5v2H20v3h-4v2h4zm-5-2h-4v-3h2a2 2 0 002-2V6a2 2 0 00-2-2H9v2h4v3h-2a2 2 0 00-2 2v5h6v-2zm-7 0H6.5V6a2 2 0 00-2-2H3v2h1.5v8H3v2h5v-2z"}}]},b=f({name:"DataDisplayIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=y(r),p=n(()=>["t-icon","t-icon-data-display",l.value]),c=n(()=>v(v({},s.value),t.style)),u=n(()=>({class:p.value,style:c.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>d(m,u.value)}});export{b as default};
