import{d as y,j as a,v as O,x as m,y as d}from"./index-a2efab08.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 2h21v16H6.88L1.5 22.7V2zm2 2v14.3L6.12 16H20.5V4h-17zM12 7.5a1 1 0 00-1 1v1H9v-1a3 3 0 116 0c0 .68-.17 1.25-.47 1.71-.3.46-.69.75-1.03.95-.18.1-.35.18-.5.24v.35h-2v-1c0-.42.25-.69.36-.79.12-.1.24-.17.3-.2l.3-.11H12c.19-.07.36-.14.52-.23a.96.96 0 00.34-.3c.07-.11.15-.3.15-.62a1 1 0 00-1-1zm-1 5h2v2h-2v-2z"}}]},b=y({name:"QuestionnaireIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),v=a(()=>["t-icon","t-icon-questionnaire",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(h,u.value)}});export{b as default};
