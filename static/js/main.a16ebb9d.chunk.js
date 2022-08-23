(this["webpackJsonpexchange-rate"]=this["webpackJsonpexchange-rate"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(6),s=n.n(a),u=n(2);function o(e){var t=e.currencyData,n=e.amount;return Object(r.jsx)("table",{className:"ExchangeRate-table",children:Object(r.jsx)("tbody",{children:Object.entries(t).map((function(e){var t=Object(u.a)(e,2),c=t[0],a=t[1],s=n*a||0;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:s.toLocaleString("en",{style:"currency",currency:c})})]},c)}))})})}function i(e){var t=e.supportedCurrencies,n=e.currencyCode,c=e.onChange;return Object(r.jsx)("select",{className:"currencyCode",value:n,onChange:c,children:t.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})}function j(e){var t=e.amount,n=e.onChange;return Object(r.jsx)("form",{className:"ExchangeRate-form",children:Object(r.jsx)("input",{"aria-label":"Amount in base currency",type:"text",value:t,onChange:n})})}var b=n(3),l=n.n(b),h=n(5),f=n(7),p=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function O(){return(O=Object(h.a)(l.a.mark((function e(t){var n,r,c,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split("?"),r=Object(u.a)(n,2),c=r[1],a=new URLSearchParams(void 0===c?"":c),e.next=4,p(400);case 4:return new Set((a.get("symbols")||"").split(",")),s=a.get("base"),o=f[s],e.abrupt("return",{json:function(){return Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{success:!0,rates:o});case 1:case"end":return e.stop()}}),e)})))()}});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){var n=t.filter((function(t){return t!==e})).join();return function(e){return O.apply(this,arguments)}("http://api.exchangeratesapi.io/latest?base=".concat(e,"&symbols=").concat(n)).then((function(e){return e.json()})).then(d).then((function(e){return e.rates}))}function d(e){return e.success?e:(console.error("Server Error: ".concat(e.error.info)),{rates:{USD:1}})}var m=["USD","EUR","JPY","CAD","GBP","MXN"];function v(){var e=Object(c.useState)("1.50"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("USD"),b=Object(u.a)(s,2),l=b[0],h=b[1],f=Object(c.useState)({USD:1}),p=Object(u.a)(f,2),O=p[0],d=p[1];Object(c.useEffect)((function(){x(l,m).then((function(e){d(e)}))}),[l]);var v=Object(c.useCallback)((function(e){return h(e.target.value)}),[]),C=Object(c.useCallback)((function(e){var t=e.target.value;a(t)}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{children:Object(r.jsxs)("h1",{className:"ExchangeRate-header",children:["Exchange Rates"," ",Object(r.jsx)(i,{supportedCurrencies:m,currencyCode:l,onChange:v})]})}),Object(r.jsx)("section",{children:Object(r.jsx)(j,{amount:n,onChange:C})}),Object(r.jsx)("section",{children:Object(r.jsx)(o,{currencyData:O,amount:n})})]})}n(14);s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"EUR":{"USD":1.21459,"EUR":1,"MXN":24.125285,"JPY":132.809956,"CAD":1.470663,"GBP":0.861411},"USD":{"USD":1,"EUR":0.82,"MXN":19.86,"JPY":109.38,"CAD":1.21,"GBP":0.71},"CAD":{"USD":0.83,"EUR":0.68,"MXN":16.4,"JPY":90.31,"CAD":1,"GBP":0.59},"JPY":{"USD":0.0091,"EUR":0.0075,"MXN":0.18,"JPY":1,"CAD":0.011,"GBP":0.0065},"MXN":{"USD":0.05,"EUR":0.041,"MXN":1,"JPY":5.51,"CAD":0.061,"GBP":0.036},"GBP":{"USD":1.41,"EUR":1.16,"MXN":28.01,"JPY":154.22,"CAD":1.71,"GBP":1}}')}},[[15,1,2]]]);
//# sourceMappingURL=main.a16ebb9d.chunk.js.map