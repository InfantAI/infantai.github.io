import{d as y,j as o,v as O,x as m,y as d}from"./index-c831df68.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.81 17.53l-.4-.92-6-14-.25-.61H10.84l-.26.6-6 14-.4.93 1.85.78.39-.92 1.82-4.25h7.52l1.82 4.25.4.92 1.83-.78zM9.8 11.13H9.1L12 4.38l2.9 6.77H9.8zM19 22h1v-2H4v2h15z"}}]},b=y({name:"TextformatColorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:c}=O(r),p=o(()=>["t-icon","t-icon-textformat-color",a.value]),v=o(()=>s(s({},c.value),t.style)),f=o(()=>({class:p.value,style:v.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>m(g,f.value)}});export{b as default};
