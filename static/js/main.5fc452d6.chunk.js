(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(25),a(12)),s=a(1),i=a(2),u=a(4),m=a(3),h=a(5),d=(a(27),a(8)),b=a(11),p=a(6),f=Object(p.a)(),E=function(e,t,a){return function(n){function l(){return Object(s.a)(this,l),Object(u.a)(this,Object(m.a)(l).apply(this,arguments))}return Object(h.a)(l,n),Object(i.a)(l,[{key:"render",value:function(){return t.includes(a)?r.a.createElement(e,this.props):r.a.createElement("div",null,r.a.createElement("h3",null,'This user type "',a,'" not allowed to view the dashboard page/s of: "'),t.map(function(e){return r.a.createElement("h2",null,"-",e)}))}}]),l}(r.a.Component)},O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing page"))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"User Dashboard"))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin Dashboard"))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Super Admin Dashboard")}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Organizer Dashboard")}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/SuperAdmin/dashboard"}," Super Admin")),r.a.createElement(d.b,{to:"/admin/dashboard"},"Admin ")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/org/dashboard"},"Organizer")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/user/dashboard"},"User"))))}}]),t}(n.Component);function k(){return r.a.createElement("div",{className:"footer"},"\xa9 2019 Nemer EL-Sahli",r.a.createElement("a",{href:"https://nemer-sahli.com",target:"_blank"},r.a.createElement("i",{className:"fas fa-globe fa-20px"})),r.a.createElement("a",{href:"mailto:nemer.sahli@gmail.com?Subject=Hello%20again",target:"_top"}," ",r.a.createElement("i",{className:"fas fa-at fa-20px"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/NemerSahli/",target:"_blank"}," ",r.a.createElement("i",{class:"fab fa-linkedin fa-20px "})),r.a.createElement("a",{href:"https://github.com/NemerSahli",target:"_blank"}," ",r.a.createElement("i",{class:"fab fa-github fa-20px "})),r.a.createElement("a",{href:"https://stackoverflow.com/users/10749443/nemer",target:"_blank"}," ",r.a.createElement("i",{class:"fab fa-stack-overflow fa-20px "})))}var w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Please select a user type as login:"),r.a.createElement("button",{onClick:this.props.selectUserTypeHandler.bind(this,"SuperAdmin"),className:"user-type-button"},"Super Admin"),r.a.createElement("button",{onClick:this.props.selectUserTypeHandler.bind(this,"Admin"),className:"user-type-button"},"Admin"),r.a.createElement("button",{onClick:this.props.selectUserTypeHandler.bind(this,"Organizer"),className:"user-type-button"},"Organizer"),r.a.createElement("button",{onClick:this.props.selectUserTypeHandler.bind(this,"User"),className:"user-type-button"},"User"),r.a.createElement("p",{className:"text-muted"},r.a.createElement("span",{className:"text-note"},"Note: "),"Normally there is only one button to login and no need to choose which user type you are, the user type has been saved in the database and after login succeeded the JWT containing the userType, then automaticlly showing the dashboard/s you are able to access."))}}]),t}(n.Component);function N(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 page not found"))}var T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userType:"none",supAdminAuthDashboards:["SuperAdmin"],adminAuthDashboards:["SuperAdmin","Admin"],orgAuthDashboards:["SuperAdmin","Admin","Organizer"],userAuthDashboards:["SuperAdmin","Admin","Organizer","User"]},a.selectUserType=function(e){a.setState({userType:e})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userType,a=e.supAdminAuthDashboards,n=e.adminAuthDashboards,l=e.orgAuthDashboards,c=e.userAuthDashboards;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{history:f},r.a.createElement("h1",null,"React Role Based Access Control"),r.a.createElement(w,{selectUserTypeHandler:this.selectUserType}),r.a.createElement("h3",null,"LoggedIn user Type: ",this.state.userType),r.a.createElement("hr",null),r.a.createElement("h3",null,"Please select one of the following dashboard to check if you are authorized:-"),r.a.createElement(A,{userType:""}),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",component:O,exact:!0}),r.a.createElement(b.a,{path:"/SuperAdmin/dashboard",component:E(g,Object(o.a)(a),t)}),r.a.createElement(b.a,{path:"/admin/dashboard",component:E(y,Object(o.a)(n),t)}),r.a.createElement(b.a,{path:"/org/dashboard",component:E(v,Object(o.a)(l),t)}),r.a.createElement(b.a,{path:"/user/dashboard",component:E(j,Object(o.a)(c),t)}),r.a.createElement(b.a,{path:"",component:N}))))),r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.5fc452d6.chunk.js.map