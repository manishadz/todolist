(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(2),s=a.n(r),n=a(9),o=a.n(n),i=(a(23),a.p,a(24),a(7)),l=a(41),j=a(37),d=a(38),b=a(39),u=a(40),O=function(e){var t=e.modal,a=e.toggle,s=e.save,n=Object(r.useState)(""),o=Object(i.a)(n,2),O=o[0],m=o[1],p=Object(r.useState)(""),x=Object(i.a)(p,2),f=x[0],h=x[1],g=function(e){var t=e.target,a=t.name,c=t.value;"taskName"===a?m(c):h(c)};return Object(c.jsxs)(l.a,{isOpen:t,toggle:a,children:[Object(c.jsx)(j.a,{toggle:a,children:"Create Task"}),Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Task Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",value:O,onChange:g,name:"taskName"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("textarea",{rows:"5",className:"form-control",value:f,onChange:g,name:"description"})]})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=O,t.Description=f,s(t)},children:"Create"})," ",Object(c.jsx)(u.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},m=function(e){var t=e.modal,a=e.toggle,s=e.updateTask,n=e.taskObj,o=Object(r.useState)(""),O=Object(i.a)(o,2),m=O[0],p=O[1],x=Object(r.useState)(""),f=Object(i.a)(x,2),h=f[0],g=f[1],v=function(e){var t=e.target,a=t.name,c=t.value;"taskName"===a?p(c):g(c)};Object(r.useEffect)((function(){p(n.Name),g(n.Description)}),[]);return Object(c.jsxs)(l.a,{isOpen:t,toggle:a,children:[Object(c.jsx)(j.a,{toggle:a,children:"Update Task"}),Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Task Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",value:m,onChange:v,name:"taskName"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("textarea",{rows:"5",className:"form-control",value:h,onChange:v,name:"description"})]})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=m,t.Description=h,s(t)},children:"Update"})," ",Object(c.jsx)(u.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},p=function(e){var t=e.taskObj,a=e.index,s=e.deleteTask,n=e.updateListArray,o=Object(r.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],b=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"}];return Object(c.jsxs)("div",{class:"card-wrapper mr-5",children:[Object(c.jsx)("div",{class:"card-top",style:{"background-color":b[a%5].primaryColor}}),Object(c.jsxs)("div",{class:"task-holder",children:[Object(c.jsx)("span",{class:"card-header",style:{"background-color":b[a%5].secondaryColor,"border-radius":"10px"},children:t.Name}),Object(c.jsx)("p",{className:"mt-3",children:t.Description}),Object(c.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(c.jsx)("i",{class:"far fa-edit mr-3",style:{color:b[a%5].primaryColor,cursor:"pointer"},onClick:function(){return d(!0)}}),Object(c.jsx)("i",{class:"fas fa-trash-alt",style:{color:b[a%5].primaryColor,cursor:"pointer"},onClick:function(){s(a)}})]})]}),Object(c.jsx)(m,{modal:j,toggle:function(){d(!j)},updateTask:function(e){n(e,a)},taskObj:t})]})},x=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)([]),o=Object(i.a)(n,2),l=o[0],j=o[1];Object(r.useEffect)((function(){var e=localStorage.getItem("taskList");if(e){var t=JSON.parse(e);j(t)}}),[]);var d=function(e){var t=l;t.splice(e,1),localStorage.setItem("taskList",JSON.stringify(t)),j(t),window.location.reload()},b=function(e,t){var a=l;a[t]=e,localStorage.setItem("taskList",JSON.stringify(a)),j(a),window.location.reload()};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header text-center",children:[Object(c.jsx)("h3",{children:"Todo List"}),Object(c.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return s(!0)},children:"Create Task"})]}),Object(c.jsx)("div",{className:"task-container",children:l&&l.map((function(e,t){return Object(c.jsx)(p,{taskObj:e,index:t,deleteTask:d,updateListArray:b})}))}),Object(c.jsx)(O,{toggle:function(){s(!a)},modal:a,save:function(e){var t=l;t.push(e),localStorage.setItem("taskList",JSON.stringify(t)),j(l),s(!1)}})]})};a(34),a(35);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),h()}},[[36,1,2]]]);
//# sourceMappingURL=main.a2ee92bb.chunk.js.map