(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],[,,,,,,,,,,,,,,function(e,s,t){},,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(18),r=t.n(a),i=(t(25),t(26),t(3)),o=(t(27),t(0));var j=function(){var e=null,s=function(s){window.SE.authenticate({success:function(s){alert("\u042f \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f!"),e=s,console.log(e)},error:function(e){alert("\u042f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f :(")}})};return Object(c.useEffect)((function(){window.SE.init({clientId:19680,key:"wud)gxqaQ5vssDmltw6d1A((",channelUrl:"https://sashasher24.github.io/usof",complete:s})}),[]),console.log("me1"),Object(o.jsxs)("header",{children:[Object(o.jsxs)(i.b,{to:"/",children:[" ",Object(o.jsx)("img",{src:"https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png",alt:"logo",id:"logo"})]}),Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{type:"text",name:"search",placeholder:"Search ...",id:"searchInput"}),Object(o.jsx)("button",{type:"submit",id:"searchButton",children:"GO"})]}),Object(o.jsx)("button",{children:" Log in "})]})},l=t(8),d=t(2);t(34);var u=function(e){return console.log("preview"),Object(o.jsx)("div",{className:"userPreviewBlock",children:Object(o.jsxs)("div",{className:"userPreview",children:[Object(o.jsx)("div",{className:"generalInfoPreview",children:Object(o.jsxs)("div",{className:"userInfoPreview",children:[Object(o.jsx)("span",{className:"userNamePreview",children:e.item.display_name}),Object(o.jsx)("span",{className:"userLocationPreview",children:e.item.location}),Object(o.jsxs)("span",{className:"repInfoPreview",children:[Object(o.jsxs)("span",{className:"reputationPreview",children:[" ",e.item.reputation," "]}),Object(o.jsxs)("span",{className:"bronze",children:[" b ",e.item.badge_counts.bronze," "]}),Object(o.jsxs)("span",{className:"silver",children:[" s ",e.item.badge_counts.silver," "]}),Object(o.jsxs)("span",{className:"gold",children:[" g ",e.item.badge_counts.gold," "]})]}),Object(o.jsx)("span",{className:"websitePreview",children:e.item.website_url})]})}),Object(o.jsx)("div",{className:"aboutPreview",dangerouslySetInnerHTML:{__html:e.item.about_me.substring(0,400).trim()+"..."||""}})]})})};t(35);var O=function(e){var s=Object(c.useState)(null),t=Object(d.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(d.a)(r,2),j=i[0],l=i[1],u=Object(c.useState)({}),O=Object(d.a)(u,2),b=O[0],m=O[1],h="https://api.stackexchange.com/2.2/users/".concat(e.id,"/top-tags?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(h).then((function(e){return e.json()})).then((function(e){m(e.items),l(!0)}),(function(e){l(!0),a(e)}))}),[]),console.log(b),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):j?Object(o.jsx)(o.Fragment,{children:b.slice(0,3).map((function(e){return Object(o.jsx)("span",{className:"userTag",children:e.tag_name})}))}):Object(o.jsx)("div",{children:"Loading tags ..."})};var b=function(e){var s=e.rep;return s>1e6?(s=Math.floor(s/1e6)+Number((s%1e6*1e-6).toFixed(1)),"".concat(s,"m")):s>1e3?(s=Math.floor(s/1e3)+Number((s%1e3*.001).toFixed(1)),"".concat(s,"k")):"".concat(s)};var m=function(e){var s=Object(c.useState)(!1),t=Object(d.a)(s,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{className:"userBlock",children:[Object(o.jsxs)(i.b,{to:"users/".concat(e.item.user_id),children:[Object(o.jsx)("img",{src:e.item.profile_image,alt:"user",className:"profileImage",onMouseOver:function(){return a(!0)},onMouseOut:function(){return a(!1)}})," "]}),Object(o.jsxs)("div",{className:"userInfo",children:[Object(o.jsx)(i.b,{to:"users/".concat(e.item.user_id),children:Object(o.jsx)("span",{className:"userName",children:e.item.display_name})}),Object(o.jsx)("span",{className:"userLocation",children:e.item.location}),Object(o.jsx)("span",{className:"repInfo",children:Object(o.jsxs)("span",{className:"reputation",children:[" ",Object(o.jsx)(b,{rep:e.item.reputation})," "]})}),Object(o.jsx)("span",{className:"tags",children:Object(o.jsx)(O,{id:e.item.user_id})})]}),n?Object(o.jsx)(u,{item:e.item}):""]},e.item.user_id)};var h=function(e){var s=Object(c.useState)(null),t=Object(d.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(d.a)(r,2),j=i[0],l=i[1],u=Object(c.useState)({}),O=Object(d.a)(u,2),b=O[0],h=O[1],x=Object(c.useState)({sortOrder:"",sortBy:""}),f=Object(d.a)(x,2),p=f[0],g=f[1];Object(c.useEffect)((function(){g(e)}),[e]);var v="https://api.stackexchange.com/2.2/users?".concat(p.sortOrder?"order=".concat(p.sortOrder,"&sort=").concat(p.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDp)d5&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){h(e.items),l(!0)}),(function(e){l(!0),a(e)}))}),[p]),console.log(b),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):j?Object(o.jsx)("div",{className:"container",children:b.map((function(e){return Object(o.jsx)("div",{className:"user",children:Object(o.jsx)(m,{item:e})})}))}):Object(o.jsx)("div",{children:"Loading users ..."})};var x=function(e){var s,t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),j=Object(d.a)(i,2),l=j[0],u=j[1],O=Object(c.useState)({}),b=Object(d.a)(O,2),m=b[0],h=b[1],x="https://api.stackexchange.com/2.2/tags/".concat(encodeURIComponent(e.name),"/wikis?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),r(e)}))}),[]),console.log(m),a?Object(o.jsxs)("div",{children:["Error: ",a.message]}):l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"tagDescription",children:(s=m[0].excerpt,s.substring(0,140)+"...")})}):Object(o.jsx)("div",{children:"Loading tags ..."})};t(36);var f=function(e){var s=Object(c.useState)(null),t=Object(d.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),j=Object(d.a)(r,2),l=j[0],u=j[1],O=Object(c.useState)({}),b=Object(d.a)(O,2),m=b[0],h=b[1],f=Object(c.useState)({sortOrder:"",sortBy:""}),p=Object(d.a)(f,2),g=p[0],v=p[1];Object(c.useEffect)((function(){v(e)}),[e]);var N="https://api.stackexchange.com/2.2/tags?".concat(g.sortOrder?"order=".concat(g.sortOrder,"&sort=").concat(g.sortBy,"&"):"","site=stackoverflow&filter=!9_bDDqt9p&key=wud)gxqaQ5vssDmltw6d1A((");return Object(c.useEffect)((function(){fetch(N).then((function(e){return e.json()})).then((function(e){h(e.items),u(!0)}),(function(e){u(!0),a(e)}))}),[g]),console.log(m),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):l?Object(o.jsx)("div",{className:"container",children:m.map((function(s){return Object(o.jsxs)("div",{className:"tagBlock",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("p",{className:"tagName",onClick:function(){return e.changeTag(s.name)},children:s.name})}),Object(o.jsx)(x,{name:decodeURIComponent(s.name)}),Object(o.jsxs)("p",{className:"numOfQuestions",children:[s.count," questions"]})]})}))}):Object(o.jsx)("div",{children:"Loading tags ..."})},p=t(4);t(37),t(38);var g=function(e){return Object(o.jsxs)("nav",{children:[Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.c,{to:"/",onClick:function(){e.setSortOrder("",""),e.changeTag("")},children:" Main "})," "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.c,{to:"/users",onClick:function(){return e.setSortOrder("","")},children:" Users "})," "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(i.c,{to:"/tags",onClick:function(){return e.setSortOrder("","")},children:" Tags "})," "]})]})};t(14);var v=function(e){return Object(o.jsxs)("div",{className:"sorting",children:[Object(o.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(o.jsxs)("div",{className:"byActivity sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by activity"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byVotes sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by votes"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","votes")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","votes")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byCreation sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by creation"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]})]})};var N=function(e){return Object(o.jsxs)("div",{className:"sorting",children:[Object(o.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(o.jsxs)("div",{className:"byRep sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by reputation"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","reputation")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","reputation")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byDate sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by creation date"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","creation")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","creation")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byName sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by name"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})};var w=function(e){return Object(o.jsxs)("div",{className:"sorting",children:[Object(o.jsx)("span",{className:"sortby",children:"Sort by: "}),Object(o.jsxs)("div",{className:"byPopularity sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by popularity"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","popular")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","popular")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byActivity sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by activity"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","activity")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","activity")},children:"desc"})]})]}),Object(o.jsxs)("div",{className:"byName sortOption",children:[Object(o.jsx)("p",{className:"sortName",children:"by name"}),Object(o.jsxs)("p",{className:"sortOrder",children:[Object(o.jsx)("span",{className:"asc",onClick:function(){e.setSortOrder("asc","name")},children:"asc"}),Object(o.jsx)("span",{className:"desc",onClick:function(){e.setSortOrder("desc","name")},children:"desc"})]})]})]})},y=(t(39),function(e){var s=e.date,t=new Date(1e3*s),c=t.getDate();c<10&&(c="0"+c);var n=t.getMonth()+1;n<10&&(n="0"+n);var a=t.getFullYear(),r=t.getHours();r<10&&(r="0"+r);var i=t.getMinutes();i<10&&(i="0"+i);var o=t.toLocaleString("en",{month:"short"});t="".concat(o," ").concat(c," ").concat(a," at ").concat(r,":").concat(i);var j="".concat(c,".").concat(n,".").concat(a),l=new Date,d=l.getDate();d<10&&(d="0"+d);var u=l.getMonth()+1;u<10&&(u="0"+u);var O=l.getFullYear(),b=l.getHours();b<10&&(b="0"+b);var m=l.getMinutes();if(m<10&&(m="0"+m),j===(l="".concat(d,".").concat(u,".").concat(O))){var h=m+60*b-(i+60*r);if(h<60)return h<1?"just now":"".concat(h," min ago");if(h/60<24)return 1===(h/60).toFixed(0)?"".concat((h/60).toFixed(0)," hour ago"):"".concat((h/60).toFixed(0)," hours ago")}if(n===u){if(d-c===2)return"2 days ago";if(d-c===1)return"yesterday"}return t});var k=function(e){var s,t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)(!1),l=Object(d.a)(j,2),u=l[0],O=l[1],b=Object(c.useState)({}),m=Object(d.a)(b,2),h=m[0],x=m[1],f=Object(c.useState)({sortOrder:"",sortBy:""}),p=Object(d.a)(f,2),g=p[0],v=p[1];return Object(c.useEffect)((function(){v(e),e.changeTag(e.tag)}),[e]),console.log(e.tag),s=e.tag?"https://api.stackexchange.com/2.2/search?".concat(g.sortOrder?"order=".concat(g.sortOrder,"&sort=").concat(g.sortBy,"&"):"","tagged=").concat(e.tag,"&site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/questions?".concat(g.sortOrder?"order=".concat(g.sortOrder,"&sort=").concat(g.sortBy,"&"):"","site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){x(e.items),O(!0)}),(function(e){O(!0),r(e)}))}),[g,e.tag]),console.log(h),a?Object(o.jsxs)("div",{children:["Error: ",a.message]}):u?Object(o.jsx)(o.Fragment,{children:h.map((function(s){return Object(o.jsxs)("div",{className:"questionBlock",children:[Object(o.jsxs)("div",{className:"votes",children:[s.score,Object(o.jsx)("p",{children:"votes"})]}),Object(o.jsxs)("div",{className:s.answer_count>0?s.is_answered?"answers hasAcceptedAnswer":"answers answered":"answers",children:[s.answer_count,Object(o.jsx)("p",{children:"answers"})]}),Object(o.jsxs)("div",{className:"views",children:[s.view_count,Object(o.jsx)("p",{children:"views"})]}),Object(o.jsxs)("div",{className:"theQuestion",children:[Object(o.jsx)("div",{className:"questionTitle",children:Object(o.jsx)(i.b,{to:"/questions/".concat(s.question_id),children:s.title})}),Object(o.jsxs)("div",{className:"tags",children:[s.tags.map((function(s){return Object(o.jsx)("div",{className:"tag",onClick:function(){return e.changeTag(s)},children:s},s)})),Object(o.jsxs)("div",{className:"ownerInfo",children:[Object(o.jsxs)("span",{className:"questionDate",children:[" asked ",Object(o.jsx)(y,{date:s.creation_date})," by "]}),Object(o.jsx)(i.b,{to:"users/".concat(s.owner.user_id),children:Object(o.jsxs)("span",{className:"questionOwner",children:[" ",s.owner.display_name," "]})}),Object(o.jsxs)("span",{className:"questionOwnerRep",children:[" ",s.owner.reputation," "]})]})]})]})]},s.question_id)}))}):Object(o.jsx)("div",{children:"Loading..."})};t(40),t(41),t(42);var S=function(e){return Object(o.jsx)(o.Fragment,{children:e.comments.map((function(s){return Object(o.jsxs)("div",{className:"comment",children:[Object(o.jsx)("span",{dangerouslySetInnerHTML:{__html:s.body||""}}),"-",Object(o.jsx)("span",{className:"authorName",children:s.owner.display_name}),Object(o.jsx)("span",{className:"commentDate",children:e.formatDate(s.creation_date)})]},s.comment_id)}))})};var _=function(e){return Object(o.jsx)("div",{className:"answerBlock",children:Object(o.jsxs)("div",{className:"answerBody",children:[Object(o.jsxs)("div",{className:"voting",children:[Object(o.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up"}),Object(o.jsx)("p",{children:e.answer.score}),Object(o.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down"}),Object(o.jsx)("img",{className:e.answer.is_accepted?"accepted":"notAccepted",src:"https://img.icons8.com/fluent/144/26e07f/checkmark.png",alt:"accepted"}),Object(o.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(o.jsxs)("div",{className:"answerText",children:[Object(o.jsx)("div",{className:"textOfAnswer",dangerouslySetInnerHTML:{__html:e.answer.body||""}}),Object(o.jsxs)("div",{className:"ownerOfAnswerInfo",children:[Object(o.jsxs)("span",{className:"dateOfAnswer",children:["answered ",e.formatDate(e.answer.creation_date)]}),Object(o.jsxs)("div",{className:"moreOwnerInfo",children:[Object(o.jsx)("img",{src:e.answer.owner.profile_image,className:"userOfAnswerPic",alt:"user"}),Object(o.jsxs)("div",{className:"genInfo",children:[Object(o.jsx)("span",{className:"userOfAnswerName",children:e.answer.owner.display_name}),Object(o.jsxs)("span",{className:"userOfAnswerRep",children:["reputation: ",Object(o.jsx)(b,{rep:e.answer.owner.reputation})]})]})]})]}),Object(o.jsx)("div",{className:"comments",children:e.answer.comment_count>0?Object(o.jsx)(S,{comments:e.answer.comments,formatDate:e.formatDate}):""})]})]})},e.id)};var I=function(){var e=Object(p.e)().questionId,s=Object(c.useState)(null),t=Object(d.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(d.a)(r,2),j=i[0],l=i[1],u=Object(c.useState)({}),O=Object(d.a)(u,2),m=O[0],h=O[1],x="https://api.stackexchange.com/2.2/questions/".concat(e,"?site=stackoverflow&filter=!IMtrxW)5mznbjA.Szm-Ccb1ppdMOnFW9TLEnzgsY1Z1xzCT&key=wud)gxqaQ5vssDmltw6d1A((");Object(c.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){h(e.items),l(!0)}),(function(e){l(!0),a(e)}))}),[]),console.log(m);var f=function(e){var s=new Date(1e3*e),t=s.getDate();t<10&&(t="0"+t);var c=s.getMonth()+1;c<10&&(c="0"+c);var n=s.getFullYear(),a=s.getHours();a<10&&(a="0"+a);var r=s.getMinutes();r<10&&(r="0"+r);var i=s.toLocaleString("en",{month:"short"});s="".concat(i," ").concat(t," ").concat(n," at ").concat(a,":").concat(r);var o="".concat(t,".").concat(c,".").concat(n),j=new Date,l=j.getDate();l<10&&(l="0"+l);var d=j.getMonth()+1;d<10&&(d="0"+d);var u=j.getFullYear();if(o===(j="".concat(l,".").concat(d,".").concat(u)))return"today";if(c===d){if(l-t===2)return"2 days ago";if(l-t===1)return"yesterday"}return s};return n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"theQuestionBlock",children:[Object(o.jsxs)("div",{className:"headOfBlock",children:[Object(o.jsx)("h3",{children:m[0].title}),Object(o.jsxs)("div",{className:"dates",children:["asked: ",Object(o.jsx)("span",{className:"when",children:f(m[0].creation_date)})]})]}),Object(o.jsxs)("div",{className:"questionBody",children:[Object(o.jsxs)("div",{className:"voting",children:[Object(o.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-up.png",alt:"vote up"}),Object(o.jsx)("p",{children:m[0].score}),Object(o.jsx)("img",{className:"voteButton",src:"https://img.icons8.com/ios-filled/100/ffffff/sort-down.png",alt:"vote down"}),Object(o.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/ios-filled/150/ffffff/favorites.png",alt:"add to fav"}),Object(o.jsx)("img",{className:"sideButton",src:"https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png",alt:"see history"})]}),Object(o.jsxs)("div",{className:"questionText",children:[Object(o.jsx)("div",{className:"textOfQuestion",dangerouslySetInnerHTML:{__html:m[0].body||""}}),Object(o.jsxs)("div",{className:"tagsOfQuestion",children:[m[0].tags.map((function(e){return Object(o.jsx)("div",{className:"tagOfQuestion",children:e})})),Object(o.jsxs)("div",{className:"ownerOfQuestionInfo",children:[Object(o.jsx)("img",{src:m[0].owner.profile_image,className:"userOfQuestionPic",alt:"user"}),Object(o.jsxs)("div",{className:"genInfo",children:[Object(o.jsx)("span",{className:"userOfQuestionName",children:m[0].owner.display_name}),Object(o.jsxs)("span",{className:"userOfQuestionRep",children:["reputation: ",Object(o.jsx)(b,{rep:m[0].owner.reputation})]})]})]})]}),Object(o.jsx)("div",{className:"comments",children:m[0].comment_count>0?Object(o.jsx)(S,{comments:m[0].comments,formatDate:f}):""})]})]})]}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("h2",{className:"numOfAnswers",children:[m[0].answers?m[0].answers.length:0," ",m[0].answers&&1===m[0].answers.length?"Answer":"Answers"]}),m[0].answers?m[0].answers.map((function(e){return Object(o.jsx)(_,{answer:e,formatDate:f,id:e.answer_id})})):""]})]}):Object(o.jsx)("div",{children:"Loading..."})};t(43);var q=function(e){var s,t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)(!1),l=Object(d.a)(j,2),u=l[0],O=l[1],b=Object(c.useState)({}),m=Object(d.a)(b,2),h=m[0],x=m[1],f=function(e){return e.substring(0,150).trim()};s="posts"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/posts?site=stackoverflow&filter=!LH22N3W(ohE.oBUhc1Z_jP&key=wud)gxqaQ5vssDmltw6d1A(("):"questions"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/questions?site=stackoverflow&filter=!-MOiN_e9RRw)PrRV4)m9autDpK1W-y)25&key=wud)gxqaQ5vssDmltw6d1A(("):"answers"===e.type?"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/answers?site=stackoverflow&filter=!)Q29mwsOXXJGPIa)BWJ5Yi3H&key=wud)gxqaQ5vssDmltw6d1A(("):"https://api.stackexchange.com/2.2/users/".concat(e.userId,"/comments?site=stackoverflow&filter=!SWJ_aFhOX4jJ4Lt8gw&key=wud)gxqaQ5vssDmltw6d1A(("),Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){x(e.items),O(!0)}),(function(e){O(!0),r(e)}))}),[e.type]);var p=0;return console.log(h),a?Object(o.jsxs)("div",{children:["Error: ",a.message]}):u?Object(o.jsx)(o.Fragment,{children:h.map((function(s){return Object(o.jsxs)("div",{className:"userPagePost",children:["posts"===e.type||"questions"===e.type?s.question_id?Object(o.jsx)(i.b,{to:"/questions/".concat(s.question_id),children:Object(o.jsx)("p",{className:"userPost",children:s.title})}):Object(o.jsx)("p",{className:"userPost",children:s.title}):s.body?s.question_id?Object(o.jsx)(i.b,{to:"/questions/".concat(s.question_id),children:Object(o.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:f(s.body)||""}})}):Object(o.jsx)("p",{className:"userPost",dangerouslySetInnerHTML:{__html:f(s.body)||""}}):"",Object(o.jsx)("p",{className:"userPostDate",children:Object(o.jsx)(y,{date:s.creation_date})})]},p++)}))}):Object(o.jsx)("div",{children:"Loading..."})};var D=function(){var e=Object(p.e)().userId,s=Object(c.useState)(null),t=Object(d.a)(s,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(d.a)(r,2),j=i[0],l=i[1],u=Object(c.useState)({}),O=Object(d.a)(u,2),b=O[0],m=O[1],h=Object(c.useState)("posts"),x=Object(d.a)(h,2),f=x[0],g=x[1],v="https://api.stackexchange.com/2.2/users/".concat(e,"?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((&filter=!9_bDDp)d5");return Object(c.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){m(e.items),l(!0)}),(function(e){l(!0),a(e)}))}),[]),console.log(b),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):j?Object(o.jsxs)("div",{className:"userPage",children:[Object(o.jsxs)("div",{className:"mainUserPageInfo",children:[Object(o.jsxs)("div",{className:"userPicandInfo",children:[Object(o.jsx)("img",{src:b[0].profile_image,alt:"user"}),Object(o.jsxs)("p",{className:"userPageRep",children:[b[0].reputation," reputation"]}),Object(o.jsxs)("p",{className:"userPageBadgesInfo",children:[Object(o.jsxs)("span",{className:"bronzeBadge",children:[" ",b[0].badge_counts.bronze]}),Object(o.jsxs)("span",{className:"silverBadge",children:[" ",b[0].badge_counts.silver]}),Object(o.jsxs)("span",{className:"goldBadge",children:[" ",b[0].badge_counts.gold]})]})]}),Object(o.jsxs)("div",{className:"userPageGenInfo",children:[Object(o.jsx)("p",{className:"userPageUserName",children:b[0].display_name}),Object(o.jsx)("p",{className:"userPageAboutUser",dangerouslySetInnerHTML:{__html:b[0].about_me||""}})]}),Object(o.jsxs)("div",{className:"userPageUserProfInfo",children:[Object(o.jsxs)("p",{className:"userPageLocation",children:["Location: ",b[0].location]}),Object(o.jsxs)("p",{className:"userPageWebsite",children:["Website: ",Object(o.jsx)("a",{href:b[0].website_url,children:b[0].website_url})]}),Object(o.jsxs)("p",{className:"userLastActive",children:["active ",Object(o.jsx)(y,{date:b[0].last_access_date})]})]})]}),Object(o.jsxs)("nav",{className:"userPageNav",children:[Object(o.jsx)("li",{onClick:function(){return g("posts")},children:" Posts "}),Object(o.jsx)("li",{onClick:function(){return g("questions")},children:" Questions "}),Object(o.jsx)("li",{onClick:function(){return g("answers")},children:" Answers "}),Object(o.jsx)("li",{onClick:function(){return g("coments")},children:" Comments "})]}),Object(o.jsx)("div",{className:"userStats",children:Object(o.jsx)(q,{type:f,userId:e})})]}):Object(o.jsx)("div",{children:"Loading..."})};var P=function(){var e=Object(c.useState)(""),s=Object(d.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(),r=Object(d.a)(a,2),i=r[0],j=r[1],u=Object(c.useState)(),O=Object(d.a)(u,2),b=O[0],m=O[1],x=function(e){m(e)},y=function(e,s){n(e),j(s)};return console.log("order in parent is ".concat(t," and sort by ").concat(i)),Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{id:"sideBar",children:Object(o.jsx)(g,{setSortOrder:y,changeTag:x})}),Object(o.jsxs)("div",{id:"mainField",children:[Object(o.jsxs)("div",{className:"sortingOptions",children:[Object(o.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(o.jsx)(v,Object(l.a)(Object(l.a)({},e),{},{setSortOrder:y}))}}),Object(o.jsx)(p.a,{exact:!0,path:"/users",render:function(e){return Object(o.jsx)(N,Object(l.a)(Object(l.a)({},e),{},{setSortOrder:y}))}}),Object(o.jsx)(p.a,{path:"/tags",render:function(e){return Object(o.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{setSortOrder:y}))}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(o.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{sortOrder:t,sortBy:i,changeTag:x,tag:b}))}}),Object(o.jsx)(p.a,{exact:!0,path:"/users",render:function(e){return Object(o.jsx)(h,Object(l.a)(Object(l.a)({},e),{},{sortOrder:t,sortBy:i}))}}),Object(o.jsx)(p.a,{path:"/tags",render:function(e){return Object(o.jsx)(f,Object(l.a)(Object(l.a)({},e),{},{sortOrder:t,sortBy:i,changeTag:x}))}}),Object(o.jsx)(p.a,{exact:!0,path:"/questions/:questionId",component:I}),Object(o.jsx)(p.a,{exact:!0,path:"/users/:userId",component:D})]})]})]})};var B=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("h3",{children:"Footer"})})};var C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(P,{}),Object(o.jsx)(B,{})]})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,r=s.getTTFB;t(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),A()}],[[44,1,2]]]);
//# sourceMappingURL=main.4e707e10.chunk.js.map