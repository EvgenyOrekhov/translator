(this.webpackJsonptranslator=this.webpackJsonptranslator||[]).push([[0],{37:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(0),o=a.n(c),s=a(29),l=a.n(s),i=a(74),u=a(36),m=a(35),f=a(34),v=(a(42),a(4)),h=a(6),d=a.n(h),b=a(13),g=a(30),E=a.n(g),p=a(73),y=a(75),x=E.a.create({baseURL:"https://translate.yandex.net/api/v1.5/tr.json/"});function j(e){return Object(r.a)({key:"trnsl.1.1.20200412T100451Z.4ac199cf689eab8d.26e9890d9ff3681a1382cbbdb0ddf3c29ef4476d"},e)}var O=function(e){var t=e.state,a=e.actions;Object(c.useEffect)((function(){Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/getLangs",{params:j({ui:"ru"})});case 2:t=e.sent,n=t.data,a.languages.set(n.langs);case 5:case"end":return e.stop()}}),e)})))()}),[a.languages]);var n=Object(p.a)(function(){var e=Object(b.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.get("/translate",{params:j({ui:"ru",text:t.text,lang:"".concat(t.from,"-").concat(t.to)})});case 3:n=e.sent,r=n.data,a.translation.set(r.text[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),1e3),r=Object(v.a)(n,1)[0];function s(e){var n=e.type;return o.a.createElement("select",{className:"language",onChange:function(e){return a[n].set(e.target.value)},value:t[n]},Object.entries(t.languages).sort((function(e,t){return e[1].localeCompare(t[1])})).map((function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{key:a,value:a},n)})))}return Object(c.useEffect)((function(){""!==t.text.trim()&&r()}),[t.text,t.from,t.to,r]),o.a.createElement("div",null,o.a.createElement("div",{className:"languages"},o.a.createElement(s,{type:"from"}),o.a.createElement("button",{type:"button",className:"switch",onClick:a.switch},"\u21c4"),o.a.createElement(s,{type:"to"})),o.a.createElement("div",{className:"from"},o.a.createElement("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430",value:t.text,onChange:function(e){a.setText(e.target.value)}}),t.text&&o.a.createElement("button",{type:"button",className:"clear",onClick:a.clear},"\u2715")),o.a.createElement("small",{className:"characters-left"},9999-t.text.length),o.a.createElement("div",{className:"from"},o.a.createElement("textarea",{readOnly:!0,value:t.translation}),t.translation&&o.a.createElement("button",{type:"button",className:"save",onClick:function(){a.save(Date.now())}},"\u2794")),o.a.createElement("footer",null,o.a.createElement("div",{className:"history-header"},o.a.createElement("div",{className:"history-title"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")),0===t.history.length?o.a.createElement("div",{className:"empty"},o.a.createElement("h2",null,"\u041f\u0443\u0441\u0442\u043e"),"\u041d\u0435\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432"):t.history.map((function(e){var a=e.from,n=e.to,r=e.text,c=e.translation,s=e.timestamp;return o.a.createElement("div",{key:s,class:"history-item"},o.a.createElement("div",{className:"history-item-from"},o.a.createElement("small",{className:"history-item-header"},o.a.createElement("div",null,t.languages[a]),o.a.createElement("div",null,Object(y.a)(s,Date.now()))),o.a.createElement("div",null,r)),o.a.createElement("div",{className:"history-item-to"},o.a.createElement("small",{className:"history-item-header"},o.a.createElement("div",null,t.languages[n])),o.a.createElement("div",null,c)))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={languages:[],from:"en",to:"ru",text:"",translation:"",history:[]};Object(i.a)([Object(u.a)(),Object(m.a)(w),{state:w,actions:{setText:function(e,t){return Object(r.a)({},t,{text:e,translation:""===e?"":t.translation})},switch:function(e,t){return Object(r.a)({},t,{from:t.to,to:t.from,text:t.translation})},clear:function(e,t){return Object(r.a)({},t,{text:"",translation:""})},save:function(e,t){return""===t.text?t:Object(r.a)({},t,{history:[{from:t.from,to:t.to,text:t.text,translation:t.translation,timestamp:e}].concat(Object(n.a)(t.history))})}},subscribers:[function(e){var t=e.state,a=e.actions;l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,{state:t,actions:a})),document.getElementById("root"))}]},Object(f.a)({selector:function(e){return{from:e.from,to:e.to,history:e.history}}})]),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9e4c303b.chunk.js.map