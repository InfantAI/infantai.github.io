import{b as Q,s as W}from"./setting-c90b486e.js";import{o as u,c as p,b as i,E as r,d as X,r as y,j as S,C as Z,h as s,a as t,w as l,F as $,q as z,u as d,e as h,i as v,t as c,n as ee,a2 as te,M as k,g as le}from"./index-9eb1327f.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-e70c3771.js";const ne={xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none"},se=i("path",{fill:"currentcolor","fill-opacity":".26","fill-rule":"evenodd",d:"m32 10.69 26.248 15.155v22.31L32 63.308 5.75 48.155v-22.31zM9.75 30.464v15.381L32 58.69l22.248-12.845V30.464L32 43.309zM52.248 27 40.66 33.69l-8.66-5-8.66 5L11.75 27 32 15.31zM27.34 36 32 38.69 36.66 36 32 33.31zM30 8V0h4v8zM44.268 10.751l4-6.928 3.464 2-4 6.928zM16.268 12.751l-4-6.928 3.464-2 4 6.928z","clip-rule":"evenodd"},null,-1),oe=[se];function ue(L,n){return u(),p("svg",ne,[...oe])}const ie={render:ue},I={language:"zh",briefly:"",html:"",title:"",type:0},re={title:[{required:!0,message:"请输入名称",type:"error"}],type:[{required:!0,message:"请选择类型",type:"error"}],html:[{required:!0,message:"消息不能为空",type:"error"}],language:[{required:!0,message:"请选择语言",type:"error"}]},C=[{label:r("pages.setting.noticetypeenum.system"),value:0},{label:r("pages.setting.noticetypeenum.program"),value:1},{label:r("pages.setting.noticetypeenum.update"),value:2},{label:r("pages.setting.noticetypeenum.active"),value:3}],de=[{label:r("pages.setting.all"),value:"all"},{label:"Indonesia",value:"id"},{label:"English",value:"en"},{label:"中文",value:"zh"}],ce={class:"secondary-notification"},me={class:"form-submit-container"},pe={class:"form-submit-sub"},_e={class:"form-submit-left"},ge={class:"msg-date"},fe={key:1,class:"secondary-msg-list__empty-list"},ve={name:"Notice"},be=X({...ve,setup(L){const n=y({...I}),b=y(!1),m=y("all"),N=S(()=>m.value==="all"?_.value:m.value==="id"?_.value.filter(e=>e.language==="id"):m.value==="en"?_.value.filter(e=>e.language==="en"):m.value==="zh"?_.value.filter(e=>e.language==="zh"):[]),_=y([]),T=async()=>{await Q({language:"",page:{pageIndex:1,pageSize:999},query:{}}).then(e=>{_.value=e.content})},E=()=>{n.value={...I},k.warning("取消新建")},U=e=>{console.log(e),e.validateResult===!0&&(b.value=!0)},q=S(()=>n.value?`${n.value.title}${r("pages.setting.sendNotice")}`:""),x=async()=>{await W([n.value]).then(()=>{b.value=!1,n.value={...I},k.warning(r("pages.setting.sendSucess"))}),T()};return Z(()=>{T()}),(e,o)=>{const B=s("t-input"),g=s("t-form-item"),V=s("t-col"),D=s("t-option"),O=s("t-select"),A=s("t-textarea"),M=s("t-button"),P=s("t-form"),F=s("t-tag"),R=s("t-list-item"),j=s("t-list"),Y=s("t-tab-panel"),G=s("t-tabs"),H=s("t-dialog");return u(),p("div",null,[i("div",ce,[t(P,{ref:"form",class:"base-form",data:n.value,rules:d(re),"label-align":"top","label-width":100,onReset:E,onSubmit:U},{default:l(()=>[t(V,{span:6},{default:l(()=>[t(g,{label:e.$t("pages.setting.noticetitle"),name:"title"},{default:l(()=>[t(B,{modelValue:n.value.title,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value.title=a),style:{width:"322px"},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(V,{span:6},{default:l(()=>[t(g,{label:e.$t("components.languageSelecter"),name:"language"},{default:l(()=>[t(ae,{modelValue:n.value.language,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value.language=a),style:{width:"322px"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(V,{span:6},{default:l(()=>[t(g,{label:e.$t("pages.setting.noticetype"),name:"type"},{default:l(()=>[t(O,{modelValue:n.value.type,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value.type=a),style:{width:"322px"},class:"demo-select-base",placeholder:e.$t("pages.setting.contractTypePlaceholder"),clearable:""},{default:l(()=>[(u(!0),p($,null,z(d(C),(a,w)=>(u(),h(D,{key:w,value:a.value,label:a.label},{default:l(()=>[v(c(a.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,{label:e.$t("pages.setting.comment"),name:"html"},{default:l(()=>[t(A,{modelValue:n.value.html,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value.html=a),height:124,placeholder:e.$t("pages.setting.remarkPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:l(()=>[i("div",me,[i("div",pe,[i("div",_e,[t(M,{theme:"primary",ghost:"",class:"form-submit-confirm",type:"reset"},{default:l(()=>[v(c(e.$t("pages.setting.reset")),1)]),_:1}),t(M,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:l(()=>[v(c(e.$t("pages.setting.confirm")),1)]),_:1})])])])]),_:1})]),_:1})]),_:1},8,["data","rules"]),t(G,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=a=>m.value=a)},{default:l(()=>[(u(!0),p($,null,z(d(de),(a,w)=>(u(),h(Y,{key:w,value:a.value,label:a.label},{default:l(()=>[N.value.length>0?(u(),h(j,{key:0,class:"secondary-msg-list",split:!0},{default:l(()=>[(u(!0),p($,null,z(N.value,(f,J)=>(u(),h(R,{key:J},{action:l(()=>[i("span",ge,c(f.createTime),1)]),default:l(()=>[i("p",{class:ee(["content",{unread:f.status}])},[t(F,{size:"medium",theme:d(te).get(f.type),variant:"light"},{default:l(()=>[v(c(d(C).find(K=>K.value===f.type).label),1)]),_:2},1032,["theme"]),v(" "+c(f.html),1)],2)]),_:2},1024))),128))]),_:1})):(u(),p("div",fe,[t(d(ie)),i("p",null,c(d(r)("pages.setting.empty")),1)]))]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),t(H,{visible:b.value,"onUpdate:visible":o[5]||(o[5]=a=>b.value=a),header:e.$t("pages.setting.sendconfirm"),body:q.value,onConfirm:x},null,8,["visible","header","body"])])}}});const we=le(be,[["__scopeId","data-v-fc550cf7"]]);export{we as default};
