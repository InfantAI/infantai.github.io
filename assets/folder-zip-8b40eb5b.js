import{d as f,j as a,v as d,x as y,y as O}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v16H1V2.5zm2 2V19h11v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-5.48l-2-2.5H3zM16 9v2h2v2h-2v2h2v2h-2v2h5V7h-3v2h-2z"}}]},b=f({name:"FolderZipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=d(t),p=a(()=>["t-icon","t-icon-folder-zip",o.value]),c=a(()=>v(v({},s.value),r.style)),h=a(()=>({class:p.value,style:c.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(m,h.value)}});export{b as default};
