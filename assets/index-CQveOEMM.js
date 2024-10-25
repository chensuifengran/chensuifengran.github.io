const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ScriptConsole-DyvjAC4Q.js","assets/.pnpm-D_Vtnb2u.js","assets/.pnpm-BUzDz38E.css","assets/ScriptConsole-B-Iyd_U_.css","assets/ScriptList-tuvKDAtH.js","assets/CodeIcon-DQ9FTC70.js","assets/ScriptList-2rvSqGMZ.css","assets/CodeEditor-By0LFYKx.js","assets/Loading-DENczaOT.js","assets/Loading-CTAAG0As.css","assets/fs-C5TBDgLP.js","assets/CodeEditor-CH30BdBU.css","assets/ScriptSetting-D0Ny2mZd.js","assets/ScriptSetting-BlfMxEEc.css","assets/ScriptRunConsole-FO_ttr_x.js","assets/InfoIcon.vue_vue_type_script_setup_true_lang-CG6MmSdw.js","assets/ScriptRunConsole-B2AvqhGl.css","assets/APITest-Dd4anEFr.js","assets/dataStructure-e7NRF88o.js","assets/dataStructure-C5M0__id.css","assets/APITest-CPJuWE0k.css","assets/CodeSnippet-5NwL5toY.js","assets/CodeSnippet-8D6quYyE.css","assets/ScriptProject-BrI0iG1U.js","assets/ScriptProject-Dh7kPXfA.css","assets/SettingPage-CZdS3PQu.js","assets/SettingPage-LSCxl0Km.css","assets/Account-EamtQ_Rt.js","assets/Account-BdJeaSaM.css","assets/ScriptRunWindow-CcXQyBZ2.js","assets/ScriptRunWindow-DkYR6T9y.css","assets/FloatWindow-D6V0onx_.js","assets/FloatWindow-C1t0G91l.css","assets/PointerUtil-8Bx6924A.js","assets/PointerUtil-Dj4369HI.css","assets/Notification-40nYAYyZ.js","assets/Notification-BPpz3X5Q.css","assets/OperationRecordWindow-CtsWG8VW.js","assets/OperationRecordWindow-xyc7XoBN.css","assets/DepManagerPage-Dyk9FkjL.js","assets/DepManagerPage-UrB1wp_4.css","assets/InvokesManager-Bl0y3mqg.js","assets/InvokesManager-BPcRu0gc.css","assets/NotFound-BYsf2VRV.js"])))=>i.map(i=>d[i]);
import{d as W,o as b,c as T,w as d,a as x,E as ne,u as He,b as ga,r as S,e as A,f as js,n as Ke,g as Ae,h as Us,i as I,j as g,k as Be,l as $,t as E,m as c,p as me,q as Te,_ as U,s as zs,v as Bs,x as qs,y as fa,z as Ks,A as Ee,B as Gs,C as K,D as G,F as Qt,G as Js,H as oe,I as xe,J as gt,K as Me,L as pe,M as Ws,N as Ys,O as Ze,P as ya,W as Xs,Q as Hs,R as Ma,S as Ut,T as Zs,U as Qs,V as er,X as $a,Y as ft,Z as tr,$ as J,a0 as nr,a1 as ar,a2 as or,a3 as sr,a4 as rr,a5 as lr,a6 as ir,a7 as cr,a8 as ur,a9 as St,aa as Tt,ab as q,ac as Mt,ad as $t,ae as dr,af as ka,ag as re,ah as yt,ai as ie,aj as ae,ak as kt,al as pr,am as It,an as mr,ao as gr,ap as Ue,aq as ze,ar as fr,as as yr,at as ha,au as Ia,av as Pa,aw as Ca,ax as hr,ay as ge,az as br,aA as vr,aB as _r,aC as wr,aD as xr,aE as Sr,aF as Tr,aG as Mr,aH as $r,aI as at,aJ as kr,aK as Ir,aL as Pr,aM as Cr,aN as Fr,aO as Ar}from"./.pnpm-D_Vtnb2u.js";const en=Object.freeze(Object.defineProperty({__proto__:null,get imgSimilarityApi(){return zg}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Or=W({__name:"ReturnIcon",props:{size:{type:String,default:"large"}},setup(e){return(t,n)=>{const a=ne;return b(),T(a,{size:e.size},{default:d(()=>n[0]||(n[0]=[x("span",{"i-solar-undo-left-bold":""},null,-1)])),_:1},8,["size"])}}}),Dr=["data-tauri-drag-region"],Rr={class:"content"},Er={id:"header-extra",ref:"extra"},Vr=W({__name:"CommonHeader",props:{allowDrag:{type:Boolean,default:!0},title:{type:String,default:""},height:{type:[String,Number],default:40}},emits:["back"],setup(e,{emit:t}){He(v=>({"3065db3f":c(i),"2616b538":c(r),"8f6d3c14":c(s),"4ca5d9ad":c(l)}));const n=ga("header-wrap"),a=ga("extra"),s=S("auto"),o=e,r=A(()=>typeof o.height=="string"?o.height:o.height+"px"),l=A(()=>o.allowDrag?"none":"all"),i=A(()=>o.allowDrag?"move":"auto"),u=t,f=()=>u("back"),p=()=>{const v=n.value?.offsetWidth||0,h=a.value?.offsetWidth||0;s.value=Math.floor(v-h-10)+"px"};return js(()=>{Ke(p)}),Ae(()=>{p(),window.addEventListener("resize",p)}),Us(()=>{window.removeEventListener("resize",p)}),(v,h)=>{const w=Or,M=me,F=Te;return b(),I("div",{ref:"header-wrap",class:"header-wrap","w-full":"",flex:"","flex-row":"","items-center":"","justify-between":"","box-border":"","data-tauri-drag-region":o.allowDrag},[x("div",Rr,[g(M,{class:"btn-return",link:"",onClick:f},{default:d(()=>[g(w)]),_:1}),h[0]||(h[0]=x("div",{class:"line"},null,-1)),Be(v.$slots,"before",{},void 0,!0),g(F,{truncated:""},{default:d(()=>[$(E(o.title),1)]),_:1}),Be(v.$slots,"after",{},void 0,!0)]),x("div",Er,[Be(v.$slots,"default",{},void 0,!0)],512)],8,Dr)}}}),Z=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},Lr=Z(Vr,[["__scopeId","data-v-14ef234b"]]),Nr=(e="newScript",t="v1.0",n="脚本描述")=>{const s=Object.keys(Object.assign({"../invokes/Preludes/buildForm/index.ts":()=>U(()=>Promise.resolve().then(()=>Ft),void 0),"../invokes/Preludes/log/index.ts":()=>U(()=>Promise.resolve().then(()=>Ot),void 0),"../invokes/Preludes/sleep/index.ts":()=>U(()=>Promise.resolve().then(()=>Dt),void 0)})).map(o=>o.split("/")[3]);return`//引用类型推断文件，以便在vscode中获得内置api的类型推断
//@ts-ignore
/// <reference path="./lib/csfr.d.ts" />
/*
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:${t}
 * @name:${e}
 * @description:${n}
 */
const { ${s.join(", ")} } = Preludes;
//脚本运行入口函数
const main = async () => {
  //构建默认表单项并渲染表单
  buildForm([
    // {
    //   id: 'checkItem',
    //   type: FieldType.Check,
    //   label: '测试字段',
    //   targetGroupLabel: "测试组",
    //   checked: true
    // },
  ]);
  //使用getCustomizeForm等待用户点击"开始"按钮，点击后等待结束，可以通过getFieldValue或getFieldValueById方法获取表单数据
  const { getFieldValue, getFieldValueById } = await getCustomizeForm();
  //示例
  //通过组件类型、分组名称和字段名称获取表单项的值
  //const testField = getFieldValue<boolean>(FieldType.Check, '测试字段', false, '测试组');
  //或者通过id获取表单项的值
  //const testField = getFieldValueById<boolean>('checkItem', false);
  //console.log(testField);//true
  //脚本运行逻辑
  
};
`},oh=`//引用类型推断文件，以便在vscode中获得内置api的类型推断
//@ts-ignore
/// <reference path="./lib/csfr.d.ts" />
/*
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:v1.2
 * @name: 演示脚本
 * @description:对脚本交互表单的渲染效果进行展示
 */
const { buildForm, log, sleep } = Preludes;
//脚本运行入口函数
const main = async () => {
  //构建默认表单项并渲染表单
  buildForm([
    {
      type: FieldType.Select,
      label: "运行模式",
      targetGroupLabel: "选择组件",
      options: ["运行模式1", "运行模式2", "运行模式3"],
      value: "运行模式1", //默认值
    },
    {
      id: "__test__",
      type: FieldType.Select,
      label: "测试",
      targetGroupLabel: "选择组件",
      multiple: true,
      options: [1, 2, 3, 4],
      value: [1, 3],
    },
    {
      type: FieldType.Select,
      label: "最大分数百分比",
      targetGroupLabel: "选择组件",
      options: [100, 90, 80],
      value: 100,
    },
    {
      id: "daojwdoj",
      type: FieldType.Select,
      label: "随机最小分数百分比",
      targetGroupLabel: "选择组件",
      group: true,
      multiple: true,
      options: [
        {
          groupLabel: "高分",
          options: [
            {
              value: 90,
              label: "90分",
            },
            {
              value: 80,
              label: "80分",
            },
            {
              value: 70,
              label: "70分",
            },
          ],
        },
        {
          groupLabel: "低分",
          options: [
            {
              value: 60,
              label: "60分",
            },
            {
              value: 50,
              label: "50分",
            },
            {
              value: 0,
              label: "0分",
            },
          ],
        },
      ],
      value: [90, 80],
    },
    {
      id: "",
      type: FieldType.Check,
      label: "随机点击",
      targetGroupLabel: "复选框组件",
      checked: false,
    },
    {
      type: FieldType.Check,
      label: "随机偏移",
      targetGroupLabel: "复选框组件",
      checked: true,
    },
    {
      type: FieldType.Input,
      inputType: "text",
      label: "密码",
      targetGroupLabel: "密码组件",
      value: "-1",
      mod: "password",
      clearable: true,
      showPassword: true,
      placeholder: "dawkodkwoakdok",
    },
    {
      type: FieldType.Input,
      label: "密码2",
      targetGroupLabel: "密码组件",
      value: "-1",
      mod: "password",
      clearable: true,
      maxlength: 5,
      showWordLimit: true,
    },
    {
      type: FieldType.Input,
      label: "请输入随机值的范围",
      id: "test_2",
      inputType: "range",
      targetGroupLabel: "范围输入组件",
      controls: false,
      value: [0, 5],
      limit: [0, 10],
    },
    {
      type: FieldType.Input,
      label: "说明",
      targetGroupLabel: "文本域组件",
      value: "巴拉巴拉~",
      maxlength: 50,
      showWordLimit: true,
      clearable: true,
      mod: "textarea",
      autosize: [undefined, 10],
    },
    {
      type: FieldType.Input,
      inputType: "number",
      label: "数字1",
      targetGroupLabel: "数字输入框",
      value: 123,
      step: 2,
      controlsPosition: "right",
      valueOnClear: "min",
      min: -5,
    },
    {
      type: FieldType.Input,
      inputType: "number",
      label: "数字2",
      targetGroupLabel: "数字输入框",
      value: 123,
      step: 3,
      max: 129,
      valueOnClear: "max",
    },
    {
      type: FieldType.Input,
      label: "简介",
      targetGroupLabel: "文本输入框",
      value: "-1",
      showWordLimit: true,
      maxlength: 100,
    },
    {
      type: FieldType.Input,
      label: "子文件(多选)",
      targetGroupLabel: "文件输入",
      inputType: "file",
      multiple: true,
      value: [],
    },
    {
      type: FieldType.Input,
      label: "主文件",
      targetGroupLabel: "文件输入",
      inputType: "file",
      multiple: false,
      value: "",
    },
    {
      id: "daokok",
      type: FieldType.Picker,
      label: "颜色",
      targetGroupLabel: "pickers",
      pickerType: "color",
      value: "",
      colorFormat: "rgb",
      enableAlpha: false,
      predefine: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    },
    {
      type: FieldType.Picker,
      label: "222",
      targetGroupLabel: "pickers",
      value: [],
      pickerType: "time",
      isRange: true,
      valueFormat: "HH:mm:ss",
      rangeSeparator: "至",
      startPlaceholder: "起始时间",
      endPlaceholder: "结束时间",
    },
    {
      type: FieldType.Picker,
      label: "111",
      targetGroupLabel: "pickers",
      value: "",
      pickerType: "time",
      isRange: false,
      valueFormat: "HH/mm/ss",
      disabledHours: () => [1, 2, 3, 16],
    },
    {
      id: "TM",
      type: FieldType.Picker,
      label: "333",
      targetGroupLabel: "pickers",
      value: [],
      pickerType: "date",
      isRange: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss",
    },
    {
      type: FieldType.Picker,
      label: "444",
      targetGroupLabel: "pickers",
      value: new Date(),
      pickerType: "date",
    },
    {
      type: FieldType.Select,
      label: "部分",
      targetGroupLabel: "分段选择",
      segmented: true,
      options: [
        {
          label: "一",
          value: 1,
        },
        {
          label: "二",
          value: 2,
        },
        {
          label: "三",
          value: 3,
        },
      ],
      value: 1,
    },
  ]);
  //等待用户点击"开始"按钮，点击按钮时等待结束，后续可以通过getCustomizeForm获取表单数据
  const { getFieldValue, getFieldValueById } = await getCustomizeForm();
  //通过组件类型、标签名、组标签定位到表单项并获取值
  const mod = getFieldValue(
    FieldType.Select,
    "运行模式",
    "无效的运行模式",
    "选择组件"
  );
  //通过id获取表单项的值
  const testValue = getFieldValueById<number[]>("__test__", []);
  //其它表单项的获取方式同上
  log("运行模式为：" + mod, "loading");
  log("testValue:" + testValue, "loading");
  const unlisten = await GlobalShortcut.listen(["Shift+C"], (e) => {
    log("按键按下" + e.shortcut, "loading");
    unlisten && unlisten();
  });
  const types = ["loading", "success", "danger", "warning", "info"];
  setInterval(() => {
    let socre = Math.floor((Math.random() * 100 - 1) / 20);
    log(Math.random(), types[socre] as any);
  }, 500);
  await sleep(1000 * 3000);
};
`,sh="DEMO_SCRIPT_ITEM",Ge=!0,rh=!1,lh=Symbol("headerRefInjectKey"),Fa="47.106.34.210:8711",jr=async(e,t)=>{if(!t)return await fa(e);const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await fa(e,...a)},Ur=async(e,t)=>{const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await Ks(e,...a)},zr=async()=>"",Je={basename:zs,dirname:Bs,extname:qs,join:jr,resolve:Ur,getInstallDir:zr},Br={clear:()=>Ee("notify",{type:"clear-message"}),done:()=>Ee("notify",{type:"done"}),init:e=>Ee("notify",{type:"init",payload:e}),end:()=>Ee("notify",{type:"end"}),send:e=>Ee("notify",{type:"message",payload:e}),sendCustom:e=>Ee("notify",{type:"custom-message",payload:e}),listen:async(e,t)=>await Gs("notify",a=>{e(a)},{target:t})},Aa={notify:Br},qr=S([]),Kr=K([]),Gr=S("lackDepDownload"),Jr=S(!1),Wr=S([]),Yr=S([]),Xr=async e=>{{G({title:"提示",message:"playground环境不支持依赖管理",type:"warning",position:"bottom-right"});return}},Hr=()=>{},Zr=()=>{},Qr=e=>{},el=()=>({goInstallDeps:Xr,lackDependence:Kr,activeDrewerName:Gr,allLibsName:qr,needUpdateDepList:Wr,contentLoading:Jr,depPkgList:Yr,close:Zr,syncData:Qr,syncMainData:Hr}),tl=async(e,t)=>{},nl=async e=>[],al=async e=>[],ol=async()=>"CPU",sl=async(e,t="")=>{},rl=async e=>{},ll=async()=>{},il=async e=>[],cl=async()=>{},ul=async()=>[],dl=async(e,t=!1,n=!1,a="CPU")=>!0,pl=e=>"primary",zt={libExists:sl,renameLib:tl,syncOcrValue:ol,syncDependentVersion:al,checkDepUpdate:cl,checkDepLack:ul,getAllLibsName:il,installDep:dl,diffLocalVersionConfig:nl,getDepStateType:pl,pushUpdateDep:rl,batchUpdateDep:ll},Q=Qt("globalSettings",{state:()=>({isInited:!1,app:{latestVersion:"2.0.0",depHaveUpdate:!1,dependenceState:"完整版",state:{aside:{collapsed:!1,currentItem:"script"}},modulesSetting:{autoOpenOutput:!0,drawerSize:"30%"}},envSetting:{workDir:"",screenshotSavePath:"",_screenshotDir:"",_scriptRootDir:"E:\\test\\root_dir"},ocr:{value:"CPU",options:["GPU","CPU"],gpuMemory:1e3},view:{showUpdateInTitleBar:!0},editor:{theme:{value:"跟随全局主题",options:["跟随全局主题","明亮","暗黑"]},runAutoSave:!0}}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),delete e.ocr.inited,JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t);const n=await zt.syncOcrValue();n&&(t.ocr.value=n),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="globalSettings"&&localStorage.setItem("globalSettings",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("globalSettings");e?await this.importData(e):(this.envSetting.workDir===""&&(this.envSetting.workDir="E:\\playground"),this.envSetting.screenshotSavePath&&(this.envSetting.screenshotSavePath="E:\\playground\\screenshot.png",this.envSetting._screenshotDir="E:\\playground")),this.isInited=!0}}}),ml=S([]),gl=S(""),fl=S(""),yl=S(""),C=()=>({notAllowedFnId:ml,currentScriptDir:gl,runningFnId:fl,currentDevice:yl}),hl=async()=>({width:1920,height:1080}),bl=async()=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),vl=async(e,t,n,a,s,o)=>1,_l=async(e,t,n=-1,a=-1,s=-1,o=-1)=>1,wl=async(e,t,n=0,a=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),xl=async(e,t,n,a,s,o)=>({message:"success",data:[{x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080),width:100,height:100,centerX:50,centerY:50,targetOffsetX:0,targetOffsetY:0}]}),Sl=async(e,t,n,a,s,o=0,r=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),Tl=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080)}),Ml=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),$l=async()=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),kl=async e=>!0,Il=async e=>!0,Pl=async e=>!0,Cl=async e=>!0,Fl=async e=>!0,Al=async(e,t,n="left")=>!0,Ol=async(e,t,n="left")=>!0,Dl=async(e,t,n="left")=>!0,Rl=async(e,t=50,n)=>!0,El=async()=>!0,Vl=async(e,t,n,a,s)=>!0,Ll=async(e,t,n=!1)=>!0,Nl=async e=>!0,jl=async(e,t,n,a,s)=>({code:1,result:[]}),Ul=async(e=0,t=0)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),zl=async(e,t,n)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),Bl=async(e,t=-1,n=-1,a=-1,s=-1)=>!0,ql=async(e,t=!1)=>"//playground环境不支持此功能",Kl=async()=>!0,Gl=async()=>({APP_ID:"playground",API_SECRET:"playground",API_KEY:"playground"});Js("CLOSE_SPLASHSCREEN_FLAG",{defaultValue:!1});const Jl=async()=>{},O={captureOperation:ql,stopCaptureOperation:Kl,getScreenSize:hl,getMousePos:bl,cropPicture:vl,imgSimilarity:_l,matchTemplate:wl,screenDiffTemplates:xl,screenMatchTemplate:Sl,getImgSize:Tl,getImgRectInfo:Ml,getScreenRectInfo:$l,combined:kl,keyDown:Il,keyUp:Pl,pressKey:Cl,inputText:Fl,click:Al,mouseDown:Dl,mouseUp:Ol,startClicker:Rl,stopClicker:El,drag:Vl,move:Ll,wheel:Nl,ocr:jl,screenColor:Ul,screenshot:Bl,imgColor:zl,getSparkInfo:Gl,closeSplashscreen:Jl},Oa=async(e,t,n=-1,a=-1,s=-1,o=-1,r)=>{const{notAllowedFnId:l}=C();if(r&&l.value.includes(r))return-2;try{return await O.imgSimilarity(e,t,n,a,s,o)}catch(i){return console.error(i),-1}},Ne=async(e,t)=>{const n={x:e,y:t};if(window[P]?.Mouse?.__NS_DATA__){const a=window[P].Mouse.__NS_DATA__?.baseSize,s=window[P].Mouse.__NS_DATA__?.randomOffset,{width:o,height:r}=await O.getScreenSize();if(a!==void 0&&(n.x=Math.round(n.x*a[0]/o),n.y=Math.round(n.y*a[1]/r)),s!==void 0){const[l,i]=s[0];l===0&&i===0||(n.x+=Math.round(l+Math.random()*(i-l)));const[u,f]=s[1];u===0&&f===0||(n.y+=Math.round(u+Math.random()*(f-u)))}}return n},Pt=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await Ne(e,t);return await O.click(o.x,o.y,n)}catch(o){return console.error("clickFnError:",o),!1}},Ct=async(e,t,n)=>"touch ok";class tn{x;y;constructor(t,n){this.x=t,this.y=n}async click(){await Pt(this.x,this.y)}async touch(){return await Ct(this.x,this.y)}}const Da=async(e,t,n=0,a=0,s)=>{const{notAllowedFnId:o}=C();if(!(s&&o.value.includes(s)))try{const{x:r,y:l}=await O.matchTemplate(e,t,n,a);return new tn(r,l)}catch(r){console.error("matchTemplateFnError:",r)}},Ra={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="matchTemplate"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[r]?.value||""));break;case 2:case 3:o.componentType==="slider"&&(o.value=+n[r]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.imgPath)},${m.replaceConstantPath(e.tempPath)},${e.exactValue},${e.scale}`)}},Wl=async(e,t)=>{if(e.replaceCurFnArgs){const u=Ra.parameterReplace(e);return m.apiAutoTip(),u}const{imgPath:n,tempPath:a,exactValue:s,scale:o}=e,{showDetails:r}=t;console.time("matchTemplate耗时");const l=await Da(n,a,s,o);console.timeEnd("matchTemplate耗时");const i=_().find(u=>u.name==="matchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.matchTemplate("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}", ${s}, ${o});`,r(JSON.stringify(l),"matchTemplate")},Yl={howToUse:`
      匹配模板图片在原图中的坐标
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则x=-1,y=-1。
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标。
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回x=-1,y=-1。
      `,params:[{name:"imgPath",required:!0,instructions:"待匹配图片路径",type:"string",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`const matchUtil = 
    await CV.matchTemplate('E:\\\\image.png', 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","匹配"],codeSnippet:"const matchUtil = await CV.matchTemplate('${1:imgPath}', '${2:tempPath}', ${3:exactValue}, ${4:scale});"},Xl={title:"图片模板匹配",targetMethodName:"matchTemplate",content:`
      匹配模板图片在原图中的坐标，返回{x,y}，若匹配失败则返回{-1,-1}
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则返回{x:-1,y:-1}
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标，
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回{x:-1,y:-1}。
      `,args:[{name:"imgPath",componentType:"FileInput",value:"",label:"待匹配图片路径"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},Hl=`
class MatchUtil {
    x:number;
    y:number;
    constructor(x: number, y: number);
    public click(): Promise<void>;
    public touch(): Promise<string>;
}
function matchTemplate(
    imgPath: string,
    tempPath: string,
    exactValue?: number,
    scale?:number
):Promise<MatchUtil | undefined>;
`,Zl={name:"matchTemplate",scope:"CV",exportFn:{fn:Da},testModule:{weight:5,dialog:Xl,callback:Wl,document:Yl},declaration:Hl,auxiliary:Ra,helperClass:[tn]},nn=Object.freeze(Object.defineProperty({__proto__:null,matchTemplateApi:Zl},Symbol.toStringTag,{value:"Module"})),Ea=async(e,t,n,a,s,o,r)=>{const{notAllowedFnId:l}=C();if(!(r&&l.value.includes(r)))try{return await O.screenDiffTemplates(e,t,n,a,s.join("|"),o)}catch(i){console.error("screenDiffTemplatesFnError:",i)}},Va={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenDiffTemplates"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:let l=o;l.value.x=+n[0]?.value||0,l.value.y=+n[1]?.value||0,l.value.width=+n[2]?.value||0,l.value.height=+n[3]?.value||0;break;case 1:let i=o;i.value=n[4]?.value?.map(u=>m.pathStrReset(u));break;case 2:o.value=+n[5]?.value||0;break;case 3:o.value=n[6]?.value?(n[6]?.value).toUpperCase():"auto";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, [${e.tempPaths.map(t=>`"${m.pathStrProcess(t)}"`).join(",")}], ${e.targetIndex}`)}},Ql=async(e,t)=>{if(e.replaceCurFnArgs){const i=Va.parameterReplace(e);return m.apiAutoTip(),i}const{range:n,tempPaths:a,targetIndex:s}=e,{showDetails:o}=t;console.time("screenDiffTemplates耗时");const r=await Ea(n.x,n.y,n.width,n.height,a,s||0);console.timeEnd("screenDiffTemplates耗时");const l=_().find(i=>i.name==="screenDiffTemplates"&&i.scope==="CV")?.testModule;l.document.example.code=`const res = await CV.screenDiffTemplates(${JSON.stringify(n)}, ["${a.join('","').replace(/\\/g,"\\\\")}"], ${s});`,o(JSON.stringify(r),"screenDiffTemplates")},ei={howToUse:"将屏幕指定范围进行截图与多模板图片进行位置差异对比",params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPaths",required:!0,instructions:"模板图片路径",type:"string[]",default:""},{name:"targetIndex",required:!1,instructions:"主模板图片索引, 其余模板会携带与主模板的位置差异",type:"number",default:"0"}],returnValue:{type:`Promise<{
  x:number;
  y:number;
  width:number;
  height:number;
  centerX:number;
  centerY:number;
  targetOffsetX:number;
  targetOffsetY:number;
 }[] | undefined>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//多模板与主模板的位置差异匹配
const res = await CV.screenDiffTemplates(0, 0, 100, 100, ['E:\\\\template1.png','E:\\\\template2.png'], 0);`},searchKeys:["模板","图片","位置","中心坐标"],codeSnippet:"const res = await CV.screenDiffTemplates(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPaths}', ${6:targetIndex});"},ti={title:"屏幕中多模板的位置差异匹配",targetMethodName:"screenDiffTemplates",content:`
      将屏幕指定范围进行截图与多模板图片进行位置差异对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPaths",componentType:"FileInput",multiple:!0,value:[],label:"模板图片路径"},{name:"targetIndex",componentType:"numberInput",value:0,label:"主模板图片索引, 其余模板会携带与主模板的位置差异"}]},ni=`
