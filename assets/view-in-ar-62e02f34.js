import{d as h,j as a,v as m,x as y,y as O}from"./index-a2efab08.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 1.5h5v2h-3v3h-2v-5zm16 0h5v5h-2v-3h-3v-2zM12 3.85l7.06 4.07v8.16L12 20.15l-7.06-4.07V7.92L12 3.85zm-5.06 6.38v4.7L11 17.26v-4.7l-4.06-2.34zM13 17.27l4.06-2.35v-4.69L13 12.58v4.69zm-1-6.43l4.06-2.34L12 6.15 7.94 8.5 12 10.84zM3.5 17.5v3h3v2h-5v-5h2zm19 0v5h-5v-2h3v-3h2z"}}]},w=h({name:"ViewInArIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),c=a(()=>["t-icon","t-icon-view-in-ar",l.value]),p=a(()=>o(o({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var v;return(v=e.onClick)===null||v===void 0?void 0:v.call(e,{e:f})}}));return()=>y(d,u.value)}});export{w as default};
