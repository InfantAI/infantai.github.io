import{d,j as a,v as m,x as y,y as O}from"./index-a2c26395.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12.5 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.24 7A5.5 5.5 0 107.3 4.72 4 4 0 001.53 10H1v12h17v-2.52l5 2V10.52l-5 2V10h-1.26zM18 14.68l3-1.2v5.04l-3-1.2v-2.64zM16 12v8H3v-8h13zM5 10a2 2 0 110-4 2 2 0 010 4z"}}]},b=d({name:"VideoCamera2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),v=a(()=>["t-icon","t-icon-video-camera-2",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
