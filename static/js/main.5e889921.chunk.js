(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(56)},29:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),u=n.n(r),o=(n(29),n(4)),l=n.n(o),i=n(6),s=n(2),p=n(20),f=n.n(p),x=c.a.createContext();function d(e){var t=e.children,n=Object(a.useState)(""),r=Object(s.a)(n,2),u=r[0],o=r[1];return console.log(u),c.a.createElement(x.Provider,{value:{useAlan:function(){var e=Object(a.useRef)(null);Object(a.useEffect)(function(){e.current||(e.current=f()({key:"6021b8d3aee085781766709cc7c80efe2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.voice&&o(t.voice);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}))},[u])},translate:u}},t)}var m=function(){return Object(a.useContext)(x)},b=n(33).default;var v=function(){var e=m(),t=e.useAlan,n=e.translate,r=Object(a.useState)([]),u=Object(s.a)(r,2),o=u[0],p=u[1],f=Object(a.useState)(""),x=Object(s.a)(f,2),d=x[0],v=x[1],g=Object(a.useState)("en"),h=Object(s.a)(g,2),j=h[0],E=h[1],O=Object(a.useState)("en"),w=Object(s.a)(O,2),y=w[0],C=w[1],k=function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.get("https://libretranslate.de/languages",{headers:{accept:"application/json"}}).then(function(e){p(e.data)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return t({fetchLanguages:k}),Object(a.useEffect)(function(){k()},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"From (",j,"):"," ",c.a.createElement("select",{onChange:function(e){E(e.target.value)}},o.map(function(e){return c.a.createElement("option",{value:e.code,key:e.code},e.name)})),c.a.createElement("input",{type:"text",defaultValue:n})),c.a.createElement("div",null,"To (",y,"):"," ",c.a.createElement("select",{onChange:function(e){C(e.target.value)}},o.map(function(e){return c.a.createElement("option",{value:e.code,key:e.code},e.name)})),c.a.createElement("input",{type:"text",defaultValue:d})),c.a.createElement("button",{onClick:function(){var e=new URLSearchParams;e.append("q",n),e.append("source",j),e.append("target",y),e.append("api_key","xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),b.post("https://libretranslate.de/translate",e,{headers:{accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){v(e.data.translatedText)})}},"Translate"))},g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,57)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),r(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null,c.a.createElement(v,null)))),g()}},[[21,3,2]]]);
//# sourceMappingURL=main.5e889921.chunk.js.map