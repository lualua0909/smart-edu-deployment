(this["webpackJsonpifa-learning-app"]=this["webpackJsonpifa-learning-app"]||[]).push([[12],{111:function(e,n,a){"use strict";var t=a(1),s=a.n(t),c=a(1610),o=a(1158);n.a=Object(o.c)((function(e){return s.a.createElement(c.a,e)}),{withRef:!1})},1166:function(e,n,a){"use strict";var t=a(80),s=a(4),c=a(12),o=a(1),l=a.n(o),i=a(1608),r=a(1609),m=a(1643);n.a=function(){var e=Object(o.useRef)(),n=Object(o.useState)(!1),a=Object(t.a)(n,2),u=a[0],g=a[1],d=Object(o.useState)(Object(c.h)()),b=Object(t.a)(d,1)[0],p=Object(o.useState)(Object(c.j)()),h=Object(t.a)(p,2),f=h[0],v=h[1];Object(o.useEffect)((function(){"flat"===f?document.body.classList.remove("rounded"):document.body.classList.add("rounded"),Object(c.q)(f),u&&g(!1)}),[f]);var E=function(n){if(u){var a=e.current;if(a.contains(n.target)||a===n.target)return;g(!1)}};Object(o.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,E,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,E,!1)}))}}),[u]);var V=function(e,n){e.preventDefault(),Object(c.o)(n),g(!1),setTimeout((function(){window.location.reload()}),500)};return l.a.createElement("div",{ref:e,className:"theme-colors ".concat(u?"shown":"")},l.a.createElement("div",{className:"p-4"},l.a.createElement("p",{className:"text-muted mb-2"},"Ma\u0300u n\xea\u0300n sa\u0301ng"),l.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-3"},s.X.slice(0,5).map((function(e){return l.a.createElement("a",{key:"light.".concat(e),href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(b==="light.".concat(e)?"active":""),onClick:function(n){return V(n,"light.".concat(e))}},l.a.createElement("span",null," "))}))),l.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-4"},s.X.slice(5,10).map((function(e){return l.a.createElement("a",{key:"light.".concat(e),href:"#light.".concat(e),className:"theme-color theme-color-".concat(e," ").concat(b==="light.".concat(e)?"active":""),onClick:function(n){return V(n,"light.".concat(e))}},l.a.createElement("span",null," "))})))),l.a.createElement("div",{className:" pb-0 pl-4 pt-4"},l.a.createElement(i.a,null,l.a.createElement(r.a,{for:"radiusRadio"},"Thay \u0111\xf4\u0309i vi\xea\u0300n"),l.a.createElement("div",null,l.a.createElement(m.a,{type:"radio",name:"radiusRadio",id:"rounded",label:"Bo tro\u0300n",inline:!0,defaultChecked:"rounded"===f,onChange:function(){return v("rounded")}}),l.a.createElement(m.a,{type:"radio",name:"radiusRadio",id:"flat",label:"Go\u0301c nho\u0323n",inline:!0,defaultChecked:"flat"===f,onChange:function(){return v("flat")}})))),l.a.createElement("a",{href:"#section",className:"theme-button",onClick:function(e){e.preventDefault(),g(!u)}},l.a.createElement("i",{className:"simple-icon-magic-wand"})))}},1169:function(e,n,a){},1170:function(e,n,a){"use strict";a.d(n,"b",(function(){return c}));var t=a(4),s=[{id:"dashboards",icon:"simple-icon-grid",label:"menu.default",to:"".concat(t.V,"/dashboards/default")},{id:"managers",icon:"simple-icon-layers",label:"menu.managers",to:"".concat(t.V,"/managers"),subs:[{icon:"simple-icon-note",label:"managers.courses",to:"".concat(t.V,"/managers/courses")},{icon:"simple-icon-layers",label:"managers.groups",to:"".concat(t.V,"/managers/course-groups")},{icon:"simple-icon-question",label:"managers.qanda",to:"".concat(t.V,"/managers/qanda")},{icon:"simple-icon-calendar",label:"managers.offline-schedule",to:"".concat(t.V,"/managers/offline-schedule")},{icon:"simple-icon-calendar",label:"managers.train-schedule",to:"".concat(t.V,"/managers/train-schedule")},{icon:"simple-icon-pie-chart",label:"menu.conversations",to:"".concat(t.V,"/managers/conversations")}]},{id:"users",icon:"simple-icon-people",label:"menu.users",to:"".concat(t.V,"/users"),subs:[{icon:"simple-icon-user",label:"managers.admins",to:"".concat(t.V,"/users/admin-list")},{icon:"simple-icon-user",label:"managers.teachers",to:"".concat(t.V,"/users/teacher-list")},{icon:"simple-icon-user",label:"managers.users",to:"".concat(t.V,"/users/list")},{icon:"simple-icon-people",label:"managers.partners",to:"".concat(t.V,"/users/partners")},{icon:"simple-icon-lock",label:"managers.permissions",to:"".concat(t.V,"/users/permissions")},{icon:"simple-icon-screen-desktop",label:"managers.meetings",to:"".concat(t.V,"/users/meeting-calls")}]},{id:"mentors",icon:"simple-icon-handbag",label:"menu.mentors",to:"".concat(t.V,"/mentors"),subs:[{icon:"simple-icon-phone",label:"managers.onebyone",to:"".concat(t.V,"/mentors/mentor-calls")}]},{id:"info",icon:"simple-icon-handbag",label:"menu.info",to:"".concat(t.V,"/info"),subs:[{icon:"simple-icon-organization",label:"managers.areas",to:"".concat(t.V,"/users/areas")},{icon:"simple-icon-organization",label:"managers.departments",to:"".concat(t.V,"/users/departments")},{icon:"simple-icon-flag",label:"managers.positions",to:"".concat(t.V,"/users/positions")}]},{id:"surveys",icon:"simple-icon-calculator",label:"menu.surveys",to:"".concat(t.V,"/surveys"),subs:[{icon:"simple-icon-calculator",label:"survey.list",to:"".concat(t.V,"/surveys/default")},{icon:"simple-icon-speech",label:"survey.questions",to:"".concat(t.V,"/surveys/questions")},{icon:"simple-icon-grid",label:"survey.categories",to:"".concat(t.V,"/surveys/question-categories")},{icon:"simple-icon-grid",label:"survey.question_groups",to:"".concat(t.V,"/surveys/question-groups")}]},{id:"transactions",icon:"simple-icon-handbag",label:"menu.transactions",to:"".concat(t.V,"/transactions"),subs:[{icon:"simple-icon-handbag",label:"transactions.orders",to:"".concat(t.V,"/transactions/orders")},{icon:"simple-icon-handbag",label:"transactions.casso-logs",to:"".concat(t.V,"/transactions/casso-logs")}]},{id:"exams",icon:"simple-icon-event",label:"menu.exam",to:"".concat(t.V,"/exams"),subs:[{icon:"simple-icon-graduation",label:"managers.exam",to:"".concat(t.V,"/exams/default")},{icon:"simple-icon-notebook",label:"managers.tests",to:"".concat(t.V,"/exams/questions")},{icon:"simple-icon-book-open",label:"managers.test-result",to:"".concat(t.V,"/managers/test-result")}]},{id:"analytics",icon:"simple-icon-chart",label:"menu.analytics",to:"".concat(t.V,"/analytics"),subs:[{icon:"simple-icon-chart",label:"menu.bao-cao-tuan",to:"".concat(t.V,"/analytics/bao-cao-tuan")},{icon:"simple-icon-graph",label:"menu.bang-diem-cuoi-khoa",to:"".concat(t.V,"/analytics/bang-diem-cuoi-khoa")},{icon:"simple-icon-pie-chart",label:"menu.logs",to:"".concat(t.V,"/analytics/logs")},{icon:"simple-icon-pie-chart",label:"menu.system-logs",to:"".concat(t.V,"/analytics/system-logs")},{icon:"simple-icon-chart",label:"menu.chart",to:"".concat(t.V,"/analytics/report-charts")}]},{id:"settings",icon:"simple-icon-settings",label:"menu.settings",to:"".concat(t.V,"/settings"),subs:[{icon:"simple-icon-rocket",label:"settings.systems",to:"".concat(t.V,"/settings/default")},{icon:"simple-icon-feed",label:"managers.news",to:"".concat(t.V,"/managers/news")},{icon:"simple-icon-present",label:"managers.voucher",to:"".concat(t.V,"/managers/voucher")},{icon:"simple-icon-picture",label:"settings.banners",to:"".concat(t.V,"/settings/banners")}]},{id:"forms",icon:"simple-icon-chart",label:"menu.forms",to:"".concat(t.V,"/forms"),subs:[{icon:"simple-icon-question",label:"settings.form-consultings",to:"".concat(t.V,"/settings/form-consultings")}]}];n.a=s;var c=[{id:"dashboards",icon:"simple-icon-grid",label:"menu.default",to:"".concat(t.V,"/dashboards/default")},{id:"managers",icon:"simple-icon-layers",label:"menu.managers",to:"".concat(t.V,"/managers"),subs:[{icon:"simple-icon-note",label:"managers.courses",to:"".concat(t.V,"/managers/courses")},{icon:"simple-icon-layers",label:"managers.groups",to:"".concat(t.V,"/managers/course-groups")}]}]},1175:function(e,n,a){"use strict";var t=a(80),s=(a(437),a(1)),c=a.n(s),o=a(1614),l=a(1644),i=a(2),r=a(19),m=a(175),u=JSON.parse(localStorage.getItem("@current_user")),g={setContainerClassnamesAction:i.db,clickOnMobileMenuAction:i.R,changeLocaleAction:i.O};n.a=Object(r.b)((function(e){var n=e.menu,a=e.settings;return{containerClassnames:n.containerClassnames,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems,locale:a.locale}}),g)((function(e){var n=e.containerClassnames,a=e.menuClickCount,i=e.selectedMenuHasSubItems,r=e.setContainerClassnamesAction,g=e.clickOnMobileMenuAction,d=Object(s.useState)(!1),b=Object(t.a)(d,2),p=b[0],h=b[1];return localStorage.getItem("@current_user")&&localStorage.getItem("@token")&&c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"d-flex align-items-center navbar-left"},c.a.createElement(m.c,{to:"#",location:{},className:"menu-button d-none d-md-block",onClick:function(e){return function(e,n,a){e.preventDefault(),setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),350),r(n+1,a,i)}(e,a,n)}},c.a.createElement("i",{className:"simple-icon-grid",style:{fontSize:32}})),c.a.createElement(m.c,{to:"#",location:{},className:"menu-button-mobile d-xs-block d-sm-block d-md-none",onClick:function(e){return function(e,n){e.preventDefault(),g(n)}(e,n)}},c.a.createElement("i",{className:"simple-icon-grid",style:{fontSize:24}})),c.a.createElement("a",{className:"navbar-logo",href:"/"},c.a.createElement("span",{className:"logo d-none d-xs-block"}),c.a.createElement("span",{className:"logo-mobile d-block d-xs-none"}))),c.a.createElement("div",{className:"navbar-right"},c.a.createElement("div",{className:"header-icons d-inline-block align-middle"},c.a.createElement("button",{className:"header-icon btn btn-empty d-none d-sm-inline-block",type:"button",id:"fullScreenButton",onClick:function(){var e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement,n=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullScreen?n.webkitRequestFullScreen():n.msRequestFullscreen&&n.msRequestFullscreen(),h(!e)}},p?c.a.createElement("i",{className:"simple-icon-size-actual d-block"}):c.a.createElement("i",{className:"simple-icon-size-fullscreen d-block"}))),c.a.createElement("div",{className:"user d-inline-block"},c.a.createElement(o.a,{className:"dropdown-menu-right"},c.a.createElement(l.a,{className:"p-0",color:"empty"},c.a.createElement("span",{className:"name mr-1"},u.first_name+" "+u.last_name))))))}))},1176:function(e,n,a){var t={"./gogo.dark.bluenavy.scss":[1317,118],"./gogo.dark.blueolympic.scss":[1318,119],"./gogo.dark.blueyale.scss":[1319,120],"./gogo.dark.greenlime.scss":[1320,121],"./gogo.dark.greenmoss.scss":[1321,122],"./gogo.dark.greysteel.scss":[1322,123],"./gogo.dark.orangecarrot.scss":[1323,124],"./gogo.dark.purplemonster.scss":[1324,125],"./gogo.dark.redruby.scss":[1325,126],"./gogo.dark.yellowgranola.scss":[1326,127],"./gogo.light.bluenavy.scss":[1327,128],"./gogo.light.blueolympic.scss":[1328,129],"./gogo.light.blueyale.scss":[1329,130],"./gogo.light.greenlime.scss":[1330,131],"./gogo.light.greenmoss.scss":[1331,132],"./gogo.light.greysteel.scss":[1332,133],"./gogo.light.orangecarrot.scss":[1333,134],"./gogo.light.purplemonster.scss":[1334,135],"./gogo.light.redruby.scss":[1335,136],"./gogo.light.yellowgranola.scss":[1336,137]};function s(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],s=n[0];return a.e(n[1]).then((function(){return a.t(s,7)}))}s.keys=function(){return Object.keys(t)},s.id=1176,e.exports=s},437:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"c",(function(){return l})),a.d(n,"b",(function(){return o}));var t=a(1),s=a.n(t),c=function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}))},o=function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},s.a.createElement("path",{className:"view-icon-svg",d:"M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"}))},l=function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"},s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}),s.a.createElement("path",{className:"view-icon-svg",d:"M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}))}}}]);