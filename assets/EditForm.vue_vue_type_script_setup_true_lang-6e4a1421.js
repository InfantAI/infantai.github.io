import{b as S}from"./train-4ec2071f.js";import{E as F,d as L,r as m,Y as M,N as c,h as s,o as p,c as V,a as e,w as t,u as w,b as y,F as j,q as R,e as N,a4 as z,I as G,i as U,a3 as P,M as q}from"./index-9eb1327f.js";const X=[{colKey:"row-select",type:"multiple",width:50},{colKey:"question",title:"问题",width:"300"},{colKey:"weight",title:"权重",width:"80"},{colKey:"updateUser",title:"更新人"},{title:F("pages.devices.operation"),align:"left",fixed:"right",width:120,colKey:"op"}],Y={createTime:void 0,updateTime:void 0,updateUser:"",question:"",weight:0,answers:[]},Q={answer:"",fraction:0},W={question:[{required:!0,message:"问题必填"}],weight:[{required:!0,message:"权重必填"}]},Z=L({__name:"EditForm",props:{visible:Boolean,language:String,data:{type:Object,default:Y}},emits:["update:visible"],setup(A,{emit:k}){const u=A,i=m(u.visible),f=m(u.language),a=M({...u.data}),C=m(null),E=()=>{i.value=!1},T=async({validateResult:o,firstError:n})=>{o===!0?(a.language=f.value,await S(a).then(()=>{q.success("提交成功"),i.value=!1})):(console.log("Errors: ",o),q.warning(n))},v=m(!0),x=()=>{a.answers.push({...Q}),a.answers.length>=4&&(v.value=!1),console.log(a.answers)},I=k;return c(()=>u.language,o=>{f.value=o}),c(()=>u.visible,o=>{i.value=o}),c(()=>u.data,o=>{Object.assign(a,o),console.log("formData",a.value)}),c(()=>i.value,o=>{I("update:visible",o)}),(o,n)=>{const r=s("t-input"),d=s("t-form-item"),b=s("t-col"),O=s("t-row"),_=s("t-button"),h=s("t-space"),B=s("t-form"),D=s("t-dialog");return p(),V("div",null,[e(D,{visible:i.value,"onUpdate:visible":n[2]||(n[2]=l=>i.value=l),header:w(P).get(f.value)+"题目编辑",width:"640",top:"40",size:"80%",footer:!1},{default:t(()=>[e(B,{ref_key:"form",ref:C,data:a,rules:w(W),"scroll-to-first-error":"smooth",onSubmit:T},{default:t(()=>[e(d,{label:"问题",name:"question"},{default:t(()=>[e(r,{modelValue:a.question,"onUpdate:modelValue":n[0]||(n[0]=l=>a.question=l)},null,8,["modelValue"])]),_:1}),e(d,{label:"权重",name:"weight"},{default:t(()=>[e(r,{modelValue:a.weight,"onUpdate:modelValue":n[1]||(n[1]=l=>a.weight=l),type:"number"},null,8,["modelValue"])]),_:1}),e(d,{label:"答案",name:"answers"},{default:t(()=>[e(h,null,{default:t(()=>[y("div",null,[(p(!0),V(j,null,R(a.answers,(l,K)=>(p(),N(O,{key:K,justify:"space-between"},{default:t(()=>[e(b,{span:24},{default:t(()=>[e(r,{modelValue:l.answer,"onUpdate:modelValue":g=>l.answer=g},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(b,{span:24},{default:t(()=>[e(r,{modelValue:l.fraction,"onUpdate:modelValue":g=>l.fraction=g,type:"number",suffix:"分"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),y("div",null,[v.value?(p(),N(_,{key:0,theme:"primary",onClick:x},{icon:t(()=>[e(w(z))]),_:1})):G("",!0)])]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(h,{size:"small"},{default:t(()=>[e(_,{theme:"default",variant:"base",onClick:E},{default:t(()=>[U("取消")]),_:1}),e(_,{theme:"primary",type:"submit"},{default:t(()=>[U("提交")]),_:1})]),_:1})]),_:1})]),_:1},8,["data","rules"])]),_:1},8,["visible","header"])])}}});export{X as C,Y as I,Z as _};
