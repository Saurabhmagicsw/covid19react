(this.webpackJsonpcovidtrack=this.webpackJsonpcovidtrack||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(5),i=c.n(s),a=(c(14),c(15),c(4)),j=c.n(a),d=c(6),h=c(9),o=c(21),b=c(0),u=function(){var t=Object(n.useState)([]),e=Object(h.a)(t,2),c=e[0],r=e[1],s=function(){var t=Object(d.a)(j.a.mark((function t(){var e,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.covid19india.org/data.json");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,r(c.statewise),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("something is Wrong");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(t){return s(),function(){t({})}}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{variant:"dark",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"S. No"}),Object(b.jsx)("th",{children:"States"}),Object(b.jsx)("th",{children:"Active"}),Object(b.jsx)("th",{children:"Confirmed"}),Object(b.jsx)("th",{children:"Deaths"})]})}),Object(b.jsx)("tbody",{children:c.map((function(t,e){return Object(b.jsxs)("tr",{className:"clss",children:[Object(b.jsx)("td",{children:e+1}),Object(b.jsx)("td",{children:t.state}),Object(b.jsx)("td",{children:t.active}),Object(b.jsx)("td",{children:t.confirmed}),Object(b.jsx)("td",{children:t.deaths})]},e+1)}))})]})})},l=r.a.memo(u);var x=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h2",{children:"Covid-19 Live Update"}),Object(b.jsx)("hr",{}),Object(b.jsx)(l,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"\xa9 Saurabh Maurya"})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),r(t),s(t),i(t)}))};c(18);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.e1910009.chunk.js.map