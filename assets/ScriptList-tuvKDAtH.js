import{_ as mt}from"./CodeIcon-DQ9FTC70.js";import{d as st,u as ot,m as s,O as it,e as x,r as h,o as E,i as W,a as o,c as z,w as n,j as l,l as _,t as D,aP as S,H as V,E as gt,q as St,ac as _t,ad as kt,aQ as Lt,C as bt,af as It,g as yt,n as Ct,ag as K,ab as wt,ak as xt,am as Et,aR as Tt,aj as Dt,ay as Rt,aS as At,D as $,I as Z,p as Vt,aT as ht}from"./.pnpm-D_Vtnb2u.js";import{c as nt,u as lt,d as p,e as at,_ as rt,S as tt,i as Pt,r as H,b as Bt,f as Mt,I as Nt,a as Ft,p as Ut,D as Ot,g as $t,h as et}from"./index-CQveOEMM.js";const Ht=["id"],zt={class:"content drag-handle"},Gt={class:"info"},jt={class:"s-name"},qt={class:"menu"},Xt=st({__name:"ScriptListItem",props:{id:{type:String,required:!0},showHover:{type:Boolean,default:!0}},emits:["editorScriptFile","openFile","setScript","runScript","deleteScript"],setup(Y,{emit:k}){ot(m=>({bb7baf36:s(Q),"2df66b1c":s(j),"245a3adc":s(f),"10bf0404":s(P),"6a708694":s(R)}));const G=nt();it(G);const{appAsideBgColor:j,appBackground:P}=lt(),d=Y,R=x(()=>d.showHover?"4px":"0px"),f=x(()=>d.showHover?"all 0.5s":"none"),L=k,T=x(()=>p().mockScriptList.value.find(m=>m.id===d.id)),a=x(()=>p().mockScriptList.value.findIndex(m=>m.id===d.id)),{tourInfo:u}=at(),b=h(!1),A=()=>{if(u.scriptList.touring&&u.scriptList.step>=3){V.warning("请先完成引导");return}a.value!==void 0&&a.value!==-1&&L("deleteScript",a.value)},q=()=>{if(u.scriptList.touring&&u.scriptList.step>=3){V.warning("请先完成引导");return}a.value!==void 0&&a.value!==-1&&L("editorScriptFile",a.value)},I=()=>{if(u.scriptList.touring&&u.scriptList.step>=3){V.warning("请先完成引导");return}a.value!==void 0&&a.value!==-1&&L("openFile",a.value)},X=()=>{if(u.scriptList.touring&&u.scriptList.step>=3){V.warning("请先完成引导");return}a.value!==void 0&&a.value!==-1&&L("setScript",a.value)},B=()=>{if(u.scriptList.touring&&u.scriptList.step>=3){V.warning("请先完成引导");return}a.value!==void 0&&a.value!==-1&&L("runScript",a.value)},v=h(),Q=x(()=>b.value?40+v.value.clientHeight+"px":"40px");return(m,i)=>{const g=gt,M=St,N=_t,y=kt,F=mt;return E(),W("div",{class:"script-item",id:d.id,onClick:i[3]||(i[3]=C=>b.value=!s(b))},[o("div",zt,[o("div",Gt,[s(b)?(E(),z(g,{key:1,class:"icon",size:"large"},{default:n(()=>i[5]||(i[5]=[o("div",{"i-solar-alt-arrow-down-line-duotone":""},null,-1)])),_:1})):(E(),z(g,{key:0,class:"icon",size:"large"},{default:n(()=>i[4]||(i[4]=[o("div",{"i-solar-alt-arrow-right-line-duotone":""},null,-1)])),_:1})),l(N,{size:"small",type:"info"},{default:n(()=>[l(M,{class:"v-text",truncated:"",size:"small"},{default:n(()=>[_(D(s(T).version),1)]),_:1})]),_:1}),o("div",jt,[l(M,{truncated:"",tag:"Bold",size:"large"},{default:n(()=>[_(D(s(T).name),1)]),_:1})])]),o("div",qt,[l(y,{class:"box-item",effect:"dark",content:"从列表移除",placement:"bottom"},{default:n(()=>[l(g,{id:d.id+"-DEL",class:"icon",onClick:S(A,["stop"])},{default:n(()=>i[6]||(i[6]=[o("span",{"i-mdi-playlist-remove":""},null,-1)])),_:1},8,["id"])]),_:1}),l(y,{class:"box-item",effect:"dark",content:"编辑脚本",placement:"bottom"},{default:n(()=>[l(F,{id:d.id+"-EDIT",class:"icon",onClick:S(q,["stop"])},null,8,["id"])]),_:1}),l(y,{class:"box-item",effect:"dark",content:"打开脚本",placement:"bottom"},{default:n(()=>[l(g,{id:d.id+"-OPEN",class:"icon",onClick:S(I,["stop"])},{default:n(()=>i[7]||(i[7]=[o("span",{"i-mdi-folder-eye-outline":""},null,-1)])),_:1},8,["id"])]),_:1}),l(y,{class:"box-item",effect:"dark",content:"脚本设置",placement:"bottom"},{default:n(()=>[l(g,{id:d.id+"-SETTING",class:"icon",onClick:S(X,["stop"])},{default:n(()=>i[8]||(i[8]=[o("span",{"i-solar-settings-linear":""},null,-1)])),_:1},8,["id"])]),_:1}),l(y,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:n(()=>[l(g,{id:d.id+"-RUN",class:"icon",onClick:S(B,["stop"])},{default:n(()=>i[9]||(i[9]=[o("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1},8,["id"])]),_:1})])]),o("div",{class:"details",ref_key:"detailsRef",ref:v},[i[10]||(i[10]=o("div",null,"脚本ID：",-1)),o("div",{class:"text",onClick:i[0]||(i[0]=S(()=>{},["stop"]))},D(s(T).id),1),i[11]||(i[11]=o("div",null,"保存路径：",-1)),o("div",{class:"text",onClick:i[1]||(i[1]=S(()=>{},["stop"]))},D(s(T).savePath),1),i[12]||(i[12]=o("div",null,"脚本描述(备注)：",-1)),o("div",{class:"description",onClick:i[2]||(i[2]=S(()=>{},["stop"]))},D(s(T).description),1)],512)],8,Ht)}}}),Qt=rt(Xt,[["__scopeId","data-v-0fc5226c"]]),Wt={class:"script-list-div"},Yt={class:"dialog-footer"},Jt={class:"dialog-footer"},Kt={class:"header-right"},Zt={class:"list"},te=st({__name:"ScriptList",setup(Y){ot(e=>({"44be9479":s(q)}));const k=Lt("headerRef"),G=Nt,j=h();let P=()=>{};const d=nt(),{scriptList:R}=it(d),{openId:f,curScriptDir:L,preloadPath:T,preloadText:a,contentTransform:u,asideBarPos:b}=Ft(),A=h(!0),{appBackground:q}=lt(),I=bt({visible:!1,content:"",newImport:()=>{},updateImport:()=>{}}),X=()=>{A.value=!1},B=()=>{A.value=!0},v=h(!1),Q=e=>{P=()=>{p().mockScriptList.value.splice(e,1),$({title:"提示",message:"删除成功",type:"success",position:"bottom-right"}),v.value=!1},v.value=!0},m=e=>{u.value="translateX(-100%)",H.replace("/script/editor");let t=R.value[e]?.id,r="";t=p().mockScriptList.value[e]?.id,r="E:\\playground",t===f.value&&(f.value="-1");const w=setTimeout(async()=>{f.value=t,L.value=r||await Ut.resolve(R.value[e].savePath,"../"),clearTimeout(w)},100);b.value="absolute"},i=async e=>{{$({title:"提示",message:"playground环境不支持打开文件",type:"warning",position:"bottom-right"});return}},g=()=>{const{tourInfo:e}=at();{const{mockScriptList:t}=p();if(e.scriptList.touring&&e.scriptList.step===2){t.value.push({id:Ot,name:"演示脚本",savePath:"内部存储",version:"v1.2",description:"对脚本交互表单的渲染效果进行展示",setting:{autoImportLastRunConfig:!0,targetAdbDevice:"",targetApp:"",autoStartTargetApp:!1,excludeDevice:[]},content:$t}),e.scriptList.preventNext=!1,e.scriptList.doneSteps.includes(e.scriptList.step)||e.scriptList.doneSteps.push(e.scriptList.step),e.scriptList.step++;return}const r=Z(),w="v1."+Math.floor(Math.random()*10);t.value.push({id:r,savePath:"内部存储",name:r,version:w,description:"playground环境测试脚本",setting:{autoImportLastRunConfig:!0,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1},content:et(r,w,"playground环境测试脚本")}),$({title:"提示",message:"创建成功",type:"success",position:"bottom-right"}),f.value=r,H.replace({path:"/script/editor"}),u.value="translateX(-100%)",b.value="absolute";return}},M=async()=>{{const e=Z(),t="v1."+Math.floor(Math.random()*10);p().mockScriptList.value.push({id:e,savePath:"内部存储",name:e,version:t,description:"playground环境测试脚本",setting:{autoImportLastRunConfig:!0,targetAdbDevice:"",excludeDevice:[],targetApp:"",autoStartTargetApp:!1},content:et(e,t,"playground环境测试脚本")}),$({title:"提示",message:"导入成功",type:"success",position:"bottom-right"});return}},N=async e=>{f.value=p().mockScriptList.value[e].id,H.replace("/script/run")},y=e=>{f.value=p().mockScriptList.value[e].id,H.replace("/script/setting")},{trueSearch:F,searchInfo:C,ingoreObserver:J}=Bt(),ut=x(()=>F.value!==""),U=x({get:()=>{const e=F.value;return e===""?p().mockScriptList.value:p().mockScriptList.value.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))},set:e=>{{p().mockScriptList.value=e;return}}}),dt=e=>{e.forEach(t=>{J.value||(C.show=!t.isIntersecting)})};let O;return It(()=>{J.value=!0,C.show=!1,C.target=tt.None,O&&k.value&&O.unobserve(k.value)}),yt(async()=>{Pt.closeSplashscreen(),O=new IntersectionObserver(dt,{}),k.value&&O.observe(k.value),C.target=tt.ScriptList,await Ct();const{controlDeviceInfo:e}=Mt();if(e.willRunScriptId){const t=p().mockScriptList.value.findIndex(r=>r.id===e.willRunScriptId);t!==-1&&N(t)}}),(e,t)=>{const r=Vt,w=xt,pt=Et,ct=Tt,vt=ht,ft=Qt;return E(),W("div",Wt,[l(w,{modelValue:s(I).visible,"onUpdate:modelValue":t[0]||(t[0]=c=>s(I).visible=c),title:"脚本导入"},{footer:n(()=>[o("span",Yt,[l(r,{onClick:s(I).newImport},{default:n(()=>t[5]||(t[5]=[_("作为新脚本导入")])),_:1},8,["onClick"]),l(r,{onClick:s(I).updateImport},{default:n(()=>t[6]||(t[6]=[_("更新同名脚本")])),_:1},8,["onClick"])])]),default:n(()=>[o("div",null,D(s(I).content),1),t[7]||(t[7]=o("div",null,"作为新脚本导入：",-1)),t[8]||(t[8]=o("div",null," 此选项会在脚本列表新增一项脚本，该脚本无法继承同名脚本配置(id不一致) ",-1)),t[9]||(t[9]=o("div",null,"更新同名脚本：",-1)),t[10]||(t[10]=o("div",null," 此选项会将新脚本内容覆盖掉同名脚本，该脚本可以继承同名脚本配置(id一致) ",-1))]),_:1},8,["modelValue"]),l(w,{modelValue:s(v),"onUpdate:modelValue":t[2]||(t[2]=c=>K(v)?v.value=c:null),title:"删除脚本"},{footer:n(()=>[o("span",Jt,[l(r,{onClick:t[1]||(t[1]=c=>v.value=!1)},{default:n(()=>t[11]||(t[11]=[_("取消")])),_:1}),l(r,{type:"danger",onClick:s(P)},{default:n(()=>t[12]||(t[12]=[_("删除")])),_:1},8,["onClick"])])]),default:n(()=>[t[13]||(t[13]=o("div",null,"确定要删除该脚本吗?",-1))]),_:1},8,["modelValue"]),o("div",{class:"header",ref_key:"headerRef",ref:k},[t[16]||(t[16]=o("span",{style:{"font-size":"18px"}},"脚本列表",-1)),o("div",Kt,[l(pt,{class:"input",id:"search_script_input",modelValue:s(C).content,"onUpdate:modelValue":t[3]||(t[3]=c=>s(C).content=c),clearable:"",placeholder:"搜索脚本名称或备注"},null,8,["modelValue"]),l(ct,null,{default:n(()=>[l(r,{onClick:M},{default:n(()=>t[14]||(t[14]=[_("导入")])),_:1}),l(r,{id:"new_script_btn",type:"primary",onClick:g},{default:n(()=>t[15]||(t[15]=[_("新建")])),_:1})]),_:1})])],512),o("div",Zt,[!s(G)&&s(R).length===0?(E(),z(vt,{key:0,description:"暂无脚本"})):wt("",!0),l(s(At),{ref_key:"el",ref:j,modelValue:s(U),"onUpdate:modelValue":t[4]||(t[4]=c=>K(U)?U.value=c:null),ghostClass:"ghost",class:"draggable-content",disabled:s(ut),animation:200,handle:".drag-handle",onStart:X,onUpdate:B,onEnd:B},{default:n(()=>[(E(!0),W(Dt,null,Rt(s(U),c=>(E(),z(ft,{key:c.id,id:c.id,onEditorScriptFile:m,"show-hover":s(A),onOpenFile:i,onSetScript:y,onRunScript:N,onDeleteScript:Q},null,8,["id","show-hover"]))),128))]),_:1},8,["modelValue","disabled"])])])}}}),ie=rt(te,[["__scopeId","data-v-857f34f9"]]);export{ie as default};