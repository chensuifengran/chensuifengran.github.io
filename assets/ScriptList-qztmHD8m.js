import{_ as ct}from"./CodeIcon-C0UkHQq7.js";import{d as tt,u as et,i as o,j as ot,s as st,e as lt,c as C,k as u,l as B,o as L,a as X,m as s,g as U,w as n,t as E,b as i,n as y,p as f,E as vt,q as mt,v as ft,_ as nt,x as gt,y as St,z as kt,S as Q,A as _t,B as bt,C as W,D as yt,F as Ct,G as Lt,H as wt,I as It,J as xt,K as Et,L as Vt,M,N,O as Tt,P as Y,Q as Z,R as At,f as Bt}from"./index-BcWmzzsU.js";import{E as Dt}from"./el-empty-CSp4XbQq.js";/* empty css                        */import{l as Rt}from"./vue-draggable-plus-Cpz5P9Bf.js";const Ft={class:"content drag-handle"},Pt={class:"info"},ht={class:"menu"},Mt=tt({__name:"ScriptListItem",props:{id:{type:String,required:!0},showHover:{type:Boolean,default:!0}},emits:["editorScriptFile","openFile","setScript","runScript","deleteScript"],setup(j,{emit:g}){et(v=>({"4dff7f10":o(c),da99322e:o($),d064742e:o(p),f79ae1de:o(D),"04ab8aee":o(V)}));const H=ot();st(H);const{appAsideBgColor:$,appBackground:D}=lt(),w=j,V=C(()=>w.showHover?"4px":"0px"),p=C(()=>w.showHover?"all 0.5s":"none"),S=g,I=C(()=>u().mockScriptList.value.find(v=>v.id===w.id)),a=C(()=>u().mockScriptList.value.findIndex(v=>v.id===w.id)),k=B(!1),R=()=>{a.value!==void 0&&a.value!==-1&&S("deleteScript",a.value)},T=()=>{a.value!==void 0&&a.value!==-1&&S("editorScriptFile",a.value)},z=()=>{a.value!==void 0&&a.value!==-1&&S("openFile",a.value)},_=()=>{a.value!==void 0&&a.value!==-1&&S("setScript",a.value)},O=()=>{a.value!==void 0&&a.value!==-1&&S("runScript",a.value)},A=B(),c=C(()=>k.value?40+A.value.clientHeight+"px":"40px");return(v,l)=>{const m=vt,G=mt,b=ft,q=ct;return L(),X("div",{class:"script-item",onClick:l[3]||(l[3]=J=>k.value=!o(k))},[s("div",Ft,[s("div",Pt,[o(k)?(L(),U(m,{key:1,class:"icon",size:"large"},{default:n(()=>l[5]||(l[5]=[s("div",{"i-solar-alt-arrow-down-line-duotone":""},null,-1)])),_:1})):(L(),U(m,{key:0,class:"icon",size:"large"},{default:n(()=>l[4]||(l[4]=[s("div",{"i-solar-alt-arrow-right-line-duotone":""},null,-1)])),_:1})),s("span",null,E(o(I).name),1),i(G,{size:"small",type:"info"},{default:n(()=>[y(E(o(I).version),1)]),_:1})]),s("div",ht,[i(b,{class:"box-item",effect:"dark",content:"从列表移除",placement:"bottom"},{default:n(()=>[i(m,{class:"icon",onClick:f(R,["stop"])},{default:n(()=>l[6]||(l[6]=[s("span",{"i-mdi-playlist-remove":""},null,-1)])),_:1})]),_:1}),i(b,{class:"box-item",effect:"dark",content:"编辑脚本",placement:"bottom"},{default:n(()=>[i(q,{class:"icon",onClick:f(T,["stop"])})]),_:1}),i(b,{class:"box-item",effect:"dark",content:"打开脚本",placement:"bottom"},{default:n(()=>[i(m,{class:"icon",onClick:f(z,["stop"])},{default:n(()=>l[7]||(l[7]=[s("span",{"i-mdi-folder-eye-outline":""},null,-1)])),_:1})]),_:1}),i(b,{class:"box-item",effect:"dark",content:"脚本设置",placement:"bottom"},{default:n(()=>[i(m,{class:"icon",onClick:f(_,["stop"])},{default:n(()=>l[8]||(l[8]=[s("span",{"i-solar-settings-linear":""},null,-1)])),_:1})]),_:1}),i(b,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:n(()=>[i(m,{class:"icon",onClick:f(O,["stop"])},{default:n(()=>l[9]||(l[9]=[s("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})])]),s("div",{class:"details",ref_key:"detailsRef",ref:A},[l[10]||(l[10]=s("div",null,"脚本ID：",-1)),s("div",{class:"text",onClick:l[0]||(l[0]=f(()=>{},["stop"]))},E(o(I).id),1),l[11]||(l[11]=s("div",null,"保存路径：",-1)),s("div",{class:"text",onClick:l[1]||(l[1]=f(()=>{},["stop"]))},E(o(I).savePath),1),l[12]||(l[12]=s("div",null,"脚本描述(备注)：",-1)),s("div",{class:"description",onClick:l[2]||(l[2]=f(()=>{},["stop"]))},E(o(I).description),1)],512)])}}}),Nt=nt(Mt,[["__scopeId","data-v-b67c9a44"]]),Ut={class:"script-list-div"},Ht={class:"dialog-footer"},$t={class:"dialog-footer"},zt={class:"header-right"},Ot={class:"list"},Gt=tt({__name:"ScriptList",setup(j){et(e=>({"03ca04a0":o(z)}));const g=gt("headerRef"),H=Vt,$=B();let D=()=>{};const w=ot(),{scriptList:V}=st(w),{openId:p,curScriptDir:S,preloadPath:I,preloadText:a,contentTransform:k,asideBarPos:R}=Bt(),T=B(!0),{appBackground:z}=lt(),_=St({visible:!1,content:"",newImport:()=>{},updateImport:()=>{}}),O=()=>{T.value=!1},A=()=>{T.value=!0},c=B(!1),v=e=>{D=()=>{u().mockScriptList.value.splice(e,1),M({title:"提示",message:"删除成功",type:"success",position:"bottom-right"}),c.value=!1},c.value=!0},l=e=>{k.value="translateX(-100%)",N.replace("/script/editor");let t=V.value[e]?.id,d="";t=u().mockScriptList.value[e]?.id,d="E:\\playground",t===p.value&&(p.value="-1");const h=setTimeout(async()=>{p.value=t,S.value=d||await Tt.resolve(V.value[e].savePath,"../"),clearTimeout(h)},100);R.value="absolute"},m=async e=>{{M({title:"提示",message:"playground环境不支持打开文件",type:"warning",position:"bottom-right"});return}},G=()=>{{const e=Y(),t="v1."+Math.floor(Math.random()*10);u().mockScriptList.value.push({id:e,savePath:"内部存储",name:e,version:t,description:"playground环境测试脚本",setting:{autoImportLastRunConfig:!0,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1},content:Z(e,t,"playground环境测试脚本")}),M({title:"提示",message:"创建成功",type:"success",position:"bottom-right"}),p.value=e,N.replace({path:"/script/editor"}),k.value="translateX(-100%)",R.value="absolute";return}},b=async()=>{{const e=Y(),t="v1."+Math.floor(Math.random()*10);u().mockScriptList.value.push({id:e,savePath:"内部存储",name:e,version:t,description:"playground环境测试脚本",setting:{autoImportLastRunConfig:!0,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1},content:Z(e,t,"playground环境测试脚本")}),M({title:"提示",message:"导入成功",type:"success",position:"bottom-right"});return}},q=async e=>{p.value=u().mockScriptList.value[e].id,N.replace("/script/run")},J=e=>{p.value=u().mockScriptList.value[e].id,N.replace("/script/setting")},{trueSearch:K,searchInfo:x}=Ct(),it=C(()=>K.value!==""),F=C({get:()=>{const e=K.value;return e===""?u().mockScriptList.value:u().mockScriptList.value.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))},set:e=>{{u().mockScriptList.value=e;return}}}),at=e=>{e.forEach(t=>{x.show=!t.isIntersecting})};let P;return kt(()=>{x.show=!1,x.target=Q.None,P&&g.value&&P.unobserve(g.value)}),_t(()=>{bt.closeSplashscreen(),P=new IntersectionObserver(at,{}),g.value&&P.observe(g.value),x.target=Q.ScriptList}),(e,t)=>{const d=At,h=Lt,rt=wt,ut=It,dt=Dt,pt=Nt;return L(),X("div",Ut,[i(h,{modelValue:o(_).visible,"onUpdate:modelValue":t[0]||(t[0]=r=>o(_).visible=r),title:"脚本导入"},{footer:n(()=>[s("span",Ht,[i(d,{onClick:o(_).newImport},{default:n(()=>t[5]||(t[5]=[y("作为新脚本导入")])),_:1},8,["onClick"]),i(d,{onClick:o(_).updateImport},{default:n(()=>t[6]||(t[6]=[y("更新同名脚本")])),_:1},8,["onClick"])])]),default:n(()=>[s("div",null,E(o(_).content),1),t[7]||(t[7]=s("div",null,"作为新脚本导入：",-1)),t[8]||(t[8]=s("div",null," 此选项会在脚本列表新增一项脚本，该脚本无法继承同名脚本配置(id不一致) ",-1)),t[9]||(t[9]=s("div",null,"更新同名脚本：",-1)),t[10]||(t[10]=s("div",null," 此选项会将新脚本内容覆盖掉同名脚本，该脚本可以继承同名脚本配置(id一致) ",-1))]),_:1},8,["modelValue"]),i(h,{modelValue:o(c),"onUpdate:modelValue":t[2]||(t[2]=r=>W(c)?c.value=r:null),title:"删除脚本"},{footer:n(()=>[s("span",$t,[i(d,{onClick:t[1]||(t[1]=r=>c.value=!1)},{default:n(()=>t[11]||(t[11]=[y("取消")])),_:1}),i(d,{type:"danger",onClick:o(D)},{default:n(()=>t[12]||(t[12]=[y("删除")])),_:1},8,["onClick"])])]),default:n(()=>[t[13]||(t[13]=s("div",null,"确定要删除该脚本吗?",-1))]),_:1},8,["modelValue"]),s("div",{class:"header",ref_key:"headerRef",ref:g},[t[16]||(t[16]=s("span",{style:{"font-size":"18px"}},"脚本列表",-1)),s("div",zt,[i(rt,{class:"input",modelValue:o(x).content,"onUpdate:modelValue":t[3]||(t[3]=r=>o(x).content=r),clearable:"",placeholder:"搜索脚本名称或备注"},null,8,["modelValue"]),i(ut,null,{default:n(()=>[i(d,{onClick:b},{default:n(()=>t[14]||(t[14]=[y("导入")])),_:1}),i(d,{type:"primary",onClick:G},{default:n(()=>t[15]||(t[15]=[y("新建")])),_:1})]),_:1})])],512),s("div",Ot,[!o(H)&&o(V).length===0?(L(),U(dt,{key:0,description:"暂无脚本"})):yt("",!0),i(o(Rt),{ref_key:"el",ref:$,modelValue:o(F),"onUpdate:modelValue":t[4]||(t[4]=r=>W(F)?F.value=r:null),ghostClass:"ghost",class:"draggable-content",disabled:o(it),animation:200,handle:".drag-handle",onStart:O,onUpdate:A,onEnd:A},{default:n(()=>[(L(!0),X(xt,null,Et(o(F),r=>(L(),U(pt,{key:r.id,id:r.id,onEditorScriptFile:l,"show-hover":o(T),onOpenFile:m,onSetScript:J,onRunScript:q,onDeleteScript:v},null,8,["id","show-hover"]))),128))]),_:1},8,["modelValue","disabled"])])])}}}),Qt=nt(Gt,[["__scopeId","data-v-a5990478"]]);export{Qt as default};