import{d as f,j as a,v as h,x as y,y as O}from"./index-dfbb01d3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v7h-2V7H10.52l-2-2.5H3V19h11v2H1V2.5zM21 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"}}]},b=f({name:"FolderAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=h(t),v=a(()=>["t-icon","t-icon-folder-add",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:d=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:d})}}));return()=>y(m,u.value)}});export{b as default};
