(this["webpackJsonpreact-redux-quick-reference-template"]=this["webpackJsonpreact-redux-quick-reference-template"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=n(2),u=function(e){return{type:"INCREMENT",payload:e}},i=function(e){return{type:"DECREMENT",payload:e}};var E=function(){var e=Object(l.c)((function(e){return e.counter})),t=Object(l.c)((function(e){return e.isLogged})),n=Object(l.b)();return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Redux example ",o.a.createElement("small",null,"V1.0")),o.a.createElement("h2",null,"Counter ",e),o.a.createElement("button",{onClick:function(){n(u())}},"+"),o.a.createElement("button",{onClick:function(){n(i())}},"-"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){n(u(5))}},"+5"),o.a.createElement("button",{onClick:function(){n(i(5))}},"-5"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){n({type:"SIGN_IN"})}},"Loggin/loggout"),t&&o.a.createElement("h3",null,"Valuable information I Shouldn't see"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(1),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.payload?t.payload:1;switch(t.type){case"INCREMENT":return e+n;case"DECREMENT":return e-n;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},h=Object(s.b)({counter:m,isLogged:d}),f=Object(s.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:f},o.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6799089.chunk.js.map