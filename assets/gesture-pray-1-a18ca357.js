import{d as y,j as a,v as O,x as m,y as d}from"./index-c831df68.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.04 4.99a.45.45 0 00-.74.5 2.34 2.34 0 00.09.18l.12.24 1.96 4-2.16 4.66 3.64 1.11 1-5.97.01-.04.04-.22v-.01-.02c-.04-.35-.2-.67-.45-.92L7.04 5zm2.58 12.68L4.77 16.2H4v2.96h5.37l.25-1.48zM4.28 14.2l1.97-4.25L4.7 6.76l-.01-.01-.08-.17-.01-.02a2.45 2.45 0 013.85-2.99l3.52 3.52.03.03.03-.03 3.52-3.52a2.45 2.45 0 013.85 3l-.09.18v.01l-1.56 3.18 1.97 4.25H22v6.96h-9.06L12 15.56l-.94 5.59H2v-6.96h2.28zM13 9.45c0 .04 0 .11.04.22v.04l1 5.97 3.65-1.11-2.16-4.66 1.96-4 .12-.24.02-.03.07-.16a.45.45 0 00-.74-.5L13.45 8.5a1.56 1.56 0 00-.45.94m6.23 6.75l-4.85 1.48.25 1.48H20v-2.96h-.77z"}}]},P=y({name:"GesturePray1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-gesture-pray-1",l.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,u.value)}});export{P as default};
