import{d as y,j as a,v as O,x as m,y as d}from"./index-d4c9a0d0.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.41 3l-2 2h5.09v9.64a3.5 3.5 0 11-2 0V7h-3.09l2 2L15 10.41 10.59 6 15 1.59 16.41 3zM5.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 6a3.5 3.5 0 114.5 3.36v5.29a3.5 3.5 0 11-2 0v-5.3A3.5 3.5 0 012 6zm3.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}}]},b=y({name:"GitPullRequestIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-git-pull-request",l.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
