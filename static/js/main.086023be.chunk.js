(this["webpackJsonptpi1-simulacion"]=this["webpackJsonptpi1-simulacion"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),r=n.n(i),s=(n(9),n(2)),l=(n(10),n(0));var j=function(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(1),r=Object(s.a)(i,2),j=r[0],d=r[1],o=Object(c.useState)(1),b=Object(s.a)(o,2),u=b[0],h=b[1],m=Object(c.useState)([]),O=Object(s.a)(m,2),v=O[0],x=O[1],p=Object(c.useState)([]),f=Object(s.a)(p,2),g=f[0],N=f[1];function M(){for(var e=0,t=0,c=0,a=0,i=0,r=0,s=0,l=0,d=0,o=0,b=0,u=0,h=0,m=0,O=0,v=0,x=0,p=0,f=0,g=0,N=0,M=0,C=0,k=0,q=1;q<=10;q++){t=(e=t)+S(),l=e,O=F(4,.5),d=l+O,c<n?w():c>=n+j?(c=0,w()):(c++,y()),C=F(5,.5),k=k+(m+C)-l}return k;function w(){c++,v=F(3,.4),i=(o=d+v)<a?a:o,f=F(5.5,.6),g=F(4,.4),a=(u=i+f)+g,N=F(3,.4),m=u+N}function y(){x=F(5,.6),r=(b=d+x)<s?s:b,p=F(3.5,.55),h=r+p,s=r+p,M=F(3,.6),m=h+M}}function F(e,t){var n=Math.cos(2*Math.PI*Math.random());return Math.sqrt(-2*Math.log10(1-Math.random()))*n*t+e}function S(){return-3*Math.log10(1-Math.random())}return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("main",{className:"App-header",children:[Object(l.jsx)("div",{className:"title-app",children:"Simular r\xe9plicas"}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("label",{htmlFor:"replicas",children:"Cantidad de replicas: "}),Object(l.jsx)("input",{type:"number",name:"",id:"replicas",value:u,min:"1",onChange:function(e){return h(Number(e.target.value))}})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("label",{htmlFor:"numer_m",children:"m: "}),Object(l.jsx)("input",{type:"number",name:"",id:"numer_m",value:n,min:"1",onChange:function(e){return a(Number(e.target.value))}})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("label",{htmlFor:"numer_n",children:"n: "}),Object(l.jsx)("input",{type:"number",name:"",id:"numer_n",value:j,min:"1",onChange:function(e){return d(Number(e.target.value))}})]}),Object(l.jsx)("div",{className:"calc-button",children:Object(l.jsx)("button",{onClick:function(){return function(e){for(var t=[],n=0;n<e;n++)t.push(M());x(t),console.log(t)}(u)},children:"Simular r\xe9plicas"})}),Object(l.jsxs)("div",{className:"container-all",children:[v.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"calc-button",children:[Object(l.jsx)("button",{onClick:function(){return function(){for(var e=0,t=v.length,n=0;n<t;n++)e+=v[n];e/=t;for(var c=0,a=0;a<t;a++)c+=Math.pow(v[a]-e,2);var i=Math.sqrt(1/(t-1)*c);console.log("cant. replicas: ",t,"aux: ",c,"s= ",i),console.log("promedio: ",e);var r=[],s=e-i/Math.sqrt(.05*t),l=e+i/Math.sqrt(.05*t);r.push(s),r.push(l),N(r)}()},children:"Calcular intervalo de confianza"}),Object(l.jsx)("div",{children:"**Darle clic luego de generar las r\xe9plicas"}),Object(l.jsx)("div",{children:"**Debe haberse generado al menos 2 r\xe9plicas"})]}),g.length?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"intervalo-data",children:[Object(l.jsx)("div",{children:"El intervalo de confianza es:"}),Object(l.jsxs)("div",{children:[" [",g[0]," , ",g[1],"] "]})]}),Object(l.jsxs)("div",{className:"intervalo-data",children:[Object(l.jsx)("div",{children:"Alpha utilizado"}),Object(l.jsx)("div",{children:" 0.05 "})]}),Object(l.jsxs)("div",{className:"intervalo-data",children:[Object(l.jsx)("div",{children:"Media:"}),Object(l.jsx)("div",{children:(g[1]+g[0])/2})]}),Object(l.jsxs)("div",{className:"intervalo-data",children:[Object(l.jsx)("div",{children:"Amplitud del intervalo de confianza:"}),Object(l.jsx)("div",{children:g[1]-g[0]})]})]}):Object(l.jsx)(l.Fragment,{})]}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"container-replicas",children:v.length?Object(l.jsx)(l.Fragment,{children:v.map((function(e,t){return Object(l.jsxs)("div",{className:"replica-row",children:[Object(l.jsxs)("div",{className:"replica-number",children:[Object(l.jsx)("b",{children:"Replica"})," ",t+1]}),Object(l.jsxs)("div",{className:"ttr-field",children:[Object(l.jsxs)("b",{children:["TTR ",t+1]})," ",e]})]},e)}))}):Object(l.jsx)(l.Fragment,{})})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.086023be.chunk.js.map