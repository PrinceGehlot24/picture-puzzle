(this["webpackJsonppicture-puzzle"]=this["webpackJsonppicture-puzzle"]||[]).push([[0],{24:function(e,t,l){},26:function(e,t,l){},73:function(e,t,l){},77:function(e,t,l){"use strict";l.r(t);var a=l(0),s=l.n(a),i=l(52),n=l.n(i),c=(l(73),l(24),l(5)),r=l(11),d=(l(26),l(1));var b=function(e){var t=e.setIsOpen,l=e.moveCount,a=(e.handleRestartClick,e.setMoveCount),s=e.isStarted,i=(e.setIsStarted,e.data),n=e.images,c=e.setImages,b=e.dragItem,j=e.dragOverItem,o=e.dragStart,u=function(e){var s=Object(r.a)(n),d=s[0][b.current],o=Object(r.a)(i[1]),u=Object(r.a)(i[0]);"blank"==s[1][j.current].cls&&s[0].splice(b.current,1),"0"==j.current&&"blank"==s[1][j.current].cls&&s[1].splice(0,1,d)&&s[0].splice(b.current,0,o[0])&&a(l+1),j.current&&"blank"==s[1][j.current].cls&&s[1].splice(j.current,1,d)&&s[0].splice(b.current,0,o[0])&&a(l+1),b.current=null,j.current=null,c(s),console.log("hhhhhhhi"),JSON.stringify(s[1])===JSON.stringify(u)&&t(!0)};return Object(d.jsx)("div",{className:"tile-main ",children:s?n[0]&&n[0].map((function(e,t){return Object(d.jsx)("div",{className:e.cls,id:e.id,onDragStart:function(e){return o(e,t)},onDragOver:function(e){return e.preventDefault()},onDragEnd:u,draggable:"blank"!=e.id},t)})):n[0]&&n[0].map((function(e,t){return Object(d.jsx)("div",{className:e.cls,id:e.id},t)}))})};var j=function(e){var t=e.setIsOpen,l=e.moveCount,a=(e.handleRestartClick,e.isPlayerWin,e.setIsPlayerWin,e.isStarted),s=(e.setIsStarted,e.setMoveCount),i=e.images,n=e.data,c=e.setImages,b=e.dragItem,j=e.dragOverItem,o=e.dragStart,u=e.dragEnter,O=function(e){var a=Object(r.a)(i[1]),d=Object(r.a)(n[0]),o=a[b.current],u=a[j.current];a.splice(b.current,1,u),a.splice(j.current,1,o),b.current=null,j.current=null,c(Object.values({0:i[0],1:a})),s(l+1),JSON.stringify(a)===JSON.stringify(d)&&t(!0)};return Object(d.jsx)("div",{className:"tile-main",children:a&&i[1]&&i[1].map((function(e,t){return Object(d.jsx)("div",{className:e.cls,id:e.id,onDragEnter:function(e){return u(e,t)},onDragOver:function(e){return e.preventDefault()},onDragStart:function(e){return o(e,t)},onDragEnd:O,draggable:"blank"!=e.id},t)}))})},o=l(82),u=l(110),O=l(109),v=l(114),m=l(112),h=l(113),k=l(108);var g=function(e){var t=e.isOpen,l=e.handleRestartClick,a=(e.setIsOpen,e.moveCount),s=e.level,i=e.setLevel,n=e.handleLevel;return Object(d.jsx)("div",{children:5!==s?Object(d.jsx)(O.a,{open:t,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:Object(d.jsxs)("div",{className:"dialog-main",children:[Object(d.jsx)(k.a,{className:"content",id:"alert-dialog-title",children:"You Win !!"}),Object(d.jsx)(m.a,{children:Object(d.jsxs)(h.a,{className:"content",id:"alert-dialog-description",children:["You end this puzzle with ",a," Moves ."]})}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(u.a,{className:"btn",onClick:l,children:"Try Again"}),Object(d.jsx)(u.a,{className:"btn",onClick:n,autoFocus:!0,children:"Next Level"})]})]})}):Object(d.jsx)(O.a,{open:t,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:Object(d.jsxs)("div",{className:"dialog-main",children:[Object(d.jsx)(k.a,{className:"content",id:"alert-dialog-title",children:"You Cleared all levels . Congratulations !!"}),Object(d.jsx)(m.a,{children:Object(d.jsxs)(h.a,{className:"content",id:"alert-dialog-description",children:["You end this puzzle with ",a," Moves ."]})}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(u.a,{className:"btn",onClick:l,children:"Try Again"}),Object(d.jsx)(u.a,{className:"btn",onClick:function(){return i(1)},autoFocus:!0,children:"Home Page"})]})]})})})};var x=function(e){var t=e.level,l=e.handleLevel,s=[[{cls:"tile",id:"tile0"},{cls:"tile",id:"tile1"},{cls:"tile",id:"tile2"},{cls:"tile",id:"tile3"},{cls:"tile",id:"tile4"},{cls:"tile",id:"tile5"}],[{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"}]],i=Object(a.useState)(s),n=Object(c.a)(i,2),O=n[0],v=n[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),k=h[0],x=h[1],f=function(){var e=w(Object(r.a)(O[0]));v(Object.values({0:e,1:O[1]}))},N=function(){v(s)},I=function(){x(!1),z(!1),N(),F(!1)},p=Object(a.useState)(0),S=Object(c.a)(p,2),C=S[0],y=S[1],P=Object(a.useState)(!1),L=Object(c.a)(P,2),R=L[0],z=L[1],M=Object(a.useState)(!1),W=Object(c.a)(M,2),E=W[0],F=W[1],D=Object(a.useRef)(),T=Object(a.useRef)(),B=function(e,t){D.current=t,console.log(D.current,"position")},J=function(e,t){T.current=t},w=function(e){for(var t,l,a=e.length;a>0;)l=Math.floor(Math.random()*a),t=e[--a],e[a]=e[l],e[l]=t;return e};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsx)("div",{className:"heading part1",children:Object(d.jsx)(o.a,{id:"title",className:"headingTitle",variant:"h4",gutterBottom:!0,children:"Picture Puzzle"})}),Object(d.jsxs)("div",{className:"heading part2",children:[k?Object(d.jsxs)("label",{children:["Moves: ",C]}):Object(d.jsx)("label",{children:"Level - 1"}),console.log(E,"outside")]})]}),Object(d.jsxs)("div",{className:"main-body tile-image-l1",children:[Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(b,{handleClear:N,handleShuffle:f,moveCount:C,setMoveCount:y,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:D,dragOverItem:T,dragStart:B,dragEnter:J,isPlayerWin:R,setIsPlayerWin:z,handleRestartClick:I,isOpen:E,setIsOpen:F})}),Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(j,{moveCount:C,setMoveCount:y,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:D,dragOverItem:T,dragStart:B,dragEnter:J,isPlayerWin:R,setIsPlayerWin:z,handleRestartClick:I,isOpen:E,setIsOpen:F})}),E&&Object(d.jsx)(g,{level:t,handleLevel:l,isOpen:E,setIsOpen:F,moveCount:C,handleRestartClick:I})]}),Object(d.jsx)("div",{className:"main-footer",children:Object(d.jsxs)("div",{className:"btn-div",children:[k?Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"error",onClick:function(){return I()},children:"Reset"}):Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return x(!0),f(),void y(0)},children:"Start"}),!k&&Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:l,children:"Next"})]})})]})};var f=function(e){var t=e.level,l=(e.setLevel,e.handleLevel),s=[[{cls:"tile",id:"tile0"},{cls:"tile",id:"tile1"},{cls:"tile",id:"tile2"},{cls:"tile",id:"tile3"},{cls:"tile",id:"tile4"},{cls:"tile",id:"tile5"},{cls:"tile",id:"tile6"},{cls:"tile",id:"tile7"}],[{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"}]],i=Object(a.useState)(s),n=Object(c.a)(i,2),O=n[0],v=n[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),k=h[0],x=h[1],f=Object(a.useState)(0),N=Object(c.a)(f,2),I=N[0],p=N[1],S=Object(a.useState)(!1),C=Object(c.a)(S,2),y=C[0],P=C[1],L=Object(a.useState)(!1),R=Object(c.a)(L,2),z=R[0],M=R[1],W=Object(a.useRef)(),E=Object(a.useRef)(),F=function(e,t){W.current=t},D=function(e,t){E.current=t},T=function(){x(!0),function(){var e=J(Object(r.a)(O[0]));v(Object.values({0:e,1:O[1]}))}(),p(0)},B=function(){x(!1),P(!1),v(s),M(!1)},J=function(e){for(var t,l,a=e.length;a>0;)l=Math.floor(Math.random()*a),t=e[--a],e[a]=e[l],e[l]=t;return e};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsx)("div",{className:"heading part1",children:Object(d.jsx)(o.a,{id:"title",className:"headingTitle",variant:"h4",gutterBottom:!0,children:"Picture Puzzle"})}),Object(d.jsxs)("div",{className:"heading part2",children:[k?Object(d.jsxs)("label",{children:["Moves: ",I]}):Object(d.jsx)("label",{children:"Level - 2"}),console.log(z,"outside")]})]}),Object(d.jsxs)("div",{className:"main-body tile-image-l2",children:[Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(b,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(j,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),z&&Object(d.jsx)(g,{level:t,handleLevel:l,isOpen:z,setIsOpen:M,moveCount:I,handleRestartClick:B})]}),Object(d.jsx)("div",{className:"main-footer",children:Object(d.jsxs)("div",{className:"btn-div",children:[k?Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"error",onClick:function(){return B()},children:"Reset"}):Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return T()},children:"Start"}),!k&&Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:l,children:"Next"})]})})]})};var N=function(e){var t=e.level,l=e.handleLevel,s=[[{cls:"tile",id:"tile0"},{cls:"tile",id:"tile1"},{cls:"tile",id:"tile2"},{cls:"tile",id:"tile3"},{cls:"tile",id:"tile4"},{cls:"tile",id:"tile5"},{cls:"tile",id:"tile6"},{cls:"tile",id:"tile7"},{cls:"tile",id:"tile8"}],[{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"}]],i=Object(a.useState)(s),n=Object(c.a)(i,2),O=n[0],v=n[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),k=h[0],x=h[1],f=Object(a.useState)(0),N=Object(c.a)(f,2),I=N[0],p=N[1],S=Object(a.useState)(!1),C=Object(c.a)(S,2),y=C[0],P=C[1],L=Object(a.useState)(!1),R=Object(c.a)(L,2),z=R[0],M=R[1],W=Object(a.useRef)(),E=Object(a.useRef)(),F=function(e,t){W.current=t},D=function(e,t){E.current=t},T=function(){x(!0),function(){var e=J(Object(r.a)(O[0]));v(Object.values({0:e,1:O[1]}))}(),p(0)},B=function(){x(!1),P(!1),v(s),M(!1)},J=function(e){for(var t,l,a=e.length;a>0;)l=Math.floor(Math.random()*a),t=e[--a],e[a]=e[l],e[l]=t;return e};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsx)("div",{className:"heading part1",children:Object(d.jsx)(o.a,{id:"title",className:"headingTitle",variant:"h4",gutterBottom:!0,children:"Picture Puzzle"})}),Object(d.jsxs)("div",{className:"heading part2",children:[k?Object(d.jsxs)("label",{children:["Moves: ",I]}):Object(d.jsx)("label",{children:"Level - 3"}),console.log(z,"outside")]})]}),Object(d.jsxs)("div",{className:"main-body tile-image-l3",children:[Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(b,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(j,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),z&&Object(d.jsx)(g,{level:t,handleLevel:l,isOpen:z,setIsOpen:M,moveCount:I,handleRestartClick:B})]}),Object(d.jsx)("div",{className:"main-footer",children:Object(d.jsxs)("div",{className:"btn-div",children:[k?Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"error",onClick:function(){return B()},children:"Reset"}):Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return T()},children:"Start"}),!k&&Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:l,children:"Next"})]})})]})};var I=function(e){var t=e.level,l=(e.setLevel,e.handleLevel),s=[[{cls:"tile",id:"tile0"},{cls:"tile",id:"tile1"},{cls:"tile",id:"tile2"},{cls:"tile",id:"tile3"},{cls:"tile",id:"tile4"},{cls:"tile",id:"tile5"},{cls:"tile",id:"tile6"},{cls:"tile",id:"tile7"},{cls:"tile",id:"tile8"},{cls:"tile",id:"tile9"},{cls:"tile",id:"tile10"},{cls:"tile",id:"tile11"},{cls:"tile",id:"tile12"},{cls:"tile",id:"tile13"},{cls:"tile",id:"tile14"},{cls:"tile",id:"tile15"}],[{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"}]],i=Object(a.useState)(s),n=Object(c.a)(i,2),O=n[0],v=n[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),k=h[0],x=h[1],f=Object(a.useState)(0),N=Object(c.a)(f,2),I=N[0],p=N[1],S=Object(a.useState)(!1),C=Object(c.a)(S,2),y=C[0],P=C[1],L=Object(a.useState)(!1),R=Object(c.a)(L,2),z=R[0],M=R[1],W=Object(a.useRef)(),E=Object(a.useRef)(),F=function(e,t){W.current=t},D=function(e,t){E.current=t},T=function(){x(!0),function(){var e=J(Object(r.a)(O[0]));v(Object.values({0:e,1:O[1]}))}(),p(0)},B=function(){x(!1),P(!1),v(s),M(!1)},J=function(e){for(var t,l,a=e.length;a>0;)l=Math.floor(Math.random()*a),t=e[--a],e[a]=e[l],e[l]=t;return e};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsx)("div",{className:"heading part1",children:Object(d.jsx)(o.a,{id:"title",className:"headingTitle",variant:"h4",gutterBottom:!0,children:"Picture Puzzle"})}),Object(d.jsx)("div",{className:"heading part2",children:k?Object(d.jsxs)("label",{children:["Moves: ",I]}):Object(d.jsx)("label",{children:"Level - 4"})})]}),Object(d.jsxs)("div",{className:"main-body tile-image-l4",children:[Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(b,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(j,{moveCount:I,setMoveCount:p,isStarted:k,setIsStarted:x,data:s,images:O,setImages:v,dragItem:W,dragOverItem:E,dragStart:F,dragEnter:D,isPlayerWin:y,setIsPlayerWin:P,handleRestartClick:B,isOpen:z,setIsOpen:M})}),z&&Object(d.jsx)(g,{level:t,handleLevel:l,isOpen:z,setIsOpen:M,moveCount:I,handleRestartClick:B})]}),Object(d.jsx)("div",{className:"main-footer",children:Object(d.jsxs)("div",{className:"btn-div",children:[k?Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"error",onClick:function(){return B()},children:"Reset"}):Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return T()},children:"Start"}),!k&&Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:l,children:"Next"})]})})]})};var p=function(e){var t=e.level,l=e.setLevel,s=e.handleLevel,i=[[{cls:"tile",id:"tile0"},{cls:"tile",id:"tile1"},{cls:"tile",id:"tile2"},{cls:"tile",id:"tile3"},{cls:"tile",id:"tile4"},{cls:"tile",id:"tile5"},{cls:"tile",id:"tile6"},{cls:"tile",id:"tile7"},{cls:"tile",id:"tile8"},{cls:"tile",id:"tile9"},{cls:"tile",id:"tile10"},{cls:"tile",id:"tile11"},{cls:"tile",id:"tile12"},{cls:"tile",id:"tile13"},{cls:"tile",id:"tile14"},{cls:"tile",id:"tile15"},{cls:"tile",id:"tile16"},{cls:"tile",id:"tile17"},{cls:"tile",id:"tile18"},{cls:"tile",id:"tile19"},{cls:"tile",id:"tile20"},{cls:"tile",id:"tile21"},{cls:"tile",id:"tile22"},{cls:"tile",id:"tile23"},{cls:"tile",id:"tile24"}],[{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"},{cls:"blank",id:"blank"}]],n=Object(a.useState)(i),O=Object(c.a)(n,2),v=O[0],m=O[1],h=Object(a.useState)(!1),k=Object(c.a)(h,2),x=k[0],f=k[1],N=Object(a.useState)(0),I=Object(c.a)(N,2),p=I[0],S=I[1],C=Object(a.useState)(!1),y=Object(c.a)(C,2),P=y[0],L=y[1],R=Object(a.useState)(!1),z=Object(c.a)(R,2),M=z[0],W=z[1],E=Object(a.useRef)(),F=Object(a.useRef)(),D=function(e,t){E.current=t},T=function(e,t){F.current=t},B=function(){f(!0),function(){var e=w(Object(r.a)(v[0]));m(Object.values({0:e,1:v[1]}))}(),S(0)},J=function(){f(!1),L(!1),m(i),W(!1)},w=function(e){for(var t,l,a=e.length;a>0;)l=Math.floor(Math.random()*a),t=e[--a],e[a]=e[l],e[l]=t;return e};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsx)("div",{className:"heading part1",children:Object(d.jsx)(o.a,{id:"title",className:"headingTitle",variant:"h4",gutterBottom:!0,children:"Picture Puzzle"})}),Object(d.jsx)("div",{className:"heading part2",children:x?Object(d.jsxs)("label",{children:["Moves: ",p]}):Object(d.jsx)("label",{children:"Level - 5"})})]}),Object(d.jsxs)("div",{className:"main-body tile-image-l5",children:[Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(b,{moveCount:p,setMoveCount:S,isStarted:x,setIsStarted:f,data:i,images:v,setImages:m,dragItem:E,dragOverItem:F,dragStart:D,dragEnter:T,isPlayerWin:P,setIsPlayerWin:L,handleRestartClick:J,isOpen:M,setIsOpen:W})}),Object(d.jsx)("div",{className:"submain",children:Object(d.jsx)(j,{moveCount:p,setMoveCount:S,isStarted:x,setIsStarted:f,data:i,images:v,setImages:m,dragItem:E,dragOverItem:F,dragStart:D,dragEnter:T,isPlayerWin:P,setIsPlayerWin:L,handleRestartClick:J,isOpen:M,setIsOpen:W})}),M&&Object(d.jsx)(g,{level:t,setLevel:l,handleRestartClick:J,handleLevel:s,isOpen:M,setIsOpen:W,moveCount:p})]}),Object(d.jsx)("div",{className:"main-footer",children:Object(d.jsxs)("div",{className:"btn-div",children:[x?Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"error",onClick:function(){return J()},children:"Reset"}):Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return B()},children:"Start"}),!x&&Object(d.jsx)(u.a,{id:"btn",className:"btn-start",size:"large",color:"success",onClick:function(){return l(1)},children:"Home"})]})})]})};var S=function(){var e=Object(a.useState)(1),t=Object(c.a)(e,2),l=t[0],s=t[1],i=function(){s(l+1)};return Object(d.jsx)("div",{className:"board-body",children:function(){switch(l){case 1:return Object(d.jsx)(x,{level:l,setLevel:s,handleLevel:i});case 2:return Object(d.jsx)(f,{level:l,setLevel:s,handleLevel:i});case 3:return Object(d.jsx)(N,{level:l,setLevel:s,handleLevel:i});case 4:return Object(d.jsx)(I,{level:l,setLevel:s,handleLevel:i});case 5:return Object(d.jsx)(p,{level:l,setLevel:s,handleLevel:i});default:return 1}}()})};var C=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(S,{})})},y=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,115)).then((function(t){var l=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;l(e),a(e),s(e),i(e),n(e)}))};n.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})})),y()}},[[77,1,2]]]);
//# sourceMappingURL=main.2f63f796.chunk.js.map