(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{15:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(26),r=s.n(a),o=(s(33),s(2)),i=(s(34),s(3)),j=(s(35),s.p+"static/media/goblet.88b04c01.png"),l=(s(36),s(0));var d=function(e){var t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),d=Object(o.a)(r,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(o.a)(O,2),h=m[0],f=m[1],x="https://api.stackexchange.com/2.2/me?site=stackoverflow&filter=!--1nZuvlShP1&key=".concat("wud)gxqaQ5vssDmltw6d1A((","&access_token=").concat(e.token);return Object(c.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){f(e.items),b(!0)}),(function(e){b(!0),a(e)}))}),[]),console.log(h),console.log(h),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):u?Object(l.jsxs)("div",{className:"loggedUserHeader",children:[Object(l.jsx)(i.b,{to:"users/".concat(h[0].user_id),children:Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:h[0].profile_image,alt:"me"})}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:"https://img.icons8.com/ios-filled/100/000000/inbox.png",alt:"inbox"}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:j,alt:"goblet"}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:"https://img.icons8.com/ios/100/000000/settings--v1.png",alt:"settings"})]}):Object(l.jsx)("div",{children:"Loading..."})},u=s(28),b=s.n(u);var O=function(e){var t=Object(c.useState)(!0),s=Object(o.a)(t,2),n=s[0],a=(s[1],Object(c.useState)()),r=Object(o.a)(a,2),j=r[0],u=r[1],O=Object(c.useState)(!1),m=Object(o.a)(O,2),h=m[0],f=m[1],x=null;return console.log("me1"),Object(l.jsxs)("header",{children:[Object(l.jsxs)(i.b,{to:"/",children:[" ",Object(l.jsx)("img",{src:"https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png",alt:"logo",id:"logo"})]}),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"text",name:"search",placeholder:"Search ...",id:"searchInput"}),Object(l.jsx)("button",{type:"submit",id:"searchButton",children:"GO"})]}),h?Object(l.jsx)(d,{token:j}):"",Object(l.jsxs)("button",{onClick:h?function(){b.a.get("https://api.stackexchange.com/2.2/apps/".concat(j,"/de-authenticate?key=").concat("wud)gxqaQ5vssDmltw6d1A((")).then((function(){f(!1)})),console.log("log out")}:function(t){window.SE.authenticate({success:function(t){x=t,console.log(x),u(x.accessToken),e.getUsersToken(x.accessToken),f(!0)},error:function(e){alert("\u042f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f :(")}})},disabled:n,children:[" ",h?"Log out":"Log in"," "]})]})},m=s(6);s(64);var h=function(e){return console.log("preview"),Object(l.jsx)("div",{className:"userPreviewBlock",children:Object(l.jsxs)("div",{className:"userPreview",children:[Object(l.jsx)("div",{className:"generalInfoPreview",children:Object(l.jsxs)("div",{className:"userInfoPreview",children:[Object(l.jsx)("span",{className:"userNamePreview",children:e.item.display_name}),Object(l.jsx)("span",{className:"userLocationPreview",children:e.item.location}),Object(l.jsxs)("span",{className:"repInfoPreview",children:[Object(l.jsxs)("span",{className:"reputationPreview",children:[" ",e.item.reputation," "]}),Object(l.jsxs)("span",{className:"bronze",children:[" b ",e.item.badge_counts.bronze," "]}),Object(l.jsxs)("span",{className:"silver",children:[" s ",e.item.badge_counts.silver," "]}),Object(l.jsxs)("span",{className:"gold",children:[" g ",e.item.badge_counts.gold," "]})]}),Object(l.jsx)("span",{className:"websitePreview",children:e.item.website_url})]})}),Object(l.jsx)("div",{className:"aboutPreview",dangerouslySetInnerHTML:{__html:e.item.about_me.substring(0,400).trim()+"..."||""}})]})})};s(65);var f=function(e){var t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)({}),b=Object(o.a)(u,2),O=b[0],m=b[1],h="https://api.stackexchange.com/2.2/users/".concat(e.id,"/top-tags?site=stackoverflow&key=").concat("wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(h).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsx)(l.Fragment,{children:O.slice(0,3).map((function(e){return Object(l.jsx)("span",{className:"userTag",children:e.tag_name})}))}):Object(l.jsx)("div",{children:"Loading tags ..."})};var x=function(e){var t=e.rep;return t>1e6?(t=Math.floor(t/1e6)+Number((t%1e6*1e-6).toFixed(1)),"".concat(t,"m")):t>1e3?(t=Math.floor(t/1e3)+Number((t%1e3*.001).toFixed(1)),"".concat(t,"k")):"".concat(t)};var g=function(e){var t=Object(c.useState)(!1),s=Object(o.a)(t,2),n=s[0],a=s[1];return Object(l.jsxs)("div",{className:"userBlock",children:[Object(l.jsxs)(i.b,{to:"users/".concat(e.item.user_id),children:[Object(l.jsx)("img",{src:e.item.profile_image,alt:"user",className:"profileImage",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)}})," "]}),Object(l.jsxs)("div",{className:"userInfo",children:[Object(l.jsx)(i.b,{to:"users/".concat(e.item.user_id),children:Object(l.jsx)("span",{className:"userName",children:e.item.display_name})}),Object(l.jsx)("span",{className:"userLocation",children:e.item.location}),Object(l.jsx)("span",{className:"repInfo",children:Object(l.jsxs)("span",{className:"reputation",children:[" ",Object(l.jsx)(x,{rep:e.item.reputation})," "]})}),Object(l.jsx)("span",{className:"tags",children:Object(l.jsx)(f,{id:e.item.user_id})})]}),n?Object(l.jsx)(h,{item:e.item}):""]},e.item.user_id)};var p=function(e){var t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)({}),b=Object(o.a)(u,2),O=b[0],m=b[1],h=Object(c.useState)({sortOrder:"",sortBy:""}),f=Object(o.a)(h,2),x=f[0],p=f[1];Object(c.useEffect)((function(){p(e)}),[e]);var v="https://api.stackexchange.com/2.2/users?".concat(x.sortOrder?"order=".concat(x.sortOrder,"&sort=").concat(x.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDp)d5&key=").concat("wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[x]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsx)("div",{className:"container",children:O.map((function(e){return Object(l.jsx)("div",{className:"user",children:Object(l.jsx)(g,{item:e})})}))}):Object(l.jsx)("div",{children:"Loading users ..."})};var v=function(e){var t,s=Object(c.useState)(null),n=Object(o.a)(s,2),a=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(o.a)(i,2),d=j[0],u=j[1],b=Object(c.useState)({}),O=Object(o.a)(b,2),m=O[0],h=O[1],f="https://api.stackexchange.com/2.2/tags/".concat(encodeURIComponent(e.name),"/wikis?site=stackoverflow&key=").concat("wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),r(e)}))}),[]),console.log(m),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):d?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{className:"tagDescription",children:(t=m[0].excerpt,t.substring(0,140)+"...")})}):Object(l.jsx)("div",{children:"Loading tags ..."})};s(66);var N=function(e){var t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),j=Object(o.a)(r,2),d=j[0],u=j[1],b=Object(c.useState)({}),O=Object(o.a)(b,2),m=O[0],h=O[1],f=Object(c.useState)({sortOrder:"",sortBy:""}),x=Object(o.a)(f,2),g=x[0],p=x[1];Object(c.useEffect)((function(){p(e)}),[e]);var N="https://api.stackexchange.com/2.2/tags?".concat(g.sortOrder?"order=".concat(g.sortOrder,"&sort=").concat(g.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDqt9p&key=").concat("wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(N).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),a(e)}))}),[g]),console.log(m),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):d?Object(l.jsx)("div",{className:"container",children:m.map((function(t){return Object(l.jsxs)("div",{className:"tagBlock",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("p",{className:"tagName",onClick:function(){return e.changeTag(t.name)},children:t.name})}),Object(l.jsx)(v,{name:decodeURIComponent(t.name)}),Object(l.jsxs)("p",{className:"numOfQuestions",children:[t.count," questions"]})]})}))}):Object(l.jsx)("div",{children:"Loading tags ..."})},w=s(4);s(67),s(68);var y=function(e){return Object(l.jsxs)("nav",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(i.c,{to:"/",onClick:function(){e.setSortOrder("",""),e.changeTag("")},children:" Main "})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(i.c,{to:"/users",onClick:function(){return e.setSortOrder("","")},children:" Users "})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(i.c,{to:"/tags",onClick:function(){return e.setSortOrder("","")},children:" Tags "})," "]})]})};s(15);var k=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byActivity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by activity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byVotes sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by votes"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","votes")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","votes")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byCreation sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by creation"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]})]})};var S=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byRep sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by reputation"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","reputation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","reputation")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byDate sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by creation date"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byName sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by name"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})};var _=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byPopularity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by popularity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","popular")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","popular")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byActivity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by activity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byName sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by name"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})},I=(s(69),function(e){var t=e.date,s=new Date(1e3*t),c=s.getDate();c<10&&(c="0"+c);var n=s.getMonth()+1;n<10&&(n="0"+n);var a=s.getFullYear(),r=s.getHours();r<10&&(r="0"+r);var o=s.getMinutes();o<10&&(o="0"+o);var i=s.toLocaleString("en",{month:"short"});s="".concat(i," ").concat(c," ").concat(a," at ").concat(r,":").concat(o);var j="".concat(c,".").concat(n,".").concat(a),l=new Date,d=l.getDate();d<10&&(d="0"+d);var u=l.getMonth()+1;u<10&&(u="0"+u);var b=l.getFullYear(),O=l.getHours();O<10&&(O="0"+O);var m=l.getMinutes();if(m<10&&(m="0"+m),j===(l="".concat(d,".").concat(u,".").concat(b))){var h=m+60*O-(o+60*r);if(h<60)return h<1?"just now":"".concat(h," min ago");if(h/60<24)return 1===(h/60).toFixed(0)?"".concat((h/60).toFixed(0)," hour ago"):"".concat((h/60).toFixed(0)," hours ago")}if(n===u){if(d-c===2)return"2 days ago";if(d-c===1)return"yesterday"}return s});var q=function(e){var t,s=Object(c.useState)(null),n=Object(o.a)(s,2),a=n[0],r=n[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(o.a)(O,2),h=m[0],f=m[1],x=Object(c.useState)({sortOrder:"",sortBy:""}),g=Object(o.a)(x,2),p=g[0],v=g[1];return Object(c.useEffect)((function(){v(e),e.changeTag(e.tag)}),[e]),console.log(e.tag),t=e.tag?"https://api.stackexchange.com/2.2/search?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","tagged=").concat(e.tag,"&site=stackoverflow&key=").concat("wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/questions?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","site=stackoverflow&key=").concat("wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){f(e.items),b(!0)}),(function(e){b(!0),r(e)}))}),[p,e.tag]),console.log(h),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):u?Object(l.jsx)(l.Fragment,{children:h.map((function(t){return Object(l.jsxs)("div",{className:"questionBlock",children:[Object(l.jsxs)("div",{className:"numbersInfoOfQuest",children:[Object(l.jsxs)("div",{className:"votes",children:[t.score,Object(l.jsx)("p",{children:"votes"})]}),Object(l.jsxs)("div",{className:t.answer_count>0?t.is_answered?"answers hasAcceptedAnswer":"answers answered":"answers",children:[t.answer_count,Object(l.jsx)("p",{children:"answers"})]}),Object(l.jsxs)("div",{className:"views",children:[t.view_count,Object(l.jsx)("p",{children:"views"})]})]}),Object(l.jsxs)("div",{className:"theQuestion",children:[Object(l.jsx)("div",{className:"questionTitle",children:Object(l.jsx)(i.b,{to:"/questions/".concat(t.question_id),children:t.title})}),Object(l.jsxs)("div",{className:"tags",children:[t.tags.map((function(t){return Object(l.jsx)("div",{className:"tag",onClick:function(){return e.changeTag(t)},children:t},t)})),Object(l.jsxs)("div",{className:"ownerInfo",children:[Object(l.jsxs)("span",{className:"questionDate",children:[" asked ",Object(l.jsx)(I,{date:t.creation_date})," by "]}),Object(l.jsx)(i.b,{to:"users/".concat(t.owner.user_id),children:Object(l.jsxs)("span",{className:"questionOwner",children:[" ",t.owner.display_name," "]})}),Object(l.jsxs)("span",{className:"questionOwnerRep",children:[" ",t.owner.reputation," "]})]})]})]})]},t.question_id)}))}):Object(l.jsx)("div",{children:"Loading..."})};s(70),s(71),s(72);var C=function(e){return Object(l.jsx)(l.Fragment,{children:e.comments.map((function(t){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:t.body||""}}),"-",Object(l.jsx)("span",{className:"authorName",children:t.owner.display_name}),Object(l.jsx)("span",{className:"commentDate",children:e.formatDate(t.creation_date)})]},t.comment_id)}))})};var D=function(e){return Object(l.jsx)("div",{className:"answerBlock",children:Object(l.jsxs)("div",{className:"answerBody",children:[Object(l.jsxs)("div",{className:"voting",children:[Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up",onClick:function(){return e.token?alert("your answer is accepted but isn`t counted as your reputation is too low"):alert("Log In first")}}),Object(l.jsx)("p",{children:e.answer.score}),Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down",onClick:function(){return e.token?alert("your answer is accepted but isn`t counted as your reputation is too low"):alert("Log In first")}}),Object(l.jsx)("img",{className:e.answer.is_accepted?"accepted":"notAccepted",src:"https://img.icons8.com/fluent/144/26e07f/checkmark.png",alt:"accepted"}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(l.jsxs)("div",{className:"answerText",children:[Object(l.jsx)("div",{className:"textOfAnswer",dangerouslySetInnerHTML:{__html:e.answer.body||""}}),Object(l.jsxs)("div",{className:"ownerOfAnswerInfo",children:[Object(l.jsxs)("span",{className:"dateOfAnswer",children:["answered ",e.formatDate(e.answer.creation_date)]}),Object(l.jsxs)("div",{className:"moreOwnerInfo",children:[Object(l.jsx)("img",{src:e.answer.owner.profile_image,className:"userOfAnswerPic",alt:"user"}),Object(l.jsxs)("div",{className:"genInfo",children:[Object(l.jsx)("span",{className:"userOfAnswerName",children:e.answer.owner.display_name}),Object(l.jsxs)("span",{className:"userOfAnswerRep",children:["reputation: ",Object(l.jsx)(x,{rep:e.answer.owner.reputation})]})]})]})]}),Object(l.jsx)("div",{className:"comments",children:e.answer.comment_count>0?Object(l.jsx)(C,{comments:e.answer.comments,formatDate:e.formatDate}):""})]})]})},e.id)};var P=function(e){var t=Object(w.e)().questionId,s=Object(c.useState)(null),n=Object(o.a)(s,2),a=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(o.a)(i,2),d=j[0],u=j[1],b=Object(c.useState)({}),O=Object(o.a)(b,2),m=O[0],h=O[1],f="https://api.stackexchange.com/2.2/questions/".concat(t,"?site=stackoverflow&filter=!IMtrxW)5mznbjA.Szm-Ccb1ppdMOnFW9TLEnzgsY1Z1xzCT&key=").concat("wud)gxqaQ5vssDmltw6d1A((");Object(c.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),r(e)}))}),[]),console.log(m);var g=function(e){var t=new Date(1e3*e),s=t.getDate();s<10&&(s="0"+s);var c=t.getMonth()+1;c<10&&(c="0"+c);var n=t.getFullYear(),a=t.getHours();a<10&&(a="0"+a);var r=t.getMinutes();r<10&&(r="0"+r);var o=t.toLocaleString("en",{month:"short"});t="".concat(o," ").concat(s," ").concat(n," at ").concat(a,":").concat(r);var i="".concat(s,".").concat(c,".").concat(n),j=new Date,l=j.getDate();l<10&&(l="0"+l);var d=j.getMonth()+1;d<10&&(d="0"+d);var u=j.getFullYear();if(i===(j="".concat(l,".").concat(d,".").concat(u)))return"today";if(c===d){if(l-s===2)return"2 days ago";if(l-s===1)return"yesterday"}return t};return console.log(e.token),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):d?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"theQuestionBlock",children:[Object(l.jsxs)("div",{className:"headOfBlock",children:[Object(l.jsx)("h3",{children:m[0].title}),Object(l.jsxs)("div",{className:"dates",children:["asked: ",Object(l.jsx)("span",{className:"when",children:g(m[0].creation_date)})]})]}),Object(l.jsxs)("div",{className:"questionBody",children:[Object(l.jsxs)("div",{className:"voting",children:[Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up",onClick:function(){return e.token?alert("your answer is accepted but isn`t counted as your reputation is too low"):alert("Log In first")}}),Object(l.jsx)("p",{children:m[0].score}),Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down",onClick:function(){return e.token?alert("your answer is accepted but isn`t counted as your reputation is too low"):alert("Log In first")}}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/ios-filled/150/ffffff/favorites.png",alt:"add to fav"}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(l.jsxs)("div",{className:"questionText",children:[Object(l.jsx)("div",{className:"textOfQuestion",dangerouslySetInnerHTML:{__html:m[0].body||""}}),Object(l.jsxs)("div",{className:"tagsOfQuestion",children:[m[0].tags.map((function(e){return Object(l.jsx)("div",{className:"tagOfQuestion",children:e})})),Object(l.jsxs)("div",{className:"ownerOfQuestionInfo",children:[Object(l.jsx)("img",{src:m[0].owner.profile_image,className:"userOfQuestionPic",alt:"user"}),Object(l.jsxs)("div",{className:"genInfo",children:[Object(l.jsx)("span",{className:"userOfQuestionName",children:m[0].owner.display_name}),Object(l.jsxs)("span",{className:"userOfQuestionRep",children:["reputation: ",Object(l.jsx)(x,{rep:m[0].owner.reputation})]})]})]})]}),Object(l.jsx)("div",{className:"comments",children:m[0].comment_count>0?Object(l.jsx)(C,{comments:m[0].comments,formatDate:g}):""})]})]})]}),Object(l.jsxs)("div",{className:"answers",children:[Object(l.jsxs)("h2",{className:"numOfAnswers",children:[m[0].answers?m[0].answers.length:0," ",m[0].answers&&1===m[0].answers.length?"Answer":"Answers"]}),m[0].answers?m[0].answers.map((function(t){return Object(l.jsx)(D,{answer:t,formatDate:g,id:t.answer_id,token:e.token})})):""]})]}):Object(l.jsx)("div",{children:"Loading..."})};s(73);var B=function(e){var t,s=Object(c.useState)(null),n=Object(o.a)(s,2),a=n[0],r=n[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(o.a)(O,2),h=m[0],f=m[1],x=function(e){return e.substring(0,150).trim()};t="posts"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/posts?site=stackoverflow&filter=!LH22N3W(ohE.oBUhc1Z_jP&key=").concat("wud)gxqaQ5vssDmltw6d1A(("):"questions"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/questions?site=stackoverflow&filter=!-MOiN_e9RRw)PrRV4)m9autDpK1W-y)25&key=").concat("wud)gxqaQ5vssDmltw6d1A(("):"answers"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/answers?site=stackoverflow&filter=!)Q29mwsOXXJGPIa)BWJ5Yi3H&key=").concat("wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/comments?site=stackoverflow&filter=!SWJ_aFhOX4jJ4Lt8gw&key=").concat("wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){f(e.items),b(!0)}),(function(e){b(!0),r(e)}))}),[e.type]);var g=0;return console.log(h),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):u?Object(l.jsx)(l.Fragment,{children:h.map((function(t){return Object(l.jsxs)("div",{className:"userPagePost",children:["posts"===e.type||"questions"===e.type?t.question_id?Object(l.jsx)(i.b,{to:"/questions/".concat(t.question_id),children:Object(l.jsx)("p",{className:"userPost",children:t.title})}):Object(l.jsx)("p",{className:"userPost",children:t.title}):t.body?t.question_id?Object(l.jsx)(i.b,{to:"/questions/".concat(t.question_id),children:Object(l.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:x(t.body)||""}})}):Object(l.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:x(t.body)||""}}):"",Object(l.jsx)("p",{className:"userPostDate",children:Object(l.jsx)(I,{date:t.creation_date})})]},g++)}))}):Object(l.jsx)("div",{children:"Loading..."})};var L=function(){var e=Object(w.e)().userId,t=Object(c.useState)(null),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)({}),b=Object(o.a)(u,2),O=b[0],m=b[1],h=Object(c.useState)("posts"),f=Object(o.a)(h,2),x=f[0],g=f[1],p="https://api.stackexchange.com/2.2/users/".concat(e,"?site=stackoverflow&key=").concat("wud)gxqaQ5vssDmltw6d1A((","&filter=!9_bDDp)d5");return Object(c.useEffect)((function(){fetch(p).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsxs)("div",{className:"userPage",children:[Object(l.jsxs)("div",{className:"mainUserPageInfo",children:[Object(l.jsxs)("div",{className:"userPicandInfo",children:[Object(l.jsx)("img",{src:O[0].profile_image,alt:"user"}),Object(l.jsxs)("p",{className:"userPageRep",children:[O[0].reputation," reputation"]}),Object(l.jsxs)("p",{className:"userPageBadgesInfo",children:[Object(l.jsxs)("span",{className:"bronzeBadge",children:[" ",O[0].badge_counts.bronze]}),Object(l.jsxs)("span",{className:"silverBadge",children:[" ",O[0].badge_counts.silver]}),Object(l.jsxs)("span",{className:"goldBadge",children:[" ",O[0].badge_counts.gold]})]})]}),Object(l.jsxs)("div",{className:"userPageGenInfo",children:[Object(l.jsx)("p",{className:"userPageUserName",children:O[0].display_name}),Object(l.jsx)("p",{className:"userPageAboutUser",dangerouslySetInnerHTML:{__html:O[0].about_me||""}})]}),Object(l.jsxs)("div",{className:"userPageUserProfInfo",children:[Object(l.jsxs)("p",{className:"userPageLocation",children:["Location: ",O[0].location]}),Object(l.jsxs)("p",{className:"userPageWebsite",children:["Website: ",Object(l.jsx)("a",{href:O[0].website_url,children:O[0].website_url})]}),Object(l.jsxs)("p",{className:"userLastActive",children:["active ",Object(l.jsx)(I,{date:O[0].last_access_date})]})]})]}),Object(l.jsxs)("nav",{className:"userPageNav",children:[Object(l.jsx)("li",{onClick:function(){return g("posts")},children:" Posts "}),Object(l.jsx)("li",{onClick:function(){return g("questions")},children:" Questions "}),Object(l.jsx)("li",{onClick:function(){return g("answers")},children:" Answers "}),Object(l.jsx)("li",{onClick:function(){return g("coments")},children:" Comments "})]}),Object(l.jsx)("div",{className:"userStats",children:Object(l.jsx)(B,{type:x,userId:e})})]}):Object(l.jsx)("div",{children:"Loading..."})};var A=function(e){var t=Object(c.useState)(""),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(),i=Object(o.a)(r,2),j=i[0],d=i[1],u=Object(c.useState)(),b=Object(o.a)(u,2),O=b[0],h=b[1],f=e.token,x=function(e){h(e)},g=function(e,t){a(e),d(t)};return console.log("order in parent is ".concat(n," and sort by ").concat(j)),Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{id:"sideBar",children:Object(l.jsx)(y,{setSortOrder:g,changeTag:x})}),Object(l.jsxs)("div",{id:"mainField",children:[Object(l.jsxs)("div",{className:"sortingOptions",children:[Object(l.jsx)(w.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(k,Object(m.a)(Object(m.a)({},e),{},{setSortOrder:g}))}}),Object(l.jsx)(w.a,{exact:!0,path:"/users",render:function(e){return Object(l.jsx)(S,Object(m.a)(Object(m.a)({},e),{},{setSortOrder:g}))}}),Object(l.jsx)(w.a,{path:"/tags",render:function(e){return Object(l.jsx)(_,Object(m.a)(Object(m.a)({},e),{},{setSortOrder:g}))}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(w.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(q,Object(m.a)(Object(m.a)({},e),{},{sortOrder:n,sortBy:j,changeTag:x,tag:O}))}}),Object(l.jsx)(w.a,{exact:!0,path:"/users",render:function(e){return Object(l.jsx)(p,Object(m.a)(Object(m.a)({},e),{},{sortOrder:n,sortBy:j}))}}),Object(l.jsx)(w.a,{path:"/tags",render:function(e){return Object(l.jsx)(N,Object(m.a)(Object(m.a)({},e),{},{sortOrder:n,sortBy:j,changeTag:x}))}}),Object(l.jsx)(w.a,{exact:!0,path:"/questions/:questionId",render:function(e){return Object(l.jsx)(P,Object(m.a)(Object(m.a)({},e),{},{token:f}))}}),Object(l.jsx)(w.a,{exact:!0,path:"/users/:userId",component:L})]})]})]})};s(74);var Q=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"osherstiuk @copyright 2021 "})})};var T=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(O,{getUsersToken:function(e){return n(e)}}),Object(l.jsx)(A,{token:s}),Object(l.jsx)(Q,{})]})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),E()}},[[75,1,2]]]);
//# sourceMappingURL=main.22252525.chunk.js.map