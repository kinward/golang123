webpackJsonp([43],{"5RAe":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"common-body-box"},[e("div",{staticClass:"common-body-main"},[t._m(0),e("div",{staticClass:"rank-container"},[e("Table",{staticClass:"rank-list",attrs:{rowClassName:t.rowClassName,data:t.topUsers,columns:t.columns}})],1)])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"common-body-nav"},[e("li",[e("a",{attrs:{href:"/"}},[e("span",[t._v("主页")])])]),e("li",{staticClass:"common-body-nav-sep"},[e("span",[t._v("/")])]),e("li",[e("span",{staticClass:"top100-label"},[t._v("Top 100 积分榜")])])])}],r={render:a,staticRenderFns:i};n.a=r},"bKp+":function(t,n,e){"use strict";var a=e("//Fk"),i=e.n(a),r=e("V8bM");n.a={data:function(){return{columns:[{title:"#",key:"index"},{title:"用户名",key:"name",render:function(t,n){return t("a",{class:"rank-line-list-link",attrs:{href:"/user/"+n.row.id}},[t("img",{class:"rank-line-list-img",attrs:{src:n.row.avatarURL}}),t("span",{class:"rank-line-list"},n.row.name)])}},{title:"积分",key:"score"},{title:"话题数",key:"articleCount"},{title:"回复数",key:"commentCount"}]}},asyncData:function(t){return i.a.all([r.a.getTop100({client:t.req})]).then(function(n){var e=t.user,a=n[0].data.users||[];return a.map(function(t,n){t.index=n+1}),{user:e,topUsers:a}}).catch(function(n){console.log(n),t.error({statusCode:404,message:"Page not found"})})},methods:{rowClassName:function(t,n){return n%2?"":"rank-line-active"}},head:function(){return{title:"积分榜"}}}},"jo/0":function(t,n,e){var a=e("snzV");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("cdfaace8",a,!0)},ngjW:function(t,n,e){"use strict";function a(t){e("jo/0")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("bKp+"),r=e("5RAe"),o=e("VU/8"),s=a,l=o(i.a,r.a,!1,s,null,null);n.default=l.exports},snzV:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"body{background-color:#e1e1e1}.rank-container{padding:10px;width:900px;min-height:400px;background-color:#fff}.rank-container .ivu-table:after,.rank-container .ivu-table:before{height:0}.ivu-table td,.ivu-table th,.rank-container .ivu-table-wrapper{border:0}.ivu-table th{background-color:#fff}.top100-label{color:#999}.rank-line-active td{background-color:#f9f9f9}.rank-line-list-link{display:block;line-height:30px;height:30px}.rank-line-list-link span{display:inline-block;vertical-align:text-bottom;color:#778087}.rank-line-list-link span:hover{text-decoration:underline}.rank-line-list-img{width:30px;height:30px;margin-right:5px}th .ivu-table-cell{font-weight:700}",""])}});
//# sourceMappingURL=index.62ef3dbfac25721d094d.js.map