import{d as y,j as n,v as O,x as m,y as d}from"./index-9eb1327f.js";function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.5 4a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zm17.07-1.35l.5.87a7 7 0 010 6.97l-.5.87-1.73-1 .5-.87a5 5 0 000-4.98l-.5-.87 1.73-1zm-3.03 1.74l.5.87a3.5 3.5 0 010 3.48l-.5.87-1.74-1 .5-.86a1.5 1.5 0 000-1.5l-.5-.86 1.74-1zM0 19a5 5 0 015-5h7a5 5 0 015 5v2h-2v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2H0v-2z"}}]},h=y({name:"UserTalk1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:l,style:c}=O(t),p=n(()=>["t-icon","t-icon-user-talk-1",l.value]),v=n(()=>s(s({},c.value),r.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,u.value)}});export{h as default};
