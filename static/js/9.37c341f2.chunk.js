(this["webpackJsonpifa-learning-app"]=this["webpackJsonpifa-learning-app"]||[]).push([[9],{305:function(e,t,r){"use strict";r(70),r(318),r(193),r(128)},307:function(e,t,r){"use strict";var n=r(6),a=r(69),o=r(66),l=r(16),i=r(1),c=r(63),u=r.n(c),s=r(112),d=r(592),f=r(84);function m(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function p(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function b(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return p(r.overflowY,t)||p(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function v(e,t,r,n,a,o,l,i){return o<e&&l>t||o>e&&l<t?0:o<=e&&i<=r||l>=t&&i>=r?o-e-n:l>t&&i<r||o<e&&i>r?l-t+a:0}var h=function(e,t){var r=window,n=t.scrollMode,a=t.block,o=t.inline,l=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!m(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],d=e;m(d)&&c(d);){if((d=d.parentElement)===u){s.push(d);break}null!=d&&d===document.body&&b(d)&&!b(document.documentElement)||null!=d&&b(d,i)&&s.push(d)}for(var f=r.visualViewport?r.visualViewport.width:innerWidth,p=r.visualViewport?r.visualViewport.height:innerHeight,h=window.scrollX||pageXOffset,O=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),j=g.height,y=g.width,w=g.top,E=g.right,C=g.bottom,x=g.left,F="start"===a||"nearest"===a?w:"end"===a?C:w+j/2,k="center"===o?x+y/2:"end"===o?E:x,M=[],N=0;N<s.length;N++){var I=s[N],P=I.getBoundingClientRect(),S=P.height,_=P.width,R=P.top,q=P.right,T=P.bottom,V=P.left;if("if-needed"===n&&w>=0&&x>=0&&C<=p&&E<=f&&w>=R&&C<=T&&x>=V&&E<=q)return M;var W=getComputedStyle(I),A=parseInt(W.borderLeftWidth,10),L=parseInt(W.borderTopWidth,10),H=parseInt(W.borderRightWidth,10),z=parseInt(W.borderBottomWidth,10),B=0,D=0,U="offsetWidth"in I?I.offsetWidth-I.clientWidth-A-H:0,Y="offsetHeight"in I?I.offsetHeight-I.clientHeight-L-z:0;if(u===I)B="start"===a?F:"end"===a?F-p:"nearest"===a?v(O,O+p,p,L,z,O+F,O+F+j,j):F-p/2,D="start"===o?k:"center"===o?k-f/2:"end"===o?k-f:v(h,h+f,f,A,H,h+k,h+k+y,y),B=Math.max(0,B+O),D=Math.max(0,D+h);else{B="start"===a?F-R-L:"end"===a?F-T+z+Y:"nearest"===a?v(R,T,S,L,z+Y,F,F+j,j):F-(R+S/2)+Y/2,D="start"===o?k-V-A:"center"===o?k-(V+_/2)+U/2:"end"===o?k-q+H+U:v(V,q,_,A,H+U,k,k+y,y);var K=I.scrollLeft,X=I.scrollTop;F+=X-(B=Math.max(0,Math.min(X+B,I.scrollHeight-S+Y))),k+=K-(D=Math.max(0,Math.min(K+D,I.scrollWidth-_+U)))}M.push({el:I,top:B,left:D})}return M};function O(e){return e===Object(e)&&0!==Object.keys(e).length}var g=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(O(t)&&"function"===typeof t.behavior)return t.behavior(r?h(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:O(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,a=e.top,o=e.left;n.scroll&&r?n.scroll({top:a,left:o,behavior:t}):(n.scrollTop=a,n.scrollLeft=o)}))}(h(e,n),n.behavior)}},j=["parentNode"];function y(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function w(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):j.indexOf(r)>=0?"".concat("form_item","_").concat(r):r}}function E(e){return y(e).join("_")}function C(e){var t=Object(s.g)(),r=Object(o.a)(t,1)[0],a=i.useRef({}),l=i.useMemo((function(){return null!==e&&void 0!==e?e:Object(n.a)(Object(n.a)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=E(e);t?a.current[r]=t:delete a.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=y(e),a=w(r,l.__INTERNAL__.name),o=a?document.getElementById(a):null;o&&g(o,Object(n.a)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=E(e);return a.current[t]}})}),[e,r]);return[l]}var x=r(100),F=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},k=function(e,t){var r,c=i.useContext(x.b),m=i.useContext(d.b),p=m.getPrefixCls,b=m.direction,v=m.form,h=e.prefixCls,O=e.className,g=void 0===O?"":O,j=e.size,y=void 0===j?c:j,w=e.form,E=e.colon,k=e.labelAlign,M=e.labelWrap,N=e.labelCol,I=e.wrapperCol,P=e.hideRequiredMark,S=e.layout,_=void 0===S?"horizontal":S,R=e.scrollToFirstError,q=e.requiredMark,T=e.onFinishFailed,V=e.name,W=F(e,["prefixCls","className","size","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),A=Object(i.useMemo)((function(){return void 0!==q?q:v&&void 0!==v.requiredMark?v.requiredMark:!P}),[P,q,v]),L=null!==E&&void 0!==E?E:null===v||void 0===v?void 0:v.colon,H=p("form",h),z=u()(H,(r={},Object(l.a)(r,"".concat(H,"-").concat(_),!0),Object(l.a)(r,"".concat(H,"-hide-required-mark"),!1===A),Object(l.a)(r,"".concat(H,"-rtl"),"rtl"===b),Object(l.a)(r,"".concat(H,"-").concat(y),y),r),g),B=C(w),D=Object(o.a)(B,1)[0],U=D.__INTERNAL__;U.name=V;var Y=Object(i.useMemo)((function(){return{name:V,labelAlign:k,labelCol:N,labelWrap:M,wrapperCol:I,vertical:"vertical"===_,colon:L,requiredMark:A,itemRef:U.itemRef}}),[V,k,N,I,_,L,A]);i.useImperativeHandle(t,(function(){return D}));return i.createElement(x.a,{size:y},i.createElement(f.a.Provider,{value:Y},i.createElement(s.f,Object(n.a)({id:V},W,{name:V,onFinishFailed:function(e){null===T||void 0===T||T(e);var t={block:"nearest"};R&&e.errorFields.length&&("object"===Object(a.a)(R)&&(t=R),D.scrollToField(e.errorFields[0].name,t))},form:D,className:z}))))},M=i.forwardRef(k),N=r(73),I=r(87),P=r(171),S=r(81),_=r(426),R=r(106),q=r(77),T=r(315),V=r(314),W=r(107),A=r(183),L=r(104),H=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var z=function(e){var t=e.prefixCls,r=e.label,c=e.htmlFor,s=e.labelCol,d=e.labelAlign,m=e.colon,p=e.required,b=e.requiredMark,v=e.tooltip,h=Object(W.b)("Form"),O=Object(o.a)(h,1)[0];return r?i.createElement(f.a.Consumer,{key:"label"},(function(e){var o,f,h=e.vertical,g=e.labelAlign,j=e.labelCol,y=e.labelWrap,w=e.colon,E=s||j||{},C=d||g,x="".concat(t,"-item-label"),F=u()(x,"left"===C&&"".concat(x,"-left"),E.className,Object(l.a)({},"".concat(x,"-wrap"),!!y)),k=r,M=!0===m||!1!==w&&!1!==m;M&&!h&&"string"===typeof r&&""!==r.trim()&&(k=r.replace(/[:|\uff1a]\s*$/,""));var N=function(e){return e?"object"!==Object(a.a)(e)||i.isValidElement(e)?{title:e}:e:null}(v);if(N){var I=N.icon,P=void 0===I?i.createElement(T.a,null):I,S=H(N,["icon"]),_=i.createElement(L.a,S,i.cloneElement(P,{className:"".concat(t,"-item-tooltip"),title:""}));k=i.createElement(i.Fragment,null,k,_)}"optional"!==b||p||(k=i.createElement(i.Fragment,null,k,i.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===O||void 0===O?void 0:O.optional)||(null===(f=A.a.Form)||void 0===f?void 0:f.optional))));var R=u()((o={},Object(l.a)(o,"".concat(t,"-item-required"),p),Object(l.a)(o,"".concat(t,"-item-required-mark-optional"),"optional"===b),Object(l.a)(o,"".concat(t,"-item-no-colon"),!M),o));return i.createElement(V.a,Object(n.a)({},E,{className:F}),i.createElement("label",{htmlFor:c,className:R,title:"string"===typeof r?r:""},k))})):null},B=r(110),D=r(103),U=[];function Y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(r,"-").concat(n),error:e,errorStatus:t}}function K(e){var t=e.help,r=e.helpStatus,a=e.errors,o=void 0===a?U:a,c=e.warnings,s=void 0===c?U:c,m=e.className,p=i.useContext(f.b).prefixCls,b=i.useContext(d.b).getPrefixCls,v="".concat(p,"-item-explain"),h=b(),O=i.useMemo((function(){return void 0!==t&&null!==t?[Y(t,r,"help")]:[].concat(Object(N.a)(o.map((function(e,t){return Y(e,"error","error",t)}))),Object(N.a)(s.map((function(e,t){return Y(e,"warning","warning",t)}))))}),[t,r,o,s]);return i.createElement(B.b,Object(n.a)({},D.a,{motionName:"".concat(h,"-show-help"),motionAppear:!1,motionEnter:!1,visible:!!O.length,onLeaveStart:function(e){return e.style.height="auto",{height:e.offsetHeight}}}),(function(e){var t=e.className,r=e.style;return i.createElement("div",{className:u()(v,t,m),style:r},i.createElement(B.a,Object(n.a)({keys:O},D.a,{motionName:"".concat(h,"-show-help-item"),component:!1}),(function(e){var t=e.key,r=e.error,n=e.errorStatus,a=e.className,o=e.style;return i.createElement("div",{key:t,role:"alert",className:u()(a,Object(l.a)({},"".concat(v,"-").concat(n),n)),style:o},r)})))}))}var X=function(e){var t=e.prefixCls,r=e.status,a=e.wrapperCol,o=e.children,l=e.errors,c=e.warnings,s=e._internalItemRender,d=e.extra,m=e.help,p="".concat(t,"-item"),b=i.useContext(f.a),v=a||b.wrapperCol||{},h=u()("".concat(p,"-control"),v.className),O=i.useMemo((function(){return Object(n.a)({},b)}),[b]);delete O.labelCol,delete O.wrapperCol;var g=i.createElement("div",{className:"".concat(p,"-control-input")},i.createElement("div",{className:"".concat(p,"-control-input-content")},o)),j=i.useMemo((function(){return{prefixCls:t,status:r}}),[t,r]),y=i.createElement(f.b.Provider,{value:j},i.createElement(K,{errors:l,warnings:c,help:m,helpStatus:r,className:"".concat(p,"-explain-connected")})),w=d?i.createElement("div",{className:"".concat(p,"-extra")},d):null,E=s&&"pro_table_render"===s.mark&&s.render?s.render(e,{input:g,errorList:y,extra:w}):i.createElement(i.Fragment,null,g,y,w);return i.createElement(f.a.Provider,{value:O},i.createElement(V.a,Object(n.a)({},v,{className:h}),E))},J=r(86),Q=r(89);function $(e){var t=i.useState(e),r=Object(o.a)(t,2),n=r[0],a=r[1];return i.useEffect((function(){var t=setTimeout((function(){a(e)}),e.length?0:10);return function(){clearTimeout(t)}}),[e]),n}var G=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},Z=(Object(R.a)("success","warning","error","validating",""),i.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));var ee=function(e){var t=e.name,r=e.noStyle,c=e.dependencies,m=e.prefixCls,p=e.style,b=e.className,v=e.shouldUpdate,h=e.hasFeedback,O=e.help,g=e.rules,j=e.validateStatus,E=e.children,C=e.required,x=e.label,F=e.messageVariables,k=e.trigger,M=void 0===k?"onChange":k,R=e.validateTrigger,T=e.hidden,V=G(e,["name","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),W=Object(i.useContext)(d.b).getPrefixCls,A=Object(i.useContext)(f.a),L=A.name,H=A.requiredMark,B="function"===typeof E,D=Object(i.useContext)(f.f),U=Object(i.useContext)(s.b).validateTrigger,Y=void 0!==R?R:U,K=function(e){return null===e&&Object(q.a)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),ee=W("form",m),te=i.useContext(s.e),re=i.useRef(),ne=function(e){var t=i.useState(e),r=Object(o.a)(t,2),n=r[0],a=r[1],l=Object(i.useRef)(null),c=Object(i.useRef)([]),u=Object(i.useRef)(!1);return i.useEffect((function(){return function(){u.current=!0,Q.a.cancel(l.current)}}),[]),[n,function(e){u.current||(null===l.current&&(c.current=[],l.current=Object(Q.a)((function(){l.current=null,a((function(e){var t=e;return c.current.forEach((function(e){t=e(t)})),t}))}))),c.current.push(e))}]}({}),ae=Object(o.a)(ne,2),oe=ae[0],le=ae[1],ie=Object(P.a)((function(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}})),ce=Object(o.a)(ie,2),ue=ce[0],se=ce[1],de=function(e,t){le((function(r){var a=Object(n.a)({},r),o=[].concat(Object(N.a)(e.name.slice(0,-1)),Object(N.a)(t)).join("__SPLIT__");return e.destroy?delete a[o]:a[o]=e,a}))},fe=i.useMemo((function(){var e=Object(N.a)(ue.errors),t=Object(N.a)(ue.warnings);return Object.values(oe).forEach((function(r){e.push.apply(e,Object(N.a)(r.errors||[])),t.push.apply(t,Object(N.a)(r.warnings||[]))})),[e,t]}),[oe,ue.errors,ue.warnings]),me=Object(o.a)(fe,2),pe=me[0],be=me[1],ve=$(pe),he=$(be),Oe=function(){var e=i.useContext(f.a).itemRef,t=i.useRef({});return function(r,n){var o=n&&"object"===Object(a.a)(n)&&n.ref,l=r.join("_");return t.current.name===l&&t.current.originRef===o||(t.current.name=l,t.current.originRef=o,t.current.ref=Object(I.a)(e(r),o)),t.current.ref}}(),ge="";void 0!==j?ge=j:(null===ue||void 0===ue?void 0:ue.validating)?ge="validating":ve.length?ge="error":he.length?ge="warning":(null===ue||void 0===ue?void 0:ue.touched)&&(ge="success");var je=Object(i.useMemo)((function(){return{status:ge,hasFeedback:h}}),[ge,h]);function ye(t,a,o){var c;if(r&&!T)return t;var s=(c={},Object(l.a)(c,"".concat(ee,"-item"),!0),Object(l.a)(c,"".concat(ee,"-item-with-help"),void 0!==O&&null!==O||ve.length||he.length),Object(l.a)(c,"".concat(b),!!b),Object(l.a)(c,"".concat(ee,"-item-has-feedback"),ge&&h),Object(l.a)(c,"".concat(ee,"-item-has-success"),"success"===ge),Object(l.a)(c,"".concat(ee,"-item-has-warning"),"warning"===ge),Object(l.a)(c,"".concat(ee,"-item-has-error"),"error"===ge),Object(l.a)(c,"".concat(ee,"-item-is-validating"),"validating"===ge),Object(l.a)(c,"".concat(ee,"-item-hidden"),T),c);return i.createElement(_.a,Object(n.a)({className:u()(s),style:p,key:"row"},Object(S.a)(V,["colon","extra","fieldKey","requiredMark","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelWrap","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),i.createElement(z,Object(n.a)({htmlFor:a,required:o,requiredMark:H},e,{prefixCls:ee})),i.createElement(X,Object(n.a)({},e,ue,{errors:ve,warnings:he,prefixCls:ee,status:ge,help:O}),i.createElement(f.f.Provider,{value:de},i.createElement(f.c.Provider,{value:je},t))))}if(!K&&!B&&!c)return ye(E);var we={};return"string"===typeof x?we.label=x:t&&(we.label=String(t)),F&&(we=Object(n.a)(Object(n.a)({},we),F)),i.createElement(s.a,Object(n.a)({},e,{messageVariables:we,trigger:M,validateTrigger:Y,onMetaChange:function(e){var t=null===te||void 0===te?void 0:te.getKey(e.name);if(se(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[]}:e,!0),r&&D){var n=e.name;if(e.destroy)n=re.current||n;else if(void 0!==t){var a=Object(o.a)(t,2),l=a[0],i=a[1];n=[l].concat(Object(N.a)(i)),re.current=n}D(e,n)}}}),(function(r,o,l){var u=y(t).length&&o?o.name:[],s=w(u,L),d=void 0!==C?C:!(!g||!g.some((function(e){if(e&&"object"===Object(a.a)(e)&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){var t=e(l);return t&&t.required&&!t.warningOnly}return!1}))),f=Object(n.a)({},r),m=null;if(Object(q.a)(!(v&&c),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(E)&&K)Object(q.a)(!1,"Form.Item","`children` is array of render props cannot have `name`."),m=E;else if(B&&(!v&&!c||K))Object(q.a)(!(!v&&!c),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),Object(q.a)(!K,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!c||B||K)if(Object(J.b)(E)){Object(q.a)(void 0===E.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var p=Object(n.a)(Object(n.a)({},E.props),f);p.id||(p.id=s),Object(I.c)(E)&&(p.ref=Oe(u,E)),new Set([].concat(Object(N.a)(y(M)),Object(N.a)(y(Y)))).forEach((function(e){p[e]=function(){for(var t,r,n,a,o,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(n=f[e])||void 0===n||(t=n).call.apply(t,[f].concat(i)),null===(o=(a=E.props)[e])||void 0===o||(r=o).call.apply(r,[a].concat(i))}})),m=i.createElement(Z,{value:f[e.valuePropName||"value"],update:E},Object(J.a)(E,p))}else B&&(v||c)&&!K?m=E(l):(Object(q.a)(!u.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),m=E);else Object(q.a)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return ye(m,s,d)}))},te=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},re=function(e){var t=e.prefixCls,r=e.children,a=te(e,["prefixCls","children"]);Object(q.a)(!!a.name,"Form.List","Miss `name` prop.");var o=(0,i.useContext(d.b).getPrefixCls)("form",t),l=i.useMemo((function(){return{prefixCls:o,status:"error"}}),[o]);return i.createElement(s.d,a,(function(e,t,a){return i.createElement(f.b.Provider,{value:l},r(e.map((function(e){return Object(n.a)(Object(n.a)({},e),{fieldKey:e.key})})),t,{errors:a.errors,warnings:a.warnings}))}))},ne=M;ne.Item=ee,ne.List=re,ne.ErrorList=K,ne.useForm=C,ne.Provider=f.d,ne.create=function(){Object(q.a)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};t.a=ne},315:function(e,t,r){"use strict";var n=r(13),a=r(1),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},l=r(68),i=function(e,t){return a.createElement(l.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:o}))};i.displayName="QuestionCircleOutlined";t.a=a.forwardRef(i)},318:function(e,t,r){}}]);