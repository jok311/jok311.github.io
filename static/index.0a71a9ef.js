let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{q as a,s as t,u as s,v as r,x as n,y as o,z as i,A as l,B as c,r as d,C as u,D as p,E as f,G as h,H as v,I as y,J as g,K as m,L as w,M as S,t as b,N as R,O as T,F as E,P as O,S as x,Q as A,R as C,U as z,V as j,W as V,X as D,Y as P,c as M,a as N,Z as _,_ as k,$ as H,a0 as L,e as I,b as B,a1 as U,d as F,a2 as K,a3 as G,a4 as Y,j as W,a5 as q,i as J,a6 as Q,n as X,a7 as $,a8 as Z,a9 as ee,aa as ae,ab as te,ac as se,ad as re,ae as ne,af as oe,ag as ie,ah as le,ai as ce,o as de,h as ue,aj as pe,p as fe,ak as he,al as ve,g as ye,am as ge,f as me,an as we,ao as Se,ap as be,aq as Re,ar as Te,as as Ee,at as Oe,au as xe,av as Ae,aw as Ce,ax as ze,ay as je,az as Ve,aA as De,l as Pe,aB as Me,m as Ne,aC as _e,w as ke,aD as He,T as Le,aE as Ie,aF as Be,aG as Ue,aH as Fe,aI as Ke,aJ as Ge,aK as Ye,aL as We,aM as qe,aN as Je,aO as Qe,aP as Xe,aQ as $e,aR as Ze,aS as ea,k as aa,aT as ta}from"./index.3c881c30.js";var sa=Object.freeze({__proto__:null,customRef:a,isProxy:t,isReactive:s,isReadonly:r,isRef:n,markRaw:o,proxyRefs:i,reactive:l,readonly:c,ref:d,shallowReactive:u,shallowReadonly:p,shallowRef:f,toRaw:h,toRef:v,toRefs:y,triggerRef:g,unref:m,camelize:w,capitalize:S,toDisplayString:b,BaseTransition:R,Comment:T,Fragment:E,KeepAlive:O,Static:x,Suspense:A,Teleport:C,Text:z,callWithAsyncErrorHandling:j,callWithErrorHandling:V,cloneVNode:D,computed:P,createBlock:M,createCommentVNode:N,createHydrationRenderer:_,createRenderer:k,createSlots:H,createStaticVNode:L,createTextVNode:I,createVNode:B,defineAsyncComponent:U,defineComponent:F,get devtools(){return K},getCurrentInstance:G,getTransitionRawChildren:Y,h:W,handleError:q,inject:J,isVNode:Q,mergeProps:X,nextTick:$,onActivated:Z,onBeforeMount:ee,onBeforeUnmount:ae,onBeforeUpdate:te,onDeactivated:se,onErrorCaptured:re,onMounted:ne,onRenderTracked:oe,onRenderTriggered:ie,onUnmounted:le,onUpdated:ce,openBlock:de,popScopeId:ue,provide:pe,pushScopeId:fe,queuePostFlushCb:he,registerRuntimeCompiler:ve,renderList:ye,renderSlot:ge,resolveComponent:me,resolveDirective:we,resolveDynamicComponent:Se,resolveTransitionHooks:be,setBlockTracking:Re,setDevtoolsHook:Te,setTransitionHooks:Ee,ssrContextKey:Oe,ssrUtils:xe,toHandlers:Ae,transformVNodeArgs:Ce,useSSRContext:ze,useTransitionState:je,version:Ve,warn:De,watch:Pe,watchEffect:Me,withCtx:Ne,withDirectives:_e,withScopeId:ke,Transition:He,TransitionGroup:Le,createApp:Ie,createSSRApp:Be,hydrate:Ue,render:Fe,useCssModule:Ke,useCssVars:Ge,vModelCheckbox:Ye,vModelDynamic:We,vModelRadio:qe,vModelSelect:Je,vModelText:Qe,vShow:Xe,withKeys:$e,withModifiers:Ze,Vue:ea,isVue2:!1,isVue3:!0}),ra={name:"app",components:{VueResizeSensor:aa((function(e,a){e.exports=function(e){function a(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function t(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function s(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,s=new Array(a);t<a;t++)s[t]=e[t];return s}a(n={},1,"TEXT"),a(n,2,"CLASS"),a(n,4,"STYLE"),a(n,8,"PROPS"),a(n,16,"FULL_PROPS"),a(n,32,"HYDRATE_EVENTS"),a(n,64,"STABLE_FRAGMENT"),a(n,128,"KEYED_FRAGMENT"),a(n,256,"UNKEYED_FRAGMENT"),a(n,1024,"DYNAMIC_SLOTS"),a(n,512,"NEED_PATCH"),a(n,-1,"HOISTED"),a(n,-2,"BAIL");var n,o=function(){},i=e.defineComponent({name:"VueResizeSensor",props:{tag:{type:String,default:"div"}},setup:function(a,t){var n=t.emit,i=t.refs,l=t.slots,c=e.ref(0),d=e.ref(0);e.watch([c,d],(function(e){var a=function(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],s=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(s=(o=i.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(e){r=!0,n=e}finally{try{s||null==i.return||i.return()}finally{if(r)throw n}}return t}}(e,a)||function(e,a){if(e){if("string"==typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),t=a[0],s=a[1];n("resize",{width:t,height:s,w:t,h:s})}));var u=e.ref(null),p=function(){var a=e.isVue2?i.el:u.value;a&&(c.value=a.offsetWidth,d.value=a.offsetHeight)};e.onActivated(p),e.onMounted(p);var f=function(e){e.target.contentWindow.addEventListener("resize",p)};return function(){var t=a.tag,r=c.value,n=d.value,i=s({default:o},l);return e.h(t,s({style:{position:"relative"}},e.isVue2?{ref:"el"}:{ref:u}),[e.h("iframe",s({style:{border:"none",height:"100%",opacity:0,position:"absolute",width:"100%"}},e.isVue2?{on:{load:f}}:{onLoad:f})),i.default({width:r,height:n,w:r,h:n})])}}});return e.isVue2&&globalThis.window&&e.Vue.component(i.name,i),i}(sa)}))},data:()=>({width:0,height:0,top:0,left:0}),methods:{onResize(e){this.width=e.width,this.height=e.height,this.top=e.top,this.left=e.left}}};const na={id:"app"},oa=B("div",{style:{height:"72px"}},"resize",-1),ia=B("div",{style:{height:"72px"}},"resize",-1),la=B("div",{style:{height:"72px"}},"resize",-1),ca=B("div",{style:{height:"72px"}},"resize",-1),da=B("div",{style:{height:"72px"}},"resize",-1),ua=B("div",{style:{height:"72px"}},"resize",-1),pa=B("div",{style:{height:"72px"}},"resize",-1),fa=B("div",{style:{height:"72px"}},"resize",-1);ra.render=function(e,a,t,s,r,n){const o=me("vue-resize-sensor");return de(),M("div",na,[B("div",null,[B(o,{onResize:n.onResize},{default:Ne(()=>[oa,ia,la,ca,da,ua,pa,fa]),_:1},8,["onResize"])])])},ra.__file="src/views/pages/vue-drag-resize/index.vue";export default ra;
