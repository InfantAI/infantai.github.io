import{d as h,j as a,v as m,x as y,y as O}from"./index-3638f854.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 22h20V2H2v20zm2-2v-5h4v5H4zm6 0v-5h4v5h-4zm6 0v-5h4v5h-4zm4-7h-4V8h4v5zm0-7H4V4h16v2zM4 8h4v5H4V8zm6 5V8h4v5h-4z"}}]},g=h({name:"TableIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),c=a(()=>["t-icon","t-icon-table",l.value]),p=a(()=>v(v({},s.value),t.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(b,u.value)}});export{g as default};
