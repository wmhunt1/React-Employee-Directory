(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},2:function(e){e.exports=JSON.parse('[{"id":1,"name":"Michael Scott","dept":"Sales"},{"id":2,"name":"Dwight Schrute","dept":"Sales"},{"id":3,"name":"Jim Halpert","dept":"Sales"},{"id":4,"name":"Maurice Moss","dept":"IT"},{"id":5,"name":"Don Draper","dept":"Marketing"},{"id":6,"name":"Roy Trenneman","dept":"IT"},{"id":7,"name":"Jen Barber","dept":"IT"},{"id":8,"name":"Scruffy the Janitor","dept":"Janitorial"},{"id":9,"name":"Hermes Conrad","dept":"Accounting"},{"id":10,"name":"Tony Stark","dept":"Engineering"},{"id":11,"name":"Geordi LaForge","dept":"Engineering"},{"id":12,"name":"Phil Philson","dept":"Marketing"},{"id":13,"name":"Mike Mikeson","dept":"Accounting"}]')},20:function(e,t,n){"use strict";n.r(t);var r,c=n(0),i=n(1),a=n(7),d=n.n(a),s=n(8),j=n(9),o=n(12),l=n(10),u=(n(18),n(2)),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={employees:u},r}return Object(j.a)(n,[{key:"renderTableData",value:function(){return u.map((function(e){var t=e.id,n=e.name,r=e.dept;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r})]},t)}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.employees[0]).map((function(e,t){return Object(c.jsx)("th",{children:e.toUpperCase()},t)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("table",{id:"employees",children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("tr",{children:this.renderTableHeader()}),this.renderTableData()]})})})}}]),n}(i.Component),p=n(11),O=n(4);u.sort((r="name",function(e,t){return e[r]>t[r]?1:e[r]<t[r]?-1:0}));var m=function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)("name"),d=Object(O.a)(a,2),s=d[0],j=d[1];return Object(i.useEffect)((function(){!function(e){var t={id:"id",name:"name",dept:"dept"}[e],n=Object(p.a)(u).sort((function(e,n){return e[t]-n[t]}));r(n)}(s)}),[s]),Object(c.jsxs)("div",{className:"select",children:[Object(c.jsx)("label",{children:"Sort Employees "}),Object(c.jsxs)("select",{onChange:function(e){return j(e.target.value)},children:[Object(c.jsx)("option",{value:"id",children:"ID"}),Object(c.jsx)("option",{value:"name",children:"Name"}),Object(c.jsx)("option",{value:"dept",children:"Department"})]}),n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"ID: ".concat(e.id)}),Object(c.jsx)("div",{children:"Name: ".concat(e.name)}),Object(c.jsx)("div",{children:"Department: ".concat(e.dept)})]},e.id)}))]})};var h=function(){var e=Object(i.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Filter Employees "}),Object(c.jsx)("input",{id:"filter",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),u.filter((function(e){return!n||(!!e.name.includes(n)||void 0)})).map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"ID: ".concat(e.id)}),Object(c.jsx)("p",{children:"Name: ".concat(e.name)}),Object(c.jsx)("p",{children:"Department: ".concat(e.dept)})]})}))]})};n(19);var x=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{id:"title",children:"Employee Directory"}),Object(c.jsx)(m,{}),Object(c.jsx)("br",{}),Object(c.jsx)(h,{}),Object(c.jsx)("br",{}),Object(c.jsx)(b,{})]})};d.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.93ca8d9c.chunk.js.map