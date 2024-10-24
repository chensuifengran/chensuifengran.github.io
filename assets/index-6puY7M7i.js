const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ScriptConsole-Dmw12QeO.js","assets/.pnpm-D_Vtnb2u.js","assets/.pnpm-BUzDz38E.css","assets/ScriptConsole-B-Iyd_U_.css","assets/ScriptList-Cb_x1hTd.js","assets/CodeIcon-CsNz3DyQ.js","assets/ScriptList-CvOZ_rrq.css","assets/CodeEditor-CN8JZXB_.js","assets/Loading-DCXEh-gF.js","assets/Loading-CTAAG0As.css","assets/fs-CyUQNRAQ.js","assets/CodeEditor-CH30BdBU.css","assets/ScriptSetting-Biyd9sOS.js","assets/ScriptSetting-BlfMxEEc.css","assets/ScriptRunConsole-CicZy7Uo.js","assets/InfoIcon.vue_vue_type_script_setup_true_lang-BFV4540b.js","assets/ScriptRunConsole-BN7rLSPl.css","assets/APITest-DsbtoJ_y.js","assets/dataStructure-BBA1BeD_.js","assets/dataStructure-C5M0__id.css","assets/APITest-CPJuWE0k.css","assets/CodeSnippet-CSBWfWpb.js","assets/CodeSnippet-PHriWVYn.css","assets/ScriptProject-B5lyn3G-.js","assets/ScriptProject-Dh7kPXfA.css","assets/SettingPage-C2cOOx74.js","assets/SettingPage-LSCxl0Km.css","assets/Account-B6rn1Rqt.js","assets/Account-BdJeaSaM.css","assets/ScriptRunWindow-DJOkC_nU.js","assets/ScriptRunWindow-DkYR6T9y.css","assets/FloatWindow-D4Kc1cbi.js","assets/FloatWindow-C1t0G91l.css","assets/PointerUtil--yC-1QxK.js","assets/PointerUtil-Dj4369HI.css","assets/Notification-DEHWLpa-.js","assets/Notification-BPpz3X5Q.css","assets/OperationRecordWindow-WZ9fOD7G.js","assets/OperationRecordWindow-xyc7XoBN.css","assets/DepManagerPage-Rnbw_dfG.js","assets/DepManagerPage-UrB1wp_4.css","assets/InvokesManager-96rMrUP3.js","assets/InvokesManager-BPcRu0gc.css","assets/NotFound-D_9cu9jo.js"])))=>i.map(i=>d[i]);
import{d as W,o as b,c as T,w as d,a as x,E as ne,u as Ze,b as fa,r as S,e as A,f as zs,n as Ge,g as Ae,h as Bs,i as I,j as g,k as qe,l as M,t as E,m as c,p as me,q as Te,_ as U,s as qs,v as Ks,x as Gs,y as ya,z as Js,A as Ve,B as Ws,C as K,D as G,F as en,G as Ys,H as oe,I as ye,J as ft,K as $e,L as pe,M as Xs,N as Hs,O as Qe,P as ha,W as Zs,Q as Qs,R as Ma,S as zt,T as er,U as tr,V as nr,X as ka,Y as yt,Z as ar,$ as J,a0 as or,a1 as sr,a2 as rr,a3 as lr,a4 as ir,a5 as cr,a6 as ur,a7 as dr,a8 as pr,a9 as Tt,aa as $t,ab as q,ac as Mt,ad as kt,ae as mr,af as Ia,ag as re,ah as ht,ai as ie,aj as ae,ak as It,al as gr,am as Pt,an as fr,ao as yr,ap as ze,aq as Be,ar as hr,as as br,at as ba,au as Pa,av as Ca,aw as Fa,ax as vr,ay as fe,az as _r,aA as wr,aB as xr,aC as Sr,aD as Tr,aE as $r,aF as Mr,aG as kr,aH as Ir,aI as ot,aJ as Pr,aK as Cr,aL as Fr,aM as Ar,aN as Or,aO as Dr}from"./.pnpm-D_Vtnb2u.js";const tn=Object.freeze(Object.defineProperty({__proto__:null,get imgSimilarityApi(){return qg}},Symbol.toStringTag,{value:"Module"}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Rr=W({__name:"ReturnIcon",props:{size:{type:String,default:"large"}},setup(e){return(t,n)=>{const a=ne;return b(),T(a,{size:e.size},{default:d(()=>n[0]||(n[0]=[x("span",{"i-solar-undo-left-bold":""},null,-1)])),_:1},8,["size"])}}}),Er=["data-tauri-drag-region"],Vr={class:"content"},Lr={id:"header-extra",ref:"extra"},Nr=W({__name:"CommonHeader",props:{allowDrag:{type:Boolean,default:!0},title:{type:String,default:""},height:{type:[String,Number],default:40}},emits:["back"],setup(e,{emit:t}){Ze(v=>({"3065db3f":c(i),"2616b538":c(r),"8f6d3c14":c(s),"4ca5d9ad":c(l)}));const n=fa("header-wrap"),a=fa("extra"),s=S("auto"),o=e,r=A(()=>typeof o.height=="string"?o.height:o.height+"px"),l=A(()=>o.allowDrag?"none":"all"),i=A(()=>o.allowDrag?"move":"auto"),u=t,f=()=>u("back"),p=()=>{const v=n.value?.offsetWidth||0,h=a.value?.offsetWidth||0;s.value=Math.floor(v-h-10)+"px"};return zs(()=>{Ge(p)}),Ae(()=>{p(),window.addEventListener("resize",p)}),Bs(()=>{window.removeEventListener("resize",p)}),(v,h)=>{const w=Rr,$=me,F=Te;return b(),I("div",{ref:"header-wrap",class:"header-wrap","w-full":"",flex:"","flex-row":"","items-center":"","justify-between":"","box-border":"","data-tauri-drag-region":o.allowDrag},[x("div",Vr,[g($,{class:"btn-return",link:"",onClick:f},{default:d(()=>[g(w)]),_:1}),h[0]||(h[0]=x("div",{class:"line"},null,-1)),qe(v.$slots,"before",{},void 0,!0),g(F,{truncated:""},{default:d(()=>[M(E(o.title),1)]),_:1}),qe(v.$slots,"after",{},void 0,!0)]),x("div",Lr,[qe(v.$slots,"default",{},void 0,!0)],512)],8,Er)}}}),H=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},jr=H(Nr,[["__scopeId","data-v-14ef234b"]]),Ur=(e="newScript",t="v1.0",n="脚本描述")=>{const s=Object.keys(Object.assign({"../invokes/Preludes/buildForm/index.ts":()=>U(()=>Promise.resolve().then(()=>At),void 0),"../invokes/Preludes/log/index.ts":()=>U(()=>Promise.resolve().then(()=>Dt),void 0),"../invokes/Preludes/sleep/index.ts":()=>U(()=>Promise.resolve().then(()=>Rt),void 0)})).map(o=>o.split("/")[3]);return`//引用类型推断文件，以便在vscode中获得内置api的类型推断
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
`},rh=`//引用类型推断文件，以便在vscode中获得内置api的类型推断
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
`,lh="DEMO_SCRIPT_ITEM",Je=!0,ih=!1,ch=Symbol("headerRefInjectKey"),Aa="47.106.34.210:8711",zr=async(e,t)=>{if(!t)return await ya(e);const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await ya(e,...a)},Br=async(e,t)=>{const n=t.includes("\\");let a=[];return n?a=t.split("\\"):t.includes("/")?a=t.split("/"):a=[t],await Js(e,...a)},qr=async()=>"",We={basename:qs,dirname:Ks,extname:Gs,join:zr,resolve:Br,getInstallDir:qr},Kr={clear:()=>Ve("notify",{type:"clear-message"}),done:()=>Ve("notify",{type:"done"}),init:e=>Ve("notify",{type:"init",payload:e}),end:()=>Ve("notify",{type:"end"}),send:e=>Ve("notify",{type:"message",payload:e}),sendCustom:e=>Ve("notify",{type:"custom-message",payload:e}),listen:async(e,t)=>await Ws("notify",a=>{e(a)},{target:t})},Oa={notify:Kr},Gr=S([]),Jr=K([]),Wr=S("lackDepDownload"),Yr=S(!1),Xr=S([]),Hr=S([]),Zr=async e=>{{G({title:"提示",message:"playground环境不支持依赖管理",type:"warning",position:"bottom-right"});return}},Qr=()=>{},el=()=>{},tl=e=>{},nl=()=>({goInstallDeps:Zr,lackDependence:Jr,activeDrewerName:Wr,allLibsName:Gr,needUpdateDepList:Xr,contentLoading:Yr,depPkgList:Hr,close:el,syncData:tl,syncMainData:Qr}),al=async(e,t)=>{},ol=async e=>[],sl=async e=>[],rl=async()=>"CPU",ll=async(e,t="")=>{},il=async e=>{},cl=async()=>{},ul=async e=>[],dl=async()=>{},pl=async()=>[],ml=async(e,t=!1,n=!1,a="CPU")=>!0,gl=e=>"primary",Bt={libExists:ll,renameLib:al,syncOcrValue:rl,syncDependentVersion:sl,checkDepUpdate:dl,checkDepLack:pl,getAllLibsName:ul,installDep:ml,diffLocalVersionConfig:ol,getDepStateType:gl,pushUpdateDep:il,batchUpdateDep:cl},Z=en("globalSettings",{state:()=>({isInited:!1,app:{latestVersion:"2.0.0",depHaveUpdate:!1,dependenceState:"完整版",state:{aside:{collapsed:!1,currentItem:"script"}},modulesSetting:{autoOpenOutput:!0,drawerSize:"30%"}},envSetting:{workDir:"",screenshotSavePath:"",_screenshotDir:"",_scriptRootDir:"E:\\test\\root_dir"},ocr:{value:"CPU",options:["GPU","CPU"],gpuMemory:1e3},view:{showUpdateInTitleBar:!0},editor:{theme:{value:"跟随全局主题",options:["跟随全局主题","明亮","暗黑"]},runAutoSave:!0}}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),delete e.ocr.inited,JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t);const n=await Bt.syncOcrValue();n&&(t.ocr.value=n),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="globalSettings"&&localStorage.setItem("globalSettings",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("globalSettings");e?await this.importData(e):(this.envSetting.workDir===""&&(this.envSetting.workDir="E:\\playground"),this.envSetting.screenshotSavePath&&(this.envSetting.screenshotSavePath="E:\\playground\\screenshot.png",this.envSetting._screenshotDir="E:\\playground")),this.isInited=!0}}}),fl=S([]),yl=S(""),hl=S(""),bl=S(""),C=()=>({notAllowedFnId:fl,currentScriptDir:yl,runningFnId:hl,currentDevice:bl}),vl=async()=>({width:1920,height:1080}),_l=async()=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),wl=async(e,t,n,a,s,o)=>1,xl=async(e,t,n=-1,a=-1,s=-1,o=-1)=>1,Sl=async(e,t,n=0,a=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),Tl=async(e,t,n,a,s,o)=>({message:"success",data:[{x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080),width:100,height:100,centerX:50,centerY:50,targetOffsetX:0,targetOffsetY:0}]}),$l=async(e,t,n,a,s,o=0,r=0)=>({x:Math.floor(Math.random()*1920),y:Math.floor(Math.random()*1080)}),Ml=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080)}),kl=async e=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),Il=async()=>({width:Math.floor(Math.random()*1920),height:Math.floor(Math.random()*1080),startX:Math.floor(Math.random()*1920),startY:Math.floor(Math.random()*1080)}),Pl=async e=>!0,Cl=async e=>!0,Fl=async e=>!0,Al=async e=>!0,Ol=async e=>!0,Dl=async(e,t,n="left")=>!0,Rl=async(e,t,n="left")=>!0,El=async(e,t,n="left")=>!0,Vl=async(e,t=50,n)=>!0,Ll=async()=>!0,Nl=async(e,t,n,a,s)=>!0,jl=async(e,t,n=!1)=>!0,Ul=async e=>!0,zl=async(e,t,n,a,s)=>({code:1,result:[]}),Bl=async(e=0,t=0)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),ql=async(e,t,n)=>({message:"success",data:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]}),Kl=async(e,t=-1,n=-1,a=-1,s=-1)=>!0,Gl=async(e,t=!1)=>"//playground环境不支持此功能",Jl=async()=>!0,Wl=async()=>({APP_ID:"playground",API_SECRET:"playground",API_KEY:"playground"});Ys("CLOSE_SPLASHSCREEN_FLAG",{defaultValue:!1});const Yl=async()=>{},O={captureOperation:Gl,stopCaptureOperation:Jl,getScreenSize:vl,getMousePos:_l,cropPicture:wl,imgSimilarity:xl,matchTemplate:Sl,screenDiffTemplates:Tl,screenMatchTemplate:$l,getImgSize:Ml,getImgRectInfo:kl,getScreenRectInfo:Il,combined:Pl,keyDown:Cl,keyUp:Fl,pressKey:Al,inputText:Ol,click:Dl,mouseDown:El,mouseUp:Rl,startClicker:Vl,stopClicker:Ll,drag:Nl,move:jl,wheel:Ul,ocr:zl,screenColor:Bl,screenshot:Kl,imgColor:ql,getSparkInfo:Wl,closeSplashscreen:Yl},Da=async(e,t,n=-1,a=-1,s=-1,o=-1,r)=>{const{notAllowedFnId:l}=C();if(r&&l.value.includes(r))return-2;try{return await O.imgSimilarity(e,t,n,a,s,o)}catch(i){return console.error(i),-1}},je=async(e,t)=>{const n={x:e,y:t};if(window[P]?.Mouse?.__NS_DATA__){const a=window[P].Mouse.__NS_DATA__?.baseSize,s=window[P].Mouse.__NS_DATA__?.randomOffset,{width:o,height:r}=await O.getScreenSize();if(a!==void 0&&(n.x=Math.round(n.x*a[0]/o),n.y=Math.round(n.y*a[1]/r)),s!==void 0){const[l,i]=s[0];l===0&&i===0||(n.x+=Math.round(l+Math.random()*(i-l)));const[u,f]=s[1];u===0&&f===0||(n.y+=Math.round(u+Math.random()*(f-u)))}}return n},Ct=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await je(e,t);return await O.click(o.x,o.y,n)}catch(o){return console.error("clickFnError:",o),!1}},Ft=async(e,t,n)=>"touch ok";class nn{x;y;constructor(t,n){this.x=t,this.y=n}async click(){await Ct(this.x,this.y)}async touch(){return await Ft(this.x,this.y)}}const Ra=async(e,t,n=0,a=0,s)=>{const{notAllowedFnId:o}=C();if(!(s&&o.value.includes(s)))try{const{x:r,y:l}=await O.matchTemplate(e,t,n,a);return new nn(r,l)}catch(r){console.error("matchTemplateFnError:",r)}},Ea={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="matchTemplate"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[r]?.value||""));break;case 2:case 3:o.componentType==="slider"&&(o.value=+n[r]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.imgPath)},${m.replaceConstantPath(e.tempPath)},${e.exactValue},${e.scale}`)}},Xl=async(e,t)=>{if(e.replaceCurFnArgs){const u=Ea.parameterReplace(e);return m.apiAutoTip(),u}const{imgPath:n,tempPath:a,exactValue:s,scale:o}=e,{showDetails:r}=t;console.time("matchTemplate耗时");const l=await Ra(n,a,s,o);console.timeEnd("matchTemplate耗时");const i=_().find(u=>u.name==="matchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.matchTemplate("${n.replace(/\\/g,"\\\\")}", "${a.replace(/\\/g,"\\\\")}", ${s}, ${o});`,r(JSON.stringify(l),"matchTemplate")},Hl={howToUse:`
      匹配模板图片在原图中的坐标
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则x=-1,y=-1。
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标。
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回x=-1,y=-1。
      `,params:[{name:"imgPath",required:!0,instructions:"待匹配图片路径",type:"string",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`const matchUtil = 
    await CV.matchTemplate('E:\\\\image.png', 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","匹配"],codeSnippet:"const matchUtil = await CV.matchTemplate('${1:imgPath}', '${2:tempPath}', ${3:exactValue}, ${4:scale});"},Zl={title:"图片模板匹配",targetMethodName:"matchTemplate",content:`
      匹配模板图片在原图中的坐标，返回{x,y}，若匹配失败则返回{-1,-1}
      匹配规则：
      * 开始对两张图片进行校验路径是否有误、两张图片相似度是否<=0，若发生其中一种情况则返回{x:-1,y:-1}
      * 若两张图片有相似度，则进行坐标匹配，接下来看exactValue是否=0,
      * 是则直接返回匹配区域中心坐标，
      * 否则只返回大于等于精确值(exactValue)的匹配结果，对于小于精确值的则返回{x:-1,y:-1}。
      `,args:[{name:"imgPath",componentType:"FileInput",value:"",label:"待匹配图片路径"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},Ql=`
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
`,ei={name:"matchTemplate",scope:"CV",exportFn:{fn:Ra},testModule:{weight:5,dialog:Zl,callback:Xl,document:Hl},declaration:Ql,auxiliary:Ea,helperClass:[nn]},an=Object.freeze(Object.defineProperty({__proto__:null,matchTemplateApi:ei},Symbol.toStringTag,{value:"Module"})),Va=async(e,t,n,a,s,o,r)=>{const{notAllowedFnId:l}=C();if(!(r&&l.value.includes(r)))try{return await O.screenDiffTemplates(e,t,n,a,s.join("|"),o)}catch(i){console.error("screenDiffTemplatesFnError:",i)}},La={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenDiffTemplates"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:let l=o;l.value.x=+n[0]?.value||0,l.value.y=+n[1]?.value||0,l.value.width=+n[2]?.value||0,l.value.height=+n[3]?.value||0;break;case 1:let i=o;i.value=n[4]?.value?.map(u=>m.pathStrReset(u));break;case 2:o.value=+n[5]?.value||0;break;case 3:o.value=n[6]?.value?(n[6]?.value).toUpperCase():"auto";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, [${e.tempPaths.map(t=>`"${m.pathStrProcess(t)}"`).join(",")}], ${e.targetIndex}`)}},ti=async(e,t)=>{if(e.replaceCurFnArgs){const i=La.parameterReplace(e);return m.apiAutoTip(),i}const{range:n,tempPaths:a,targetIndex:s}=e,{showDetails:o}=t;console.time("screenDiffTemplates耗时");const r=await Va(n.x,n.y,n.width,n.height,a,s||0);console.timeEnd("screenDiffTemplates耗时");const l=_().find(i=>i.name==="screenDiffTemplates"&&i.scope==="CV")?.testModule;l.document.example.code=`const res = await CV.screenDiffTemplates(${JSON.stringify(n)}, ["${a.join('","').replace(/\\/g,"\\\\")}"], ${s});`,o(JSON.stringify(r),"screenDiffTemplates")},ni={howToUse:"将屏幕指定范围进行截图与多模板图片进行位置差异对比",params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPaths",required:!0,instructions:"模板图片路径",type:"string[]",default:""},{name:"targetIndex",required:!1,instructions:"主模板图片索引, 其余模板会携带与主模板的位置差异",type:"number",default:"0"}],returnValue:{type:`Promise<{
  x:number;
  y:number;
  width:number;
  height:number;
  centerX:number;
  centerY:number;
  targetOffsetX:number;
  targetOffsetY:number;
 }[] | undefined>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//多模板与主模板的位置差异匹配
