import{d,j as a,v as y,x as O,y as m}from"./index-ab78ae36.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a2 2 0 100 4 2 2 0 000-4zm-1 5.87a4 4 0 112 0V11h4a3 3 0 013 3v1.13a4 4 0 11-2 0V14a1 1 0 00-1-1H7a1 1 0 00-1 1v1.13a4 4 0 11-2 0V14a3 3 0 013-3h4V8.87zM19 17zM5 17a2 2 0 100 4 2 2 0 000-4z"}}]},h=d({name:"TreeRoundDotIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),p=a(()=>["t-icon","t-icon-tree-round-dot",o.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{h as default};
