(this["webpackJsonpifa-learning-app"]=this["webpackJsonpifa-learning-app"]||[]).push([[117],{1058:function(e,t,n){"use strict";var r=n(13),a=n(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"}}]},name:"read",theme:"outlined"},o=n(68),s=function(e,t){return a.createElement(o.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:i}))};s.displayName="ReadOutlined";t.a=a.forwardRef(s)},1112:function(e,t,n){},1113:function(e,t,n){},1135:function(e,t,n){"use strict";var r=n(6),a=n(16),i=n(75),o=n(76),s=n(115),c=n(78),u=n(79),l=n(1),f=n(63),p=n.n(f),d=n(1068),m=n(532),h=n(69),v=n(81),g=n(105),b=n(592),y=n(1073);function O(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function x(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function w(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],j=[];function C(e,t){if(e){var n=j.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},j.push(n),k.forEach((function(t){n.eventHandlers[t]=Object(m.a)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function R(e){var t=j.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(j=j.filter((function(e){return e!==t})),k.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var V,P=function(e,t,n,r){var a,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};function T(){return"undefined"!==typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(V||(V={}));var E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).state={status:V.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offsetBottom,r=t.offsetTop;return void 0===n&&void 0===r?0:r},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,a=e.props.onChange,i=e.getTargetFunc();if(n===V.Prepare&&e.fixedNode&&e.placeholderNode&&i){var o=e.getOffsetTop(),s=e.getOffsetBottom(),c=i();if(c){var u={status:V.None},l=O(c),f=O(e.placeholderNode),p=x(f,l,o),d=w(f,l,s);void 0!==p?(u.affixStyle={position:"fixed",top:p,width:f.width,height:f.height},u.placeholderStyle={width:f.width,height:f.height}):void 0!==d&&(u.affixStyle={position:"fixed",bottom:d,width:f.width,height:f.height},u.placeholderStyle={width:f.width,height:f.height}),u.lastAffix=!!u.affixStyle,a&&r!==u.lastAffix&&a(u.lastAffix),e.setState(u)}}},e.prepareMeasure=function(){e.setState({status:V.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return Object(o.a)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||T}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){C(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),r=(null===n||void 0===n?void 0:n())||null;t!==r&&(R(this),r&&(C(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),R(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),a=e();if(a&&this.placeholderNode){var i=O(a),o=O(this.placeholderNode),s=x(o,i,n),c=w(o,i,r);if(void 0!==s&&t.top===s||void 0!==c&&t.bottom===c)return}}this.prepareMeasure()}},{key:"render",value:function(){var e=this,t=this.state,n=t.affixStyle,i=t.placeholderStyle,o=this.props,s=o.affixPrefixCls,c=o.children,u=p()(Object(a.a)({},s,!!n)),f=Object(v.a)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return l.createElement(g.a,{onResize:function(){e.updatePosition()}},l.createElement("div",Object(r.a)({},f,{ref:this.savePlaceholderNode}),n&&l.createElement("div",{style:i,"aria-hidden":"true"}),l.createElement("div",{className:u,ref:this.saveFixedNode,style:n},l.createElement(g.a,{onResize:function(){e.updatePosition()}},c))))}}]),n}(l.Component);E.contextType=b.b,P([Object(y.b)()],E.prototype,"updatePosition",null),P([Object(y.b)()],E.prototype,"lazyUpdatePosition",null);var N=l.forwardRef((function(e,t){var n=e.prefixCls,a=(0,l.useContext(b.b).getPrefixCls)("affix",n),i=Object(r.a)(Object(r.a)({},e),{affixPrefixCls:a});return l.createElement(E,Object(r.a)({},i,{ref:t}))})),F=n(711),A=n(1030),S=l.createContext(null);function L(){return window}function M(e,t){if(!e.getClientRects().length)return 0;var n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:n.top}var z=/#([\S ]+)$/,U=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).state={activeLink:null},e.wrapperRef=l.createRef(),e.links=[],e.registerLink=function(t){e.links.includes(t)||e.links.push(t)},e.unregisterLink=function(t){var n=e.links.indexOf(t);-1!==n&&e.links.splice(n,1)},e.getContainer=function(){var t=e.context.getTargetContainer;return(e.props.getContainer||t||L)()},e.handleScrollTo=function(t){var n=e.props,r=n.offsetTop,a=n.targetOffset;e.setCurrentActiveLink(t);var i=e.getContainer(),o=Object(A.a)(i,!0),s=z.exec(t);if(s){var c=document.getElementById(s[1]);if(c){var u=o+M(c,i);u-=void 0!==a?a:r||0,e.animating=!0,Object(F.a)(u,{callback:function(){e.animating=!1},getContainer:e.getContainer})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var n=e.state.activeLink,r=e.props,a=r.onChange,i=r.getCurrentAnchor;n!==t&&(e.setState({activeLink:"function"===typeof i?i():t}),null===a||void 0===a||a(t))},e.handleScroll=function(){if(!e.animating){var t=e.props,n=t.offsetTop,r=t.bounds,a=t.targetOffset,i=e.getCurrentAnchor(void 0!==a?a:n||0,r);e.setCurrentActiveLink(i)}},e.updateInk=function(){var t=Object(s.a)(e),n=t.prefixCls,r=t.wrapperRef.current,a=null===r||void 0===r?void 0:r.getElementsByClassName("".concat(n,"-link-title-active"))[0];a&&(e.inkNode.style.top="".concat(a.offsetTop+a.clientHeight/2-4.5,"px"))},e.getMemoizedContextValue=Object(d.a)((function(t,n){return{registerLink:e.registerLink,unregisterLink:e.unregisterLink,scrollTo:e.handleScrollTo,activeLink:t,onClick:n}})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=Object(m.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var e=this.getContainer();this.scrollContainer!==e&&(this.scrollContainer=e,this.scrollEvent.remove(),this.scrollEvent=Object(m.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=[],r=this.getContainer();if(this.links.forEach((function(a){var i=z.exec(a.toString());if(i){var o=document.getElementById(i[1]);if(o){var s=M(o,r);s<e+t&&n.push({link:a,top:s})}}})),n.length){var a=n.reduce((function(e,t){return t.top>e.top?t:e}));return a.link}return""}},{key:"render",value:function(){var e=this.context,t=e.getPrefixCls,n=e.direction,i=this.props,o=i.prefixCls,s=i.className,c=void 0===s?"":s,u=i.style,f=i.offsetTop,d=i.affix,m=i.showInkInFixed,h=i.children,v=i.onClick,g=this.state.activeLink,b=t("anchor",o);this.prefixCls=b;var y=p()("".concat(b,"-ink-ball"),{visible:g}),O=p()("".concat(b,"-wrapper"),Object(a.a)({},"".concat(b,"-rtl"),"rtl"===n),c),x=p()(b,Object(a.a)({},"".concat(b,"-fixed"),!d&&!m)),w=Object(r.a)({maxHeight:f?"calc(100vh - ".concat(f,"px)"):"100vh"},u),k=l.createElement("div",{ref:this.wrapperRef,className:O,style:w},l.createElement("div",{className:x},l.createElement("div",{className:"".concat(b,"-ink")},l.createElement("span",{className:y,ref:this.saveInkNode})),h)),j=this.getMemoizedContextValue(g,v);return l.createElement(S.Provider,{value:j},d?l.createElement(N,{offsetTop:f,target:this.getContainer},k):k)}}]),n}(l.Component);U.defaultProps={affix:!0,showInkInFixed:!1},U.contextType=b.b;var H=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).handleClick=function(t){var n=e.context,r=n.scrollTo,a=n.onClick,i=e.props,o=i.href,s=i.title;null===a||void 0===a||a(t,{title:s,href:o}),r(o)},e.renderAnchorLink=function(t){var n=t.getPrefixCls,r=e.props,i=r.prefixCls,o=r.href,s=r.title,c=r.children,u=r.className,f=r.target,d=n("anchor",i),m=e.context.activeLink===o,h=p()("".concat(d,"-link"),Object(a.a)({},"".concat(d,"-link-active"),m),u),v=p()("".concat(d,"-link-title"),Object(a.a)({},"".concat(d,"-link-title-active"),m));return l.createElement("div",{className:h},l.createElement("a",{className:v,href:o,title:"string"===typeof s?s:"",target:f,onClick:e.handleClick},s),c)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(e){var t=e.href,n=this.props.href;t!==n&&(this.context.unregisterLink(t),this.context.registerLink(n))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return l.createElement(b.a,null,this.renderAnchorLink)}}]),n}(l.Component);H.defaultProps={href:"#"},H.contextType=S;var I=H;U.Link=I;t.a=U},1142:function(e,t,n){"use strict";n(70),n(1112),n(1113)},1600:function(e,t,n){"use strict";var r=n(13),a=n(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar-circle",theme:"outlined"},o=n(68),s=function(e,t){return a.createElement(o.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:i}))};s.displayName="DollarCircleOutlined";t.a=a.forwardRef(s)},448:function(e,t,n){"use strict";var r=n(6),a=n(8),i=n(1),o=n.n(i),s=n(62),c=n.n(s),u=n(63),l=n.n(u),f=n(72),p=["className","cssModule","color","innerRef","pill","tag"],d={color:c.a.string,pill:c.a.bool,tag:f.o,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,i=e.color,s=e.innerRef,c=e.pill,u=e.tag,d=Object(a.a)(e,p),m=Object(f.k)(l()(t,"badge","badge-"+i,!!c&&"badge-pill"),n);return d.href&&"span"===u&&(u="a"),o.a.createElement(u,Object(r.a)({},d,{className:m,ref:s}))};m.propTypes=d,m.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=m},612:function(e,t,n){"use strict";n(70),n(629)},613:function(e,t,n){"use strict";var r=n(6),a=n(16),i=n(1),o=n(63),s=n.n(o),c=n(592),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n=i.useContext(c.b),o=n.getPrefixCls,l=n.direction,f=e.prefixCls,p=e.type,d=void 0===p?"horizontal":p,m=e.orientation,h=void 0===m?"center":m,v=e.orientationMargin,g=e.className,b=e.children,y=e.dashed,O=e.plain,x=u(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),w=o("divider",f),k=h.length>0?"-".concat(h):h,j=!!b,C="left"===h&&null!=v,R="right"===h&&null!=v,V=s()(w,"".concat(w,"-").concat(d),(t={},Object(a.a)(t,"".concat(w,"-with-text"),j),Object(a.a)(t,"".concat(w,"-with-text").concat(k),j),Object(a.a)(t,"".concat(w,"-dashed"),!!y),Object(a.a)(t,"".concat(w,"-plain"),!!O),Object(a.a)(t,"".concat(w,"-rtl"),"rtl"===l),Object(a.a)(t,"".concat(w,"-no-default-orientation-margin-left"),C),Object(a.a)(t,"".concat(w,"-no-default-orientation-margin-right"),R),t),g),P=Object(r.a)(Object(r.a)({},C&&{marginLeft:v}),R&&{marginRight:v});return i.createElement("div",Object(r.a)({className:V},x,{role:"separator"}),b&&i.createElement("span",{className:"".concat(w,"-inner-text"),style:P},b))}},629:function(e,t,n){},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),a=n(1),i=n(302),o=n(840);function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var c=s(r),u=s(a),l=s(i),f=s(o);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O(this,n)}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,i=t.easingFn,o=t.end,s=t.formattingFn,c=t.prefix,u=t.separator,l=t.start,p=t.suffix,d=t.useEasing;return new f.default(e,l,o,r,a,{decimal:n,easingFn:i,formattingFn:s,separator:u,prefix:c,suffix:p,useEasing:d,useGrouping:!!u})},C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,a=x(i);function i(){var e;m(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(y(e=a.call.apply(a,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,a=n.suffix,i=n.prefix,o=n.redraw,s=n.duration,c=n.separator,u=n.decimals,l=n.decimal,f=n.className;return s!==t.duration||r!==t.start||a!==t.suffix||i!==t.prefix||c!==t.separator||u!==t.decimals||l!==t.decimal||f!==t.className||o})),v(y(e),"createInstance",(function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),j(e.containerRef.current,e.props)})),v(y(e),"pauseResume",(function(){var t=y(e),n=t.reset,r=t.restart,a=t.update,i=e.props.onPauseResume;e.instance.pauseResume(),i({reset:n,start:r,update:a})})),v(y(e),"reset",(function(){var t=y(e),n=t.pauseResume,r=t.restart,a=t.update,i=e.props.onReset;e.instance.reset(),i({pauseResume:n,start:r,update:a})})),v(y(e),"restart",(function(){e.reset(),e.start()})),v(y(e),"start",(function(){var t=y(e),n=t.pauseResume,r=t.reset,a=t.restart,i=t.update,o=e.props,s=o.delay,c=o.onEnd,u=o.onStart,l=function(){return e.instance.start((function(){return c({pauseResume:n,reset:r,start:a,update:i})}))};s>0?e.timeoutId=setTimeout(l,1e3*s):l(),u({pauseResume:n,reset:r,update:i})})),v(y(e),"update",(function(t){var n=y(e),r=n.pauseResume,a=n.reset,i=n.restart,o=e.props.onUpdate;e.instance.update(t),o({pauseResume:r,reset:a,start:i})})),v(y(e),"containerRef",u.default.createRef()),e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,o=this.reset,s=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:i,reset:o,start:s,update:c}):u.default.createElement("span",{className:n,ref:a,style:r})}}])&&h(t.prototype,n),r&&h(t,r),i}(a.Component);v(C,"propTypes",{decimal:c.default.string,decimals:c.default.number,delay:c.default.number,easingFn:c.default.func,end:c.default.number.isRequired,formattingFn:c.default.func,onEnd:c.default.func,onStart:c.default.func,prefix:c.default.string,redraw:c.default.bool,separator:c.default.string,start:c.default.number,startOnMount:c.default.bool,suffix:c.default.string,style:c.default.object,useEasing:c.default.bool,preserveValue:c.default.bool}),v(C,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var R={innerHTML:null};t.default=C,t.useCountUp=function(e){var t=d(d({},C.defaultProps),e),n=t.start,r=t.formattingFn,i=w(a.useState("function"===typeof r?r(n):n),2),o=i[0],s=i[1],c=a.useRef(null),u=a.useRef(null),l=function(){var e=c.current;if(null!==e)return e;var n=function(){var e=j(R,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return c.current=n,n},f=function(){var e=t.onReset;l().reset(),e({pauseResume:m,start:p,update:h})},p=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start((function(){r({pauseResume:m,reset:f,start:e,update:h})})),n({pauseResume:m,reset:f,update:h})},m=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:f,start:p,update:h})},h=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:m,reset:f,start:p})};return a.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(u.current=setTimeout((function(){n({pauseResume:m,reset:f,update:h}),l().start((function(){clearTimeout(u.current),r({pauseResume:m,reset:f,start:p,update:h})}))}),1e3*e)),function(){clearTimeout(u.current),f()}}),[]),{countUp:o,start:p,pauseResume:m,reset:f,update:h}}},840:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,i){function o(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},formattingFn:function(e){var t,n,r,a,i,o,c=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(a="",i=0,o=n.length;i<o;++i)0!==i&&i%3===0&&(a=s.options.separator+a),a=n[o-i-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(c?"-":"")+s.options.prefix+n+r+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var c in s.options)i.hasOwnProperty(c)&&null!==i[c]&&(s.options[c]=i[c]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var u=0,l=["webkit","moz","ms","o"],f=0;f<l.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[l[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[f]+"CancelAnimationFrame"]||window[l[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-u)),a=window.setTimeout((function(){e(n+r)}),r);return u=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!!s.initialized||(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,!0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(s.error="[CountUp] target is null or undefined",!1))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!o(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)}}]);