const res = await CV.screenDiffTemplates(0, 0, 100, 100, ['E:\\\\template1.png','E:\\\\template2.png'], 0);`},searchKeys:["模板","图片","位置","中心坐标"],codeSnippet:"const res = await CV.screenDiffTemplates(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPaths}', ${6:targetIndex});"},ai={title:"屏幕中多模板的位置差异匹配",targetMethodName:"screenDiffTemplates",content:`
      将屏幕指定范围进行截图与多模板图片进行位置差异对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPaths",componentType:"FileInput",multiple:!0,value:[],label:"模板图片路径"},{name:"targetIndex",componentType:"numberInput",value:0,label:"主模板图片索引, 其余模板会携带与主模板的位置差异"}]},oi=`
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
}[] | undefined>;`,si={name:"screenDiffTemplates",scope:"CV",exportFn:{fn:Va},testModule:{weight:5,dialog:ai,callback:ti,document:ni},declaration:oi,auxiliary:La},on=Object.freeze(Object.defineProperty({__proto__:null,screenDiffTemplatesApi:si},Symbol.toStringTag,{value:"Module"})),Na=async(e,t,n,a,s,o=0,r=0,l)=>{const{notAllowedFnId:i}=C();if(!(l&&i.value.includes(l)))try{const{x:u,y:f}=await O.screenMatchTemplate(e,t,n,a,s,o,r);return new nn(u,f)}catch(u){console.error("screenMatchTemplateFnError:",u)}},ja={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenMatchTemplate"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.componentType==="RectInput"&&(o.value.x=+n[0]?.value||0,o.value.y=+n[1]?.value||0,o.value.width=+n[2]?.value||0,o.value.height=+n[3]?.value||0);break;case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[4]?.value||""));break;case 2:case 3:o.componentType==="slider"&&(o.value=+n[r+3]?.value||0);break;case 4:o.componentType==="select"&&(o.value=n[7]?.value?n[7]?.value?.toUpperCase():"auto");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.range.x}, ${e.range.y}, ${e.range.width}, ${e.range.height}, ${m.replaceConstantPath(e.tempPath)}, ${e.exactValue}, ${e.scale}`)}},ri=async(e,t)=>{if(e.replaceCurFnArgs){const u=ja.parameterReplace(e);return m.apiAutoTip(),u}const{range:n,tempPath:a,exactValue:s,scale:o}=e,{showDetails:r}=t;console.time("screenMatchTemplate耗时");const l=await Na(n.x,n.y,n.width,n.height,a,s,o);console.timeEnd("screenMatchTemplate耗时");const i=_().find(u=>u.name==="screenMatchTemplate"&&u.scope==="CV")?.testModule;i.document.example.code=`const { x, y } = await 
        	CV.screenMatchTemplate(${JSON.stringify(n)}, "${a.replace(/\\/g,"\\\\")}", ${s}, ${o});`,r(JSON.stringify(l),"screenMatchTemplate")},li={howToUse:`
      将屏幕指定范围进行截图与模板图片对比
      `,params:[{name:"x",required:!0,instructions:"截图起点x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截图起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"截图宽度",type:"number",default:""},{name:"height",required:!0,instructions:"截图高度",type:"number",default:""},{name:"tempPath",required:!0,instructions:"模板图片路径",type:"string",default:""},{name:"exactValue",required:!1,instructions:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",type:"number",default:"0"},{name:"scale",required:!1,instructions:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",type:"number",default:"1"}],returnValue:{type:"Promise<MatchUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`
const res = await CV.screenMatchTemplate(0, 0, 100, 100, 'E:\\\\template.png', 0, 1);`},searchKeys:["模板","图片","位置","中心坐标","opencv","cv","截图"],codeSnippet:"const res = await CV.screenMatchTemplate(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:tempPath}', ${6:exactValue}, ${7:scale});"},ii={title:"屏幕模板匹配",targetMethodName:"screenMatchTemplate",content:`
      将屏幕指定范围进行截图与模板图片对比
      `,args:[{name:"range",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"截图范围"},{name:"tempPath",componentType:"FileInput",value:"",label:"模板图片路径"},{name:"exactValue",componentType:"slider",value:0,label:"精确值(=0直接返回匹配结果，否则只返回大于等于精确值的匹配结果，对于小于匹配值的则由回调函数返回{x:-1,y:-1})",range:{min:0,max:1,step:.01}},{name:"scale",componentType:"slider",value:1,label:"缩放倍数(匹配前会把图片缩小scale倍进行匹配，匹配结果会映射scale倍数返回,匹配时间太长可尝试修改本数值)",range:{min:1,max:10,step:.1}}]},ci=`
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
`,ui={name:"screenMatchTemplate",scope:"CV",exportFn:{fn:Na},testModule:{weight:5,dialog:ii,callback:ri,document:li},declaration:ci,auxiliary:ja},sn=Object.freeze(Object.defineProperty({__proto__:null,screenMatchTemplateApi:ui},Symbol.toStringTag,{value:"Module"})),di={howToUse:"读取文件夹内的文件",params:[{name:"path",required:!0,instructions:"文件夹的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件描述对象，fileName为文件或文件夹名称，fileType为文件或者文件夹",type:'Promise<{fileName: string;fileType: "file" | "dir";}[]>'},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const files = await readDir("E://exampleDir");'},searchKeys:["read","fs","dir"],codeSnippet:"${1:const res = }await readDir(${2:'path'});${0:}"},Ua=async(e,t)=>[],za={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="readDir"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break}})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},pi=async(e,t)=>{if(e.replaceCurFnArgs){za.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("readDir耗时");const a=await Ua();console.timeEnd("readDir耗时");const s=_().find(o=>o.name==="readDir"&&o.scope==="FS")?.testModule;s.document.example.code=`const files = await readDir(${n.replace(/\\/g,"\\\\")});`,t.showDetails(JSON.stringify(a),"FS.readDir")},mi={title:"读取文件夹",targetMethodName:"readDir",content:"获取文件夹的所有子文件或子文件夹",args:[{componentType:"DirInput",value:"",suffix:"",verifyPath:!1,desc:"文件夹选择",id:"YS1ux1d9_8FelG1KPOsCn",onlyTest:!1,noTest:!1,name:"path",label:"文件夹路径",displayCondition:[],placeholder:"请输入文件夹路径"}]},gi=`function readDir(
  path: string,
): Promise<{fileName: string;fileType: "file" | "dir";}[]>;
`,fi={scope:"FS",name:"readDir",exportFn:{fn:Ua},testModule:{weight:5,dialog:mi,callback:pi,document:di},declaration:gi,auxiliary:za},rn=Object.freeze(Object.defineProperty({__proto__:null,readDirApi:fi},Symbol.toStringTag,{value:"Module"})),yi={howToUse:"读取文件内容",params:[{name:"path",required:!0,instructions:"文件的绝对路径",type:"string",default:"",children:[]}],returnValue:{instructions:"文件的内容",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const content = await readFile("E://example.txt");'},searchKeys:["fs","read","file"],codeSnippet:"${1:const res = }await readFile(${2:'path'});${0:}"},Ba=async(e,t)=>"",qa={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="readFile"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{r===0&&(o.value=m.pathStrReset(n[r]?.value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},hi=async(e,t)=>{if(e.replaceCurFnArgs){qa.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("readFile耗时");const a=await Ba();console.timeEnd("readFile耗时");const s=_().find(o=>o.name==="readFile"&&o.scope==="FS")?.testModule;s.document.example.code=`const content = await readFile(${n.replace(/\\/g,"\\\\")});`,t.showDetails(JSON.stringify(a),"FS.readFile")},bi={title:"读取文件内容",targetMethodName:"readFile",content:"读取指定路径的文件内容",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"BZSXGSadzZcAtUZm6ePro",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请选择需要读取内容的文件所在路径",multiple:!1}]},vi=`function readFile(
  path: string,
): Promise<string>;
`,_i={scope:"FS",name:"readFile",exportFn:{fn:Ba},testModule:{weight:5,dialog:bi,callback:hi,document:yi},declaration:vi,auxiliary:qa},ln=Object.freeze(Object.defineProperty({__proto__:null,readFileApi:_i},Symbol.toStringTag,{value:"Module"})),wi={howToUse:"将旧路径的文件或文件夹移动到新路径,如果移动的是文件并且新路径已存在则会覆盖",params:[{name:"oldPath",required:!0,instructions:"旧文件(夹)路径",type:"string",default:"",children:[]},{name:"newPath",required:!0,instructions:"新文件(夹)路径",type:"string",default:"",children:[]}],returnValue:{instructions:"是否移动成功",type:"Promise<boolean>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await rename("E://example","E://example1")'},searchKeys:["rename","move","file","dir","fs"],codeSnippet:"${1:const res = }await rename(${2:'oldPath'}, ${3:'newPath'});${0:}"},Ka=async(e,t,n)=>!1,Ga={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="rename"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.oldPath)},${m.replaceConstantPath(e.newPath)}`)}},xi=async(e,t)=>{if(e.replaceCurFnArgs){Ga.parameterReplace(e),m.apiAutoTip();return}const{oldPath:n,newPath:a}=e;console.time("rename耗时");const s=await Ka();console.timeEnd("rename耗时");const o=_().find(r=>r.name==="rename"&&r.scope==="FS")?.testModule;o.document.example.code=`const res = await rename(${n.replace(/\\/g,"\\\\")}, ${a.replace(/\\/g,"\\\\")})`,t.showDetails(JSON.stringify(s),"FS.rename")},Si={title:"路径重命名(移动)",targetMethodName:"rename",content:"将旧路径的文件或文件夹移动到新路径,如果移动的是文件并且新路径已存在则会覆盖",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"n7CsMnN70dq5zh6L4GpEi",onlyTest:!1,noTest:!1,name:"oldPath",label:"旧路径",displayCondition:[],placeholder:"请输入旧文件或文件夹的路径",multiple:!1},{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"YYDoHvWJi76EF9UUJ80MH",onlyTest:!1,noTest:!1,name:"newPath",label:"新路径",displayCondition:[],placeholder:"请输入新文件或新文件夹的路径",multiple:!1}]},Ti=`function rename(
  oldPath: string,
  newPath: string,
): Promise<boolean>;
`,$i={scope:"FS",name:"rename",exportFn:{fn:Ka},testModule:{weight:5,dialog:Si,callback:xi,document:wi},declaration:Ti,auxiliary:Ga},cn=Object.freeze(Object.defineProperty({__proto__:null,renameApi:$i},Symbol.toStringTag,{value:"Module"})),Mi={howToUse:"将文本写入文件",params:[{name:"path",required:!0,instructions:"目标文件的绝对路径",type:"string",default:"",children:[]},{name:"content",required:!0,instructions:"文本内容",type:"string",default:"",children:[]}],returnValue:{instructions:"是否写入成功",type:"Promise<boolean>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await writeFile("E://example.txt", "示例文本");'},searchKeys:["write","fs","file"],codeSnippet:"${1:const res = }await writeFile(${2:'path'}, ${3:'content'});${0:}"},Ja=async(e,t,n)=>(console.error("writeFileFnError: ","writeFileFn is not allowed in playground"),!1),Wa={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="writeFile"&&o.scope==="FS").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break;case 1:o.value=n[r]?.value;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, "${e.content}"`)}},ki=async(e,t)=>{if(e.replaceCurFnArgs){Wa.parameterReplace(e),m.apiAutoTip();return}const{path:n,content:a}=e;console.time("writeFile耗时");const s=await Ja();console.timeEnd("writeFile耗时");const o=_().find(r=>r.name==="writeFile"&&r.scope==="FS")?.testModule;o.document.example.code=`const res = await writeFile(${n.replace(/\\/g,"\\\\")}, ${a.replace(/\\/g,"\\\\")});`,t.showDetails(JSON.stringify(s),"FS.writeFile")},Ii={title:"写入文件",targetMethodName:"writeFile",content:"将文本写入文件",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"Zo8IIjWeA8CmiSbEohXVf",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请输入文件路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"f8BMJ7N3b4yLqZdaMxf3z",onlyTest:!1,noTest:!1,name:"content",label:"内容",displayCondition:[],placeholder:"请输入需要写入文件的内容"}]},Pi=`function writeFile(
  path: string,
  content: string,
): Promise<boolean>;
`,Ci={scope:"FS",name:"writeFile",exportFn:{fn:Ja},testModule:{weight:5,dialog:Ii,callback:ki,document:Mi},declaration:Pi,auxiliary:Wa},un=Object.freeze(Object.defineProperty({__proto__:null,writeFileApi:Ci},Symbol.toStringTag,{value:"Module"})),Fi=async(e=1e3)=>{const t=parseInt(""+e/1e3),n=e%1e3;if(t===0)return new Promise(a=>{const s=setTimeout(()=>{clearTimeout(s),a()},e)});{let a=!1;for(let s=0;s<t;s++)if(await new Promise(o=>{const r=setTimeout(()=>{clearTimeout(r),o()},1e3)}),window[P]&&window[P]?.isStop){a=!0;break}if(!a)return new Promise(s=>{const o=setTimeout(()=>{clearTimeout(o),s()},n)})}},bt={sleep:Fi},Ai=(e,t)=>{const{notAllowedFnId:n}=C();return t&&n.value.includes(t)?!1:bt.sleep(e)},Oi=async(e,t,n)=>{{console.error("playground环境下无法使用：listen");return}},Di={howToUse:"监听快捷键触发，触发后调用回调函数。",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""},{name:"handler",required:!0,instructions:"快捷键触发后的回调函数，参数key为触发的快捷键",type:"ShortcutHandler",default:""}],returnValue:{instructions:"返回一个函数，调用该函数可以取消监听",type:"Promise<(() => Promise<void>) | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const unlisten = await GlobalShortcut.listen(["Alt+S","Alt+R"],(event)=>{console.log(event);});//监听快捷键
//取消监听
if(unlisten){
  await unlisten();
}`},searchKeys:["unlisten","listen","触发","快捷键"],codeSnippet:"const unlisten = await GlobalShortcut.listen(['${1:shortcut}'],(event)=>{${2:}});"},Ri=`
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
`,Ei={name:"listen",scope:"GlobalShortcut",exportFn:{fn:Oi},testModule:{weight:4,dialog:{notOpen:!0,title:"监听快捷键触发",targetMethodName:"listen"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.listen")},document:Di},declaration:Ri},dn=Object.freeze(Object.defineProperty({__proto__:null,listenApi:Ei},Symbol.toStringTag,{value:"Module"})),Vi=async(e,t)=>{{console.error("playground环境下无法使用：unlisten");return}},Li={howToUse:"取消监听快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"需要取消监听的快捷键，如：['Alt+S','Alt+E']",type:"string | string[]",default:""}],returnValue:{instructions:"",type:"Promise<void>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//取消监听多个快捷键
await GlobalShortcut.unlisten(["Alt+S","Alt+R"]);
//取消监听单个快捷键
await GlobalShortcut.unlisten("Alt+S");
`},searchKeys:["unlisten","取消监听","快捷键"],codeSnippet:"await GlobalShortcut.unlisten(['${1:shortcuts}']);"},Ni=`
function unlisten(shortcuts: string | string[]): Promise<void>;
`,ji={name:"unlisten",scope:"GlobalShortcut",exportFn:{fn:Vi},testModule:{weight:4,dialog:{notOpen:!0,title:"取消监听快捷键触发",targetMethodName:"unlisten"},callback:(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","GlobalShortcut.unlisten")},document:Li},declaration:Ni},pn=Object.freeze(Object.defineProperty({__proto__:null,unlistenApi:ji},Symbol.toStringTag,{value:"Module"})),Ya=async(e,t)=>{{console.error("playground环境下无法使用：waitShortcuts");return}},Xa={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="waitShortcuts"&&o.scope==="GlobalShortcut").testModule.dialog;s.args&&s.args[0]&&n.length&&(n[0].type==="string[]"?s.args[0].value=n[0].value.map(o=>o.replace(/[\[\]]/g,"")):s.args[0].value=[n[0].value.replace(/[\[\]]/g,"")])},parameterReplace:e=>{if(typeof e.shortcuts=="string"||e.shortcuts.length===1){const t=typeof e.shortcuts=="string"?e.shortcuts:e.shortcuts[0];e.replaceCurFnArgs(`"${t}"`);return}e.replaceCurFnArgs(`[${e.shortcuts.map(t=>`"${t}"`).join(", ")}]`)}},Ui=async(e,t)=>{if(e.replaceCurFnArgs){const s=Xa.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("waitShortcuts耗时");const n=await Ya(e.shortcuts);console.timeEnd("waitShortcuts耗时"),t.showDetails(JSON.stringify(n),"waitShortcuts");const a=_().find(s=>s.name==="waitShortcuts"&&s.scope==="GlobalShortcut")?.testModule;a.document.example.code=`await Input.waitShortcuts([${e.shortcuts.map(s=>`"${s}"`).join(", ")}]);`},zi={howToUse:"全局等待快捷键触发",params:[{name:"shortcuts",required:!0,instructions:"等待触发的快捷键，如：['Alt+S','Alt+R']",type:"string | string[]",default:""}],returnValue:{type:"Promise<string | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//等待 Alt+S 或 Alt+R 被按下
const shortcut = await GlobalShortcut.waitKeys(["Alt+S","Alt+R"]);
//按下Alt+S之后shortcut为"Alt+S"，按下Alt+R之后shortcut为"Alt+R"`},searchKeys:["wait","等待","按下","触发"],codeSnippet:"const shortcut = await GlobalShortcut.waitShortcuts(['${1:shortcut}']);"},Bi={title:"等待快捷键触发",targetMethodName:"waitShortcuts",content:"等待快捷键触发, 返回触发的快捷键名称, 若快捷键冲突则返回undefined",args:[{name:"shortcuts",componentType:"select",value:[],label:"等待触发的按键(可多选创建)",options:["Alt+S","Alt+E"],multiple:!0},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},qi=`
function waitShortcuts(shortcuts: string | string[]): Promise<string | undefined>;
`,Ki={name:"waitShortcuts",scope:"GlobalShortcut",exportFn:{fn:Ya},testModule:{weight:4,dialog:Bi,callback:Ui,document:zi},declaration:qi,auxiliary:Xa},mn=Object.freeze(Object.defineProperty({__proto__:null,waitShortcutsApi:Ki},Symbol.toStringTag,{value:"Module"})),Ha=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.combined(e)}catch(a){return console.error("combinedFnError:",a),!1}},Za={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="combined"&&o.scope==="Input").testModule.dialog.args.forEach((o,r)=>{r===0&&(o.value=n.map(l=>l.value.replace("[","").replace("]","")))})},parameterReplace:e=>{e.replaceCurFnArgs(`[${e.keys.map(t=>`"${t}"`).join(",")}]`)}},Gi=async(e,t)=>{if(e.replaceCurFnArgs){const s=Za.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("combined耗时");const n=await Ha(e.keys);console.timeEnd("combined耗时"),t.showDetails(JSON.stringify(n),"combined");const a=_().find(s=>s.name==="combined"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.combined([${e.keys.map(s=>`'${s}'`).join(",")}]);`},Ji={howToUse:"组合键",params:[{name:"keys",required:!0,instructions:"按下的组合键",type:"Key[]",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.combined("A");`},searchKeys:["combined","key","组合键","按键"],codeSnippet:"await Input.combined(['${1:key}', '${2:key}']);"},et=["0) 数字键0:Num0","1! 数字键1:Num1","2@ 数字键2:Num2","3# 数字键3:Num3","4$ 数字键4:Num4","5% 数字键5:Num5","6^ 数字键6:Num6","7& 数字键7:Num7","8* 数字键8:Num8","9( 数字键9:Num9","[小键盘]数字键0:Numpad0","[小键盘]数字键1:Numpad1","[小键盘]数字键2:Numpad2","[小键盘]数字键3:Numpad3","[小键盘]数字键4:Numpad4","[小键盘]数字键5:Numpad5","[小键盘]数字键6:Numpad6","[小键盘]数字键7:Numpad7","[小键盘]数字键8:Numpad8","[小键盘]数字键9:Numpad9","字母键A:A","字母键B:B","字母键C:C","字母键D:D","字母键E:E","字母键F:F","字母键G:G","字母键H:H","字母键I:I","字母键J:J","字母键K:K","字母键L:L","字母键M:M","字母键N:N","字母键O:O","字母键P:P","字母键Q:Q","字母键R:R","字母键S:S","字母键T:T","字母键U:U","字母键V:V","字母键W:W","字母键X:X","字母键Y:Y","字母键Z:Z","F1键:F1","F2键:F2","F3键:F3","F4键:F4","F5键:F5","F6键:F6","F7键:F7","F8键:F8","F9键:F9","F10键:F10","F11键:F11","F12键:F12","←Backspace退格键:Backspace","Tab制表键:Tab","Return回车键:Return","↑Shift键(左):LShift","↑Shift键(右):RShift","Ctrl键:Control","Alt键:Alt","Pause键:Pause","CapsLock大写锁定键:CapsLock","Esc键:Escape","空格键:Space","Page Up键:PageUp","Page Down键:PageDown","End键:End","Home键:Home","←左箭头键:LeftArrow","↑上箭头键:UpArrow","→右箭头键:RightArrow","↓下箭头键:DownArrow","Insert键:Insert","Delete删除键:Delete","Windows键:Windows","ContextMenu右键菜单键:ContextMenu","NumLock数字锁定键:NumLock","ScrollLock滚动锁定键:ScrollLock","; ：分号冒号键:OEM1","/ ? 斜杠问号键:OEM2","` ~ 反引号波浪号键:OEM3","[ { 左(中括号花括号键):OEM4","\\ | 反斜杠竖线键:OEM5","] } 右(中括号花括号键):OEM6",`' " 单引号双引号键:OEM7`,"= + 等于加号键:OEMPlus",", < 逗号小于号键:OEMComma",". > 句号大于号键:OEMPeriod","/ 斜杠键:Divide","* 乘号键:Multiply",". 小数点Del键:Decimal","+ 加号键:Add","- 减号键:Subtract","- _减号下划线键:OEMMinus"],Wi={title:"按下组合键",targetMethodName:"combined",content:"先顺序依次按下按键，再逆序依次松开按键",args:[{name:"keys",componentType:"select",value:[],multiple:!0,notAllowCreate:!0,label:"键盘按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Yi=`
function combined(
  keys:Key[]
):Promise<boolean>;
`,Xi={name:"combined",scope:"Input",exportFn:{fn:Ha},testModule:{weight:4,dialog:Wi,callback:Gi,document:Ji},declaration:Yi,auxiliary:Za},gn=Object.freeze(Object.defineProperty({__proto__:null,combinedApi:Xi},Symbol.toStringTag,{value:"Module"})),Qa=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.keyDown(e)}catch(a){return console.error("keyDownFnError:",a),!1}},eo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="keyDown"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},Hi=async(e,t)=>{if(e.replaceCurFnArgs){const s=eo.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("keyDown耗时");const n=await Qa(e.key);console.timeEnd("keyDown耗时"),t.showDetails(JSON.stringify(n),"keyDown");const a=_().find(s=>s.name==="keyDown"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.keyDown('${e.key}');`},Zi={howToUse:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyDown方法抬起按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyDown("A");
      `},searchKeys:["按下","输入","key","按键"],codeSnippet:"await Input.keyDown('${1:key}');"},Qi={title:"按下按键",targetMethodName:"keyDown",content:"主动按下指定按键，按下后不会自动抬起，需要手动调用keyUp方法抬起按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要按下的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ec=`
function keyDown(
  key:Key
):Promise<boolean>;
`,tc={name:"keyDown",scope:"Input",exportFn:{fn:Qa},testModule:{weight:4,dialog:Qi,callback:Hi,document:Zi},declaration:ec,auxiliary:eo},fn=Object.freeze(Object.defineProperty({__proto__:null,keyDownApi:tc},Symbol.toStringTag,{value:"Module"})),to=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.keyUp(e)}catch(a){return console.error("keyUpFnError:",a),!1}},no={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="keyUp"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},nc=async(e,t)=>{if(e.replaceCurFnArgs){const s=no.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("keyUp耗时");const n=await to(e.key);console.timeEnd("keyUp耗时"),t.showDetails(JSON.stringify(n),"keyUp");const a=_().find(s=>s.name==="keyUp"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.keyUp('${e.key}');`},ac={howToUse:"主动抬起指定按键",params:[{name:"key",required:!0,instructions:"抬起的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//主动抬起A键
await Input.keyUp("A");`},searchKeys:["抬起","输入","key","按键"],codeSnippet:"await Input.keyUp('${1:key}');"},oc={title:"抬起按键",targetMethodName:"keyUp",content:"主动抬起指定按键",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"需要抬起的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},sc=`
function keyUp(
  key:Key
):Promise<boolean>;
`,rc={name:"keyUp",scope:"Input",exportFn:{fn:to},testModule:{weight:4,dialog:oc,callback:nc,document:ac},declaration:sc,auxiliary:no},yn=Object.freeze(Object.defineProperty({__proto__:null,keyUpApi:rc},Symbol.toStringTag,{value:"Module"})),ao=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.pressKey(e)}catch(a){return console.error("pressFnError:",a),!1}},oo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="press"&&o.scope==="Input").testModule.dialog;s.args[0].value=n[0]?.value||"A"},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.key}'`)}},lc=async(e,t)=>{if(e.replaceCurFnArgs){const s=oo.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("press耗时");const n=await ao(e.key);console.timeEnd("press耗时"),t.showDetails(JSON.stringify(n),"press");const a=_().find(s=>s.name==="press"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.press('${e.key}');`},ic={howToUse:"按下按键后松开",params:[{name:"key",required:!0,instructions:"按下的按键",type:"Key",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//按下A键后松开
await Input.press("A");`},searchKeys:["key","按键","按下","松开"],codeSnippet:"await Input.press('${1:key}');"},cc={title:"按下按键",targetMethodName:"press",content:"按下按键后松开",args:[{name:"key",componentType:"select",value:"A",notAllowCreate:!0,label:"按下的按键",options:et,selectOptionSeparator:":"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},uc=`
function press(
  key:Key
):Promise<boolean>;
`,dc={name:"press",scope:"Input",exportFn:{fn:ao},testModule:{weight:4,dialog:cc,callback:lc,document:ic},declaration:uc,auxiliary:oo},hn=Object.freeze(Object.defineProperty({__proto__:null,pressApi:dc},Symbol.toStringTag,{value:"Module"})),so=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.inputText(e)}catch(a){return console.error("textFnError:",a),!1}},ro={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="text"&&o.scope==="Input").testModule.dialog.args.forEach((o,r)=>{r===0&&(o.value=n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`'${e.text}'`)}},pc=async(e,t)=>{if(e.replaceCurFnArgs){const s=ro.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("text耗时");const n=await so(e.text);console.timeEnd("text耗时"),t.showDetails(JSON.stringify(n),"text");const a=_().find(s=>s.name==="text"&&s.scope==="Input")?.testModule;a.document.example.code=`await Input.text('${e.text}');`},mc={howToUse:"输入字符串",params:[{name:"text",required:!0,instructions:"需要输入的内容",type:"string",default:""}],returnValue:{type:`Promise<{
  code: number;
  message: string;
}>`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//输入"abc"
await Input.text("abc");`},searchKeys:["text","输入","input","文本"],codeSnippet:"await Input.text('${1:text}');"},gc={title:"输入字符串",targetMethodName:"text",content:"输入一串指定字符串",args:[{name:"text",componentType:"input",value:"",label:"输入的内容"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},fc=`
function text(
  text:string
):Promise<{
  code: number;
  message: string;
}>;
`,yc={name:"text",scope:"Input",exportFn:{fn:so},testModule:{weight:4,dialog:gc,callback:pc,document:mc},declaration:fc,auxiliary:ro},bn=Object.freeze(Object.defineProperty({__proto__:null,textApi:yc},Symbol.toStringTag,{value:"Module"})),lo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="click"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},hc=async(e,t)=>{if(e.replaceCurFnArgs){const a=lo.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("click耗时"),await Ct(e.x,e.y,e.button),console.timeEnd("click耗时"),t.showDetails("点击完成","click");const n=_().find(a=>a.name==="click"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.click(${e.x}, ${e.y}, '${e.button||"left"}');`},bc={howToUse:"鼠标移动到指定位置进行[左键/中键/右键]点击,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"点击的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并点击(左键)
await Mouse.click(100,100);
//鼠标移动到(100,100)并点击(右键)
await Mouse.click(100,100,"right");
//鼠标移动到(100,100)并点击(中键)
await Mouse.click(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","点击","移动"],codeSnippet:"await Mouse.click(${1:x}, ${2:y});"},vc={title:"鼠标点击",targetMethodName:"click",content:"鼠标移动到指定位置进行[左键/右键/中键]点击,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},_c=`
function click(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,wc={name:"click",scope:"Mouse",exportFn:{fn:Ct},testModule:{weight:4,dialog:vc,callback:hc,document:bc},declaration:_c,auxiliary:lo},vn=Object.freeze(Object.defineProperty({__proto__:null,clickApi:wc},Symbol.toStringTag,{value:"Module"})),st=async()=>!1,io=async(e,t=50,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return st;try{e<0&&(e=0),t<0&&(t=0);const r=["left","middle","right"].indexOf(n);return r===-1?(oe.error("暂不支持的鼠标按键类型"+n),st):await O.startClicker(e,t,r)?async()=>await O.stopClicker():st}catch(o){console.error("clickFnError:",o),oe.error("clickFnError:"+o)}return st},co={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="clicker"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{r!==2?o.value=+n[r]?.value||0:o.componentType==="select"&&(o.value=n[r]?.value||"left")})},parameterReplace:e=>{e.button==="left"?e.replaceCurFnArgs(`${e.duration}, ${e.sleep}`):e.replaceCurFnArgs(`${e.duration}, ${e.sleep}, '${e.button}'`)}},xc=async(e,t)=>{if(e.replaceCurFnArgs){const a=co.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("clicker耗时"),await io(e.duration,e.sleep,e.button),console.timeEnd("clicker耗时"),t.showDetails("点击完成","clicker");const n=_().find(a=>a.name==="clicker"&&a.scope==="Mouse")?.testModule;e.button==="left"?n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep});`:n.document.example.code=`await Mouse.clicker(${e.duration}, ${e.sleep}, '${e.button}');`},Sc={howToUse:"鼠标左键进行连续点击一段时间",params:[{name:"duration",required:!0,instructions:"连续点击时间(s)",type:"number",default:""},{name:"sleep",required:!1,instructions:"点击间隔时间(ms)",type:"number",default:"50"},{name:"button",required:!1,instructions:"鼠标按键",type:["'left'","'right'","'middle'"],default:"'left'"}],returnValue:{instructions:"返回一个停止点击器的函数，调用此函数可停止连续点击。",type:"Promise<() => Promise<void>>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)
await Mouse.move(100,100);
//调用点击器，连续点击鼠标右键5s，点击间隔10ms
const stop = await Mouse.clicker(5,10, 'right');
//3s后停止点击
await sleep(3000);
await stop();
      `},searchKeys:["鼠标","mouse","左键","连续","点击"],codeSnippet:"await Mouse.clicker(${1:duration}, ${2:sleep});"},Tc={title:"鼠标点击器",targetMethodName:"clicker",content:"鼠标左键进行连续点击一段时间",args:[{name:"duration",componentType:"numberInput",value:1,label:"连续点击时间(s)"},{name:"sleep",componentType:"numberInput",value:50,label:"点击间隔时间(ms)"},{name:"button",componentType:"select",value:"left",label:"鼠标按键",options:["left","middle","right"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},$c=`
function clicker(
  duration: number,
  sleep?: number,
  button?: 'left' | 'right' | 'middle',
):Promise<() => Promise<boolean>>;
`,Mc={name:"clicker",scope:"Mouse",exportFn:{fn:io},testModule:{weight:4,dialog:Tc,callback:xc,document:Sc},declaration:$c,auxiliary:co},_n=Object.freeze(Object.defineProperty({__proto__:null,clickerApi:Mc},Symbol.toStringTag,{value:"Module"})),uo=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await je(e,t);return await O.mouseDown(o.x,o.y,n)}catch(o){return console.error("clickFnError:",o),!1}},po={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="down"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},kc=async(e,t)=>{if(e.replaceCurFnArgs){const a=po.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("down耗时"),await uo(e.x,e.y,e.button),console.timeEnd("down耗时"),t.showDetails("鼠标按键按下完成","down");const n=_().find(a=>a.name==="down"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.down(${e.x}, ${e.y}, '${e.button||"left"}');`},Ic={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会主动抬起）,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"需要按下的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并按下(左键)
await Mouse.down(100,100);
//鼠标移动到(100,100)并按下(右键)
await Mouse.down(100,100,"right");
//鼠标移动到(100,100)并按下(中键)
await Mouse.down(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","按下","移动"],codeSnippet:"await Mouse.down(${1:x}, ${2:y});"},Pc={title:"鼠标按键按下",targetMethodName:"down",content:"鼠标移动到指定位置进行[左键/右键/中键]的按下（不会自动抬起）,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Cc=`
function down(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,Fc={name:"down",scope:"Mouse",exportFn:{fn:uo},testModule:{weight:4,dialog:Pc,callback:kc,document:Ic},declaration:Cc,auxiliary:po},wn=Object.freeze(Object.defineProperty({__proto__:null,downApi:Fc},Symbol.toStringTag,{value:"Module"})),mo=async(e,t,n,a,s,o)=>{const{notAllowedFnId:r}=C();if(o&&r.value.includes(o))return!1;if(n<0||a<0)return console.error("只有起点坐标可以使用负数代表鼠标当前位置"),!1;try{const l=e<0||t<0?{x:-1,y:-1}:await je(e,t),i=await je(n,a);return await O.drag(l.x,l.y,i.x,i.y,s)}catch(l){return console.error("dragFnError:",l),!1}},go={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="drag"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.duration&&e.duration>0){e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration}`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}, ${e.toX}, ${e.toY}`)}},Ac=async(e,t)=>{if(e.replaceCurFnArgs)go.parameterReplace(e);else{e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("drag耗时");const n=await mo(e.x,e.y,e.toX,e.toY,e.duration);console.timeEnd("drag耗时"),t.showDetails("鼠标拖动完成","Mouse.drag");const a=_().find(s=>s.name==="drag"&&s.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.duration>0?a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY}, ${e.duration});`:a.document.example.code=`await Mouse.drag(${e.x}, ${e.y}, ${e.toX}, ${e.toY});`}},Oc={howToUse:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"目标x坐标(>=0)",type:"number",default:""},{name:"toY",required:!0,instructions:"目标y坐标(>=0)",type:"number",default:""},{name:"duration",required:!1,instructions:"拖动时间",type:"number",default:"0"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//从当前鼠标位置拖动到100,100
await Mouse.drag(-1, -1, 100, 100);
//从当前鼠标位置使用500ms拖动到100,100
await Mouse.drag(-1, -1, 100, 100, 500);
    `},searchKeys:["鼠标","mouse","拖动","模拟"],codeSnippet:"await Mouse.drag(${1:x}, ${2:y}, ${3:toX}, ${4:toY});"},Dc={title:"拖动鼠标到指定位置",targetMethodName:"drag",content:"拖动鼠标到指定位置[x或y的值任意<0时为表示使用当前鼠标位置作为起点],位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"toX",componentType:"numberInput",value:0,label:"目标x坐标(>=0)"},{name:"toY",componentType:"numberInput",value:0,label:"目标y坐标(>=0)"},{name:"duration",componentType:"numberInput",value:0,label:"拖动时间(ms)"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},Rc=`
function drag(
    x: number,
    y: number,
    toX: number,
    toY: number,
    duration?: number,
):Promise<boolean>;
`,Ec={name:"drag",scope:"Mouse",exportFn:{fn:mo},testModule:{weight:4,dialog:Dc,callback:Ac,document:Oc},declaration:Rc,auxiliary:go},xn=Object.freeze(Object.defineProperty({__proto__:null,dragApi:Ec},Symbol.toStringTag,{value:"Module"})),fo=async(e,t,n=!1,a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await je(e,t);return await O.move(o.x,o.y,n)}catch(o){return console.error("moveFnError:",o),!1}},yo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="move"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{r===2?o.value=n[r].value||!1:o.value=+n[r]?.value||0})},parameterReplace:e=>{if(e.isRelative){e.replaceCurFnArgs(`${e.x}, ${e.y}, true`);return}e.replaceCurFnArgs(`${e.x}, ${e.y}`)}},Vc=async(e,t)=>{if(e.replaceCurFnArgs)yo.parameterReplace(e);else{e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("move耗时");const n=await fo(e.x,e.y,e.isRelative);console.timeEnd("move耗时"),n!==void 0?t.showDetails("移动鼠标完成","Mouse.move"):t.showDetails("移动鼠标失败","Mouse.move");const a=_().find(s=>s.name==="move"&&s.scope==="Mouse")?.testModule;if(!a){console.error("找不到selfModule");return}e.isRelative?a.document.example.code=`await Mouse.move(${e.x}, ${e.y}, true);`:a.document.example.code=`await Mouse.move(${e.x}, ${e.y});`}},Lc={howToUse:"鼠标移动到指定[绝对/相对]坐标,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"y坐标",type:"number",default:""},{name:"isRelative",required:!1,instructions:"相对当前位置移动",type:"boolean",default:"false"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//移动到(100,100)坐标
await Mouse.move(100, 100);
//鼠标往上移动100，往右移动100
await Mouse.move(100, -100, true);
    `},searchKeys:["鼠标","mouse","移动","模拟"],codeSnippet:"await Mouse.move(${1:x}, ${2:y});"},Nc={title:"模拟鼠标移动",targetMethodName:"move",content:"模拟鼠标移动到指定坐标,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"isRelative",componentType:"switch",value:!1,label:"相对当前位置移动",activeText:"相对移动",inactiveText:"绝对移动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},jc=`
function move(
    x: number,
    y:number,
    isRelative?: boolean
):Promise<boolean>;
`,Uc={name:"move",scope:"Mouse",exportFn:{fn:fo},testModule:{weight:4,dialog:Nc,callback:Vc,document:Lc},declaration:jc,auxiliary:yo},Sn=Object.freeze(Object.defineProperty({__proto__:null,moveApi:Uc},Symbol.toStringTag,{value:"Module"})),ho=async e=>{const{notAllowedFnId:t}=C();if(e&&t.value.includes(e))return{x:-1,y:-1};try{return await O.getMousePos()}catch(n){return console.error(n),{x:-1,y:-1}}},zc=async(e,t)=>{console.time("Mouse.pos耗时");const{x:n,y:a}=await ho();console.log(n,a),console.timeEnd("Mouse.pos耗时"),t.showDetails(`鼠标位置：${n},${a}`)},Bc={title:"获取鼠标位置",targetMethodName:"pos",notOpen:!0},qc={howToUse:"获取鼠标位置",returnValue:{type:"Promise<{ x: number, y: number }>"},example:{code:"const {x, y} = await Mouse.pos();"},searchKeys:["鼠标","位置","获取"],codeSnippet:"const {x, y} = await Mouse.pos();"},Kc=`
function pos():Promise<{x:number; y:number;}>;
`,Gc={name:"pos",scope:"Mouse",exportFn:{fn:ho},testModule:{weight:1,callback:zc,dialog:Bc,document:qc},declaration:Kc},Tn=Object.freeze(Object.defineProperty({__proto__:null,posApi:Gc},Symbol.toStringTag,{value:"Module"})),bo=async(e,t,n=[[0,0],[0,0]],a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const[o,r]=n[0],[l,i]=n[1];let u={x:e,y:t};return o===0&&r===0||(u.x+=Math.round(o+Math.random()*(r-o))),l===0&&i===0||(u.y+=Math.round(l+Math.random()*(i-l))),await O.move(e,t)}catch(o){return console.error(o),!1}},Jc={title:"将鼠标移动到指定位置并产生随机偏移",targetMethodName:"randomMove",content:"输入指定位置的x、y坐标，xRandomRange和yRandomRange可以让该坐标随机产生一定程度偏移",args:[{name:"x",componentType:"numberInput",label:"目标位置x坐标",value:0},{name:"y",componentType:"numberInput",label:"目标位置y坐标",value:0},{name:"xRandomRange",componentType:"numberRangeInput",label:"x轴随机偏移范围",value:[0,0]},{name:"yRandomRange",componentType:"numberRangeInput",label:"y轴随机偏移范围",value:[0,0]}]},vo={onDialogOpen:async(e,...t)=>{let n=await m.paramsProcess(...t);_().find(o=>o.name==="randomMove"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.value=+n[r]?.value||0;break;case 2:case 3:const l=[0,0];o.value=n[r]?.value||l;break}})},parameterReplace:e=>{e.xRandomRange[0]===0&&e.xRandomRange[1]===0&&e.yRandomRange[0]===0&&e.yRandomRange[1]===0?e.replaceCurFnArgs(`${e.x}, ${e.y}`):e.replaceCurFnArgs(`${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]`)}},Wc=async(e,t)=>{if(e.replaceCurFnArgs){const s=vo.parameterReplace(e);return m.apiAutoTip(),s}console.time("randomMove");const n=await bo(e.x,e.y,[e.xRandomRange,e.yRandomRange]);console.timeEnd("randomMove"),t.showDetails(JSON.stringify(n));const a=_().find(s=>s.name==="randomMove"&&s.scope==="Mouse")?.testModule;a&&(a.document.example.code=`await Mouse.randomMove(${e.x}, ${e.y}, [[${e.xRandomRange[0]}, ${e.xRandomRange[1]}], [${e.yRandomRange[0]}, ${e.yRandomRange[1]}]]);`.replace(", [[0, 0], [0, 0]]",""))},Yc={howToUse:"将鼠标移动到指定位置",params:[{name:"x",required:!0,instructions:"目标位置x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"目标位置y坐标",type:"number",default:""},{name:"randomRange",required:!1,instructions:"随机偏移",type:"[[number,number],[number,number]]",default:"[[0,0],[0,0]]"}],returnValue:{type:"Promise<boolean>",instructions:"移动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"await randomMove(100,100);"},searchKeys:["mouse","random","move","移动","随机"],codeSnippet:"await Mouse.randomMove(${1:x}, ${2:y}, ${3:[[0,0],[0,0]]});"},Xc=`
function randomMove(x: number, y: number, randomRange?:[[number,number],[number,number]]):Promise<boolean>;
`,Hc={name:"randomMove",scope:"Mouse",exportFn:{fn:bo},testModule:{weight:2,dialog:Jc,callback:Wc,document:Yc},declaration:Xc,auxiliary:vo},$n=Object.freeze(Object.defineProperty({__proto__:null,randomMoveApi:Hc},Symbol.toStringTag,{value:"Module"})),Zc=(e,t)=>{const{notAllowedFnId:n}=C();if(!(t&&n.value.includes(t)))try{window[P]?.Mouse?.__NS_DATA__?window[P].Mouse.__NS_DATA__=e:console.error("setMouseOptionFnError:","Mouse未被初始化")}catch(a){console.error("setMouseOptionFnError:",a)}},Qc=async(e,t)=>{t.showDetails("此方法无法直接调用，请在脚本中使用！","Mouse.setMouseOption")},eu={howToUse:"设置Mouse模块的选项。",params:[{name:"option",required:!0,instructions:"可以设置点击随机偏移、基准屏幕像素等选项",type:"MouseOption",default:"{}"}],returnValue:{type:"void"},example:{code:`//设置鼠标随机偏移、设置基准屏幕像素 设置完成之后，鼠标点击、拖动等API会受到这些选项的影响
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
`},tu=`
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
`,nu={name:"setMouseOption",scope:"Mouse",exportFn:{fn:Zc},testModule:{weight:4,dialog:{notOpen:!0,title:"设置鼠标模块配置",targetMethodName:"setMouseOption"},callback:Qc,document:eu},declaration:tu},Mn=Object.freeze(Object.defineProperty({__proto__:null,setMouseOptionApi:nu},Symbol.toStringTag,{value:"Module"})),_o=async(e,t,n="left",a)=>{const{notAllowedFnId:s}=C();if(a&&s.value.includes(a))return!1;try{const o=await je(e,t);return await O.mouseUp(o.x,o.y,n)}catch(o){return console.error("upFnError:",o),!1}},wo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="up"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:case 3:o.value=+n[r]?.value||0;break;case 2:o.componentType==="select"&&(o.value=n[r]?.value||"left");break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.x}, ${e.y}${e.button===void 0||e.button==="left"?"":", '"+e.button+"'"}`)}},au=async(e,t)=>{if(e.replaceCurFnArgs){const a=wo.parameterReplace(e);return m.apiAutoTip(),a}e.delay>0&&await new Promise(a=>{const s=setTimeout(()=>{a(null),clearTimeout(s)},e.delay)}),console.time("up耗时"),await _o(e.x,e.y,e.button),console.timeEnd("up耗时"),t.showDetails("鼠标按键抬起完成","up");const n=_().find(a=>a.name==="up"&&a.scope==="Mouse")?.testModule;n.document.example.code=`await Mouse.up(${e.x}, ${e.y}, '${e.button||"left"}');`},ou={howToUse:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",params:[{name:"x",required:!0,instructions:"鼠标移动到的X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"鼠标移动到的Y坐标",type:"number",default:""},{name:"button",required:!1,instructions:"抬起的鼠标键，默认值为左键",type:["left","right","middle"],default:"left"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//鼠标移动到(100,100)并抬起(左键)
await Mouse.up(100,100);
//鼠标移动到(100,100)并抬起(右键)
await Mouse.up(100,100,"right");
//鼠标移动到(100,100)并抬起(中键)
await Mouse.up(100,100,"middle");
      `},searchKeys:["鼠标","mouse","左键","中键","右键","抬起","移动"],codeSnippet:"await Mouse.up(${1:x}, ${2:y});"},su={title:"鼠标按键抬起",targetMethodName:"up",content:"鼠标移动到指定位置进行[左键/右键/中键]抬起，一般用于鼠标按键按下API调用之后主动抬起,位置受Mouse.setMouseOption设置的选项影响",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"button",componentType:"select",value:"left",notAllowCreate:!0,label:"鼠标按键",options:["left","right","middle"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ru=`
function up(
  x: number,
  y: number,
  button?: "left" | "right" | "middle"
):Promise<boolean>;
`,lu={name:"up",scope:"Mouse",exportFn:{fn:_o},testModule:{weight:4,dialog:su,callback:au,document:ou},declaration:ru,auxiliary:wo},kn=Object.freeze(Object.defineProperty({__proto__:null,upApi:lu},Symbol.toStringTag,{value:"Module"})),xo=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{return await O.wheel(e)}catch(a){return console.error("wheelFnError:",a),!1}},So={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="wheel"&&o.scope==="Mouse").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.delta}`)}},iu=async(e,t)=>{if(e.replaceCurFnArgs){const s=So.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>{const o=setTimeout(()=>{s(null),clearTimeout(o)},e.delay)}),console.time("wheel耗时");const n=await xo(e.delta);console.timeEnd("wheel耗时"),t.showDetails(n||"OK","wheel");const a=_().find(s=>s.name==="wheel"&&s.scope==="Mouse")?.testModule;a.document.example.code=`await Mouse.wheel(${e.delta}');`},cu={howToUse:"鼠标滚轮滚动",params:[{name:"delta",required:!0,instructions:"滚动的距离，正数向下滚动，负数向上滚动",type:"number",default:"10"}],returnValue:{type:"Promise<boolean>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//向下滚动10
await Mouse.wheel(10);`},searchKeys:["鼠标","mouse","滚动","滚轮"],codeSnippet:"await Mouse.wheel(${1:delta});"},uu={title:"鼠标滚轮滚动",targetMethodName:"wheel",content:"模拟鼠标滚轮滚动",args:[{name:"delta",componentType:"numberInput",value:0,label:"滚动的距离，正数向下滚动，负数向上滚动"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},du=`
function wheel(
  delta: number,
):Promise<boolean>;
`,pu={name:"wheel",scope:"Mouse",exportFn:{fn:xo},testModule:{weight:4,dialog:uu,callback:iu,document:cu},declaration:du,auxiliary:So},In=Object.freeze(Object.defineProperty({__proto__:null,wheelApi:pu},Symbol.toStringTag,{value:"Module"})),mu={howToUse:"返回路径的最后一部分",params:[{name:"path",required:!0,instructions:"目标路径",type:"string",default:"",children:[]},{name:"ext",required:!1,instructions:"要从返回的路径中删除文件的扩展名 ",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的最后一部分",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await basename("E:\\a.png","png");'},searchKeys:["path"],codeSnippet:"${1:const res = }await basename(${2:'path'}${3:, ''});${0:}"},To=async(e,t,n)=>"",$o={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="basename"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[r]?.value||"");break;case 1:o.value=n[r]?.value||"";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}${e.ext?`, "${e.ext}"`:""}`)}},gu=async(e,t)=>{if(e.replaceCurFnArgs){$o.parameterReplace(e),m.apiAutoTip();return}const{path:n,ext:a}=e;console.time("basename耗时");const s=await To();console.timeEnd("basename耗时");const o=_().find(r=>r.name==="basename"&&r.scope==="Path")?.testModule;o.document.example.code=`const res = await basename(${n.replace(/\\/g,"\\\\")}${a?`, "${a}"`:""});`,t.showDetails(JSON.stringify(s),"Path.basename")},fu={title:"获取路径的最后一部分",targetMethodName:"basename",content:"返回路径的最后一部分",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"tjZIw1naGW_0PC94z0wbE",onlyTest:!1,noTest:!1,name:"path",label:"目标路径",displayCondition:[],placeholder:"请输入目标路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"WB4Ge_ckM6GCIydCPD3s8",onlyTest:!1,noTest:!1,name:"ext",label:"要删除的文件扩展名",displayCondition:[],placeholder:"要删除的文件扩展名，留空则不删除"}]},yu=`function basename(
  path: string,
  ext?: string,
): Promise<string>;
`,hu={scope:"Path",name:"basename",exportFn:{fn:To},testModule:{weight:4,dialog:fu,callback:gu,document:mu},declaration:yu,auxiliary:$o},Pn=Object.freeze(Object.defineProperty({__proto__:null,basenameApi:hu},Symbol.toStringTag,{value:"Module"})),bu={howToUse:"返回路径的目录名",params:[{name:"path",required:!0,instructions:"目标路径",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的目录名 ",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await dirname("E:\\a\\b.png")'},searchKeys:["path"],codeSnippet:"${1:const res = }await dirname(${2:'path'});${0:}"},Mo=async(e,t)=>"",ko={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="dirname"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},vu=async(e,t)=>{if(e.replaceCurFnArgs){ko.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("dirname耗时");const a=await Mo();console.timeEnd("dirname耗时");const s=_().find(o=>o.name==="dirname"&&o.scope==="Path")?.testModule;s.document.example.code=`const res = await dirname(${n.replace(/\\/g,"\\\\")})`,t.showDetails(JSON.stringify(a),"Path.dirname")},_u={title:"获得路径的目录名",targetMethodName:"dirname",content:"返回路径的目录名",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"xr40WPMrmLWk0SkDf3nXF",onlyTest:!1,noTest:!1,name:"path",label:"目标路径",displayCondition:[],placeholder:"请输入目标路径",multiple:!1}]},wu=`function dirname(
  path: string,
): Promise<string>;
`,xu={scope:"Path",name:"dirname",exportFn:{fn:Mo},testModule:{weight:4,dialog:_u,callback:vu,document:bu},declaration:wu,auxiliary:ko},Cn=Object.freeze(Object.defineProperty({__proto__:null,dirnameApi:xu},Symbol.toStringTag,{value:"Module"})),Su={howToUse:"获取文件的扩展名",params:[{name:"path",required:!0,instructions:"目标文件路径",type:"string",default:"",children:[]}],returnValue:{instructions:"路径的扩展名(不包含.)",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const ext = await extname("E:\\a.png");'},searchKeys:["path","ext"],codeSnippet:"${1:const res = }await extname(${2:'path'});${0:}"},Io=async(e,t)=>"",Po={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="extname"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(m.replaceConstantPath(e.path))}},Tu=async(e,t)=>{if(e.replaceCurFnArgs){Po.parameterReplace(e),m.apiAutoTip();return}const{path:n}=e;console.time("extname耗时");const a=await Io();console.timeEnd("extname耗时");const s=_().find(o=>o.name==="extname"&&o.scope==="Path")?.testModule;s.document.example.code=`const ext = await extname(${n.replace(/\\/g,"\\\\")});`,t.showDetails(JSON.stringify(a),"Path.extname")},$u={title:"获取文件扩展名",targetMethodName:"extname",content:"获取文件的扩展名",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"ZkNup1zdtqvariUs2FWdl",onlyTest:!1,noTest:!1,name:"path",label:"文件路径",displayCondition:[],placeholder:"请输入文件路径",multiple:!1}]},Mu=`function extname(
  path: string,
): Promise<string>;
`,ku={scope:"Path",name:"extname",exportFn:{fn:Io},testModule:{weight:4,dialog:$u,callback:Tu,document:Su},declaration:Mu,auxiliary:Po},Fn=Object.freeze(Object.defineProperty({__proto__:null,extnameApi:ku},Symbol.toStringTag,{value:"Module"})),Iu={howToUse:"使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化生成的路径。 ",params:[{name:"path",required:!0,instructions:"主路径",type:"string",default:"",children:[]},{name:"addPath",required:!0,instructions:"路径表达式",type:"string",default:"",children:[]}],returnValue:{instructions:"拼接后的路径",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const res = await join("E:\\a","./b.png");'},searchKeys:["path"],codeSnippet:"${1:const res = }await join(${2:'path'}, ${3:'addPath'});${0:}"},Co=async(e,t,n)=>"",Fo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="join"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, ${m.replaceConstantPath(e.addPath)}`)}},Pu=async(e,t)=>{if(e.replaceCurFnArgs){Fo.parameterReplace(e),m.apiAutoTip();return}const{path:n,addPath:a}=e;console.time("join耗时");const s=await Co();console.timeEnd("join耗时");const o=_().find(r=>r.name==="join"&&r.scope==="Path")?.testModule;o.document.example.code=`const newPath = await resolve(${n.replace(/\\/g,"\\\\")}, ${a.replace(/\\/g,"\\\\")})`,t.showDetails(JSON.stringify(s),"Path.join")},Cu={title:"路径拼接",targetMethodName:"join",content:"使用特定于平台的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化生成的路径。 ",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"767VuT62vlbQUwwjZal1J",onlyTest:!1,noTest:!1,name:"path",label:"主路径",displayCondition:[],placeholder:"请输入主路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"YZoEkbl1OLRtFMV0y4w46",onlyTest:!1,noTest:!1,name:"addPath",label:"路径表达式",displayCondition:[],placeholder:"请输入路径表达式"}]},Fu=`function join(
  path: string,
  addPath: string,
): Promise<string>;
`,Au={scope:"Path",name:"join",exportFn:{fn:Co},testModule:{weight:4,dialog:Cu,callback:Pu,document:Iu},declaration:Fu,auxiliary:Fo},An=Object.freeze(Object.defineProperty({__proto__:null,joinApi:Au},Symbol.toStringTag,{value:"Module"})),Ou={howToUse:"将路径或路径段序列解析为绝对路径",params:[{name:"path",required:!0,instructions:"主路径",type:"string",default:"",children:[]},{name:"addPath",required:!0,instructions:"路径表达式",type:"string",default:"",children:[]}],returnValue:{instructions:"解析后的路径",type:"Promise<string>"},example:{title:"该API在'测试调用'后会动态填入参数到示例",code:'const newPath = await resolve("E:\\a\\b.png","../c.png")'},searchKeys:["path"],codeSnippet:"${1:const res = }await resolve(${2:'path'}, ${3:'addPath'});${0:}"},Ao=async(e,t,n)=>"",Oo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="resolve"&&o.scope==="Path").testModule.dialog;s.args&&s.args.forEach((o,r)=>{o.value=m.pathStrReset(n[r]?.value||"")})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}, ${m.replaceConstantPath(e.addPath)}`)}},Du=async(e,t)=>{if(e.replaceCurFnArgs){Oo.parameterReplace(e),m.apiAutoTip();return}const{path:n,addPath:a}=e;console.time("resolve耗时");const s=await Ao();console.timeEnd("resolve耗时");const o=_().find(r=>r.name==="resolve"&&r.scope==="Path")?.testModule;o.document.example.code=`const newPath = await resolve(${n.replace(/\\/g,"\\\\")}, ${a.replace(/\\/g,"\\\\")})`,t.showDetails(JSON.stringify(s),"Path.resolve")},Ru={title:"路径解析",targetMethodName:"resolve",content:"将路径或路径段序列解析为绝对路径",args:[{componentType:"FileInput",value:"",suffix:"",verifyPath:!1,desc:"单文件选择",id:"kE_KrfyUN0QJKVHvVTVEO",onlyTest:!1,noTest:!1,name:"path",label:"主路径",displayCondition:[],placeholder:"请输入主路径",multiple:!1},{componentType:"input",value:"",desc:"文本输入框",id:"eF9D6-lIMLxsh5g4GuoBd",onlyTest:!1,noTest:!1,name:"addPath",label:"路径表达式",displayCondition:[],placeholder:"请输入路径表达式：如../a.png"}]},Eu=`function resolve(
  path: string,
  addPath: string,
): Promise<string>;
`,Vu={scope:"Path",name:"resolve",exportFn:{fn:Ao},testModule:{weight:4,dialog:Ru,callback:Du,document:Ou},declaration:Eu,auxiliary:Oo},On=Object.freeze(Object.defineProperty({__proto__:null,resolveApi:Vu},Symbol.toStringTag,{value:"Module"})),Lu={howToUse:"构建与用户交互的表单",params:[{name:"buildFormList",required:!1,instructions:"表单组件数组",type:"BuildFormItems[]",default:"[]",children:[{name:"BuildFormItems",required:!1,instructions:"表单组件",type:["BuildFormItem.Input "," BuildFormItem.MultipleSelect "," BuildFormItem.GroupSelect "," BuildFormItem.Select "," BuildFormItem.Check"],default:" ",children:[{name:"BuildFormItem.Input",required:!1,instructions:"输入框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"input"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"输入框的(默认)值",type:"string",default:"",children:[]}]},{name:"BuildFormItem.MultipleSelect",required:!1,instructions:"多选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:"“multiplSelect”",default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的(默认)值",type:"string[]",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]},{name:"limit",required:!1,instructions:"最大选中数量",type:"number",default:"",children:[]}]},{name:"BuildFormItem.GroupSelect",required:!1,instructions:"单选分组组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"groupSelect"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项",type:"GroupItem[]",default:"",children:[{name:"groupLabel",required:!0,instructions:"分组标签",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"分组中的选项",type:"OptionItem[]",default:"",children:[{name:"label",required:!0,instructions:"选项标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选项值",type:"string",default:"",children:[]}]}]}]},{name:"BuildFormItem.Select",required:!1,instructions:"单选组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"select"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"value",required:!0,instructions:"选中的值",type:"string",default:"",children:[]},{name:"options",required:!0,instructions:"选项数组",type:"string[]",default:"",children:[]}]},{name:"BuildFormItem.Check",required:!1,instructions:"复选框组件",type:"object",default:"",children:[{name:"targetGroupLabel",required:!0,instructions:"组标签",type:"string",default:"",children:[]},{name:"type",required:!0,instructions:"组件类型",type:'"check"',default:"",children:[]},{name:"label",required:!0,instructions:"组件标签",type:"string",default:"",children:[]},{name:"checked",required:!0,instructions:"是否选中",type:"boolean",default:"",children:[]}]}]}]}],returnValue:{type:"void"},example:{title:"构建与用户交互的表单",code:"buildForm([]);"},searchKeys:["build","from"],codeSnippet:"buildForm(${1:buildFormList});${0:}"},ce=en("listStore",{state:()=>({rendererList:[],scriptList:[],projectList:[],deviceList:[],codeSnippets:[]}),getters:{},actions:{async exportData(){const e={version:"playground"};return Object.assign(e,this.$state),JSON.stringify(e)},async importData(e){const t=JSON.parse(e);delete t.version,Object.assign(this.$state,t),this.$patch(t)},async init(){this.$subscribe(async(t,n)=>{t.storeId==="listStore"&&localStorage.setItem("listStore",await this.exportData())},{detached:!1});const e=window.localStorage.getItem("listStore");e&&await this.importData(e)}}});class Nu{constructor(t){this.form=t}getFieldValue=(t,n,a,s="*脚本设置")=>{const o=this.form.find(l=>l.groupLabel===s),r=t.replace("List","")+"List";if(o&&o.enable&&r in o){const l=o[r].find(i=>i.label===n);if(l)return"checked"in l?l.checked:l.value}return a};getFieldValueById=(t,n)=>{let a=n;return this.form.filter(s=>s.enable).find(s=>{const r=Object.keys(s).map(l=>{if(l.includes("List"))return s[l]}).filter(l=>!!l).flat().find(l=>l.id===t);if(r)return"checked"in r?a=r.checked:"value"in r&&(a=r.value),!0}),a};static genId=t=>t.map(n=>{const a={id:"g_"+ye(),...n};return Object.keys(a).forEach(s=>{s.includes("List")&&(a[s]=a[s].map(o=>({id:"i_"+ye(),...o})))}),a})}const ju=e=>JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>{if(a.pickerType==="color")a.predefine&&(a.predefine=a.predefine.filter(s=>!!(s.includes("#")||s.includes("rgb"))));else if(a.isRange)a.value=a.value.filter(s=>s).map(s=>{if("valueFormat"in a){const o=ft(s,a.valueFormat);return o.isValid()?o.toLocaleString():new Date().toLocaleString()}return typeof s=="string"?s:s.toLocaleString()});else if("valueFormat"in a){const s=ft(a.value,a.valueFormat);s.isValid()?a.value=s.toLocaleString():a.value=new Date().toLocaleString()}else typeof a.value!="string"&&a.value?a.value=a.value.toLocaleString():a.value=new Date().toLocaleString();return a})})),uh=e=>{const t=JSON.parse(JSON.stringify(e)).map(n=>({...n,pickerList:n.pickerList.map(a=>(a.pickerType!=="color"&&(a.isRange?(a.value.length||(a.value=[new Date,new Date]),a.value=a.value.map(s=>(s=new Date,"valueFormat"in a?ft(s).format(a.valueFormat):s))):(a.value=new Date(a.value),"valueFormat"in a&&(a.value=ft(a.value).format(a.valueFormat)))),a))}));return console.log("-----------res:",JSON.parse(JSON.stringify(t.map(n=>n.pickerList)))),t};let qt="",Do={};const Dn=e=>{qt="";const t=e?.envSetting.workDir?.replaceAll("\\","\\\\")||"",n=e?.envSetting._screenshotDir?.replaceAll("\\","\\\\")||"",a=e?.envSetting.screenshotSavePath?.replaceAll("\\","\\\\")||"",s=e?.envSetting._scriptRootDir?.replaceAll("\\","\\\\")||"",o={WORK_DIR:t,SCREEN_SHOT_DIR:n,SCREEN_SHOT_PATH:a,SCRIPT_ROOT_DIR:s};return Do=o,Object.keys(o).map(l=>(qt+=`declare const ${l}: string;
`,`const ${l} = "${o[l]}";`)).join(`
`)},Uu=()=>Dn(),zu=()=>qt,Bu=()=>{const e=Z();return Dn(e),Do},Ro=`
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
`,qu=Ro.replace(/declare enum/g,"enum"),[Ku,Gu]=$e("mockScriptList",{defaultValue:[]}),[Ju,Wu]=$e("mockCodeSnippetList",{defaultValue:[{id:ye(),name:"logtype",filePath:"内部存储",description:"编辑器输入logtype以插入本片段",prefix:"logtype",content:'["loading", "success", "danger", "warning", "info"]'}]}),Kt=S(JSON.parse(JSON.stringify(Ku.value))||[]),Gt=S(JSON.parse(JSON.stringify(Ju.value))||[]);pe(Kt,()=>{Gu(Kt.value)},{deep:!0});pe(Gt,()=>{Wu(Gt.value)},{deep:!0});const Oe=()=>({mockScriptList:Kt,mockCodeSnippetList:Gt}),Rn=e=>{if(!(e==null||e==="")){if(navigator)navigator.clipboard.writeText(e);else{const t=document.createElement("INPUT");t.style.opacity="0",t.style.position="absolute",t.style.top="-1000px",document.body.appendChild(t),t.value=e,t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy"),document.body.removeChild(t)}return e}},Yu=(e,t="dot")=>{const{x:n,y:a,width:s,height:o}=e;let r="";t==="dot"?r=`${n},${a},${s},${o}`:r=`{"x":${n},"y":${a},"width":${s},"height":${o}}`,Rn(r)},Xu=e=>Xs(e),Hu=()=>Hs();let rt=[];const va=async e=>{if(!e){const{rendererList:a}=ce();e=a}if(e.find(a=>a.groupLabel==="*脚本设置")?.checkList.find(a=>a.label==="导入上次运行配置")?.checked){await Ge();const a=JSON.parse(JSON.stringify(e));rt=JSON.parse(JSON.stringify(e));const s=localStorage.getItem(window[P].getScriptId()+"-rendererList");if(s){const o=JSON.parse(s);for(let r=0;r<a.length;r++){const l=a[r],i=o.find(u=>u.groupLabel===l.groupLabel);if(i){l.enable=i.enable;for(let u=0;u<l.selectList.length;u++){const f=l.selectList[u],p=i.selectList.find(v=>v.label===f.label);if(p&&!p.segmented){let v=[],h;p.group?v=p.options.flatMap(w=>w.options.map($=>typeof $=="object"?$.value:$)):v=p.options.map(w=>typeof w=="object"?w.value:w),p.multiple?Array.isArray(p.value)?h=p.value.filter(w=>v.includes(w)):console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):Array.isArray(p.value)?console.warn("表单结构发生变化,跳过导入本项的值",JSON.stringify(p)):h=v.includes(p.value)?p.value:f.value,f.value=h}else if(p&&p.segmented){const v=p.options.map(h=>h instanceof Object?h.value:h);f.segmented&&v.includes(f.value)&&(f.value=p.value)}}for(let u=0;u<l.checkList.length;u++){const f=l.checkList[u],p=i.checkList.find(v=>v.label===f.label);p&&(f.checked=p.checked)}for(let u=0;u<l.inputList.length;u++){const f=l.inputList[u],p=i.inputList.find(v=>v.label===f.label);p&&(f.value=p.value)}for(let u=0;u<l.pickerList.length;u++){const f=l.pickerList[u],p=i.pickerList.find(v=>v.label===f.label);p&&(f.value=p.value)}}}a.find(r=>{if(r.groupLabel==="*脚本设置"){r.checkList.find(l=>l.label==="导入上次运行配置").checked=!0;return}}),e.splice(0,e.length,...a)}G.closeAll(),G({title:"配置导入完成",type:"success",position:"bottom-right"})}else{const{openId:a}=Fe();if(a.value==="-1")return;G.closeAll(),G({title:"取消配置导入",type:"info",position:"bottom-right"}),rt.find(s=>{if(s.groupLabel==="*脚本设置"){s.checkList.find(o=>o.label==="导入上次运行配置").checked=!1;return}}),rt.length?e.splice(0,e.length,...rt):e.splice(0,e.length,...e)}},En=()=>{const{rendererList:e}=ce();setTimeout(()=>{window[P].rendererList=e})},Eo=e=>{const{rendererList:t}=ce();t.splice(0,t.length,...e),En()},Vo=(e,t=!0)=>{const{rendererList:n}=ce(),a=n.findIndex(s=>s.groupLabel===e.targetGroupLabel);if(a===-1){const s={groupLabel:e.targetGroupLabel,enable:e.enable===void 0?!0:e.enable,checkList:[],selectList:[],inputList:[],pickerList:[]};s[e.type+"List"]=[e],n.push(s)}else n[a][e.type+"List"].push(e);t&&En()},Zu=e=>{for(let t=0;t<e.length;t++){const n=e[t];Vo(n,!1)}En()},Ye=S(1),Ue=S(0),vt=S(""),Jt=S(""),Qu=()=>Ye.value,ed=()=>Ue.value,td=()=>vt.value,nd=()=>Jt.value,ad=e=>{Ye.value=e},od=e=>{Ue.value=e},sd=e=>{Ue.value<Ye.value&&Ue.value++,vt.value=e},Lo=(e,t)=>{e===""?(Ye.value=1,Ue.value=0,Jt.value="",vt.value=""):(Ue.value=Ye.value,Jt.value=e,vt.value=t||"")},rd=async()=>{const e=await new Promise(t=>{let n=window[P].startScriptSignal&&window[P].startScriptSignal.signal;n&&n.aborted&&(window[P].startScriptSignal=new AbortController,n=window[P].startScriptSignal.signal);const a=()=>{window[P].abortSignalInScript=void 0,n.removeEventListener("abort",a),localStorage.setItem(window[P].getScriptId()+"-rendererList",JSON.stringify(window[P].rendererList)),t(window[P].rendererList)};n.addEventListener("abort",a)});return new Nu(e)},ld=S(),id=(e,t)=>{const{genBuiltInApi:n}=tt(),a=n(e),s=Z(),o=Dn(s),r=`
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
          ${qu}
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
  `;return ha.transpile(r,{target:ha.ScriptTarget.ESNext,removeComments:!0})},Ne=[],cd=(e,t)=>{const n=setInterval(()=>{try{const{isStop:a}=window[P];if(a){No(n);return}e()}catch(a){console.error(a)}},t);return Ne.push(n),n},No=e=>{clearInterval(e),Ne.splice(Ne.indexOf(e),1)};let Nt=null;const ud=()=>{Nt&&clearTimeout(Nt),Nt=setTimeout(()=>{Ne.forEach(e=>{clearInterval(e)}),Ne.splice(0,Ne.length),console.log("已清除所有定时器")},300)},Pe=e=>{const t=ce();Qe(t);const{openId:n}=Fe();return Oe().mockScriptList.value.find(a=>a.id===n.value)[e]},dt=S("ready"),{notify:_a}=Oa,wa=()=>Pe("id");let _t=!1;const dd=e=>{_t=e},Wt=S(!Je),pd=A(()=>Pe("name")),md=A(()=>Pe("version")),gd=A(()=>Pe("savePath")),xa=["changeScriptRunState","isStop","removeIntervals","log","setInterval","getScriptId"],fd=(e,t)=>{const{runningFnId:n}=C();if(!(t&&t!==n.value))if(e==="stop")dt.value="done",window[P].removeIntervals&&window[P].removeIntervals(),window[P]&&Object.keys(window[P]).forEach(a=>{xa.includes(a)||delete window[P][a]}),Wt.value&&!Je&&Zs.getByLabel("main").then(a=>{a?.show()}).finally(_a.done);else if(e)dt.value="ready",_t=!1;else{if(_t)return;if(bd().Preludes.log("脚本执行完成","success",void 0,!0),Lo("success","脚本执行完成"),dt.value="done",window[P]&&Object.keys(window[P]).forEach(a=>{xa.includes(a)||delete window[P][a]}),Wt.value&&!Je){const a=Qs();a.show(),a.setFocus(),_a.done()}}},yd=()=>{const{openId:e}=Fe(),t=ce();return Qe(t),{importLastRunConfig:va,replaceRendererList:Eo,getWillRunScript:id,setEndBeforeCompletion:dd,getEndBeforeCompletion:()=>_t,getFileInfo:Pe,buildForm:a=>{if(Zu(a),e.value!=="-1"){const s=Oe().mockScriptList.value.find(o=>o.id===e.value);if(s?.setting.autoImportLastRunConfig){if(s.setting.autoImportLastRunConfig){const o=window[P].rendererList?.find(r=>r.groupLabel==="*脚本设置");if(o){const r=o.checkList.find(l=>l.label==="导入上次运行配置");r&&(r.checked=!0,va())}}}else return}}}},hd=()=>({taskRunStatus:dt,name:pd,version:md,hideWindow:Wt,savePath:gd}),bd=()=>{const{exportAllFn:e}=tt(),{rendererList:t}=ce();return{copyText:Xu,readClipboardFirstText:Hu,isStop:!1,SCRIPT_ID:wa(),setAllTask:ad,setCurTask:od,getAllTask:Qu,getCurTask:ed,getCurTaskName:td,nextTask:sd,getTaskStatus:nd,setTaskEndStatus:Lo,getCustomizeForm:rd,abortSignalInScript:ld.value,startScriptSignal:new AbortController,setInterval:cd,clearInterval:No,removeIntervals:ud,rendererList:t,getScriptId:wa,changeScriptRunState:fd,...e(),replaceRendererList:Eo,pushElement:Vo}},vd=async(e=[],t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return!1;try{yd().buildForm(e)}catch(a){console.error("buildFormFnError: ",a)}},jo={onDialogOpen:async(e,...t)=>{const n=t[0]?.value||[];e(),console.log("buildForm onDialogOpen",n)},parameterReplace:e=>{e.replaceCurFnArgs(JSON.stringify(e.buildFormList))}},_d=async(e,t)=>{if(e.replaceCurFnArgs){jo.parameterReplace(e),m.apiAutoTip();return}t.showDetails("此方法不支持测试调用","Preludes.buildForm")},wd={title:"构建表单",targetMethodName:"buildForm",content:"构建与用户交互的表单",args:[]},xd=`function buildForm(
  buildFormList: BuildFormItems[]
): void;
`,Sd={scope:"Preludes",name:"buildForm",exportFn:{fn:vd},testModule:{weight:1,dialog:wd,callback:_d,document:Lu},declaration:xd,auxiliary:jo},At=Object.freeze(Object.defineProperty({__proto__:null,buildFormApi:Sd},Symbol.toStringTag,{value:"Module"}));let lt="";const Uo={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="log"&&o.scope==="Preludes").testModule.dialog;s.args&&(lt=n[0]?.expression||"",s.args.forEach((o,r)=>{r===0?n[0]?.value&&(typeof n[0].value=="string"?(o.value=n[0].value,o.value=o.value.replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"").replace(/\\/g,"")):o.value=JSON.stringify(n[0].value).replace(/\\"/g,"")):o.value=n[r]?.value||"info"}))},parameterReplace:e=>{let t="";try{t=JSON.stringify(new Function("",`const exp = ${lt};return exp`)())}catch{}if(e.type!=="info")if(e.msg===t)e.replaceCurFnArgs(`${lt}, "${e.type}"`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}, "${e.type}"`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\`, "${e.type}"`)}else if(e.msg===t)e.replaceCurFnArgs(`${lt}`);else{try{if(typeof new Function("",`const exp = ${e.msg.replace(/\\/g,"")};return exp`)()=="object"){e.replaceCurFnArgs(`${e.msg.replace(/\\/g,"")}`);return}}catch{}e.replaceCurFnArgs(`\`${e.msg.replace(/\\/g,"")}\``)}}},Td=`
function log(
  msg: any,
  type?: "success" | "danger" | "info" | "warning" | "loading"
):void;
`,$d={title:"输出日志",targetMethodName:"log",content:"在运行控制台或弹窗中输出日志信息",args:[{name:"msg",componentType:"input",value:"",label:"要输出的日志信息"},{name:"type",componentType:"select",value:"info",label:"日志类型",options:["success","danger","info","warning","loading"]}]},Md={howToUse:"输出日志",params:[{name:"msg",required:!0,instructions:"要输出的日志信息",type:"any",default:""},{name:"type",required:!1,instructions:"日志类型",type:["'success'","'danger'","'info'","'warning'","'loading'"],default:"'info'"}],returnValue:{type:"void"},example:{code:`//info类型日志：
log("我是日志");
//success类型日志：
log("我是日志", "success");
//danger类型日志：
log("我是日志", "danger");
//warning类型日志：
log("我是日志", "warning");
//loading类型日志：
log("我是日志", "loading");`},searchKeys:["log","日志","Preludes"],codeSnippet:"log('${1:日志内容}'${2:, 'loading'});"},Yt=K([]),kd=()=>{const{notify:e}=Oa;Yt.splice(0,Yt.length),e.clear()},zo=()=>({logOutput:Yt,clearLogOutput:kd}),Bo=(e=4)=>{let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return t},Id=async()=>`playground-${ye(4)}`,[qo,Pd]=$e("tempDeviceId",{defaultValue:""});qo.value===""&&Id().then(e=>{Pd(e)});const[Cd,Fd]=$e("token",{defaultValue:""}),De=()=>Cd.value,Ad=Fd,Od=Ma.create({baseURL:"https://isyc.gitee.io/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Od.interceptors.request.use(e=>e,e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const Dd=Ma.create({baseURL:"http://"+Aa+"/api/",timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});Dd.interceptors.request.use(e=>{const t=De();return t&&(e.headers.Authorization=t),e},e=>(oe({showClose:!0,message:e.data.MSG,type:"error"}),Promise.reject(e.data.MSG)));const pt=[],wt=S("离线");let te=null;const Ko=()=>{if(te){console.error("useWss createWs error: WebSocket已经存在");return}try{te=new WebSocket("ws://"+Aa),te.onopen=function(){console.log("Connected to the server."),te?.send(JSON.stringify({type:"INIT",token:De(),deviceId:qo.value}))},te.onmessage=function(e){let t="";try{t=JSON.parse(e.data)}catch{t=e.data}console.log("Received data from server: ",t),pt.forEach(n=>n(t))},te.onclose=function(e){e.wasClean?console.log(`Connection closed cleanly, code=${e.code}, reason=${e.reason}`):console.log("Connection died")},te.onerror=function(e){console.log(`Error: ${e}`)},oe.success("WebSocket连接成功")}catch(e){console.error(e),oe.error("WebSocket连接失败"),wt.value="离线"}},Go=()=>{te?.close(),te=null};pe(wt,()=>{wt.value==="在线"?Ko():(Go(),Me().closeAutoOnline())});const Rd=e=>{const t=pt.length;return pt.push(e),()=>{pt.splice(t,1)}},Ed=(e,t)=>{const{controlDeviceInfo:n}=Me();te?.send(JSON.stringify({type:"LINK_RESP",accessToken:n.accessToken,success:e,reason:t,token:De()}))},Vd=e=>{const{controlDeviceInfo:t}=Me();te?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"RESPONSE_SCRIPT_LIST",data:e}}))};let ge="";const Ld=(e=[],t)=>{const{controlDeviceInfo:n}=Me();let a;ge===""?(a=ye(),ge=a):a=ge,t||console.log("RESPONSE_RUN_SCRIPT",ge),te?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:n.accessToken,reverse:!0,data:{type:"COMMAND",command:t?"SYNC_FORM":"RESPONSE_RUN_SCRIPT",form:ju(e),syncId:a}}))},Jo=e=>{const{controlDeviceInfo:t}=Me();te?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:t.accessToken,reverse:!0,data:{type:"COMMAND",command:"DEPRECATED_SYNC_ID",syncId:e}}))},Nd=e=>ge===e?(ge="",Jo(e),!0):(ge=e,!1),jd=e=>{ge===e&&(ge="")},Ud=(e,t,n)=>{const{controlDeviceInfo:a}=Me();te?.send(JSON.stringify({type:"FORWARD",token:De(),accessToken:a.accessToken,reverse:!0,data:{type:"COMMAND",command:"SYNC_LOG",log:e,time:t,logType:n}}))},xt=()=>({wssState:wt,createWs:Ko,closeWs:Go,onMsg:Rd,responseReq:Ed,responseScriptList:Vd,syncRendererList:Ld,sendDeprecatedSyncId:Jo,deprecatedSyncId:jd,existSyncId:Nd,syncLog:Ud}),zd={};function Bd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-language-typescript":""},null,-1)])),_:1})}const Sa=H(zd,[["render",Bd]]),qd={};function Kd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})}const Gd=H(qd,[["render",Kd]]),Jd={};function Wd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-folder-cog-outline":""},null,-1)])),_:1})}const Yd=H(Jd,[["render",Wd]]),Xd={};function Hd(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})}const Zd=H(Xd,[["render",Hd]]),Wo="template-secretKey",Yo=e=>zt.AES.encrypt(e,Wo).toString(),Qd=e=>zt.AES.decrypt(e,Wo).toString(zt.enc.Utf8),Xo=S(!1),Se=K({username:"",password:"",rePassword:""}),Ho=S("login"),[jt,Zo]=$e("lastUserInfo",{defaultValue:{username:"",password:"",autoLogin:!1}}),ep=()=>{Zo({username:Se.username,password:Yo(Se.password),autoLogin:!0})},tp=()=>(Se.username=jt.value?.username||"",Se.password=Qd(jt.value?.password||""),jt.value?.autoLogin||!1),Qo=S(!1),np=S(""),ap=(e,t,n)=>{t?/^[a-zA-Z0-9_]{3,16}$/.test(t)?n():n(new Error("用户名必须是3到16个字符的字母、数字或下划线")):n(new Error("用户名不能为空"))},op=(e,t,n)=>{t?/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(t)?n():n(new Error("密码必须是8到20个字符，且至少包含一个字母和一个数字")):n(new Error("密码不能为空"))},sp=(e,t,n)=>{if(Ho.value==="login"){n();return}t?t!==Se.password?n(new Error("确认密码与密码不匹配")):n():n(new Error("确认密码不能为空"))},rp=K({username:[{validator:ap,trigger:"blur"}],password:[{validator:op,trigger:"blur"}],rePassword:[{validator:sp,trigger:"blur"}]}),lp=()=>{Zo({username:Se.username,password:Yo(Se.password),autoLogin:!1}),Qo.value=!1,Ad(""),Xo.value=!1,xt().closeWs()},ip=()=>({form:Se,formShow:Ho,isLogin:Qo,username:np,formRules:rp,logout:lp,saveLastUserInfo:ep,resetLastUserInfoToForm:tp,autoLogin:Xo}),cp=W({__name:"AccountIcon",props:{size:{type:String,default:"large"}},setup(e){const{isLogin:t,username:n}=ip(),a=A(()=>n.value[0]?.toUpperCase()||"");return(s,o)=>{const r=ne,l=Te,i=er;return c(t)?(b(),T(i,{key:1,size:18},{default:d(()=>[g(l,{size:"small"},{default:d(()=>[M(E(c(a)),1)]),_:1})]),_:1})):(b(),T(r,{key:0,size:e.size},{default:d(()=>o[0]||(o[0]=[x("span",{"i-mdi-account":""},null,-1)])),_:1},8,["size"]))}}}),up={};function dp(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-code-block-tags":""},null,-1)])),_:1})}const pp=H(up,[["render",dp]]),mp={};function gp(e,t){const n=ne;return b(),T(n,{size:"large"},{default:d(()=>t[0]||(t[0]=[x("span",{"i-mdi-dev-to":""},null,-1)])),_:1})}const fp=H(mp,[["render",gp]]),Vn=[{path:"/",redirect:"/script/list"},{path:"/script",name:"script",component:()=>U(()=>import("./ScriptConsole-Dmw12QeO.js"),__vite__mapDeps([0,1,2,3])),meta:{title:"脚本",icon:Sa,position:"top",id:"script_route"},children:[{path:"list",name:"scriptList",component:()=>U(()=>import("./ScriptList-Cb_x1hTd.js"),__vite__mapDeps([4,5,1,2,6]))},{path:"editor",name:"scriptEditor",component:()=>U(()=>import("./CodeEditor-CN8JZXB_.js"),__vite__mapDeps([7,8,1,2,9,10,11]))},{path:"setting",name:"scriptSetting",component:()=>U(()=>import("./ScriptSetting-Biyd9sOS.js"),__vite__mapDeps([12,1,2,5,13]))},{path:"run",name:"scriptRunConsole",component:()=>U(()=>import("./ScriptRunConsole-CicZy7Uo.js"),__vite__mapDeps([14,1,2,15,5,10,16]))}]},{path:"/apiTest",name:"apiTest",component:()=>U(()=>import("./APITest-DsbtoJ_y.js"),__vite__mapDeps([17,1,2,18,19,8,9,20])),meta:{title:"调试",icon:Gd,position:"top",id:"apiTest_route"}},{path:"/codeSnippetList",name:"codeSnippetList",component:()=>U(()=>import("./CodeSnippet-CSBWfWpb.js"),__vite__mapDeps([21,5,1,2,22])),meta:{title:"片段",icon:pp,position:"top",id:"codeSnippetList_route"}},{path:"/project",name:"project",component:()=>U(()=>import("./ScriptProject-B5lyn3G-.js"),__vite__mapDeps([23,1,2,24])),meta:{title:"工程",icon:Yd,position:"top",id:"project_route",disabled:!0}},{path:"/setting",name:"setting",component:()=>U(()=>import("./SettingPage-C2cOOx74.js"),__vite__mapDeps([25,1,2,8,9,26])),meta:{title:"设置",icon:Zd,position:"bottom",id:"setting_route"}},{path:"/account",name:"account",component:()=>U(()=>import("./Account-B6rn1Rqt.js"),__vite__mapDeps([27,1,2,28])),meta:{title:"账户",icon:cp,position:"bottom",id:"setting_route"}},{path:"/scriptWindow",name:"scriptWindow",component:()=>U(()=>import("./ScriptRunWindow-DJOkC_nU.js"),__vite__mapDeps([29,1,2,30])),meta:{title:"脚本运行窗口",icon:Sa}},{path:"/floatWindow",name:"floatWindow",component:()=>U(()=>import("./FloatWindow-D4Kc1cbi.js"),__vite__mapDeps([31,1,2,32])),meta:{title:"悬浮窗口"}},{path:"/pointerUtil",name:"pointerUtil",component:()=>U(()=>import("./PointerUtil--yC-1QxK.js"),__vite__mapDeps([33,1,2,34])),meta:{title:"鼠标工具"}},{path:"/notification",name:"notification",component:()=>U(()=>import("./Notification-DEHWLpa-.js"),__vite__mapDeps([35,1,2,15,36])),meta:{title:"通知"}},{path:"/ORW",name:"ORW",component:()=>U(()=>import("./OperationRecordWindow-WZ9fOD7G.js"),__vite__mapDeps([37,1,2,38])),meta:{title:"操作录制悬浮窗口"}},{path:"/depManager",name:"depManager",component:()=>U(()=>import("./DepManagerPage-Rnbw_dfG.js"),__vite__mapDeps([39,1,2,8,9,40])),meta:{title:"依赖管理器"}},{path:"/invokesManager",name:"invokesManager",component:()=>U(()=>import("./InvokesManager-96rMrUP3.js"),__vite__mapDeps([41,1,2,18,19,10,42])),meta:{title:"API",icon:fp,position:"top",disabled:Je}},{path:"/:pathMatch(.*)*",component:()=>U(()=>import("./NotFound-D_9cu9jo.js"),__vite__mapDeps([43,1,2]))}].map(e=>e.meta?.disabled?null:e).filter(e=>e),yp=Vn.filter(e=>e.meta?.position==="top"&&!e.meta?.disabled),hp=Vn.filter(e=>e.meta?.position==="bottom"&&!e.meta?.disabled);var Xt=(e=>(e.None="",e.ScriptList="scriptList",e.CodeSnippetList="codeSnippetList",e))(Xt||{});const bp=K({title:"风染脚本",showContentType:"app-name",apiTest:{searchValue:"",openOutput:!1}}),es=S(window.innerWidth||0);let it=null;const vp=e=>{it&&clearTimeout(it),it=setTimeout(()=>{es.value=e,clearTimeout(it)},100)},_p=S(!1),wp=S(!1),Ht=K({content:"",show:!1,target:""}),ts=S("");let ct;pe(()=>Ht.content,()=>{ct&&clearTimeout(ct),ct=setTimeout(()=>{ts.value=Ht.content,clearTimeout(ct)},300)});const xp=S(!0),Ot=()=>({info:bp,windowInnerWidth:es,syncWindowInnerWidth:vp,clickMinimize:_p,needSyncLastData:wp,searchInfo:Ht,trueSearch:ts,ingoreObserver:xp}),be={scriptList:[{target:"#script_route",title:"脚本列表(介绍)",description:"此处是脚本列表，支持对脚本进行管理、设置、运行"},{target:"#search_script_input",title:"脚本搜索",description:"输入脚本名称或者备注可对显示的列表进行过滤"},{target:"#new_script_btn",title:"新建脚本(操作)",description:"点击此按钮新建一个演示用的脚本，新建完成后可进行下一步",preventNext:!0,onShow:()=>{const{searchInfo:e}=Ot();e.content=""}},{target:"#DEMO_SCRIPT_ITEM .info",title:"演示脚本(介绍)",description:"点击中间可展看查看脚本详情，搜索栏为空时支持拖动排序"},{target:"#DEMO_SCRIPT_ITEM .menu",title:"演示脚本(介绍)",description:"右边的按钮依次是：删除、编辑、打开、设置、运行"},{target:"#DEMO_SCRIPT_ITEM-DEL",title:"删除脚本(介绍)",description:"可从脚本列表中移除脚本(不会删除本地文件)"},{target:"#DEMO_SCRIPT_ITEM-EDIT",title:"编辑脚本(介绍)",description:"点击进入脚本编辑器对脚本进行编辑"},{target:"#DEMO_SCRIPT_ITEM-OPEN",title:"打开脚本(介绍)",description:"可选择使用VSCode打开脚本文件或者在文件管理器中打开脚本所在目录"},{target:"#DEMO_SCRIPT_ITEM-SETTING",title:"脚本设置(介绍)",description:"可对脚本进行设置"},{target:"#DEMO_SCRIPT_ITEM-RUN",title:"运行脚本(介绍)",description:"运行此脚本"}],scriptEditor:[],scriptRunConsole:[],scriptSetting:[],apiTest:[],codeSnippetList:[],setting:[],account:[]},[Sp,Tp]=$e("firstTime",{defaultValue:{scriptList:!0,scriptEditor:!0,scriptSetting:!0,scriptRunConsole:!0,apiTest:!0,codeSnippetList:!0,setting:!0,account:!0}}),mt=K({scriptList:{step:0,touring:!1,steps:be.scriptList,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptEditor:{step:0,touring:!1,steps:be.scriptEditor,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptSetting:{step:0,touring:!1,steps:be.scriptSetting,preventPrevious:!1,preventNext:!1,doneSteps:[]},scriptRunConsole:{step:0,touring:!1,steps:be.scriptRunConsole,preventPrevious:!1,preventNext:!1,doneSteps:[]},apiTest:{step:0,touring:!1,steps:be.apiTest,preventPrevious:!1,preventNext:!1,doneSteps:[]},codeSnippetList:{step:0,touring:!1,steps:be.codeSnippetList,preventPrevious:!1,preventNext:!1,doneSteps:[]},setting:{step:0,touring:!1,steps:be.setting,preventPrevious:!1,preventNext:!1,doneSteps:[]},account:{step:0,touring:!1,steps:be.account,preventPrevious:!1,preventNext:!1,doneSteps:[]}}),gt=S("scriptList"),$p=()=>{mt[gt.value]?.steps.length?(mt[gt.value].step=0,Ge(()=>mt[gt.value].touring=!0)):oe.warning("当前页面暂未无引导")},Ln=()=>({firstTime:Sp,setfirstTime:Tp,tourInfo:mt,currentTourName:gt,showTour:$p}),xe=tr({history:nr(),routes:Vn});xe.beforeEach((e,t,n)=>{e.path,n()});xe.afterEach((e,t)=>{const n=xe.currentRoute.value.name,{currentTourName:a,firstTime:s,tourInfo:o,setfirstTime:r}=Ln();a.value=n,s.value&&s.value[a.value]&&(s.value[a.value]&&o[a.value].steps.length&&(o[a.value].touring=!0),r({...s.value,[a.value]:!1}))});const Mp=S(!0),kp=S(1),Nn=S("960px"),jn=S("600px"),Ip=()=>{Nn.value="960px",jn.value="600px"},Pp=()=>{Nn.value="100%",jn.value="100%"},St=()=>({isMainWindow:Mp,menuKey:kp,appWidth:Nn,appHeight:jn,unmaximizeSize:Ip,maximizeSize:Pp}),[Cp,ns]=$e("controlCode",{defaultValue:Bo()}),Fp=()=>{ns(Bo())},Ap=()=>{ka.prompt("请输入四位数字控制码","控制码",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{4}$/,inputErrorMessage:"控制码格式错误"}).then(({value:e})=>{oe.success("控制码已更新"),ns(e)}).catch(()=>{console.log("cancel")})},[Xe,Un]=$e("controlConf",{defaultValue:{autoOnline:!1,autoAsk:!1}}),Op=A({get:()=>Xe.value?.autoOnline,set:e=>Un({autoAsk:Xe.value?.autoAsk||!1,autoOnline:e||!1})}),Dp=A({get:()=>Xe.value?.autoAsk,set:e=>Un({autoOnline:Xe.value?.autoOnline||!1,autoAsk:e||!1})}),Rp=()=>{Un({autoAsk:Xe.value?.autoAsk||!1,autoOnline:!1})},Ie=K({id:"",accessToken:"",willRunScriptId:"",willSyncForm:!1,executeScript:"willExec"});let Ta=()=>{};pe(()=>Ie.id,()=>{Ie.id?Ta=xt().onMsg(e=>{if(e.type==="COMMAND")if(e.command==="REQUEST_SCRIPT_LIST"){const t=Oe().mockScriptList.value.map(n=>({id:n.id,name:n.name,description:`[${n.version}]`+n.description}));xt().responseScriptList(t)}else if(e.command==="RUN_SCRIPT"){Ie.willSyncForm=!0,Ie.willRunScriptId=e.scriptId;const t=Z(),{app:n}=Qe(t);xe.replace("/script/list"),St().menuKey.value++,Ot().info.showContentType="script",n.value.state.aside.currentItem="script",Ie.willSyncForm=!0}else e.command==="EXECUTE_SCRIPT"&&(Ie.executeScript=e.state)}):Ta()});const Me=()=>({controlCode:Cp,refreshCode:Fp,updateCode:Ap,autoOnline:Op,autoAsk:Dp,closeAutoOnline:Rp,controlDeviceInfo:Ie}),Ep=()=>{const e=window.console,t=Object.create(e);t.error=function(...n){const a=n.map(s=>typeof s=="string"?s:JSON.stringify(s)).join(" ");zo().logOutput.push({id:"SYS-"+ye(),time:new Date(Date.now()).toLocaleTimeString(),log:a,type:"danger",timestamp:Date.now()}),e.error.call(this,...n)},window.console=t},Vp=e=>{},Lp=(e,t)=>{},Np={setProductionErrorReport:Ep,scriptConsoleErrorReport:Lp,report:Vp},{logOutput:jp}=zo(),{controlDeviceInfo:Up}=Me(),zp=(e,t,n,a=!1)=>{const{notAllowedFnId:s}=C(),{taskRunStatus:o}=hd();if(n&&s.value.includes(n))return!1;if(!a&&o.value==="done")return;const r=new Date(Date.now()),l=[r.getHours(),r.getMinutes(),r.getSeconds()].map(f=>f<10?"0"+f:f).join(":"),i=typeof e=="string"?e:JSON.stringify(e);jp.push({id:ye(),time:l,log:i,type:t||"info",timestamp:Date.now()}),Up.executeScript==="execute"&&xt().syncLog(i,l,t||"info"),t==="danger"&&(Pe("name"),Pe("version"));const u=document.getElementById("consoleLogDiv");u&&(u.scrollTop=u?.scrollHeight+9999)},Bp=async(e,t)=>{if(e.replaceCurFnArgs){const n=Uo.parameterReplace(e);return m.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.log")},qp={name:"log",scope:"Preludes",exportFn:{fn:zp},testModule:{weight:1,dialog:$d,document:Md,callback:Bp},declaration:Td,auxiliary:Uo},Dt=Object.freeze(Object.defineProperty({__proto__:null,logApi:qp},Symbol.toStringTag,{value:"Module"})),as={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="sleep"&&o.scope==="Preludes").testModule.dialog;s.args&&(isNaN(Number(n[0]?.value))?s.args[0].value=1e3:s.args[0].value=Number(n[0]?.value)||1e3)},parameterReplace:e=>{e.ms===1e3?e.replaceCurFnArgs(""):e.replaceCurFnArgs(`${e.ms}`)}},Kp="function sleep(ms?: number):Promise<void>;",Gp={title:"休眠指定时长",targetMethodName:"sleep",content:"等待指定的毫秒数后继续执行后续操作",args:[{name:"ms",componentType:"numberInput",value:1e3,label:"休眠时长的毫秒数"}]},Jp={howToUse:"休眠指定时长",params:[{name:"ms",required:!1,instructions:"休眠时长的毫秒数",type:"number",default:"1000"}],returnValue:{type:"Promise<void>"},example:{code:`//休眠1000ms
await sleep();
//休眠2000ms
await sleep(2000);`},searchKeys:["sleep","休眠","停止","等待","暂停","延时"],codeSnippet:"sleep(${1:time_ms});"},Wp=async(e,t)=>{if(e.replaceCurFnArgs){const n=as.parameterReplace(e);return m.apiAutoTip(),n}t.showDetails("此方法无法直接调用，请在脚本中使用！","Preludes.sleep")},Yp={name:"sleep",scope:"Preludes",exportFn:{fn:Ai},testModule:{weight:1,dialog:Gp,document:Jp,callback:Wp},declaration:Kp,auxiliary:as},Rt=Object.freeze(Object.defineProperty({__proto__:null,sleepApi:Yp},Symbol.toStringTag,{value:"Module"})),Xp={howToUse:"ADB截图",returnValue:{type:"Promise<string>",instructions:"截图结果"},example:{code:"const res = await adbScreenshot();"},searchKeys:["ADB","adb","截图"],codeSnippet:"await adbScreenshot();"},os=async(e,t)=>"disconnected xxx",ss=async(e,t)=>"already connected to XXX",Et=async(e=0,t)=>"截图完成",Hp=async(e,t)=>{const n=await Et();t.showDetails(n)},Zp=`
declare function adbScreenshot(): Promise<string>;
`,Qp={name:"adbScreenshot",exportFn:{fn:Et},testModule:{weight:3,dialog:{notOpen:!0,title:"截图",targetMethodName:"adbScreenshot"},callback:Hp,document:Xp},declaration:Zp},zn=Object.freeze(Object.defineProperty({__proto__:null,adbScreenshotApi:Qp},Symbol.toStringTag,{value:"Module"})),rs=async e=>"unLink",em=async(e,t)=>{const n=await rs();t.showDetails(n)},tm={howToUse:"获取设备状态",returnValue:{type:"Promise<string>",instructions:"设备状态"},example:{code:"const res = await adbState();"},searchKeys:["ADB","adb","获取设备状态"],codeSnippet:"const ${1:res} = await adbState();"},nm=`
declare function adbState(): Promise<string>;
`,am={name:"adbState",exportFn:{fn:rs},testModule:{weight:1,dialog:{notOpen:!0,title:"获取设备状态",targetMethodName:"adbState"},callback:em,document:tm},declaration:nm},Bn=Object.freeze(Object.defineProperty({__proto__:null,adbStateApi:am},Symbol.toStringTag,{value:"Module"})),ls=async e=>"OK",om=async(e,t)=>{const n=await ls();t.showDetails(n)},sm={howToUse:"点击当前连接ADB设备的Home键",returnValue:{type:"Promise<string>",instructions:"点击Home键结果, 一般用不上"},example:{code:"await clickHomeKey();"},searchKeys:["ADB","adb","点击Home键","home","key"],codeSnippet:"await clickHomeKey();"},rm=`
declare function clickHomeKey():Promise<string>;
`,lm={name:"clickHomeKey",exportFn:{fn:ls},testModule:{weight:1,dialog:{notOpen:!0,title:"点击Home键",targetMethodName:"clickHomeKey"},callback:om,document:sm},declaration:rm},qn=Object.freeze(Object.defineProperty({__proto__:null,clickHomeKeyApi:lm},Symbol.toStringTag,{value:"Module"})),is=async e=>"OK",im=async(e,t)=>{const n=await is();t.showDetails(n)},cm={howToUse:"点击返回键",returnValue:{type:"Promise<string>",instructions:"点击返回键结果, 一般用不上"},example:{code:"await clickReturnKey();"},searchKeys:["ADB","adb","点击返回键","return","key"],codeSnippet:"await clickReturnKey();"},um=`
declare function clickReturnKey(): Promise<string>;
`,dm={name:"clickReturnKey",exportFn:{fn:is},testModule:{weight:1,dialog:{notOpen:!0,title:"点击返回键",targetMethodName:"clickReturnKey"},callback:im,document:cm},declaration:um},Kn=Object.freeze(Object.defineProperty({__proto__:null,clickReturnKeyApi:dm},Symbol.toStringTag,{value:"Module"})),cs=async(e,t=!1,n)=>"The execution is complete",pm={title:"执行cmd命令",targetMethodName:"cmd",content:"执行cmd命令",args:[{name:"command",componentType:"input",label:"需要执行的命令",value:""},{name:"onlyExec",componentType:"switch",label:"是否只执行命令，不返回结果",value:!1}]},us={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="cmd").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=n[0]?.value||"";break;case 1:o.value=n[1]?.value||!1;break}})},parameterReplace:e=>{e.onlyExec?e.replaceCurFnArgs(`"${e.command}",true`):e.replaceCurFnArgs(`"${e.command}"`)}},mm=async(e,t)=>{if(e.replaceCurFnArgs){const s=us.parameterReplace(e);return m.apiAutoTip(),s}console.time("命令执行耗时");const n=await cs(e.command,e.onlyExec);console.timeEnd("命令执行耗时"),t.showDetails(n);const a=_().find(s=>s.name==="cmd")?.testModule;a&&(e.onlyExec?a.document.example.code=`const res = await cmd("${e.command}", true);`:a.document.example.code=`const res = await cmd("${e.command}");`)},gm={howToUse:"执行cmd命令",params:[{name:"command",required:!0,instructions:"需要执行的命令",type:"string",default:""},{name:"onlyExec",required:!1,instructions:"是否只执行命令，不返回结果",type:"boolean",default:"false"}],returnValue:{type:"Promise<string>",instructions:"命令执行结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const res = await cmd("ipconfig");'},searchKeys:["command","cmd","命令","执行"],codeSnippet:"const res = await cmd('${1:command}');"},fm=`
declare function cmd(command:string, onlyExec?:boolean):Promise<string>;
`,ym={name:"cmd",exportFn:{fn:cs},testModule:{weight:3,dialog:pm,callback:mm,document:gm},declaration:fm,auxiliary:us},Gn=Object.freeze(Object.defineProperty({__proto__:null,cmdApi:ym},Symbol.toStringTag,{value:"Module"})),hm={title:"连接设备",targetMethodName:"connectTo",content:"请输入要连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},bm={howToUse:"连接到指定设备",params:[{name:"targetDevice",required:!0,instructions:"要连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await connectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","连接设备"],codeSnippet:"const ${1:res} = await connectTo('${2:targetDevice}');"},ds={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="connectTo").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=n[r]?.value||"";break}})},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},vm=async(e,t)=>{if(e.replaceCurFnArgs){const s=ds.parameterReplace(e);return m.apiAutoTip(),s}console.time("连接到指定设备耗时");const n=await ss(e.targetDevice);console.timeEnd("连接到指定设备耗时");const a=_().find(s=>s.name==="connectTo")?.testModule;a?a.document.example.code=`const res = await connectTo('${e.targetDevice}');`:console.error("找不到connectTo的testModule",_()),t.showDetails(n)},ps=`
declare function connectTo(targetDevice:string):Promise<string>;
`,_m={name:"connectTo",exportFn:{fn:ss},testModule:{weight:3,dialog:hm,callback:vm,document:bm},declaration:ps,auxiliary:ds},wm=ps,Jn=Object.freeze(Object.defineProperty({__proto__:null,connectToApi:_m,connectToApiDeclaration:wm},Symbol.toStringTag,{value:"Module"})),ms=async(e,t,n,a,s,o,r)=>{const{notAllowedFnId:l}=C();if(r&&l.value.includes(r))return-2;try{return await O.cropPicture(e,t,n,a,s,o)}catch(i){return console.error(i),-1}},gs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="cropPicture").testModule.dialog.args.forEach((o,r)=>{r===0?o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[0]?.value||"")):r===1?o.componentType==="RectInput"&&(o.value.x=+n[1]?.value||0,o.value.y=+n[2]?.value||0,o.value.width=+n[3]?.value||0,o.value.height=+n[4]?.value||0):r===2&&o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[5]?.value||""))})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)},${e.range.x},${e.range.y},${e.range.width},${e.range.height},${m.replaceConstantPath(e.outPath)}`)}},xm=async(e,t)=>{if(e.replaceCurFnArgs){const s=gs.parameterReplace(e);return m.apiAutoTip(),s}console.time("cropPicture耗时");const n=await ms(e.path,e.range.x,e.range.y,e.range.width,e.range.height,e.outPath);console.timeEnd("cropPicture耗时"),n?t.showDetails("裁剪图片完成","cropPicture"):t.showDetails("裁剪图片失败","cropPicture");const a=_().find(s=>s.name==="cropPicture")?.testModule;a.document.example.code=`const res = await cropPicture(
        	"${e.path.replace(/\\/g,"\\\\")}",
        	${e.range.x},
        	${e.range.y},
        	${e.range.width},
        	${e.range.height},
        	"${e.outPath.replace(/\\/g,"\\\\")}",
      )`},Sm={howToUse:"传入图片路径以及截取参数、输出路径",params:[{name:"path",required:!0,instructions:"图片的绝对路径",type:"string",default:""},{name:"x",required:!0,instructions:"截取起点X坐标",type:"number",default:""},{name:"y",required:!0,instructions:"截取起点y坐标",type:"number",default:""},{name:"width",required:!0,instructions:"从截取起点开始的截取宽度",type:"number",default:""},{name:"height",required:!0,instructions:"从截取起点开始的截取高度",type:"number",default:""},{name:"outPath",required:!0,instructions:"截取后图片的输出路径",type:"string",default:""}],returnValue:{type:"Promise<number>",instructions:"返回1为截取成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await cropPicture('path',x,y,width,height,'outPath');"},searchKeys:["截取","裁剪","图片"],codeSnippet:"const ${1:res} = await cropPicture('${2:path}', ${3:x}, ${4:y}, ${5:width}, ${6:height}, '${7:outPath}');"},Tm={title:"裁剪图片",targetMethodName:"cropPicture",content:"裁剪图片",args:[{name:"path",componentType:"FileInput",value:"",label:"待裁剪图片路径"},{name:"range",componentType:"RectInput",targetSrc:"path",label:"裁剪区域",value:{x:0,y:0,width:0,height:0}},{name:"outPath",componentType:"FileInput",value:"",label:"裁剪后输出路径"}]},$m=`
declare function cropPicture(
    path:string,
    x:number,
    y:number,
    width:number,
    height:number,
    outPath:string
):Promise<number>;
`,Mm={name:"cropPicture",exportFn:{fn:ms},testModule:{weight:2,callback:xm,document:Sm,dialog:Tm},declaration:$m,auxiliary:gs},Wn=Object.freeze(Object.defineProperty({__proto__:null,cropPictureApi:Mm},Symbol.toStringTag,{value:"Module"})),fs=async e=>[],km=async(e,t)=>{const n=await fs();n?t.showDetails(JSON.stringify(n)):t.showDetails("获取设备列表失败")},Im={howToUse:"获取ADB的设备列表",returnValue:{type:"Promise<string[] | undefined>",instructions:"设备列表"},example:{code:"const deviceList = await devices();"},searchKeys:["ADB","adb","获取设备列表"],codeSnippet:"const ${1:deviceList} = await devices();"},Pm=`
declare function devices(): Promise<string[] | undefined>;
`,Cm={name:"devices",exportFn:{fn:fs},testModule:{weight:2,dialog:{notOpen:!0,title:"获取ADB设备列表",targetMethodName:"devices"},callback:km,document:Im},declaration:Pm},Yn=Object.freeze(Object.defineProperty({__proto__:null,devicesApi:Cm},Symbol.toStringTag,{value:"Module"})),Fm={title:"断开连接设备",targetMethodName:"disConnectTo",content:"请输入要断开连接的设备",args:[{name:"targetDevice",componentType:"select",label:"设备",options:e=>e.deviceList,value:""}]},Am={howToUse:"与目标设备断开连接",params:[{name:"targetDevice",required:!0,instructions:"要断开连接的设备",type:"string",default:""}],returnValue:{type:"Promise<string>",instructions:"断开连接结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await disConnectTo('127.0.0.1:21053');"},searchKeys:["ADB","adb","断开连接设备"],codeSnippet:"const ${1:res} = await disConnectTo('${2:targetDevice}');"},ys={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),o=_().find(r=>r.name==="disConnectTo").testModule.dialog.args[0];o.componentType==="select"&&(o.value=n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`"${e.targetDevice}"`)}},Om=async(e,t)=>{if(e.replaceCurFnArgs){const s=ys.parameterReplace(e);return m.apiAutoTip(),s}console.time("断开连接设备耗时");const n=await os(e.targetDevice);console.timeEnd("断开连接设备耗时"),t.showDetails(n);const a=_().find(s=>s.name==="disConnectTo")?.testModule;a&&(a.document.example.code=`const res = await disConnectTo('${e.targetDevice}');`)},hs=`
declare function disConnectTo(targetDevice:string):Promise<string>;
`,Dm={name:"disConnectTo",exportFn:{fn:os},testModule:{weight:3,dialog:Fm,callback:Om,document:Am},declaration:hs,auxiliary:ys},Rm=hs,Xn=Object.freeze(Object.defineProperty({__proto__:null,disConnectToApi:Dm,disConnectToApiDeclaration:Rm},Symbol.toStringTag,{value:"Module"})),bs=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{width:-2,height:-2};try{return await O.getImgSize(e)}catch(a){return console.error(a),{width:-1,height:-1}}},vs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="getImageSize").testModule.dialog;s.args[0].value=m.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.path)}`)}},Em=async(e,t)=>{if(e.replaceCurFnArgs){const o=vs.parameterReplace(e);return m.apiAutoTip(),o}console.time("getImageSize耗时");const{width:n,height:a}=await bs(e.path);console.timeEnd("getImageSize耗时");const s=_().find(o=>o.name==="getImageSize")?.testModule;s.document.example.code=`const { width, height } = await getImageSize(
	"${e.path.replace(/\\/g,"\\\\")}"
);`,t.showDetails("图片宽高："+n+"x"+a,"getImageSize")},Vm={title:"获取图片宽高",targetMethodName:"getImageSize",content:"获取图片宽高",args:[{name:"path",componentType:"FileInput",value:"",label:"图片路径"}]},Lm={howToUse:"传入待获取宽高的图片路径",params:[{name:"imgPath",required:!0,instructions:"图片的绝对路径",type:"string",default:""}],returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { width, height } = await getImageSize("E:\\\\image.png");'},searchKeys:["图片","宽高","获取"],codeSnippet:'const { width, height } = await getImageSize("${1:imgPath}");'},Nm=`
declare function getImageSize(
    imgPath:string
):Promise<{width:number; height:number;}>;
`,jm={name:"getImageSize",exportFn:{fn:bs},testModule:{weight:1,callback:Em,dialog:Vm,document:Lm},declaration:Nm,auxiliary:vs},Hn=Object.freeze(Object.defineProperty({__proto__:null,getImageSizeApi:jm},Symbol.toStringTag,{value:"Module"})),_s=async(e,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await yt(e)?await O.getImgRectInfo(e):(console.error(`getImgRectInfoFn 文件不存在: ${e}`),null)}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},ws={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="getImgRectInfo").testModule.dialog;s.args[0].value=m.pathStrReset(n[0]?.value||"")},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.imgPath)}`)}},Um=async(e,t)=>{if(e.replaceCurFnArgs){const o=ws.parameterReplace(e);return m.apiAutoTip(),o}const n=e.imgPath.split(".").pop();if(!["png","jpg","jpeg","webp","bmp"].includes(n))return t.showDetails("不支持的格式。","getImgRectInfo");console.time("getImgRectInfo耗时");const a=await _s(e.imgPath);console.timeEnd("getImgRectInfo耗时");const s=_().find(o=>o.name==="getImgRectInfo")?.testModule;s.document.example.code=`const { startX, startY, width, height } = 
            	await getImgRectInfo("${e.imgPath.replace(/\\/g,"\\\\")}");`,t.showDetails(`当前图片标注矩形的起始点以及宽高：${JSON.stringify(a)}`,"getImgRectInfo")},zm={howToUse:"获取在指定图片中选取矩形的起始点和宽高。",params:[{name:"imgPath",required:!0,instructions:"图片路径",type:"string",default:""}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:'const { startX, startY, width, height } = await getImgRectInfo("E:\\\\image.png");'},searchKeys:["图片","矩形","位置信息"],codeSnippet:'const { startX, startY, width, height } = await getImgRectInfo("${1:imgPath}");'},Bm={title:"在图片选取矩形信息",targetMethodName:"getImgRectInfo",content:"获取在指定图片中选取矩形的起始点和宽高",args:[{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},qm=`
declare function getImgRectInfo(
    imgPath: string
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Km={name:"getImgRectInfo",exportFn:{fn:_s},testModule:{weight:4,dialog:Bm,callback:Um,document:zm},declaration:qm,auxiliary:ws},Zn=Object.freeze(Object.defineProperty({__proto__:null,getImgRectInfoApi:Km},Symbol.toStringTag,{value:"Module"})),xs=async(e=0,t)=>{const{notAllowedFnId:n}=C();if(t&&n.value.includes(t))return{startX:-2,startY:-2,width:-2,height:-2};try{return await new Promise(s=>setTimeout(s,e)),await O.getScreenRectInfo()}catch(a){return console.error(a),{startX:-1,startY:-1,width:-1,height:-1}}},Gm=async(e,t)=>{console.time("getScreenRectInfo耗时");const n=await xs(e.delayTime);console.timeEnd("getScreenRectInfo耗时"),t.showDetails(`桌面截图标注矩形的起始点以及宽高：${JSON.stringify(n)}`,"getScreenRectInfo")},Jm={howToUse:"delayTime毫秒后会对当前屏幕进行截图，之后会有一个截图范围选择的窗口出现，第一次可能不会置顶，需要手动呼出，从起点开始长按拖动鼠标到终点释放，返回对应的范围参数。",params:[{name:"delayTime",required:!1,instructions:"延迟执行时间(s)",type:"number",default:"0"}],returnValue:{type:"Promise<{ startX:number; startY:number; width:number; height:number; }>"},example:{code:"const { startX, startY, width, height } = await getScreenRectInfo();"},searchKeys:["屏幕","矩形","范围","位置"],codeSnippet:"const { startX, startY, width, height } = await getScreenRectInfo(${1:delayTime});"},Wm={title:"屏幕矩形信息",targetMethodName:"getScreenRectInfo",content:"获取在当前屏幕截图选取的矩形起始点以及宽高。",args:[{name:"delayTime",componentType:"numberInput",value:0,label:"延迟执行时间(s)"}]},Ym=`
declare function getScreenRectInfo(
    delayTime?:number
):Promise<{ startX:number; startY:number; width:number; height:number; }>;
`,Xm={name:"getScreenRectInfo",exportFn:{fn:xs},testModule:{weight:3,callback:Gm,dialog:Wm,document:Jm},declaration:Ym},Qn=Object.freeze(Object.defineProperty({__proto__:null,getScreenRectInfoApi:Xm},Symbol.toStringTag,{value:"Module"})),Ss=async e=>{const{notAllowedFnId:t}=C();if(e&&t.value.includes(e))return{width:-1,height:-1};try{return await O.getScreenSize()}catch(n){return console.error(n),{width:-1,height:-1}}},Hm=async(e,t)=>{console.time("getScreenSize耗时");const{width:n,height:a}=await Ss();console.timeEnd("getScreenSize耗时"),t.showDetails("屏幕宽高："+n+"x"+a,"getScreenSize")},Zm={title:"获取屏幕宽高",targetMethodName:"getScreenSize",notOpen:!0},Qm={howToUse:"获取屏幕的宽高",returnValue:{type:"Promise<{ width:number; height:number; }>"},example:{code:"const { width, height } = await getScreenSize();"},searchKeys:["屏幕","宽高","获取"],codeSnippet:"const { width, height } = await getScreenSize();"},eg=`
declare function getScreenSize():Promise<{width:number; height:number;}>;
`,tg={name:"getScreenSize",exportFn:{fn:Ss},testModule:{weight:1,callback:Hm,dialog:Zm,document:Qm},declaration:eg},ea=Object.freeze(Object.defineProperty({__proto__:null,getScreenSizeApi:tg},Symbol.toStringTag,{value:"Module"})),ng={howToUse:"识别屏幕/图片指定位置",params:[{name:"x",required:!1,instructions:"识别区域起点X坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"识别区域起点y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"识别区域宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"识别区域高度",type:"number",default:"-1"},{name:"imgPath",required:!1,instructions:"图片路径, 为空时识别屏幕内容",type:"string",default:""}],returnValue:{type:`
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
};
`},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const ocrUtil = await ocr(0, 0, 100, 100);"},searchKeys:["OCR","ocr","图片","指定范围"],codeSnippet:"const ocrUtil = await ocr(${1:x}, ${2:y}, ${3:width}, ${4:height})"};class Zt{centerPos;text;score;constructor(t,n,a,s){this.text=n,this.score=a;let o=(t[0][0]+t[2][0])/2,r=(t[0][1]+t[2][1])/2;s&&(o+=s[0],r+=s[1]),this.centerPos=[o,r]}async click(){await Ct(this.centerPos[0],this.centerPos[1])}async touch(){return await Ft(this.centerPos[0],this.centerPos[1])}}class Ts{result;reCall;ori;constructor(t,n,a,s){this.result=a,this.ori={x:t,y:n},this.reCall=s}includes=t=>!!this.result.find(n=>{for(const a of t)if(n.text===a||n.text.includes(a))return!0});findText=(t,n)=>{const a=this.result.find(s=>s.text===t||s.text.includes(t));if(a)return new Zt(a.position.map(s=>[s[0]+this.ori.x,s[1]+this.ori.y]),a.text,a.score,n)};searchText=(t,n)=>this.result.filter(s=>s.text===t||s.text.includes(t)).map(s=>new Zt(s.position.map(o=>[o[0]+this.ori.x,o[1]+this.ori.y]),s.text,s.score,n));waitText=async(t,n=!1,a=1e3,s=10)=>{if(this.findText(t))return!0;let o=!1;for(;s--;){n&&await Et();const r=await this.reCall();if(r&&r.includes([t])){o=!0;break}await bt.sleep(a)}return o}}const ta=async(e,t,n,a,s,o)=>{const{notAllowedFnId:r}=C();if(!(o&&r.value.includes(o)))try{const l=await O.ocr(e,t,n,a,s);if(!l)return;if(l.code===1){const i=()=>(s&&console.warn("由于是指定图片识别，如果图片不更新，将导致识别结果每次都一样!"),ta(e,t,n,a,s,o));return new Ts(e,t,l.result,i)}}catch(l){console.error("ocrError: ",l)}},$s={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t),s=_().find(o=>o.name==="ocr").testModule.dialog;s.args&&s.args.forEach((o,r)=>{switch(r){case 0:o.value={x:+n[0]?.value||0,y:+n[1]?.value||0,width:+n[2]?.value||0,height:+n[3]?.value||0};break;case 1:o.value=m.pathStrReset(n[4]?.value||"");break}})},parameterReplace:e=>{if(!e.imgPath||e.imgPath==="")e.replaceCurFnArgs(`${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`);else{const t=m.replaceConstantPath(e.imgPath);e.replaceCurFnArgs(`${e.rect.x}, ${e.rect.y}, ${e.rect.width}, ${e.rect.height}, ${t}`)}}},ag=async(e,t)=>{if(e.replaceCurFnArgs){$s.parameterReplace(e),m.apiAutoTip();return}const{imgPath:n,rect:a}=e;console.time("ocr耗时");const s=await ta(a.x,a.y,a.width,a.height,n);console.timeEnd("ocr耗时");const o=_().find(r=>r.name==="ocr")?.testModule;e.imgPath===""?o.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height});`:o.document.example.code=`const ocrUtil = await ocr(${a.x}, ${a.y}, ${a.width}, ${a.height}, "${n.replace(/\\/g,"\\\\")}");`,t.showDetails(JSON.stringify(s),"ocr")},og={title:"识别屏幕/图片指定位置内容",targetMethodName:"ocr",content:"如需识别屏幕内容，图片路径无需填写。如需识别图片内容，需填写图片路径。",args:[{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"识别区域",targetSrc:"imgPath"},{name:"imgPath",componentType:"FileInput",value:"",label:"图片路径"}]},sg=`
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
};
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
};
declare function ocr(
  x: number,
  y: number,
  width: number,
  height: number,
  imgPath?: string
): Promise<OcrUtil | undefined>;
`,rg={name:"ocr",exportFn:{fn:ta},testModule:{weight:5,dialog:og,callback:ag,document:ng},declaration:sg,auxiliary:$s,helperClass:[Ts,Zt]},na=Object.freeze(Object.defineProperty({__proto__:null,ocrApi:rg},Symbol.toStringTag,{value:"Module"}));class aa{constructor(t,n){this.rgb=t,this.reCall=n}reCall;getHex=()=>`#${this.rgb.map(t=>t.toString(16).padStart(2,"0")).join("")}`;getRgb=()=>`rgb(${this.rgb.join(",")})`;getRgbValue=()=>this.rgb.join(",");parseColorStr=t=>{const a=[","," ","，","-"].find(o=>t.includes(o));if(!a){console.error("不支持的color字符串");return}return t.split(a).map(o=>parseInt(o))};is=(t,n=[0,0,0])=>{const a=this.parseColorStr(t);return a?a.length===3?this.rgb.every((s,o)=>{const r=n[o];return s>=a[o]-r&&s<=a[o]+r}):(console.error("color格式错误"),!1):!1};waitColor=async(t,n=1e3,a=10,s=[0,0,0],o)=>{if(this.is(t,s))return!0;o&&o(this.getRgbValue(),t);let r=!1;for(;a--;){const l=await this.reCall();if(l&&l.is(t,s)){r=!0;break}else l&&o&&o(l.getRgbValue(),t);await bt.sleep(n)}return r};waitNotColor=async(t,n=1e3,a=10,s=[0,0,0])=>{if(!this.is(t,s))return!0;let o=!1;for(;a--;){const r=await this.reCall();if(r&&!r.is(t,s)){o=!0;break}await bt.sleep(n)}return o}}const oa=async(e=-1,t=-1,n)=>{const{notAllowedFnId:a}=C();if(!(n&&a.value.includes(n)))try{const s=e===-1?void 0:e,o=t===-1?void 0:t,r=await O.screenColor(s,o);return r.message==="success"?new aa(r.data,()=>oa(e,t,n)):void 0}catch(s){console.error("screenColorError: ",s)}},Ms={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenColor").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,replaceCurFnArgs:a}=e;a(t!==void 0&&n!==void 0&&t!==-1&&n!==-1?`${t},${n}`:"")}},lg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ms.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>setTimeout(s,e.delay)),console.time("screenColor耗时");const n=await oa(e.x,e.y);console.timeEnd("screenColor耗时");const a=_().find(s=>s.name==="screenColor")?.testModule;a.document.example.code=`const colorUtil = await screenColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenColor")},ig={howToUse:"识别屏幕指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!1,instructions:"[屏幕x坐标]值为-1时使用鼠标位置",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[屏幕y坐标]值为-1时使用鼠标位置",type:"number",default:"-1"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕鼠标所在位置像素点的rgb值
const colorUtil = await screenColor();
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","鼠标"],codeSnippet:"const colorUtil = await screenColor(${1:x}, ${2:y});${0:}"},cg={title:"获得屏幕指定坐标颜色",targetMethodName:"screenColor",content:"获取[指定坐标/鼠标所在坐标]的颜色，返回颜色工具实例。x、y坐标任意值为-1时使用鼠标位置",args:[{name:"x",componentType:"numberInput",value:-1,label:"x坐标"},{name:"y",componentType:"numberInput",value:-1,label:"y坐标"},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},ug=`
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
`,dg={name:"screenColor",exportFn:{fn:oa},testModule:{weight:5,callback:lg,dialog:cg,document:ig},declaration:ug,auxiliary:Ms,helperClass:[aa]},sa=Object.freeze(Object.defineProperty({__proto__:null,screenColorApi:dg},Symbol.toStringTag,{value:"Module"})),ks=async(e=-1,t=-1,n=-1,a=-1,s="",o)=>{const{notAllowedFnId:r}=C();if(o&&r.value.includes(o))return!1;const l=Z();s=s.length?s:l.envSetting.screenshotSavePath;try{return await O.screenshot(s,e,t,n,a)}catch(i){return console.error("screenshotError: ",i),!1}},Is={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenshot").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=m.pathStrReset(n[4]?.value||"");break;case 1:o.value=n[0]?.value&&n[1]?.value&&n[2]?.value&&n[3]?.value&&!(+n[0]?.value==-1||+n[1]?.value==-1||+n[2]?.value==-1||+n[3]?.value==-1)||!1;break;case 2:o.componentType==="RectInput"&&(o.value.x=+n[0]?.value>=0?+n[0]?.value:-1,o.value.y=+n[1]?.value>=0?+n[1]?.value:-1,o.value.width=+n[2]?.value||-1,o.value.height=+n[3]?.value||-1);break}})},parameterReplace:e=>{!e.selectRange&&e.path===""?e.replaceCurFnArgs(""):e.selectRange?e.path===""?e.replaceCurFnArgs(`${e.range.x},${e.range.y},${e.range.width},${e.range.height}`):e.replaceCurFnArgs(`${e.range.x+","+e.range.y+","+e.range.width+","+e.range.height}, ${m.replaceConstantPath(e.path)}`):e.replaceCurFnArgs(`-1,-1,-1,-1, ${m.replaceConstantPath(e.path)}`)}},pg=async(e,t)=>{if(e.replaceCurFnArgs){const o=Is.parameterReplace(e);return m.apiAutoTip(),o}e.delay>0&&await new Promise(o=>setTimeout(o,e.delay)),console.time("screenshot耗时"),e.selectRange===!1&&(e.range={x:-1,y:-1,width:-1,height:-1}),await ks(e.range.x,e.range.y,e.range.width,e.range.height,e.path),console.timeEnd("screenshot耗时");const n=_().find(o=>o.name==="screenshot")?.testModule,s=Z().envSetting.screenshotSavePath===e.path||e.path==="";e.selectRange?n.document.example.code=`const res = await screenshot(
            	${e.range.x},
            	${e.range.y},
            	${e.range.width},
            	${e.range.height}${s?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`:n.document.example.code=`const res = await screenshot(${s?"":`, "${e.path.replace(/\\/g,"\\\\")}"`});`,t.showDetails("截图完成","screenshot")},mg={howToUse:"屏幕截图，支持自定义矩形范围截图以及全屏截图",params:[{name:"x",required:!1,instructions:"[范围参数]截图起点x坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"y",required:!1,instructions:"[范围参数]截图起点y坐标,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"width",required:!1,instructions:"[范围参数]截图宽度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"height",required:!1,instructions:"[范围参数]截图高度,范围参数任意一个值为-1会全屏截图",type:"number",default:"-1"},{name:"path",required:!1,instructions:"截图保存路径",type:"string",default:"设置中的截图保存路径"}],returnValue:{type:"Promise<number>",instructions:"返回1为截图成功。"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//全屏截图且使用默认保存路径
const res = await screenshot();
//自定义截图区域且使用默认保存路径
const res = await screenshot(x,y,width,height);
//自定义截图区域且使用自定义保存路径
const res = await screenshot(x,y,width,height,"E:\\\\image.png");
        `},searchKeys:["截图","屏幕"],codeSnippet:"const res = await screenshot(${1:x}, ${2:y}, ${3:width}, ${4:height});"},gg={title:"截图",targetMethodName:"screenshot",content:"屏幕截图，自定义截图区域时，x、y、width、height任意一个值为-1时，截取全屏幕",args:[{name:"path",componentType:"FileInput",value:"",label:"截图保存路径"},{name:"selectRange",componentType:"switch",value:!1,label:"是否全屏截图",activeText:"自定义截图区域",inactiveText:"全屏截图"},{name:"range",componentType:"RectInput",label:"截图区域",value:{x:-1,y:-1,width:-1,height:-1},displayCondition:["selectRange"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},fg=`
declare function screenshot(
    x?:number,
    y?:number,
    width?: number,
    height?: number,
    path?:string
):Promise<boolean>;
`,yg={name:"screenshot",exportFn:{fn:ks},testModule:{weight:5,callback:pg,dialog:gg,document:mg},declaration:fg,auxiliary:Is},ra=Object.freeze(Object.defineProperty({__proto__:null,screenshotApi:yg},Symbol.toStringTag,{value:"Module"})),la=async(e=0,t=0,n="normal",a)=>{const{notAllowedFnId:s}=C(),o=Z();if(a&&s.value.includes(a))return;const r=o.envSetting.screenshotSavePath;if((r.trim()??"")===""){oe.error("请先设置截图保存路径");return}try{n==="adb"&&await Et();const l=await O.imgColor(r,e,t);return l.message==="success"?new aa(l.data,async()=>la(e,t,n,a)):void 0}catch(l){console.error("screenshotColorError: ",l)}},Ps={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="screenshotColor").testModule.dialog.args.forEach((o,r)=>{r===2?o.value=n[r]?.value||"normal":o.value=+n[r]?.value||0})},parameterReplace:e=>{const{x:t,y:n,mod:a,replaceCurFnArgs:s}=e;s(a==="adb"?`${t},${n},'adb'`:`${t},${n}`)}},hg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ps.parameterReplace(e);return m.apiAutoTip(),s}e.delay>0&&await new Promise(s=>setTimeout(s,e.delay)),console.time("screenshotColor耗时");const n=await la(e.x,e.y,e.mod);console.timeEnd("screenshotColor耗时");const a=_().find(s=>s.name==="screenshotColor")?.testModule;e.mod==="adb"?a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y}, 'adb');`:a.document.example.code=`const colorUtil = await screenshotColor(${e.x}, ${e.y});`,t.showDetails(n&&JSON.stringify(n),"screenshotColor")},bg={howToUse:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",params:[{name:"x",required:!0,instructions:"图片x坐标",type:"number",default:""},{name:"y",required:!0,instructions:"图片y坐标",type:"number",default:""},{name:"mod",required:!1,instructions:"值为adb时将在调用前执行adb截图操作",type:["'normal'","'adb'"],default:"'normal'"}],returnValue:{type:"Promise<ColorUtil | undefined>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//获取屏幕指定位置像素点的rgb值
const colorUtil = await screenshotColor(100, 100);
const [r,g,b] = colorUtil?.getRgb() || [0,0,0];
        `},searchKeys:["颜色","color","坐标","adb","屏幕"],codeSnippet:"const colorUtil = await screenshotColor(${1:x}, ${2:y});"},vg={title:"识别[屏幕/ADB设备]截图指定坐标颜色",targetMethodName:"screenshotColor",content:"识别[屏幕/ADB设备]截图指定坐标颜色，返回颜色工具实例",args:[{name:"x",componentType:"numberInput",value:0,label:"x坐标"},{name:"y",componentType:"numberInput",value:0,label:"y坐标"},{name:"mod",componentType:"select",value:"normal",label:"截图模式",options:["normal","adb"]},{name:"delay",componentType:"numberInput",value:0,label:"延迟执行时间(ms)【仅测试】",onlyTest:!0}]},_g=`
declare function screenshotColor(
    x:number,
    y:number,
    mod?:'normal'|'adb'
):Promise<ColorUtil | undefined>;
`,wg={name:"screenshotColor",exportFn:{fn:la},testModule:{weight:5,callback:hg,dialog:vg,document:bg},declaration:_g,auxiliary:Ps},ia=Object.freeze(Object.defineProperty({__proto__:null,screenshotColorApi:wg},Symbol.toStringTag,{value:"Module"})),Cs=async(e,t,n,a,s,o)=>"滑动完成。",xg={title:"滑动",targetMethodName:"slideTo",content:"请输入要滑动的坐标",args:[{name:"fromX",componentType:"numberInput",label:"起始X坐标",value:0},{name:"fromY",componentType:"numberInput",label:"起始Y坐标",value:0},{name:"toX",componentType:"numberInput",label:"结束X坐标",value:0},{name:"toY",componentType:"numberInput",label:"结束Y坐标",value:0},{name:"slideTime",componentType:"numberInput",label:"滑动时间",value:0}]},Fs={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="slideTo").testModule.dialog.args.forEach((o,r)=>{o.value=+n[r]?.value||0})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.fromX},${e.fromY},${e.toX},${e.toY},${e.slideTime}`)}},Sg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Fs.parameterReplace(e);return m.apiAutoTip(),s}console.time("滑动耗时");const n=await Cs(e.fromX,e.fromY,e.toX,e.toY,e.slideTime);console.timeEnd("滑动耗时"),t.showDetails(n);const a=_().find(s=>s.name==="slideTo")?.testModule;a&&(a.document.example.code=`const res = await slideTo(${e.fromX}, ${e.fromY}, ${e.toX}, ${e.toY}, ${e.slideTime});`)},Tg={howToUse:"滑动",params:[{name:"fromX",required:!0,instructions:"起始X坐标",type:"number",default:""},{name:"fromY",required:!0,instructions:"起始Y坐标",type:"number",default:""},{name:"toX",required:!0,instructions:"结束X坐标",type:"number",default:""},{name:"toY",required:!0,instructions:"结束Y坐标",type:"number",default:""},{name:"slideTime",required:!0,instructions:"滑动时间(ms)",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"滑动结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await slideTo(100, 100, 200, 200, 1000);"},searchKeys:["ADB","adb","滑动"],codeSnippet:"await slideTo(${1:fromX}, ${2:fromY}, ${3:toX}, ${4:toY}, ${5:slideTime});"},$g=`
declare function slideTo(
    fromX:number, 
    fromY:number, 
    toX:number, 
    toY:number, 
    slideTime:number
):Promise<string>;
`,Mg={name:"slideTo",exportFn:{fn:Cs},testModule:{weight:3,dialog:xg,callback:Sg,document:Tg},declaration:$g,auxiliary:Fs},ca=Object.freeze(Object.defineProperty({__proto__:null,slideToApi:Mg},Symbol.toStringTag,{value:"Module"})),kg={title:"点击指定位置",targetMethodName:"touch",content:"请输入要点击的坐标",args:[{name:"targetX",componentType:"numberInput",label:"X坐标",value:0},{name:"targetY",componentType:"numberInput",label:"Y坐标",value:0}]},As={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="touch").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:o.value=+n[r]?.value||0;break;case 1:o.value=+n[r]?.value||0;break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${e.targetX}, ${e.targetY}`)}},Ig=async(e,t)=>{if(e.replaceCurFnArgs){const s=As.parameterReplace(e);return m.apiAutoTip(),s}console.time("点击指定位置耗时");const n=await Ft(e.targetX,e.targetY);console.timeEnd("点击指定位置耗时"),t.showDetails(n);const a=_().find(s=>s.name==="touch")?.testModule;a&&(a.document.example.code=`const res = await touch(${e.targetX}, ${e.targetY});`)},Pg={howToUse:"点击指定位置",params:[{name:"targetX",required:!0,instructions:"X坐标",type:"number",default:""},{name:"targetY",required:!0,instructions:"Y坐标",type:"number",default:""}],returnValue:{type:"Promise<string>",instructions:"ADB设备轻触指定位置结果"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:"const res = await touch(100, 100);"},searchKeys:["ADB","adb","点击指定位置","轻触","click","touch"],codeSnippet:"await touch(${1:targetX}, ${2:targetY});"},Cg=`
declare function touch(x:number,y:number):Promise<string>;
`,Fg={name:"touch",exportFn:{fn:Ft},testModule:{weight:3,dialog:kg,callback:Ig,document:Pg},declaration:Cg,auxiliary:As},ua=Object.freeze(Object.defineProperty({__proto__:null,touchApi:Fg},Symbol.toStringTag,{value:"Module"})),P="__FR_BUILT_IN_API__",ve=K({show:!1,title:"",content:"",callType:"test",callback:()=>{}}),Qt={showDetails:()=>{}},z=K([]),Ag=e=>{Qt.showDetails=e.showDetails},Og=A({set:()=>{},get:()=>z.map(e=>e.testModule)}),Dg=(e,t)=>{const n=z[e];if(z.splice(e,1),z.splice(t,0,n),z[t+1]&&n.testModule){const s=z[t+1].testModule?.weight;n.testModule.weight=s||0}else z[t+1]||(n.testModule.weight=0);const a={};z.forEach((s,o)=>{a[s.name]=o}),localStorage.setItem(P+"API_SORT_MAP",JSON.stringify(a))},Rg=e=>{const t=JSON.parse(localStorage.getItem(P+"API_SORT_MAP")||"{}");if(e instanceof Array)if(Object.keys(t).length>0){const n=new Array(e.length).fill(null),a=[];e.forEach(s=>{const o=z.find(l=>l.name===s.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(s.name))throw new Error("methods中的name不符合js变量命名规范");if(o){console.warn("已存在同名方法，跳过注册");return}const r=t[s.name];r!==void 0?n[r]=s:a.push(s)}),z.splice(0,0,...n.filter(s=>s!==null),...a)}else e.forEach(n=>{const a=z.find(s=>s.name===n.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(n.name))throw new Error("methods中的name不符合js变量命名规范");if(a){console.warn("已存在同名方法，跳过注册");return}z.push(n)});else{const n=z.find(a=>a.name===e.name);if(!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e.name))throw new Error("methods中的name不符合js变量命名规范");if(n){console.warn("已存在同名方法，跳过注册");return}z.push(e)}Object.keys(t).length===0?z.sort((n,a)=>a.testModule.weight-n.testModule.weight):z.forEach((n,a)=>{n.testModule.weight=z.length-a})},Eg=(e,t,n,a="test",s,o)=>{const r=z.find(l=>l.name===e);if(t&&n&&(ve.title=t,ve.content=n,ve.show=!0,ve.callType=a),r)if(r.auxiliary?.onDialogOpen&&o&&r.auxiliary.onDialogOpen(()=>{ve.show=!1},...o),t&&n){const l=async()=>{const i={replaceCurFnArgs:s};let u=!1;const f=r.testModule.dialog;let p=0;for(let v=0;v<f.args.length;v++){const h=f.args[v];if((!h.onlyTest||h.onlyTest&&a==="test")&&(i[h.name]=h.value,o&&h.value!==o[v+p]?.value)){if(h.componentType==="RectInput")JSON.stringify({x:o[v+p]?.value,y:o[v+p+1]?.value,width:o[v+p+2]?.value,height:o[v+p+3]?.value})===JSON.stringify(h.value)?p+=3:u=!0;else if(h.componentType==="FileInput"||h.componentType==="DirInput")JSON.stringify(h.value)!==m.pathStrReset(JSON.stringify(o[v+p]?.value))&&(u=!0);else if(JSON.stringify(h.value)!==JSON.stringify(o[v+p]?.value))if(o[v+p]?.value===void 0){const w=r.testModule.document.params?.find($=>$.name===h.name);(w?.required||JSON.stringify(w?.default).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,"")!==JSON.stringify(h.value).replace(/(^["'`]{1,2})|(["'`]{1,2}$)/g,""))&&(u=!0)}else u=!0}}!u&&a==="changeArgs"&&(i.replaceCurFnArgs=()=>{}),r.testModule.callback(i,Qt),ve.show=!1};ve.callback=l}else r.testModule.callback(void 0,Qt,[])},Vg=()=>{const e={};return z.forEach(t=>{if(!t.exportFn)return;const{fn:n}=t.exportFn;if(t.scope){const a=t.scope;e[a]=e[t.scope]||{},e[a].__NS_DATA__={},e[a][t.name]=n,t.helperClass&&t.helperClass.forEach(s=>{const o=s.name;if(o===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[a][o]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[a][o]=s});return}e[t.name]=n,t.helperClass&&t.helperClass.forEach(a=>{const s=a.name;if(s===t.name)throw console.error("helperClass的name不能和api名称相同",JSON.stringify(t)),new Error("helperClass的name不能和api名称相同");if(e[s]){console.warn("helperClass的name和已存在的方法名或辅助类类名相同,跳过注入！",JSON.stringify(t));return}e[s]=a})}),e},Lg=e=>z.map(t=>{const n=t.name;if(t.testModule?.document?.params){const a=t.testModule.document.params.map(s=>s.name).join(",");return`
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
`),Os=async(e=!0,t=!1,n=!1)=>{const s=Object.entries(Object.assign({"../invokes/CV/imgSimilarity/index.ts":tn,"../invokes/CV/matchTemplate/index.ts":an,"../invokes/CV/screenDiffTemplates/index.ts":on,"../invokes/CV/screenMatchTemplate/index.ts":sn,"../invokes/FS/readDir/index.ts":rn,"../invokes/FS/readFile/index.ts":ln,"../invokes/FS/rename/index.ts":cn,"../invokes/FS/writeFile/index.ts":un,"../invokes/GlobalShortcut/listen/index.ts":dn,"../invokes/GlobalShortcut/unlisten/index.ts":pn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":mn,"../invokes/Input/combined/index.ts":gn,"../invokes/Input/keyDown/index.ts":fn,"../invokes/Input/keyUp/index.ts":yn,"../invokes/Input/press/index.ts":hn,"../invokes/Input/text/index.ts":bn,"../invokes/Mouse/click/index.ts":vn,"../invokes/Mouse/clicker/index.ts":_n,"../invokes/Mouse/down/index.ts":wn,"../invokes/Mouse/drag/index.ts":xn,"../invokes/Mouse/move/index.ts":Sn,"../invokes/Mouse/pos/index.ts":Tn,"../invokes/Mouse/randomMove/index.ts":$n,"../invokes/Mouse/setMouseOption/index.ts":Mn,"../invokes/Mouse/up/index.ts":kn,"../invokes/Mouse/wheel/index.ts":In,"../invokes/Path/basename/index.ts":Pn,"../invokes/Path/dirname/index.ts":Cn,"../invokes/Path/extname/index.ts":Fn,"../invokes/Path/join/index.ts":An,"../invokes/Path/resolve/index.ts":On,"../invokes/Preludes/buildForm/index.ts":At,"../invokes/Preludes/log/index.ts":Dt,"../invokes/Preludes/sleep/index.ts":Rt,"../invokes/adbScreenshot/index.ts":zn,"../invokes/adbState/index.ts":Bn,"../invokes/clickHomeKey/index.ts":qn,"../invokes/clickReturnKey/index.ts":Kn,"../invokes/cmd/index.ts":Gn,"../invokes/connectTo/index.ts":Jn,"../invokes/cropPicture/index.ts":Wn,"../invokes/devices/index.ts":Yn,"../invokes/disConnectTo/index.ts":Xn,"../invokes/getImageSize/index.ts":Hn,"../invokes/getImgRectInfo/index.ts":Zn,"../invokes/getScreenRectInfo/index.ts":Qn,"../invokes/getScreenSize/index.ts":ea,"../invokes/ocr/index.ts":na,"../invokes/screenColor/index.ts":sa,"../invokes/screenshot/index.ts":ra,"../invokes/screenshotColor/index.ts":ia,"../invokes/slideTo/index.ts":ca,"../invokes/touch/index.ts":ua})),o=[];for(let r=0;r<s.length;r++){const[l,i]=s[r],u=l.split("/"),f=u[u.length-2],p=i[f+"Api"]||i[f];if(!p){console.error(`找不到${f}Api或${f}模块`);continue}if(e&&p?.disabled){console.warn(`内置API：${p.scope?p.scope+".":""}${p.name}已禁用`);continue}t&&(p.id=ye()),n&&(p.fullPath=await We.resolve(await We.getInstallDir(),"../../../src/a/"+l)),o.push(p)}return o},Ng=async()=>{const e=await Os(!0,Je);e&&Rg([...e])},tt=()=>({genBuiltInApi:Lg,dynamicDialog:ve,builtInApiTestModules:Og,setTestModuleCtx:Ag,invokeDynamicDialog:Eg,exportAllFn:Vg,registerAllInvokeApi:Ng,moveBuiltInApiIndex:Dg,getApiModules:Os}),_=()=>z,Ds={onDialogOpen:async(e,...t)=>{const n=await m.paramsProcess(...t);_().find(o=>o.name==="imgSimilarity"&&o.scope==="CV").testModule.dialog.args.forEach((o,r)=>{switch(r){case 0:case 1:o.componentType==="FileInput"&&(o.value=m.pathStrReset(n[r]?.value||""));break;case 2:o.componentType==="RectInput"&&(o.value.x=+n[2]?.value||0,o.value.y=+n[3]?.value||0,o.value.width=+n[4]?.value||0,o.value.height=+n[5]?.value||0);break}})},parameterReplace:e=>{e.replaceCurFnArgs(`${m.replaceConstantPath(e.pathA)},${m.replaceConstantPath(e.pathB)},${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}`)}},jg=async(e,t)=>{if(e.replaceCurFnArgs){const s=Ds.parameterReplace(e);return m.apiAutoTip(),s}console.time("imgSimilarity耗时");const n=await Da(e.pathA,e.pathB,e.rect.x,e.rect.y,e.rect.width,e.rect.height);console.timeEnd("imgSimilarity耗时");const a=_().find(s=>s.name==="imgSimilarity"&&s.scope==="CV")?.testModule;a.document.example.code=`const similarityValue = await CV.imgSimilarity(
        	"${e.pathA.replace(/\\/g,"\\\\")}",
        	"${e.pathB.replace(/\\/g,"\\\\")}",
        	${e.rect.x},${e.rect.y},${e.rect.width},${e.rect.height}
        );
      `,t.showDetails(`当前图片与模板的相似度：${n}`,"imgSimilarity")},Ug={howToUse:"采用直方图对比对图片进行相似度匹配，从原图指定矩形区域与模板图进行匹配",params:[{name:"pathA",required:!0,instructions:"原图路径",type:"string",default:""},{name:"pathB",required:!0,instructions:"模板图路径",type:"string",default:""},{name:"x",required:!1,instructions:"原图x坐标",type:"number",default:"-1"},{name:"y",required:!1,instructions:"原图y坐标",type:"number",default:"-1"},{name:"width",required:!1,instructions:"原图截取宽度",type:"number",default:"-1"},{name:"height",required:!1,instructions:"原图截取高度",type:"number",default:"-1"}],returnValue:{type:"Promise<number>"},example:{title:'该API在"测试调用"后会动态填入参数到示例',code:`//识别E:\\\\image.png从起点(0,0)截取宽100高100的区域与E:\\\\template.png进行相似度匹配
const similarityValue = 
  await CV.imgSimilarity('E:\\\\image.png', 'E:\\\\template.png', 0,0,100,100);`},searchKeys:["图片","相似度","匹配","模板","opencv","cv"],codeSnippet:"const similarityValue = await CV.imgSimilarity('${1:pathA}', '${2:pathB}', ${3:x}, ${4:y}, ${5:width}, ${6:height});"},zg={title:"图片相似度匹配",targetMethodName:"imgSimilarity",content:"采用直方图对比对图片进行相似度匹配",args:[{name:"pathA",componentType:"FileInput",value:"",label:"原图路径"},{name:"pathB",componentType:"FileInput",value:"",label:"模板路径"},{name:"rect",componentType:"RectInput",value:{x:-1,y:-1,width:-1,height:-1},label:"原图指定矩形区域",targetSrc:"imgPath"}]},Bg=`
function imgSimilarity(
    pathA:string,
    pathB:string,
    x?: number,
    y?: number,
    width?: number,
    height?: number
):Promise<number>;
`,qg={name:"imgSimilarity",scope:"CV",exportFn:{fn:Da},testModule:{weight:4,dialog:zg,callback:jg,document:Ug},declaration:Bg,auxiliary:Ds},Ce=new Worker(new URL("/assets/ast.worker-Cx-m7Hg8.js",import.meta.url),{type:"module"}),Kg=(e,t)=>new Promise(n=>{Ce.onmessage=r=>{const l=r.data;if(!l)n(l);else{const i=e?.getPositionAt(l.pos.startIndex),u=e?.getPositionAt(l.pos.endIndex);if(i&&u){const f=new ar(i.lineNumber,i.column,u.lineNumber,u.column);n({scope:l.scope,name:l.name,params:l.params,paramsRange:{startLineNumber:f.startLineNumber,endLineNumber:f.endLineNumber,startColumn:f.startColumn,endColumn:f.endColumn}})}else n(null)}};let a=e?.getValue()||"";const s=Bu();Object.keys(s).forEach(r=>{a=a.replaceAll(r,`"${s[r]}"`)});const o=e?.getOffsetAt(t)||0;Ce.postMessage({type:"analyzeFnInfo",code:a,cursorOffset:o,position:t})}),Gg=(e,t)=>new Promise(n=>{Ce.onmessage=a=>{n(a.data)},Ce.postMessage({type:"methodIsInvoked",code:e,methodFullName:t})}),Jg=(e,t)=>new Promise(n=>{Ce.onmessage=a=>{n(a.data)},Ce.postMessage({type:"parseInvokeApiConfig",code:e,exportApiName:t})}),Wg=()=>{Ce.postMessage({type:"clearCache"})},Yg={analyzeFnInfo:Kg,methodIsInvoked:Gg,parseInvokeApiConfig:Jg,clearCache:Wg},{resolve:Xg}=We,de=S(null),Hg=()=>de,Le=e=>e?.length===0?e:e?.replaceAll("\\","\\\\"),Zg=e=>{const t=Z();let{workDir:n,screenshotSavePath:a}=t.envSetting;return e=e.replaceAll("\\","\\\\"),n=n.replaceAll("\\","\\\\"),a=a.replaceAll("\\","\\\\"),e===a?"SCREEN_SHOT_PATH":e.startsWith(a)?`SCREEN_SHOT_PATH+"${e.slice(a.length)}"`:e===n?"WORK_DIR":e.startsWith(n)?`WORK_DIR+"${e.slice(n.length)}"`:`"${e}"`},Qg=e=>e?.length===0?e:e?.replaceAll("\\\\","\\"),ef=async e=>{if(e===void 0)return"";const t=Z(),{currentScriptDir:n}=C();return e.replace(/\s/g,"").replace("WORK_DIR+",Le(t.envSetting.workDir)).replace("SCREEN_SHOT_PATH+",Le(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_PATH",Le(t.envSetting.screenshotSavePath)).replace("SCREEN_SHOT_DIR+",Le(await Xg(t.envSetting.screenshotSavePath,".."))).replace("SCRIPT_ROOT_DIR+",Le(n.value))},tf=(...e)=>Promise.all(e.map(async t=>{const n=t.type==="string"?await ef(t.value):t.value;return{...t,value:n}})),nf=async e=>{if(!e)return;const t=e.getModel();if(!t)return;console.time("getCursorPosFnInfo");const n=e.getPosition(),a=await Yg.analyzeFnInfo(t,n);if(a?.params?.length&&(a.params=a.params.map(o=>{if(o.value)return o;{const r=/(^["'`]{1,2})|(["'`]{1,2}$)/g,l=o.expression.replace(r,"").replace(/\\/g,"")===o.type.replace(r,"").replace(/\\/g,"");return{...o,value:l?o.expression.replace(r,""):""}}})),de.value=a,!de.value){console.timeEnd("getCursorPosFnInfo");return}const s=_().map(o=>({scope:o.scope,...o.testModule,haveAuxiliary:o.auxiliary!==void 0})).find(o=>o.scope?(o.scope||"")===(de.value?.scope||"")&&o.dialog.targetMethodName===de.value?.name:o?.dialog.targetMethodName===de.value.name);if(s===void 0){de.value=null,console.timeEnd("getCursorPosFnInfo");return}de.value&&(de.value.content=s.document?.howToUse,de.value.haveAuxiliary=s.haveAuxiliary),console.timeEnd("getCursorPosFnInfo")};let Ut=null;const af=async()=>{const{findEditor:e}=Lt(),t=e("codeEditBox");t&&(Ut&&clearTimeout(Ut),Ut=setTimeout(()=>{nf(t)},50))},of=async e=>{const t=Object.assign({"../invokes/CV/imgSimilarity/index.ts":tn,"../invokes/CV/matchTemplate/index.ts":an,"../invokes/CV/screenDiffTemplates/index.ts":on,"../invokes/CV/screenMatchTemplate/index.ts":sn,"../invokes/FS/readDir/index.ts":rn,"../invokes/FS/readFile/index.ts":ln,"../invokes/FS/rename/index.ts":cn,"../invokes/FS/writeFile/index.ts":un,"../invokes/GlobalShortcut/listen/index.ts":dn,"../invokes/GlobalShortcut/unlisten/index.ts":pn,"../invokes/GlobalShortcut/waitShortcuts/index.ts":mn,"../invokes/Input/combined/index.ts":gn,"../invokes/Input/keyDown/index.ts":fn,"../invokes/Input/keyUp/index.ts":yn,"../invokes/Input/press/index.ts":hn,"../invokes/Input/text/index.ts":bn,"../invokes/Mouse/click/index.ts":vn,"../invokes/Mouse/clicker/index.ts":_n,"../invokes/Mouse/down/index.ts":wn,"../invokes/Mouse/drag/index.ts":xn,"../invokes/Mouse/move/index.ts":Sn,"../invokes/Mouse/pos/index.ts":Tn,"../invokes/Mouse/randomMove/index.ts":$n,"../invokes/Mouse/setMouseOption/index.ts":Mn,"../invokes/Mouse/up/index.ts":kn,"../invokes/Mouse/wheel/index.ts":In,"../invokes/Path/basename/index.ts":Pn,"../invokes/Path/dirname/index.ts":Cn,"../invokes/Path/extname/index.ts":Fn,"../invokes/Path/join/index.ts":An,"../invokes/Path/resolve/index.ts":On,"../invokes/Preludes/buildForm/index.ts":At,"../invokes/Preludes/log/index.ts":Dt,"../invokes/Preludes/sleep/index.ts":Rt,"../invokes/adbScreenshot/index.ts":zn,"../invokes/adbState/index.ts":Bn,"../invokes/clickHomeKey/index.ts":qn,"../invokes/clickReturnKey/index.ts":Kn,"../invokes/cmd/index.ts":Gn,"../invokes/connectTo/index.ts":Jn,"../invokes/cropPicture/index.ts":Wn,"../invokes/devices/index.ts":Yn,"../invokes/disConnectTo/index.ts":Xn,"../invokes/getImageSize/index.ts":Hn,"../invokes/getImgRectInfo/index.ts":Zn,"../invokes/getScreenRectInfo/index.ts":Qn,"../invokes/getScreenSize/index.ts":ea,"../invokes/ocr/index.ts":na,"../invokes/screenColor/index.ts":sa,"../invokes/screenshot/index.ts":ra,"../invokes/screenshotColor/index.ts":ia,"../invokes/slideTo/index.ts":ca,"../invokes/touch/index.ts":ua}),n=[],a=Object.entries(t);for(let i=0;i<a.length;i++){const[u,f]=a[i],p=u.split("/"),v=p[p.length-2],h=f[v+"Api"]||f[v];h?n.push(h):console.error(`找不到${v}Api或${v}模块`)}const s=Z(),o=n.map(i=>typeof i=="function"?i(s):i).map(i=>{const u=i.testModule?.document?.codeSnippet;return u===void 0?null:{label:i.name+"()",kind:J.CompletionItemKind.Function,detail:i.testModule?.document?.howToUse||"",insertText:u,insertTextRules:J.CompletionItemInsertTextRule.InsertAsSnippet,range:e}}),r=await Promise.all([...Oe().mockCodeSnippetList.value.map(async i=>{const u=i.prefix,f=i.description||"",p=i.content;return{label:u,kind:J.CompletionItemKind.Snippet,detail:i.name+":"+f,insertText:p?.trim()||"",insertTextRules:J.CompletionItemInsertTextRule.InsertAsSnippet,range:e}})]);return[...o.filter(i=>i!==null),...r]},m={getFnInfo:Hg,paramsProcess:tf,createDependencyProposals:of,pathStrProcess:Le,pathStrReset:Qg,apiAutoTip:af,replaceConstantPath:Zg},sf=e=>`
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
`,rf=`
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
`,lf=`
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
`,cf=()=>{const e=Object.assign({"./CV/imgSimilarity/index.ts":tn,"./CV/matchTemplate/index.ts":an,"./CV/screenDiffTemplates/index.ts":on,"./CV/screenMatchTemplate/index.ts":sn,"./FS/readDir/index.ts":rn,"./FS/readFile/index.ts":ln,"./FS/rename/index.ts":cn,"./FS/writeFile/index.ts":un,"./GlobalShortcut/listen/index.ts":dn,"./GlobalShortcut/unlisten/index.ts":pn,"./GlobalShortcut/waitShortcuts/index.ts":mn,"./Input/combined/index.ts":gn,"./Input/keyDown/index.ts":fn,"./Input/keyUp/index.ts":yn,"./Input/press/index.ts":hn,"./Input/text/index.ts":bn,"./Mouse/click/index.ts":vn,"./Mouse/clicker/index.ts":_n,"./Mouse/down/index.ts":wn,"./Mouse/drag/index.ts":xn,"./Mouse/move/index.ts":Sn,"./Mouse/pos/index.ts":Tn,"./Mouse/randomMove/index.ts":$n,"./Mouse/setMouseOption/index.ts":Mn,"./Mouse/up/index.ts":kn,"./Mouse/wheel/index.ts":In,"./Path/basename/index.ts":Pn,"./Path/dirname/index.ts":Cn,"./Path/extname/index.ts":Fn,"./Path/join/index.ts":An,"./Path/resolve/index.ts":On,"./Preludes/buildForm/index.ts":At,"./Preludes/log/index.ts":Dt,"./Preludes/sleep/index.ts":Rt,"./adbScreenshot/index.ts":zn,"./adbState/index.ts":Bn,"./clickHomeKey/index.ts":qn,"./clickReturnKey/index.ts":Kn,"./cmd/index.ts":Gn,"./connectTo/index.ts":Jn,"./cropPicture/index.ts":Wn,"./devices/index.ts":Yn,"./disConnectTo/index.ts":Xn,"./getImageSize/index.ts":Hn,"./getImgRectInfo/index.ts":Zn,"./getScreenRectInfo/index.ts":Qn,"./getScreenSize/index.ts":ea,"./ocr/index.ts":na,"./screenColor/index.ts":sa,"./screenshot/index.ts":ra,"./screenshotColor/index.ts":ia,"./slideTo/index.ts":ca,"./touch/index.ts":ua}),t={root:[]};Object.keys(e).forEach(l=>{let i,u;if(l.split("/").length===4?u=l.split("/")[2]:u=l.split("/")[1],i=e[l.replace("declaration.ts","index.ts")][u+"Api"],!i){console.error(`找不到${u}Api`,e[l.replace("declaration.ts","index.ts")],l);return}const{declaration:f}=i,p=i.scope;p?(t[p]||(t[p]=[]),t[p].push(f)):t.root.push(f)});let a="";Object.keys(t).forEach(l=>{l==="root"?a+=t[l].join(`
`):a+=`declare namespace ${l} {
${t[l].join(`
`)}
}
`});const s=`declare type Key = ${et.map(l=>`"${l.split(":")[1]}"`).join("|")};`,o=zu(),r=sf(o);return`
${Ro.trim()}
${s.trim()}
${r.trim()}
${rf.trim()}
${lf.trim()}
${a.trim()}
`.trim()},uf=S("10px"),df=S(1),Vt=or(),pf=S("none"),mf=A(()=>Vt.value?"#ffffff33":"#00000033"),He=A(()=>Vt.value?"#272727":"#f6f6f6"),gf=A(()=>Vt.value?"#000":"#fff"),ff=A(()=>He?.value?He.value==="#272727"?"#f6f6f6":"#272727":"#f6f6f6"),yf=A(()=>He?.value?He.value==="#272727"?"#f6f6f633":"#27272733":"#f6f6f633"),nt=()=>({borderRadius:uf,appOpacity:df,borderColor:mf,appTransform:pf,isDark:Vt,appAsideBgColor:He,appBackground:gf,oppositeBgColor:ff,oppositeBgColorOpacity33:yf}),hf="codeEditBox";J.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});J.typescript.typescriptDefaults.setCompilerOptions({target:J.typescript.ScriptTarget.ESNext,module:J.typescript.ModuleKind.ESNext,moduleResolution:J.typescript.ModuleResolutionKind.NodeJs,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,noEmit:!0,typeRoots:["node_modules/@types"]});J.register({id:"typescript",extensions:[".ts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"]});J.typescript.javascriptDefaults.setEagerModelSync(!0);J.typescript.typescriptDefaults.setEagerModelSync(!0);J.registerCompletionItemProvider("typescript",{provideCompletionItems:async function(e,t){const{createDependencyProposals:n}=m,a=e.getWordUntilPosition(t),s={startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return{suggestions:await n(s)}}});let $a=!1;const bf=S(!1),vf=J.getLanguages(),_f=["javascript","typescript","json"];vf.forEach(e=>{_f.indexOf(e.id)===-1&&J.setLanguageConfiguration(e.id,{})});const we=[],wf=(e,t,n=!1,a)=>{const s=we.find(f=>f.domId===e)?.instance;if(!s){console.error("domId对应的编辑器实例不存在！");return}const o=s.getSelection(),{startLineNumber:r,startColumn:l,endLineNumber:i,endColumn:u}=a||o;if(n){const f=s.getValue(),p=f.indexOf("请勿删除，此声明会在脚本读取时用到！")===-1?f:f.replace(f.substring(0,f.indexOf(" */")+3),"");return s.setValue(t+`
`+p)}s.executeEdits("",[{range:new dr(r,l,i,u),text:t,forceMoveMarkers:!0}]),s.focus(),s.setPosition({column:l+t.length,lineNumber:r})};let ut=null;const xf=(e,t)=>{ut&&clearTimeout(ut),ut=setTimeout(()=>{const n=we.find(a=>a.domId===e)?.instance;if(!n){console.warn("无法设置文本，编辑器实例可能已经被销毁。");return}n.setValue(""),n.setValue(t),clearTimeout(ut)},200)},Sf=e=>we.find(t=>t.domId===e)?.instance,Tf=e=>we.find(t=>t.domId===e)?.value,Lt=()=>{!self.MonacoEnvironment&&(self.MonacoEnvironment={getWorker(u,f){return f==="json"?new sr:f==="css"||f==="scss"||f==="less"?new rr:f==="html"||f==="handlebars"||f==="razor"?new lr:["typescript","javascript"].includes(f)?new ir:new cr}});let e="",t;const n=S("");let a=[];return{editorInit:async(u,f=!0,p=!0)=>{$a||(J.typescript.typescriptDefaults.setExtraLibs([{content:cf()}]),$a=!0);const v=Z();let h="vs";const w=v.editor.theme.value;if(w==="跟随全局主题"){const{isDark:R}=nt();h=R.value?"vs-dark":"vs"}else h=w==="明亮"?"vs":"vs-dark";if(we.find(R=>R.domId===u)){console.error("domId对应的编辑器实例已存在！");return}const F=document.getElementById(u);if(!F){console.error("domId对应的dom不存在！");return}e=u,t=pr.create(F,{value:n.value,language:"typescript",automaticLayout:!0,theme:h,foldingStrategy:"indentation",renderLineHighlight:"all",selectOnLineNumbers:!0,tabSize:2,minimap:{enabled:p},readOnly:!1,fontSize:16,scrollBeyondLastLine:!1,overviewRulerBorder:!1}),we.push({domId:u,instance:t,value:n}),setTimeout(()=>{a.forEach(R=>{t&&R(t)})}),t.onDidChangeModelContent(R=>{t&&(n.value=t.getValue())})},disposeEditor:()=>{const u=we.findIndex(f=>f.domId===e);t?.dispose(),u!==-1&&we.splice(u,1),t=void 0},findEditor:Sf,getEditorValue:Tf,registerEditorEvent:(u,f)=>{u==="mounted"&&a.push(f)},unRegisterEditorEvent:u=>{u==="mounted"&&(a=[])},insertText:wf,setText:xf,formatCode:()=>{t?.getAction("editor.action.formatDocument")?.run()},editorValue:ur(n),openOperationRecordDrawer:bf}},$f=S("-1"),Mf=S(""),kf=S(Ur()),If=S(""),Pf=S(""),Cf=S("translateX(0)"),Ff=S("relative"),Af=S(-1),Of=S(!1),Df=K({originData:"",lastData:"",version:"",description:"",name:"未命名脚本",savePath:"",declare:!1}),{insertText:Rf}=Lt(),Ef=()=>{Rf(hf,`/**
 * 请勿删除，此声明会在脚本读取时用到！
 * @version:${_e.version}
 * @name:${_e.name}
 * @description:${_e.description}
 */`,!0),_e.description="无",_e.name="未命名脚本",_e.version="v1.0",_e.visible=!1},_e=K({visible:!1,name:"未命名",version:"v1.0",description:"无",title:"插入脚本声明",targetFn:Ef}),Vf=K({savePath:"",visible:!1,cb:()=>{}}),Lf=K({visible:!1,cb:()=>{},close_cb:()=>{}}),Fe=()=>({openId:$f,tempEditorValue:Mf,preloadText:kf,preloadPath:If,curScriptDir:Pf,contentTransform:Cf,asideBarPos:Ff,testApiWinId:Af,isEditing:Of,fileInfo:Df,declareMod:_e,saveMod:Vf,autoSaveDialog:Lf}),Nf={class:"btns"},jf=W({__name:"EditorHeader",setup(e){const t=Z(),{openId:n,tempEditorValue:a,preloadText:s,preloadPath:o,contentTransform:r,asideBarPos:l,fileInfo:i,declareMod:u,saveMod:f,autoSaveDialog:p,isEditing:v}=Fe(),{getEditorValue:h,openOperationRecordDrawer:w}=Lt(),$=A(()=>{const k=h("codeEditBox");return k?k.value!==i.originData:!i.originData}),F=async()=>{{G({title:"提示",message:"playground环境下无法打开调试窗口,请前往API调试",type:"warning",position:"bottom-right"});return}},R=async()=>{{G({title:"提示",message:"playground环境下无法打开鼠标工具",type:"warning",position:"bottom-right"});return}},N=async()=>{w.value=!w.value},le=()=>{l.value="relative",r.value="translateX(0)",v.value=!1,xe.replace("/script/setting")},Q=async()=>{{G({title:"提示",message:"playground环境下无法打开脚本文件",type:"warning",position:"bottom-right"});return}},se=()=>{const k=h("codeEditBox"),y=()=>{a.value=k?.value||"",p.visible=!1,xe.replace({path:"/script/run"}),l.value="relative",r.value="translateX(0)"},B=async()=>{const ee=await Y();y(),ee||G({title:"保存失败",message:"直接运行最后一次保存的版本",type:"error"})};k?.value!==i.originData?t.editor.runAutoSave?B():(p.cb=B,p.close_cb=y,p.visible=!0):y()},Y=async()=>{if(i.declare){const k=h("codeEditBox");return Oe().mockScriptList.value.find(y=>y.id===n.value).content=k?.value||"",i.originData=k?.value||"",G({title:"提示",message:"保存成功",type:"success",position:"bottom-right"}),!0}else return G({title:"保存失败",message:"保存之前请先在脚本头部插入'脚本声明'或者将脚本声明补充完整",type:"error",position:"bottom-right"}),!1},he=ce();Qe(he);const ue=()=>{xe.replace({path:"/script/list"}),s.value="",l.value="relative",r.value="translateX(0)"};return(k,y)=>{const B=Mt,ee=me,j=ne,D=kt,ke=jr;return b(),T(ke,{title:c(i).name,height:35,"allow-drag":"",onBack:ue},{before:d(()=>[Tt(x("span",null,"*",512),[[$t,c($)]]),g(B,{size:"small",type:c(i).declare?"success":"warning"},{default:d(()=>[M(E(c(i).version),1)]),_:1},8,["type"]),c(i).declare?q("",!0):(b(),T(ee,{key:0,"w-50px":"","mr-5px":"",link:"",size:"small",type:"primary",onClick:y[0]||(y[0]=Re=>c(u).visible=!0),style:{"pointer-events":"all"}},{default:d(()=>y[1]||(y[1]=[M("插入声明")])),_:1}))]),default:d(()=>[x("div",Nf,[y[9]||(y[9]=x("div",{class:"dragable","data-tauri-drag-region":"",style:{cursor:"move"}},null,-1)),g(D,{class:"box-item",effect:"dark",content:"显示操作录制面板",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:N,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[2]||(y[2]=[x("span",{"i-solar-videocamera-record-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开鼠标工具",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:R,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[3]||(y[3]=[x("span",{"i-solar-mouse-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开调试窗口",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:F,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[4]||(y[4]=[x("span",{"i-mdi-function-variant":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"前往脚本设置",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:le,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[5]||(y[5]=[x("span",{"i-solar-settings-linear":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"打开脚本",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:Q,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[6]||(y[6]=[x("span",{"i-mdi-folder-eye-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"运行脚本",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",onClick:se,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[7]||(y[7]=[x("span",{"i-mdi-play-circle-outline":""},null,-1)])),_:1})]),_:1})]),_:1}),g(D,{class:"box-item",effect:"dark",content:"[Ctrl+S]保存",placement:"bottom"},{default:d(()=>[g(ee,{size:"small",type:"primary",onClick:Y,circle:""},{default:d(()=>[g(j,{size:"large"},{default:d(()=>y[8]||(y[8]=[x("span",{"i-mdi-content-save-outline":""},null,-1)])),_:1})]),_:1})]),_:1})]),qe(k.$slots,"default",{},void 0,!0)]),_:3},8,["title"])}}}),Uf=H(jf,[["__scopeId","data-v-6c8cd3a9"]]),zf="/assets/icon64x64-BkA5owIZ.png",Bf=S({version:"",desc:"",downloadUrl:[],history:[],forceUpdate:!1,updateTime:"",openDialog:!1}),qf=async e=>{{G({title:"提示",message:"当前已是最新版本",type:"success",position:"bottom-right"});return}},Kf=async e=>{e.pwd.length>0&&(Rn(e.pwd),G({title:"提示",message:"提取码已复制到剪切板",type:"success",position:"bottom-right"})),await mr("open_in_default_browser",{url:e.url})},Gf=()=>({appVersionInfo:Bf,goAppUpdate:qf,goDownloadNewApp:Kf}),Jf={class:"dialog-footer"},Wf={key:0,"data-tauri-drag-region":"",class:"titlebar",style:{cursor:"move"}},Yf={class:"title","data-tauri-drag-region":"",style:{cursor:"move"}},Xf={class:"text"},Hf={key:0,"ml-4":"","justify-center":"",flex:"","flex-row":"","items-center":""},Zf={key:0,class:"api-test-bar","data-tauri-drag-region":"",style:{cursor:"move"}},Qf={key:1,"data-tauri-drag-region":"",flex:"","flex-1":"","flex-row":"","items-center":"","justify-center":""},ey={class:"btn"},ty={key:0,"i-mdi-fullscreen":""},ny={key:1,"i-mdi-fullscreen-exit":""},ay={key:1,class:"titlebar","data-tauri-drag-region":""},oy={class:"btn-content"},sy={key:0,"i-mdi-fullscreen":""},ry={key:1,"i-mdi-fullscreen-exit":""},ly=W({__name:"AutoTitleBar",setup(e){Ze(k=>({db7cf692:c(v),"5a2cec5a":c(le),"7fdd7ff4":c(ue)}));const{info:t,searchInfo:n,windowInnerWidth:a,clickMinimize:s}=Ot(),{goInstallDeps:o}=nl(),{controlDeviceInfo:r}=Me(),{isEditing:l,fileInfo:i}=Fe();Lt();const{showTour:u}=Ln(),f=S(!1),p=()=>{f.value=!f.value},v=A(()=>l.value?"35px":"40px"),h=S(!1),w=()=>{s.value=!0},$=async()=>{{const{unmaximizeSize:k,maximizeSize:y}=St();N.value?k():y(),N.value=!N.value;return}},F=async()=>{},{isDark:R}=nt(),N=S(!1),le=A(()=>R.value?"#272727":"#f6f6f6");S("playground");const Q=Z(),se=async()=>{},Y=A(()=>!1),he=A(()=>t.showContentType==="apiTest"&&a.value>=820),ue=A(()=>he.value||t.showContentType!=="apiTest"?"relative":"absolute");return Ae(async()=>{}),Ia(()=>{}),(k,y)=>{const B=me,ee=It,j=gr,D=Te,ke=Mt,Re=Pt,X=ne,at=kt,Ee=Uf;return b(),I(ae,null,[g(ee,{modelValue:c(h),"onUpdate:modelValue":y[1]||(y[1]=L=>re(h)?h.value=L:null),title:"退出程序"},{footer:d(()=>[x("span",Jf,[g(B,{onClick:y[0]||(y[0]=L=>h.value=!1)},{default:d(()=>y[17]||(y[17]=[M("取消")])),_:1}),g(B,{type:"danger",onClick:F},{default:d(()=>[M(E(c(l)?"保存并":"")+"退出",1)]),_:1})])]),default:d(()=>[y[18]||(y[18]=x("div",null,"确定要退出程序吗?",-1))]),_:1},8,["modelValue"]),g(ht,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(l)?c(l)?(b(),I("div",ay,[g(Ee,null,{default:d(()=>[x("div",oy,[g(B,{link:"",class:"titlebar-button",onClick:y[12]||(y[12]=L=>c(l)&&c(u)())},{default:d(()=>[g(X,null,{default:d(()=>y[27]||(y[27]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[13]||(y[13]=L=>c(l)&&p())},{default:d(()=>[g(X,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(f)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[14]||(y[14]=L=>c(l)&&w())},{default:d(()=>[g(X,null,{default:d(()=>y[28]||(y[28]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[15]||(y[15]=L=>c(l)&&$())},{default:d(()=>[g(X,null,{default:d(()=>[c(N)?(b(),I("span",ry)):(b(),I("span",sy))]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button danger",onClick:y[16]||(y[16]=L=>c(l)&&(h.value=!0))},{default:d(()=>[g(X,null,{default:d(()=>y[29]||(y[29]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]),_:1})])):q("",!0):(b(),I("div",Wf,[x("div",Yf,[x("div",Xf,[g(j,{style:{width:"20px",height:"20px"},src:c(zf)},null,8,["src"]),g(D,null,{default:d(()=>[M(E(c(t).title),1)]),_:1}),c(r).id.length?(b(),I("div",Hf,[g(D,null,{default:d(()=>y[19]||(y[19]=[M("正在被")])),_:1}),g(ke,{type:"warning"},{default:d(()=>[M(E(c(r).id),1)]),_:1}),g(D,null,{default:d(()=>y[20]||(y[20]=[M("控制")])),_:1})])):q("",!0)]),g(ht,{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:d(()=>[c(he)?(b(),I("div",Zf,[g(Re,{class:"search-ipt",modelValue:c(t).apiTest.searchValue,"onUpdate:modelValue":y[2]||(y[2]=L=>c(t).apiTest.searchValue=L),clearable:"",placeholder:"可输入API的关键字对API进行筛选"},null,8,["modelValue"]),g(B,{class:"output-btn",onClick:y[3]||(y[3]=L=>c(t).apiTest.openOutput=!0),circle:""},{default:d(()=>[g(X,null,{default:d(()=>y[21]||(y[21]=[x("span",{"i-mdi-square-rounded-badge-outline":""},null,-1)])),_:1})]),_:1})])):(b(),I("div",Qf,[c(n).show&&c(n).target===c(Xt).ScriptList?(b(),T(Re,{key:0,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[4]||(y[4]=L=>c(n).content=L),clearable:"",placeholder:"搜索脚本名称或备注"},null,8,["modelValue"])):q("",!0),c(n).show&&c(n).target===c(Xt).CodeSnippetList?(b(),T(Re,{key:1,class:"search-ipt",modelValue:c(n).content,"onUpdate:modelValue":y[5]||(y[5]=L=>c(n).content=L),clearable:"",placeholder:"搜索代码片段:名称、备注、前缀"},null,8,["modelValue"])):q("",!0)]))]),_:1})]),x("div",ey,[c(Q).app.dependenceState==="不可用"?(b(),T(at,{key:0,effect:"light",content:"基础功能不可用，点我安装依赖",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button warning-btn",onClick:y[6]||(y[6]=L=>c(o)())},[g(X,null,{default:d(()=>y[22]||(y[22]=[x("span",{"i-mdi-tools":""},null,-1)])),_:1})])]),_:1})):q("",!0),c(Y)&&c(Q).view.showUpdateInTitleBar?(b(),T(at,{key:1,effect:"light",content:"有新版本，点我更新",placement:"bottom"},{default:d(()=>[x("div",{class:"titlebar-button setup-btn",onClick:se},[g(X,null,{default:d(()=>y[23]||(y[23]=[x("span",{"i-mdi-cloud-download-outline":""},null,-1)])),_:1})])]),_:1})):q("",!0),g(B,{link:"",class:"titlebar-button",onClick:y[7]||(y[7]=L=>!c(l)&&c(u)())},{default:d(()=>[g(X,null,{default:d(()=>y[24]||(y[24]=[x("span",{"i-mdi-lightbulb-question-outline":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[8]||(y[8]=L=>!c(l)&&p())},{default:d(()=>[g(X,null,{default:d(()=>[x("span",{"i-solar-pin-bold-duotone":"",style:ie({color:c(f)?"var(--el-color-primary-dark-2)":"var(--color)"})},null,4)]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[9]||(y[9]=L=>!c(l)&&w())},{default:d(()=>[g(X,null,{default:d(()=>y[25]||(y[25]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button",onClick:y[10]||(y[10]=L=>!c(l)&&$())},{default:d(()=>[g(X,null,{default:d(()=>[c(N)?(b(),I("span",ny)):(b(),I("span",ty))]),_:1})]),_:1}),g(B,{link:"",class:"titlebar-button danger",onClick:y[11]||(y[11]=L=>!c(l)&&(h.value=!0))},{default:d(()=>[g(X,null,{default:d(()=>y[26]||(y[26]=[x("span",{"i-mdi-window-close":""},null,-1)])),_:1})]),_:1})])]))]),_:1})],64)}}}),iy=H(ly,[["__scopeId","data-v-ceed98dc"]]),da=S(!1),cy=S(!0),Ke=K({name:"",description:"",prefix:"",code:""}),Rs=S(),uy=(e,t,n)=>{t.trim()===""?n(new Error("请输入代码片段名称")):(async()=>(Oe().mockCodeSnippetList.value.find(s=>s.name===t)&&n(new Error("名称和已有代码片段重复，换个试试吧")),n()))()},dy=K({name:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{validator:uy,trigger:"blur"}],prefix:[{required:!0,message:"代码片段前缀不能为空",trigger:"blur"},{min:1,max:20,message:"代码片段前缀长度在 1 到 20 个字符",trigger:"blur"}]}),py=()=>{try{Rn(Ke.code),oe.success("操作代码片段复制成功")}catch(e){oe.error("操作代码片段复制失败"),console.error(e)}finally{da.value=!1}},my=()=>{Rs.value?.validate(async e=>{if(e){Oe().mockCodeSnippetList.value.push({id:ye(),name:Ke.name,description:Ke.description,prefix:Ke.prefix,content:"",filePath:"playground"}),oe.success("操作代码片段保存成功"),da.value=!1;return}})},gy=()=>({saveDialog:da,saveConfig:Ke,ruleFormRef:Rs,rules:dy,copyCode:py,saveCodeSnippets:my,showCopyBtn:cy}),fy=W({__name:"CodeSnippetSaveDialog",setup(e){const{saveDialog:t,saveConfig:n,ruleFormRef:a,rules:s,copyCode:o,saveCodeSnippets:r,showCopyBtn:l}=gy();return(i,u)=>{const f=Te,p=Pt,v=fr,h=yr,w=me,$=It;return b(),T($,{modelValue:c(t),"onUpdate:modelValue":u[4]||(u[4]=F=>re(t)?t.value=F:null),title:"保存操作记录",class:"snippet-save-dialog"},{footer:d(()=>[x("div",null,[g(w,{onClick:u[3]||(u[3]=F=>t.value=!1)},{default:d(()=>u[6]||(u[6]=[M("取消")])),_:1}),c(l)?(b(),T(w,{key:0,type:"primary",onClick:c(o)},{default:d(()=>u[7]||(u[7]=[M("复制")])),_:1},8,["onClick"])):q("",!0),g(w,{type:"primary",onClick:c(r)},{default:d(()=>u[8]||(u[8]=[M("保存")])),_:1},8,["onClick"])])]),default:d(()=>[g(f,null,{default:d(()=>u[5]||(u[5]=[M("将操作记录作为代码片段保存到代码片段仓库,或者仅复制代码片段")])),_:1}),g(h,{model:c(n),ref_key:"ruleFormRef",ref:a,rules:c(s),"label-position":"right","label-width":"auto","mt-3":""},{default:d(()=>[g(v,{label:"代码片段名称",prop:"name"},{default:d(()=>[g(p,{modelValue:c(n).name,"onUpdate:modelValue":u[0]||(u[0]=F=>c(n).name=F)},null,8,["modelValue"])]),_:1}),g(v,{label:"代码片段前缀",prop:"prefix"},{default:d(()=>[g(p,{modelValue:c(n).prefix,"onUpdate:modelValue":u[1]||(u[1]=F=>c(n).prefix=F)},null,8,["modelValue"])]),_:1}),g(v,{label:"代码片段描述",prop:"description"},{default:d(()=>[g(p,{modelValue:c(n).description,"onUpdate:modelValue":u[2]||(u[2]=F=>c(n).description=F),autosize:{minRows:2},type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),yy={key:0},hy={key:0},by={class:"fields"},vy={class:"dialog-footer"},_y=W({__name:"GeneralDialog",props:ze({isTestModule:{type:Boolean,default:!1},title:{type:String},content:{type:String},callback:{type:Function}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=e,a=()=>{t.value=!1};return(s,o)=>{const r=br,l=me,i=It;return b(),T(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),title:n.title,onClose:a,onKeyup:hr(n.callback,["enter"]),draggable:"",top:"10vh",width:"70%",class:"general-dialog"},{footer:d(()=>[x("span",vy,[g(l,{onClick:a},{default:d(()=>o[1]||(o[1]=[M("取消")])),_:1}),g(l,{type:"primary",onClick:n.callback},{default:d(()=>o[2]||(o[2]=[M(" 确定 ")])),_:1},8,["onClick"])])]),default:d(()=>[n.content?(b(),I("div",yy,[n.isTestModule?(b(),T(r,{key:1,title:n.content,closable:!1,type:"info","show-icon":""},null,8,["title"])):(b(),I("span",hy,E(n.content),1))])):q("",!0),x("div",by,[qe(s.$slots,"element")])]),_:3},8,["modelValue","title","onKeyup"])}}}),wy={key:0},xy=W({__name:"RangeInput",props:ze({limit:{type:Object},mountedValue:{type:Object},disabled:{type:Boolean,default:!1},label:{type:String,default:""},controls:{type:Boolean,default:!1}},{modelValue:{required:!0,default:[0,0]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=S(),n=S(),a=Be(e,"modelValue"),s=e,o=()=>{a.value[0]>=a.value[1]?(a.value[0]=a.value[1],n.value=a.value[1],t.value=a.value[0]):(n.value=void 0,t.value=void 0)};return Ae(()=>{s.mountedValue&&(a.value=s.mountedValue)}),(r,l)=>{const i=Pa,u=kt;return b(),I("div",{flex:"","flex-row":"","items-center":"",style:ie({justifyContent:s.label?"space-between":"flex-start"})},[s.label?(b(),I("div",wy,E(s.label),1)):q("",!0),x("div",{flex:"","flex-row":"","items-center":"",style:ie({width:s.label?"auto":"100%"})},[g(u,{effect:"dark",content:"最小值"+(s.limit?`(min:${s.limit[0]})`:""),placement:"bottom"},{default:d(()=>[g(i,{class:ba(s.controls?"w-105px":"w-65px"),modelValue:a.value[0],"onUpdate:modelValue":l[0]||(l[0]=f=>a.value[0]=f),min:s.limit?s.limit[0]:void 0,max:c(n),size:"small",controls:s.controls,onChange:l[1]||(l[1]=f=>o()),disabled:s.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"]),l[4]||(l[4]=M(" ~ ")),g(u,{effect:"dark",content:"最大值"+(s.limit?`(max:${s.limit[1]})`:""),placement:"bottom"},{default:d(()=>[g(i,{class:ba(s.controls?"w-105px":"w-65px"),modelValue:a.value[1],"onUpdate:modelValue":l[2]||(l[2]=f=>a.value[1]=f),min:c(t),max:s.limit?s.limit[1]:void 0,size:"small",controls:s.controls,onChange:l[3]||(l[3]=f=>o()),disabled:s.disabled},null,8,["class","modelValue","min","max","controls","disabled"])]),_:1},8,["content"])],4)],4)}}}),Sy={class:"suggestion-item"},Ty={class:"tip"},$y=W({__name:"DirInput",props:ze({label:{type:String,default:""},suffix:{type:String,default:""},prefix:{type:String,default:""},verify:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=S(!0),a=e,s=K([]),o=(i,u)=>{const f=i?s.filter(p=>p.value.includes(i)||p.label.includes(i)):s;u(f)};Ae(async()=>{const i=Z(),u=i.envSetting.workDir,f=i.envSetting.screenshotSavePath;await We.getInstallDir(),s.push({label:"工作目录",value:u}),s.push({label:"截图路径",value:f})});const r=i=>{t.value=i.value};pe(t,async()=>{a.verify&&(n.value=await yt(t.value))});const l=async()=>{{t.value="E:\\playground\\";return}};return(i,u)=>{const f=Te,p=me,v=Mt,h=Fa,w=ne;return b(),I("div",null,[a.label!==""&&a.label.length>10?(b(),T(f,{key:0,style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[M(E(a.label),1)]),_:1},8,["style"])):q("",!0),g(h,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=$=>t.value=$),"fetch-suggestions":o,size:"small",onSelect:r,disabled:a.disabled},Ca({append:d(()=>[g(p,{onClick:l},{default:d(()=>u[1]||(u[1]=[M("选择路径")])),_:1})]),default:d(({item:$})=>[x("div",Sy,[g(f,null,{default:d(()=>[M(E($.value),1)]),_:2},1024),g(v,{size:"small"},{default:d(()=>[M(E($.label),1)]),_:2},1024)])]),_:2},[a.label!==""&&a.label.length<=10?{name:"prepend",fn:d(()=>[g(f,{style:ie({color:c(n)?void 0:"red"})},{default:d(()=>[M(E(a.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),Tt(x("div",Ty,[g(w,{color:"red"},{default:d(()=>u[2]||(u[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),g(v,{type:"danger"},{default:d(()=>u[3]||(u[3]=[M("该路径无效，请检查路径填写是否有误，请检查路径填写是否有误")])),_:1})],512),[[$t,!c(n)]])])}}}),My=H($y,[["__scopeId","data-v-424cac38"]]),ky={class:"fr-slider"},Iy={class:"data-area"},Py=W({__name:"SliderInput",props:ze({label:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:Number,default:100},disabled:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},controls:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Be(e,"modelValue"),n=e,a=r=>{const l=(""+r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return l?Math.max(0,(l[1]?l[1].length:0)-(l[2]?+l[2]:0)):0},s=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)+Math.round(n.step*r))/r},o=()=>{const r=10**Math.max(a(t.value),a(n.step));t.value=(Math.round(t.value*r)-Math.round(n.step*r))/r};return(r,l)=>{const i=Te,u=ne,f=me,p=vr;return b(),I("div",ky,[n.label&&!n.hideLabel?(b(),T(i,{key:0,class:"label"},{default:d(()=>[M(E(n.label),1)]),_:1})):q("",!0),x("div",Iy,[g(i,{"mr-10px":""},{default:d(()=>[M(E(t.value),1)]),_:1}),n.controls?(b(),T(f,{key:0,link:"",size:"small",disabled:t.value<=n.min,onClick:o,type:"danger"},{default:d(()=>[g(u,null,{default:d(()=>l[1]||(l[1]=[x("span",{"i-mdi-minus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0),g(p,{style:ie({width:n.label?n.width+"px":"100%"}),modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=v=>t.value=v),min:n.min,max:n.max,step:n.step,disabled:n.disabled},null,8,["style","modelValue","min","max","step","disabled"]),n.controls?(b(),T(f,{key:1,link:"",size:"small",disabled:t.value>=n.max,onClick:s,type:"primary"},{default:d(()=>[g(u,null,{default:d(()=>l[2]||(l[2]=[x("span",{"i-mdi-plus":""},null,-1)])),_:1})]),_:1},8,["disabled"])):q("",!0)])])}}}),Cy=H(Py,[["__scopeId","data-v-18b77570"]]),Fy={class:"card"},Ay={class:"title"},Oy={class:"title-btns"},Dy={class:"content"},Ry={class:"line"},Ey={class:"line"},Vy=W({__name:"RectInput",props:ze({targetSrc:{type:String,default:""},disabled:{type:Boolean,default:!1}},{modelValue:{required:!1,default:{x:0,y:0,width:0,height:0}},modelModifiers:{}}),emits:["update:modelValue"],setup(e){Ze(l=>({"6a3ece84":c(t)}));const{oppositeBgColor:t}=nt(),n=Be(e,"modelValue"),a=()=>{try{Yu(n.value),G({title:"复制成功",message:"已复制到剪贴板",type:"success",position:"bottom-right"})}catch(l){G({title:"复制失败",message:JSON.stringify(l),type:"error",position:"bottom-right"})}},s=e,o=async()=>{try{let{value:l}=await ka.prompt("格式：x,y,width,height，例如：0,0,100,100","快速填入参数",{inputValue:""});if(l=l.replace(/\s/g,""),l.length>0){let i=l.split(",");if(i.length!==4&&(i=l.split("，"),i.length!==4)){G({title:"参数格式错误",message:"请按照格式填写参数",type:"error",position:"bottom-right"});return}n.value.x=parseInt(i[0]),n.value.y=parseInt(i[1]),n.value.width=parseInt(i[2]),n.value.height=parseInt(i[3])}}catch{}},r=async()=>{try{if(s.targetSrc&&s.targetSrc!==""){const l=await O.getImgRectInfo(s.targetSrc);n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height}else{const l=await O.getScreenRectInfo();n.value.x=l.startX,n.value.y=l.startY,n.value.width=l.width,n.value.height=l.height;return}}catch(l){console.error(l)}};return(l,i)=>{const u=Te,f=me,p=Pt;return b(),I("div",Fy,[x("div",Ay,[g(u,null,{default:d(()=>[M("截取"+E(s.targetSrc.trim().length===0?"屏幕":"图片")+"指定位置",1)]),_:1}),x("div",Oy,[g(f,{disabled:s.disabled,size:"small",onClick:o},{default:d(()=>i[4]||(i[4]=[M("填入参数")])),_:1},8,["disabled"]),g(f,{disabled:s.disabled,size:"small",onClick:a},{default:d(()=>i[5]||(i[5]=[M("复制参数")])),_:1},8,["disabled"]),g(f,{disabled:s.disabled,size:"small",onClick:r},{default:d(()=>i[6]||(i[6]=[M("截取屏幕矩形")])),_:1},8,["disabled"])])]),x("div",Dy,[x("div",Ry,[g(p,{disabled:s.disabled,size:"small",modelValue:n.value.x,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value.x=v),modelModifiers:{number:!0}},{prepend:d(()=>i[7]||(i[7]=[M("x")])),_:1},8,["disabled","modelValue"]),g(p,{disabled:s.disabled,size:"small",modelValue:n.value.y,"onUpdate:modelValue":i[1]||(i[1]=v=>n.value.y=v),modelModifiers:{number:!0}},{prepend:d(()=>i[8]||(i[8]=[M("y")])),_:1},8,["disabled","modelValue"])]),x("div",Ey,[g(p,{disabled:s.disabled,size:"small",modelValue:n.value.width,"onUpdate:modelValue":i[2]||(i[2]=v=>n.value.width=v),modelModifiers:{number:!0}},{prepend:d(()=>i[9]||(i[9]=[M("width(宽)")])),_:1},8,["disabled","modelValue"]),g(p,{disabled:s.disabled,size:"small",modelValue:n.value.height,"onUpdate:modelValue":i[3]||(i[3]=v=>n.value.height=v),modelModifiers:{number:!0}},{prepend:d(()=>i[10]||(i[10]=[M("height(高)")])),_:1},8,["disabled","modelValue"])])])])}}}),Ly=H(Vy,[["__scopeId","data-v-8240fca1"]]),Ny={class:"file-input-content"},jy={class:"suggestion-item"},Uy={class:"tip"},zy={flex:"","flex-items-center":"","flex-row":""},By={class:"path-content"},qy=W({__name:"FileInput",props:ze({label:{type:String,default:""},verify:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labelPos:{type:String,default:"center"},multipleLabelPos:{type:String,default:"left"}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=K([]),a=(p,v)=>{const h=p?n.filter(w=>w.value.includes(p)||w.label.includes(p)):n;v(h)};Ae(async()=>{const p=Z(),v=p.envSetting.workDir,h=p.envSetting.screenshotSavePath;await We.getInstallDir(),n.push({label:"工作目录",value:v}),n.push({label:"截图路径",value:h})});const s=Be(e,"modelValue"),o=p=>{s.value=p.value},r=p=>{t.disabled||s.value.splice(s.value.indexOf(p),1)},l=K([]),i=S(!0),u=async()=>{{s.value=t.multiple?["E:\\playground\\file1","E:\\playground\\file2"]:"E:\\playground\\file1";return}},f=()=>{s.value=[]};return pe(s,async()=>{if(t.verify)if(typeof s.value=="string")i.value=await yt(s.value);else{l.splice(0,l.length);for(const p of s.value)await yt(p)||l.push(p)}}),(p,v)=>{const h=Te,w=me,$=Mt,F=Fa,R=ne;return b(),I("div",Ny,[typeof s.value=="string"?(b(),I(ae,{key:0},[t.label!==""&&t.label.length>10?(b(),T(h,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[M(E(t.label),1)]),_:1},8,["style"])):q("",!0),g(F,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=N=>s.value=N),"fetch-suggestions":a,size:"small",onSelect:o,disabled:t.disabled},Ca({append:d(()=>[g(w,{onClick:u},{default:d(()=>v[1]||(v[1]=[M("选择文件")])),_:1})]),default:d(({item:N})=>[x("div",jy,[g(h,null,{default:d(()=>[M(E(N.value),1)]),_:2},1024),g($,{size:"small"},{default:d(()=>[M(E(N.label),1)]),_:2},1024)])]),_:2},[t.label!==""&&t.label.length<=10?{name:"prepend",fn:d(()=>[g(h,{style:ie({color:c(i)?void 0:"red"})},{default:d(()=>[M(E(t.label),1)]),_:1},8,["style"])]),key:"0"}:void 0]),1032,["modelValue","disabled"]),Tt(x("div",Uy,[g(R,{color:"red"},{default:d(()=>v[2]||(v[2]=[x("span",{"i-mdi-close":""},null,-1)])),_:1}),g($,{type:"danger"},{default:d(()=>v[3]||(v[3]=[M("该路径无效，请检查路径填写是否有误")])),_:1})],512),[[$t,!c(i)]])],64)):(b(),I(ae,{key:1},[x("div",{flex:"","flex-row":"","flex-items-center":"","justify-between":"",style:ie({flexDirection:t.multipleLabelPos==="left"?"row":"column",alignItems:t.multipleLabelPos==="left"?"center":"flex-start"})},[t.label!==""?(b(),T(h,{key:0,style:ie({color:c(i)?void 0:"red",alignSelf:t.labelPos==="left"?"flex-start":"center"})},{default:d(()=>[M(E(t.label),1)]),_:1},8,["style"])):q("",!0),x("div",zy,[g(w,{type:"primary",class:"w-100",size:"small",onClick:u,disabled:t.disabled},{default:d(()=>v[4]||(v[4]=[M(" +选择文件 ")])),_:1},8,["disabled"]),g(w,{class:"w-100",size:"small",onClick:f,disabled:t.disabled},{default:d(()=>v[5]||(v[5]=[M(" x清空已选 ")])),_:1},8,["disabled"])])],4),x("div",By,[(b(!0),I(ae,null,fe(s.value,N=>(b(),T($,{class:"tag",key:N,size:"small",type:c(l).includes(N)?"danger":"success",closable:"","disable-transitions":!1,onClose:le=>r(N)},{default:d(()=>[M(E(N),1)]),_:2},1032,["type","onClose"]))),128))])],64))])}}}),Ky=H(qy,[["__scopeId","data-v-86bedacb"]]),Gy={key:0,class:"dynamics-input"},Jy={key:0,class:"label"},Wy=W({__name:"DynamicsInput",props:{name:{type:String,required:!0},argName:{type:String,required:!0},onlyTest:{type:Boolean,default:!1},noTest:{type:Boolean,default:!1},value:{type:[String,Number,Boolean,Object,Array],required:!0},disabled:{type:Boolean,default:!1}},setup(e){Ze(h=>({"1909de0c":c(v),"6e372a5f":c(i)}));const{dynamicDialog:t}=tt(),n=ce(),a=["input","FileInput","DirInput","slider"],s=["input","FileInput","DirInput","RectInput"],o=h=>{const w=l.value?.selectOptionSeparator;if(typeof h=="number"||!w)return{label:h,value:h};const $=h.split(w);return{label:$[0],value:$[1]||$[0]}},r=e,l=A(()=>{const h=_().find(w=>w.name===r.name)?.testModule;if(h){const w=h.dialog;return w.args?.forEach($=>{$?.options&&typeof $.options=="function"&&($.options=$.options(n))}),w.args.find($=>$.name===r.argName)}}),i=A(()=>{const h=l.value;return h&&s.includes(h.componentType)?"block":"flex"}),u=A(()=>{const h=l.value?.targetSrc,w=_().find($=>$.name===r.name)?.testModule;if(w&&h){const F=w.dialog.args.find(R=>R.name===h);if(F)return F.value}return""}),f=A(()=>{const h=l.value?.displayCondition;if(h?.length){const w=_().find($=>$.name===r.name)?.testModule;if(w){const $=w.dialog;for(let F of h){const R=$.args.find(N=>N.name===F)?.value;if(R===void 0||!R)return!1}return!0}return console.error(`未找到${r.name}的测试模块`),!1}else return!0}),p=S(r.value);pe(()=>r.value,h=>{p.value=h}),pe(p,(h,w)=>{if(h===0&&w===null)return;const $=["input","select","FileInput","DirInput"],F=l.value?.componentType;h===null&&(l.value?.componentType==="numberInput"?(h=0,p.value=0):F&&$.includes(F)?(h="",p.value=""):l.value?.componentType==="RectInput"&&(h={x:0,y:0,width:0,height:0},p.value={x:0,y:0,width:0,height:0}));let R;const le=_().find(Q=>Q.name===r.name);if(le&&(R=le),R){const Q=R.testModule?.dialog;Q&&Q.args?.forEach(Y=>{Y.options&&typeof Y.options=="function"&&(Y.options=Y.options(n))});const se=Q?.args.find(Y=>Y.name===r.argName);se&&(se.value=h)}});const{appBackground:v}=nt();return(h,w)=>{const $=_r,F=wr,R=Ky,N=Ly,le=Cy,Q=xr,se=My,Y=Pa,he=Pt,ue=xy;return c(t).title===e.name&&c(f)?Tt((b(),I("div",Gy,[c(l)?.label&&!a.includes(c(l).componentType)?(b(),I("span",Jy,E(c(l).label),1)):q("",!0),c(l)&&c(l).componentType==="select"?(b(),T(F,{key:1,class:"input",modelValue:c(p),"onUpdate:modelValue":w[0]||(w[0]=k=>re(p)?p.value=k:null),filterable:"",multiple:c(l).multiple,clearable:c(l).multiple,"allow-create":!c(l).notAllowCreate,"default-first-option":"",placeholder:c(l).placeholder||"请选择"},{default:d(()=>[(b(!0),I(ae,null,fe(c(l).options,k=>(b(),T($,{key:k,label:o(k).label,disabled:e.disabled,value:o(k).value},null,8,["label","disabled","value"]))),128))]),_:1},8,["modelValue","multiple","clearable","allow-create","placeholder"])):c(l)&&c(l).componentType==="FileInput"&&(typeof c(p)=="string"||Array.isArray(c(p)))?(b(),T(R,{key:2,modelValue:c(p),"onUpdate:modelValue":w[1]||(w[1]=k=>re(p)?p.value=k:null),disabled:e.disabled,label:c(l).label,verify:c(l).verifyPath,multiple:c(l).multiple},null,8,["modelValue","disabled","label","verify","multiple"])):c(l)&&c(l).componentType==="RectInput"&&typeof c(p)=="object"?(b(),T(N,{key:3,modelValue:c(p),"onUpdate:modelValue":w[2]||(w[2]=k=>re(p)?p.value=k:null),disabled:e.disabled,"target-src":c(u)},null,8,["modelValue","disabled","target-src"])):c(l)&&c(l).componentType==="slider"&&typeof c(p)=="number"?(b(),T(le,{key:4,modelValue:c(p),"onUpdate:modelValue":w[3]||(w[3]=k=>re(p)?p.value=k:null),disabled:e.disabled,max:c(l).range?.max,min:c(l).range?.min,step:c(l).range?.step,label:c(l).label,size:"small"},null,8,["modelValue","disabled","max","min","step","label"])):c(l)&&c(l).componentType==="switch"&&typeof c(p)=="boolean"?(b(),T(Q,{key:5,modelValue:c(p),"onUpdate:modelValue":w[4]||(w[4]=k=>re(p)?p.value=k:null),disabled:e.disabled,"active-text":c(l).activeText||"是","inactive-text":c(l).inactiveText||"否",size:"small"},null,8,["modelValue","disabled","active-text","inactive-text"])):c(l)&&c(l).componentType==="DirInput"&&typeof c(p)=="string"?(b(),T(se,{key:6,modelValue:c(p),"onUpdate:modelValue":w[5]||(w[5]=k=>re(p)?p.value=k:null),disabled:e.disabled,label:c(l).label,suffix:c(l).suffix||"",verify:c(l).verifyPath},null,8,["modelValue","disabled","label","suffix","verify"])):c(l)&&c(l).componentType==="numberInput"&&typeof c(p)=="number"?(b(),T(Y,{key:7,class:"input",modelValue:c(p),"onUpdate:modelValue":w[6]||(w[6]=k=>re(p)?p.value=k:null),disabled:e.disabled,"value-on-clear":0,size:"small"},null,8,["modelValue","disabled"])):c(l)&&c(l).componentType==="input"&&typeof c(p)=="string"?(b(),T(he,{key:8,modelValue:c(p),"onUpdate:modelValue":w[7]||(w[7]=k=>re(p)?p.value=k:null),disabled:e.disabled,size:"small"},{prepend:d(()=>[M(E(c(l).label),1)]),_:1},8,["modelValue","disabled"])):c(l)&&c(l).componentType==="numberRangeInput"&&typeof c(p)=="object"?(b(),T(ue,{key:9,modelValue:c(p),"onUpdate:modelValue":w[8]||(w[8]=k=>re(p)?p.value=k:null),disabled:e.disabled},null,8,["modelValue","disabled"])):q("",!0)],512)),[[$t,(!e.onlyTest||e.onlyTest&&c(t).callType==="test")&&!(e.noTest&&c(t).callType==="test")]]):q("",!0)}}}),Yy=H(Wy,[["__scopeId","data-v-f5836922"]]),Xy=W({__name:"FillApiParamDialog",setup(e){const{dynamicDialog:t,builtInApiTestModules:n}=tt(),a=ce(),s=A(()=>{const o=n.value;return o.forEach(r=>{r?.dialog.args?.forEach(l=>{l.options&&typeof l.options=="function"&&(l.options=l.options(a))})}),o});return(o,r)=>{const l=Yy,i=_y;return b(),T(i,{modelValue:c(t).show,"onUpdate:modelValue":r[0]||(r[0]=u=>c(t).show=u),title:c(t).title,content:c(t).content,callback:c(t).callback,isTestModule:!0},{element:d(()=>[(b(!0),I(ae,null,fe(c(s),u=>(b(),I("div",null,[(b(!0),I(ae,null,fe(u?.dialog?.args,f=>(b(),T(l,{key:u.dialog?.targetMethodName+f.name,name:u.dialog?.targetMethodName||"",argName:f.name,value:f.value,"only-test":!!f.onlyTest,"no-test":!!f.noTest},null,8,["name","argName","value","only-test","no-test"]))),128))]))),256))]),_:1},8,["modelValue","title","content","callback"])}}}),Hy=W({__name:"Tours",setup(e){const{tourInfo:t,currentTourName:n}=Ln(),a=S(0),s=A(()=>Object.keys(t)),o=A(()=>s.value.map(i=>t[i])),r=i=>{const u=t[n.value];if((i>u.step&&u.preventNext||i<u.step&&u.preventPrevious)&&!u.doneSteps.includes(a.value)){oe.warning("请先完成当前步骤"),Ge(()=>{a.value--});return}const f=u.steps[i]?.onShow;f&&f(),u.step=i,u.preventNext=u.steps[i]?.preventNext||!1,u.preventPrevious=u.steps[i]?.preventPrevious||!1},l=()=>{const i=t[n.value];i.touring=!1,i.step=0,i.doneSteps.splice(0)};return pe(()=>t[n.value]?.step,()=>{const i=t[n.value]?.step;i&&Ge(()=>a.value=i)}),Ae(()=>{t[n.value].preventNext=t[n.value].steps[0]?.preventNext||!1}),(i,u)=>{const f=Sr,p=Tr;return b(),I("div",null,[(b(!0),I(ae,null,fe(c(o),(v,h)=>(b(),T(p,{key:h,modelValue:v.touring,"onUpdate:modelValue":w=>v.touring=w,current:c(a),"onUpdate:current":u[0]||(u[0]=w=>re(a)?a.value=w:null),onFinish:l,onClose:l,onChange:r},{default:d(()=>[(b(!0),I(ae,null,fe(v.steps,(w,$)=>(b(),T(f,{key:$,target:w.target,title:w.title,description:w.description},null,8,["target","title","description"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","current"]))),128))])}}}),Zy=en("globalShortcuts",{state:()=>({allShortcuts:[{shortcuts:"Ctrl+Shift+A",onlyDescription:"运行脚本"},{shortcuts:"Ctrl+Shift+D",onlyDescription:"重新初始化脚本"},{shortcuts:"Ctrl+Shift+S",onlyDescription:"强制停止脚本"},{shortcuts:"Ctrl+Alt+Shift+Home",onlyDescription:"强制显示主窗口"},{shortcuts:"Alt+Shift+C",onlyDescription:"记录鼠标位置及颜色"}]}),getters:{},actions:{updateShortcuts(e,t){this.allShortcuts.find(n=>n.onlyDescription===e).shortcuts=t},getShortcuts(e){return this.allShortcuts.find(t=>t.onlyDescription===e).shortcuts},exportData(){return JSON.stringify(this.allShortcuts)},importData(e){const t=JSON.parse(e);if(t instanceof Array){const n=[...this.allShortcuts];for(let a=0;a<t.length;a++){const s=t[a],o=n.find(r=>r.onlyDescription===s.onlyDescription);o&&(o.shortcuts=s.shortcuts)}this.$patch({allShortcuts:t})}},init(){this.$subscribe((e,t)=>{e.storeId==="globalShortcuts"&&localStorage.setItem("globalShortcuts",this.exportData())},{detached:!1}),window.localStorage.getItem("globalShortcuts")&&this.importData(window.localStorage.getItem("globalShortcuts"))}}}),Qy={class:"app"},eh={class:"common-layout"},th=W({__name:"App",setup(e){Ze(j=>({"4e483aea":c(B),"28d17502":c(ee),"2115d389":c(h),"59754b44":c(i),"75fb8f90":c(u),"6d70b271":c(f),a48b949e:c(p),e470f1fc:c(F),"1da15f4c":c($),"55b7b7d9":c(Y),"2308f473":c(Q),e01b094e:c(le),f851253e:c(v)}));const{registerAllInvokeApi:t}=tt(),{isMainWindow:n,menuKey:a}=St(),s=Z(),o=ce();Zy();const{app:r}=Qe(s),l=$r(),{borderRadius:i,appOpacity:u,borderColor:f,appTransform:p,appAsideBgColor:v,appBackground:h}=nt(),{isEditing:w}=Fe(),$=A(()=>w.value?"calc(100% - 35px)":"calc(100% - 40px)"),F=A(()=>w.value?"35px":"40px"),{info:R,syncWindowInnerWidth:N}=Ot(),{contentTransform:le,asideBarPos:Q}=Fe(),se=(j,D=!1)=>{j==="setting"&&Bt.checkDepUpdate(),r.value.state.aside.currentItem=j,j==="script"&&(D?j="scriptList":j=l.currentRoute.value.name||"scriptList"),l.replace({name:j}),R.showContentType=j,setTimeout(()=>{if(r.value.state.aside.collapsed){const ke=l.currentRoute.value.meta;R.title=ke.title}else R.title="风染脚本"},200)},Y=A(()=>r.value.state.aside.collapsed?"40px":"97px"),he=async(j=!0)=>{j&&window.addEventListener("resize",()=>{N(window.innerWidth),(window.innerWidth<800&&!r.value.state.aside.collapsed||window.innerWidth>=800&&r.value.state.aside.collapsed)&&ue()}),await s.init(),await o.init(),se(r.value.state.aside.currentItem),Bt.checkDepUpdate()};Ae(async()=>{Uu();{he(),await t();return}}),Ia(()=>{});const ue=()=>{r.value.state.aside.collapsed=!r.value.state.aside.collapsed,se(r.value.state.aside.currentItem)},{appVersionInfo:k,goDownloadNewApp:y}=Gf();Mr(()=>{});const{appWidth:B,appHeight:ee}=St();return(j,D)=>{const ke=Hy,Re=Xy,X=fy,at=iy,Ee=ne,L=me,Es=kt,ma=Pr,Vs=Cr,Ls=Fr,ga=kr("router-view"),Ns=Ar,js=Ir,Us=It;return b(),I("div",Qy,[g(ke),g(Re),g(X),c(n)?(b(),I(ae,{key:0},[g(at),x("div",eh,[g(js,null,{default:d(()=>[g(Ls,{class:"aside"},{default:d(()=>[g(Es,{effect:"dark",content:c(r).state.aside.collapsed?"展开":"折叠",placement:"right"},{default:d(()=>[c(r).state.aside.collapsed?(b(),T(L,{key:0,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[g(Ee,null,{default:d(()=>D[3]||(D[3]=[x("span",{"i-solar-alt-arrow-right-linear":""},null,-1)])),_:1})]),_:1})):(b(),T(L,{key:1,class:"aside-btn",link:"",type:"primary",onClick:ue},{default:d(()=>[g(Ee,null,{default:d(()=>D[4]||(D[4]=[x("span",{"i-solar-alt-arrow-left-linear":""},null,-1)])),_:1})]),_:1}))]),_:1},8,["content"]),(b(),T(Vs,{collapse:c(r).state.aside.collapsed,"collapse-transition":!1,"popper-effect":"dark",class:"el-menu-vertical","default-active":c(r).state.aside.currentItem,key:c(a),onSelect:D[0]||(D[0]=V=>se(V,!0))},{default:d(()=>[x("div",null,[(b(!0),I(ae,null,fe(c(yp),V=>(b(),T(ma,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[M(E(V.meta.title),1)]),default:d(()=>[g(Ee,null,{default:d(()=>[(b(),T(ot(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))]),D[5]||(D[5]=x("div",{"data-tauri-drag-region":"",style:{flex:"1",cursor:"move"}},null,-1)),x("div",null,[(b(!0),I(ae,null,fe(c(hp),V=>(b(),T(ma,{index:V.name,key:V.path+"|"+V.meta.title,id:V.meta?.id},{title:d(()=>[M(E(V.meta.title),1)]),default:d(()=>[g(Ee,null,{default:d(()=>[(b(),T(ot(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","id"]))),128))])]),_:1},8,["collapse","default-active"]))]),_:1}),g(Ns,{class:"app-main"},{default:d(()=>[g(ga,null,{default:d(({Component:V})=>[g(ht,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(b(),T(ot(V)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),g(Us,{modelValue:c(k).openDialog,"onUpdate:modelValue":D[2]||(D[2]=V=>c(k).openDialog=V),title:"版本更新v"+c(k).version,class:"version-update-dialog"},{footer:d(()=>[x("div",null,[g(L,{type:"info",size:"small",onClick:D[1]||(D[1]=V=>c(k).openDialog=!1)},{default:d(()=>D[6]||(D[6]=[M("取消")])),_:1}),(b(!0),I(ae,null,fe(c(k).downloadUrl,V=>(b(),T(L,{size:"small",key:V.origin,type:"primary",onClick:oh=>c(y)(V)},{default:d(()=>[M(E(V.origin)+"下载",1)]),_:2},1032,["onClick"]))),128))])]),default:d(()=>[x("div",null,E(c(k).desc),1)]),_:1},8,["modelValue","title"])],64)):(b(),T(ga,{key:1},{default:d(({Component:V})=>[g(ht,{"enter-active-class":"animate__animated animate__fadeIn "},{default:d(()=>[(b(),T(ot(V)))]),_:2},1024)]),_:1}))])}}}),nh=H(th,[["__scopeId","data-v-2a3ec981"]]),ah=Or(),pa=Dr(nh);pa.use(ah);pa.use(xe);pa.mount("#app");Np.setProductionErrorReport();export{Dd as $,m as A,ta as B,P as C,lh as D,hf as E,hd as F,zo as G,fs as H,Je as I,os as J,ss as K,C as L,_ as M,St as N,ch as O,gy as P,Rn as Q,Nu as R,Xt as S,Ad as T,ip as U,ih as V,qo as W,Oa as X,nl as Y,Ly as Z,H as _,Fe as a,Cy as a0,_y as a1,Bt as a2,Gf as a3,Ot as b,ce as c,Oe as d,Ln as e,Me as f,rh as g,Ur as h,O as i,Lt as j,Z as k,Yg as l,tt as m,jr as n,yd as o,We as p,xt as q,xe as r,uh as s,xy as t,nt as u,Ky as v,My as w,Zy as x,bd as y,cs as z};
