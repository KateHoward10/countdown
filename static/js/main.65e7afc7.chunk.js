(window.webpackJsonpcountdown=window.webpackJsonpcountdown||[]).push([[0],{15:function(t,e,n){t.exports=n(27)},20:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),o=(n(20),n(4)),v=n(3),h=n(10);function l(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=t}),[t]),Object(r.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){clearInterval(t)}}}),[e])}function u(t){var e=Object(r.useRef)();return Object(r.useEffect)((function(){e.current=t})),e.current}var m=n(1),f=n(2);function s(){var t=Object(m.a)(["\n\tfont-size: 20px;\n\tfont-family: cursive;\n\tmargin: 0 10px;\n"]);return s=function(){return t},t}function d(){var t=Object(m.a)(["\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 50%;\n\tposition: absolute;\n\ttop: 45px;\n\tleft: 45px;\n\tbackground-color: blue;\n"]);return d=function(){return t},t}function b(){var t=Object(m.a)(["\n\twidth: 1px;\n\theight: 100px;\n\tbackground-image: linear-gradient(lightgrey 15%, #f7f6c8 15% 85%, lightgrey 85%);\n\tposition: absolute;\n\ttop: 0;\n\tleft: 49.5px;\n\ttransform: rotate(","deg);\n"]);return b=function(){return t},t}function p(){var t=Object(m.a)(["\n\twidth: ","px;\n\theight: ","px;\n\tbackground-color: lightgrey;\n\tposition: absolute;\n\ttop: ","px;\n\tleft: ","px;\n"]);return p=function(){return t},t}function g(){var t=Object(m.a)(["\n\twidth: 4px;\n\theight: 45px;\n\tbackground-color: blue;\n\tposition: absolute;\n\ttransform-origin: 50% 100%;\n\ttransform: translate(48px, 5px) rotate(","deg);\n"]);return g=function(){return t},t}function x(){var t=Object(m.a)(["\n\twidth: 100px;\n\theight: 100px;\n\tmargin: 0 10px;\n\tborder-radius: 50%;\n\tborder: 2px solid blue;\n\tbox-shadow: 0 0 10px grey;\n\tbackground-color: #f7f6c8;\n\tposition: relative;\n"]);return x=function(){return t},t}function z(){var t=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n"]);return z=function(){return t},t}var j=f.a.div(z()),E=f.a.div(x()),O=f.a.div(g(),(function(t){return t.degrees})),w=f.a.div(p(),(function(t){return t.across?100:2}),(function(t){return t.across?2:100}),(function(t){return t.across?49:0}),(function(t){return t.across?0:49})),y=f.a.div(b(),(function(t){return t.angle})),k=f.a.div(d()),C=f.a.span(s());var S=function(t){return a.a.createElement(j,null,a.a.createElement(E,null,a.a.createElement(w,null),a.a.createElement(w,{across:!0}),[30,60,120,150].map((function(t,e){return a.a.createElement(y,{key:e,angle:t})})),a.a.createElement(O,t),a.a.createElement(k,null)),a.a.createElement(C,null,a.a.createElement("p",null,"Score:"),a.a.createElement("p",null,t.score)))};function V(){var t=Object(m.a)(["\n\tbackground-color: ",";\n\tcolor: white;\n\tfont-size: 20px;\n\tborder: 2px solid grey;\n\tborder-bottom-color: lightgrey;\n\tborder-right-color: lightgrey;\n\twidth: 50px;\n\theight: 50px;\n\tmargin-top: 5px;\n\ttext-align: center;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 6vw;\n\t\twidth: 15vw;\n\t\theight: 15vw;\n\t}\n"]);return V=function(){return t},t}var H=f.a.button(V(),(function(t){return""===t.value?"#50c9eb":"rgba(0, 0, 255, ".concat(t.disabled?.3:1,")")}));var M=function(t){return a.a.createElement(H,t,t.value)};function _(){var t=Object(m.a)(["\n\tfont-size: 20px;\n\ttext-align: center;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 5px;\n\tbox-shadow: 0 0 5px grey;\n\tbackground-color: white;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tpadding: 2px;\n\tmargin: 8px;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 6vw;\n\t}\n"]);return _=function(){return t},t}var A=f.a.button(_());var B=function(t){return a.a.createElement(A,t,t.children)};function I(){var t=Object(m.a)(["\n\tcolor: yellow;\n\tfont-family: Pixel, Arial, Verdana, sans-serif;\n\tfont-size: 30px;\n\tpadding-top: 5px;\n"]);return I=function(){return t},t}function N(){var t=Object(m.a)(["\n\tbackground-color: black;\n\tpadding: 5px 10px;\n\tpadding-top: 10px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 5px;\n"]);return N=function(){return t},t}function R(){var t=Object(m.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return R=function(){return t},t}var T=f.a.div(R()),D=f.a.div(N()),J=f.a.span(I());var P=function(t){var e=t.target,n=t.toggleCountingDown,c=t.setTarget,i=Object(r.useState)(!1),o=Object(v.a)(i,2),h=o[0],u=o[1],m=Object(r.useState)(0),f=Object(v.a)(m,2),s=f[0],d=f[1];return l((function(){"number"===typeof e&&(s<10?(c(Math.ceil(899*Math.random())+100),d(s+1)):(c(e),u(!1),n(!0),d(0)))}),h?80:null),Object(r.useEffect)((function(){u(!0)}),[e]),a.a.createElement(T,null,a.a.createElement(D,null,a.a.createElement(J,null,e)))};function W(){var t=Object(m.a)(["\n\theight: 35vh;\n\tpadding: 10px;\n\tborder: 2px solid grey;\n\tfont-size: 24px;\n\tfont-family: cursive;\n\ttext-align: center;\n\tposition: relative;\n\tdisplay: flex;\n\tmin-width: 400px;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #ffffff;\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23cfced1' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n\t@media screen and (max-width: 600px) {\n\t\tmin-width: 90vw;\n\t}\n"]);return W=function(){return t},t}var G=f.a.div(W());var L=function(t){var e=t.children;return a.a.createElement(G,null,e)};function $(){var t=Object(m.a)(["\n\twidth: 2px;\n\theight: 20px;\n\tbackground-color: black;\n\tdisplay: inline-block;\n\tvisibility: ",";\n"]);return $=function(){return t},t}var q=f.a.div($(),(function(t){return t.visible?"visible":"hidden"}));var F=function(){var t=Object(r.useState)(!0),e=Object(v.a)(t,2),n=e[0],c=e[1];return l((function(){c(!n)}),800),a.a.createElement(q,{visible:n})};function K(){var t=Object(m.a)(["\n\tfont-size: 20px;\n\tborder-radius: 5px;\n\tborder: 1px solid lightgrey;\n\tbox-shadow: 0 0 5px grey;\n\tmargin: 2px;\n\tcolor: white;\n\tbackground-color: blue;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 5vw;\n\t}\n"]);return K=function(){return t},t}function Q(){var t=Object(m.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"]);return Q=function(){return t},t}var U=f.a.div(Q()),X=f.a.button(K());var Y=function(t){var e=t.prev,n=t.next,r=t.backspace,c=t.clearAll;return a.a.createElement(U,null,a.a.createElement("div",null,a.a.createElement(X,{onClick:e},"\u2190"),a.a.createElement(X,{onClick:n},"\u2192")),a.a.createElement("div",null,a.a.createElement(X,{onClick:r},"Backspace"),a.a.createElement(X,{onClick:c},"CLEAR")))};n(26);var Z=function(){var t=Object(r.useState)(1),e=Object(v.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)("___"),m=Object(v.a)(i,2),f=m[0],s=m[1],d=Object(r.useState)(["","","","","",""]),b=Object(v.a)(d,2),p=b[0],g=b[1],x=Object(r.useState)(0),z=Object(v.a)(x,2),j=z[0],E=z[1],O=Object(r.useState)(!1),w=Object(v.a)(O,2),y=w[0],k=w[1],C=Object(r.useState)([]),V=Object(v.a)(C,2),H=V[0],_=V[1],A=Object(r.useState)(null),I=Object(v.a)(A,2),N=I[0],R=I[1],T=Object(r.useState)([]),D=Object(v.a)(T,2),J=D[0],W=D[1],G=Object(r.useState)(!1),$=Object(v.a)(G,2),q=$[0],K=$[1],Q=Object(r.useState)(0),U=Object(v.a)(Q,2),X=U[0],Z=U[1],tt=Object(r.useState)(null),et=Object(v.a)(tt,2),nt=et[0],rt=et[1],at=Object(r.useState)(0),ct=Object(v.a)(at,2),it=ct[0],ot=ct[1],vt=Object(r.useState)(0),ht=Object(v.a)(vt,2),lt=ht[0],ut=ht[1],mt=Object(r.useState)(0),ft=Object(v.a)(mt,2),st=ft[0],dt=ft[1],bt=u(H),pt=u(N);function gt(t,e){"("!==t&&")"!==t&&"("!==H[H.length-it-1]&&")"!==H[H.length-it-1]&&typeof t===typeof H[H.length-it-1]||(_([].concat(Object(o.a)(H.slice(0,H.length-it)),[t],Object(o.a)(H.slice(H.length-it)))),void 0!==e&&W([].concat(Object(o.a)(J),[e])))}return l((function(){var t,e=p;j<6?(t=j<n?25*Math.ceil(4*Math.random()):Math.ceil(10*Math.random()),e[j]=t,g(e),E(j+1)):(k(!1),s(Math.ceil(899*Math.random())+100))}),y?300:null),l((function(){X<180?Z(X+3):(K(!1),rt("Time's up! ".concat(Math.abs(f-N)," away")))}),q?500:null),Object(r.useEffect)((function(){if(bt!==H){var t=H.join("").replace(/\xd7/g,"*").replace(/\xf7/g,"/"),e=(new h.Parser).parse(t);e.error||R(e.result)}}),[H,bt]),Object(r.useEffect)((function(){pt!==N&&X<180&&f===N&&(K(!1),rt("Solved in ".concat(X/6," seconds")),ut(lt+1))}),[f,pt,N,X,lt]),a.a.createElement("div",{className:"App"},a.a.createElement(S,{degrees:X,score:"".concat(lt," / ").concat(st)}),a.a.createElement("div",{className:"controls-container"},a.a.createElement("select",{onChange:function(t){return c(t.target.value)}},a.a.createElement("option",{value:1},"1 large"),a.a.createElement("option",{value:2},"2 large"),a.a.createElement("option",{value:3},"3 large"),a.a.createElement("option",{value:4},"4 large")),a.a.createElement(B,{onClick:function(){s("___"),g(["","","","","",""]),E(0),_([]),R(null),W([]),Z(0),rt(null),ot(0),k(!0),dt(st+1)}},"Get numbers!")),a.a.createElement(P,{target:f,toggleCountingDown:K,setTarget:s}),a.a.createElement("div",{className:"numbers-container"},p.map((function(t,e){return a.a.createElement(M,{key:e,value:t,disabled:J.includes(e),onClick:function(){return gt(t,e)}})}))),a.a.createElement("div",null,["+","-","\xd7","\xf7","(",")"].map((function(t,e){return a.a.createElement(B,{key:e,onClick:function(){return gt(t)}},t)}))),a.a.createElement(Y,{prev:function(){return ot(it+1<=H.length?it+1:it)},next:function(){return ot(it>0?it-1:it)},backspace:function(){if("number"===typeof H[H.length-1-it]){var t=H[H.length-it-1],e=J.findIndex((function(e){return p[e]===t}));W(J.filter((function(t,n){return n!==e})))}_(H.filter((function(t,e){return e!==H.length-it-1})))},clearAll:function(){_([]),W([]),rt(null),ot(0)}}),a.a.createElement(L,null,a.a.createElement("span",null,H.map((function(t,e){return a.a.createElement("span",{key:e},H.length===it&&0===e&&a.a.createElement(F,null),t,H.length-it-1===e&&a.a.createElement(F,null))}))),a.a.createElement("p",null,a.a.createElement("strong",null,N)),a.a.createElement("h3",null,nt)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.65e7afc7.chunk.js.map