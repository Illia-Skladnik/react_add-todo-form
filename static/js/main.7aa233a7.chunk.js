(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),r=a(2),s=a(4),c=(a(11),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],o=a(6),d=a.n(o),u=a(0),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":a}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(u.jsx)(m,{user:i})]})},h=function(e){var t=e.todos;return Object(u.jsx)("ul",{children:Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(j,{todo:e})},e.id)}))})})};var b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t})),O=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],d=s[1],m=Object(c.useState)(!1),j=Object(r.a)(m,2),O=j[0],f=j[1],p=Object(c.useState)(!1),x=Object(r.a)(p,2),v=x[0],y=x[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(u.jsx)("label",{children:Object(u.jsxs)("div",{className:"field",children:["Title:",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),f(!1)}}),O&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsx)("label",{children:Object(u.jsxs)("div",{className:"field",children:["User:",Object(u.jsxs)("select",{"data-cy":"userSelect",value:o,onChange:function(e){d(+e.target.value),y(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]})}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){!function(e){if(0===a.length&&f(!0),0===o&&y(!0),0!==o&&0!==a.length){var t=l.find((function(t){return t.id===e})),n=b.reduce((function(e,t){return Math.max(e,t.id)}),0);t&&b.push({id:n+1,userId:e,title:a,completed:!1,user:t})}}(o),n(""),d(0),e.preventDefault()},children:"Add"})]}),Object(u.jsx)("section",{className:"TodoList",children:Object(u.jsx)(h,{todos:b})})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7aa233a7.chunk.js.map