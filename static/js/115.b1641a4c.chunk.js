(this["webpackJsonpifa-learning-app"]=this["webpackJsonpifa-learning-app"]||[]).push([[115,116],{137:function(e,t,n){"use strict";n(70),n(184)},164:function(e,t,n){var o=n(373),r=n(374);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},184:function(e,t,n){},194:function(e,t,n){var o=n(217),r=n(177),a=n(164),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},195:function(e,t,n){var o=n(177),r=n(224),a=n(194),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,p,d,f,h=0,m=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=l,o=s;return l=s=void 0,h=t,p=e.apply(o,n)}function y(e){return h=e,d=setTimeout(E,t),m?b(e):p}function O(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-h>=u}function E(){var e=r();if(O(e))return S(e);d=setTimeout(E,function(e){var n=t-(e-f);return v?c(n,u-(e-h)):n}(e))}function S(e){return d=void 0,g&&l?b(e):(l=s=void 0,p)}function j(){var e=r(),n=O(e);if(l=arguments,s=this,f=e,n){if(void 0===d)return y(f);if(v)return clearTimeout(d),d=setTimeout(E,t),b(f)}return void 0===d&&(d=setTimeout(E,t)),p}return t=a(t)||0,o(n)&&(m=!!n.leading,u=(v="maxWait"in n)?i(a(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==d&&clearTimeout(d),h=0,l=f=s=d=void 0},j.flush=function(){return void 0===d?p:S(r())},j}},217:function(e,t,n){var o=n(218),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},218:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},221:function(e,t,n){},224:function(e,t,n){var o=n(353);e.exports=function(){return o.Date.now()}},342:function(e,t,n){"use strict";n(70),n(376),n(127),n(97),n(379),n(193)},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(73),r=n(6),a=n(16),i=n(66),c=n(69),l=n(1),s=n(63),u=n.n(s),p=n(98),d=n(134),f=n(136),h=n(592),m=n(380),v=n(426),g=n(314),b=n(86),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},O=function(e){var t=e.prefixCls,n=e.children,o=e.actions,i=e.extra,c=e.className,s=e.colStyle,p=y(e,["prefixCls","children","actions","extra","className","colStyle"]),d=l.useContext(j),f=d.grid,m=d.itemLayout,v=l.useContext(h.b).getPrefixCls,O=v("list",t),E=o&&o.length>0&&l.createElement("ul",{className:"".concat(O,"-item-action"),key:"actions"},o.map((function(e,t){return l.createElement("li",{key:"".concat(O,"-item-action-").concat(t)},e,t!==o.length-1&&l.createElement("em",{className:"".concat(O,"-item-action-split")}))}))),S=f?"div":"li",w=l.createElement(S,Object(r.a)({},p,{className:u()("".concat(O,"-item"),Object(a.a)({},"".concat(O,"-item-no-flex"),!("vertical"===m?i:!function(){var e;return l.Children.forEach(n,(function(t){"string"===typeof t&&(e=!0)})),e&&l.Children.count(n)>1}())),c)}),"vertical"===m&&i?[l.createElement("div",{className:"".concat(O,"-item-main"),key:"content"},n,E),l.createElement("div",{className:"".concat(O,"-item-extra"),key:"extra"},i)]:[n,E,Object(b.a)(i,{key:"extra"})]);return f?l.createElement(g.a,{flex:1,style:s},w):w};O.Meta=function(e){var t=e.prefixCls,n=e.className,o=e.avatar,a=e.title,i=e.description,c=y(e,["prefixCls","className","avatar","title","description"]),s=(0,l.useContext(h.b).getPrefixCls)("list",t),p=u()("".concat(s,"-item-meta"),n),d=l.createElement("div",{className:"".concat(s,"-item-meta-content")},a&&l.createElement("h4",{className:"".concat(s,"-item-meta-title")},a),i&&l.createElement("div",{className:"".concat(s,"-item-meta-description")},i));return l.createElement("div",Object(r.a)({},c,{className:p}),o&&l.createElement("div",{className:"".concat(s,"-item-meta-avatar")},o),(a||i)&&d)};var E=O,S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},j=l.createContext({});j.Consumer;function w(e){var t,n=e.pagination,s=void 0!==n&&n,g=e.prefixCls,b=e.bordered,y=void 0!==b&&b,O=e.split,E=void 0===O||O,w=e.className,x=e.children,T=e.itemLayout,N=e.loadMore,C=e.grid,L=e.dataSource,M=void 0===L?[]:L,D=e.size,P=e.header,_=e.footer,k=e.loading,Y=void 0!==k&&k,R=e.rowKey,z=e.renderItem,H=e.locale,A=S(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),I=s&&"object"===Object(c.a)(s)?s:{},U=l.useState(I.defaultCurrent||1),B=Object(i.a)(U,2),F=B[0],W=B[1],$=l.useState(I.defaultPageSize||10),J=Object(i.a)($,2),K=J[0],q=J[1],V=l.useContext(h.b),G=V.getPrefixCls,Q=V.renderEmpty,X=V.direction,Z={},ee=function(e){return function(t,n){W(t),q(n),s&&s[e]&&s[e](t,n)}},te=ee("onChange"),ne=ee("onShowSizeChange"),oe=G("list",g),re=Y;"boolean"===typeof re&&(re={spinning:re});var ae=re&&re.spinning,ie="";switch(D){case"large":ie="lg";break;case"small":ie="sm"}var ce=u()(oe,(t={},Object(a.a)(t,"".concat(oe,"-vertical"),"vertical"===T),Object(a.a)(t,"".concat(oe,"-").concat(ie),ie),Object(a.a)(t,"".concat(oe,"-split"),E),Object(a.a)(t,"".concat(oe,"-bordered"),y),Object(a.a)(t,"".concat(oe,"-loading"),ae),Object(a.a)(t,"".concat(oe,"-grid"),!!C),Object(a.a)(t,"".concat(oe,"-something-after-last-item"),!!(N||s||_)),Object(a.a)(t,"".concat(oe,"-rtl"),"rtl"===X),t),w),le=Object(r.a)(Object(r.a)(Object(r.a)({},{current:1,total:0}),{total:M.length,current:F,pageSize:K}),s||{}),se=Math.ceil(le.total/le.pageSize);le.current>se&&(le.current=se);var ue=s?l.createElement("div",{className:"".concat(oe,"-pagination")},l.createElement(m.a,Object(r.a)({},le,{onChange:te,onShowSizeChange:ne}))):null,pe=Object(o.a)(M);s&&M.length>(le.current-1)*le.pageSize&&(pe=Object(o.a)(M).splice((le.current-1)*le.pageSize,le.pageSize));var de=Object.keys(C||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),fe=Object(d.a)(de),he=l.useMemo((function(){for(var e=0;e<f.b.length;e+=1){var t=f.b[e];if(fe[t])return t}}),[fe]),me=l.useMemo((function(){if(C){var e=he&&C[he]?C[he]:C.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===C||void 0===C?void 0:C.column,he]),ve=ae&&l.createElement("div",{style:{minHeight:53}});if(pe.length>0){var ge=pe.map((function(e,t){return function(e,t){return z?((n="function"===typeof R?R(e):R?e[R]:e.key)||(n="list-item-".concat(t)),Z[t]=n,z(e,t)):null;var n}(e,t)})),be=l.Children.map(ge,(function(e,t){return l.createElement("div",{key:Z[t],style:me},e)}));ve=C?l.createElement(v.a,{gutter:C.gutter},be):l.createElement("ul",{className:"".concat(oe,"-items")},ge)}else x||ae||(ve=function(e,t){return l.createElement("div",{className:"".concat(e,"-empty-text")},H&&H.emptyText||t("List"))}(oe,Q));var ye=le.position||"bottom",Oe=l.useMemo((function(){return{grid:C,itemLayout:T}}),[JSON.stringify(C),T]);return l.createElement(j.Provider,{value:Oe},l.createElement("div",Object(r.a)({className:ce},A),("top"===ye||"both"===ye)&&ue,P&&l.createElement("div",{className:"".concat(oe,"-header")},P),l.createElement(p.a,re,ve,x),_&&l.createElement("div",{className:"".concat(oe,"-footer")},_),N||("bottom"===ye||"both"===ye)&&ue))}w.Item=E;t.b=w},376:function(e,t,n){},448:function(e,t,n){"use strict";var o=n(6),r=n(8),a=n(1),i=n.n(a),c=n(62),l=n.n(c),s=n(63),u=n.n(s),p=n(72),d=["className","cssModule","color","innerRef","pill","tag"],f={color:l.a.string,pill:l.a.bool,tag:p.o,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.innerRef,l=e.pill,s=e.tag,f=Object(r.a)(e,d),h=Object(p.k)(u()(t,"badge","badge-"+a,!!l&&"badge-pill"),n);return f.href&&"span"===s&&(s="a"),i.a.createElement(s,Object(o.a)({},f,{className:h,ref:c}))};h.propTypes=f,h.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=h},449:function(e,t,n){"use strict";var o=n(1),r=n.n(o),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c="Pixel",l="Percent",s={unit:l,value:.8};function u(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:c,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var p=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,a=!1,i=0;function c(){r&&clearTimeout(r)}function l(){var l=this,s=Date.now()-i,u=arguments;function p(){i=Date.now(),n.apply(l,u)}function d(){r=void 0}a||(o&&!r&&p(),c(),void 0===o&&s>e?p():!0!==t&&(r=setTimeout(o?d:p,void 0===o?e-s:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),l.cancel=function(){c(),a=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?i(i({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=u(t);return o.unit===c?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=u(t);return o.unit===c?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component);t.a=p},612:function(e,t,n){"use strict";n(70),n(629)},613:function(e,t,n){"use strict";var o=n(6),r=n(16),a=n(1),i=n(63),c=n.n(i),l=n(592),s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,n=a.useContext(l.b),i=n.getPrefixCls,u=n.direction,p=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,h=e.orientation,m=void 0===h?"center":h,v=e.orientationMargin,g=e.className,b=e.children,y=e.dashed,O=e.plain,E=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),S=i("divider",p),j=m.length>0?"-".concat(m):m,w=!!b,x="left"===m&&null!=v,T="right"===m&&null!=v,N=c()(S,"".concat(S,"-").concat(f),(t={},Object(r.a)(t,"".concat(S,"-with-text"),w),Object(r.a)(t,"".concat(S,"-with-text").concat(j),w),Object(r.a)(t,"".concat(S,"-dashed"),!!y),Object(r.a)(t,"".concat(S,"-plain"),!!O),Object(r.a)(t,"".concat(S,"-rtl"),"rtl"===u),Object(r.a)(t,"".concat(S,"-no-default-orientation-margin-left"),x),Object(r.a)(t,"".concat(S,"-no-default-orientation-margin-right"),T),t),g),C=Object(o.a)(Object(o.a)({},x&&{marginLeft:v}),T&&{marginRight:v});return a.createElement("div",Object(o.a)({className:N},E,{role:"separator"}),b&&a.createElement("span",{className:"".concat(S,"-inner-text"),style:C},b))}},629:function(e,t,n){},97:function(e,t,n){"use strict";n(70),n(221)},98:function(e,t,n){"use strict";var o=n(6),r=n(16),a=n(75),i=n(76),c=n(78),l=n(79),s=n(1),u=n(63),p=n.n(u),d=n(81),f=n(195),h=n.n(f),m=n(592),v=n(106),g=n(86),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},y=(Object(v.a)("small","default","large"),null);var O=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var i;Object(a.a)(this,n),(i=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||i.props).delay;t&&(i.cancelExistingSpin(),i.updateSpinning=h()(i.originalUpdateSpinning,t))},i.updateSpinning=function(){var e=i.props.spinning;i.state.spinning!==e&&i.setState({spinning:e})},i.renderSpin=function(e){var t,n=e.getPrefixCls,a=e.direction,c=i.props,l=c.prefixCls,u=c.className,f=c.size,h=c.tip,m=c.wrapperClassName,v=c.style,O=b(c,["prefixCls","className","size","tip","wrapperClassName","style"]),E=i.state.spinning,S=n("spin",l),j=p()(S,(t={},Object(r.a)(t,"".concat(S,"-sm"),"small"===f),Object(r.a)(t,"".concat(S,"-lg"),"large"===f),Object(r.a)(t,"".concat(S,"-spinning"),E),Object(r.a)(t,"".concat(S,"-show-text"),!!h),Object(r.a)(t,"".concat(S,"-rtl"),"rtl"===a),t),u),w=Object(d.a)(O,["spinning","delay","indicator"]),x=s.createElement("div",Object(o.a)({},w,{style:v,className:j}),function(e,t){var n=t.indicator,o="".concat(e,"-dot");return null===n?null:Object(g.b)(n)?Object(g.a)(n,{className:p()(n.props.className,o)}):Object(g.b)(y)?Object(g.a)(y,{className:p()(y.props.className,o)}):s.createElement("span",{className:p()(o,"".concat(e,"-dot-spin"))},s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}))}(S,i.props),h?s.createElement("div",{className:"".concat(S,"-text")},h):null);if(i.isNestedPattern()){var T=p()("".concat(S,"-container"),Object(r.a)({},"".concat(S,"-blur"),E));return s.createElement("div",Object(o.a)({},w,{className:p()("".concat(S,"-nested-loading"),m)}),E&&s.createElement("div",{key:"loading"},x),s.createElement("div",{className:T,key:"container"},i.props.children))}return x};var c=e.spinning,l=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return i.state={spinning:c&&!l},i.originalUpdateSpinning=i.updateSpinning,i.debouncifyUpdateSpinning(e),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return s.createElement(m.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){y=e}}]),n}(s.Component);O.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=O}}]);