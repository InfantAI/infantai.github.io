import{d as y,j as n,v as O,x as d,y as g}from"./index-b9cef0b8.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.5 7.57a3 3 0 100 6H8v1.46a3 3 0 00.4 1.51l2.42 4.13a3 3 0 003.54 1.34l6.09-2.04a3 3 0 002.05-2.84V9.06a3 3 0 00-1.17-2.38l-6.29-4.84-1.52 1.02a2 2 0 00-.85 2.1l.58 2.61H4.5zm-1 3a1 1 0 011-1h11.25l-1.13-5.05.34-.22 5.15 3.96a1 1 0 01.39.8v8.07a1 1 0 01-.68.95l-6.1 2.03a1 1 0 01-1.17-.45l-2.41-4.13a1 1 0 01-.14-.5v-3.46H4.5a1 1 0 01-1-1z"}}]},j=y({name:"GestureLeftIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=O(r),p=n(()=>["t-icon","t-icon-gesture-left",l.value]),u=n(()=>s(s({},c.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(m,v.value)}});export{j as default};
