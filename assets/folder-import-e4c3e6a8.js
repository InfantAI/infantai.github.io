import{d,j as o,v as m,x as y,y as O}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 25 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2.5h8.48l2 2.5H24v16H13v-2h9V7H11.52l-2-2.5H4v8.25H2V2.5zm5.05 10.59L11.91 18l-4.86 4.92-1.42-1.41 2.48-2.5H1v-2h7.1l-2.47-2.52 1.42-1.4z"}}]},b=d({name:"FolderImportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:p}=m(t),c=o(()=>["t-icon","t-icon-folder-import",a.value]),v=o(()=>s(s({},p.value),r.style)),u=o(()=>({class:c.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
