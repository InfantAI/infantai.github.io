import{d as y,j as a,v as O,x as d,y as g}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.57 19.5a3 3 0 106 0V16h1.46a3 3 0 001.51-.4l4.13-2.42a3 3 0 001.34-3.54l-2.04-6.09a3 3 0 00-2.84-2.05H9.06a3 3 0 00-2.38 1.17L1.84 8.96l1.02 1.52a2 2 0 002.1.85l2.61-.58v8.75zm3 1a1 1 0 01-1-1V8.25L4.52 9.38l-.22-.34L8.26 3.9a1 1 0 01.8-.39h8.07a1 1 0 01.95.68l2.03 6.1a1 1 0 01-.45 1.17l-4.13 2.41a1 1 0 01-.5.14h-3.46v5.5a1 1 0 01-1 1z"}}]},w=y({name:"GestureDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-gesture-down",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(m,v.value)}});export{w as default};
