import{g as P,a as Y,u as H,d as J}from"./train-4ec2071f.js";import{d as W,r as n,N as m,h as i,o as b,e as z,w as a,a as t,b as w,t as y,u as A,a3 as X,i as k,c as Z,F as ee,q as ae,M as te}from"./index-9eb1327f.js";import{I as D,C as ne,_ as le}from"./EditForm.vue_vue_type_script_setup_true_lang-6e4a1421.js";const oe={class:"more-detail"},ce=W({__name:"Edit",props:{visible:Boolean,language:String},emits:["update:visible"],setup(E,{emit:Q}){const d=E,p=n(d.visible),u=n(d.language),c=n(!1),l=n({pageSize:20,total:100,current:1}),B=Q,I=(e,o)=>{l.value.pageSize=e.pagination.pageSize,l.value.current=e.pagination.current,v(),console.log("统一Change",e,o)},h=n([]),v=async()=>{c.value=!0,await P({language:u.value,page:{pageIndex:l.value.current,pageSize:l.value.pageSize}}).then(e=>{h.value=e.content,l.value={...l.value,total:e.totalCount}}),await Y({language:u.value,page:{pageIndex:1,pageSize:999}}).then(e=>{g.value=e}),console.log("AllQuestions.value ",h.value),c.value=!1},g=n([]),U=(e,o)=>{g.value=e,console.log(e,o)},T=()=>{l.value.current=1},x=n([]),L=e=>{x.value=e},M=async()=>{c.value=!0,await H(u.value,g.value).finally(()=>{c.value=!1})},r=n(!1),C=n(D),R=e=>{console.log("row",e),C.value=e.row,r.value=!0},V=()=>{C.value=D,r.value=!0},$=async e=>{await J({id:e.id}).then(()=>{te.success("Delete Success!"),v()})};return m(()=>d.language,e=>{u.value=e,T(),v()}),m(()=>r.value,e=>{e||v()}),m(()=>d.visible,e=>{p.value=e}),m(()=>p.value,e=>{B("update:visible",e)}),(e,o)=>{const _=i("t-col"),j=i("t-button"),S=i("t-row"),N=i("t-link"),F=i("t-popconfirm"),G=i("t-space"),K=i("t-table"),O=i("t-drawer");return b(),z(O,{visible:p.value,"onUpdate:visible":o[1]||(o[1]=s=>p.value=s),size:"50%",onConfirm:M},{header:a(()=>[t(S,{justify:"space-between",style:{width:"100%"}},{default:a(()=>[t(_,{span:20},{default:a(()=>[w("h2",null,"编辑"+y(A(X).get(u.value))+"题库",1)]),_:1}),t(_,{span:2},{default:a(()=>[t(j,{variant:"outline",theme:"primary",ghost:"",onClick:V},{default:a(()=>[k("新增题目")]),_:1})]),_:1})]),_:1})]),default:a(()=>[t(K,{"row-key":"id",loading:c.value,pagination:l.value,columns:A(ne),data:h.value,hover:!0,"expanded-row-keys":x.value,"expand-on-row-click":!0,"select-on-row-click":!1,"selected-row-keys":g.value,onExpandChange:L,onSelectChange:U,onChange:I},{expandedRow:a(({row:s})=>[w("div",oe,[(b(!0),Z(ee,null,ae(s.answers,(f,q)=>(b(),z(S,{key:q,justify:"space-between"},{default:a(()=>[t(_,{span:20},{default:a(()=>[w("div",null,y(f.answer),1)]),_:2},1024),t(_,{span:2},{default:a(()=>[w("div",null,y(f.fraction)+"分",1)]),_:2},1024)]),_:2},1024))),128))])]),op:a(s=>[t(G,null,{default:a(()=>[t(N,{theme:"primary",onClick:f=>R(s)},{default:a(()=>[k(" 编辑")]),_:2},1032,["onClick"]),t(F,{content:"确认删除吗",onConfirm:f=>$(s)},{default:a(()=>[t(N,{theme:"danger"},{default:a(()=>[k(" 删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:1},8,["loading","pagination","columns","data","expanded-row-keys","selected-row-keys"]),t(le,{visible:r.value,"onUpdate:visible":o[0]||(o[0]=s=>r.value=s),language:u.value,data:C.value},null,8,["visible","language","data"])]),_:1},8,["visible"])}}});export{ce as _};
