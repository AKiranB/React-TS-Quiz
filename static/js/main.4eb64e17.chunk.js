(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{82:function(e,t,c){},90:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(27),o=c.n(a),i=(c(82),c(22)),s=c(23),l=c.n(s),j=c(32),u=c(10),b=c(18),d=function(){var e=Object(j.a)(l.a.mark((function e(t,c,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(n,"&difficulty=").concat(c,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return a=e.sent,e.abrupt("return",a.results.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{answers:(t=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]),Object(i.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),x=c(42),h=c(44),g=function(e){var t={"&quot;":'"',"&#039;":"'","&lt;":"<","&gt;":">","&amp;":"&"},c=new RegExp(Object.keys(t).join("|"),"gi");return e.replace(c,(function(e){return t[e]}))},O=c(4),m=function(e){return Object(O.jsx)(x.b,{children:Object(O.jsx)(x.c,Object(b.a)({marginTop:"90px",direction:"column",alignItems:"center",width:["sm","md","lg","xl"],padding:"30px",boxShadow:"rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;",backgroundColor:"#1fa6c4"},e))})},p=function(e){var t=e.question,c=e.answer,n=e.callback,r=e.userAnswer,a=e.questionNumber,o=e.totalQuestions,i=e.isCorrect,s=e.score;return Object(O.jsxs)(x.a,{children:[Object(O.jsxs)(m,{padding:"5",children:[Object(O.jsxs)(x.g,{color:"black",fontSize:["sm","md","lg"],children:["Score : ",s,Object(O.jsx)("div",{}),"Question : ",a," / ",o]}),Object(O.jsxs)(x.e,{children:[Object(O.jsx)("hr",{}),Object(O.jsx)(x.g,{fontSize:"m",children:g(t)})]})]}),Object(O.jsx)(x.c,{mt:"100px",direction:"column",justifyContent:"center",alignContent:"center",children:c.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{m:"10px",width:["sm","md","lg"],fontSize:["sm","md","lg"],colorScheme:i,disabled:r,value:e,onClick:n,children:g(e)},t)},t)}))})]})},f=c(47),w=c(26),S=c(41),v=function(e){var t=Object(w.b)().toggleColorMode,c=Object(w.c)("dark","light"),n=Object(w.c)(S.a,S.b);return Object(O.jsx)(h.b,Object(b.a)({size:"md",fontSize:"lg",defaultChecked:!0,variant:"ghost",color:"current",onClick:t,icon:Object(O.jsx)(n,{}),"aria-label":"Switch to ".concat(c," mode")},e))},y=c.p+"static/media/quiz.7db7837e.png",C=c(45),k=c(46),N=[{categoryName:"General Knowledge",categoryNumber:"9"},{categoryName:"Books",categoryNumber:"10"},{categoryName:"Film",categoryNumber:"11"},{categoryName:"Music",categoryNumber:"12"},{categoryName:"Computer Science",categoryNumber:"18"}],z=function(e){var t=e.setDifficulty,c=e.handleDropdownChange,n=N.map((function(e,t){return Object(O.jsx)("option",{value:e.categoryNumber,children:e.categoryName},t)}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(m,{children:Object(O.jsxs)(x.g,{color:"black",fontSize:["sm","md","lg","xl"],children:[Object(O.jsxs)(x.b,{mb:"20px",children:["Difficulty",Object(O.jsx)(C.b,{fontSize:["sm","md","lg","xl"],onChange:function(e){return t(e)},children:Object(O.jsxs)(x.f,{ml:"15px",direction:"row",children:[Object(O.jsx)(C.a,{value:"easy",children:"Easy"}),Object(O.jsx)(C.a,{value:"medium",children:"Medium"}),Object(O.jsx)(C.a,{value:"hard",children:"Hard"})]})})]}),Object(O.jsxs)(x.b,{children:["Category",Object(O.jsx)(k.a,{width:"200px",onChange:c,ml:"25px",fontSize:["sm","md","lg"],placeholder:"Select option",children:n})]})]})})})},q=c(48),D=10;var F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),o=Object(u.a)(a,2),s=o[0],b=o[1],g=Object(n.useState)(0),m=Object(u.a)(g,2),w=m[0],S=m[1],C=Object(n.useState)(0),k=Object(u.a)(C,2),N=k[0],F=k[1],H=Object(n.useState)([]),L=Object(u.a)(H,2),M=L[0],B=L[1],A=Object(n.useState)(!0),Q=Object(u.a)(A,2),R=Q[0],_=Q[1],T=Object(n.useState)("blue"),E=Object(u.a)(T,2),I=E[0],J=E[1],G=Object(n.useState)(""),P=Object(u.a)(G,2),V=P[0],Y=P[1],Z=Object(n.useState)(""),K=Object(u.a)(Z,2),U=K[0],W=K[1],X=Object(n.useState)(""),$=Object(u.a)(X,2),ee=$[0],te=$[1],ce=Object(n.useState)(!1),ne=Object(u.a)(ce,2),re=ne[0],ae=ne[1],oe=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),_(!1),e.next=4,d(D,V,U);case 4:t=e.sent,b(t),S(0),B([]),F(0),r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.a,{textAlign:"center",fontSize:"l",children:Object(O.jsxs)(x.d,{dir:"column",minH:"100vh",children:[Object(O.jsx)(v,{justifySelf:"flex-end"}),Object(O.jsx)(f.a,{position:"fixed",boxSize:["l"],src:y}),Object(O.jsxs)("div",{className:"App",children:[R?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{handleDropdownChange:function(e){W(e.target.value)},setDifficulty:Y}),Object(O.jsx)(h.a,{m:"30px",colorScheme:"blue",className:"start",onClick:oe,children:"Start"})]}):null,Object(O.jsxs)(x.c,{flexDir:"column",marginBottom:"20px",children:[c&&Object(O.jsx)("p",{children:"Loading Questions..."}),c||R?null:Object(O.jsx)(p,{questionNumber:N+1,totalQuestions:D,question:s[N].question,answer:s[N].answers,userAnswer:M?M[N]:void 0,callback:function(e){if(ae(!0),!R){var t=e.currentTarget.value,c=s[N].correct_answer===t;c?(S((function(e){return e+1})),J("green"),te("Good Job!")):(J("red"),te('sorry! the correct answer is "'.concat(s[N].correct_answer,'"'))),9===M.length&&(console.log("hello"),te("You scored ".concat(w," out of 10, good job!")));var n={question:s[N].question,answer:t,correct:c,correctAnswer:s[N].correct_answer};B((function(e){return[].concat(Object(i.a)(e),[n])}))}},isCorrect:I,score:w}),Object(O.jsx)(x.b,{height:"50px",mt:"15px",children:R||c||M.length!==N+1||9===N?null:Object(O.jsx)(q.a,{initialScale:.1,in:re,children:Object(O.jsx)(h.a,{backgroundColor:"#1391ad",width:"200px",className:"next",onClick:function(){ae(!1);var e=N+1;e===D?(console.log("hello"),te("You scored ".concat(w," out of 10, good job!"))):(J("blue"),F(e),te(""))},children:"Next Question"})})}),Object(O.jsx)(x.b,{children:Object(O.jsx)(q.a,{initialScale:.1,in:re,children:Object(O.jsx)(x.g,{color:I,height:"30px",className:"badge",borderRadius:"5px",fontSize:"m",m:"20px",width:"auto",children:ee})})}),M.length!==D||R?null:Object(O.jsx)(x.b,{children:Object(O.jsx)(h.a,{backgroundColor:"#1391ad",width:"200px",className:"next",onClick:function(){_(!0),te("")},children:"Retry"})})]})]})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))},L=(c(90),c(14)),M=c(2),B={heading:"Raleway",body:"Raleway"},A=Object(M.c)({sm:"45em",md:"55em",lg:"65em",xl:"75em"}),Q=Object(L.b)({colors:{black:"#16161D"},fonts:B,breakpoints:A,textStyles:{h1:{fontSize:"35px",lineHeight:"110%",letterSpacing:"-2%",fonts:B},h2:{fontSize:"35px",lineHeight:"110%",letterSpacing:"-2%"}},icons:{logo:{path:Object(O.jsxs)("svg",{width:"3000",height:"3163",viewBox:"0 0 3000 3163",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("rect",{width:"3000",height:"3162.95",fill:"none"}),Object(O.jsx)("path",{d:"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",fill:"currentColor"})]}),viewBox:"0 0 3000 3163"}}});c(91),c(92);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(L.a,{theme:Q,children:Object(O.jsx)(F,{})})}),document.getElementById("root")),H()}},[[93,1,2]]]);
//# sourceMappingURL=main.4eb64e17.chunk.js.map