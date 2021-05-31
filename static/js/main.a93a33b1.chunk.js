(this.webpackJsonpalgo_visualizer=this.webpackJsonpalgo_visualizer||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(9),r=n.n(c),s=(n(67),n(14)),u=n(15),o=(n(68),n(69),n(110)),l=n(111),d=n(109),h=n(113),j=(n(70),n(112)),f=n(4),b=function(e){var t=e.isRunning,n=e.handleSpeedChange,a=e.handleSizeChange;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsxs)("div",{className:"sliders__container",children:[Object(f.jsx)("p",{children:"Speed:"}),Object(f.jsx)("div",{className:"sliders__wrapper",children:Object(f.jsx)(j.a,{disabled:t,defaultValue:50,step:1,min:1,max:100,onChange:n,valueLabelDisplay:"auto",className:""})})]}),Object(f.jsxs)("div",{className:"sliders__container",children:[Object(f.jsx)("p",{children:"Size:"}),Object(f.jsx)("div",{className:"sliders__wrapper",children:Object(f.jsx)(j.a,{disabled:t,defaultValue:25,step:1,min:1,max:100,onChange:a,valueLabelDisplay:"auto",className:""})})]})]})},O=n(54),p=n.n(O),v=n(56),m=n.n(v),g=n(55),S=n.n(g),x=function(e){var t=e.isRunning,n=e.handleStart,i=e.handleStop,c=e.handleShuffle,r=e.algorithm,s=e.setAlgorithm,j=e.handleSizeChange,O=e.handleSpeedChange,v=Object(a.useState)(!1),g=Object(u.a)(v,2),x=g[0],_=g[1];return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsxs)("div",{className:"header__logo-container",children:[Object(f.jsx)(p.a,{className:"header__algo-icon"}),Object(f.jsxs)("h1",{className:"header__title",children:["Algorithm",Object(f.jsx)("br",{})," Visualizer"]})]}),Object(f.jsxs)("form",{className:"header__actions ".concat(x?"header__actions--visible":""),children:[Object(f.jsxs)("div",{className:"header__menu-heading",children:[Object(f.jsx)("span",{className:"header__menu-title",children:"Menu"}),Object(f.jsx)(d.a,{onClick:function(){return _(!1)},className:"header__menu-button",children:Object(f.jsx)(S.a,{})})]}),Object(f.jsxs)(l.a,{value:r,onChange:function(e){s(e.target.value)},className:"header__algo-selection",disabled:t,children:[Object(f.jsx)(h.a,{value:"bubble",children:"BubbleSort"}),Object(f.jsx)(h.a,{value:"insertion",children:"InsertionSort"}),Object(f.jsx)(h.a,{value:"selection",children:"SelectionSort"}),Object(f.jsx)(h.a,{value:"merge",children:"MergeSort"}),Object(f.jsx)(h.a,{value:"quick",children:"QuickSort"})]}),Object(f.jsx)(b,{isRunning:t,handleSizeChange:j,handleSpeedChange:O}),Object(f.jsx)(o.a,{variant:"outlined",onClick:c,className:"header__button",disabled:t,children:"Shuffle"}),Object(f.jsx)(o.a,{variant:"outlined",onClick:t?i:n,className:"header__button",children:t?"Stop":"Start"})]}),Object(f.jsx)(d.a,{onClick:function(){return _(!0)},className:"header__menu-button",children:Object(f.jsx)(m.a,{fontSize:"large"})})]})},_=(n(76),n(77),function(e){var t=e.value,n=e.isSelected,a=e.height,i=e.width,c=e.margin,r=e.speed,s=e.textSize,u=n?"array-item--selected":"";return Object(f.jsx)("div",{className:"array-item ".concat(u),style:{width:i,margin:"0 ".concat(c/2,"px"),height:"".concat(a,"%"),transitionDuration:"".concat(r,"ms")},children:Object(f.jsx)("span",{className:"array-item__text",style:{fontSize:"".concat(s,"px"),bottom:"-".concat(s+10,"px")},children:t})})}),w=function(e){var t=Math.max((window.innerWidth-50)/e,3);return{width:.75*t,margin:.25*t}},N=function(e){var t=e.array,n=e.selected,i=e.speed,c=Object(a.useState)(window.innerWidth),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)((function(){return w(t.length)})),d=Object(u.a)(l,2),h=d[0],j=d[1];Object(a.useEffect)((function(){window.addEventListener("resize",(function(){return o(window.innerWidth)}))}),[]);var b=Object(a.useCallback)((function(){j(w(t.length))}),[t.length]);Object(a.useEffect)((function(){b()}),[s,b]);var O=Object(a.useMemo)((function(){var e=Math.min(.75*h.width,35);return console.log(e),e>=8?e:0}),[h.width]);return Object(f.jsx)("div",{className:"array-container",children:t.map((function(e,a){return Object(f.jsx)(_,{speed:i,textSize:O,height:100/t.length*e,width:h.width,margin:h.margin,value:e,isSelected:n.includes(a)},a)}))})},C=function(e,t,n){var a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]},z=function(e){return Array.from({length:e}).map((function(e,t){return t+1})).sort((function(){return Math.random()-.5}))},y=function(e){return 5*(101-e)},k=function e(t,n,a,i){if(!(n>=a)){var c=Math.floor((n+a)/2);e(t,n,c,i),e(t,c+1,a,i),function(e,t,n,a,i){for(var c=[],r=t,s=n+1;r<=n&&s<=a;){i.push({first:r,second:s,isSwap:!1});var u=e[r]<=e[s];c.push(u?e[r++]:e[s++])}for(;r<=n;)i.push({first:r,second:r,isSwap:!1}),c.push(e[r++]);for(;s<=a;)i.push({first:s,second:s,isSwap:!1}),c.push(e[s++]);for(var o=t;o<=a;o++){var l=c[o-t];i.push({first:o,second:o,isSwap:!1,override:{index:o,value:l}}),e[o]=l}}(t,n,c,a,i)}},M=function(e){var t=Object(s.a)(e),n=[];return k(t,0,t.length-1,n),n},E=function e(t,n,a,i){if(!(n>=a)){var c=function(e,t,n,a){for(var i=e[t],c=t,r=n;c<r;){for(;e[c]<=i;)a.push({first:c,second:r,isSwap:!1}),c++;for(;e[r]>i;)a.push({first:c,second:r,isSwap:!1}),r--;c<r&&(a.push({first:c,second:r,isSwap:!0}),C(e,c,r))}return a.push({first:t,second:r,isSwap:!0}),C(e,t,r),r}(t,n,a,i);e(t,n,c-1,i),e(t,c+1,a,i)}},L=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(25),r=Object(u.a)(c,2),o=r[0],l=r[1],d=Object(a.useState)(z(o)),h=Object(u.a)(d,2),j=h[0],b=h[1],O=Object(a.useState)([]),p=Object(u.a)(O,2),v=p[0],m=p[1],g=Object(a.useState)(y(50)),S=Object(u.a)(g,2),_=S[0],w=S[1],k=Object(a.useState)("bubble"),L=Object(u.a)(k,2),R=L[0],A=L[1],D=Object(a.useRef)(null);Object(a.useEffect)((function(){b(z(o))}),[o]);var F=function e(t,n){if(n>=t.length)return m([]),void i(!1);var a=t[n],c=a.isSwap,r=a.first,u=a.second,o=a.override;m([r,u]),c&&b((function(e){var t=Object(s.a)(e);return C(t,r,u),t})),o&&b((function(e){var t=Object(s.a)(e),n=o.index,a=o.value;return t[n]=a,t})),D.current=setTimeout((function(){return e(t,n+1)}),_)};Object(a.useEffect)((function(){}),[n]);return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(x,{isRunning:n,handleStart:function(){i(!0);var e="bubble"===R?function(e){for(var t=Object(s.a)(e),n=[],a=t.length;;){for(var i=!1,c=1;c<a;c++)n.push({first:c-1,second:c,isSwap:!1}),t[c-1]>t[c]&&(C(t,c-1,c),n.push({first:c-1,second:c,isSwap:!0}),i=!0);if(a--,!i)return n}}(j):"selection"===R?function(e){for(var t=Object(s.a)(e),n=[],a=0;a<t.length;a++){for(var i=a,c=a;c<t.length;c++)n.push({first:a,second:c,isSwap:!1}),t[i]>t[c]&&(i=c);n.push({first:i,second:a,isSwap:!0}),C(t,i,a)}return n}(j):"insertion"===R?function(e){var t,n,a,i=Object(s.a)(e),c=[];for(t=1;t<i.length;t++){for(n=i[t],a=t-1,c.push({first:a,second:t,isSwap:!1});a>=0&&i[a]>n;)c.push({first:a,second:a+1,isSwap:!1}),c.push({first:a,second:a+1,isSwap:!0}),i[a+1]=i[a],a-=1;i[a+1]=n}return c}(j):"merge"===R?M(j):function(e){var t=Object(s.a)(e),n=[];return E(t,0,t.length-1,n),n}(j);F(e,0)},handleStop:function(){D.current&&(clearTimeout(D.current),i(!1),m([]))},handleShuffle:function(){b(z(o))},algorithm:R,setAlgorithm:A,handleSizeChange:function(e,t){l(t)},handleSpeedChange:function(e,t){w(y(t))}}),Object(f.jsx)(N,{array:j,selected:v,speed:_})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),R()}},[[78,1,2]]]);
//# sourceMappingURL=main.a93a33b1.chunk.js.map