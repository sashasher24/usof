(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],[,,,,,,,,,,,,,,function(e,s,t){},,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(18),r=t.n(a),i=(t(25),t(26),t(2)),o=t(3),j=(t(27),t.p+"static/media/goblet.88b04c01.png"),l=t(0);var d=function(e){var s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),d=Object(i.a)(r,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(i.a)(O,2),h=m[0],x=m[1],f="https://api.stackexchange.com/2.2/me?site=stackoverflow&filter=!--1nZuvlShP1&key=wud)gxqaQ5vssDmltw6d1A((&access_token=".concat(e.token);return Object(c.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){x(e.items),b(!0)}),(function(e){b(!0),a(e)}))}),[]),console.log(h),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):u?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{to:"users/".concat(h[0].user_id),children:Object(l.jsx)("img",{src:h[0].profile_image,alt:"me"})}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:"https://img.icons8.com/ios-filled/100/000000/inbox.png",alt:"inbox"}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:j,alt:"goblet"}),Object(l.jsx)("img",{className:"loggedUserHeaderImg",src:"https://img.icons8.com/ios/100/000000/settings--v1.png",alt:"settings"})]}):Object(l.jsx)("div",{children:"Loading..."})};var u=function(){var e=Object(c.useState)(!0),s=Object(i.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(),r=Object(i.a)(a,2),j=r[0],u=r[1],b=null;return Object(c.useEffect)((function(){window.SE.init({clientId:19680,key:"wud)gxqaQ5vssDmltw6d1A((",channelUrl:"https://sashasher24.github.io/usof",complete:function(){console.log("complete"),n(!1)}})}),[]),console.log("me1"),Object(l.jsxs)("header",{children:[Object(l.jsxs)(o.b,{to:"/",children:[" ",Object(l.jsx)("img",{src:"https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png",alt:"logo",id:"logo"})]}),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"text",name:"search",placeholder:"Search ...",id:"searchInput"}),Object(l.jsx)("button",{type:"submit",id:"searchButton",children:"GO"})]}),j?Object(l.jsx)(d,{token:j}):"",Object(l.jsxs)("button",{onClick:function(e){window.SE.authenticate({success:function(e){alert("\u042f \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f!"),b=e,console.log(b),u(b.accessToken)},error:function(e){alert("\u042f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f :(")}})},disabled:t,children:[" ",j?"Log out":"Log in"," "]})]})},b=t(8);t(34);var O=function(e){return console.log("preview"),Object(l.jsx)("div",{className:"userPreviewBlock",children:Object(l.jsxs)("div",{className:"userPreview",children:[Object(l.jsx)("div",{className:"generalInfoPreview",children:Object(l.jsxs)("div",{className:"userInfoPreview",children:[Object(l.jsx)("span",{className:"userNamePreview",children:e.item.display_name}),Object(l.jsx)("span",{className:"userLocationPreview",children:e.item.location}),Object(l.jsxs)("span",{className:"repInfoPreview",children:[Object(l.jsxs)("span",{className:"reputationPreview",children:[" ",e.item.reputation," "]}),Object(l.jsxs)("span",{className:"bronze",children:[" b ",e.item.badge_counts.bronze," "]}),Object(l.jsxs)("span",{className:"silver",children:[" s ",e.item.badge_counts.silver," "]}),Object(l.jsxs)("span",{className:"gold",children:[" g ",e.item.badge_counts.gold," "]})]}),Object(l.jsx)("span",{className:"websitePreview",children:e.item.website_url})]})}),Object(l.jsx)("div",{className:"aboutPreview",dangerouslySetInnerHTML:{__html:e.item.about_me.substring(0,400).trim()+"..."||""}})]})})};t(35);var m=function(e){var s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],u=Object(c.useState)({}),b=Object(i.a)(u,2),O=b[0],m=b[1],h="https://api.stackexchange.com/2.2/users/".concat(e.id,"/top-tags?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(h).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsx)(l.Fragment,{children:O.slice(0,3).map((function(e){return Object(l.jsx)("span",{className:"userTag",children:e.tag_name})}))}):Object(l.jsx)("div",{children:"Loading tags ..."})};var h=function(e){var s=e.rep;return s>1e6?(s=Math.floor(s/1e6)+Number((s%1e6*1e-6).toFixed(1)),"".concat(s,"m")):s>1e3?(s=Math.floor(s/1e3)+Number((s%1e3*.001).toFixed(1)),"".concat(s,"k")):"".concat(s)};var x=function(e){var s=Object(c.useState)(!1),t=Object(i.a)(s,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"userBlock",children:[Object(l.jsxs)(o.b,{to:"users/".concat(e.item.user_id),children:[Object(l.jsx)("img",{src:e.item.profile_image,alt:"user",className:"profileImage",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)}})," "]}),Object(l.jsxs)("div",{className:"userInfo",children:[Object(l.jsx)(o.b,{to:"users/".concat(e.item.user_id),children:Object(l.jsx)("span",{className:"userName",children:e.item.display_name})}),Object(l.jsx)("span",{className:"userLocation",children:e.item.location}),Object(l.jsx)("span",{className:"repInfo",children:Object(l.jsxs)("span",{className:"reputation",children:[" ",Object(l.jsx)(h,{rep:e.item.reputation})," "]})}),Object(l.jsx)("span",{className:"tags",children:Object(l.jsx)(m,{id:e.item.user_id})})]}),n?Object(l.jsx)(O,{item:e.item}):""]},e.item.user_id)};var f=function(e){var s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],u=Object(c.useState)({}),b=Object(i.a)(u,2),O=b[0],m=b[1],h=Object(c.useState)({sortOrder:"",sortBy:""}),f=Object(i.a)(h,2),g=f[0],p=f[1];Object(c.useEffect)((function(){p(e)}),[e]);var v="https://api.stackexchange.com/2.2/users?".concat(g.sortOrder?"order=".concat(g.sortOrder,"&sort=").concat(g.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDp)d5&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[g]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsx)("div",{className:"container",children:O.map((function(e){return Object(l.jsx)("div",{className:"user",children:Object(l.jsx)(x,{item:e})})}))}):Object(l.jsx)("div",{children:"Loading users ..."})};var g=function(e){var s,t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),d=j[0],u=j[1],b=Object(c.useState)({}),O=Object(i.a)(b,2),m=O[0],h=O[1],x="https://api.stackexchange.com/2.2/tags/".concat(encodeURIComponent(e.name),"/wikis?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),r(e)}))}),[]),console.log(m),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):d?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{className:"tagDescription",children:(s=m[0].excerpt,s.substring(0,140)+"...")})}):Object(l.jsx)("div",{children:"Loading tags ..."})};t(36);var p=function(e){var s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),j=Object(i.a)(r,2),d=j[0],u=j[1],b=Object(c.useState)({}),O=Object(i.a)(b,2),m=O[0],h=O[1],x=Object(c.useState)({sortOrder:"",sortBy:""}),f=Object(i.a)(x,2),p=f[0],v=f[1];Object(c.useEffect)((function(){v(e)}),[e]);var N="https://api.stackexchange.com/2.2/tags?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDqt9p&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(N).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),a(e)}))}),[p]),console.log(m),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):d?Object(l.jsx)("div",{className:"container",children:m.map((function(s){return Object(l.jsxs)("div",{className:"tagBlock",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("p",{className:"tagName",onClick:function(){return e.changeTag(s.name)},children:s.name})}),Object(l.jsx)(g,{name:decodeURIComponent(s.name)}),Object(l.jsxs)("p",{className:"numOfQuestions",children:[s.count," questions"]})]})}))}):Object(l.jsx)("div",{children:"Loading tags ..."})},v=t(4);t(37),t(38);var N=function(e){return Object(l.jsxs)("nav",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(o.c,{to:"/",onClick:function(){e.setSortOrder("",""),e.changeTag("")},children:" Main "})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(o.c,{to:"/users",onClick:function(){return e.setSortOrder("","")},children:" Users "})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(o.c,{to:"/tags",onClick:function(){return e.setSortOrder("","")},children:" Tags "})," "]})]})};t(14);var w=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byActivity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by activity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byVotes sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by votes"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","votes")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","votes")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byCreation sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by creation"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]})]})};var y=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byRep sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by reputation"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","reputation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","reputation")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byDate sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by creation date"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byName sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by name"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})};var k=function(e){return Object(l.jsxs)("div",{className:"sorting",children:[Object(l.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(l.jsxs)("div",{className:"byPopularity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by popularity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","popular")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","popular")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byActivity sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by activity"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(l.jsxs)("div",{className:"byName sortOption",children:[Object(l.jsx)("p",{className:"sortName",children:"by name"}),Object(l.jsxs)("p",{className:"sortOrder",children:[Object(l.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(l.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})},S=(t(39),function(e){var s=e.date,t=new Date(1e3*s),c=t.getDate();c<10&&(c="0"+c);var n=t.getMonth()+1;n<10&&(n="0"+n);var a=t.getFullYear(),r=t.getHours();r<10&&(r="0"+r);var i=t.getMinutes();i<10&&(i="0"+i);var o=t.toLocaleString("en",{month:"short"});t="".concat(o," ").concat(c," ").concat(a," at ").concat(r,":").concat(i);var j="".concat(c,".").concat(n,".").concat(a),l=new Date,d=l.getDate();d<10&&(d="0"+d);var u=l.getMonth()+1;u<10&&(u="0"+u);var b=l.getFullYear(),O=l.getHours();O<10&&(O="0"+O);var m=l.getMinutes();if(m<10&&(m="0"+m),j===(l="".concat(d,".").concat(u,".").concat(b))){var h=m+60*O-(i+60*r);if(h<60)return h<1?"just now":"".concat(h," min ago");if(h/60<24)return 1===(h/60).toFixed(0)?"".concat((h/60).toFixed(0)," hour ago"):"".concat((h/60).toFixed(0)," hours ago")}if(n===u){if(d-c===2)return"2 days ago";if(d-c===1)return"yesterday"}return t});var _=function(e){var s,t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)(!1),d=Object(i.a)(j,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(i.a)(O,2),h=m[0],x=m[1],f=Object(c.useState)({sortOrder:"",sortBy:""}),g=Object(i.a)(f,2),p=g[0],v=g[1];return Object(c.useEffect)((function(){v(e),e.changeTag(e.tag)}),[e]),console.log(e.tag),s=e.tag?"https://api.stackexchange.com/2.2/search?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","tagged=").concat(e.tag,"&site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/questions?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){x(e.items),b(!0)}),(function(e){b(!0),r(e)}))}),[p,e.tag]),console.log(h),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):u?Object(l.jsx)(l.Fragment,{children:h.map((function(s){return Object(l.jsxs)("div",{className:"questionBlock",children:[Object(l.jsxs)("div",{className:"votes",children:[s.score,Object(l.jsx)("p",{children:"votes"})]}),Object(l.jsxs)("div",{className:s.answer_count>0?s.is_answered?"answers hasAcceptedAnswer":"answers answered":"answers",children:[s.answer_count,Object(l.jsx)("p",{children:"answers"})]}),Object(l.jsxs)("div",{className:"views",children:[s.view_count,Object(l.jsx)("p",{children:"views"})]}),Object(l.jsxs)("div",{className:"theQuestion",children:[Object(l.jsx)("div",{className:"questionTitle",children:Object(l.jsx)(o.b,{to:"/questions/".concat(s.question_id),children:s.title})}),Object(l.jsxs)("div",{className:"tags",children:[s.tags.map((function(s){return Object(l.jsx)("div",{className:"tag",onClick:function(){return e.changeTag(s)},children:s},s)})),Object(l.jsxs)("div",{className:"ownerInfo",children:[Object(l.jsxs)("span",{className:"questionDate",children:[" asked ",Object(l.jsx)(S,{date:s.creation_date})," by "]}),Object(l.jsx)(o.b,{to:"users/".concat(s.owner.user_id),children:Object(l.jsxs)("span",{className:"questionOwner",children:[" ",s.owner.display_name," "]})}),Object(l.jsxs)("span",{className:"questionOwnerRep",children:[" ",s.owner.reputation," "]})]})]})]})]},s.question_id)}))}):Object(l.jsx)("div",{children:"Loading..."})};t(40),t(41),t(42);var I=function(e){return Object(l.jsx)(l.Fragment,{children:e.comments.map((function(s){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:s.body||""}}),"-",Object(l.jsx)("span",{className:"authorName",children:s.owner.display_name}),Object(l.jsx)("span",{className:"commentDate",children:e.formatDate(s.creation_date)})]},s.comment_id)}))})};var q=function(e){return Object(l.jsx)("div",{className:"answerBlock",children:Object(l.jsxs)("div",{className:"answerBody",children:[Object(l.jsxs)("div",{className:"voting",children:[Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up"}),Object(l.jsx)("p",{children:e.answer.score}),Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down"}),Object(l.jsx)("img",{className:e.answer.is_accepted?"accepted":"notAccepted",src:"https://img.icons8.com/fluent/144/26e07f/checkmark.png",alt:"accepted"}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(l.jsxs)("div",{className:"answerText",children:[Object(l.jsx)("div",{className:"textOfAnswer",dangerouslySetInnerHTML:{__html:e.answer.body||""}}),Object(l.jsxs)("div",{className:"ownerOfAnswerInfo",children:[Object(l.jsxs)("span",{className:"dateOfAnswer",children:["answered ",e.formatDate(e.answer.creation_date)]}),Object(l.jsxs)("div",{className:"moreOwnerInfo",children:[Object(l.jsx)("img",{src:e.answer.owner.profile_image,className:"userOfAnswerPic",alt:"user"}),Object(l.jsxs)("div",{className:"genInfo",children:[Object(l.jsx)("span",{className:"userOfAnswerName",children:e.answer.owner.display_name}),Object(l.jsxs)("span",{className:"userOfAnswerRep",children:["reputation: ",Object(l.jsx)(h,{rep:e.answer.owner.reputation})]})]})]})]}),Object(l.jsx)("div",{className:"comments",children:e.answer.comment_count>0?Object(l.jsx)(I,{comments:e.answer.comments,formatDate:e.formatDate}):""})]})]})},e.id)};var D=function(){var e=Object(v.e)().questionId,s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],u=Object(c.useState)({}),b=Object(i.a)(u,2),O=b[0],m=b[1],x="https://api.stackexchange.com/2.2/questions/".concat(e,"?site=stackoverflow&filter=!IMtrxW)5mznbjA.Szm-Ccb1ppdMOnFW9TLEnzgsY1Z1xzCT&key=wud)gxqaQ5vssDmltw6d1A((");Object(c.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[]),console.log(O);var f=function(e){var s=new Date(1e3*e),t=s.getDate();t<10&&(t="0"+t);var c=s.getMonth()+1;c<10&&(c="0"+c);var n=s.getFullYear(),a=s.getHours();a<10&&(a="0"+a);var r=s.getMinutes();r<10&&(r="0"+r);var i=s.toLocaleString("en",{month:"short"});s="".concat(i," ").concat(t," ").concat(n," at ").concat(a,":").concat(r);var o="".concat(t,".").concat(c,".").concat(n),j=new Date,l=j.getDate();l<10&&(l="0"+l);var d=j.getMonth()+1;d<10&&(d="0"+d);var u=j.getFullYear();if(o===(j="".concat(l,".").concat(d,".").concat(u)))return"today";if(c===d){if(l-t===2)return"2 days ago";if(l-t===1)return"yesterday"}return s};return n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"theQuestionBlock",children:[Object(l.jsxs)("div",{className:"headOfBlock",children:[Object(l.jsx)("h3",{children:O[0].title}),Object(l.jsxs)("div",{className:"dates",children:["asked: ",Object(l.jsx)("span",{className:"when",children:f(O[0].creation_date)})]})]}),Object(l.jsxs)("div",{className:"questionBody",children:[Object(l.jsxs)("div",{className:"voting",children:[Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up"}),Object(l.jsx)("p",{children:O[0].score}),Object(l.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down"}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/ios-filled/150/ffffff/favorites.png",alt:"add to fav"}),Object(l.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(l.jsxs)("div",{className:"questionText",children:[Object(l.jsx)("div",{className:"textOfQuestion",dangerouslySetInnerHTML:{__html:O[0].body||""}}),Object(l.jsxs)("div",{className:"tagsOfQuestion",children:[O[0].tags.map((function(e){return Object(l.jsx)("div",{className:"tagOfQuestion",children:e})})),Object(l.jsxs)("div",{className:"ownerOfQuestionInfo",children:[Object(l.jsx)("img",{src:O[0].owner.profile_image,className:"userOfQuestionPic",alt:"user"}),Object(l.jsxs)("div",{className:"genInfo",children:[Object(l.jsx)("span",{className:"userOfQuestionName",children:O[0].owner.display_name}),Object(l.jsxs)("span",{className:"userOfQuestionRep",children:["reputation: ",Object(l.jsx)(h,{rep:O[0].owner.reputation})]})]})]})]}),Object(l.jsx)("div",{className:"comments",children:O[0].comment_count>0?Object(l.jsx)(I,{comments:O[0].comments,formatDate:f}):""})]})]})]}),Object(l.jsxs)("div",{className:"answers",children:[Object(l.jsxs)("h2",{className:"numOfAnswers",children:[O[0].answers?O[0].answers.length:0," ",O[0].answers&&1===O[0].answers.length?"Answer":"Answers"]}),O[0].answers?O[0].answers.map((function(e){return Object(l.jsx)(q,{answer:e,formatDate:f,id:e.answer_id})})):""]})]}):Object(l.jsx)("div",{children:"Loading..."})};t(43);var P=function(e){var s,t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)(!1),d=Object(i.a)(j,2),u=d[0],b=d[1],O=Object(c.useState)({}),m=Object(i.a)(O,2),h=m[0],x=m[1],f=function(e){return e.substring(0,150).trim()};s="posts"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/posts?site=stackoverflow&filter=!LH22N3W(ohE.oBUhc1Z_jP&key=wud)gxqaQ5vssDmltw6d1A(("):"questions"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/questions?site=stackoverflow&filter=!-MOiN_e9RRw)PrRV4)m9autDpK1W-y)25&key=wud)gxqaQ5vssDmltw6d1A(("):"answers"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/answers?site=stackoverflow&filter=!)Q29mwsOXXJGPIa)BWJ5Yi3H&key=wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/comments?site=stackoverflow&filter=!SWJ_aFhOX4jJ4Lt8gw&key=wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){x(e.items),b(!0)}),(function(e){b(!0),r(e)}))}),[e.type]);var g=0;return console.log(h),a?Object(l.jsxs)("div",{children:["Error: ",a.message]}):u?Object(l.jsx)(l.Fragment,{children:h.map((function(s){return Object(l.jsxs)("div",{className:"userPagePost",children:["posts"===e.type||"questions"===e.type?s.question_id?Object(l.jsx)(o.b,{to:"/questions/".concat(s.question_id),children:Object(l.jsx)("p",{className:"userPost",children:s.title})}):Object(l.jsx)("p",{className:"userPost",children:s.title}):s.body?s.question_id?Object(l.jsx)(o.b,{to:"/questions/".concat(s.question_id),children:Object(l.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:f(s.body)||""}})}):Object(l.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:f(s.body)||""}}):"",Object(l.jsx)("p",{className:"userPostDate",children:Object(l.jsx)(S,{date:s.creation_date})})]},g++)}))}):Object(l.jsx)("div",{children:"Loading..."})};var C=function(){var e=Object(v.e)().userId,s=Object(c.useState)(null),t=Object(i.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],u=Object(c.useState)({}),b=Object(i.a)(u,2),O=b[0],m=b[1],h=Object(c.useState)("posts"),x=Object(i.a)(h,2),f=x[0],g=x[1],p="https://api.stackexchange.com/2.2/users/".concat(e,"?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((&filter=!9_bDDp)d5");return Object(c.useEffect)((function(){fetch(p).then((function(e){return e.json()})).then((function(e){m(e.items),d(!0)}),(function(e){d(!0),a(e)}))}),[]),console.log(O),n?Object(l.jsxs)("div",{children:["Error: ",n.message]}):j?Object(l.jsxs)("div",{className:"userPage",children:[Object(l.jsxs)("div",{className:"mainUserPageInfo",children:[Object(l.jsxs)("div",{className:"userPicandInfo",children:[Object(l.jsx)("img",{src:O[0].profile_image,alt:"user"}),Object(l.jsxs)("p",{className:"userPageRep",children:[O[0].reputation," reputation"]}),Object(l.jsxs)("p",{className:"userPageBadgesInfo",children:[Object(l.jsxs)("span",{className:"bronzeBadge",children:[" ",O[0].badge_counts.bronze]}),Object(l.jsxs)("span",{className:"silverBadge",children:[" ",O[0].badge_counts.silver]}),Object(l.jsxs)("span",{className:"goldBadge",children:[" ",O[0].badge_counts.gold]})]})]}),Object(l.jsxs)("div",{className:"userPageGenInfo",children:[Object(l.jsx)("p",{className:"userPageUserName",children:O[0].display_name}),Object(l.jsx)("p",{className:"userPageAboutUser",dangerouslySetInnerHTML:{__html:O[0].about_me||""}})]}),Object(l.jsxs)("div",{className:"userPageUserProfInfo",children:[Object(l.jsxs)("p",{className:"userPageLocation",children:["Location: ",O[0].location]}),Object(l.jsxs)("p",{className:"userPageWebsite",children:["Website: ",Object(l.jsx)("a",{href:O[0].website_url,children:O[0].website_url})]}),Object(l.jsxs)("p",{className:"userLastActive",children:["active ",Object(l.jsx)(S,{date:O[0].last_access_date})]})]})]}),Object(l.jsxs)("nav",{className:"userPageNav",children:[Object(l.jsx)("li",{onClick:function(){return g("posts")},children:" Posts "}),Object(l.jsx)("li",{onClick:function(){return g("questions")},children:" Questions "}),Object(l.jsx)("li",{onClick:function(){return g("answers")},children:" Answers "}),Object(l.jsx)("li",{onClick:function(){return g("coments")},children:" Comments "})]}),Object(l.jsx)("div",{className:"userStats",children:Object(l.jsx)(P,{type:f,userId:e})})]}):Object(l.jsx)("div",{children:"Loading..."})};var B=function(){var e=Object(c.useState)(""),s=Object(i.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(),r=Object(i.a)(a,2),o=r[0],j=r[1],d=Object(c.useState)(),u=Object(i.a)(d,2),O=u[0],m=u[1],h=function(e){m(e)},x=function(e,s){n(e),j(s)};return console.log("order in parent is ".concat(t," and sort by ").concat(o)),Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{id:"sideBar",children:Object(l.jsx)(N,{setSortOrder:x,changeTag:h})}),Object(l.jsxs)("div",{id:"mainField",children:[Object(l.jsxs)("div",{className:"sortingOptions",children:[Object(l.jsx)(v.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(w,Object(b.a)(Object(b.a)({},e),{},{setSortOrder:x}))}}),Object(l.jsx)(v.a,{exact:!0,path:"/users",render:function(e){return Object(l.jsx)(y,Object(b.a)(Object(b.a)({},e),{},{setSortOrder:x}))}}),Object(l.jsx)(v.a,{path:"/tags",render:function(e){return Object(l.jsx)(k,Object(b.a)(Object(b.a)({},e),{},{setSortOrder:x}))}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(_,Object(b.a)(Object(b.a)({},e),{},{sortOrder:t,sortBy:o,changeTag:h,tag:O}))}}),Object(l.jsx)(v.a,{exact:!0,path:"/users",render:function(e){return Object(l.jsx)(f,Object(b.a)(Object(b.a)({},e),{},{sortOrder:t,sortBy:o}))}}),Object(l.jsx)(v.a,{path:"/tags",render:function(e){return Object(l.jsx)(p,Object(b.a)(Object(b.a)({},e),{},{sortOrder:t,sortBy:o,changeTag:h}))}}),Object(l.jsx)(v.a,{exact:!0,path:"/questions/:questionId",component:D}),Object(l.jsx)(v.a,{exact:!0,path:"/users/:userId",component:C})]})]})]})};var A=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("h3",{children:"Footer"})})};var L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(B,{}),Object(l.jsx)(A,{})]})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,r=s.getTTFB;t(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),E()}],[[44,1,2]]]);
//# sourceMappingURL=main.c979e425.chunk.js.map