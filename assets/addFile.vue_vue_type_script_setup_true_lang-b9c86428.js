import{b as M}from"./algorithm-fb1c1589.js";import{d as q,Y as x,r as c,j as B,E as f,N as v,h as r,o as L,c as N,a as e,w as s,u as _,a0 as P,M as g}from"./index-a2efab08.js";const A=[{name:"V1.0.0",subtitle:"苹果公司（Apple Inc. ）",status:1,info:"为嵌入式特别提供的算法",use:1420,stock:1500},{name:"V0.0.9",subtitle:"微软（Microsoft Corporation）",status:0,info:"为嵌入式特别提供的系统",use:120,stock:2e3}],S={company:[{required:!0,message:"必填",type:"error"}],version:[{required:!0,message:"必填",type:"error"}],remarks:[{required:!0,message:"必填",type:"error"}]},D=q({__name:"addFile",props:{typeFlag:{type:Number,default:0},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(b,{emit:y}){const a=x({company:"Tencent",version:"0.0.1",remarks:"",file:void 0}),p=c(null),V=()=>{g.success("重置成功")},k=async()=>{console.log("form.value",await p.value.validate());const t=await p.value.validate();t===!0?await M(a.value).then(()=>{g.success("提交成功")}):console.log("Errors: ",t)},n=b,i=c(n.typeFlag),u=c(n.visible),U=B(()=>i.value===0?f("pages.program.arm"):i.value===1?f("pages.program.algroithm"):i.value===2?f("pages.program.program"):""),C=y;return v(()=>u.value,t=>{C("update:visible",t)}),v(()=>n.typeFlag,t=>{i.value=t}),v(()=>n.visible,t=>{u.value=t}),(t,o)=>{const d=r("t-input"),m=r("t-form-item"),F=r("t-upload"),w=r("t-form"),R=r("t-space"),E=r("t-dialog");return L(),N("div",null,[e(E,{visible:u.value,"onUpdate:visible":o[4]||(o[4]=l=>u.value=l),header:U.value,onConfirm:k,onClosed:V},{default:s(()=>[e(R,{direction:"vertical",size:"large"},{default:s(()=>[e(w,{ref_key:"form",ref:p,rules:_(S),data:a,"reset-type":"initial",colon:""},{default:s(()=>[e(m,{label:"开发公司",name:"company"},{default:s(()=>[e(d,{modelValue:a.company,"onUpdate:modelValue":o[0]||(o[0]=l=>a.company=l),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1}),e(m,{label:"版本",name:"version"},{default:s(()=>[e(d,{modelValue:a.version,"onUpdate:modelValue":o[1]||(o[1]=l=>a.version=l),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1}),e(m,{label:"备注",name:"remarks"},{default:s(()=>[e(d,{modelValue:a.remarks,"onUpdate:modelValue":o[2]||(o[2]=l=>a.remarks=l),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1}),e(m,{label:"文件",name:"files"},{default:s(()=>[e(F,{modelValue:a.file,"onUpdate:modelValue":o[3]||(o[3]=l=>a.file=l),action:_(P)},null,8,["modelValue","action"])]),_:1})]),_:1},8,["rules","data"])]),_:1})]),_:1},8,["visible","header"])])}}});export{A as P,D as _};
