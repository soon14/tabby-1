(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8228],{68172:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var r=n(36164),a=n(38785);function s(e){let{children:t,fallback:n=null}=e;return(0,a.U)()?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:n})}},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return f},wt:function(){return d},xc:function(){return p},yo:function(){return m}});var r=n(36164),a=n(3546),s=n(74630),o=n(36327),i=n(80605),l=n(1544),c=n(81565);let d="3.5rem",u=a.createContext({}),m=e=>{let{children:t}=e,n=(0,i.UA)(),[o,l]=a.useState(!1);return a.useEffect(()=>{let e=window.self!==window.top;e||(0,s.Z)(n)||l(n)},[n]),(0,r.jsx)(u.Provider,{value:{isShowDemoBanner:o,setIsShowDemoBanner:l},children:t})};function f(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=a.useContext(u);return[e,t]}function p(){let[e,t]=f(),{data:n}=(0,o.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:d}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(c.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(c.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(c.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(c.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},83171:function(e,t,n){"use strict";n.d(t,{p:function(){return l},t:function(){return c}});var r=n(36164);n(3546);var a=n(68035),s=n(18500),o=n(1544),i=n(81565);function l(e){let{kind:t,label:n,className:s}=e;return(0,r.jsxs)(a.T5,{as:"span",className:(0,o.cn)("source-mention rounded-sm px-1",s),children:[(0,r.jsx)(d,{kind:t,className:"self-center"}),(0,r.jsx)("span",{children:n})]})}function c(e){let{kind:t,label:n,id:a}=e.node.attrs;return(0,r.jsx)(l,{kind:t,label:n,id:a})}function d(e){let{kind:t,...n}=e;switch(t){case s.DU.Doc:return(0,r.jsx)(i.IconFileText,{...n});case s.DU.Web:return(0,r.jsx)(i.IconGlobe,{...n});case s.DU.Git:return(0,r.jsx)(i.IconCode,{...n});case s.DU.Github:return(0,r.jsx)(i.IconGitHub,{...n});case s.DU.Gitlab:return(0,r.jsx)(i.IconGitLab,{...n});default:return null}}},95027:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(36164),a=n(3546),s=n(9010),o=n(1544),i=n(29);n(15812);var l=n(46836),c=n(75866),d=n(97216),u=n(48497),m=n(31408),f=n(68035),p=n(16784),x=n(10345),h=n(83171);let b=x.ZP.extend({addNodeView:()=>(0,f.fW)(h.t),parseHTML:()=>[{tag:"mention"}],renderHTML(e){let{HTMLAttributes:t}=e;return["mention",(0,m.P1)(t)]},addAttributes:()=>({id:{default:null,parseHTML:e=>e.getAttribute("data-id"),renderHTML:e=>e.id?{"data-id":e.id}:{}},label:{default:null,parseHTML:e=>e.getAttribute("data-label"),renderHTML:e=>e.label?{"data-label":e.label}:{}},kind:{default:null,parseHTML:e=>e.getAttribute("data-kind"),renderHTML:e=>e.kind?{"data-kind":e.kind}:{}}})});var g=n(31022),v=n(45238),y=n(18500),j=n(81565);let N=[{type:"category",label:"Codebase",category:"code"},{type:"category",label:"Document",category:"doc"}],w=(0,a.forwardRef)((e,t)=>{let{query:n,command:s,mentions:i}=e,{list:l,pending:c}=(0,a.useContext)(T),d=(0,a.useMemo)(()=>(null==i?void 0:i.findIndex(e=>(0,o.wO)(e.kind)))!==-1,[i]),u=(0,a.useMemo)(()=>null!=l&&!!l.length&&l.some(e=>(0,o.wO)(e.kind)),[l]),m=(0,a.useMemo)(()=>null!=l&&!!l.length&&l.some(e=>(0,o._q)(e.kind)),[l]),[f,p]=(0,a.useState)(0),[x,h]=(0,a.useState)(),b=(0,a.useMemo)(()=>{if(!n&&!x){let e=d?N.filter(e=>"code"!==e.category):N;return u||(e=e.filter(e=>"code"!==e.category)),m||(e=e.filter(e=>"doc"!==e.category)),e}if(!(null==l?void 0:l.length))return[];let e=l.filter(e=>(0,o._q)(e.kind)).map(e=>({type:"source",category:"doc",id:e.sourceId,label:e.displayName,data:e})),t=l.filter(e=>(0,o.wO)(e.kind)).map(e=>({type:"source",category:"code",id:e.sourceId,label:e.displayName,data:e}));return x?"doc"===x?e:d?[]:t:d?e:[...e,...t]},[x,l,n,d]),g=(0,a.useMemo)(()=>{if(!n)return b;let e=(0,v.go)(n,b,{key:e=>e.label});return e.map(e=>e.obj)},[n,b]),y=()=>{p((f+g.length-1)%g.length)},w=()=>{p((f+1)%g.length)},I=e=>{let t=g[e];t&&("category"===t.type?h(t.category):s({id:t.data.sourceId,label:t.label,kind:t.data.kind}))},C=()=>{I(f)};return(0,a.useEffect)(()=>p(0),[b]),(0,a.useImperativeHandle)(t,()=>({onKeyDown:e=>{let{event:t}=e;return"ArrowUp"===t.key?(y(),!0):"ArrowDown"===t.key?(w(),!0):"Enter"===t.key&&(C(),!0)}})),(0,r.jsx)("div",{className:"dropdown-menu max-h-[30vh] min-w-[20rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow animate-in",children:c?(0,r.jsx)("div",{className:"px-2 py-1.5",children:(0,r.jsx)(j.IconSpinner,{})}):g.length?g.map((e,t)=>(0,r.jsxs)("div",{className:(0,o.cn)("flex cursor-pointer gap-1 rounded-md px-2 py-1.5 text-sm",{"bg-accent text-accent-foreground":t===f}),onClick:()=>I(t),onMouseEnter:()=>p(t),title:e.label,children:[(0,r.jsx)("span",{className:"flex h-5 shrink-0 items-center",children:(0,r.jsx)(k,{option:e})}),(0,r.jsx)("span",{className:"flex-1",children:e.label}),"category"===e.type&&(0,r.jsx)("span",{className:"h-5 shrink-0 items-center",children:(0,r.jsx)(j.IconChevronRight,{})})]},t)):(0,r.jsx)("div",{className:"px-2 py-1.5",children:"No results"})})});function k(e){let{option:t}=e;if("category"===t.type)return"code"===t.category?(0,r.jsx)(j.IconCode,{}):(0,r.jsx)(j.IconFileText,{});if("source"===t.type)switch(t.data.kind){case y.DU.Doc:return(0,r.jsx)(j.IconFileText,{});case y.DU.Web:return(0,r.jsx)(j.IconGlobe,{});case y.DU.Git:return(0,r.jsx)(j.IconCode,{});case y.DU.Github:return(0,r.jsx)(j.IconGitHub,{});case y.DU.Gitlab:return(0,r.jsx)(j.IconGitLab,{});default:return null}}w.displayName="MetionList",n(44750);let I=e=>{let t=e.getJSON(),n=[],r=0,a=e=>{var t,s;"text"===e.type?r+=(null==e?void 0:null===(t=e.text)||void 0===t?void 0:t.length)||0:"mention"===e.type&&(null==e?void 0:null===(s=e.attrs)||void 0===s?void 0:s.id)&&n.push({id:e.attrs.id,label:e.attrs.label,kind:e.attrs.kind}),e.content&&e.content.forEach(a)};return a(t),n};var C=e=>{let{placement:t}=e;return{render:()=>{let e,n;return{onStart:r=>{let a=I(r.editor);e=new f.M_(w,{props:{...r,mentions:a},editor:r.editor}),r.clientRect&&(n=(0,g.ZP)("body",{getReferenceClientRect:r.clientRect,appendTo:()=>document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:t||"bottom-start",animation:"shift-away",maxWidth:"400px"}))},onUpdate(t){e.updateProps(t),t.clientRect&&n[0].setProps({getReferenceClientRect:t.clientRect})},onKeyDown(t){var r,a;return"Escape"===t.event.key?(n[0].hide(),!0):null!==(a=null===(r=e.ref)||void 0===r?void 0:r.onKeyDown(t))&&void 0!==a&&a},onExit(){n[0].destroy(),e.destroy()}}}}};let _=e=>m.hj.create({addKeyboardShortcuts(){return{Enter:t=>{let{editor:n}=t;return e(n),!0},"Shift-Enter":()=>this.editor.commands.first(e=>{let{commands:t}=e;return[()=>t.newlineInCode(),()=>t.createParagraphNear(),()=>t.liftEmptyBlock(),()=>t.splitBlock()]})}}}),T=a.createContext({}),D=(0,a.forwardRef)((e,t)=>{let{editable:n,content:s,contextInfo:i,fetchingContextInfo:m,submitting:x,onSubmit:h,placeholder:g,onBlur:v,onFocus:y,onUpdate:j,autoFocus:N,className:w,editorClassName:k,enabledMarkdown:I,placement:D}=e,S=(0,p.d)(e=>{if(x)return;let t=e.getText();t&&(null==h||h(e))}),E=(0,f.jE)({immediatelyRender:!1,extensions:[l.Z,c.Z,u.Z,d.Z.configure({placeholder:g||"Ask anything..."}),_(e=>{S.current(e)}),b.configure({HTMLAttributes:{class:"mention"},renderText(e){let{node:t}=e;return"[[source:".concat(t.attrs.id,"]]")},suggestion:C({placement:"bottom"===D?"top-start":"bottom-start"})})],editorProps:{attributes:{class:(0,o.cn)("max-h-38 prose min-h-[3.5rem] max-w-none font-sans dark:prose-invert focus:outline-none prose-p:my-0",k)}},content:s,editable:n,onBlur(e){null==v||v(e)},onFocus(e){null==y||y(e)},onUpdate(e){null==j||j(e)}});return((0,a.useImperativeHandle)(t,()=>({editor:E})),(0,a.useLayoutEffect)(()=>{E&&N&&E.commands.focus()},[E]),E)?(0,r.jsx)(T.Provider,{value:{list:null==i?void 0:i.sources,pending:!!m},children:(0,r.jsx)("div",{className:(0,o.cn)("text-area-autosize max-h-36 overflow-y-auto pr-1",w),children:(0,r.jsx)(f.kg,{editor:E})})}):null});D.displayName="PromptEditor";var S=n(31458);function E(e){let{onSearch:t,className:n,placeholder:l,showBetaBadge:c,isLoading:d,autoFocus:u,loadingWithSpinning:m,cleanAfterSearch:f=!0,isFollowup:p,contextInfo:x,fetchingContextInfo:h}=e,[b,g]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!1),[N,w]=(0,a.useState)(""),{theme:k}=(0,s.X)(),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{g(!0)},[]);let C=e=>{if(!e)return;let n=e.getText(),r=(0,o.b)(n,null==x?void 0:x.sources),a=(0,o.G8)(r);if(t(n,a),f){var s,i;null===(i=I.current)||void 0===i||null===(s=i.editor)||void 0===s||s.chain().clearContent().focus().run()}},_=!p;return(0,r.jsxs)("div",{className:(0,o.cn)("relative overflow-hidden rounded-lg border border-muted-foreground bg-background px-4 transition-all hover:border-muted-foreground/60",{"flex-col gap-1 w-full":_,"flex w-full items-center ":!_,"!border-zinc-400":v&&p&&"dark"!==k,"!border-primary":v&&(!p||"dark"===k),"py-0":c,"border-2 dark:border border-zinc-400 hover:border-zinc-400/60 dark:border-muted-foreground dark:hover:border-muted-foreground/60":p},n),onClick:()=>{if(p){var e,t;null===(t=I.current)||void 0===t||null===(e=t.editor)||void 0===e||e.commands.focus()}},children:[c&&(0,r.jsxs)(i.u,{delayDuration:0,children:[(0,r.jsx)(i.aJ,{asChild:!0,children:(0,r.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===k?"#333":"#e8e1d3"},children:"Beta"})}),(0,r.jsx)(i._v,{sideOffset:-8,className:"max-w-md",children:(0,r.jsx)("p",{children:"Please note that the answer engine is still in its early stages, and certain functionalities, such as finding the correct code context and the quality of summarizations, still have room for improvement. If you encounter an issue and believe it can be enhanced, consider sharing it in our Slack community!"})})]}),(0,r.jsx)(D,{editable:!0,contextInfo:x,fetchingContextInfo:h,onSubmit:C,placeholder:l||"Ask anything...",autoFocus:u,onFocus:()=>y(!0),onBlur:()=>y(!1),onUpdate:e=>{let{editor:t}=e;return w(t.getText())},ref:I,placement:p?"bottom":"top",className:(0,o.cn)("text-area-autosize mr-1 flex-1 resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"!h-[48px]":!b,"pt-4":!c,"pt-5":c,"pb-4":!_&&!c,"pb-5":!_&&c}),editorClassName:p?"min-h-[1.75rem]":"min-h-[3.5rem]"}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between gap-2",{"pb-2":_}),children:[(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)("div",{className:(0,o.cn)((0,S.d)({variant:"ghost"}),"-ml-2 cursor-pointer px-2",{"rounded-full":_,"rounded-md":!_},n),onClick:()=>{var e;let t=null===(e=I.current)||void 0===e?void 0:e.editor;if(t){let{state:e}=t,{selection:n}=e,{from:r}=n,a=e.doc.textBetween(r-1,r," "),s=1===r||"\n"===e.doc.textBetween(r-1,r,"\n");s||" "===a?t.chain().focus().insertContent("@").run():t.chain().focus().insertContent(" @").run()}},children:(0,r.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden",children:[(0,r.jsx)(j.IconAtSign,{className:(0,o.cn)("shrink-0 text-foreground/60")}),_&&(0,r.jsx)("span",{className:(0,o.cn)("flex-1 truncate text-foreground/60"),children:"Add Context"})]})})}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":N.length>0,"!bg-muted !text-primary !cursor-default":d||0===N.length,"mr-1.5":!c,"h-6 w-6":!p}),onClick:()=>{var e;return C(null===(e=I.current)||void 0===e?void 0:e.editor)},children:[m&&d&&(0,r.jsx)(j.IconSpinner,{className:"h-3.5 w-3.5"}),(!m||!d)&&(0,r.jsx)(j.IconArrowRight,{className:"h-3.5 w-3.5"})]})]})]})}},63743:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(36164),a=n(3546),s=n(9010),o=n(31458),i=n(81565);function l(e){let{className:t}=e,{setTheme:n,theme:l}=(0,s.X)(),[c,d]=a.useTransition();return(0,r.jsxs)(o.z,{variant:"ghost",size:"icon",onClick:()=>{d(()=>{n("light"===l?"dark":"light")})},className:t,children:["dark"===l?(0,r.jsx)(i.IconMoon,{className:"transition-all"}):(0,r.jsx)(i.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},62202:function(e,t,n){"use strict";n.d(t,{$F:function(){return l},AW:function(){return d},Ju:function(){return m},VD:function(){return f},Xi:function(){return u},h_:function(){return i}});var r=n(36164),a=n(3546),s=n(19148),o=n(1544);let i=s.fC,l=s.xz;s.ZA,s.Uv,s.Tr,s.Ee;let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...a})});c.displayName=s.tu.displayName;let d=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...i}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})})});d.displayName=s.VY.displayName;let u=a.forwardRef((e,t)=>{let{className:n,inset:a,...i}=e;return(0,r.jsx)(s.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...i})});u.displayName=s.ck.displayName;let m=a.forwardRef((e,t)=>{let{className:n,inset:a,...i}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",n),...i})});m.displayName=s.__.displayName;let f=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});f.displayName=s.Z0.displayName},52569:function(e,t,n){"use strict";n.d(t,{Y:function(){return v},n:function(){return y}});var r=n(36164),a=n(3546),s=n(87782),o=n(21454),i=n(36327),l=n(98454),c=n(3765),d=n(1544),u=n(66612);let m=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(u.fC,{ref:t,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...a})});m.displayName=u.fC.displayName;let f=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(u.Ee,{ref:t,className:(0,d.cn)("aspect-square h-full w-full",n),...a})});f.displayName=u.Ee.displayName;let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(u.NY,{ref:t,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...a})});p.displayName=u.NY.displayName;var x=n(3448),h=n(30410).lW;let b="not_found",g=!0;function v(e){var t,n,o,u;let{className:v,fallback:y}=e,[{data:j}]=(0,l.P)(),N=null==j?void 0:j.me.id,w=N&&"/avatar/".concat(j.me.id)||null,{data:k,isLoading:I,error:C}=(0,i.Z)(w,e=>{if(g)return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=h.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(b)}})}),_=a.useMemo(()=>{var e;if(null==j?void 0:null===(e=j.me)||void 0===e?void 0:e.email)return(0,s.B)(j.me.email)},[null==j?void 0:null===(t=j.me)||void 0===t?void 0:t.email]);return I?(0,r.jsx)(x.O,{className:(0,d.cn)("h-16 w-16 rounded-full",v)}):((null==C?void 0:C.message)===b&&(g=!1),k||_||!y)?!k&&_?(0,r.jsx)(s.Z,{className:(0,d.cn)("h-16 w-16",v),..._}):(0,r.jsxs)(m,{className:(0,d.cn)("h-16 w-16",v),children:[(0,r.jsx)(f,{src:k,alt:null==j?void 0:null===(n=j.me)||void 0===n?void 0:n.email,className:"object-cover"}),(0,r.jsx)(p,{children:null==j?void 0:null===(u=j.me)||void 0===u?void 0:null===(o=u.email)||void 0===o?void 0:o.substring(0,2)})]}):y}let y=e=>{g=!0,(0,o.JG)("/avatar/".concat(e))}},7449:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(36164),a=n(3546),s=n(11978),o=n(98454),i=n(80605),l=n(91302),c=n(62202),d=n(81565);function u(e){let{children:t,showHome:n=!0,showSetting:u=!1}=e,m=(0,s.useRouter)(),f=(0,l.QJ)(),[{data:p}]=(0,o.P)(),x=null==p?void 0:p.me;(0,i.xG)();let[h,b]=a.useState(!1),g=async e=>{e.preventDefault(),b(!0),await f(),b(!1)};if(x)return(0,r.jsxs)(c.h_,{children:[(0,r.jsx)(c.$F,{children:t}),(0,r.jsxs)(c.AW,{collisionPadding:{right:16},children:[x.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ju,{className:"pb-0.5",children:x.name}),(0,r.jsx)(c.Ju,{className:"pb-1 pt-0 text-sm font-normal text-muted-foreground",children:x.email})]}),!x.name&&(0,r.jsx)(c.Ju,{children:x.email}),(0,r.jsx)(c.VD,{}),n&&(0,r.jsxs)(c.Xi,{onClick:()=>m.push("/"),className:"cursor-pointer",children:[(0,r.jsx)(d.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),u&&(0,r.jsxs)(c.Xi,{onClick:()=>m.push("/profile"),className:"cursor-pointer",children:[(0,r.jsx)(d.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(c.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,r.jsx)(d.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(c.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,r.jsx)(d.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,r.jsx)(c.VD,{}),(0,r.jsxs)(c.Xi,{disabled:h,onClick:g,className:"cursor-pointer",children:[(0,r.jsx)(d.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),h&&(0,r.jsx)(d.IconSpinner,{className:"ml-1"})]})]})]})}},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return s},L8:function(){return a},o0:function(){return r}});let r="name@yourcompany.com",a=20,s={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"}},9010:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(28242);function a(){let{theme:e,systemTheme:t,setTheme:n}=(0,r.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},38785:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(3546);let a=!0;function s(){let[e,t]=r.useState(()=>!a);return r.useEffect(function(){a=!1,t(!0)},[]),e}},15812:function(){}}]);