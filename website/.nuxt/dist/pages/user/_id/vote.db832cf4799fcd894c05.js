webpackJsonp([49],{"+efs":function(e,t,n){"use strict";var a=n("FN0O"),r=n.n(a),s=n("V8bM"),i=n("b1Yp");t.a={data:function(){return{sex:0}},asyncData:function(e){return s.a.getMineVote({client:e.req,params:{userID:e.params.id},query:{orderType:1,desc:1,pageNo:e.query.pageNo||1,pageSize:20}}).then(function(t){for(var n=t.data.votes||[],a=0;a<n.length;a++){var s='...&nbsp;&nbsp;<a href="/vote/'+n[a].id+'" target="_blank" class="golang123-digest-continue">继续阅读»</a>',o=r()(n[a].htmlContent,{limit:100,suffix:s,moreLink:!1}),l=o.html;if(l=i.a.trimImg(l),!o.more){l=r()(n[a].htmlContent,{limit:100,preserveTags:!1}).html+s}n[a].htmlContent=l}return{userId:e.params.id,pageNo:t.data.pageNo,pageSize:t.data.pageSize,totalCount:t.data.totalCount,votes:t.data.votes||[],user:e.user,currentId:e.params.id}}).catch(function(t){console.log(t),e.error({statusCode:404,message:"Page not found"})})},mounted:function(){this.$data.sex=this.$parent.currentUser.sex},methods:{onPageChange:function(e){var t=this.userId;window.location.href="/user/"+t+"/vote?pageNo="+e}}}},Dsvl:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"articles-container"},[n("div",{staticClass:"article-top"},[n("div",[e._v(e._s(e.user&&e.user.id==this.currentId?"我":e.sex?"她":"他")+"参与的投票")])]),e.votes.length>0?[e._l(e.votes,function(t,a){return n("div",{staticClass:"articles-item",class:{"articles-item-no":0===a}},[n("h2",{staticClass:"articles-title"},[n("a",{attrs:{href:"/vote/"+t.id,target:"_blank"}},[e._v(e._s(t.name))])]),n("div",{staticClass:"golang123-digest",domProps:{innerHTML:e._s(t.htmlContent)}})])}),n("div",{staticStyle:{"text-align":"center"}},[n("Page",{staticClass:"common-page",attrs:{current:e.pageNo,"page-size":e.pageSize,total:e.totalCount,"show-elevator":!0},on:{"on-change":e.onPageChange}})],1)]:n("div",{staticClass:"articles-item-empty"},[e._v("\n        还没有投票\n    ")])],2)},r=[],s={render:a,staticRenderFns:r};t.a=s},FN0O:function(e,t){function n(e,t){t=t||{};for(var n,r,s,i,o,l=t.limit||100,c=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,g=t.suffix||"...",p=t.moreLink||"",f=t.moreText||"»",d=t.preserveWhiteSpace||!1,h=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),v=0,m=[],C=!1,b=0;b<h.length;b++)if(n=h[b],rowCut=d?n:n.replace(/[ ]+/g," "),n.length){var _=a(rowCut);if("<"!==n[0])if(v>=l)n="";else if(v+_.length>=l){if(r=l-v," "===_[r-1])for(;r&&(r-=1," "===_[r-1]););else s=_.slice(r).indexOf(" "),u||(-1!==s?r+=s:r=n.length);n=_.slice(0,r).join("")+g,p&&(n+='<a href="'+p+'" style="display:inline">'+f+"</a>"),v=l,C=!0}else v+=_.length;else if(c){if(v>=l)if(i=n.match(/[a-zA-Z]+/),o=i?i[0]:"")if("</"!==n.substring(0,2))m.push(o),n="";else{for(;m[m.length-1]!==o&&m.length;)m.pop();m.length&&(n=""),m.pop()}else n=""}else n="";h[b]=n}return{html:h.join("\n").replace(/\n/g,""),more:C}}function a(e){for(var t,n,a,r=[],s=0;s<rowCut.length;s++)t=rowCut.substring(s),n=t.match(/^&[a-z0-9#]+;/),n?(a=n[0],r.push(a),s+=a.length-1):r.push(rowCut[s]);return r}void 0!==e&&e.exports&&(e.exports=n)},Svoa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("+efs"),r=n("Dsvl"),s=n("VU/8"),i=s(a.a,r.a,!1,null,null,null);t.default=i.exports},b1Yp:function(e,t,n){"use strict";var a={trimImg:function(e){return e=e.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},n=/&(lt|gt|nbsp|amp|quot);/gi;return e.replace(n,function(e,n){return t[n]})}};t.a=a}});
//# sourceMappingURL=vote.db832cf4799fcd894c05.js.map