function screenDiffTemplates(
    x:number,
    y:number,
    width: number,
    height: number,
    tempPaths: string[],
    targetIndex?: number
):Promise<{
    x:number;
    y:number;
    width:number;
    height:number;
    centerX:number;
    centerY:number;
    targetOffsetX:number;
    targetOffsetY:number;
}[] | undefined>;`,ai={name:"screenDiffTemplates",scope:"CV",exportFn:{fn:Ea},testModule:{weight:5,dialog:ti,callback:Ql,document:ei},declaration:ni,auxiliary:Va},an=Object.freeze(Object.defineProperty({__proto__:null,screenDiffTemplatesApi:ai},Symbol.toStringTag,{value:"Module"})),La=async(e,t,n,a,s,o=0,r=0,l)=>{const{notAllowedFnId:i}=C();if(!(l&&i.value.includes(l)))try{const{x:u,y:f}=await O.screenMatchTemplate(e,t,n,a,s,o,r);return new tn(u,f)}catch(u){console.error("screenMatchTemplateFnError:",u)}},Na={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenMatchTemplate"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.componentType==="RectInput"&&(o.value.x=+n[0]?.value||0,o.value.y=+n[1]?.value||0,o.value.width=+n[2]?.value||0,o.value.height=+n[3]?.value||0);break;case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[4]?.value||""));break;case 2:case 3:o.componentType==="slider"&&(o.value=+n[r+3]?.value||0);break;case 4:o.componentType==="select"&&(o.value=n[7]?.value?n[7]?.value?.toUpperCase():"auto");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, ${m.replaceConstantPath(e.tempPath)}, ${e.exactValue}, ${e.scale}`)}},oi=async(e,t)=>{if(e.replaceCurFnArgs){const u=Na.parameterReplace(e);return m.apiAutoTip(),u}const{range:n,tempPath:a,exactValue:s,scale:o}=e,{showDetails:r}=t;console.time("screenMatchTemplate耗时");const l=await La(n.x,n.y,n.width,n.height,a,s,o);console.timeEnd("screenMatchTemplate耗时");const i=_().find(u=>u.name==="screenMatchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.screenMatchTemplate(${JSON.stringify(n)}, "${a.replace(/\\/g,"\\\\")}", ${s}, ${o});`,r(JSON.stringify(l),"screenMatchTemplate")},si={howToUse:`
      将屏幕指定范围进行截图与模板图片对比
      `,params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`
const res = await CV.screenMatchTemplate(0, 0, 100, 100, 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","截图"],codeSnippet:"const res = await CV.screenMatchTemplate(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPath}', ${6:exactValue}, ${7:scale});"},ri={title:"屏幕模板匹配",targetMethodName:"screenMatchTemplate",content:`
      将屏幕指定范围进行截图与模板图片对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},li=`
function screenMatchTemplate(
    x:number,
    y:number,
    width:number,
    height:number,
    tempPath: string,
    exactValue?:number,
    scale?:number
):Promise<
    MatchUtil | undefined
>;
`,ii={name:"screenMatchTemplate",scope:"CV",exportFn:{fn:La},testModule:{weight:5,dialog:ri,callback:oi,document:si},declaration:li,auxiliary:Na},on=Object.freeze(Object.defineProperty({__proto__:null,screenMatchTemplateApi:ii},Symbol.toStringTag,{value:"Module"})),ci={howToUse:"读取文件夹内的文件",params:[{name:"path",required:!0,instructions:"文件夹的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件描述对象，fileName为文件或文件夹名称，fileType为文件或者文件夹",type:'Promise<{fileName: string;fileType: "file" | "dir";}[]>'},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const files = await readDir("E://exampleDir");'},searchKeys:["read","fs","dir"],codeSnippet:"${1:const res = }await readDir(${2:'path'});${0:}"},ja=async(e,t)=>[],Ua={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="readDir"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break}})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},ui=async(e,t)=>{if(e.replaceCurFnArgs){Ua.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("readDir耗时");const a=await ja();console.timeEnd("readDir耗时");const s=_().find(o=>o.name==="readDir"&&o.scope==="FS")?.testModule;s.document.example.code=`const files = await readDir("${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(a),"FS.readDir")},di={title:"读取文件夹",targetMethodName:"readDir",content:"获取文件夹的所有子文件或子文件夹",args:[{componentType:"DirInput",value:"",suffix:"",verifyPath:!1,desc:"文件夹选择",id:"YS1ux1d9_8FelG1KPOsCn",onlyTest:!1,noTest:!1,name:"path",label:"文件夹路径",displayCondition:[],placeholder:"请输入文件夹路径"}]},pi=`function readDir(
  path: string,
): Promise<{fileName: string;fileType: "file" | "dir";}[]>;
`,mi={scope:"FS",name:"readDir",exportFn:{fn:ja},testModule:{weight:5,dialog:di,callback:ui,document:ci},declaration:pi,auxiliary:Ua},sn=Object.freeze(Object.defineProperty({__proto__:null,readDirApi:mi},Symbol.toStringTag,{value:"Module"})),gi={howToUse:"读取文件内容",params:[{name:"path",required:!0,instructions:"文件的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件的内容",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const content = await readFile("E://example.txt");'},searchKeys:["fs","read","file"],codeSnippet:"${1:const res = }await readFile(${2:'path'});${0:}"},za=async(e,t)=>"",Ba={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="readFile"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{r===0&&(o.value=m.pathStrReset(n[r]?.value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},fi=async(e,t)=>{if(e.replaceCurFnArgs){Ba.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("readFile耗时");const a=await za();console.timeEnd("readFile耗时");const s=_().find(o=>o.name==="readFile"&&o.scope==="FS")?.testModule;s.document.example.code=`const content = await readFile("${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(a),"FS.readFile")},yi={title:"读取文件内容",targetMethodName:"readFile",content:"读取指定路径的文件内容",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"BZSXGSadzZcAtUZm6ePro",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请选择需要读取内容的文件所在路径",multiple:!1}]},hi=`function readFile(
  path: string,
): Promise<string>;
`,bi={scope:"FS",name:"readFile",exportFn:{fn:za},testModule:{weight:5,dialog:yi,callback:fi,document:gi},declaration:hi,auxiliary:Ba},rn=Object.freeze(Object.defineProperty({__proto__:null,readFileApi:bi},Symbol.toStringTag,{value:"Module"})),vi={howToUse:"将旧路径的文件或文件夹移动到新路径,如果移动的是文件并且新路径已存在则会覆盖",params:[{name:"oldPath",required:!0,instructions:"旧文件(夹)路径",type:"string",default:"",children:[]},{name:"newPath",required:!0,instructions:"新文件(夹)路径",type:"string",default:"",children:[]}],returnValue:{instructions:"是否移动成功",type:"Promise<boolean>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await rename("E://example","E://example1")'},searchKeys:["rename","move","file","dir","fs"],codeSnippet:"${1:const res = }await rename(${2:'oldPath'}, ${3:'newPath'});${0:}"},qa=async(e,t,n)=>!1,Ka={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="rename"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.oldPath)},${m.replaceConstantPath(e.newPath)}`)}},_i=async(e,t)=>{if(e.replaceCurFnArgs){Ka.parameterReplace(e),m.apiAutoTip();return}const{oldPath:n,newPath:a}=e;console.time("rename耗时");const s=await qa();console.timeEnd("rename耗时");const o=_().find(r=>r.name==="rename"&&r.scope==="FS")?.testModule;o.document.example.code=`const res = await rename("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}")`,t.showDetails(JSON.stringify(s),"FS.rename")},wi={title:"路径重命名(移动)",targetMethodName:"rename",content:"将旧路径的文件或文件夹移动到新路径,如果移动的是文件并且新路径已存在则会覆盖",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"n7CsMnN70dq5zh6L4GpEi",onlyTest:!1,noTest:!1,name:"oldPath",label:"旧路径",displayCondition:[],placeholder:"请输入旧文件或文件夹的路径",multiple:!1},{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"YYDoHvWJi76EF9UUJ80MH",onlyTest:!1,noTest:!1,name:"newPath",label:"新路径",displayCondition:[],placeholder:"请输入新文件或新文件夹的路径",multiple:!1}]},xi=`function rename(
  oldPath: string,
  newPath: string,
): Promise<boolean>;
`,Si={scope:"FS",name:"rename",exportFn:{fn:qa},testModule:{weight:5,dialog:wi,callback:_i,document:vi},declaration:xi,auxiliary:Ka},ln=Object.freeze(Object.defineProperty({__proto__:null,renameApi:Si},Symbol.toStringTag,{value:"Module"})),Ti={howToUse:"将文本写入文件",params:[{name:"path",required:!0,instructions:"目标文件的绝对路径",type:"string",default:"",children:[]},{name:"content",required:!0,instructions:"文本内容",type:"string",default:"",children:[]}],returnValue:{instructions:"是否写入成功",type:"Promise<boolean>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await writeFile("E://example.txt", "示例文本");'},searchKeys:["write","fs","file"],codeSnippet:"${1:const res = }await writeFile(${2:'path'}, ${3:'content'});${0:}"},Ga=async(e,t,n)=>(console.error("writeFileFnError: ","writeFileFn is not allowed in playground"),!1),Ja={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="writeFile"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break;case 1:o.value=n[r]?.value;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, "${e.content}"`)}},Mi=async(e,t)=>{if(e.replaceCurFnArgs){Ja.parameterReplace(e),m.apiAutoTip();return}const{path:n,content:a}=e;console.time("writeFile耗时");const s=await Ga();console.timeEnd("writeFile耗时");const o=_().find(r=>r.name==="writeFile"&&r.scope==="FS")?.testModule;o.document.example.code=`const res = await writeFile("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(s),"FS.writeFile")},$i={title:"写入文件",targetMethodName:"writeFile",content:"将文本写入文件",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"Zo8IIjWeA8CmiSbEohXVf",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请输入文件路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"f8BMJ7N3b4yLqZdaMxf3z",onlyTest:!1,noTest:!1,name:"content",label:"内容",displayCondition:[],placeholder:"请输入需要写入文件的内容"}]},ki=`function writeFile(
  path: string,
  content: string,
): Promise<boolean>;
`,Ii={scope:"FS",name:"writeFile",exportFn:{fn:Ga},testModule:{weight:5,dialog:$i,callback:Mi,document:Ti},declaration:ki,auxiliary:Ja},cn=Object.freeze(Object.defineProperty({__proto__:null,writeFileApi:Ii},Symbol.toStringTag,{value:"Module"})),Pi=async(e=1e3)=>{const t=parseInt(""+e/1e3),n=e%1e3;if(t===0)return new Promise(a=>{const s=setTimeout(()=>{clearTimeout(s),a()},e)});{let a=!1;for(let s=0;s<t;s++)if(await new Promise(o=>{const r=setTimeout(()=>{clearTimeout(r),o()},1e3)}),window[P]&&window[P]?.isStop){a=!0;break}if(!a)return new Promise(s=>{const o=setTimeout(()=>{clearTimeout(o),s()},n)})}},ht={sleep:Pi},Ci=(e,t)=>{const{notAllowedFnId:n}=C();return t&&n.value.includes(t)?!1:ht.sleep(e)},Fi=async(e,t,n)=>{{console.error("playground环境下无法使用：listen");return}},Ai={howToUse:"监听快捷键触发，触发后调用回调函数。",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""},{name:"handler",required:!0,instructions:"快捷键触发后的回调函数，参数key为触发的快捷键",type:"ShortcutHandler",default:""}],returnValue:{instructions:"返回一个函数，调用该函数可以取消监听",type:"Promise<(() => Promise<void>) | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const unlisten = await GlobalShortcut.listen(["Alt+S","Alt+R"],(event)=>{console.log(event);});//监听快捷键
//取消监听
if(unlisten){
  await unlisten();
}`},searchKeys:["unlisten","listen","触发","快捷键"],codeSnippet:"const unlisten = await GlobalShortcut.listen(['${1:shortcut}'],(event)=>{${2:}});"},Oi=`
type ShortcutEvent = {
  shortcut: string;
  id: number;
  state: 'Released' | 'Pressed';
}
type ShortcutHandler = (event: ShortcutEvent) => void;
function listen(
  shortcuts: string | string[],
  handler: ShortcutHandler,
):Promise<(() => Promise<void>) | undefined>;
`,Di={name:"listen",scope:"GlobalShortcut",exportFn:{fn:Fi},testModule:{weight:4,dialog:{notOpen:!0,title:"监听快捷键触发",targetMethodName:"listen"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.listen")},document:Ai},declaration:Oi},un=Object.freeze(Object.defineProperty({__proto__:null,listenApi:Di},Symbol.toStringTag,{value:"Module"})),Ri=async(e,t)=>{{console.error("playground环境下无法使用：unlisten");return}},Ei={howToUse:"取消监听快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"需要取消监听的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""}],returnValue:{instructions:"",type:"Promise<void>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//取消监听多个快捷键
await GlobalShortcut.unlisten(["Alt+S","Alt+R"]);
//取消监听单个快捷键
await GlobalShortcut.unlisten("Alt+S");
`},searchKeys:["unlisten","取消监听","快捷键"],codeSnippet:"await GlobalShortcut.unlisten(['${1:shortcuts}']);"},Vi=`
function unlisten(shortcuts: string | string[]): Promise<void>;
`,Li={name:"unlisten",scope:"GlobalShortcut",exportFn:{fn:Ri},testModule:{weight:4,dialog:{notOpen:!0,title:"取消监听快捷键触发",targetMethodName:"unlisten"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.unlisten")},document:Ei},declaration:Vi},dn=Object.freeze(Object.defineProperty({__proto__:null,unlistenApi:Li},Symbol.toStringTag,{value:"Module"})),Wa=async(e,t)=>{{console.error("playground环境下无法使用：waitShortcuts");return}},Ya={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="waitShortcuts"&&o.scope==="GlobalShortcut").testModule.dialog;s.args&&s.args[0]&&n.length&&(n[0].type==="string[]"?s.args[0].value=n[0].value.map(o=>o.replace(/[\[\]]/g,"")):s.args[0].value=[n[0].value.replace(/[\[\]]/g,"")])},parameterReplace:e=>{if(typeof e.shortcuts=="string"||e.shortcuts.length===1){const t=typeof e.shortcuts=="string"?e.shortcuts:e.shortcuts[0];e.replaceCurFnArgs(`"${t}"`);return}e.replaceCurFnArgs(`[${e.shortcuts.map(t=>`"${t}"`).join(", ")}]`)}},Ni=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ya.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("waitShortcuts耗时");const n=await Wa(e.shortcuts);console.timeEnd("waitShortcuts耗时"),t.showDetails(JSON.stringify(n),"waitShortcuts");const a=_().find(s=>s.name==="waitShortcuts"&&s.scope==="GlobalShortcut")?.testModule;a.document.example.code=`await Input.waitShortcuts([${e.shortcuts.map(s=>`"${s}"`).join(", ")}]);`},ji={howToUse:"全局等待快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+R']",type:"string | string[]",default:""}],returnValue:{type:"Promise<string | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const shortcut = await GlobalShortcut.waitKeys(["Alt+S","Alt+R"]);
//按下Alt+S之后shortcut为"Alt+S"，按下Alt+R之后shortcut为"Alt+R"`},searchKeys:["wait","等待","按下","触发"],codeSnippet:"const shortcut = await GlobalShortcut.waitShortcuts(['${1:shortcut}']);"},Ui={title:"等待快捷键触发",targetMethodName:"waitShortcuts",content:"等待快捷键触发, 返回触发的快捷键名称, 若快捷键冲突则返回undefined",args:[{name:"shortcuts",componentType:"select",value:[],label:"等待触发的按键(可多选创建)",options:["Alt+S","Alt+E"],multiple:!0},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},zi=`
function waitShortcuts(shortcuts: string | string[]): Promise<string | undefined>;
`,Bi={name:"waitShortcuts",scope:"GlobalShortcut",exportFn:{fn:Wa},testModule:{weight:4,dialog:Ui,callback:Ni,document:ji},declaration:zi,auxiliary:Ya},pn=Object.freeze(Object.defineProperty({__proto__:null,waitShortcutsApi:Bi},Symbol.toStringTag,{value:"Module"})),Xa=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.combined(e)}catch(a){return console.error("combinedFnError:",a),!1}},Ha={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="combined"&&o.scope==="Input").testModule.dialog.args.forEach((o,r)=>{r===0&&(o.value=n.map(l=>l.value.replace("[","").replace("]","")))})},parameterReplace:e=>{e.replaceCurFnArgs(`[${e.keys.map(t=>`"${t}"`).join(",")}]`)}},qi=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ha.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("combined耗时");const n=await Xa(e.keys);console.timeEnd("combined耗时"),t.showDetails(JSON.stringify(n),"combined");const a=_().find(s=>s.name==="combined"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.combined([${e.keys.map(s=>`'${s}'`).join(",")}]);`},Ki={howToUse:"组合键",params:[{name:"keys",required:!0,instructions:"按下的组合键",type:"Key[]",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.combined("A");`},searchKeys:["combined","key","组合键","按键"],codeSnippet:"await Input.combined(['${1:key}', '${2:key}']);"},Qe=["0) 数字键0:Num0","1! 数字键1:Num1","2@ 数字键2:Num2","3# 数字键3:Num3","4$ 数字键4:Num4","5% 数字键5:Num5","6^ 数字键6:Num6","7& 数字键7:Num7","8* 数字键8:Num8","9( 数字键9:Num9","[小键盘]数字键0:Numpad0","[小键盘]数字键1:Numpad1","[小键盘]数字键2:Numpad2","[小键盘]数字键3:Numpad3","[小键盘]数字键4:Numpad4","[小键盘]数字键5:Numpad5","[小键盘]数字键6:Numpad6","[小键盘]数字键7:Numpad7","[小键盘]数字键8:Numpad8","[小键盘]数字键9:Numpad9","字母键A:A","字母键B:B","字母键C:C","字母键D:D","字母键E:E","字母键F:F","字母键G:G","字母键H:H","字母键I:I","字母键J:J","字母键K:K","字母键L:L","字母键M:M","字母键N:N","字母键O:O","字母键P:P","字母键Q:Q","字母键R:R","字母键S:S","字母键T:T","字母键U:U","字母键V:V","字母键W:W","字母键X:X","字母键Y:Y","字母键Z:Z","F1键:F1","F2键:F2","F3键:F3","F4键:F4","F5键:F5","F6键:F6","F7键:F7","F8键:F8","F9键:F9","F10键:F10","F11键:F11","F12键:F12","←Backspace退格键:Backspace","Tab制表键:Tab","Return回车键:Return","↑Shift键(左):LShift","↑Shift键(右):RShift","Ctrl键:Control","Alt键:Alt","Pause键:Pause","CapsLock大写锁定键:CapsLock","Esc键:Escape","空格键:Space","Page Up键:PageUp","Page Down键:PageDown","End键:End","Home键:Home","←左箭头键:LeftArrow","↑上箭头键:UpArrow","→右箭头键:RightArrow","↓下箭头键:DownArrow","Insert键:Insert","Delete删除键:Delete","Windows键:Windows","ContextMenu右键菜单键:ContextMenu","NumLock数字锁定键:NumLock","ScrollLock滚动锁定键:ScrollLock","; ：分号冒号键:OEM1","/ ? 斜杠问号键:OEM2","` ~ 反引号波浪号键:OEM3","[ { 左(中括号花括号键):OEM4","\\ | 反斜杠竖线键:OEM5","] } 右(中括号花括号键):OEM6",`' " 单引号双引号键:OEM7`,"= + 等于加号键:OEMPlus",", < 逗号小于号键:OEMComma",". > 句号大于号键:OEMPeriod","/ 斜杠键:Divide","* 乘号键:Multiply",". 小数点Del键:Decimal","+ 加号键:Add","- 减号键:Subtract","- _减号下划线键:OEMMinus"],Gi={title:"按下组合键",targetMethodName:"combined",content:"先顺序依次按下按键，再逆序依次松开按键",args:[{name:"keys",componentType:"select",value:[],multiple:!0,notAllowCreate:!0,label:"键盘按键",options:Qe,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Ji=`
function combined(
  keys:Key[]
):Promise<boolean>;
`,Wi={name:"combined",scope:"Input",exportFn:{fn:Xa},testModule:{weight:4,dialog:Gi,callback:qi,document:Ki},declaration:Ji,auxiliary:Ha},mn=Object.freeze(Object.defineProperty({__proto__:null,combinedApi:Wi},Symbol.toStringTag,{value:"Module"})),Za=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.keyDown(e)}catch(a){return console.error("keyDownFnError:",a),!1}},Qa={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="keyDown"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},Yi=async(e,t)=>{if(e.replaceCurFnArgs){const s=Qa.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("keyDown耗时");const n=await Za(e.key);console.timeEnd("keyDown耗时"),t.showDetails(JSON.stringify(n),"keyDown");const a=_().find(s=>s.name==="keyDown"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.keyDown('${e.key}');`},Xi={howToUse:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyDown方法抬起按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyDown("A");
      `},searchKeys:["按下","输入","key","按键"],codeSnippet:"await Input.keyDown('${1:key}');"},Hi={title:"按下按键",targetMethodName:"keyDown",content:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyUp方法抬起按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要按下的按键",options:Qe,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Zi=`
function keyDown(
  key:Key
):Promise<boolean>;
`,Qi={name:"keyDown",scope:"Input",exportFn:{fn:Za},testModule:{weight:4,dialog:Hi,callback:Yi,document:Xi},declaration:Zi,auxiliary:Qa},gn=Object.freeze(Object.defineProperty({__proto__:null,keyDownApi:Qi},Symbol.toStringTag,{value:"Module"})),eo=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.keyUp(e)}catch(a){return console.error("keyUpFnError:",a),!1}},to={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="keyUp"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},ec=async(e,t)=>{if(e.replaceCurFnArgs){const s=to.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("keyUp耗时");const n=await eo(e.key);console.timeEnd("keyUp耗时"),t.showDetails(JSON.stringify(n),"keyUp");const a=_().find(s=>s.name==="keyUp"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.keyUp('${e.key}');`},tc={howToUse:"主动抬起指定按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyUp("A");`},searchKeys:["抬起","输入","key","按键"],codeSnippet:"await Input.keyUp('${1:key}');"},nc={title:"抬起按键",targetMethodName:"keyUp",content:"主动抬起指定按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要抬起的按键",options:Qe,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ac=`
function keyUp(
  key:Key
):Promise<boolean>;
`,oc={name:"keyUp",scope:"Input",exportFn:{fn:eo},testModule:{weight:4,dialog:nc,callback:ec,document:tc},declaration:ac,auxiliary:to},fn=Object.freeze(Object.defineProperty({__proto__:null,keyUpApi:oc},Symbol.toStringTag,{value:"Module"})),no=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.pressKey(e)}catch(a){return console.error("pressFnError:",a),!1}},ao={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="press"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},sc=async(e,t)=>{if(e.replaceCurFnArgs){const s=ao.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("press耗时");const n=await no(e.key);console.timeEnd("press耗时"),t.showDetails(JSON.stringify(n),"press");const a=_().find(s=>s.name==="press"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.press('${e.key}');`},rc={howToUse:"按下按键后松开",params:[{name:"key",required:!0,instructions:"按下的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.press("A");`},searchKeys:["key","按键","按下","松开"],codeSnippet:"await Input.press('${1:key}');"},lc={title:"按下按键",targetMethodName:"press",content:"按下按键后松开",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"按下的按键",options:Qe,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ic=`
function press(
  key:Key
):Promise<boolean>;
`,cc={name:"press",scope:"Input",exportFn:{fn:no},testModule:{weight:4,dialog:lc,callback:sc,document:rc},declaration:ic,auxiliary:ao},yn=Object.freeze(Object.defineProperty({__proto__:null,pressApi:cc},Symbol.toStringTag,{value:"Module"})),oo=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.inputText(e)}catch(a){return console.error("textFnError:",a),!1}},so={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="text"&&o.scope==="Input").testModule.dialog.args.forEach((o,r)=>{r===0&&(o.value=n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.text}'`)}},uc=async(e,t)=>{if(e.replaceCurFnArgs){const s=so.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("text耗时");const n=await oo(e.text);console.timeEnd("text耗时"),t.showDetails(JSON.stringify(n),"text");const a=_().find(s=>s.name==="text"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.text('${e.text}');`},dc={howToUse:"输入字符串",params:[{name:"text",required:!0,instructions:"需要输入的内容",type:"string",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//输入"abc"
await Input.text("abc");`},searchKeys:["text","输入","input","文本"],codeSnippet:"await Input.text('${1:text}');"},pc={title:"输入字符串",targetMethodName:"text",content:"输入一串指定字符串",args:[{name:"text",componentType:"input",value:"",label:"输入的内容"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},mc=`
function text(
  text:string
):Promise<{
  code: number;
  message: string;
}>;
`,gc={name:"text",scope:"Input",exportFn:{fn:oo},testModule:{weight:4,dialog:pc,callback:uc,document:dc},declaration:mc,auxiliary:so},hn=Object.freeze(Object.defineProperty({__proto__:null,textApi:gc},Symbol.toStringTag,{value:"Module"})),ro={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="click"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},fc=async(e,t)=>{if(e.replaceCurFnArgs){const a=ro.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("click耗时"),await Pt(e.x,e.y,e.button),console.timeEnd("click耗时"),t.showDetails("点击完成","click");const n=_().find(a=>a.name==="click"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.click(${e.x}, ${e.y}, '${e.button||"left"}');`},yc={howToUse:"鼠标移动到指定位置进行[左键/中键/右键]点击,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"点击的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并点击(左键)
await Mouse.click(100,100);
//鼠标移动到(100,100)并点击(右键)
await Mouse.click(100,100,"right");
//鼠标移动到(100,100)并点击(中键)
await Mouse.click(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","点击","移动"],codeSnippet:"await Mouse.click(${1:x}, ${2:y});"},hc={title:"鼠标点击",targetMethodName:"click",content:"鼠标移动到指定位置进行[左键/右键/中键]点击,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},bc=`
function click(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,vc={name:"click",scope:"Mouse",exportFn:{fn:Pt},testModule:{weight:4,dialog:hc,callback:fc,document:yc},declaration:bc,auxiliary:ro},bn=Object.freeze(Object.defineProperty({__proto__:null,clickApi:vc},Symbol.toStringTag,{value:"Module"})),ot=async()=>!1,lo=async(e,t=50,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return ot;try{e<0&&(e=0),t<0&&(t=0);const r=["left","middle","right"].indexOf(n);return r===-1?(oe.error("暂不支持的鼠标按键类型"+n),ot):await O.startClicker(e,t,r)?async()=>await O.stopClicker():ot}catch(o){console.error("clickFnError:",o),oe.error("clickFnError:"+o)}return ot},io={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="clicker"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{r!==2?o.value=+n[r]?.value||0:o.componentType==="select"&&(o.value=n[r]?.value||"left")})},parameterReplace:e=>{e.button==="left"?e.replaceCurFnArgs(`${e.duration}, ${e.sleep}`):e.replaceCurFnArgs(`${e.duration}, ${e.sleep}, '${e.button}'`)}},_c=async(e,t)=>{if(e.replaceCurFnArgs){const a=io.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("clicker耗时"),await lo(e.duration,e.sleep,e.button),console.timeEnd("clicker耗时"),t.showDetails("点击完成","clicker");const n=_().find(a=>a.name==="clicker"&&a.scope==="Mouse")?.testModule;e.button==="left"?n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep});`:n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep}, '${e.button}');`},wc={howToUse:"鼠标左键进行连续点击一段时间",params:[{name:"duration",required:!0,instructions:"连续点击时间(s)",type:"number",default:""},{name:"sleep",required:!1,instructions:"点击间隔时间(ms)",type:"number",default:"50"},{name:"button",required:!1,instructions:"鼠标按键",type:["'left'","'right'","'middle'"],default:"'left'"}],returnValue:{instructions:"返回一个停止点击器的函数，调用此函数可停止连续点击。",type:"Promise<() => Promise<void>>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)
await Mouse.move(100,100);
//调用点击器，连续点击鼠标右键5s，点击间隔10ms
const stop = await Mouse.clicker(5,10, 'right');
//3s后停止点击
await sleep(3000);
await stop();
      `},searchKeys:["鼠标","mouse","左键","连续","点击"],codeSnippet:"await Mouse.clicker(${1:duration}, ${2:sleep});"},xc={title:"鼠标点击器",targetMethodName:"clicker",content:"鼠标左键进行连续点击一段时间",args:[{name:"duration",componentType:"numberInput",value:1,label:"连续点击时间(s)"},{name:"sleep",componentType:"numberInput",value:50,label:"点击间隔时间(ms)"},{name:"button",componentType:"select",value:"left",label:"鼠标按键",options:["left","middle","right"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Sc=`
function clicker(
  duration: number,
  sleep?: number,
  button?: 'left' | 'right' | 'middle',
):Promise<() => Promise<boolean>>;
`,Tc={name:"clicker",scope:"Mouse",exportFn:{fn:lo},testModule:{weight:4,dialog:xc,callback:_c,document:wc},declaration:Sc,auxiliary:io},vn=Object.freeze(Object.defineProperty({__proto__:null,clickerApi:Tc},Symbol.toStringTag,{value:"Module"})),co=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await Ne(e,t);return await O.mouseDown(o.x,o.y,n)}catch(o){return console.error("clickFnError:",o),!1}},uo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="down"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},Mc=async(e,t)=>{if(e.replaceCurFnArgs){const a=uo.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("down耗时"),await co(e.x,e.y,e.button),console.timeEnd("down耗时"),t.showDetails("鼠标按键按下完成","down");const n=_().find(a=>a.name==="down"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.down(${e.x}, ${e.y}, '${e.button||"left"}');`},$c={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会主动抬起）,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"需要按下的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并按下(左键)
await Mouse.down(100,100);
//鼠标移动到(100,100)并按下(右键)
await Mouse.down(100,100,"right");
//鼠标移动到(100,100)并按下(中键)
await Mouse.down(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","按下","移动"],codeSnippet:"await Mouse.down(${1:x}, ${2:y});"},kc={title:"鼠标按键按下",targetMethodName:"down",content:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会自动抬起）,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Ic=`
function down(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,Pc={name:"down",scope:"Mouse",exportFn:{fn:co},testModule:{weight:4,dialog:kc,callback:Mc,document:$c},declaration:Ic,auxiliary:uo},_n=Object.freeze(Object.defineProperty({__proto__:null,downApi:Pc},Symbol.toStringTag,{value:"Module"})),po=async(e,t,n,a,s,o)=>{const{notAllowedFnId:r}=C();if(o&&r.value.includes(o))return!1;if(n<0||a<0)return console.error("只有起点坐标可以使用负数代表鼠标当前位置"),!1;try{const l=e<0||t<0?{x:-1,y:-1}:await Ne(e,t),i=await Ne(n,a);return await O.drag(l.x,l.y,i.x,i.y,s)}catch(l){return console.error("dragFnError:",l),!1}},mo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="drag"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.duration&&e.duration>0){e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration}`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}`)}},Cc=async(e,t)=>{if(e.replaceCurFnArgs)mo.parameterReplace(e);else{e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("drag耗时");const n=await po(e.x,e.y,e.toX,e.toY,e.duration);console.timeEnd("drag耗时"),t.showDetails("鼠标拖动完成","Mouse.drag");const a=_().find(s=>s.name==="drag"&&s.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.duration>0?a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration});`:a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY});`}},Fc={howToUse:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"目标x坐标(>=0)",type:"number",default:""},{name:"toY",required:!0,instructions:"目标y坐标(>=0)",type:"number",default:""},{name:"duration",required:!1,instructions:"拖动时间",type:"number",default:"0"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//从当前鼠标位置拖动到100,100
await Mouse.drag(-1, -1, 100, 100);
//从当前鼠标位置使用500ms拖动到100,100
await Mouse.drag(-1, -1, 100, 100, 500);
    `},searchKeys:["鼠标","mouse","拖动","模拟"],codeSnippet:"await Mouse.drag(${1:x}, ${2:y}, ${3:toX}, ${4:toY});"},Ac={title:"拖动鼠标到指定位置",targetMethodName:"drag",content:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"toX",componentType:"numberInput",value:0,label:"目标x坐标(>=0)"},{name:"toY",componentType:"numberInput",value:0,label:"目标y坐标(>=0)"},{name:"duration",componentType:"numberInput",value:0,label:"拖动时间(ms)"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Oc=`
function drag(
    x: number,
    y: number,
    toX: number,
    toY: number,
    duration?: number,
):Promise<boolean>;
`,Dc={name:"drag",scope:"Mouse",exportFn:{fn:po},testModule:{weight:4,dialog:Ac,callback:Cc,document:Fc},declaration:Oc,auxiliary:mo},wn=Object.freeze(Object.defineProperty({__proto__:null,dragApi:Dc},Symbol.toStringTag,{value:"Module"})),go=async(e,t,n=!1,a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await Ne(e,t);return await O.move(o.x,o.y,n)}catch(o){return console.error("moveFnError:",o),!1}},fo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="move"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{r===2?o.value=n[r].value||!1:o.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.isRelative){e.replaceCurFnArgs(`${e.x}, ${e.y}, true`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}`)}},Rc=async(e,t)=>{if(e.replaceCurFnArgs)fo.parameterReplace(e);else{e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("move耗时");const n=await go(e.x,e.y,e.isRelative);console.timeEnd("move耗时"),n!==void 0?t.showDetails("移动鼠标完成","Mouse.move"):t.showDetails("移动鼠标失败","Mouse.move");const a=_().find(s=>s.name==="move"&&s.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.isRelative?a.document.example.code=`await Mouse.move(${e.x}, ${e.y}, true);`:a.document.example.code=`await Mouse.move(${e.x}, ${e.y});`}},Ec={howToUse:"鼠标移动到指定[绝对/相对]坐标,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"isRelative",required:!1,instructions:"相对当前位置移动",type:"boolean",default:"false"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//移动到(100,100)坐标
await Mouse.move(100, 100);
//鼠标往上移动100，往右移动100
await Mouse.move(100, -100, true);
    `},searchKeys:["鼠标","mouse","移动","模拟"],codeSnippet:"await Mouse.move(${1:x}, ${2:y});"},Vc={title:"模拟鼠标移动",targetMethodName:"move",content:"模拟鼠标移动到指定坐标,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"isRelative",componentType:"switch",value:!1,label:"相对当前位置移动",activeText:"相对移动",inactiveText:"绝对移动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Lc=`
function move(
    x: number,
    y:number,
    isRelative?: boolean
):Promise<boolean>;
`,Nc={name:"move",scope:"Mouse",exportFn:{fn:go},testModule:{weight:4,dialog:Vc,callback:Rc,document:Ec},declaration:Lc,auxiliary:fo},xn=Object.freeze(Object.defineProperty({__proto__:null,moveApi:Nc},Symbol.toStringTag,{value:"Module"})),yo=async e=>{const{notAllowedFnId:t}=C();if(e&&t.value.includes(e))return{x:-1,y:-1};try{return await O.getMousePos()}catch(n){return console.error(n),{x:-1,y:-1}}},jc=async(e,t)=>{console.time("Mouse.pos耗时");const{x:n,y:a}=await yo();console.log(n,a),console.timeEnd("Mouse.pos耗时"),t.showDetails(`鼠标位置：${n},${a}`)},Uc={title:"获取鼠标位置",targetMethodName:"pos",notOpen:!0},zc={howToUse:"获取鼠标位置",returnValue:{type:"Promise<{ x: number, y: number }>"},example:{code:"const {x, y} = await Mouse.pos();"},searchKeys:["鼠标","位置","获取"],codeSnippet:"const {x, y} = await Mouse.pos();"},Bc=`
function pos():Promise<{x:number; y:number;}>;
`,qc={name:"pos",scope:"Mouse",exportFn:{fn:yo},testModule:{weight:1,callback:jc,dialog:Uc,document:zc},declaration:Bc},Sn=Object.freeze(Object.defineProperty({__proto__:null,posApi:qc},Symbol.toStringTag,{value:"Module"})),ho=async(e,t,n=[[0,0],[0,0]],a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const[o,r]=n[0],[l,i]=n[1];let u={x:e,y:t};return o===0&&r===0||(u.x+=Math.round(o+Math.random()*(r-o))),l===0&&i===0||(u.y+=Math.round(l+Math.random()*(i-l))),await O.move(e,t)}catch(o){return console.error(o),!1}},Kc={title:"将鼠标移动到指定位置并产生随机偏移",targetMethodName:"randomMove",content:"输入指定位置的x、y坐标，xRandomRange和yRandomRange可以让该坐标随机产生一定程度偏移",args:[{name:"x",componentType:"numberInput",label:"目标位置x坐标",value:0},{name:"y",componentType:"numberInput",label:"目标位置y坐标",value:0},{name:"xRandomRange",componentType:"numberRangeInput",label:"x轴随机偏移范围",value:[0,0]},{name:"yRandomRange",componentType:"numberRangeInput",label:"y轴随机偏移范围",value:[0,0]}]},bo={onDialogOpen:async(e,...t)=>{let n=await m.paramsProcess(...t);_().find(o=>o.name==="randomMove"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.value=+n[r]?.value||0;break;case 2:case 3:const l=[0,0];o.value=n[r]?.value||l;break}})},parameterReplace:e=>{e.xRandomRange[0]===0&&e.xRandomRange[1]===0&&e.yRandomRange[0]===0&&e.yRandomRange[1]===0?e.replaceCurFnArgs(`${e.x}, ${e.y}`):e.replaceCurFnArgs(`${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]`)}},Gc=async(e,t)=>{if(e.replaceCurFnArgs){const s=bo.parameterReplace(e);return m.apiAutoTip(),s}console.time("randomMove");const n=await ho(e.x,e.y,[e.xRandomRange,e.yRandomRange]);console.timeEnd("randomMove"),t.showDetails(JSON.stringify(n));const a=_().find(s=>s.name==="randomMove"&&s.scope==="Mouse")?.testModule;a&&(a.document.example.code=`await Mouse.randomMove(${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]);`.replace(", [[0, 0], [0, 0]]",""))},Jc={howToUse:"将鼠标移动到指定位置",params:[{name:"x",required:!0,instructions:"目标位置x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"目标位置y坐标",type:"number",default:""},{name:"randomRange",required:!1,instructions:"随机偏移",type:"[[number,number],[number,number]]",default:"[[0,0],[0,0]]"}],returnValue:{type:"Promise<boolean>",instructions:"移动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"await randomMove(100,100);"},searchKeys:["mouse","random","move","移动","随机"],codeSnippet:"await Mouse.randomMove(${1:x}, ${2:y}, ${3:[[0,0],[0,0]]});"},Wc=`
function randomMove(x: number, y: number, randomRange?:[[number,number],[number,number]]):Promise<boolean>;
`,Yc={name:"randomMove",scope:"Mouse",exportFn:{fn:ho},testModule:{weight:2,dialog:Kc,callback:Gc,document:Jc},declaration:Wc,auxiliary:bo},Tn=Object.freeze(Object.defineProperty({__proto__:null,randomMoveApi:Yc},Symbol.toStringTag,{value:"Module"})),Xc=(e,t)=>{const{notAllowedFnId:n}=C();if(!(t&&n.value.includes(t)))try{window[P]?.Mouse?.__NS_DATA__?window[P].Mouse.__NS_DATA__=e:console.error("setMouseOptionFnError:","Mouse未被初始化")}catch(a){console.error("setMouseOptionFnError:",a)}},Hc=async(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","Mouse.setMouseOption")},Zc={howToUse:"设置Mouse模块的选项。",params:[{name:"option",required:!0,instructions:"可以设置点击随机偏移、基准屏幕像素等选项",type:"MouseOption",default:"{}"}],returnValue:{type:"void"},example:{code:`//设置鼠标随机偏移、设置基准屏幕像素 设置完成之后，鼠标点击、拖动等API会受到这些选项的影响
Mouse.setMouseOption({
  randomOffset: [
    [-2, 2], //x坐标偏移量[最小值,最大值]
    [-1, 1]  //y坐标偏移量[最小值,最大值]
  ],
  baseSize: [1920, 1080] //基准屏幕像素
});
`},searchKeys:["config","option","mouse","randomOffset","baseSize","鼠标","配置","选项"],codeSnippet:`Mouse.setMouseOption({
  \${1:randomOffset: [
    [0, 0], //x坐标偏移量[最小值,最大值]
    [0, 0]  //y坐标偏移量[最小值,最大值]
  ],}
  \${2:baseSize: [1920, 1080] //基准屏幕像素}
});\${0}
`},Qc=`
type MouseOption = {
  randomOffset?: [
    //随机偏移量
    [number, number], //x坐标偏移量[最小值,最大值]
    [number, number] //y坐标偏移量[最小值,最大值]
  ];
  baseSize?: [number, number]; //基准屏幕像素
};
function setMouseOption(
  option: MouseOption,
):void;
`,eu={name:"setMouseOption",scope:"Mouse",exportFn:{fn:Xc},testModule:{weight:4,dialog:{notOpen:!0,title:"设置鼠标模块配置",targetMethodName:"setMouseOption"},callback:Hc,document:Zc},declaration:Qc},Mn=Object.freeze(Object.defineProperty({__proto__:null,setMouseOptionApi:eu},Symbol.toStringTag,{value:"Module"})),vo=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await Ne(e,t);return await O.mouseUp(o.x,o.y,n)}catch(o){return console.error("upFnError:",o),!1}},_o={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="up"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},tu=async(e,t)=>{if(e.replaceCurFnArgs){const a=_o.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("up耗时"),await vo(e.x,e.y,e.button),console.timeEnd("up耗时"),t.showDetails("鼠标按键抬起完成","up");const n=_().find(a=>a.name==="up"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.up(${e.x}, ${e.y}, '${e.button||"left"}');`},nu={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"抬起的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并抬起(左键)
await Mouse.up(100,100);
//鼠标移动到(100,100)并抬起(右键)
await Mouse.up(100,100,"right");
//鼠标移动到(100,100)并抬起(中键)
await Mouse.up(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","抬起","移动"],codeSnippet:"await Mouse.up(${1:x}, ${2:y});"},au={title:"鼠标按键抬起",targetMethodName:"up",content:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ou=`
function up(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,su={name:"up",scope:"Mouse",exportFn:{fn:vo},testModule:{weight:4,dialog:au,callback:tu,document:nu},declaration:ou,auxiliary:_o},$n=Object.freeze(Object.defineProperty({__proto__:null,upApi:su},Symbol.toStringTag,{value:"Module"})),wo=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.wheel(e)}catch(a){return console.error("wheelFnError:",a),!1}},xo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="wheel"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.delta}`)}},ru=async(e,t)=>{if(e.replaceCurFnArgs){const s=xo.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("wheel耗时");const n=await wo(e.delta);console.timeEnd("wheel耗时"),t.showDetails(n||"OK","wheel");const a=_().find(s=>s.name==="wheel"&&s.scope==="Mouse")?.testModule;a.document.example.code=`await Mouse.wheel(${e.delta}');`},lu={howToUse:"鼠标滚轮滚动",params:[{name:"delta",required:!0,instructions:"滚动的距离，正数向下滚动，负数向上滚动",type:"number",default:"10"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//向下滚动10
await Mouse.wheel(10);`},searchKeys:["鼠标","mouse","滚动","滚轮"],codeSnippet:"await Mouse.wheel(${1:delta});"},iu={title:"鼠标滚轮滚动",targetMethodName:"wheel",content:"模拟鼠标滚轮滚动",args:[{name:"delta",componentType:"numberInput",value:0,label:"滚动的距离，正数向下滚动，负数向上滚动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},cu=`
function wheel(
  delta: number,
):Promise<boolean>;
`,uu={name:"wheel",scope:"Mouse",exportFn:{fn:wo},testModule:{weight:4,dialog:iu,callback:ru,document:lu},declaration:cu,auxiliary:xo},kn=Object.freeze(Object.defineProperty({__proto__:null,wheelApi:uu},Symbol.toStringTag,{value:"Module"})),du={howToUse:"返回路径的最后一部分",params:[{name:"path",required:!0,instructions:"目标路径",type:"string",default:"",children:[]},{name:"ext",required:!1,instructions:"要从返回的路径中删除文件的扩展名 ",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的最后一部分",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await basename("E:\\a.png","png");'},searchKeys:["path"],codeSnippet:"${1:const res = }await basename(${2:'path'}${3:, ''});${0:}"},So=async(e,t,n)=>"",To={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="basename"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break;case 1:o.value=n[r]?.value||"";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}${e.ext?`, "${e.ext}"`:""}`)}},pu=async(e,t)=>{if(e.replaceCurFnArgs){To.parameterReplace(e),m.apiAutoTip();return}const{path:n,ext:a}=e;console.time("basename耗时");const s=await So();console.timeEnd("basename耗时");const o=_().find(r=>r.name==="basename"&&r.scope==="Path")?.testModule;o.document.example.code=`const res = await basename("${n.replace(/\\/g,"\\\\")}"${a?`, "${a}"`:""});`,t.showDetails(JSON.stringify(s),"Path.basename")},mu={title:"获取路径的最后一部分",targetMethodName:"basename",content:"返回路径的最后一部分",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"tjZIw1naGW_0PC94z0wbE",onlyTest:!1,noTest:!1,name:"path",label:"目标路径",displayCondition:[],placeholder:"请输入目标路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"WB4Ge_ckM6GCIydCPD3s8",onlyTest:!1,noTest:!1,name:"ext",label:"要删除的文件扩展名",displayCondition:[],placeholder:"要删除的文件扩展名，留空则不删除"}]},gu=`function basename(
  path: string,
  ext?: string,
): Promise<string>;
`,fu={scope:"Path",name:"basename",exportFn:{fn:So},testModule:{weight:4,dialog:mu,callback:pu,document:du},declaration:gu,auxiliary:To},In=Object.freeze(Object.defineProperty({__proto__:null,basenameApi:fu},Symbol.toStringTag,{value:"Module"})),yu={howToUse:"返回路径的目录名",params:[{name:"path",required:!0,instructions:"目标路径",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的目录名 ",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await dirname("E:\\a\\b.png")'},searchKeys:["path"],codeSnippet:"${1:const res = }await dirname(${2:'path'});${0:}"},Mo=async(e,t)=>"",$o={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="dirname"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},hu=async(e,t)=>{if(e.replaceCurFnArgs){$o.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("dirname耗时");const a=await Mo();console.timeEnd("dirname耗时");const s=_().find(o=>o.name==="dirname"&&o.scope==="Path")?.testModule;s.document.example.code=`const res = await dirname("${n.replace(/\\/g,"\\\\")}")`,t.showDetails(JSON.stringify(a),"Path.dirname")},bu={title:"获得路径的目录名",targetMethodName:"dirname",content:"返回路径的目录名",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"xr40WPMrmLWk0SkDf3nXF",onlyTest:!1,noTest:!1,name:"path",label:"目标路径",displayCondition:[],placeholder:"请输入目标路径",multiple:!1}]},vu=`function dirname(
  path: string,
): Promise<string>;
`,_u={scope:"Path",name:"dirname",exportFn:{fn:Mo},testModule:{weight:4,dialog:bu,callback:hu,document:yu},declaration:vu,auxiliary:$o},Pn=Object.freeze(Object.defineProperty({__proto__:null,dirnameApi:_u},Symbol.toStringTag,{value:"Module"})),wu={howToUse:"获取文件的扩展名",params:[{name:"path",required:!0,instructions:"目标文件路径",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的扩展名(不包含.)",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const ext = await extname("E:\\a.png");'},searchKeys:["path","ext"],codeSnippet:"${1:const res = }await extname(${2:'path'});${0:}"},ko=async(e,t)=>"",Io={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="extname"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},xu=async(e,t)=>{if(e.replaceCurFnArgs){Io.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("extname耗时");const a=await ko();console.timeEnd("extname耗时");const s=_().find(o=>o.name==="extname"&&o.scope==="Path")?.testModule;s.document.example.code=`const ext = await extname("${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(a),"Path.extname")},Su={title:"获取文件扩展名",targetMethodName:"extname",content:"获取文件的扩展名",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"ZkNup1zdtqvariUs2FWdl",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请输入文件路径",multiple:!1}]},Tu=`function extname(
  path: string,
): Promise<string>;
`,Mu={scope:"Path",name:"extname",exportFn:{fn:ko},testModule:{weight:4,dialog:Su,callback:xu,document:wu},declaration:Tu,auxiliary:Io},Cn=Object.freeze(Object.defineProperty({__proto__:null,extnameApi:Mu},Symbol.toStringTag,{value:"Module"})),$u={howToUse:"使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化生成的路径。 ",params:[{name:"path",required:!0,instructions:"主路径",type:"string",default:"",children:[]},{name:"addPath",required:!0,instructions:"路径表达式",type:"string",default:"",children:[]}],returnValue:{instructions:"拼接后的路径",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await join("E:\\a","./b.png");'},searchKeys:["path"],codeSnippet:"${1:const res = }await join(${2:'path'}, ${3:'addPath'});${0:}"},Po=async(e,t,n)=>"",Co={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="join"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, ${m.replaceConstantPath(e.addPath)}`)}},ku=async(e,t)=>{if(e.replaceCurFnArgs){Co.parameterReplace(e),m.apiAutoTip();return}const{path:n,addPath:a}=e;console.time("join耗时");const s=await Po();console.timeEnd("join耗时");const o=_().find(r=>r.name==="join"&&r.scope==="Path")?.testModule;o.document.example.code=`const newPath = await resolve("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}")`,t.showDetails(JSON.stringify(s),"Path.join")},Iu={title:"路径拼接",targetMethodName:"join",content:"使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化生成的路径。 ",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"767VuT62vlbQUwwjZal1J",onlyTest:!1,noTest:!1,name:"path",label:"主路径",displayCondition:[],placeholder:"请输入主路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"YZoEkbl1OLRtFMV0y4w46",onlyTest:!1,noTest:!1,name:"addPath",label:"路径表达式",displayCondition:[],placeholder:"请输入路径表达式"}]},Pu=`function join(
  path: string,
  addPath: string,
): Promise<string>;
`,Cu={scope:"Path",name:"join",exportFn:{fn:Po},testModule:{weight:4,dialog:Iu,callback:ku,document:$u},declaration:Pu,auxiliary:Co},Fn=Object.freeze(Object.defineProperty({__proto__:null,joinApi:Cu},Symbol.toStringTag,{value:"Module"})),Fu={howToUse:"将路径或路径段序列解析为绝对路径",params:[{name:"path",required:!0,instructions:"主路径",type:"string",default:"",children:[]},{name:"addPath",required:!0,instructions:"路径表达式",type:"string",default:"",children:[]}],returnValue:{instructions:"解析后的路径",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const newPath = await resolve("E:\\a\\b.png","../c.png")'},searchKeys:["path"],codeSnippet:"${1:const res = }await resolve(${2:'path'}, ${3:'addPath'});${0:}"},Fo=async(e,t,n)=>"",Ao={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="resolve"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, ${m.replaceConstantPath(e.addPath)}`)}},Au=async(e,t)=>{if(e.replaceCurFnArgs){Ao.parameterReplace(e),m.apiAutoTip();return}const{path:n,addPath:a}=e;console.time("resolve耗时");const s=await Fo();console.timeEnd("resolve耗时");const o=_().find(r=>r.name==="resolve"&&r.scope==="Path")?.testModule;o.document.example.code=`const newPath = await resolve("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}")`,t.showDetails(JSON.stringify(s),"Path.resolve")},Ou={title:"路径解析",targetMethodName:"resolve",content:"将路径或路径段序列解析为绝对路径",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"kE_KrfyUN0QJKVHvVTVEO",onlyTest:!1,noTest:!1,name:"path",label:"主路径",displayCondition:[],placeholder:"请输入主路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"eF9D6-lIMLxsh5g4GuoBd",onlyTest:!1,noTest:!1,name:"addPath",label:"路径表达式",displayCondition:[],placeholder:"请输入路径表达式：如../a.png"}]},Du=`function resolve(
  path: string,
  addPath: string,
): Promise<string>;
`,Ru={scope:"Path",name:"resolve",exportFn:{fn:Fo},testModule:{weight:4,dialog:Ou,callback:Au,document:Fu},declaration:Du,auxiliary:Ao},An=Object.freeze(Object.defineProperty({__proto__:null,resolveApi:Ru},Symbol.toStringTag,{value:"Module"})),Eu={howToUse:"构建与用户交互的表单",params:[{name:"buildFormList",required:!1,instructions:"表单组件数组",type:"BuildFormItems[]",default:"[]",children:[{name:"BuildFormItems",required:!1,instructions:"表单组件",type:["BuildFormItem.Input "," BuildFormItem.MultipleSelect "," BuildFormItem.GroupSelect "," BuildFormItem.Select "," BuildFormItem.Check"],default:" ",children:[{name:"BuildFormItem.Input",required:!1,instructions:"输入框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"input"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"输入框的(默认)值",type:"string",default:"",children:[]}]},{name:"BuildFormItem.MultipleSelect",required:!1,instructions:"多选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:"“multiplSelect”",default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的(默认)值",type:"string[]",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]},{name:"limit",required:!1,instructions:"最大选中数量",type:"number",default:"",children:[]}]},{name:"BuildFormItem.GroupSelect",required:!1,instructions:"单选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"groupSelect"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]}]},{name:"BuildFormItem.Select",required:!1,instructions:"单选组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"select"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项数组",type:"string[]",default:"",children:[]}]},{name:"BuildFormItem.Check",required:!1,instructions:"复选框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"check"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"checked",required:!0,instructions:"是否选中",type:"boolean",default:"",children:[]}]}]}]}],returnValue:{type:"void"},example:{title:"构建与用户交互的表单",code:"buildForm([]);"},searchKeys:["build","from"],codeSnippet:"buildForm(${1:buildFormList});${0:}"},ce=Qt("listStore",{state:()=>({rendererList:[],scriptList:[],projectList:[],deviceList:[],codeSnippets:[]}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="listStore"&&localStorage.setItem("listStore",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("listStore");e&&await this.importData(e)}}});class Vu{constructor(t){this.form=t}getFieldValue=(t,n,a,s="*脚本设置")=>{const o=this.form.find(l=>l.groupLabel===s),r=t.replace("List","")+"List";if(o&&o.enable&&r in o){const l=o[r].find(i=>i.label===n);if(l)return"checked"in l?l.checked:l.value}return a};getFieldValueById=(t,n)=>{let a=n;return this.form.filter(s=>s.enable).find(s=>{const r=Object.keys(s).map(l=>{if(l.includes("List"))return s[l]}).filter(l=>!!l).flat().find(l=>l.id===t);if(r)return"checked"in r?a=r.checked:"value"in r&&(a=r.value),!0}),a};static genId=t=>t.map(n=>{const a={id:"g_"+xe(),...n};return Object.keys(a).forEach(s=>{s.includes("List")&&(a[s]=a[s].map(o=>({id:"i_"+xe(),...o})))}),a})}const Lu=e=>JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>{if(a.pickerType==="color")a.predefine&&(a.predefine=a.predefine.filter(s=>!!(s.includes("#")||s.includes("rgb"))));else if(a.isRange)a.value=a.value.filter(s=>s).map(s=>{if("valueFormat"in a){const o=gt(s,a.valueFormat);return o.isValid()?o.toLocaleString():new Date().toLocaleString()}return typeof s=="string"?s:s.toLocaleString()});else if("valueFormat"in a){const s=gt(a.value,a.valueFormat);s.isValid()?a.value=s.toLocaleString():a.value=new Date().toLocaleString()}else typeof a.value!="string"&&a.value?a.value=a.value.toLocaleString():a.value=new Date().toLocaleString();return a})})),ih=e=>{const t=JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>(a.pickerType!=="color"&&(a.isRange?(a.value.length||(a.value=[new Date,new Date]),a.value=a.value.map(s=>(s=new Date,"valueFormat"in a?gt(s).format(a.valueFormat):s))):(a.value=new Date(a.value),"valueFormat"in a&&(a.value=gt(a.value).format(a.valueFormat)))),a))}));return console.log("-----------res:",JSON.parse(JSON.stringify(t.map(n=>n.pickerList)))),t};let Bt="",Oo={};const On=e=>{Bt="";const t=e?.envSetting.workDir?.replaceAll("\\","\\\\")||"",n=e?.envSetting._screenshotDir?.replaceAll("\\","\\\\")||"",a=e?.envSetting.screenshotSavePath?.replaceAll("\\","\\\\")||"",s=e?.envSetting._scriptRootDir?.replaceAll("\\","\\\\")||"",o={WORK_DIR:t,SCREEN_SHOT_DIR:n,SCREEN_SHOT_PATH:a,SCRIPT_ROOT_DIR:s};return Oo=o,Object.keys(o).map(l=>(Bt+=`declare const ${l}: string;
`,`const ${l} = "${o[l]}";`)).join(`
`)},Nu=()=>On(),ju=()=>Bt,Uu=()=>{const e=Q();return On(e),Oo},Do=`
declare enum FieldType {
  /**
   * @description BuildForm中，type为"check"的表单项
   */
  Check = "check",
  /**
   * @description BuildForm中，type为"input"的表单项
   */
  Input = "input",
  /**
   * @description BuildForm中，type为"select"的表单项
   */
  Select = "select",
  /**
   * @description BuildForm中，type为"picker"的表单项
   */
  Picker = "picker",
  /**
   * @deprecated 请使用FieldType.Check代替,将在未来版本中移除
   */
  CheckList = "checkList",
  /**
   * @deprecated 请使用FieldType.Input代替,将在未来版本中移除
   */
  InputList = "inputList",
  /**
   * @deprecated 请使用FieldType.Select代替,将在未来版本中移除
   */
  SelectList = "selectList",
  /**
   * @deprecated 请使用FieldType.Picker代替,将在未来版本中移除
   */
  PickerList = "pickerList",
}
`,zu=Do.replace(/declare enum/g,"enum"),[Bu,qu]=Me("mockScriptList",{defaultValue:[]}),[Ku,Gu]=Me("mockCodeSnippetList",{defaultValue:[{id:xe(),name:"logtype",filePath:"内部存储",description:"编辑器输入logtype以插入本片段",prefix:"logtype",content:'["loading", "success", "danger", "warning", "info"]'}]}),qt=S(JSON.parse(JSON.stringify(Bu.value))||[]),Kt=S(JSON.parse(JSON.stringify(Ku.value))||[]);pe(qt,()=>{qu(qt.value)},{deep:!0});pe(Kt,()=>{Gu(Kt.value)},{deep:!0});const Oe=()=>({mockScriptList:qt,mockCodeSnippetList:Kt}),Dn=e=>{if(!(e==null||e==="")){if(navigator)navigator.clipboard.writeText(e);else{const t=document.createElement("INPUT");t.style.opacity="0",t.style.position="absolute",t.style.top="-1000px",document.body.appendChild(t),t.value=e,t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy"),document.body.removeChild(t)}return e}},Ju=(e,t="dot")=>{const{x:n,y:a,width:s,height:o}=e;let r="";t==="dot"?r=`${n},${a},${s},${o}`:r=`{"x":${n},"y":${a},"width":${s},"height":${o}}`,Dn(r)},Wu=e=>Ws(e),Yu=()=>Ys();let st=[];const ba=async e=>{if(!e){const{rendererList:a}=ce();e=a}if(e.find(a=>a.groupLabel==="*脚本设置")?.checkList.find(a=>a.label==="导入上次运行配置")?.checked){await Ke();const a=JSON.parse(JSON.stringify(e));st=JSON.parse(JSON.stringify(e));const s=localStorage.getItem(window[P].getScriptId()+"-rendererList");if(s){const o=JSON.parse(s);for(let r=0;r<a.length;r++){const l=a[r],i=o.find(u=>u.groupLabel===l.groupLabel);if(i){l.enable=i.enable;for(let u=0;u<l.selectList.length;u++){const f=l.selectList[u],p=i.selectList.find(v=>v.label===f.label);if(p&&!p.segmented){let v=[],h;p.group?v=p.options.flatMap(w=>w.options.map(M=>typeof M=="object"?M.value:M)):v=p.options.map(w=>typeof w=="object"?w.value:w),p.multiple?Array.isArray(p.value)?h=p.value.filter(w=>v.includes(w)):console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):Array.isArray(p.value)?console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):h=v.includes(p.value)?p.value:f.value,f.value=h}else if(p&&p.segmented){const v=p.options.map(h=>h instanceof Object?h.value:h);f.segmented&&v.includes(f.value)&&(f.value=p.value)}}for(let u=0;u<l.checkList.length;u++){const f=l.checkList[u],p=i.checkList.find(v=>v.label===f.label);p&&(f.checked=p.checked)}for(let u=0;u<l.inputList.length;u++){const f=l.inputList[u],p=i.inputList.find(v=>v.label===f.label);p&&(f.value=p.value)}for(let u=0;u<l.pickerList.length;u++){const f=l.pickerList[u],p=i.pickerList.find(v=>v.label===f.label);p&&(f.value=p.value)}}}a.find(r=>{if(r.groupLabel==="*脚本设置"){r.checkList.find(l=>l.label==="导入上次运行配置").checked=!0;return}}),e.splice(0,e.length,...a)}G.closeAll(),G({title:"配置导入完成",type:"success",position:"bottom-right"})}else{const{openId:a}=Fe();if(a.value==="-1")return;G.closeAll(),G({title:"取消配置导入",type:"info",position:"bottom-right"}),st.find(s=>{if(s.groupLabel==="*脚本设置"){s.checkList.find(o=>o.label==="导入上次运行配置").checked=!1;return}}),st.length?e.splice(0,e.length,...st):e.splice(0,e.length,...e)}},Rn=()=>{const{rendererList:e}=ce();setTimeout(()=>{window[P].rendererList=e})},Ro=e=>{const{rendererList:t}=ce();t.splice(0,t.length,...e),Rn()},Eo=(e,t=!0)=>{const{rendererList:n}=ce(),a=n.findIndex(s=>s.groupLabel===e.targetGroupLabel);if(a===-1){const s={groupLabel:e.targetGroupLabel,enable:e.enable===void 0?!0:e.enable,checkList:[],selectList:[],inputList:[],pickerList:[]};s[e.type+"List"]=[e],n.push(s)}else n[a][e.type+"List"].push(e);t&&Rn()},Xu=e=>{for(let t=0;t<e.length;t++){const n=e[t];Eo(n,!1)}Rn()},We=S(1),je=S(0),bt=S(""),Gt=S(""),Hu=()=>We.value,Zu=()=>je.value,Qu=()=>bt.value,ed=()=>Gt.value,td=e=>{We.value=e},nd=e=>{je.value=e},ad=e=>{je.value<We.value&&je.value++,bt.value=e},Vo=(e,t)=>{e===""?(We.value=1,je.value=0,Gt.value="",bt.value=""):(je.value=We.value,Gt.value=e,bt.value=t||"")},od=async()=>{const e=await new Promise(t=>{let n=window[P].startScriptSignal&&window[P].startScriptSignal.signal;n&&n.aborted&&(window[P].startScriptSignal=new AbortController,n=window[P].startScriptSignal.signal);const a=()=>{window[P].abortSignalInScript=void 0,n.removeEventListener("abort",a),localStorage.setItem(window[P].getScriptId()+"-rendererList",JSON.stringify(window[P].rendererList)),t(window[P].rendererList)};n.addEventListener("abort",a)});return new Vu(e)},sd=S(),rd=(e,t)=>{const{genBuiltInApi:n}=et(),a=n(e),s=Q(),o=On(s),r=`
    try{
      with(window['${P}']){
        ${a+`
`}
        changeScriptRunState(true);
        replaceRendererList([]);
        pushElement({
          targetGroupLabel: "*脚本设置",
          label: "导入上次运行配置",
          checked: false,
          type: "check",
        });
        const signal = abortSignalInScript && abortSignalInScript.signal;
        const signalHandle = ()=>{
          const error = new DOMException('任务被手动终止');
          try{changeScriptRunState && changeScriptRunState('stop');}catch(e){console.warn(e);}
          abortSignalInScript = undefined;
          signal.removeEventListener('abort',signalHandle);
          isStop = true;
        }
        signal.addEventListener('abort',signalHandle);
        const evalFunction = async()=>{
          ${zu}
          ${o}
          ${t}
          main && await main();
          removeIntervals();
          try{changeScriptRunState && changeScriptRunState(false, '${e}');}catch(e){console.error(e);}
          console.log('script run done!');
        }
        evalFunction();
      }
    }catch(e){
      console.error(e);
    }
  `;return ya.transpile(r,{target:ya.ScriptTarget.ESNext,removeComments:!0})},Le=[],ld=(e,t)=>{const n=setInterval(()=>{try{const{isStop:a}=window[P];if(a){Lo(n);return}e()}catch(a){console.error(a)}},t);return Le.push(n),n},Lo=e=>{clearInterval(e),Le.splice(Le.indexOf(e),1)};let Lt=null;const id=()=>{Lt&&clearTimeout(Lt),Lt=setTimeout(()=>{Le.forEach(e=>{clearInterval(e)}),Le.splice(0,Le.length),console.log("已清除所有定时器")},300)},Pe=e=>{const t=ce();Ze(t);const{openId:n}=Fe();return Oe().mockScriptList.value.find(a=>a.id===n.value)[e]},ut=S("ready"),{notify:va}=Aa,_a=()=>Pe("id");let vt=!1;const cd=e=>{vt=e},Jt=S(!Ge),ud=A(()=>Pe("name")),dd=A(()=>Pe("version")),pd=A(()=>Pe("savePath")),wa=["changeScriptRunState","isStop","removeIntervals","log","setInterval","getScriptId"],md=(e,t)=>{const{runningFnId:n}=C();if(!(t&&t!==n.value))if(e==="stop")ut.value="done",window[P].removeIntervals&&window[P].removeIntervals(),window[P]&&Object.keys(window[P]).forEach(a=>{wa.includes(a)||delete window[P][a]}),Jt.value&&!Ge&&Xs.getByLabel("main").then(a=>{a?.show()}).finally(va.done);else if(e)ut.value="ready",vt=!1;else{if(vt)return;if(yd().Preludes.log("脚本执行完成","success",void 0,!0),Vo("success","脚本执行完成"),ut.value="done",window[P]&&Object.keys(window[P]).forEach(a=>{wa.includes(a)||delete window[P][a]}),Jt.value&&!Ge){const a=Hs();a.show(),a.setFocus(),va.done()}}},gd=()=>{const{openId:e}=Fe(),t=ce();return Ze(t),{importLastRunConfig:ba,replaceRendererList:Ro,getWillRunScript:rd,setEndBeforeCompletion:cd,getEndBeforeCompletion:()=>vt,getFileInfo:Pe,buildForm:a=>{if(Xu(a),e.value!=="-1"){const s=Oe().mockScriptList.value.find(o=>o.id===e.value);if(s?.setting.autoImportLastRunConfig){if(s.setting.autoImportLastRunConfig){const o=window[P].rendererList?.find(r=>r.groupLabel==="*脚本设置");if(o){const r=o.checkList.find(l=>l.label==="导入上次运行配置");r&&(r.checked=!0,ba())}}}else return}}}},fd=()=>({taskRunStatus:ut,name:ud,version:dd,hideWindow:Jt,savePath:pd}),yd=()=>{const{exportAllFn:e}=et(),{rendererList:t}=ce();return{copyText:Wu,readClipboardFirstText:Yu,isStop:!1,SCRIPT_ID:_a(),setAllTask:td,setCurTask:nd,getAllTask:Hu,getCurTask:Zu,getCurTaskName:Qu,nextTask:ad,getTaskStatus:ed,setTaskEndStatus:Vo,getCustomizeForm:od,abortSignalInScript:sd.value,startScriptSignal:new AbortController,setInterval:ld,clearInterval:Lo,removeIntervals:id,rendererList:t,getScriptId:_a,changeScriptRunState:md,...e(),replaceRendererList:Ro,pushElement:Eo}},hd=async(e=[],t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{gd().buildForm(e)}catch(a){console.error("buildFormFnError: ",a)}},No={onDialogOpen:async(e,...t)=>{const n=t[0]?.value||[];e(),console.log("buildForm onDialogOpen",n)},parameterReplace:e=>{e.replaceCurFnArgs(JSON.stringify(e.buildFormList))}},bd=async(e,t)=>{if(e.replaceCurFnArgs){No.parameterReplace(e),m.apiAutoTip();return}t.showDetails("此方法不支持测试调用","Preludes.buildForm")},vd={title:"构建表单",targetMethodName:"buildForm",content:"构建与用户交互的表单",args:[]},_d=`function buildForm(
  buildFormList: BuildFormItems[]
): void;
`,wd={scope:"Preludes",name:"buildForm",exportFn:{fn:hd},testModule:{weight:1,dialog:vd,callback:bd,document:Eu},declaration:_d,auxiliary:No},Ft=Object.freeze(Object.defineProperty({__proto__:null,buildFormApi:wd},Symbol.toStringTag,{value:"Module"}));let rt="";const jo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="log"&&o.scope==="Preludes").testModule.dialog;s.args&&(rt=n[0]?.expression||"",s.args.forEach((o,r)=>{r===0?n[0]?.value&&(typeof n[0].value=="string"?(o.value=n[0].value,o.value=o.value.replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"").replace(/\\/g,"")):o.value=JSON.stringify(n[0].value).replace(/\\"/g,"")):o.value=n[r]?.value||"info"}))},parameterReplace:e=>{let t="";try{t=JSON.stringify(new Function("",`const exp = ${rt};return exp`)())}catch{}if(e.type!=="info")if(e.msg===t)e.replaceCurFnArgs(`${rt}, "${e.type}"`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}, "${e.type}"`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\`, "${e.type}"`)}else if(e.msg===t)e.replaceCurFnArgs(`${rt}`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\``)}}},xd=`
function log(
  msg: any,
  type?: "success" | "danger" | "info" | "warning" | "loading"
):void;
`,Sd={title:"输出日志",targetMethodName:"log",content:"在运行控制台或弹窗中输出日志信息",args:[{name:"msg",componentType:"input",value:"",label:"要输出的日志信息"},{name:"type",componentType:"select",value:"info",label:"日志类型",options:["success","danger","info","warning","loading"]}]},Td={howToUse:"输出日志",params:[{name:"msg",required:!0,instructions:"要输出的日志信息",type:"any",default:""},{name:"type",required:!1,instructions:"日志类型",type:["'success'","'danger'","'info'","'warning'","'loading'"],default:"'info'"}],returnValue:{type:"void"},example:{code:`//info类型日志：
log("我是日志");
//success类型日志：
log("我是日志", "success");
//danger类型日志：
log("我是日志", "danger");
//warning类型日志：
log("我是日志", "warning");
//loading类型日志：
log("我是日志", "loading");`},searchKeys:["log","日志","Preludes"],codeSnippet:"log('${1:日志内容}'${2:, 'loading'});"},Wt=K([]),Md=()=>{const{notify:e}=Aa;Wt.splice(0,Wt.length),e.clear()},Uo=()=>({logOutput:Wt,clearLogOutput:Md}),zo=(e=4)=>{let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return t},$d=async()=>`playground-${xe(4)}`,[Bo,kd]=Me("tempDeviceId",{defaultValue:""});Bo.value===""&&$d().then(e=>{kd(e)});const[Id,Pd]=Me("token",{defaultValue:""}),$e=()=>Id.value,Cd=Pd,Fd=Ma.create({baseURL:"https://isyc.gitee.io/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Fd.interceptors.request.use(e=>e,e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const Ad=Ma.create({baseURL:"http://"+Fa+"/api/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Ad.interceptors.request.use(e=>{const t=$e();return t&&(e.headers.Authorization=t),e},e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const dt=[],_t=S("离线");let H=null;const qo=()=>{if(H){console.error("useWss createWs error: WebSocket已经存在");return}try{H=new WebSocket("ws://"+Fa),H.onopen=function(){console.log("Connected to the server."),H?.send(JSON.stringify({type:"INIT",token:$e(),deviceId:Bo.value}))},H.onmessage=function(e){let t="";try{t=JSON.parse(e.data)}catch{t=e.data}console.log("Received data from server: ",t),dt.forEach(n=>n(t))},H.onclose=function(e){e.wasClean?console.log(`Connection closed cleanly, code=${e.code}, reason=${e.reason}`):console.log("Connection died")},H.onerror=function(e){console.log(`Error: ${e}`)},oe.success("WebSocket连接成功")}catch(e){console.error(e),oe.error("WebSocket连接失败"),_t.value="离线"}},Ko=()=>{H?.close(),H=null};pe(_t,()=>{_t.value==="在线"?qo():(Ko(),fe().closeAutoOnline())});const Od=e=>{const t=dt.length;return dt.push(e),()=>{dt.splice(t,1)}},Dd=(e,t)=>{const{controlDeviceInfo:n}=fe();H?.send(JSON.stringify({type:"LINK_RESP",accessToken:n.accessToken,success:e,reason:t,token:$e()}))},Rd=e=>{const{controlDeviceInfo:t}=fe();H?.send(JSON.stringify({type:"FORWARD",token:$e(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"RESPONSE_SCRIPT_LIST",data:e}}))},Ed=(e=[],t)=>{const{controlDeviceInfo:n}=fe();H?.send(JSON.stringify({type:"FORWARD",token:$e(),accessToken:n.accessToken,reverse:!0,data:{type:"COMMAND",command:t?"SYNC_FORM":"RESPONSE_RUN_SCRIPT",form:Lu(e)}}))},Vd=e=>{const{controlDeviceInfo:t}=fe();H?.send(JSON.stringify({type:"FORWARD",token:$e(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"DEPRECATED_SYNC_ID",syncId:e}}))},Ld=(e,t,n)=>{const{controlDeviceInfo:a}=fe();H?.send(JSON.stringify({type:"FORWARD",token:$e(),accessToken:a.accessToken,reverse:!0,data:{type:"COMMAND",command:"SYNC_LOG",log:e,time:t,logType:n}}))},Nd=e=>{const{controlDeviceInfo:t}=fe();H?.send(JSON.stringify({type:"FORWARD",token:$e(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"SYNC_EXEC_STATE",state:e}}))},wt=()=>({wssState:_t,createWs:qo,closeWs:Ko,onMsg:Od,responseReq:Dd,responseScriptList:Rd,syncRendererList:Ed,sendDeprecatedSyncId:Vd,syncLog:Ld,syncExecState:Nd}),jd={};function Ud(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-language-typescript":""},null,-1)])),_:1})}const xa=Z(jd,[["render",Ud]]),zd={};function Bd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})}const qd=Z(zd,[["render",Bd]]),Kd={};function Gd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-folder-cog-outline":""},null,-1)])),_:1})}const Jd=Z(Kd,[["render",Gd]]),Wd={};function Yd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})}const Xd=Z(Wd,[["render",Yd]]),Go="template-secretKey",Jo=e=>Ut.AES.encrypt(e,Go).toString(),Hd=e=>Ut.AES.decrypt(e,Go).toString(Ut.enc.Utf8),Wo=S(!1),Se=K({username:"",password:"",rePassword:""}),Yo=S("login"),[Nt,Xo]=Me("lastUserInfo",{defaultValue:{username:"",password:"",autoLogin:!1}}),Zd=()=>{Xo({username:Se.username,password:Jo(Se.password),autoLogin:!0})},Qd=()=>(Se.username=Nt.value?.username||"",Se.password=Hd(Nt.value?.password||""),Nt.value?.autoLogin||!1),Ho=S(!1),ep=S(""),tp=(e,t,n)=>{t?/^[a-zA-Z0-9_]{3,16}$/.test(t)?n():n(new Error("用户名必须是3到16个字符的字母、数字或下划线")):n(new Error("用户名不能为空"))},np=(e,t,n)=>{t?/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(t)?n():n(new Error("密码必须是8到20个字符，且至少包含一个字母和一个数字")):n(new Error("密码不能为空"))},ap=(e,t,n)=>{if(Yo.value==="login"){n();return}t?t!==Se.password?n(new Error("确认密码与密码不匹配")):n():n(new Error("确认密码不能为空"))},op=K({username:[{validator:tp,trigger:"blur"}],password:[{validator:np,trigger:"blur"}],rePassword:[{validator:ap,trigger:"blur"}]}),sp=()=>{Xo({username:Se.username,password:Jo(Se.password),autoLogin:!1}),Ho.value=!1,Cd(""),Wo.value=!1,wt().closeWs()},rp=()=>({form:Se,formShow:Yo,isLogin:Ho,username:ep,formRules:op,logout:sp,saveLastUserInfo:Zd,resetLastUserInfoToForm:Qd,autoLogin:Wo}),lp=W({__name:"AccountIcon",props:{size:{type:String,default:"large"}},setup(e){const{isLogin:t,username:n}=rp(),a=A(()=>n.value[0]?.toUpperCase()||"");return(s,o)=>{const r=ne,l=Te,i=Zs;return c(t)?(b(),T(i,{key:1,size:18},{default:d(()=>[g(l,{size:"small"},{default:d(()=>[$(E(c(a)),1)]),_:1})]),_:1})):(b(),T(r,{key:0,size:e.size},{default:d(()=>o[0]||(o[0]=[x("span",{"i-mdi-account":""},null,-1)])),_:1},8,["size"]))}}}),ip={};function cp(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-code-block-tags":""},null,-1)])),_:1})}const up=Z(ip,[["render",cp]]),dp={};function pp(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-dev-to":""},null,-1)])),_:1})}const mp=Z(dp,[["render",pp]]),En=[{path:"/",redirect:"/script/list"},{path:"/script",name:"script",component:()=>U(()=>import("./ScriptConsole-DyvjAC4Q.js"),__vite__mapDeps([0,1,2,3])),meta:{title:"脚本",icon:xa,position:"top",id:"script_route"},children:[{path:"list",name:"scriptList",component:()=>U(()=>import("./ScriptList-tuvKDAtH.js"),__vite__mapDeps([4,5,1,2,6]))},{path:"editor",name:"scriptEditor",component:()=>U(()=>import("./CodeEditor-By0LFYKx.js"),__vite__mapDeps([7,8,1,2,9,10,11]))},{path:"setting",name:"scriptSetting",component:()=>U(()=>import("./ScriptSetting-D0Ny2mZd.js"),__vite__mapDeps([12,1,2,5,13]))},{path:"run",name:"scriptRunConsole",component:()=>U(()=>import("./ScriptRunConsole-FO_ttr_x.js"),__vite__mapDeps([14,1,2,15,5,10,16]))}]},{path:"/apiTest",name:"apiTest",component:()=>U(()=>import("./APITest-Dd4anEFr.js"),__vite__mapDeps([17,1,2,18,19,8,9,20])),meta:{title:"调试",icon:qd,position:"top",id:"apiTest_route"}},{path:"/codeSnippetList",name:"codeSnippetList",component:()=>U(()=>import("./CodeSnippet-5NwL5toY.js"),__vite__mapDeps([21,5,1,2,22])),meta:{title:"片段",icon:up,position:"top",id:"codeSnippetList_route"}},{path:"/project",name:"project",component:()=>U(()=>import("./ScriptProject-BrI0iG1U.js"),__vite__mapDeps([23,1,2,24])),meta:{title:"工程",icon:Jd,position:"top",id:"project_route",disabled:!0}},{path:"/setting",name:"setting",component:()=>U(()=>import("./SettingPage-CZdS3PQu.js"),__vite__mapDeps([25,1,2,8,9,26])),meta:{title:"设置",icon:Xd,position:"bottom",id:"setting_route"}},{path:"/account",name:"account",component:()=>U(()=>import("./Account-EamtQ_Rt.js"),__vite__mapDeps([27,1,2,28])),meta:{title:"账户",icon:lp,position:"bottom",id:"setting_route"}},{path:"/scriptWindow",name:"scriptWindow",component:()=>U(()=>import("./ScriptRunWindow-CcXQyBZ2.js"),__vite__mapDeps([29,1,2,30])),meta:{title:"脚本运行窗口",icon:xa}},{path:"/floatWindow",name:"floatWindow",component:()=>U(()=>import("./FloatWindow-D6V0onx_.js"),__vite__mapDeps([31,1,2,32])),meta:{title:"悬浮窗口"}},{path:"/pointerUtil",name:"pointerUtil",component:()=>U(()=>import("./PointerUtil-8Bx6924A.js"),__vite__mapDeps([33,1,2,34])),meta:{title:"鼠标工具"}},{path:"/notification",name:"notification",component:()=>U(()=>import("./Notification-40nYAYyZ.js"),__vite__mapDeps([35,1,2,15,36])),meta:{title:"通知"}},{path:"/ORW",name:"ORW",component:()=>U(()=>import("./OperationRecordWindow-CtsWG8VW.js"),__vite__mapDeps([37,1,2,38])),meta:{title:"操作录制悬浮窗口"}},{path:"/depManager",name:"depManager",component:()=>U(()=>import("./DepManagerPage-Dyk9FkjL.js"),__vite__mapDeps([39,1,2,8,9,40])),meta:{title:"依赖管理器"}},{path:"/invokesManager",name:"invokesManager",component:()=>U(()=>import("./InvokesManager-Bl0y3mqg.js"),__vite__mapDeps([41,1,2,18,19,10,42])),meta:{title:"API",icon:mp,position:"top",disabled:Ge}},{path:"/:pathMatch(.*)*",component:()=>U(()=>import("./NotFound-BYsf2VRV.js"),__vite__mapDeps([43,1,2]))}].map(e=>e.meta?.disabled?null:e).filter(e=>e),gp=En.filter(e=>e.meta?.position==="top"&&!e.meta?.disabled),fp=En.filter(e=>e.meta?.position==="bottom"&&!e.meta?.disabled);var Yt=(e=>(e.None="",e.ScriptList="scriptList",e.CodeSnippetList="codeSnippetList",e))(Yt||{});const yp=K({title:"风染脚本",showContentType:"app-name",apiTest:{searchValue:"",openOutput:!1}}),Zo=S(window.innerWidth||0);let lt=null;const hp=e=>{lt&&clearTimeout(lt),lt=setTimeout(()=>{Zo.value=e,clearTimeout(lt)},100)},bp=S(!1),vp=S(!1),Xt=K({content:"",show:!1,target:""}),Qo=S("");let it;pe(()=>Xt.content,()=>{it&&clearTimeout(it),it=setTimeout(()=>{Qo.value=Xt.content,clearTimeout(it)},300)});const _p=S(!0),At=()=>({info:yp,windowInnerWidth:Zo,syncWindowInnerWidth:hp,clickMinimize:bp,needSyncLastData:vp,searchInfo:Xt,trueSearch:Qo,ingoreObserver:_p}),he={scriptList:[{target:"#script_route",title:"脚本列表(介绍)",description:"此处是脚本列表，支持对脚本进行管理、设置、运行"},{target:"#search_script_input",title:"脚本搜索",description:"输入脚本名称或者备注可对显示的列表进行过滤"},{target:"#new_script_btn",title:"新建脚本(操作)",description:"点击此按钮新建一个演示用的脚本，新建完成后可进行下一步",preventNext:!0,onShow:()=>{const{searchInfo:e}=At();e.content=""}},{target:"#DEMO_SCRIPT_ITEM .info",title:"演示脚本(介绍)",description:"点击中间可展看查看脚本详情，搜索栏为空时支持拖动排序"},{target:"#DEMO_SCRIPT_ITEM .menu",title:"演示脚本(介绍)",description:"右边的按钮依次是：删除、编辑、打开、设置、运行"},{target:"#DEMO_SCRIPT_ITEM-DEL",title:"删除脚本(介绍)",description:"可从脚本列表中移除脚本(不会删除本地文件)"},{target:"#DEMO_SCRIPT_ITEM-EDIT",title:"编辑脚本(介绍)",description:"点击进入脚本编辑器对脚本进行编辑"},{target:"#DEMO_SCRIPT_ITEM-OPEN",title:"打开脚本(介绍)",description:"可选择使用VSCode打开脚本文件或者在文件管理器中显示并选中"},{target:"#DEMO_SCRIPT_ITEM-SETTING",title:"脚本设置(介绍)",description:"可对脚本进行设置"},{target:"#DEMO_SCRIPT_ITEM-RUN",title:"运行脚本(介绍)",description:"运行此脚本"}],scriptEditor:[],scriptRunConsole:[],scriptSetting:[],apiTest:[],codeSnippetList:[],setting:[],account:[]},[wp,xp]=Me("firstTime",{defaultValue:{scriptList:!0,scriptEditor:!0,scriptSetting:!0,scriptRunConsole:!0,apiTest:!0,codeSnippetList:!0,setting:!0,account:!0}}),pt=K({scriptList:{step:0,touring:!1,steps:he.scriptList,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptEditor:{step:0,touring:!1,steps:he.scriptEditor,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptSetting:{step:0,touring:!1,steps:he.scriptSetting,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptRunConsole:{step:0,touring:!1,steps:he.scriptRunConsole,preventPrevious:!1,preventNext:!1,doneSteps:[]},apiTest:{step:0,touring:!1,steps:he.apiTest,preventPrevious:!1,preventNext:!1,doneSteps:[]},codeSnippetList:{step:0,touring:!1,steps:he.codeSnippetList,preventPrevious:!1,preventNext:!1,doneSteps:[]},setting:{step:0,touring:!1,steps:he.setting,preventPrevious:!1,preventNext:!1,doneSteps:[]},account:{step:0,touring:!1,steps:he.account,preventPrevious:!1,preventNext:!1,doneSteps:[]}}),mt=S("scriptList"),Sp=()=>{pt[mt.value]?.steps.length?(pt[mt.value].step=0,Ke(()=>pt[mt.value].touring=!0)):oe.warning("当前页面暂未无引导")},Vn=()=>({firstTime:wp,setfirstTime:xp,tourInfo:pt,currentTourName:mt,showTour:Sp}),we=Qs({history:er(),routes:En});we.beforeEach((e,t,n)=>{e.path,n()});we.afterEach((e,t)=>{const n=we.currentRoute.value.name,{currentTourName:a,firstTime:s,tourInfo:o,setfirstTime:r}=Vn();a.value=n,s.value&&s.value[a.value]&&(s.value[a.value]&&o[a.value].steps.length&&(o[a.value].touring=!0),r({...s.value,[a.value]:!1}))});const Tp=S(!0),Mp=S(1),Ln=S("960px"),Nn=S("600px"),$p=()=>{Ln.value="960px",Nn.value="600px"},kp=()=>{Ln.value="100%",Nn.value="100%"},xt=()=>({isMainWindow:Tp,menuKey:Mp,appWidth:Ln,appHeight:Nn,unmaximizeSize:$p,maximizeSize:kp}),[Ip,es]=Me("controlCode",{defaultValue:zo()}),Pp=()=>{es(zo())},Cp=()=>{$a.prompt("请输入四位数字控制码","控制码",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{4}$/,inputErrorMessage:"控制码格式错误"}).then(({value:e})=>{oe.success("控制码已更新"),es(e)}).catch(()=>{console.log("cancel")})},[Ye,jn]=Me("controlConf",{defaultValue:{autoOnline:!1,autoAsk:!1}}),Fp=A({get:()=>Ye.value?.autoOnline,set:e=>jn({autoAsk:Ye.value?.autoAsk||!1,autoOnline:e||!1})}),Ap=A({get:()=>Ye.value?.autoAsk,set:e=>jn({autoOnline:Ye.value?.autoOnline||!1,autoAsk:e||!1})}),Op=()=>{jn({autoAsk:Ye.value?.autoAsk||!1,autoOnline:!1})},Ie=K({id:"",accessToken:"",willRunScriptId:"",willSyncForm:!1,executeScript:"willExec"});let Sa=()=>{};pe(()=>Ie.id,()=>{Ie.id?Sa=wt().onMsg(e=>{if(e.type==="COMMAND")if(e.command==="REQUEST_SCRIPT_LIST"){const t=Oe().mockScriptList.value.map(n=>({id:n.id,name:n.name,description:`[${n.version}]`+n.description}));wt().responseScriptList(t)}else if(e.command==="RUN_SCRIPT"){Ie.willSyncForm=!0,Ie.willRunScriptId=e.scriptId;const t=Q(),{app:n}=Ze(t);we.replace("/script/list"),xt().menuKey.value++,At().info.showContentType="script",n.value.state.aside.currentItem="script",Ie.willSyncForm=!0}else e.command==="EXECUTE_SCRIPT"&&(Ie.executeScript=e.state)}):Sa()});const fe=()=>({controlCode:Ip,refreshCode:Pp,updateCode:Cp,autoOnline:Fp,autoAsk:Ap,closeAutoOnline:Op,controlDeviceInfo:Ie}),Dp=()=>{const e=window.console,t=Object.create(e);t.error=function(...n){const a=n.map(s=>typeof s=="string"?s:JSON.stringify(s)).join(" ");Uo().logOutput.push({id:"SYS-"+xe(),time:new Date(Date.now()).toLocaleTimeString(),log:a,type:"danger",timestamp:Date.now()}),e.error.call(this,...n)},window.console=t},Rp=e=>{},Ep=(e,t)=>{},Vp={setProductionErrorReport:Dp,scriptConsoleErrorReport:Ep,report:Rp},{logOutput:Lp}=Uo(),{controlDeviceInfo:Np}=fe(),jp=(e,t,n,a=!1)=>{const{notAllowedFnId:s}=C(),{taskRunStatus:o}=fd();if(n&&s.value.includes(n))return!1;if(!a&&o.value==="done")return;const r=new Date(Date.now()),l=[r.getHours(),r.getMinutes(),r.getSeconds()].map(f=>f<10?"0"+f:f).join(":"),i=typeof e=="string"?e:JSON.stringify(e);Lp.push({id:xe(),time:l,log:i,type:t||"info",timestamp:Date.now()}),Np.executeScript==="execute"&&wt().syncLog(i,l,t||"info"),t==="danger"&&(Pe("name"),Pe("version"));const u=document.getElementById("consoleLogDiv");u&&(u.scrollTop=u?.scrollHeight+9999)},Up=async(e,t)=>{if(e.replaceCurFnArgs){const n=jo.parameterReplace(e);return m.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.log")},zp={name:"log",scope:"Preludes",exportFn:{fn:jp},testModule:{weight:1,dialog:Sd,document:Td,callback:Up},declaration:xd,auxiliary:jo},Ot=Object.freeze(Object.defineProperty({__proto__:null,logApi:zp},Symbol.toStringTag,{value:"Module"})),ts={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="sleep"&&o.scope==="Preludes").testModule.dialog;s.args&&(isNaN(Number(n[0]?.value))?s.args[0].value=1e3:s.args[0].value=Number(n[0]?.value)||1e3)},parameterReplace:e=>{e.ms===1e3?e.replaceCurFnArgs(""):e.replaceCurFnArgs(`${e.ms}`)}},Bp="function sleep(ms?: number):Promise<void>;",qp={title:"休眠指定时长",targetMethodName:"sleep",content:"等待指定的毫秒数后继续执行后续操作",args:[{name:"ms",componentType:"numberInput",value:1e3,label:"休眠时长的毫秒数"}]},Kp={howToUse:"休眠指定时长",params:[{name:"ms",required:!1,instructions:"休眠时长的毫秒数",type:"number",default:"1000"}],returnValue:{type:"Promise<void>"},example:{code:`//休眠1000ms
await sleep();
//休眠2000ms
await sleep(2000);`},searchKeys:["sleep","休眠","停止","等待","暂停","延时"],codeSnippet:"sleep(${1:time_ms});"},Gp=async(e,t)=>{if(e.replaceCurFnArgs){const n=ts.parameterReplace(e);return m.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.sleep")},Jp={name:"sleep",scope:"Preludes",exportFn:{fn:Ci},testModule:{weight:1,dialog:qp,document:Kp,callback:Gp},declaration:Bp,auxiliary:ts},Dt=Object.freeze(Object.defineProperty({__proto__:null,sleepApi:Jp},Symbol.toStringTag,{value:"Module"})),Wp={howToUse:"ADB截图",returnValue:{type:"Promise<string>",instructions:"截图结果"},example:{code:"const res = await adbScreenshot();"},searchKeys:["ADB","adb","截图"],codeSnippet:"await adbScreenshot();"},ns=async(e,t)=>"disconnected xxx",as=async(e,t)=>"already connected to XXX",Rt=async(e=0,t)=>"截图完成",Yp=async(e,t)=>{const n=await Rt();t.showDetails(n)},Xp=`
declare function adbScreenshot(): Promise<string>;
`,Hp={name:"adbScreenshot",exportFn:{fn:Rt},testModule:{weight:3,dialog:{notOpen:!0,title:"截图",targetMethodName:"adbScreenshot"},callback:Yp,document:Wp},declaration:Xp},Un=Object.freeze(Object.defineProperty({__proto__:null,adbScreenshotApi:Hp},Symbol.toStringTag,{value:"Module"})),os=async e=>"unLink",Zp=async(e,t)=>{const n=await os();t.showDetails(n)},Qp={howToUse:"获取设备状态",returnValue:{type:"Promise<string>",instructions:"设备状态"},example:{code:"const res = await adbState();"},searchKeys:["ADB","adb","获取设备状态"],codeSnippet:"const ${1:res} = await adbState();"},em=`
declare function adbState(): Promise<string>;
`,tm={name:"adbState",exportFn:{fn:os},testModule:{weight:1,dialog:{notOpen:!0,title:"获取设备状态",targetMethodName:"adbState"},callback:Zp,document:Qp},declaration:em},zn=Object.freeze(Object.defineProperty({__proto__:null,adbStateApi:tm},Symbol.toStringTag,{value:"Module"})),ss=async e=>"OK",nm=async(e,t)=>{const n=await ss();t.showDetails(n)},am={howToUse:"点击当前连接ADB设备的Home键",returnValue:{type:"Promise<string>",instructions:"点击Home键结果, 一般用不上"},example:{code:"await clickHomeKey();"},searchKeys:["ADB","adb","点击Home键","home","key"],codeSnippet:"await clickHomeKey();"},om=`
declare function clickHomeKey():Promise<string>;
`,sm={name:"clickHomeKey",exportFn:{fn:ss},testModule:{weight:1,dialog:{notOpen:!0,title:"点击Home键",targetMethodName:"clickHomeKey"},callback:nm,document:am},declaration:om},Bn=Object.freeze(Object.defineProperty({__proto__:null,clickHomeKeyApi:sm},Symbol.toStringTag,{value:"Module"})),rs=async e=>"OK",rm=async(e,t)=>{const n=await rs();t.showDetails(n)},lm={howToUse:"点击返回键",returnValue:{type:"Promise<string>",instructions:"点击返回键结果, 一般用不上"},example:{code:"await clickReturnKey();"},searchKeys:["ADB","adb","点击返回键","return","key"],codeSnippet:"await clickReturnKey();"},im=`
declare function clickReturnKey(): Promise<string>;
`,cm={name:"clickReturnKey",exportFn:{fn:rs},testModule:{weight:1,dialog:{notOpen:!0,title:"点击返回键",targetMethodName:"clickReturnKey"},callback:rm,document:lm},declaration:im},qn=Object.freeze(Object.defineProperty({__proto__:null,clickReturnKeyApi:cm},Symbol.toStringTag,{value:"Module"})),ls=async(e,t=!1,n)=>"The execution is complete",um={title:"执行cmd命令",targetMethodName:"cmd",content:"执行cmd命令",args:[{name:"command",componentType:"input",label:"需要执行的命令",value:""},{name:"onlyExec",componentType:"switch",label:"是否只执行命令，不返回结果",value:!1}]},is={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="cmd").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=n[0]?.value||"";break;case 1:o.value=n[1]?.value||!1;break}})},parameterReplace:e=>{e.onlyExec?e.replaceCurFnArgs(`"${e.command}",true`):e.replaceCurFnArgs(`"${e.command}"`)}},dm=async(e,t)=>{if(e.replaceCurFnArgs){const s=is.parameterReplace(e);return m.apiAutoTip(),s}console.time("命令执行耗时");const n=await ls(e.command,e.onlyExec);console.timeEnd("命令执行耗时"),t.showDetails(n);const a=_().find(s=>s.name==="cmd")?.testModule;a&&(e.onlyExec?a.document.example.code=`const res = await cmd("${e.command}", true);`:a.document.example.code=`const res = await cmd("${e.command}");`)},pm={howToUse:"执行cmd命令",params:[{name:"command",required:!0,instructions:"需要执行的命令",type:"string",default:""},{name:"onlyExec",required:!1,instructions:"是否只执行命令，不返回结果",type:"boolean",default:"false"}],returnValue:{type:"Promise<string>",instructions:"命令执行结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const res = await cmd("ipconfig");'},searchKeys:["command","cmd","命令","执行"],codeSnippet:"const res = await cmd('${1:command}');"},mm=`
declare function cmd(command:string, onlyExec?:boolean):Promise<string>;
`,gm={name:"cmd",exportFn:{fn:ls},testModule:{weight:3,dialog:um,callback:dm,document:pm},declaration:mm,auxiliary:is},Kn=Object.freeze(Object.defineProperty({__proto__:null,cmdApi:gm},Symbol.toStringTag,{value:"Module"})),fm={title:"连接设备",targetMethodName:"connectTo",content:"请输入要连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},ym={howToUse:"连接到指定设备",params:[{name:"targetDevice",required:!0,instructions:"要连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await connectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","连接设备"],codeSnippet:"const ${1:res} = await connectTo('${2:targetDevice}');"},cs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="connectTo").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=n[r]?.value||"";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},hm=async(e,t)=>{if(e.replaceCurFnArgs){const s=cs.parameterReplace(e);return m.apiAutoTip(),s}console.time("连接到指定设备耗时");const n=await as(e.targetDevice);console.timeEnd("连接到指定设备耗时");const a=_().find(s=>s.name==="connectTo")?.testModule;a?a.document.example.code=`const res = await connectTo('${e.targetDevice}');`:console.error("找不到connectTo的testModule",_()),t.showDetails(n)},us=`
declare function connectTo(targetDevice:string):Promise<string>;
`,bm={name:"connectTo",exportFn:{fn:as},testModule:{weight:3,dialog:fm,callback:hm,document:ym},declaration:us,auxiliary:cs},vm=us,Gn=Object.freeze(Object.defineProperty({__proto__:null,connectToApi:bm,connectToApiDeclaration:vm},Symbol.toStringTag,{value:"Module"})),ds=async(e,t,n,a,s,o,r)=>{const{notAllowedFnId:l}=C();if(r&&l.value.includes(r))return-2;try{return await O.cropPicture(e,t,n,a,s,o)}catch(i){return console.error(i),-1}},ps={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="cropPicture").testModule.dialog.args.forEach((o,r)=>{r===0?o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[0]?.value||"")):r===1?o.componentType==="RectInput"&&(o.value.x=+n[1]?.value||0,o.value.y=+n[2]?.value||0,o.value.width=+n[3]?.value||0,o.value.height=+n[4]?.value||0):r===2&&o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[5]?.value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)},${e.range.x},${e.range.y},${e.range.width},${e.range.height},${m.replaceConstantPath(e.outPath)}`)}},_m=async(e,t)=>{if(e.replaceCurFnArgs){const s=ps.parameterReplace(e);return m.apiAutoTip(),s}console.time("cropPicture耗时");const n=await ds(e.path,e.range.x,e.range.y,e.range.width,e.range.height,e.outPath);console.timeEnd("cropPicture耗时"),n?t.showDetails("裁剪图片完成","cropPicture"):t.showDetails("裁剪图片失败","cropPicture");const a=_().find(s=>s.name==="cropPicture")?.testModule;a.document.example.code=`const res = await cropPicture(
        	"${e.path.replace(/\\/g,"\\\\")}",
        	${e.range.x},
        	${e.range.y},
        	${e.range.width},
        	${e.range.height},
        	"${e.outPath.replace(/\\/g,"\\\\")}",
      )`},wm={howToUse:"传入图片路径以及截取参数、输出路径",params:[{name:"path",required:!0,instructions:"图片的绝对路径",type:"string",default:""},{name:"x",required:!0,instructions:"截取起点X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截取起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"从截取起点开始的截取宽度",type:"number",default:""},{name:"height",required:!0,instructions:"从截取起点开始的截取高度",type:"number",default:""},{name:"outPath",required:!0,instructions:"截取后图片的输出路径",type:"string",default:""}],returnValue:{type:"Promise<number>",instructions:"返回1为截取成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await cropPicture('path',x,y,width,height,'outPath');"},searchKeys:["截取","裁剪","图片"],codeSnippet:"const ${1:res} = await cropPicture('${2:path}', ${3:x}, ${4:y}, ${5:width}, ${6:height}, '${7:outPath}');"},xm={title:"裁剪图片",targetMethodName:"cropPicture",content:"裁剪图片",args:[{name:"path",componentType:"FileInput",value:"",label:"待裁剪图片路径"},{name:"range",componentType:"RectInput",targetSrc:"path",label:"裁剪区域",value:{x:0,y:0,width:0,height:0}},{name:"outPath",componentType:"FileInput",value:"",label:"裁剪后输出路径"}]},Sm=`
declare function cropPicture(
    path:string,
    x:number,
    y:number,
    width:number,
    height:number,
    outPath:string
):Promise<number>;
`,Tm={name:"cropPicture",exportFn:{fn:ds},testModule:{weight:2,callback:_m,document:wm,dialog:xm},declaration:Sm,auxiliary:ps},Jn=Object.freeze(Object.defineProperty({__proto__:null,cropPictureApi:Tm},Symbol.toStringTag,{value:"Module"})),ms=async e=>[],Mm=async(e,t)=>{const n=await ms();n?t.showDetails(JSON.stringify(n)):t.showDetails("获取设备列表失败")},$m={howToUse:"获取ADB的设备列表",returnValue:{type:"Promise<string[] | undefined>",instructions:"设备列表"},example:{code:"const deviceList = await devices();"},searchKeys:["ADB","adb","获取设备列表"],codeSnippet:"const ${1:deviceList} = await devices();"},km=`
declare function devices(): Promise<string[] | undefined>;
`,Im={name:"devices",exportFn:{fn:ms},testModule:{weight:2,dialog:{notOpen:!0,title:"获取ADB设备列表",targetMethodName:"devices"},callback:Mm,document:$m},declaration:km},Wn=Object.freeze(Object.defineProperty({__proto__:null,devicesApi:Im},Symbol.toStringTag,{value:"Module"})),Pm={title:"断开连接设备",targetMethodName:"disConnectTo",content:"请输入要断开连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},Cm={howToUse:"与目标设备断开连接",params:[{name:"targetDevice",required:!0,instructions:"要断开连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"断开连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await disConnectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","断开连接设备"],codeSnippet:"const ${1:res} = await disConnectTo('${2:targetDevice}');"},gs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),o=_().find(r=>r.name==="disConnectTo").testModule.dialog.args[0];o.componentType==="select"&&(o.value=n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},Fm=async(e,t)=>{if(e.replaceCurFnArgs){const s=gs.parameterReplace(e);return m.apiAutoTip(),s}console.time("断开连接设备耗时");const n=await ns(e.targetDevice);console.timeEnd("断开连接设备耗时"),t.showDetails(n);const a=_().find(s=>s.name==="disConnectTo")?.testModule;a&&(a.document.example.code=`const res = await disConnectTo('${e.targetDevice}');`)},fs=`
declare function disConnectTo(targetDevice:string):Promise<string>;
`,Am={name:"disConnectTo",exportFn:{fn:ns},testModule:{weight:3,dialog:Pm,callback:Fm,document:Cm},declaration:fs,auxiliary:gs},Om=fs,Yn=Object.freeze(Object.defineProperty({__proto__:null,disConnectToApi:Am,disConnectToApiDeclaration:Om},Symbol.toStringTag,{value:"Module"})),ys=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{width:-2,height:-2};try{return await O.getImgSize(e)}catch(a){return console.error(a),{width:-1,height:-1}}},hs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="getImageSize").testModule.dialog;s.args[0].value=m.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}`)}},Dm=async(e,t)=>{if(e.replaceCurFnArgs){const o=hs.parameterReplace(e);return m.apiAutoTip(),o}console.time("getImageSize耗时");const{width:n,height:a}=await ys(e.path);console.timeEnd("getImageSize耗时");const s=_().find(o=>o.name==="getImageSize")?.testModule;s.document.example.code=`const { width, height } = await getImageSize(
	"${e.path.replace(/\\/g,"\\\\")}"
);`,t.showDetails("图片宽高："+n+"x"+a,"getImageSize")},Rm={title:"获取图片宽高",targetMethodName:"getImageSize",content:"获取图片宽高",args:[{name:"path",componentType:"FileInput",value:"",label:"图片路径"}]},Em={howToUse:"传入待获取宽高的图片路径",params:[{name:"imgPath",required:!0,instructions:"图片的绝对路径",type:"string",default:""}],returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { width, height } = await getImageSize("E:\\\\image.png");'},searchKeys:["图片","宽高","获取"],codeSnippet:'const { width, height } = await getImageSize("${1:imgPath}");'},Vm=`
declare function getImageSize(
    imgPath:string
):Promise<{width:number; height:number;}>;
`,Lm={name:"getImageSize",exportFn:{fn:ys},testModule:{weight:1,callback:Dm,dialog:Rm,document:Em},declaration:Vm,auxiliary:hs},Xn=Object.freeze(Object.defineProperty({__proto__:null,getImageSizeApi:Lm},Symbol.toStringTag,{value:"Module"})),bs=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await ft(e)?await O.getImgRectInfo(e):(console.error(`getImgRectInfoFn 文件不存在: ${e}`),null)}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},vs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="getImgRectInfo").testModule.dialog;s.args[0].value=m.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.imgPath)}`)}},Nm=async(e,t)=>{if(e.replaceCurFnArgs){const o=vs.parameterReplace(e);return m.apiAutoTip(),o}const n=e.imgPath.split(".").pop();if(!["png","jpg","jpeg","webp","bmp"].includes(n))return t.showDetails("不支持的格式。","getImgRectInfo");console.time("getImgRectInfo耗时");const a=await bs(e.imgPath);console.timeEnd("getImgRectInfo耗时");const s=_().find(o=>o.name==="getImgRectInfo")?.testModule;s.document.example.code=`const { startX, startY, width, height } = 
            	await getImgRectInfo("${e.imgPath.replace(/\\/g,"\\\\")}");`,t.showDetails(`当前图片标注矩形的起始点以及宽高：${JSON.stringify(a)}`,"getImgRectInfo")},jm={howToUse:"获取在指定图片中选取矩形的起始点和宽高。",params:[{name:"imgPath",required:!0,instructions:"图片路径",type:"string",default:""}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { startX, startY, width, height } = await getImgRectInfo("E:\\\\image.png");'},searchKeys:["图片","矩形","位置信息"],codeSnippet:'const { startX, startY, width, height } = await getImgRectInfo("${1:imgPath}");'},Um={title:"在图片选取矩形信息",targetMethodName:"getImgRectInfo",content:"获取在指定图片中选取矩形的起始点和宽高",args:[{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},zm=`
declare function getImgRectInfo(
    imgPath: string
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Bm={name:"getImgRectInfo",exportFn:{fn:bs},testModule:{weight:4,dialog:Um,callback:Nm,document:jm},declaration:zm,auxiliary:vs},Hn=Object.freeze(Object.defineProperty({__proto__:null,getImgRectInfoApi:Bm},Symbol.toStringTag,{value:"Module"})),_s=async(e=0,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await new Promise(s=>setTimeout(s,e)),await O.getScreenRectInfo()}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},qm=async(e,t)=>{console.time("getScreenRectInfo耗时");const n=await _s(e.delayTime);console.timeEnd("getScreenRectInfo耗时"),t.showDetails(`桌面截图标注矩形的起始点以及宽高：${JSON.stringify(n)}`,"getScreenRectInfo")},Km={howToUse:"delayTime毫秒后会对当前屏幕进行截图，之后会有一个截图范围选择的窗口出现，第一次可能不会置顶，需要手动呼出，从起点开始长按拖动鼠标到终点释放，返回对应的范围参数。",params:[{name:"delayTime",required:!1,instructions:"延迟执行时间(s)",type:"number",default:"0"}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{code:"const { startX, startY, width, height } = await getScreenRectInfo();"},searchKeys:["屏幕","矩形","范围","位置"],codeSnippet:"const { startX, startY, width, height } = await getScreenRectInfo(${1:delayTime});"},Gm={title:"屏幕矩形信息",targetMethodName:"getScreenRectInfo",content:"获取在当前屏幕截图选取的矩形起始点以及宽高。",args:[{name:"delayTime",componentType:"numberInput",value:0,label:"延迟执行时间(s)"}]},Jm=`
declare function getScreenRectInfo(
    delayTime?:number
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Wm={name:"getScreenRectInfo",exportFn:{fn:_s},testModule:{weight:3,callback:qm,dialog:Gm,document:Km},declaration:Jm},Zn=Object.freeze(Object.defineProperty({__proto__:null,getScreenRectInfoApi:Wm},Symbol.toStringTag,{value:"Module"})),ws=async e=>{const{notAllowedFnId:t}=C();if(e&&t.value.includes(e))return{width:-1,height:-1};try{return await O.getScreenSize()}catch(n){return console.error(n),{width:-1,height:-1}}},Ym=async(e,t)=>{console.time("getScreenSize耗时");const{width:n,height:a}=await ws();console.timeEnd("getScreenSize耗时"),t.showDetails("屏幕宽高："+n+"x"+a,"getScreenSize")},Xm={title:"获取屏幕宽高",targetMethodName:"getScreenSize",notOpen:!0},Hm={howToUse:"获取屏幕的宽高",returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{code:"const { width, height } = await getScreenSize();"},searchKeys:["屏幕","宽高","获取"],codeSnippet:"const { width, height } = await getScreenSize();"},Zm=`
declare function getScreenSize():Promise<{width:number; height:number;}>;
`,Qm={name:"getScreenSize",exportFn:{fn:ws},testModule:{weight:1,callback:Ym,dialog:Xm,document:Hm},declaration:Zm},Qn=Object.freeze(Object.defineProperty({__proto__:null,getScreenSizeApi:Qm},Symbol.toStringTag,{value:"Module"})),eg={howToUse:"识别屏幕/图片指定位置",params:[{name:"x",required:!1,instructions:"识别区域起点X坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"识别区域起点y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"识别区域宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"识别区域高度",type:"number",default:"-1"},{name:"imgPath",required:!1,instructions:"图片路径, 为空时识别屏幕内容",type:"string",default:""}],returnValue:{type:`
//返回值：
Promise<OcrUtil | undefined>
//OcrUtil类声明：
declare class OcrUtil {
  result: OCRResult[];
  private reCall: () => Promise<OcrUtil | undefined>;
  private ori: {
    x: number;
    y: number;
  };
  constructor(
    originX: number, 
    originY: number, 
    result: OCRResult[], 
    reCall:() => Promise<OcrUtil | undefined>
  );
  public includes(texts: string[]): boolean;
  public searchText(
    text: string, 
    offset?: [number, number]
  ) : FindResult[];
  public findText(
    text: string, 
    offset?: [number, number]
  ) : FindResult | undefined;
  public waitText(
    text: string,
    adb?: boolean, 
    sleepMs?: number, 
    maxWaitCount?: number
  ): Promise<boolean>;
}
declare type OCRResult = {
  position: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
  ];
  text: string;
  score: number;
};
declare class FindResult {
  centerPos: [number, number];
  text: string;
  score: number;
  constructor(
    position: OCRResult["position"],
    text: string,
    score: number,
    offset?: [number, number]
  );
  public click(): Promise<void>;
  public touch(): Promise<string>;
}
`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const ocrUtil = await ocr(0, 0, 100, 100);"},searchKeys:["OCR","ocr","图片","指定范围"],codeSnippet:"const ocrUtil = await ocr(${1:x}, ${2:y}, ${3:width}, ${4:height})"};class Ht{centerPos;text;score;constructor(t,n,a,s){this.text=n,this.score=a;let o=(t[0][0]+t[2][0])/2,r=(t[0][1]+t[2][1])/2;s&&(o+=s[0],r+=s[1]),this.centerPos=[o,r]}async click(){await Pt(this.centerPos[0],this.centerPos[1])}async touch(){return await Ct(this.centerPos[0],this.centerPos[1])}}class xs{result;reCall;ori;constructor(t,n,a,s){this.result=a,this.ori={x:t,y:n},this.reCall=s}includes=t=>!!this.result.find(n=>{for(const a of t)if(n.text===a||n.text.includes(a))return!0});findText=(t,n)=>{const a=this.result.find(s=>s.text===t||s.text.includes(t));if(a)return new Ht(a.position.map(s=>[s[0]+this.ori.x,s[1]+this.ori.y]),a.text,a.score,n)};searchText=(t,n)=>this.result.filter(s=>s.text===t||s.text.includes(t)).map(s=>new Ht(s.position.map(o=>[o[0]+this.ori.x,o[1]+this.ori.y]),s.text,s.score,n));waitText=async(t,n=!1,a=1e3,s=10)=>{if(this.findText(t))return!0;let o=!1;for(;s--;){n&&await Rt();const r=await this.reCall();if(r&&r.includes([t])){o=!0;break}await ht.sleep(a)}return o}}const ea=async(e,t,n,a,s,o)=>{const{notAllowedFnId:r}=C();if(!(o&&r.value.includes(o)))try{const l=await O.ocr(e,t,n,a,s);if(!l)return;if(l.code===1){const i=()=>(s&&console.warn("由于是指定图片识别，如果图片不更新，将导致识别结果每次都一样!"),ea(e,t,n,a,s,o));return new xs(e,t,l.result,i)}}catch(l){console.error("ocrError: ",l)}},Ss={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="ocr").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value={x:+n[0]?.value||0,y:+n[1]?.value||0,width:+n[2]?.value||0,height:+n[3]?.value||0};break;case 1:o.value=m.pathStrReset(n[4]?.value||"");break}})},parameterReplace:e=>{if(!e.imgPath||e.imgPath==="")e.replaceCurFnArgs(`${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`);else{const t=m.replaceConstantPath(e.imgPath);e.replaceCurFnArgs(`${e.rect.x}, ${e.rect.y}, ${e.rect.width}, ${e.rect.height}, ${t}`)}}},tg=async(e,t)=>{if(e.replaceCurFnArgs){Ss.parameterReplace(e),m.apiAutoTip();return}const{imgPath:n,rect:a}=e;console.time("ocr耗时");const s=await ea(a.x,a.y,a.width,a.height,n);console.timeEnd("ocr耗时");const o=_().find(r=>r.name==="ocr")?.testModule;e.imgPath===""?o.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height});`:o.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height}, "${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(s),"ocr")},ng={title:"识别屏幕/图片指定位置内容",targetMethodName:"ocr",content:"如需识别屏幕内容，图片路径无需填写。如需识别图片内容，需填写图片路径。",args:[{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"识别区域",targetSrc:"imgPath"},{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},ag=`
declare type OCRResult = {
  position: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
  ];
  text: string;
  score: number;
};
declare class FindResult {
  centerPos: [number, number];
  text: string;
  score: number;
  constructor(
    position: OCRResult["position"],
    text: string,
    score: number,
    offset?: [number, number]
  );
  public click(): Promise<void>;
  public touch(): Promise<string>;
}
declare class OcrUtil {
  result: OCRResult[];
  private reCall: () => Promise<OcrUtil | undefined>;
  private ori: {
    x: number;
    y: number;
  };
  constructor(originX: number, originY: number, result: OCRResult[], reCall:() => Promise<OcrUtil | undefined>);
  public includes(texts: string[]): boolean;
  public searchText(text: string, offset?: [number, number]) : FindResult[];
  public findText(text: string, offset?: [number, number]) : FindResult | undefined;
  public waitText(text: string,adb?: boolean, sleepMs?: number, maxWaitCount?: number) : Promise<boolean>;
}
declare function ocr(
  x: number,
  y: number,
  width: number,
  height: number,
  imgPath?: string
): Promise<OcrUtil | undefined>;
`,og={name:"ocr",exportFn:{fn:ea},testModule:{weight:5,dialog:ng,callback:tg,document:eg},declaration:ag,auxiliary:Ss,helperClass:[xs,Ht]},ta=Object.freeze(Object.defineProperty({__proto__:null,ocrApi:og},Symbol.toStringTag,{value:"Module"}));class na{constructor(t,n){this.rgb=t,this.reCall=n}reCall;getHex=()=>`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`;getRgb=()=>`rgb(${this.rgb.join(",")})`;getRgbValue=()=>this.rgb.join(",");parseColorStr=t=>{const a=[","," ","，","-"].find(o=>t.includes(o));if(!a){console.error("不支持的color字符串");return}return t.split(a).map(o=>parseInt(o))};is=(t,n=[0,0,0])=>{const a=this.parseColorStr(t);return a?a.length===3?this.rgb.every((s,o)=>{const r=n[o];return s>=a[o]-r&&s<=a[o]+r}):(console.error("color格式错误"),!1):!1};waitColor=async(t,n=1e3,a=10,s=[0,0,0],o)=>{if(this.is(t,s))return!0;o&&o(this.getRgbValue(),t);let r=!1;for(;a--;){const l=await this.reCall();if(l&&l.is(t,s)){r=!0;break}else l&&o&&o(l.getRgbValue(),t);await ht.sleep(n)}return r};waitNotColor=async(t,n=1e3,a=10,s=[0,0,0])=>{if(!this.is(t,s))return!0;let o=!1;for(;a--;){const r=await this.reCall();if(r&&!r.is(t,s)){o=!0;break}await ht.sleep(n)}return o}}const aa=async(e=-1,t=-1,n)=>{const{notAllowedFnId:a}=C();if(!(n&&a.value.includes(n)))try{const s=e===-1?void 0:e,o=t===-1?void 0:t,r=await O.screenColor(s,o);return r.message==="success"?new na(r.data,()=>aa(e,t,n)):void 0}catch(s){console.error("screenColorError: ",s)}},Ts={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenColor").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,replaceCurFnArgs:a}=e;a(t!==void 0&&n!==void 0&&t!==-1&&n!==-1?`${t},${n}`:"")}},sg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ts.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>setTimeout(s,e.delay)),console.time("screenColor耗时");const n=await aa(e.x,e.y);console.timeEnd("screenColor耗时");const a=_().find(s=>s.name==="screenColor")?.testModule;a.document.example.code=`const colorUtil = await screenColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenColor")},rg={howToUse:"识别屏幕指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!1,instructions:"[屏幕x坐标]值为-1时使用鼠标位置",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[屏幕y坐标]值为-1时使用鼠标位置",type:"number",default:"-1"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕鼠标所在位置像素点的rgb值
const colorUtil = await screenColor();
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","鼠标"],codeSnippet:"const colorUtil = await screenColor(${1:x}, ${2:y});${0:}"},lg={title:"获得屏幕指定坐标颜色",targetMethodName:"screenColor",content:"获取[指定坐标/鼠标所在坐标]的颜色，返回颜色工具实例。x、y坐标任意值为-1时使用鼠标位置",args:[{name:"x",componentType:"numberInput",value:-1,label:"x坐标"},{name:"y",componentType:"numberInput",value:-1,label:"y坐标"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ig=`
declare class ColorUtil {
  public rgb: [number, number, number];
  private reCall: () => Promise<ColorUtil | undefined>;
  constructor(
    rgb: [number, number, number],
    reCall: () => Promise<ColorUtil | undefined>
  );
  getHex: () => string;
  /**
   * 获取rgb字符串
   * 如：rgb(255,255,255)
  */
  getRgb: () => string;
  /**
   * 获取rgb值字符串（仅获取值）
   * 如：255,255,255
  */
  getRgbValue: () => string;
  parseColorStr: (color: string) => [number, number, number] | undefined;
  /**
   * 判断颜色是否匹配
   * @param color 颜色字符串
   * @param allowOffsetRange 允许的偏移范围
   * @returns 是否匹配
  */
  is: (color: string, allowOffsetRange?:[number, number, number]) => boolean;
  /**
   * 等待该位置出现预期颜色
   * @param color 预期颜色字符串
   * @param sleepMs 检测间隔，默认1000ms
   * @param maxWaitCount 最大检测次数,默认10次
   * @param allowOffsetRange rgb值允许的偏移范围，默认[0,0,0]
   * @param mismatchCallback 颜色不匹配时的回调
   * @returns 是否匹配
  */
  waitColor: (
    color: string,
    sleepMs?: number,
    maxWaitCount?: number,
    allowOffsetRange?:[number, number, number],
    mismatchCallback?: (curColor: string, expectedColor: string) => void
  ) => Promise<boolean>;
  /**
   * 等待该位置颜色消失
   * @param color 颜色字符串
   * @param sleepMs 检测间隔，默认1000ms
   * @param maxWaitCount 最大检测次数,默认10次
   * @param allowOffsetRange rgb值允许的偏移范围，默认[0,0,0]
   * @returns 是否消失
  */
  waitNotColor: (
    color: string,
    sleepMs?: number,
    maxWaitCount?: number,
    allowOffsetRange?:[number, number, number]
  ) => Promise<boolean>;
}
declare function screenColor(
    x?:number,
    y?:number,
):Promise<ColorUtil | undefined>;
`,cg={name:"screenColor",exportFn:{fn:aa},testModule:{weight:5,callback:sg,dialog:lg,document:rg},declaration:ig,auxiliary:Ts,helperClass:[na]},oa=Object.freeze(Object.defineProperty({__proto__:null,screenColorApi:cg},Symbol.toStringTag,{value:"Module"})),Ms=async(e=-1,t=-1,n=-1,a=-1,s="",o)=>{const{notAllowedFnId:r}=C();if(o&&r.value.includes(o))return!1;const l=Q();s=s.length?s:l.envSetting.screenshotSavePath;try{return await O.screenshot(s,e,t,n,a)}catch(i){return console.error("screenshotError: ",i),!1}},$s={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenshot").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[4]?.value||"");break;case 1:o.value=n[0]?.value&&n[1]?.value&&n[2]?.value&&n[3]?.value&&!(+n[0]?.value==-1||+n[1]?.value==-1||+n[2]?.value==-1||+n[3]?.value==-1)||!1;break;case 2:o.componentType==="RectInput"&&(o.value.x=+n[0]?.value>=0?+n[0]?.value:-1,o.value.y=+n[1]?.value>=0?+n[1]?.value:-1,o.value.width=+n[2]?.value||-1,o.value.height=+n[3]?.value||-1);break}})},parameterReplace:e=>{!e.selectRange&&e.path===""?e.replaceCurFnArgs(""):e.selectRange?e.path===""?e.replaceCurFnArgs(`${e.range.x},${e.range.y},${e.range.width},${e.range.height}`):e.replaceCurFnArgs(`${e.range.x+","+e.range.y+","+e.range.width+","+e.range.height}, ${m.replaceConstantPath(e.path)}`):e.replaceCurFnArgs(`-1,-1,-1,-1, ${m.replaceConstantPath(e.path)}`)}},ug=async(e,t)=>{if(e.replaceCurFnArgs){const o=$s.parameterReplace(e);return m.apiAutoTip(),o}e.delay>0&&await new Promise(o=>setTimeout(o,e.delay)),console.time("screenshot耗时"),e.selectRange===!1&&(e.range={x:-1,y:-1,width:-1,height:-1}),await Ms(e.range.x,e.range.y,e.range.width,e.range.height,e.path),console.timeEnd("screenshot耗时");const n=_().find(o=>o.name==="screenshot")?.testModule,s=Q().envSetting.screenshotSavePath===e.path||e.path==="";e.selectRange?n.document.example.code=`const res = await screenshot(
            	${e.range.x},
            	${e.range.y},
            	${e.range.width},
            	${e.range.height}${s?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`:n.document.example.code=`const res = await screenshot(${s?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`,t.showDetails("截图完成","screenshot")},dg={howToUse:"屏幕截图，支持自定义矩形范围截图以及全屏截图",params:[{name:"x",required:!1,instructions:"[范围参数]截图起点x坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[范围参数]截图起点y坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"width",required:!1,instructions:"[范围参数]截图宽度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"height",required:!1,instructions:"[范围参数]截图高度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"path",required:!1,instructions:"截图保存路径",type:"string",default:"设置中的截图保存路径"}],returnValue:{type:"Promise<number>",instructions:"返回1为截图成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//全屏截图且使用默认保存路径
const res = await screenshot();
//自定义截图区域且使用默认保存路径
const res = await screenshot(x,y,width,height);
//自定义截图区域且使用自定义保存路径
const res = await screenshot(x,y,width,height,"E:\\\\image.png");
        `},searchKeys:["截图","屏幕"],codeSnippet:"const res = await screenshot(${1:x}, ${2:y}, ${3:width}, ${4:height});"},pg={title:"截图",targetMethodName:"screenshot",content:"屏幕截图，自定义截图区域时，x、y、width、height任意一个值为-1时，截取全屏幕",args:[{name:"path",componentType:"FileInput",value:"",label:"截图保存路径"},{name:"selectRange",componentType:"switch",value:!1,label:"是否全屏截图",activeText:"自定义截图区域",inactiveText:"全屏截图"},{name:"range",componentType:"RectInput",label:"截图区域",value:{x:-1,y:-1,width:-1,height:-1},displayCondition:["selectRange"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},mg=`
declare function screenshot(
    x?:number,
    y?:number,
    width?: number,
    height?: number,
    path?:string
):Promise<boolean>;
`,gg={name:"screenshot",exportFn:{fn:Ms},testModule:{weight:5,callback:ug,dialog:pg,document:dg},declaration:mg,auxiliary:$s},sa=Object.freeze(Object.defineProperty({__proto__:null,screenshotApi:gg},Symbol.toStringTag,{value:"Module"})),ra=async(e=0,t=0,n="normal",a)=>{const{notAllowedFnId:s}=C(),o=Q();if(a&&s.value.includes(a))return;const r=o.envSetting.screenshotSavePath;if((r.trim()??"")===""){oe.error("请先设置截图保存路径");return}try{n==="adb"&&await Rt();const l=await O.imgColor(r,e,t);return l.message==="success"?new na(l.data,async()=>ra(e,t,n,a)):void 0}catch(l){console.error("screenshotColorError: ",l)}},ks={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenshotColor").testModule.dialog.args.forEach((o,r)=>{r===2?o.value=n[r]?.value||"normal":o.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,mod:a,replaceCurFnArgs:s}=e;s(a==="adb"?`${t},${n},'adb'`:`${t},${n}`)}},fg=async(e,t)=>{if(e.replaceCurFnArgs){const s=ks.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>setTimeout(s,e.delay)),console.time("screenshotColor耗时");const n=await ra(e.x,e.y,e.mod);console.timeEnd("screenshotColor耗时");const a=_().find(s=>s.name==="screenshotColor")?.testModule;e.mod==="adb"?a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y}, 'adb');`:a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenshotColor")},yg={howToUse:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!0,instructions:"图片x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"图片y坐标",type:"number",default:""},{name:"mod",required:!1,instructions:"值为adb时将在调用前执行adb截图操作",type:["'normal'","'adb'"],default:"'normal'"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕指定位置像素点的rgb值
const colorUtil = await screenshotColor(100, 100);
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","adb","屏幕"],codeSnippet:"const colorUtil = await screenshotColor(${1:x}, ${2:y});"},hg={title:"识别[屏幕/ADB设备]截图指定坐标颜色",targetMethodName:"screenshotColor",content:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"mod",componentType:"select",value:"normal",label:"截图模式",options:["normal","adb"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},bg=`
declare function screenshotColor(
    x:number,
    y:number,
    mod?:'normal'|'adb'
):Promise<ColorUtil | undefined>;
`,vg={name:"screenshotColor",exportFn:{fn:ra},testModule:{weight:5,callback:fg,dialog:hg,document:yg},declaration:bg,auxiliary:ks},la=Object.freeze(Object.defineProperty({__proto__:null,screenshotColorApi:vg},Symbol.toStringTag,{value:"Module"})),Is=async(e,t,n,a,s,o)=>"滑动完成。",_g={title:"滑动",targetMethodName:"slideTo",content:"请输入要滑动的坐标",args:[{name:"fromX",componentType:"numberInput",label:"起始X坐标",value:0},{name:"fromY",componentType:"numberInput",label:"起始Y坐标",value:0},{name:"toX",componentType:"numberInput",label:"结束X坐标",value:0},{name:"toY",componentType:"numberInput",label:"结束Y坐标",value:0},{name:"slideTime",componentType:"numberInput",label:"滑动时间",value:0}]},Ps={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="slideTo").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.fromX},${e.fromY},${e.toX},${e.toY},${e.slideTime}`)}},wg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ps.parameterReplace(e);return m.apiAutoTip(),s}console.time("滑动耗时");const n=await Is(e.fromX,e.fromY,e.toX,e.toY,e.slideTime);console.timeEnd("滑动耗时"),t.showDetails(n);const a=_().find(s=>s.name==="slideTo")?.testModule;a&&(a.document.example.code=`const res = await slideTo(${e.fromX}, ${e.fromY}, ${e.toX}, ${e.toY}, ${e.slideTime});`)},xg={howToUse:"滑动",params:[{name:"fromX",required:!0,instructions:"起始X坐标",type:"number",default:""},{name:"fromY",required:!0,instructions:"起始Y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"结束X坐标",type:"number",default:""},{name:"toY",required:!0,instructions:"结束Y坐标",type:"number",default:""},{name:"slideTime",required:!0,instructions:"滑动时间(ms)",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"滑动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await slideTo(100, 100, 200, 200, 1000);"},searchKeys:["ADB","adb","滑动"],codeSnippet:"await slideTo(${1:fromX}, ${2:fromY}, ${3:toX}, ${4:toY}, ${5:slideTime});"},Sg=`
declare function slideTo(
    fromX:number, 
    fromY:number, 
    toX:number, 
    toY:number, 
    slideTime:number
):Promise<string>;
`,Tg={name:"slideTo",exportFn:{fn:Is},testModule:{weight:3,dialog:_g,callback:wg,document:xg},declaration:Sg,auxiliary:Ps},ia=Object.freeze(Object.defineProperty({__proto__:null,slideToApi:Tg},Symbol.toStringTag,{value:"Module"})),Mg={title:"点击指定位置",targetMethodName:"touch",content:"请输入要点击的坐标",args:[{name:"targetX",componentType:"numberInput",label:"X坐标",value:0},{name:"targetY",componentType:"numberInput",label:"Y坐标",value:0}]},Cs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="touch").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=+n[r]?.value||0;break;case 1:o.value=+n[r]?.value||0;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.targetX}, ${e.targetY}`)}},$g=async(e,t)=>{if(e.replaceCurFnArgs){const s=Cs.parameterReplace(e);return m.apiAutoTip(),s}console.time("点击指定位置耗时");const n=await Ct(e.targetX,e.targetY);console.timeEnd("点击指定位置耗时"),t.showDetails(n);const a=_().find(s=>s.name==="touch")?.testModule;a&&(a.document.example.code=`const res = await touch(${e.targetX}, ${e.targetY});`)},kg={howToUse:"点击指定位置",params:[{name:"targetX",required:!0,instructions:"X坐标",type:"number",default:""},{name:"targetY",required:!0,instructions:"Y坐标",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"ADB设备轻触指定位置结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await touch(100, 100);"},searchKeys:["ADB","adb","点击指定位置","轻触","click","touch"],codeSnippet:"await touch(${1:targetX}, ${2:targetY});"},Ig=`
declare function touch(x:number,y:number):Promise<string>;
`,Pg={name:"touch",exportFn:{fn:Ct},testModule:{weight:3,dialog:Mg,callback:$g,document:kg},declaration:Ig,auxiliary:Cs},ca=Object.freeze(Object.defineProperty({__proto__:null,touchApi:Pg},Symbol.toStringTag,{value:"Module"})),P="__FR_BUILT_IN_API__",be=K({show:!1,title:"",content:"",callType:"test",callback:()=>{}}),Zt={showDetails:()=>{}},z=K([]),Cg=e=>{Zt.showDetails=e.showDetails},Fg=A({set:()=>{},get:()=>z.map(e=>e.testModule)}),Ag=(e,t)=>{const n=z[e];if(z.splice(e,1),z.splice(t,0,n),z[t+1]&&n.testModule){const s=z[t+1].testModule?.weight;n.testModule.weight=s||0}else z[t+1]||(n.testModule.weight=0);const a={};z.forEach((s,o)=>{a[s.name]=o}),localStorage.setItem(P+"API_SORT_MAP",JSON.stringify(a))},Og=e=>{const t=JSON.parse(localStorage.getItem(P+"API_SORT_MAP")||"{}");if(e instanceof Array)if(Object.keys(t).length>0){const n=new Array(e.length).fill(null),a=[];e.forEach(s=>{const o=z.find(l=>l.name===s.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(s.name))throw new Error("methods中的name不符合js变量命名规范");if(o){console.warn("已存在同名方法，跳过注册");return}const r=t[s.name];r!==void 0?n[r]=s:a.push(s)}),z.splice(0,0,...n.filter(s=>s!==null),...a)}else e.forEach(n=>{const a=z.find(s=>s.name===n.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(n.name))throw new Error("methods中的name不符合js变量命名规范");if(a){console.warn("已存在同名方法，跳过注册");return}z.push(n)});else{const n=z.find(a=>a.name===e.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e.name))throw new Error("methods中的name不符合js变量命名规范");if(n){console.warn("已存在同名方法，跳过注册");return}z.push(e)}Object.keys(t).length===0?z.sort((n,a)=>a.testModule.weight-n.testModule.weight):z.forEach((n,a)=>{n.testModule.weight=z.length-a})},Dg=(e,t,n,a="test",s,o)=>{const r=z.find(l=>l.name===e);if(t&&n&&(be.title=t,be.content=n,be.show=!0,be.callType=a),r)if(r.auxiliary?.onDialogOpen&&o&&r.auxiliary.onDialogOpen(()=>{be.show=!1},...o),t&&n){const l=async()=>{const i={replaceCurFnArgs:s};let u=!1;const f=r.testModule.dialog;let p=0;for(let v=0;v<f.args.length;v++){const h=f.args[v];if((!h.onlyTest||h.onlyTest&&a==="test")&&(i[h.name]=h.value,o&&h.value!==o[v+p]?.value)){if(h.componentType==="RectInput")JSON.stringify({x:o[v+p]?.value,y:o[v+p+1]?.value,width:o[v+p+2]?.value,height:o[v+p+3]?.value})===JSON.stringify(h.value)?p+=3:u=!0;else if(h.componentType==="FileInput"||h.componentType==="DirInput")JSON.stringify(h.value)!==m.pathStrReset(JSON.stringify(o[v+p]?.value))&&(u=!0);else if(JSON.stringify(h.value)!==JSON.stringify(o[v+p]?.value))if(o[v+p]?.value===void 0){const w=r.testModule.document.params?.find(M=>M.name===h.name);(w?.required||JSON.stringify(w?.default).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"")!==JSON.stringify(h.value).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,""))&&(u=!0)}else u=!0}}!u&&a==="changeArgs"&&(i.replaceCurFnArgs=()=>{}),r.testModule.callback(i,Zt),be.show=!1};be.callback=l}else r.testModule.callback(void 0,Zt,[])},Rg=()=>{const e={};return z.forEach(t=>{if(!t.exportFn)return;const{fn:n}=t.exportFn;if(t.scope){const a=t.scope;e[a]=e[t.scope]||{},e[a].__NS_DATA__={},e[a][t.name]=n,t.helperClass&&t.helperClass.forEach(s=>{const o=s.name;if(o===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[a][o]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[a][o]=s});return}e[t.name]=n,t.helperClass&&t.helperClass.forEach(a=>{const s=a.name;if(s===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[s]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[s]=a})}),e},Eg=e=>z.map(t=>{const n=t.name;if(t.testModule?.document?.params){const a=t.testModule.document.params.map(s=>s.name).join(",");return`
        const ${n} = async (${a}) => {
          if(window['${P}'].isStop) throw new Error("任务已结束");
          const result = await window['${P}'].${n}(${a}, '${e}');
          return result;
        }
      `}else return`
        const ${n} = async () => {
          if(window['${P}'].isStop) throw new Error("任务已结束");
          const result = await window['${P}'].${n}('${e}');
          return result;
        }
      `}).join(`
`),Fs=async(e=!0,t=!1,n=!1)=>{const s=Object.entries(Object.assign({"../invokes/CV/imgSimilarity/index.ts":en,"../invokes/CV/matchTemplate/index.ts":nn,"../invokes/CV/screenDiffTemplates/index.ts":an,"../invokes/CV/screenMatchTemplate/index.ts":on,"../invokes/FS/readDir/index.ts":sn,"../invokes/FS/readFile/index.ts":rn,"../invokes/FS/rename/index.ts":ln,"../invokes/FS/writeFile/index.ts":cn,"../invokes/GlobalShortcut/listen/index.ts":un,"../invokes/GlobalShortcut/unlisten/index.ts":dn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":pn,"../invokes/Input/combined/index.ts":mn,"../invokes/Input/keyDown/index.ts":gn,"../invokes/Input/keyUp/index.ts":fn,"../invokes/Input/press/index.ts":yn,"../invokes/Input/text/index.ts":hn,"../invokes/Mouse/click/index.ts":bn,"../invokes/Mouse/clicker/index.ts":vn,"../invokes/Mouse/down/index.ts":_n,"../invokes/Mouse/drag/index.ts":wn,"../invokes/Mouse/move/index.ts":xn,"../invokes/Mouse/pos/index.ts":Sn,"../invokes/Mouse/randomMove/index.ts":Tn,"../invokes/Mouse/setMouseOption/index.ts":Mn,"../invokes/Mouse/up/index.ts":$n,"../invokes/Mouse/wheel/index.ts":kn,"../invokes/Path/basename/index.ts":In,"../invokes/Path/dirname/index.ts":Pn,"../invokes/Path/extname/index.ts":Cn,"../invokes/Path/join/index.ts":Fn,"../invokes/Path/resolve/index.ts":An,"../invokes/Preludes/buildForm/index.ts":Ft,"../invokes/Preludes/log/index.ts":Ot,"../invokes/Preludes/sleep/index.ts":Dt,"../invokes/adbScreenshot/index.ts":Un,"../invokes/adbState/index.ts":zn,"../invokes/clickHomeKey/index.ts":Bn,"../invokes/clickReturnKey/index.ts":qn,"../invokes/cmd/index.ts":Kn,"../invokes/connectTo/index.ts":Gn,"../invokes/cropPicture/index.ts":Jn,"../invokes/devices/index.ts":Wn,"../invokes/disConnectTo/index.ts":Yn,"../invokes/getImageSize/index.ts":Xn,"../invokes/getImgRectInfo/index.ts":Hn,"../invokes/getScreenRectInfo/index.ts":Zn,"../invokes/getScreenSize/index.ts":Qn,"../invokes/ocr/index.ts":ta,"../invokes/screenColor/index.ts":oa,"../invokes/screenshot/index.ts":sa,"../invokes/screenshotColor/index.ts":la,"../invokes/slideTo/index.ts":ia,"../invokes/touch/index.ts":ca})),o=[];for(let r=0;r<s.length;r++){const[l,i]=s[r],u=l.split("/"),f=u[u.length-2],p=i[f+"Api"]||i[f];if(!p){console.error(`找不到${f}Api或${f}模块`);continue}if(e&&p?.disabled){console.warn(`内置API：${p.scope?p.scope+".":""}${p.name}已禁用`);continue}t&&(p.id=xe()),n&&(p.fullPath=await Je.resolve(await Je.getInstallDir(),"../../../src/a/"+l)),o.push(p)}return o},Vg=async()=>{const e=await Fs(!0,Ge);e&&Og([...e])},et=()=>({genBuiltInApi:Eg,dynamicDialog:be,builtInApiTestModules:Fg,setTestModuleCtx:Cg,invokeDynamicDialog:Dg,exportAllFn:Rg,registerAllInvokeApi:Vg,moveBuiltInApiIndex:Ag,getApiModules:Fs}),_=()=>z,As={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="imgSimilarity"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[r]?.value||""));break;case 2:o.componentType==="RectInput"&&(o.value.x=+n[2]?.value||0,o.value.y=+n[3]?.value||0,o.value.width=+n[4]?.value||0,o.value.height=+n[5]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.pathA)},${m.replaceConstantPath(e.pathB)},${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`)}},Lg=async(e,t)=>{if(e.replaceCurFnArgs){const s=As.parameterReplace(e);return m.apiAutoTip(),s}console.time("imgSimilarity耗时");const n=await Oa(e.pathA,e.pathB,e.rect.x,e.rect.y,e.rect.width,e.rect.height);console.timeEnd("imgSimilarity耗时");const a=_().find(s=>s.name==="imgSimilarity"&&s.scope==="CV")?.testModule;a.document.example.code=`const similarityValue = await CV.imgSimilarity(
        	"${e.pathA.replace(/\\/g,"\\\\")}",
        	"${e.pathB.replace(/\\/g,"\\\\")}",
        	${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}
        );
      `,t.showDetails(`当前图片与模板的相似度：${n}`,"imgSimilarity")},Ng={howToUse:"采用直方图对比对图片进行相似度匹配，从原图指定矩形区域与模板图进行匹配",params:[{name:"pathA",required:!0,instructions:"原图路径",type:"string",default:""},{name:"pathB",required:!0,instructions:"模板图路径",type:"string",default:""},{name:"x",required:!1,instructions:"原图x坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"原图y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"原图截取宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"原图截取高度",type:"number",default:"-1"}],returnValue:{type:"Promise<number>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//识别E:\\\\image.png从起点(0,0)截取宽100高100的区域与E:\\\\template.png进行相似度匹配
const similarityValue = 
  await CV.imgSimilarity('E:\\\\image.png', 'E:\\\\template.png', 0,0,100,100);`},searchKeys:["图片","相似度","匹配","模板","opencv","cv"],codeSnippet:"const similarityValue = await CV.imgSimilarity('${1:pathA}', '${2:pathB}', ${3:x}, ${4:y}, ${5:width}, ${6:height});"},jg={title:"图片相似度匹配",targetMethodName:"imgSimilarity",content:"采用直方图对比对图片进行相似度匹配",args:[{name:"pathA",componentType:"FileInput",value:"",label:"原图路径"},{name:"pathB",componentType:"FileInput",value:"",label:"模板路径"},{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"原图指定矩形区域",targetSrc:"imgPath"}]},Ug=`
function imgSimilarity(
    pathA:string,
    pathB:string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
):Promise<number>;
`,zg={name:"imgSimilarity",scope:"CV",exportFn:{fn:Oa},testModule:{weight:4,dialog:jg,callback:Lg,document:Ng},declaration:Ug,auxiliary:As},Ce=new Worker(new URL("/assets/ast.worker-Cx-m7Hg8.js",import.meta.url),{type:"module"}),Bg=(e,t)=>new Promise(n=>{Ce.onmessage=r=>{const l=r.data;if(!l)n(l);else{const i=e?.getPositionAt(l.pos.startIndex),u=e?.getPositionAt(l.pos.endIndex);if(i&&u){const f=new tr(i.lineNumber,i.column,u.lineNumber,u.column);n({scope:l.scope,name:l.name,params:l.params,paramsRange:{startLineNumber:f.startLineNumber,endLineNumber:f.endLineNumber,startColumn:f.startColumn,endColumn:f.endColumn}})}else n(null)}};let a=e?.getValue()||"";const s=Uu();Object.keys(s).forEach(r=>{a=a.replaceAll(r,`"${s[r]}"`)});const o=e?.getOffsetAt(t)||0;Ce.postMessage({type:"analyzeFnInfo",code:a,cursorOffset:o,position:t})}),qg=(e,t)=>new Promise(n=>{Ce.onmessage=a=>{n(a.data)},Ce.postMessage({type:"methodIsInvoked",code:e,methodFullName:t})}),Kg=(e,t)=>new Promise(n=>{Ce.onmessage=a=>{n(a.data)},Ce.postMessage({type:"parseInvokeApiConfig",code:e,exportApiName:t})}),Gg=()=>{Ce.postMessage({type:"clearCache"})},Jg={analyzeFnInfo:Bg,methodIsInvoked:qg,parseInvokeApiConfig:Kg,clearCache:Gg},{resolve:Wg}=Je,de=S(null),Yg=()=>de,Ve=e=>e?.length===0?e:e?.replaceAll("\\","\\\\"),Xg=e=>{const t=Q();let{workDir:n,screenshotSavePath:a}=t.envSetting;return e=e.replaceAll("\\","\\\\"),n=n.replaceAll("\\","\\\\"),a=a.replaceAll("\\","\\\\"),e===a?"SCREEN_SHOT_PATH":e.startsWith(a)?`SCREEN_SHOT_PATH+"${e.slice(a.length)}"`:e===n?"WORK_DIR":e.startsWith(n)?`WORK_DIR+"${e.slice(n.length)}"`:`"${e}"`},Hg=e=>e?.length===0?e:e?.replaceAll("\\\\","\\"),Zg=async e=>{if(e===void 0)return"";const t=Q(),{currentScriptDir:n}=C();return e.replace(/\s/g,"").replace("WORK_DIR+",Ve(t.envSetting.workDir)).replace("SCREEN_SHOT_PATH+",Ve(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_PATH",Ve(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_DIR+",Ve(await Wg(t.envSetting.screenshotSavePath,".."))).replace("SCRIPT_ROOT_DIR+",Ve(n.value))},Qg=(...e)=>Promise.all(e.map(async t=>{const n=t.type==="string"?await Zg(t.value):t.value;return{...t,value:n}})),ef=async e=>{if(!e)return;const t=e.getModel();if(!t)return;console.time("getCursorPosFnInfo");const n=e.getPosition(),a=await Jg.analyzeFnInfo(t,n);if(a?.params?.length&&(a.params=a.params.map(o=>{if(o.value)return o;{const r=/(^["'`]{1,2})|(["'`]{1,2}$)/g,l=o.expression.replace(r,"").replace(/\\/g,"")===o.type.replace(r,"").replace(/\\/g,"");return{...o,value:l?o.expression.replace(r,""):""}}})),de.value=a,!de.value){console.timeEnd("getCursorPosFnInfo");return}const s=_().map(o=>({scope:o.scope,...o.testModule,haveAuxiliary:o.auxiliary!==void 0})).find(o=>o.scope?(o.scope||"")===(de.value?.scope||"")&&o.dialog.targetMethodName===de.value?.name:o?.dialog.targetMethodName===de.value.name);if(s===void 0){de.value=null,console.timeEnd("getCursorPosFnInfo");return}de.value&&(de.value.content=s.document?.howToUse,de.value.haveAuxiliary=s.haveAuxiliary),console.timeEnd("getCursorPosFnInfo")};let jt=null;const tf=async()=>{const{findEditor:e}=Vt(),t=e("codeEditBox");t&&(jt&&clearTimeout(jt),jt=setTimeout(()=>{ef(t)},50))},nf=async e=>{const t=Object.assign({"../invokes/CV/imgSimilarity/index.ts":en,"../invokes/CV/matchTemplate/index.ts":nn,"../invokes/CV/screenDiffTemplates/index.ts":an,"../invokes/CV/screenMatchTemplate/index.ts":on,"../invokes/FS/readDir/index.ts":sn,"../invokes/FS/readFile/index.ts":rn,"../invokes/FS/rename/index.ts":ln,"../invokes/FS/writeFile/index.ts":cn,"../invokes/GlobalShortcut/listen/index.ts":un,"../invokes/GlobalShortcut/unlisten/index.ts":dn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":pn,"../invokes/Input/combined/index.ts":mn,"../invokes/Input/keyDown/index.ts":gn,"../invokes/Input/keyUp/index.ts":fn,"../invokes/Input/press/index.ts":yn,"../invokes/Input/text/index.ts":hn,"../invokes/Mouse/click/index.ts":bn,"../invokes/Mouse/clicker/index.ts":vn,"../invokes/Mouse/down/index.ts":_n,"../invokes/Mouse/drag/index.ts":wn,"../invokes/Mouse/move/index.ts":xn,"../invokes/Mouse/pos/index.ts":Sn,"../invokes/Mouse/randomMove/index.ts":Tn,"../invokes/Mouse/setMouseOption/index.ts":Mn,"../invokes/Mouse/up/index.ts":$n,"../invokes/Mouse/wheel/index.ts":kn,"../invokes/Path/basename/index.ts":In,"../invokes/Path/dirname/index.ts":Pn,"../invokes/Path/extname/index.ts":Cn,"../invokes/Path/join/index.ts":Fn,"../invokes/Path/resolve/index.ts":An,"../invokes/Preludes/buildForm/index.ts":Ft,"../invokes/Preludes/log/index.ts":Ot,"../invokes/Preludes/sleep/index.ts":Dt,"../invokes/adbScreenshot/index.ts":Un,"../invokes/adbState/index.ts":zn,"../invokes/clickHomeKey/index.ts":Bn,"../invokes/clickReturnKey/index.ts":qn,"../invokes/cmd/index.ts":Kn,"../invokes/connectTo/index.ts":Gn,"../invokes/cropPicture/index.ts":Jn,"../invokes/devices/index.ts":Wn,"../invokes/disConnectTo/index.ts":Yn,"../invokes/getImageSize/index.ts":Xn,"../invokes/getImgRectInfo/index.ts":Hn,"../invokes/getScreenRectInfo/index.ts":Zn,"../invokes/getScreenSize/index.ts":Qn,"../invokes/ocr/index.ts":ta,"../invokes/screenColor/index.ts":oa,"../invokes/screenshot/index.ts":sa,"../invokes/screenshotColor/index.ts":la,"../invokes/slideTo/index.ts":ia,"../invokes/touch/index.ts":ca}),n=[],a=Object.entries(t);for(let i=0;i<a.length;i++){const[u,f]=a[i],p=u.split("/"),v=p[p.length-2],h=f[v+"Api"]||f[v];h?n.push(h):console.error(`找不到${v}Api或${v}模块`)}const s=Q(),o=n.map(i=>typeof i=="function"?i(s):i).map(i=>{const u=i.testModule?.document?.codeSnippet;return u===void 0?null:{label:i.name+"()",kind:J.CompletionItemKind.Function,detail:i.testModule?.document?.howToUse||"",insertText:u,insertTextRules:J.CompletionItemInsertTextRule.InsertAsSnippet,range:e}}),r=await Promise.all([...Oe().mockCodeSnippetList.value.map(async i=>{const u=i.prefix,f=i.description||"",p=i.content;return{label:u,kind:J.CompletionItemKind.Snippet,detail:i.name+":"+f,insertText:p?.trim()||"",insertTextRules:J.CompletionItemInsertTextRule.InsertAsSnippet,range:e}})]);return[...o.filter(i=>i!==null),...r]},m={getFnInfo:Yg,paramsProcess:Qg,createDependencyProposals:nf,pathStrProcess:Ve,pathStrReset:Hg,apiAutoTip:tf,replaceConstantPath:Xg},af=e=>`
declare class RFormUtil {
  constructor(form: RendererList[]);
  /**
   * 获取表单字段的值。
   *
   * @template T 字段值的类型，默认为 number | string | string[] | boolean | object[]
   *
   * @param {FieldType} fieldType 字段类型。
   * @param {string} label 字段标签。
   * @param {T} failValue 当字段不存在或组不启用时返回的失败值。
   * @param {string} [groupLabel="*脚本设置"] 组标签，默认为 "*脚本设置"。
   *
   * @returns 字段的值，如果字段不存在或组不启用，则返回 failValue。
   */
  public getFieldValue<T = string | number | boolean | string[] | object[]>(
    fieldType: FieldType, 
    label: string, 
    failValue: T, 
    groupLabel?: string
  ): T;
  /**
   * 通过 id 获取表单字段的值。
   *
   * @template T 字段值的类型，默认为 number | string | string[] | boolean | object[]
   *
   * @param {string} id 字段 id。
   * @param {T} failValue 当字段不存在或组不启用时返回的失败值。
   *
   * @returns 字段的值，如果字段不存在或组不启用，则返回 failValue。
   */
  public getFieldValueById<T = number | string | string[] | boolean | object[]>(
    id: string,
    failValue: T
  ): T;
}
${e}
declare const isStop: boolean;
declare const SCRIPT_ID: string;

declare function setAllTask(num: number): void;
declare function setCurTask(num: number): void;
declare function getAllTask(): number;
declare function getCurTask(): number;
declare function getCurTaskName(): string;
declare function nextTask(name: string): void;
declare function getTaskStatus():("" | "success" | "warning" | "exception");
declare function setTaskEndStatus(status: "success" | "warning" | "exception" | "", endMessage?: string): void;
/**
 * 获取自定义表单
 * @returns {Promise<RFormUtil>}
*/
declare function getCustomizeForm(): Promise<RFormUtil>;
declare const abortSignalInScript: AbortController;
declare const startScriptSignal: AbortController;
declare function removeIntervals(): void;
declare const rendererList: RendererList[];
declare function getScriptId(): string;
declare function changeScriptRunState(state: boolean | "stop", taskId?: string) : void;

/**
 * 复制文本到剪贴板。
 * @param {string} text 要复制的文本。
*/
declare function copyText(text: string): Promise<void>;

/**
 * 从剪贴板读取文本。
 * @returns {Promise<string>}
*/
declare function readClipboardFirstText(): Promise<string>;

declare function clearLogOutput() : {
  time: string;
  log: string;
  type: "success" | "danger" | "info" | "warning";
}[];
declare function replaceRendererList(newRendererList: RendererList[]) : void;

declare function pushElement(elem: BuildFormItems): void;
`,of=`
declare namespace BuildFormItem {
  type Base = {
    targetGroupLabel: string;
    enable?: boolean;
    label: string;
  };
  type StripBase<T> = {
    [P in keyof T as Exclude<P, keyof Base>]: T[P];
  };
  type Input = Base & {
    type: FieldType.Input | "input";
  } & InputListItem;
  type Select = Base & {
    type: FieldType.Select | "select";
  } & SelectListItem;
  type Check = Base & {
    type: FieldType.Check | "check";
  } & CheckListItem;
  type Picker = Base & {
    type: FieldType.Picker | "picker";
  } & PickerListItem;
}

declare type BuildFormItems =
  | BuildFormItem.Input
  | BuildFormItem.Select
  | BuildFormItem.Check
  | BuildFormItem.Picker;
`,sf=`
declare namespace SelectType {
  type Multiple<T> = {
    multiple: true;
    value: T[];
    limit?: number;
  };
  type GroupOption<T extends string | number | boolean = string> = {
    group: true;
    options: {
      groupLabel: string;
      options: T[] | OptionItem<T>[];
    }[];
  };
  type ConstantOption<T extends string | number | boolean = string> = {
    group?: false;
    options: T[] | OptionItem<T>[];
  };
  type Single<T> = {
    multiple?: false;
    value: T;
  };
  type Base<
    T extends string | number | boolean,
    Opt extends ConstantOption<T> | GroupOption<T>,
    Val extends Single<T> | Multiple<T>
  > = Opt & Val;
  type Default<T extends string | number | boolean = string> =
    ConstantOption<T> & Single<T>;
}
declare type OptionItem<T extends string | number | boolean = string> = {
  label: string;
  value: T;
};
declare type BaseListItem = {
  label: string;
  id?: string;
};
declare type TextInputItem = {
  inputType?: "text";
  mod?: "password" | "textarea" | "text";
  placeholder?: string;
  clearable?: boolean;
  showPassword?: boolean;
  maxlength?: number;
  showWordLimit?: boolean;
  autosize?: [number | undefined, number | undefined] | number | boolean;
} & OptionItem<string> &
  BaseListItem;
declare type NumberInputItem = {
  inputType: "number";
  min?: number;
  max?: number;
  step?: number;
  stepStrictly?: boolean;
  precision?: number;
  controlsPosition?: "right" | "";
  controls?: boolean;
  valueOnClear?: number | "max" | "min";
} & OptionItem<number> &
  BaseListItem;
declare type RangeInputItem = {
  inputType: "range";
  value: [number, number];
  limit?: [number, number];
  controls?: boolean;
} & BaseListItem;
declare type FileInputItem<Multiple extends boolean> = {
  inputType: "file";
  multiple: Multiple extends true ? true : false | undefined;
  value: Multiple extends true ? string[] : string;
} & BaseListItem;
declare type DirInputItem = {
  inputType: "dir";
  value: string;
} & BaseListItem;
declare type InputListItem =
  | TextInputItem
  | NumberInputItem
  | RangeInputItem
  | DirInputItem
  | FileInputItem<true>
  | FileInputItem<false>;
declare type BaseSelectItem<T extends string | number | boolean> =
  | SelectType.Default<T>
  | SelectType.Base<T, SelectType.ConstantOption<T>, SelectType.Multiple<T>>
  | SelectType.Base<T, SelectType.GroupOption<T>, SelectType.Single<T>>
  | SelectType.Base<T, SelectType.GroupOption<T>, SelectType.Multiple<T>>;
declare type SegmentedOption<T extends string | number | boolean> =
  | {
      label: string;
      value: T;
      disabled?: boolean;
      [key: string]: any;
    }
  | T;
declare type SegmentedItem<T extends string | number | boolean> = {
  segmented: true;
  options: SegmentedOption<T>[];
  value: T;
  multiple?: false /*适应BaseSelectItem的属性*/;
};
declare type SegmentedItems = (
  | SegmentedItem<string>
  | SegmentedItem<number>
  | SegmentedItem<boolean>
) &
  BaseListItem;
declare type BaseSelectItems = (
  | BaseSelectItem<string>
  | BaseSelectItem<number>
  | BaseSelectItem<boolean>
) & {
  segmented?: false; //适应SegmentedItem的属性
} & BaseListItem;
declare type SelectListItem = BaseSelectItems | SegmentedItems;
declare type CheckListItem = { checked: boolean } & BaseListItem;
declare namespace PickerItem {
  type DateTimeProp =
    | {
        isRange?: false;
        value: Date;
        placeholder?: string;
      }
    | {
        isRange?: false;
        valueFormat: string;
        value: string;
        placeholder?: string;
      }
    | {
        isRange: true;
        valueFormat: string;
        value: [string, string] | [];
        rangeSeparator?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
      }
    | {
        isRange: true;
        value: [Date, Date] | [];
        rangeSeparator?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
      };
  type PTime = {
    pickerType: "time";
    clearable?: boolean;
    disabledHours?: (role: string, comparingDate?: any) => number[];
    disabledMinutes?: (
      hour: number,
      role: string,
      comparingDate?: any
    ) => number[];
    disabledSeconds?: (
      hour: number,
      minute: number,
      role: string,
      comparingDate?: any
    ) => number[];
  } & DateTimeProp;
  type PDate = {
    pickerType: "date";
    clearable?: boolean;
  } & DateTimeProp;
  type Color<Alpha extends boolean> = {
    pickerType: "color";
    enableAlpha?: Alpha;
    colorFormat?:
      | "hsl"
      | "hsv"
      | "hex"
      | "rgb"
      | (Alpha extends true ? "hsla" | "hsva" | "hexa" | "rgba" : undefined);
    predefine?: string[];
    value: string;
  };
}
declare type PickerListItem = (
  | PickerItem.PTime
  | PickerItem.PDate
  | PickerItem.Color<true>
  | PickerItem.Color<false>
) &
  BaseListItem;
declare type RendererList = {
  id?: string;
  groupLabel: string;
  enable: boolean;
  checkList: CheckListItem[];
  inputList: InputListItem[];
  selectList: SelectListItem[];
  pickerList: PickerListItem[];
};
declare type RendererItem =
  | CheckListItem
  | InputListItem
  | SelectListItem
  | PickerListItem;
`,rf=()=>{const e=Object.assign({"./CV/imgSimilarity/index.ts":en,"./CV/matchTemplate/index.ts":nn,"./CV/screenDiffTemplates/index.ts":an,"./CV/screenMatchTemplate/index.ts":on,"./FS/readDir/index.ts":sn,"./FS/readFile/index.ts":rn,"./FS/rename/index.ts":ln,"./FS/writeFile/index.ts":cn,"./GlobalShortcut/listen/index.ts":un,"./GlobalShortcut/unlisten/index.ts":dn,"./GlobalShortcut/waitShortcuts/index.ts":pn,"./Input/combined/index.ts":mn,"./Input/keyDown/index.ts":gn,"./Input/keyUp/index.ts":fn,"./Input/press/index.ts":yn,"./Input/text/index.ts":hn,"./Mouse/click/index.ts":bn,"./Mouse/clicker/index.ts":vn,"./Mouse/down/index.ts":_n,"./Mouse/drag/index.ts":wn,"./Mouse/move/index.ts":xn,"./Mouse/pos/index.ts":Sn,"./Mouse/randomMove/index.ts":Tn,"./Mouse/setMouseOption/index.ts":Mn,"./Mouse/up/index.ts":$n,"./Mouse/wheel/index.ts":kn,"./Path/basename/index.ts":In,"./Path/dirname/index.ts":Pn,"./Path/extname/index.ts":Cn,"./Path/join/index.ts":Fn,"./Path/resolve/index.ts":An,"./Preludes/buildForm/index.ts":Ft,"./Preludes/log/index.ts":Ot,"./Preludes/sleep/index.ts":Dt,"./adbScreenshot/index.ts":Un,"./adbState/index.ts":zn,"./clickHomeKey/index.ts":Bn,"./clickReturnKey/index.ts":qn,"./cmd/index.ts":Kn,"./connectTo/index.ts":Gn,"./cropPicture/index.ts":Jn,"./devices/index.ts":Wn,"./disConnectTo/index.ts":Yn,"./getImageSize/index.ts":Xn,"./getImgRectInfo/index.ts":Hn,"./getScreenRectInfo/index.ts":Zn,"./getScreenSize/index.ts":Qn,"./ocr/index.ts":ta,"./screenColor/index.ts":oa,"./screenshot/index.ts":sa,"./screenshotColor/index.ts":la,"./slideTo/index.ts":ia,"./touch/index.ts":ca}),t={root:[]};Object.keys(e).forEach(l=>{let i,u;if(l.split("/").length===4?u=l.split("/")[2]:u=l.split("/")[1],i=e[l.replace("declaration.ts","index.ts")][u+"Api"],!i){console.error(`找不到${u}Api`,e[l.replace("declaration.ts","index.ts")],l);return}const{declaration:f}=i,p=i.scope;p?(t[p]||(t[p]=[]),t[p].push(f)):t.root.push(f)});let a="";Object.keys(t).forEach(l=>{l==="root"?a+=t[l].join(`
`):a+=`declare namespace ${l} {
${t[l].join(`
`)}
}
`});const s=`declare type Key = ${Qe.map(l=>`"${l.split(":")[1]}"`).join("|")};`,o=ju(),r=af(o);return`
${Do.trim()}
${s.trim()}
${r.trim()}
${of.trim()}
${sf.trim()}
${a.trim()}
`.trim()},lf=S("10px"),cf=S(1),Et=nr(),uf=S("none"),df=A(()=>Et.value?"#ffffff33":"#00000033"),Xe=A(()=>Et.value?"#272727":"#f6f6f6"),pf=A(()=>Et.value?"#000":"#fff"),mf=A(()=>Xe?.value?Xe.value==="#272727"?"#f6f6f6":"#272727":"#f6f6f6"),gf=A(()=>Xe?.value?Xe.value==="#272727"?"#f6f6f633":"#27272733":"#f6f6f633"),tt=()=>({borderRadius:lf,appOpacity:cf,borderColor:df,appTransform:uf,isDark:Et,appAsideBgColor:Xe,appBackground:pf,oppositeBgColor:mf,oppositeBgColorOpacity33:gf}),ff="codeEditBox";J.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});J.typescript.typescriptDefaults.setCompilerOptions({target:J.typescript.ScriptTarget.ESNext,module:J.typescript.ModuleKind.ESNext,moduleResolution:J.typescript.ModuleResolutionKind.NodeJs,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,noEmit:!0,typeRoots:["node_modules/@types"]});J.register({id:"typescript",extensions:[".ts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"]});J.typescript.javascriptDefaults.setEagerModelSync(!0);J.typescript.typescriptDefaults.setEagerModelSync(!0);J.registerCompletionItemProvider("typescript",{provideCompletionItems:async function(e,t){const{createDependencyProposals:n}=m,a=e.getWordUntilPosition(t),s={startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return{suggestions:await n(s)}}});let Ta=!1;const yf=S(!1),hf=J.getLanguages(),bf=["javascript","typescript","json"];hf.forEach(e=>{bf.indexOf(e.id)===-1&&J.setLanguageConfiguration(e.id,{})});const _e=[],vf=(e,t,n=!1,a)=>{const s=_e.find(f=>f.domId===e)?.instance;if(!s){console.error("domId对应的编辑器实例不存在！");return}const o=s.getSelection(),{startLineNumber:r,startColumn:l,endLineNumber:i,endColumn:u}=a||o;if(n){const f=s.getValue(),p=f.indexOf("请勿删除，此声明会在脚本读取时用到！")===-1?f:f.replace(f.substring(0,f.indexOf(" */")+3),"");return s.setValue(t+`
`+p)}s.executeEdits("",[{range:new cr(r,l,i,u),text:t,forceMoveMarkers:!0}]),s.focus(),s.setPosition({column:l+t.length,lineNumber:r})};let ct=null;const _f=(e,t)=>{ct&&clearTimeout(ct),ct=setTimeout(()=>{const n=_e.find(a=>a.domId===e)?.instance;if(!n){console.warn("无法设置文本，编辑器实例可能已经被销毁。");return}n.setValue(""),n.setValue(t),clearTimeout(ct)},200)},wf=e=>_e.find(t=>t.domId===e)?.instance,xf=e=>_e.find(t=>t.domId===e)?.value,Vt=()=>{!self.MonacoEnvironment&&(self.MonacoEnvironment={getWorker(u,f){return f==="json"?new ar:f==="css"||f==="scss"||f==="less"?new or:f==="html"||f==="handlebars"||f==="razor"?new sr:["typescript","javascript"].includes(f)?new rr:new lr}});let e="",t;const n=S("");let a=[];return{editorInit:async(u,f=!0,p=!0)=>{Ta||(J.typescript.typescriptDefaults.setExtraLibs([{content:rf()}]),Ta=!0);const v=Q();let h="vs";const w=v.editor.theme.value;if(w==="跟随全局主题"){const{isDark:R}=tt();h=R.value?"vs-dark":"vs"}else h=w==="明亮"?"vs":"vs-dark";if(_e.find(R=>R.domId===u)){console.error("domId对应的编辑器实例已存在！");return}const F=document.getElementById(u);if(!F){console.error("domId对应的dom不存在！");return}e=u,t=ur.create(F,{value:n.value,language:"typescript",automaticLayout:!0,theme:h,foldingStrategy:"indentation",renderLineHighlight:"all",selectOnLineNumbers:!0,tabSize:2,minimap:{enabled:p},readOnly:!1,fontSize:16,scrollBeyondLastLine:!1,overviewRulerBorder:!1}),_e.push({domId:u,instance:t,value:n}),setTimeout(()=>{a.forEach(R=>{t&&R(t)})}),t.onDidChangeModelContent(R=>{t&&(n.value=t.getValue())})},disposeEditor:()=>{const u=_e.findIndex(f=>f.domId===e);t?.dispose(),u!==-1&&_e.splice(u,1),t=void 0},findEditor:wf,getEditorValue:xf,registerEditorEvent:(u,f)=>{u==="mounted"&&a.push(f)},unRegisterEditorEvent:u=>{u==="mounted"&&(a=[])},insertText:vf,setText:_f,formatCode:()=>{t?.getAction("editor.action.formatDocument")?.run()},editorValue:ir(n),openOperationRecordDrawer:yf}},Sf=S("-1"),Tf=S(""),Mf=S(Nr()),$f=S(""),kf=S(""),If=S("translateX(0)"),Pf=S("relative"),Cf=S(-1),Ff=S(!1),Af=K({originData:"",lastData:"",version:"",description:"",name:"未命名脚本",savePath:"",declare:!1}),{insertText:Of}=Vt(),Df=()=>{Of(ff,`/**
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:${ve.version}
 * @name:${ve.name}
 * @description:${ve.description}
 */`,!0),ve.description="无",ve.name="未命名脚本",ve.version="v1.0",ve.visible=!1},ve=K({visible:!1,name:"未命名",version:"v1.0",description:"无",title:"插入脚本声明",targetFn:Df}),Rf=K({savePath:"",visible:!1,cb:()=>{}}),Ef=K({visible:!1,cb:()=>{},close_cb:()=>{}}),Fe=()=>({openId:Sf,tempEditorValue:Tf,preloadText:Mf,preloadPath:$f,curScriptDir:kf,contentTransform:If,asideBarPos:Pf,testApiWinId:Cf,isEditing:Ff,fileInfo:Af,declareMod:ve,saveMod:Rf,autoSaveDialog:Ef}),Vf={class:"btns"},Lf=W({__name:"EditorHeader",setup(e){const t=Q(),{openId:n,tempEditorValue:a,preloadText:s,preloadPath:o,contentTransform:r,asideBarPos:l,fileInfo:i,declareMod:u,saveMod:f,autoSaveDialog:p,isEditing:v}=Fe(),{getEditorValue:h,openOperationRecordDrawer:w}=Vt(),M=A(()=>{const k=h("codeEditBox");return k?k.value!==i.originData:!i.originData}),F=async()=>{{G({title:"提示",message:"playground环境下无法打开调试窗口,请前往API调试",type:"warning",position:"bottom-right"});return}},R=async()=>{{G({title:"提示",message:"playground环境下无法打开鼠标工具",type:"warning",position:"bottom-right"});return}},N=async()=>{w.value=!w.value},le=()=>{l.value="relative",r.value="translateX(0)",v.value=!1,we.replace("/script/setting")},ee=async()=>{{G({title:"提示",message:"playground环境下无法打开脚本文件",type:"warning",position:"bottom-right"});return}},se=()=>{const k=h("codeEditBox"),y=()=>{a.value=k?.value||"",p.visible=!1,we.replace({path:"/script/run"}),l.value="relative",r.value="translateX(0)"},B=async()=>{const te=await Y();y(),te||G({title:"保存失败",message:"直接运行最后一次保存的版本",type:"error"})};k?.value!==i.originData?t.editor.runAutoSave?B():(p.cb=B,p.close_cb=y,p.visible=!0):y()},Y=async()=>{if(i.declare){const k=h("codeEditBox");return Oe().mockScriptList.value.find(y=>y.id===n.value).content=k?.value||"",i.originData=k?.value||"",G({title:"提示",message:"保存成功",type:"success",position:"bottom-right"}),!0}else return G({title:"保存失败",message:"保存之前请先在脚本头部插入'脚本声明'或者将脚本声明补充完整",type:"error",position:"bottom-right"}),!1},ye=ce();Ze(ye);const ue=()=>{we.replace({path:"/script/list"}),s.value="",l.value="relative",r.value="translateX(0)"};return(k,y)=>{const B=Mt,te=me,j=ne,D=$t,ke=Lr;return b(),T(ke,{title:c(i).name,height:35,"allow-drag":"",onBack:ue},{before:d(()=>[St(x("span",null,"*",512),[[Tt,c(M)]]),g(B,{size:"small",type:c(i).declare?"success":"warning"},{default:d(()=>[$(E(c(i).version),1)]),_:1},8,["type"]),c(i).declare?q("",!0):(b(),T(te,{key:0,"w-50px":"","mr-5px":"",link:"",size:"small",type:"primary",onClick:y[0]||(y[0]=De=>c(u).visible=!0),style:{"pointer-events":"all"}},{default:d(()=>y[1]||(y[1]=[$("插入声明")])),_:1}))]),default:d(()=>[x("div",Vf,[y[9]||(y[9]=x("div",{class:"dragable","data-tauri-drag-region":"",style:{cursor:"move"}},null,-1)),g(D,{class:"box-item",effect:"dark",content:"显示操作录制面板",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:N,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[2]||(y[2]=[x("span",{"i-solar-videocamera-record-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开鼠标工具",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:R,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[3]||(y[3]=[x("span",{"i-solar-mouse-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开调试窗口",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:F,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[4]||(y[4]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"前往脚本设置",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:le,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[5]||(y[5]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开脚本",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:ee,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[6]||(y[6]=[x("span",{"i-mdi-folder-eye-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:d(()=>[g(te,{size:"small",onClick:se,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[7]||(y[7]=[x("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"[Ctrl+S]保存",placement:"bottom"},{default:d(()=>[g(te,{size:"small",type:"primary",onClick:Y,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[8]||(y[8]=[x("span",{"i-mdi-content-save-outline":""},null,-1)])),_:1})]),_:1})]),_:1})]),Be(k.$slots,"default",{},void 0,!0)]),_:3},8,["title"])}}}),Nf=Z(Lf,[["__scopeId","data-v-d473d14f"]]),jf="/assets/icon64x64-BkA5owIZ.png",Uf=S({version:"",desc:"",downloadUrl:[],history:[],forceUpdate:!1,updateTime:"",openDialog:!1}),zf=async e=>{{G({title:"提示",message:"当前已是最新版本",type:"success",position:"bottom-right"});return}},Bf=async e=>{e.pwd.length>0&&(Dn(e.pwd),G({title:"提示",message:"提取码已复制到剪切板",type:"success",position:"bottom-right"})),await dr("open_in_default_browser",{url:e.url})},qf=()=>({appVersionInfo:Uf,goAppUpdate:zf,goDownloadNewApp:Bf}),Kf={class:"dialog-footer"},Gf={key:0,"data-tauri-drag-region":"",class:"titlebar",style:{cursor:"move"}},Jf={class:"title","data-tauri-drag-region":"",style:{cursor:"move"}},Wf={class:"text"},Yf={key:0,"ml-4":"","justify-center":"",flex:"","flex-row":"","items-center":""},Xf={key:0,class:"api-test-bar","data-tauri-drag-region":"",style:{cursor:"move"}},Hf={key:1,"data-tauri-drag-region":"",flex:"","flex-1":"","flex-row":"","items-center":"","justify-center":""},Zf={class:"btn"},Qf={key:0,"i-mdi-fullscreen":""},ey={key:1,"i-mdi-fullscreen-exit":""},ty={key:1,class:"titlebar","data-tauri-drag-region":""},ny={class:"btn-content"},ay={key:0,"i-mdi-fullscreen":""},oy={key:1,"i-mdi-fullscreen-exit":""},sy=W({__name:"AutoTitleBar",setup(e){He(k=>({db7cf692:c(v),"5a2cec5a":c(le),"7fdd7ff4":c(ue)}));const{info:t,searchInfo:n,windowInnerWidth:a,clickMinimize:s}=At(),{goInstallDeps:o}=el(),{controlDeviceInfo:r}=fe(),{isEditing:l,fileInfo:i}=Fe();Vt();const{showTour:u}=Vn(),f=S(!1),p=()=>{f.value=!f.value},v=A(()=>l.value?"35px":"40px"),h=S(!1),w=()=>{s.value=!0},M=async()=>{{const{unmaximizeSize:k,maximizeSize:y}=xt();N.value?k():y(),N.value=!N.value;return}},F=async()=>{},{isDark:R}=tt(),N=S(!1),le=A(()=>R.value?"#272727":"#f6f6f6");S("playground");const ee=Q(),se=async()=>{},Y=A(()=>!1),ye=A(()=>t.showContentType==="apiTest"&&a.value>=820),ue=A(()=>ye.value||t.showContentType!=="apiTest"?"relative":"absolute");return Ae(async()=>{}),ka(()=>{}),(k,y)=>{const B=me,te=kt,j=pr,D=Te,ke=Mt,De=It,X=ne,nt=$t,Re=Nf;return b(),I(ae,null,[g(te,{modelValue:c(h),"onUpdate:modelValue":y[1]||(y[1]=L=>re(h)?h.value=L:null),title:"退出程序"},{footer:d(()=>[x("span",Kf,[g(B,{onClick:y[0]||(y[0]=L=>h.value=!1)},{default:d(()=>y[17]||(y[17]=[$("取消")])),_:1}),g(B,{type:"danger",onClick:F},{default:d(()=>[$(E(c(l)?"保存并":"")+"退出",1)]),_:1})])]),default:d(()=>[y[18]||(y[18]=x("div",null,"确定要退出程序吗?",-1))]),_:1},8,["modelValue"]),g(yt,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(l)?c(l)?(b(),I("div",ty,[g(Re,null,{default:d(()=>[x("div",ny,[g(B,{link:"",class:"titlebar-button",onClick:y[12]||(y[12]=L=>c(l)&&c(u)())},{default:d(()=>[g(X,null,{default:d(()=>y[27]||(y[27]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[13]||(y[13]=L=>c(l)&&p())},{default:d(()=>[g(X,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(f)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[14]||(y[14]=L=>c(l)&&w())},{default:d(()=>[g(X,null,{default:d(()=>y[28]||(y[28]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[15]||(y[15]=L=>c(l)&&M())},{default:d(()=>[g(X,null,{default:d(()=>[c(N)?(b(),I("span",oy)):(b(),I("span",ay))]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button danger",onClick:y[16]||(y[16]=L=>c(l)&&(h.value=!0))},{default:d(()=>[g(X,null,{default:d(()=>y[29]||(y[29]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]),_:1})])):q("",!0):(b(),I("div",Gf,[x("div",Jf,[x("div",Wf,[g(j,{style:{width:"20px",height:"20px"},src:c(jf)},null,8,["src"]),g(D,null,{default:d(()=>[$(E(c(t).title),1)]),_:1}),c(r).id.length?(b(),I("div",Yf,[g(D,null,{default:d(()=>y[19]||(y[19]=[$("正在被")])),_:1}),g(ke,{type:"warning"},{default:d(()=>[$(E(c(r).id),1)]),_:1}),g(D,null,{default:d(()=>y[20]||(y[20]=[$("控制")])),_:1})])):q("",!0)]),g(yt,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(ye)?(b(),I("div",Xf,[g(De,{class:"search-ipt",modelValue:c(t).apiTest.searchValue,"onUpdate:modelValue":y[2]||(y[2]=L=>c(t).apiTest.searchValue=L),clearable:"",placeholder:"可输入API的关键字对API进行筛选"},null,8,["modelValue"]),g(B,{class:"output-btn",onClick:y[3]||(y[3]=L=>c(t).apiTest.openOutput=!0),circle:""},{default:d(()=>[g(X,null,{default:d(()=>y[21]||(y[21]=[x("span",{"i-mdi-square-rounded-badge-outline":""},null,-1)])),_:1})]),_:1})])):(b(),I("div",Hf,[c(n).show&&c(n).target===c(Yt).ScriptList?(b(),T(De,{key:0,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[4]||(y[4]=L=>c(n).content=L),clearable:"",placeholder:"搜索脚本名称或备注"},null,8,["modelValue"])):q("",!0),c(n).show&&c(n).target===c(Yt).CodeSnippetList?(b(),T(De,{key:1,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[5]||(y[5]=L=>c(n).content=L),clearable:"",placeholder:"搜索代码片段:名称、备注、前缀"},null,8,["modelValue"])):q("",!0)]))]),_:1})]),x("div",Zf,[c(ee).app.dependenceState==="不可用"?(b(),T(nt,{key:0,effect:"light",content:"基础功能不可用，点我安装依赖",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button warning-btn",onClick:y[6]||(y[6]=L=>c(o)())},[g(X,null,{default:d(()=>y[22]||(y[22]=[x("span",{"i-mdi-tools":""},null,-1)])),_:1})])]),_:1})):q("",!0),c(Y)&&c(ee).view.showUpdateInTitleBar?(b(),T(nt,{key:1,effect:"light",content:"有新版本，点我更新",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button setup-btn",onClick:se},[g(X,null,{default:d(()=>y[23]||(y[23]=[x("span",{"i-mdi-cloud-download-outline":""},null,-1)])),_:1})])]),_:1})):q("",!0),g(B,{link:"",class:"titlebar-button",onClick:y[7]||(y[7]=L=>!c(l)&&c(u)())},{default:d(()=>[g(X,null,{default:d(()=>y[24]||(y[24]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[8]||(y[8]=L=>!c(l)&&p())},{default:d(()=>[g(X,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(f)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[9]||(y[9]=L=>!c(l)&&w())},{default:d(()=>[g(X,null,{default:d(()=>y[25]||(y[25]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[10]||(y[10]=L=>!c(l)&&M())},{default:d(()=>[g(X,null,{default:d(()=>[c(N)?(b(),I("span",ey)):(b(),I("span",Qf))]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button danger",onClick:y[11]||(y[11]=L=>!c(l)&&(h.value=!0))},{default:d(()=>[g(X,null,{default:d(()=>y[26]||(y[26]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]))]),_:1})],64)}}}),ry=Z(sy,[["__scopeId","data-v-ceed98dc"]]),ua=S(!1),ly=S(!0),qe=K({name:"",description:"",prefix:"",code:""}),Os=S(),iy=(e,t,n)=>{t.trim()===""?n(new Error("请输入代码片段名称")):(async()=>(Oe().mockCodeSnippetList.value.find(s=>s.name===t)&&n(new Error("名称和已有代码片段重复，换个试试吧")),n()))()},cy=K({name:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{validator:iy,trigger:"blur"}],prefix:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{min:1,max:20,message:"代码片段前缀长度在 1 到 20 个字符",trigger:"blur"}]}),uy=()=>{try{Dn(qe.code),oe.success("操作代码片段复制成功")}catch(e){oe.error("操作代码片段复制失败"),console.error(e)}finally{ua.value=!1}},dy=()=>{Os.value?.validate(async e=>{if(e){Oe().mockCodeSnippetList.value.push({id:xe(),name:qe.name,description:qe.description,prefix:qe.prefix,content:"",filePath:"playground"}),oe.success("操作代码片段保存成功"),ua.value=!1;return}})},py=()=>({saveDialog:ua,saveConfig:qe,ruleFormRef:Os,rules:cy,copyCode:uy,saveCodeSnippets:dy,showCopyBtn:ly}),my=W({__name:"CodeSnippetSaveDialog",setup(e){const{saveDialog:t,saveConfig:n,ruleFormRef:a,rules:s,copyCode:o,saveCodeSnippets:r,showCopyBtn:l}=py();return(i,u)=>{const f=Te,p=It,v=mr,h=gr,w=me,M=kt;return b(),T(M,{modelValue:c(t),"onUpdate:modelValue":u[4]||(u[4]=F=>re(t)?t.value=F:null),title:"保存操作记录",class:"snippet-save-dialog"},{footer:d(()=>[x("div",null,[g(w,{onClick:u[3]||(u[3]=F=>t.value=!1)},{default:d(()=>u[6]||(u[6]=[$("取消")])),_:1}),c(l)?(b(),T(w,{key:0,type:"primary",onClick:c(o)},{default:d(()=>u[7]||(u[7]=[$("复制")])),_:1},8,["onClick"])):q("",!0),g(w,{type:"primary",onClick:c(r)},{default:d(()=>u[8]||(u[8]=[$("保存")])),_:1},8,["onClick"])])]),default:d(()=>[g(f,null,{default:d(()=>u[5]||(u[5]=[$("将操作记录作为代码片段保存到代码片段仓库,或者仅复制代码片段")])),_:1}),g(h,{model:c(n),ref_key:"ruleFormRef",ref:a,rules:c(s),"label-position":"right","label-width":"auto","mt-3":""},{default:d(()=>[g(v,{label:"代码片段名称",prop:"name"},{default:d(()=>[g(p,{modelValue:c(n).name,"onUpdate:modelValue":u[0]||(u[0]=F=>c(n).name=F)},null,8,["modelValue"])]),_:1}),g(v,{label:"代码片段前缀",prop:"prefix"},{default:d(()=>[g(p,{modelValue:c(n).prefix,"onUpdate:modelValue":u[1]||(u[1]=F=>c(n).prefix=F)},null,8,["modelValue"])]),_:1}),g(v,{label:"代码片段描述",prop:"description"},{default:d(()=>[g(p,{modelValue:c(n).description,"onUpdate:modelValue":u[2]||(u[2]=F=>c(n).description=F),autosize:{minRows:2},type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),gy={key:0},fy={key:0},yy={class:"fields"},hy={class:"dialog-footer"},by=W({__name:"GeneralDialog",props:Ue({isTestModule:{type:Boolean,default:!1},title:{type:String},content:{type:String},callback:{type:Function}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=ze(e,"modelValue"),n=e,a=()=>{t.value=!1};return(s,o)=>{const r=yr,l=me,i=kt;return b(),T(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),title:n.title,onClose:a,onKeyup:fr(n.callback,["enter"]),draggable:"",top:"10vh",width:"70%",class:"general-dialog"},{footer:d(()=>[x("span",hy,[g(l,{onClick:a},{default:d(()=>o[1]||(o[1]=[$("取消")])),_:1}),g(l,{type:"primary",onClick:n.callback},{default:d(()=>o[2]||(o[2]=[$(" 确定 ")])),_:1},8,["onClick"])])]),default:d(()=>[n.content?(b(),I("div",gy,[n.isTestModule?(b(),T(r,{key:1,title:n.content,closable:!1,type:"info","show-icon":""},null,8,["title"])):(b(),I("span",fy,E(n.content),1))])):q("",!0),x("div",yy,[Be(s.$slots,"element")])]),_:3},8,["modelValue","title","onKeyup"])}}}),vy={key:0},_y=W({__name:"RangeInput",props:Ue({limit:{type:Object},mountedValue:{type:Object},disabled:{type:Boolean,default:!1},label:{type:String,default:""},controls:{type:Boolean,default:!1}},{modelValue:{required:!0,default:[0,0]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=S(),n=S(),a=ze(e,"modelValue"),s=e,o=()=>{a.value[0]>=a.value[1]?(a.value[0]=a.value[1],n.value=a.value[1],t.value=a.value[0]):(n.value=void 0,t.value=void 0)};return Ae(()=>{s.mountedValue&&(a.value=s.mountedValue)}),(r,l)=>{const i=Ia,u=$t;return b(),I("div",{flex:"","flex-row":"","items-center":"",style:ie({justifyContent:s.label?"space-between":"flex-start"})},[s.label?(b(),I("div",vy,E(s.label),1)):q("",!0),x("div",{flex:"","flex-row":"","items-center":"",style:ie({width:s.label?"auto":"100%"})},[g(u,{effect:"dark",content:"最小值"+(s.limit?`(min:${s.limit[0]})`:""),placement:"bottom"},{default:d(()=>[g(i,{class:ha(s.controls?"w-105px":"w-65px"),modelValue:a.value[0],"onUpdate:modelValue":l[0]||(l[0]=f=>a.value[0]=f),min:s.limit?s.limit[0]:void 0,max:c(n),size:"small",controls:s.controls,onChange:l[1]||(l[1]=f=>o()),disabled:s.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"]),l[4]||(l[4]=$(" ~ ")),g(u,{effect:"dark",content:"最大值"+(s.limit?`(max:${s.limit[1]})`:""),placement:"bottom"},{default:d(()=>[g(i,{class:ha(s.controls?"w-105px":"w-65px"),modelValue:a.value[1],"onUpdate:modelValue":l[2]||(l[2]=f=>a.value[1]=f),min:c(t),max:s.limit?s.limit[1]:void 0,size:"small",controls:s.controls,onChange:l[3]||(l[3]=f=>o()),disabled:s.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"])],4)],4)}}}),wy={class:"suggestion-item"},xy={class:"tip"},Sy=W({__name:"DirInput",props:Ue({label:{type:String,default:""},suffix:{type:String,default:""},prefix:{type:String,default:""},verify:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=ze(e,"modelValue"),n=S(!0),a=e,s=K([]),o=(i,u)=>{const f=i?s.filter(p=>p.value.includes(i)||p.label.includes(i)):s;u(f)};Ae(async()=>{const i=Q(),u=i.envSetting.workDir,f=i.envSetting.screenshotSavePath;await Je.getInstallDir(),s.push({label:"工作目录",value:u}),s.push({label:"截图路径",value:f})});const r=i=>{t.value=i.value};pe(t,async()=>{a.verify&&(n.value=await ft(t.value))});const l=async()=>{{t.value="E:\\playground\\";return}};return(i,u)=>{const f=Te,p=me,v=Mt,h=Ca,w=ne;return b(),I("div",null,[a.label!==""&&a.label.length>10?(b(),T(f,{key:0,style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[$(E(a.label),1)]),_:1},8,["style"])):q("",!0),g(h,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=M=>t.value=M),"fetch-suggestions":o,size:"small",onSelect:r,disabled:a.disabled},Pa({append:d(()=>[g(p,{onClick:l},{default:d(()=>u[1]||(u[1]=[$("选择路径")])),_:1})]),default:d(({item:M})=>[x("div",wy,[g(f,null,{default:d(()=>[$(E(M.value),1)]),_:2},1024),g(v,{size:"small"},{default:d(()=>[$(E(M.label),1)]),_:2},1024)])]),_:2},[a.label!==""&&a.label.length<=10?{name:"prepend",fn:d(()=>[g(f,{style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[$(E(a.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),St(x("div",xy,[g(w,{color:"red"},{default:d(()=>u[2]||(u[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),g(v,{type:"danger"},{default:d(()=>u[3]||(u[3]=[$("该路径无效，请检查路径填写是否有误，请检查路径填写是否有误")])),_:1})],512),[[Tt,!c(n)]])])}}}),Ty=Z(Sy,[["__scopeId","data-v-424cac38"]]),My={class:"fr-slider"},$y={class:"data-area"},ky=W({__name:"SliderInput",props:Ue({label:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:Number,default:100},disabled:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},controls:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=ze(e,"modelValue"),n=e,a=r=>{const l=(""+r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return l?Math.max(0,(l[1]?l[1].length:0)-(l[2]?+l[2]:0)):0},s=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)+Math.round(n.step*r))/r},o=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)-Math.round(n.step*r))/r};return(r,l)=>{const i=Te,u=ne,f=me,p=hr;return b(),I("div",My,[n.label&&!n.hideLabel?(b(),T(i,{key:0,class:"label"},{default:d(()=>[$(E(n.label),1)]),_:1})):q("",!0),x("div",$y,[g(i,{"mr-10px":""},{default:d(()=>[$(E(t.value),1)]),_:1}),n.controls?(b(),T(f,{key:0,link:"",size:"small",disabled:t.value<=n.min,onClick:o,type:"danger"},{default:d(()=>[g(u,null,{default:d(()=>l[1]||(l[1]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0),g(p,{style:ie({width:n.label?n.width+"px":"100%"}),modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=v=>t.value=v),min:n.min,max:n.max,step:n.step,disabled:n.disabled},null,8,["style","modelValue","min","max","step","disabled"]),n.controls?(b(),T(f,{key:1,link:"",size:"small",disabled:t.value>=n.max,onClick:s,type:"primary"},{default:d(()=>[g(u,null,{default:d(()=>l[2]||(l[2]=[x("span",{"i-mdi-plus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0)])])}}}),Iy=Z(ky,[["__scopeId","data-v-18b77570"]]),Py={class:"card"},Cy={class:"title"},Fy={class:"title-btns"},Ay={class:"content"},Oy={class:"line"},Dy={class:"line"},Ry=W({__name:"RectInput",props:Ue({targetSrc:{type:String,default:""},disabled:{type:Boolean,default:!1}},{modelValue:{required:!1,default:{x:0,y:0,width:0,height:0}},modelModifiers:{}}),emits:["update:modelValue"],setup(e){He(l=>({"6a3ece84":c(t)}));const{oppositeBgColor:t}=tt(),n=ze(e,"modelValue"),a=()=>{try{Ju(n.value),G({title:"复制成功",message:"已复制到剪贴板",type:"success",position:"bottom-right"})}catch(l){G({title:"复制失败",message:JSON.stringify(l),type:"error",position:"bottom-right"})}},s=e,o=async()=>{try{let{value:l}=await $a.prompt("格式：x,y,width,height，例如：0,0,100,100","快速填入参数",{inputValue:""});if(l=l.replace(/\s/g,""),l.length>0){let i=l.split(",");if(i.length!==4&&(i=l.split("，"),i.length!==4)){G({title:"参数格式错误",message:"请按照格式填写参数",type:"error",position:"bottom-right"});return}n.value.x=parseInt(i[0]),n.value.y=parseInt(i[1]),n.value.width=parseInt(i[2]),n.value.height=parseInt(i[3])}}catch{}},r=async()=>{try{if(s.targetSrc&&s.targetSrc!==""){const l=await O.getImgRectInfo(s.targetSrc);n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height}else{const l=await O.getScreenRectInfo();n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height;return}}catch(l){console.error(l)}};return(l,i)=>{const u=Te,f=me,p=It;return b(),I("div",Py,[x("div",Cy,[g(u,null,{default:d(()=>[$("截取"+E(s.targetSrc.trim().length===0?"屏幕":"图片")+"指定位置",1)]),_:1}),x("div",Fy,[g(f,{disabled:s.disabled,size:"small",onClick:o},{default:d(()=>i[4]||(i[4]=[$("填入参数")])),_:1},8,["disabled"]),g(f,{disabled:s.disabled,size:"small",onClick:a},{default:d(()=>i[5]||(i[5]=[$("复制参数")])),_:1},8,["disabled"]),g(f,{disabled:s.disabled,size:"small",onClick:r},{default:d(()=>i[6]||(i[6]=[$("截取屏幕矩形")])),_:1},8,["disabled"])])]),x("div",Ay,[x("div",Oy,[g(p,{disabled:s.disabled,size:"small",modelValue:n.value.x,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value.x=v),modelModifiers:{number:!0}},{prepend:d(()=>i[7]||(i[7]=[$("x")])),_:1},8,["disabled","modelValue"]),g(p,{disabled:s.disabled,size:"small",modelValue:n.value.y,"onUpdate:modelValue":i[1]||(i[1]=v=>n.value.y=v),modelModifiers:{number:!0}},{prepend:d(()=>i[8]||(i[8]=[$("y")])),_:1},8,["disabled","modelValue"])]),x("div",Dy,[g(p,{disabled:s.disabled,size:"small",modelValue:n.value.width,"onUpdate:modelValue":i[2]||(i[2]=v=>n.value.width=v),modelModifiers:{number:!0}},{prepend:d(()=>i[9]||(i[9]=[$("width(宽)")])),_:1},8,["disabled","modelValue"]),g(p,{disabled:s.disabled,size:"small",modelValue:n.value.height,"onUpdate:modelValue":i[3]||(i[3]=v=>n.value.height=v),modelModifiers:{number:!0}},{prepend:d(()=>i[10]||(i[10]=[$("height(高)")])),_:1},8,["disabled","modelValue"])])])])}}}),Ey=Z(Ry,[["__scopeId","data-v-8240fca1"]]),Vy={class:"file-input-content"},Ly={class:"suggestion-item"},Ny={class:"tip"},jy={flex:"","flex-items-center":"","flex-row":""},Uy={class:"path-content"},zy=W({__name:"FileInput",props:Ue({label:{type:String,default:""},verify:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelPos:{type:String,default:"center"},multipleLabelPos:{type:String,default:"left"}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=K([]),a=(p,v)=>{const h=p?n.filter(w=>w.value.includes(p)||w.label.includes(p)):n;v(h)};Ae(async()=>{const p=Q(),v=p.envSetting.workDir,h=p.envSetting.screenshotSavePath;await Je.getInstallDir(),n.push({label:"工作目录",value:v}),n.push({label:"截图路径",value:h})});const s=ze(e,"modelValue"),o=p=>{s.value=p.value},r=p=>{t.disabled||s.value.splice(s.value.indexOf(p),1)},l=K([]),i=S(!0),u=async()=>{{s.value=t.multiple?["E:\\playground\\file1","E:\\playground\\file2"]:"E:\\playground\\file1";return}},f=()=>{s.value=[]};return pe(s,async()=>{if(t.verify)if(typeof s.value=="string")i.value=await ft(s.value);else{l.splice(0,l.length);for(const p of s.value)await ft(p)||l.push(p)}}),(p,v)=>{const h=Te,w=me,M=Mt,F=Ca,R=ne;return b(),I("div",Vy,[typeof s.value=="string"?(b(),I(ae,{key:0},[t.label!==""&&t.label.length>10?(b(),T(h,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[$(E(t.label),1)]),_:1},8,["style"])):q("",!0),g(F,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=N=>s.value=N),"fetch-suggestions":a,size:"small",onSelect:o,disabled:t.disabled},Pa({append:d(()=>[g(w,{onClick:u},{default:d(()=>v[1]||(v[1]=[$("选择文件")])),_:1})]),default:d(({item:N})=>[x("div",Ly,[g(h,null,{default:d(()=>[$(E(N.value),1)]),_:2},1024),g(M,{size:"small"},{default:d(()=>[$(E(N.label),1)]),_:2},1024)])]),_:2},[t.label!==""&&t.label.length<=10?{name:"prepend",fn:d(()=>[g(h,{style:ie({color:c(i)?void 0:"red"})},{default:d(()=>[$(E(t.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),St(x("div",Ny,[g(R,{color:"red"},{default:d(()=>v[2]||(v[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),g(M,{type:"danger"},{default:d(()=>v[3]||(v[3]=[$("该路径无效，请检查路径填写是否有误")])),_:1})],512),[[Tt,!c(i)]])],64)):(b(),I(ae,{key:1},[x("div",{flex:"","flex-row":"","flex-items-center":"","justify-between":"",style:ie({flexDirection:t.multipleLabelPos==="left"?"row":"column",alignItems:t.multipleLabelPos==="left"?"center":"flex-start"})},[t.label!==""?(b(),T(h,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[$(E(t.label),1)]),_:1},8,["style"])):q("",!0),x("div",jy,[g(w,{type:"primary",class:"w-100",size:"small",onClick:u,disabled:t.disabled},{default:d(()=>v[4]||(v[4]=[$(" +选择文件 ")])),_:1},8,["disabled"]),g(w,{class:"w-100",size:"small",onClick:f,disabled:t.disabled},{default:d(()=>v[5]||(v[5]=[$(" x清空已选 ")])),_:1},8,["disabled"])])],4),x("div",Uy,[(b(!0),I(ae,null,ge(s.value,N=>(b(),T(M,{class:"tag",key:N,size:"small",type:c(l).includes(N)?"danger":"success",closable:"","disable-transitions":!1,onClose:le=>r(N)},{default:d(()=>[$(E(N),1)]),_:2},1032,["type","onClose"]))),128))])],64))])}}}),By=Z(zy,[["__scopeId","data-v-86bedacb"]]),qy={key:0,class:"dynamics-input"},Ky={key:0,class:"label"},Gy=W({__name:"DynamicsInput",props:{name:{type:String,required:!0},argName:{type:String,required:!0},onlyTest:{type:Boolean,default:!1},noTest:{type:Boolean,default:!1},value:{type:[String,Number,Boolean,Object,Array],required:!0},disabled:{type:Boolean,default:!1}},setup(e){He(h=>({"1909de0c":c(v),"6e372a5f":c(i)}));const{dynamicDialog:t}=et(),n=ce(),a=["input","FileInput","DirInput","slider"],s=["input","FileInput","DirInput","RectInput"],o=h=>{const w=l.value?.selectOptionSeparator;if(typeof h=="number"||!w)return{label:h,value:h};const M=h.split(w);return{label:M[0],value:M[1]||M[0]}},r=e,l=A(()=>{const h=_().find(w=>w.name===r.name)?.testModule;if(h){const w=h.dialog;return w.args?.forEach(M=>{M?.options&&typeof M.options=="function"&&(M.options=M.options(n))}),w.args.find(M=>M.name===r.argName)}}),i=A(()=>{const h=l.value;return h&&s.includes(h.componentType)?"block":"flex"}),u=A(()=>{const h=l.value?.targetSrc,w=_().find(M=>M.name===r.name)?.testModule;if(w&&h){const F=w.dialog.args.find(R=>R.name===h);if(F)return F.value}return""}),f=A(()=>{const h=l.value?.displayCondition;if(h?.length){const w=_().find(M=>M.name===r.name)?.testModule;if(w){const M=w.dialog;for(let F of h){const R=M.args.find(N=>N.name===F)?.value;if(R===void 0||!R)return!1}return!0}return console.error(`未找到${r.name}的测试模块`),!1}else return!0}),p=S(r.value);pe(()=>r.value,h=>{p.value=h}),pe(p,(h,w)=>{if(h===0&&w===null)return;const M=["input","select","FileInput","DirInput"],F=l.value?.componentType;h===null&&(l.value?.componentType==="numberInput"?(h=0,p.value=0):F&&M.includes(F)?(h="",p.value=""):l.value?.componentType==="RectInput"&&(h={x:0,y:0,width:0,height:0},p.value={x:0,y:0,width:0,height:0}));let R;const le=_().find(ee=>ee.name===r.name);if(le&&(R=le),R){const ee=R.testModule?.dialog;ee&&ee.args?.forEach(Y=>{Y.options&&typeof Y.options=="function"&&(Y.options=Y.options(n))});const se=ee?.args.find(Y=>Y.name===r.argName);se&&(se.value=h)}});const{appBackground:v}=tt();return(h,w)=>{const M=br,F=vr,R=By,N=Ey,le=Iy,ee=_r,se=Ty,Y=Ia,ye=It,ue=_y;return c(t).title===e.name&&c(f)?St((b(),I("div",qy,[c(l)?.label&&!a.includes(c(l).componentType)?(b(),I("span",Ky,E(c(l).label),1)):q("",!0),c(l)&&c(l).componentType==="select"?(b(),T(F,{key:1,class:"input",modelValue:c(p),"onUpdate:modelValue":w[0]||(w[0]=k=>re(p)?p.value=k:null),filterable:"",multiple:c(l).multiple,clearable:c(l).multiple,"allow-create":!c(l).notAllowCreate,"default-first-option":"",placeholder:c(l).placeholder||"请选择"},{default:d(()=>[(b(!0),I(ae,null,ge(c(l).options,k=>(b(),T(M,{key:k,label:o(k).label,disabled:e.disabled,value:o(k).value},null,8,["label","disabled","value"]))),128))]),_:1},8,["modelValue","multiple","clearable","allow-create","placeholder"])):c(l)&&c(l).componentType==="FileInput"&&(typeof c(p)=="string"||Array.isArray(c(p)))?(b(),T(R,{key:2,modelValue:c(p),"onUpdate:modelValue":w[1]||(w[1]=k=>re(p)?p.value=k:null),disabled:e.disabled,label:c(l).label,verify:c(l).verifyPath,multiple:c(l).multiple},null,8,["modelValue","disabled","label","verify","multiple"])):c(l)&&c(l).componentType==="RectInput"&&typeof c(p)=="object"?(b(),T(N,{key:3,modelValue:c(p),"onUpdate:modelValue":w[2]||(w[2]=k=>re(p)?p.value=k:null),disabled:e.disabled,"target-src":c(u)},null,8,["modelValue","disabled","target-src"])):c(l)&&c(l).componentType==="slider"&&typeof c(p)=="number"?(b(),T(le,{key:4,modelValue:c(p),"onUpdate:modelValue":w[3]||(w[3]=k=>re(p)?p.value=k:null),disabled:e.disabled,max:c(l).range?.max,min:c(l).range?.min,step:c(l).range?.step,label:c(l).label,size:"small"},null,8,["modelValue","disabled","max","min","step","label"])):c(l)&&c(l).componentType==="switch"&&typeof c(p)=="boolean"?(b(),T(ee,{key:5,modelValue:c(p),"onUpdate:modelValue":w[4]||(w[4]=k=>re(p)?p.value=k:null),disabled:e.disabled,"active-text":c(l).activeText||"是","inactive-text":c(l).inactiveText||"否",size:"small"},null,8,["modelValue","disabled","active-text","inactive-text"])):c(l)&&c(l).componentType==="DirInput"&&typeof c(p)=="string"?(b(),T(se,{key:6,modelValue:c(p),"onUpdate:modelValue":w[5]||(w[5]=k=>re(p)?p.value=k:null),disabled:e.disabled,label:c(l).label,suffix:c(l).suffix||"",verify:c(l).verifyPath},null,8,["modelValue","disabled","label","suffix","verify"])):c(l)&&c(l).componentType==="numberInput"&&typeof c(p)=="number"?(b(),T(Y,{key:7,class:"input",modelValue:c(p),"onUpdate:modelValue":w[6]||(w[6]=k=>re(p)?p.value=k:null),disabled:e.disabled,"value-on-clear":0,size:"small"},null,8,["modelValue","disabled"])):c(l)&&c(l).componentType==="input"&&typeof c(p)=="string"?(b(),T(ye,{key:8,modelValue:c(p),"onUpdate:modelValue":w[7]||(w[7]=k=>re(p)?p.value=k:null),disabled:e.disabled,size:"small"},{prepend:d(()=>[$(E(c(l).label),1)]),_:1},8,["modelValue","disabled"])):c(l)&&c(l).componentType==="numberRangeInput"&&typeof c(p)=="object"?(b(),T(ue,{key:9,modelValue:c(p),"onUpdate:modelValue":w[8]||(w[8]=k=>re(p)?p.value=k:null),disabled:e.disabled},null,8,["modelValue","disabled"])):q("",!0)],512)),[[Tt,(!e.onlyTest||e.onlyTest&&c(t).callType==="test")&&!(e.noTest&&c(t).callType==="test")]]):q("",!0)}}}),Jy=Z(Gy,[["__scopeId","data-v-f5836922"]]),Wy=W({__name:"FillApiParamDialog",setup(e){const{dynamicDialog:t,builtInApiTestModules:n}=et(),a=ce(),s=A(()=>{const o=n.value;return o.forEach(r=>{r?.dialog.args?.forEach(l=>{l.options&&typeof l.options=="function"&&(l.options=l.options(a))})}),o});return(o,r)=>{const l=Jy,i=by;return b(),T(i,{modelValue:c(t).show,"onUpdate:modelValue":r[0]||(r[0]=u=>c(t).show=u),title:c(t).title,content:c(t).content,callback:c(t).callback,isTestModule:!0},{element:d(()=>[(b(!0),I(ae,null,ge(c(s),u=>(b(),I("div",null,[(b(!0),I(ae,null,ge(u?.dialog?.args,f=>(b(),T(l,{key:u.dialog?.targetMethodName+f.name,name:u.dialog?.targetMethodName||"",argName:f.name,value:f.value,"only-test":!!f.onlyTest,"no-test":!!f.noTest},null,8,["name","argName","value","only-test","no-test"]))),128))]))),256))]),_:1},8,["modelValue","title","content","callback"])}}}),Yy=W({__name:"Tours",setup(e){const{tourInfo:t,currentTourName:n}=Vn(),a=S(0),s=A(()=>Object.keys(t)),o=A(()=>s.value.map(i=>t[i])),r=i=>{const u=t[n.value];if((i>u.step&&u.preventNext||i<u.step&&u.preventPrevious)&&!u.doneSteps.includes(a.value)){oe.warning("请先完成当前步骤"),Ke(()=>{a.value--});return}const f=u.steps[i]?.onShow;f&&f(),u.step=i,u.preventNext=u.steps[i]?.preventNext||!1,u.preventPrevious=u.steps[i]?.preventPrevious||!1},l=()=>{const i=t[n.value];i.touring=!1,i.step=0,i.doneSteps.splice(0)};return pe(()=>t[n.value]?.step,()=>{const i=t[n.value]?.step;i&&Ke(()=>a.value=i)}),Ae(()=>{t[n.value].preventNext=t[n.value].steps[0]?.preventNext||!1}),(i,u)=>{const f=wr,p=xr;return b(),I("div",null,[(b(!0),I(ae,null,ge(c(o),(v,h)=>(b(),T(p,{key:h,modelValue:v.touring,"onUpdate:modelValue":w=>v.touring=w,current:c(a),"onUpdate:current":u[0]||(u[0]=w=>re(a)?a.value=w:null),onFinish:l,onClose:l,onChange:r},{default:d(()=>[(b(!0),I(ae,null,ge(v.steps,(w,M)=>(b(),T(f,{key:M,target:w.target,title:w.title,description:w.description},null,8,["target","title","description"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","current"]))),128))])}}}),Xy=Qt("globalShortcuts",{state:()=>({allShortcuts:[{shortcuts:"Ctrl+Shift+A",onlyDescription:"运行脚本"},{shortcuts:"Ctrl+Shift+D",onlyDescription:"重新初始化脚本"},{shortcuts:"Ctrl+Shift+S",onlyDescription:"强制停止脚本"},{shortcuts:"Ctrl+Alt+Shift+Home",onlyDescription:"强制显示主窗口"},{shortcuts:"Alt+Shift+C",onlyDescription:"记录鼠标位置及颜色"}]}),getters:{},actions:{updateShortcuts(e,t){this.allShortcuts.find(n=>n.onlyDescription===e).shortcuts=t},getShortcuts(e){return this.allShortcuts.find(t=>t.onlyDescription===e).shortcuts},exportData(){return JSON.stringify(this.allShortcuts)},importData(e){const t=JSON.parse(e);if(t instanceof Array){const n=[...this.allShortcuts];for(let a=0;a<t.length;a++){const s=t[a],o=n.find(r=>r.onlyDescription===s.onlyDescription);o&&(o.shortcuts=s.shortcuts)}this.$patch({allShortcuts:t})}},init(){this.$subscribe((e,t)=>{e.storeId==="globalShortcuts"&&localStorage.setItem("globalShortcuts",this.exportData())},{detached:!1}),window.localStorage.getItem("globalShortcuts")&&this.importData(window.localStorage.getItem("globalShortcuts"))}}}),Hy={class:"app"},Zy={class:"common-layout"},Qy=W({__name:"App",setup(e){He(j=>({"4e483aea":c(B),"28d17502":c(te),"2115d389":c(h),"59754b44":c(i),"75fb8f90":c(u),"6d70b271":c(f),a48b949e:c(p),e470f1fc:c(F),"1da15f4c":c(M),"55b7b7d9":c(Y),"2308f473":c(ee),e01b094e:c(le),f851253e:c(v)}));const{registerAllInvokeApi:t}=et(),{isMainWindow:n,menuKey:a}=xt(),s=Q(),o=ce();Xy();const{app:r}=Ze(s),l=Sr(),{borderRadius:i,appOpacity:u,borderColor:f,appTransform:p,appAsideBgColor:v,appBackground:h}=tt(),{isEditing:w}=Fe(),M=A(()=>w.value?"calc(100% - 35px)":"calc(100% - 40px)"),F=A(()=>w.value?"35px":"40px"),{info:R,syncWindowInnerWidth:N}=At(),{contentTransform:le,asideBarPos:ee}=Fe(),se=(j,D=!1)=>{j==="setting"&&zt.checkDepUpdate(),r.value.state.aside.currentItem=j,j==="script"&&(D?j="scriptList":j=l.currentRoute.value.name||"scriptList"),l.replace({name:j}),R.showContentType=j,setTimeout(()=>{if(r.value.state.aside.collapsed){const ke=l.currentRoute.value.meta;R.title=ke.title}else R.title="风染脚本"},200)},Y=A(()=>r.value.state.aside.collapsed?"40px":"97px"),ye=async(j=!0)=>{j&&window.addEventListener("resize",()=>{N(window.innerWidth),(window.innerWidth<800&&!r.value.state.aside.collapsed||window.innerWidth>=800&&r.value.state.aside.collapsed)&&ue()}),await s.init(),await o.init(),se(r.value.state.aside.currentItem),zt.checkDepUpdate()};Ae(async()=>{Nu();{ye(),await t();return}}),ka(()=>{});const ue=()=>{r.value.state.aside.collapsed=!r.value.state.aside.collapsed,se(r.value.state.aside.currentItem)},{appVersionInfo:k,goDownloadNewApp:y}=qf();Tr(()=>{});const{appWidth:B,appHeight:te}=xt();return(j,D)=>{const ke=Yy,De=Wy,X=my,nt=ry,Re=ne,L=me,Ds=$t,pa=kr,Rs=Ir,Es=Pr,ma=Mr("router-view"),Vs=Cr,Ls=$r,Ns=kt;return b(),I("div",Hy,[g(ke),g(De),g(X),c(n)?(b(),I(ae,{key:0},[g(nt),x("div",Zy,[g(Ls,null,{default:d(()=>[g(Es,{class:"aside"},{default:d(()=>[g(Ds,{effect:"dark",content:c(r).state.aside.collapsed?"展开":"折叠",placement:"right"},{default:d(()=>[c(r).state.aside.collapsed?(b(),T(L,{key:0,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[g(Re,null,{default:d(()=>D[3]||(D[3]=[x("span",{"i-solar-alt-arrow-right-linear":""},null,-1)])),_:1})]),_:1})):(b(),T(L,{key:1,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[g(Re,null,{default:d(()=>D[4]||(D[4]=[x("span",{"i-solar-alt-arrow-left-linear":""},null,-1)])),_:1})]),_:1}))]),_:1},8,["content"]),(b(),T(Rs,{collapse:c(r).state.aside.collapsed,"collapse-transition":!1,"popper-effect":"dark",class:"el-menu-vertical","default-active":c(r).state.aside.currentItem,key:c(a),onSelect:D[0]||(D[0]=V=>se(V,!0))},{default:d(()=>[x("div",null,[(b(!0),I(ae,null,ge(c(gp),V=>(b(),T(pa,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[$(E(V.meta.title),1)]),default:d(()=>[g(Re,null,{default:d(()=>[(b(),T(at(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))]),D[5]||(D[5]=x("div",{"data-tauri-drag-region":"",style:{flex:"1",cursor:"move"}},null,-1)),x("div",null,[(b(!0),I(ae,null,ge(c(fp),V=>(b(),T(pa,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[$(E(V.meta.title),1)]),default:d(()=>[g(Re,null,{default:d(()=>[(b(),T(at(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))])]),_:1},8,["collapse","default-active"]))]),_:1}),g(Vs,{class:"app-main"},{default:d(()=>[g(ma,null,{default:d(({Component:V})=>[g(yt,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(b(),T(at(V)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),g(Ns,{modelValue:c(k).openDialog,"onUpdate:modelValue":D[2]||(D[2]=V=>c(k).openDialog=V),title:"版本更新v"+c(k).version,class:"version-update-dialog"},{footer:d(()=>[x("div",null,[g(L,{type:"info",size:"small",onClick:D[1]||(D[1]=V=>c(k).openDialog=!1)},{default:d(()=>D[6]||(D[6]=[$("取消")])),_:1}),(b(!0),I(ae,null,ge(c(k).downloadUrl,V=>(b(),T(L,{size:"small",key:V.origin,type:"primary",onClick:nh=>c(y)(V)},{default:d(()=>[$(E(V.origin)+"下载",1)]),_:2},1032,["onClick"]))),128))])]),default:d(()=>[x("div",null,E(c(k).desc),1)]),_:1},8,["modelValue","title"])],64)):(b(),T(ma,{key:1},{default:d(({Component:V})=>[g(yt,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(b(),T(at(V)))]),_:2},1024)]),_:1}))])}}}),eh=Z(Qy,[["__scopeId","data-v-2a3ec981"]]),th=Fr(),da=Ar(eh);da.use(th);da.use(we);da.mount("#app");Vp.setProductionErrorReport();export{Ad as $,m as A,ea as B,P as C,sh as D,ff as E,fd as F,Uo as G,ms as H,Ge as I,ns as J,as as K,C as L,_ as M,xt as N,lh as O,py as P,Dn as Q,Vu as R,Yt as S,Cd as T,rp as U,rh as V,Bo as W,Aa as X,el as Y,Ey as Z,Z as _,Fe as a,Iy as a0,by as a1,zt as a2,qf as a3,At as b,ce as c,Oe as d,Vn as e,fe as f,oh as g,Nr as h,O as i,Vt as j,Q as k,Jg as l,et as m,Lr as n,gd as o,Je as p,wt as q,we as r,ih as s,_y as t,tt as u,By as v,Ty as w,Xy as x,yd as y,ls as z};
