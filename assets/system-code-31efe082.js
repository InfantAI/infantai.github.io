import{d as y,j as a,v as m,x as d,y as O}from"./index-9eb1327f.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v17H1V1zm2 2v13h18V3H3zm7.4 3.84L8.29 9.5l2.13 2.66-1.57 1.25L5.72 9.5l3.12-3.9 1.57 1.24zm4.76-1.25l3.12 3.91-3.12 3.9-1.57-1.24 2.13-2.66-2.13-2.66 1.57-1.25zM3.22 21h17.56v2H3.22v-2z"}}]},b=y({name:"SystemCodeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-system-code",o.value]),v=a(()=>i(i({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(g,u.value)}});export{b as default};
