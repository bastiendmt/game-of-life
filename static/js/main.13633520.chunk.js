(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(5),i=n.n(o),a=n(2),u=n(4),s=n(0),f=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],l=function(){for(var t=[],e=0;e<50;e++)t.push(Array.from(Array(50),(function(){return Math.random()>.7?1:0})));return t},j=function(){var t=Object(r.useState)((function(){return l()})),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(!1),i=Object(a.a)(o,2),j=i[0],b=i[1],d=Object(r.useRef)(j);d.current=j;var h=Object(r.useCallback)((function(){d.current&&(c((function(t){return Object(u.a)(t,(function(e){for(var n=function(n){for(var r=function(r){var c=0;f.forEach((function(e){var o=Object(a.a)(e,2),i=o[0],u=o[1],s=n+i,f=r+u;s>=0&&s<50&&f>=0&&f<50&&(c+=t[s][f])})),c<2||c>3?e[n][r]=0:0===t[n][r]&&3===c&&(e[n][r]=1)},c=0;c<50;c++)r(c)},r=0;r<50;r++)n(r)}))})),setTimeout(h,100))}),[]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("button",{onClick:function(){b(!j),j||(d.current=!0,h())},style:{backgroundColor:j?"red":"#8bc34a"},children:j?"stop":"start"}),Object(s.jsx)("button",{onClick:function(){return c(l())},children:"clear"}),Object(s.jsx)("button",{onClick:function(){c(l())},children:"random"}),Object(s.jsx)("span",{style:{marginLeft:"auto"},children:Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",children:"Rules"})})]}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(50,", 20px)")},children:n.map((function(t,e){return t.map((function(t,r){return Object(s.jsx)("div",{onClick:function(){var t=Object(u.a)(n,(function(t){t[e][r]=n[e][r]?0:1}));c(t)},style:{width:20,height:20,backgroundColor:n[e][r]?"pink":void 0,border:"solid 1px grey"}},"".concat(e,"-").concat(r))}))}))})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.13633520.chunk.js.map