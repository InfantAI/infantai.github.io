import{d,j as a,v as g,x as y,y as O}from"./index-3638f854.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9882)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.3 6.49c-1.21 1.1-2.38 2.93-3.35 5.83l-.26.81c-.25.79-.53 1.69-.87 2.47A5.6 5.6 0 012 18.04V19h6v-5a4 4 0 018 0v5h6v-.96a5.6 5.6 0 01-1.82-2.44c-.34-.78-.62-1.68-.87-2.47l-.26-.81c-.97-2.9-2.14-4.73-3.35-5.83a5.34 5.34 0 00-7.4 0zM6.95 5.01a7.34 7.34 0 0110.1 0c1.54 1.4 2.87 3.57 3.9 6.67l.3.97c.24.75.47 1.47.76 2.15.43.97.88 1.52 1.37 1.72l.62.26V21H14v-7a2 2 0 10-4 0v7H0v-4.22l.62-.26c.49-.2.94-.75 1.37-1.72.3-.68.52-1.4.75-2.15l.31-.97c1.03-3.1 2.36-5.27 3.9-6.67z"}}]}]},m=d({name:"Bridge2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=g(t),p=a(()=>["t-icon","t-icon-bridge-2",l.value]),v=a(()=>o(o({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>y(b,u.value)}});export{m as default};
