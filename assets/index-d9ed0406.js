import{E as n,d as F,z as G,r as s,j as K,C as H,G as J,W as Q,h as l,o as X,c as Y,a as e,w as a,b as Z,P as ee,i as v,t as h,M as te,g as ae}from"./index-9eb1327f.js";import{g as oe,d as le}from"./algorithm-e2119f40.js";const ne=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:n("pages.algorithm.embedding.resourceNameAndId"),align:"left",width:220,colKey:"resourceName",fixed:"left"},{title:n("pages.algorithm.embedding.resourceNameAndId"),colKey:"resourceName",width:160},{title:n("pages.algorithm.embedding.category"),colKey:"category",width:160},{title:n("pages.algorithm.embedding.type"),width:160,ellipsis:!0,colKey:"type"},{title:n("pages.algorithm.embedding.address"),width:160,ellipsis:!0,colKey:"address"},{title:n("pages.algorithm.embedding.country"),width:160,ellipsis:!0,colKey:"country"},{title:n("pages.algorithm.embedding.language"),width:160,ellipsis:!0,colKey:"language"},{title:n("pages.algorithm.embedding.uploadTime"),width:160,ellipsis:!0,colKey:"uploadTime"},{title:n("pages.algorithm.embedding.updateTime"),width:160,ellipsis:!0,colKey:"updateTime"},{title:n("pages.algorithm.resources.operation"),align:"left",fixed:"right",width:80,colKey:"op"}],se={name:"",no:"",type:""},ie={class:"left-operation-container"},de={name:"Resources"},ce=F({...de,setup(re){const V=G(),k=s(ne),d=s({...se}),m=s([]),c=s({pageSize:20,total:100,current:1}),S=s("");s("");const g=s(!1),f=async()=>{g.value=!0;try{const t=await oe({language:S.value,page:{pageIndex:c.value.current,pageSize:c.value.pageSize}});m.value=t.content,c.value={...c.value,total:t.totalCount}}catch(t){console.log(t)}finally{g.value=!1}},r=s(-1),N=K(()=>{if(r.value>-1){const{name:t}=m.value[r.value];return`删除后，${t}的所有Embedding信息将被清空，且无法恢复`}return""});H(()=>{f()});const p=s(!1),b=s([1,2]);J();const w=()=>{r.value=-1},T=async()=>{await le(m.value[r.value].id,"").then(()=>{f(),te.success("删除成功"),p.value=!1}),w()},$=()=>{w()},I=()=>{},U=()=>{},L="index",R=t=>{b.value=t},z=(t,o)=>{f(),console.log("分页变化",t,o)},D=(t,o)=>{console.log("统一Change",t,o)},E=t=>{r.value=t.rowIndex,p.value=!0},M=K(()=>({offsetTop:V.isUseTabsRouter?48:0,container:`.${Q}-layout`}));return(t,o)=>{const C=l("t-select"),_=l("t-form-item"),u=l("t-col"),B=l("t-input"),y=l("t-row"),x=l("t-button"),P=l("t-form"),A=l("t-link"),O=l("t-space"),j=l("t-table"),W=l("t-card"),q=l("t-dialog");return X(),Y("div",null,[e(W,{class:"list-card-container",bordered:!1},{default:a(()=>[e(y,{justify:"space-between"},{default:a(()=>[Z("div",ie,[e(P,{ref:"form",data:d.value,"label-width":80,colon:"",onReset:I,onSubmit:U},{default:a(()=>[e(y,null,{default:a(()=>[e(u,{span:10},{default:a(()=>[e(y,{gutter:[24,24]},{default:a(()=>[e(u,{span:5},{default:a(()=>[e(_,{label:t.$t("pages.algorithm.embedding.type"),name:"type"},{default:a(()=>[e(C,{modelValue:d.value.type,"onUpdate:modelValue":o[0]||(o[0]=i=>d.value.type=i),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(u,{span:5},{default:a(()=>[e(_,{label:t.$t("pages.algorithm.embedding.resourceName"),name:"no"},{default:a(()=>[e(B,{modelValue:d.value.no,"onUpdate:modelValue":o[1]||(o[1]=i=>d.value.no=i),class:"form-item-content",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(u,{span:5},{default:a(()=>[e(_,{label:t.$t("pages.algorithm.embedding.category"),name:"type"},{default:a(()=>[e(C,{modelValue:d.value.type,"onUpdate:modelValue":o[2]||(o[2]=i=>d.value.type=i),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),e(u,{span:2,class:"operation-container"},{default:a(()=>[e(x,{theme:"primary",type:"submit",style:ee({marginLeft:"var(--td-comp-margin-s)"})},{default:a(()=>[v(h(t.$t("components.commonTable.query")),1)]),_:1},8,["style"]),e(x,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[v(h(t.$t("components.commonTable.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1}),e(j,{data:m.value,columns:k.value,"row-key":L,"vertical-align":"top",hover:!0,pagination:c.value,"selected-row-keys":b.value,loading:g.value,"header-affixed-top":M.value,onPageChange:z,onChange:D,onSelectChange:R},{op:a(i=>[e(O,null,{default:a(()=>[e(A,{theme:"danger",onClick:ue=>E(i)},{default:a(()=>[v(h(t.$t("pages.algorithm.embedding.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),e(q,{visible:p.value,"onUpdate:visible":o[3]||(o[3]=i=>p.value=i),header:"确认删除当前所选合同？",body:N.value,"on-cancel":$,onConfirm:T},null,8,["visible","body"])])}}});const ge=ae(ce,[["__scopeId","data-v-5c75e2ed"]]);export{ge as default};
