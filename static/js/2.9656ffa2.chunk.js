(this["webpackJsonpifa-learning-app"]=this["webpackJsonpifa-learning-app"]||[]).push([[2],{105:function(e,t,n){"use strict";var r=n(6),c=n(1),a=n(96),o=(n(85),n(13)),i=n(87),u=n(363),s=n(458),f=new Map;var l=new s.a((function(e){e.forEach((function(e){var t,n=e.target;null===(t=f.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));var d=n(75),O=n(76),E=n(78),b=n(79),p=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(c.Component),v=c.createContext(null);function h(e){var t=e.children,n=e.disabled,r=c.useRef(null),a=c.useRef(null),s=c.useContext(v),d="function"===typeof t,O=d?t(r):t,E=c.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!d&&c.isValidElement(O)&&Object(i.c)(O),h=b?O.ref:null,m=c.useMemo((function(){return Object(i.a)(h,r)}),[h,r]),N=c.useRef(e);N.current=e;var j=c.useCallback((function(e){var t=N.current,n=t.onResize,r=t.data,c=e.getBoundingClientRect(),a=c.width,i=c.height,u=e.offsetWidth,f=e.offsetHeight,l=Math.floor(a),d=Math.floor(i);if(E.current.width!==l||E.current.height!==d||E.current.offsetWidth!==u||E.current.offsetHeight!==f){var O={width:l,height:d,offsetWidth:u,offsetHeight:f};E.current=O;var b=u===Math.round(a)?a:u,p=f===Math.round(i)?i:f,v=Object(o.a)(Object(o.a)({},O),{},{offsetWidth:b,offsetHeight:p});null===s||void 0===s||s(v,e,r),n&&Promise.resolve().then((function(){n(v,e)}))}}),[]);return c.useEffect((function(){var e,t,c=Object(u.a)(r.current)||Object(u.a)(a.current);return c&&!n&&(e=c,t=j,f.has(e)||(f.set(e,new Set),l.observe(e)),f.get(e).add(t)),function(){return function(e,t){f.has(e)&&(f.get(e).delete(t),f.get(e).size||(l.unobserve(e),f.delete(e)))}(c,j)}}),[r.current,n]),c.createElement(p,{ref:a},b?c.cloneElement(O,{ref:m}):O)}function m(e){var t=e.children;return("function"===typeof t?[t]:Object(a.a)(t)).map((function(t,n){var a=(null===t||void 0===t?void 0:t.key)||"".concat("rc-observer-key","-").concat(n);return c.createElement(h,Object(r.a)({},e,{key:a}),t)}))}m.Collection=function(e){var t=e.children,n=e.onBatchResize,r=c.useRef(0),a=c.useRef([]),o=c.useContext(v),i=c.useCallback((function(e,t,c){r.current+=1;var i=r.current;a.current.push({size:e,element:t,data:c}),Promise.resolve().then((function(){i===r.current&&(null===n||void 0===n||n(a.current),a.current=[])})),null===o||void 0===o||o(e,t,c)}),[n,o]);return c.createElement(v.Provider,{value:i},t)};t.a=m},1179:function(e,t,n){"use strict";var r=n(1),c=Object(r.createContext)({});t.a=c},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(16),c=n(1),a=n.n(c),o=n(196),i=n(310),u=n(126),s=n(312),f=n(63),l=n.n(f),d=n(106),O=(Object(d.a)("warning","error",""),{success:o.a,warning:i.a,error:u.a,validating:s.a}),E=function(e,t){var n=t&&O[t];return n?a.a.createElement("span",{className:"".concat(e,"-feedback-icon")},a.a.createElement(n,null)):null};function b(e,t,n){var c;return l()((c={},Object(r.a)(c,"".concat(e,"-status-success"),"success"===t),Object(r.a)(c,"".concat(e,"-status-warning"),"warning"===t),Object(r.a)(c,"".concat(e,"-status-error"),"error"===t),Object(r.a)(c,"".concat(e,"-status-validating"),"validating"===t),Object(r.a)(c,"".concat(e,"-has-feedback"),n),c))}var p=function(e,t){return t||e}},1342:function(e,t,n){},136:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(16),c=n(6),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,u=-1,s={},f={matchHandlers:{},dispatch:function(e){return s=e,i.forEach((function(e){return e(s)})),i.size>=1},subscribe:function(e){return i.size||this.register(),u+=1,i.set(u,e),e(s),u},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),i.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],a=function(n){var a=n.matches;e.dispatch(Object(c.a)(Object(c.a)({},s),Object(r.a)({},t,a)))},i=window.matchMedia(n);i.addListener(a),e.matchHandlers[n]={mql:i,listener:a},a(i)}))}};t.a=f},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r,c=n(92),a=(n(285),function(){return Object(c.a)()&&window.document.documentElement}),o=function(){if(!a())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},193:function(e,t,n){"use strict";n(70),n(1342)},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(92),c=function(e){if(Object(r.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function a(e,t){return Array.isArray(e)||void 0===t?c(e):function(e,t){if(!c(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r}(e,t)}},314:function(e,t,n){"use strict";var r=n(16),c=n(6),a=n(69),o=n(1),i=n(63),u=n.n(i),s=n(1179),f=n(592),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var d=["xs","sm","md","lg","xl","xxl"],O=o.forwardRef((function(e,t){var n,i=o.useContext(f.b),O=i.getPrefixCls,E=i.direction,b=o.useContext(s.a),p=b.gutter,v=b.wrap,h=b.supportFlexGap,m=e.prefixCls,N=e.span,j=e.order,C=e.offset,y=e.push,g=e.pull,M=e.className,A=e.children,S=e.flex,x=e.style,R=l(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),_=O("col",m),T={};d.forEach((function(t){var n,o={},i=e[t];"number"===typeof i?o.span=i:"object"===Object(a.a)(i)&&(o=i||{}),delete R[t],T=Object(c.a)(Object(c.a)({},T),(n={},Object(r.a)(n,"".concat(_,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(r.a)(n,"".concat(_,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(r.a)(n,"".concat(_,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(r.a)(n,"".concat(_,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(r.a)(n,"".concat(_,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(r.a)(n,"".concat(_,"-rtl"),"rtl"===E),n))}));var U=u()(_,(n={},Object(r.a)(n,"".concat(_,"-").concat(N),void 0!==N),Object(r.a)(n,"".concat(_,"-order-").concat(j),j),Object(r.a)(n,"".concat(_,"-offset-").concat(C),C),Object(r.a)(n,"".concat(_,"-push-").concat(y),y),Object(r.a)(n,"".concat(_,"-pull-").concat(g),g),n),M,T),w={};if(p&&p[0]>0){var I=p[0]/2;w.paddingLeft=I,w.paddingRight=I}if(p&&p[1]>0&&!h){var P=p[1]/2;w.paddingTop=P,w.paddingBottom=P}return S&&(w.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==v||w.minWidth||(w.minWidth=0)),o.createElement("div",Object(c.a)({},R,{style:Object(c.a)(Object(c.a)({},w),x),className:U,ref:t}),A)}));O.displayName="Col",t.a=O},316:function(e,t,n){"use strict";var r=n(66),c=n(1),a=n(190);t.a=function(){var e=c.useState(!1),t=Object(r.a)(e,2),n=t[0],o=t[1];return c.useEffect((function(){o(Object(a.b)())}),[]),n}},426:function(e,t,n){"use strict";var r=n(6),c=n(16),a=n(69),o=n(66),i=n(1),u=n(63),s=n.n(u),f=n(592),l=n(1179),d=n(106),O=n(136),E=n(316),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},p=(Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var n,u=e.prefixCls,d=e.justify,p=e.align,v=e.className,h=e.style,m=e.children,N=e.gutter,j=void 0===N?0:N,C=e.wrap,y=b(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),g=i.useContext(f.b),M=g.getPrefixCls,A=g.direction,S=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),x=Object(o.a)(S,2),R=x[0],_=x[1],T=Object(E.a)(),U=i.useRef(j);i.useEffect((function(){var e=O.a.subscribe((function(e){var t=U.current||0;(!Array.isArray(t)&&"object"===Object(a.a)(t)||Array.isArray(t)&&("object"===Object(a.a)(t[0])||"object"===Object(a.a)(t[1])))&&_(e)}));return function(){return O.a.unsubscribe(e)}}),[]);var w=M("row",u),I=function(){var e=[0,0];return(Array.isArray(j)?j:[j,0]).forEach((function(t,n){if("object"===Object(a.a)(t))for(var r=0;r<O.b.length;r++){var c=O.b[r];if(R[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),P=s()(w,(n={},Object(c.a)(n,"".concat(w,"-no-wrap"),!1===C),Object(c.a)(n,"".concat(w,"-").concat(d),d),Object(c.a)(n,"".concat(w,"-").concat(p),p),Object(c.a)(n,"".concat(w,"-rtl"),"rtl"===A),n),v),L={},H=I[0]>0?I[0]/-2:void 0,F=I[1]>0?I[1]/-2:void 0;if(H&&(L.marginLeft=H,L.marginRight=H),T){var K=Object(o.a)(I,2);L.rowGap=K[1]}else F&&(L.marginTop=F,L.marginBottom=F);var W=Object(o.a)(I,2),D=W[0],G=W[1],k=i.useMemo((function(){return{gutter:[D,G],wrap:C,supportFlexGap:T}}),[D,G,C,T]);return i.createElement(l.a.Provider,{value:k},i.createElement("div",Object(r.a)({},y,{className:P,style:Object(r.a)(Object(r.a)({},L),h),ref:t}),m))})));p.displayName="Row",t.a=p},82:function(e,t,n){"use strict";var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t.a=r},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return l}));var r=n(1),c=n(81),a=n(112),o=r.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),i=r.createContext(null),u=function(e){var t=Object(c.a)(e,["prefixCls"]);return r.createElement(a.c,t)},s=r.createContext({prefixCls:""}),f=r.createContext({}),l=function(e){var t=e.children,n=Object(r.useMemo)((function(){return{}}),[]);return r.createElement(f.Provider,{value:n},t)}}}]);