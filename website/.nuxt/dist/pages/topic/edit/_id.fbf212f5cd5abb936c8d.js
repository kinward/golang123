webpackJsonp([17],{"3G8Z":function(e,t,a){"use strict";var i=a("EuWz"),n=a("Tlu+"),o=a("VU/8"),s=o(i.a,n.a,!1,null,null,null);t.a=s.exports},"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"973A":function(e,t,a){"use strict";function i(e){a("AB7c")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Eshb"),o=a("S8XU"),s=a("VU/8"),r=i,l=s(n.a,o.a,!1,r,null,null);t.default=l.exports},"9IHU":function(e,t,a){"use strict";var i=a("lERW"),n=a("fPCn"),o=a("VU/8"),s=o(i.a,n.a,!1,null,null,null);t.a=s.exports},AB7c:function(e,t,a){var i=a("ff77");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("e61e12b4",i,!0)},Eshb:function(e,t,a){"use strict";var i=a("//Fk"),n=a.n(i),o=a("V8bM"),s=a("9IHU");t.a={data:function(){},validate:function(e){return!!e.params.id},asyncData:function(e){return n.a.all([o.a.getCategories({client:e.req}),o.a.getArticle({client:e.req,params:{id:e.params.id},query:{f:"md"}}),o.a.getUserArticles({client:e.req,params:{userID:e.user.id},query:{orderType:1,desc:1,pageSize:5}})]).then(function(t){var a=t[0].data.categories,i=t[1].data.article,n=t[2].data.articles,o=!1;return n&&n.length>0&&(o=!0),i?{user:e.user,categories:a,article:i,recentArticles:n,hasRecentArticles:o,id:i.id}:void e.error({statusCode:404,message:"Page not found"})}).catch(function(t){console.log(t),e.error({statusCode:404,message:"Page not found"})})},head:function(){return{title:"编辑话题",link:[{rel:"stylesheet",href:"/styles/editor/simplemde.min.css"}]}},methods:{},middleware:"userRequired",layout:"nosidebar",components:{"article-save":s.a}}},EuWz:function(e,t,a){"use strict";t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{inputValue:this.value||""}},methods:{onSave:function(){this.$emit("save")},onChange:function(){this.$emit("change",this.inputValue)}},head:function(){return{}},mounted:function(){},watch:{value:function(e,t){(e=e||"")!==this.inputValue&&(this.inputValue=e)}}}},MyuZ:function(e,t,a){"use strict";var i=a("pq6b"),n=a("Y/bv"),o=a("VU/8"),s=o(i.a,n.a,!1,null,null,null);t.a=s.exports},S8XU:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("article-save",{attrs:{categories:e.categories,article:e.article,recentArticles:e.recentArticles,hasRecentArticles:e.hasRecentArticles,id:e.id,user:e.user}})],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},"Tlu+":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[a("Input",{attrs:{type:"textarea",rows:40},on:{"on-change":e.onChange},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},"Y/bv":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[e.isMounted?a("textarea",{ref:"textarea"}):e._e(),a("Modal",{attrs:{title:"上传图片"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Upload",{attrs:{"on-success":e.onUploadCallback,name:"upFile",format:["jpg","jpeg","png","gif"],action:e.uploadURL}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传图片")])],1)],1),e.isFullscreen?a("div",{staticClass:"editor-fullScreen-save"},[a("Button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保  存")])],1):e._e()],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},fPCn:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topic-box"},[a("div",{staticClass:"topic-main"},[a("ul",{staticClass:"topic-nav"},[e._m(0),e._m(1),a("li",[a("span",{staticClass:"publish-label"},[e._v(e._s(e.id?"编辑":"发布")+"话题")])])]),a("div",{staticClass:"editor-box-wrap"},[a("div",{staticClass:"topic-area"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleInline,"label-width":80}},[a("Form-item",{attrs:{label:"话题名称",prop:"topicName"}},[a("Input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入话题名称"},model:{value:e.formValidate.topicName,callback:function(t){e.formValidate.topicName=t},expression:"formValidate.topicName"}})],1),a("Form-item",{attrs:{label:"选择版块",prop:"selected"}},[a("Select",{staticStyle:{width:"400px"},model:{value:e.formValidate.selected,callback:function(t){e.formValidate.selected=t},expression:"formValidate.selected"}},e._l(e.formValidate.categories,function(t){return a("Option",{key:t.id,attrs:{value:t.id+""}},[e._v(e._s(t.name))])}))],1),a("Form-item",{staticClass:"topic-content",attrs:{"label-width":0,prop:"content"}},[e.article&&2==e.article.contentType?a("html-editor",{attrs:{value:e.formValidate.content,user:e.user},on:{save:e.onContentSave,change:e.onContentChage}}):a("md-editor",{attrs:{value:e.formValidate.content,user:e.user},on:{save:e.onContentSave,change:e.onContentChage}})],1),a("Form-item",{staticClass:"topic-submit",attrs:{"label-width":0}},[e.isMounted?a("Button",{attrs:{size:"large",type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.id?"保存话题":"发布话题"))]):e._e()],1)],1)],1)])]),a("ul",{staticClass:"topic-sidebar"},[e._m(2),a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[e._v("我的近期话题")]),e._l(e.recentArticles,function(t,i){return e.hasRecentArticles?a("p",{staticClass:"topic-sidebar-my",style:{"border-top":0==i?"none;":"1px solid #f0f0f0;"}},[a("a",{attrs:{href:"/topic/"+t.id,target:"_blank"}},[e._v(e._s(t.name))])]):a("p",{staticClass:"topic-none",staticStyle:{"padding-left":"0"}},[e._v("暂无话题")])})],2)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"/"}},[a("span",[e._v("主页")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"topic-nav-sep"},[a("span",[e._v("/")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[e._v("Markdown 语法参考")]),a("p",[e._v("### 单行的标题")]),a("p",[e._v("**粗体**")]),a("p",[e._v("[链接](https://www.go.com)")]),a("p",[e._v("![图片](https://www.go.com/1.jpg)")]),a("div",{staticClass:"markdown-codeblock"},[a("p",[e._v("```")]),a("p",[e._v("if (a > 1) {")]),a("p",[e._v('    doSomething("代码")')]),a("p",[e._v("}")]),a("p",[e._v("```")])]),a("p",[a("a",{attrs:{href:"/markdown",target:"_blank"}},[e._v("Markdown参考文档")])])])}],o={render:i,staticRenderFns:n};t.a=o},ff77:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"body{background-color:#e1e1e1}.topic-box{width:1200px;overflow:hidden;font-size:0;margin-left:auto;margin-right:auto;margin-top:20px}.topic-main{font-size:0}.topic-main,.topic-nav{width:900px;display:inline-block}.topic-nav{height:40px;padding-left:20px;background:#f6f6f6}.topic-nav a{color:#80bd01}.topic-nav li{float:left;line-height:40px}.topic-nav span{font-size:14px}.topic-nav-sep{padding:0 8px}.publish-label{color:#999}.editor-box-wrap{width:900px;padding-top:24px;min-height:720px;background:#fff}.topic-area{clear:both;padding:0 20px 1px}.topic-content .ivu-form-item-content,.topic-submit .ivu-form-item-content{margin-left:0!important}.topic-sidebar{width:280px;margin-left:20px;display:inline-block;vertical-align:top}.topic-sidebar li{background:#fff;font-size:14px;line-height:40px;margin-bottom:20px}.topic-sidebar-item p{padding-left:12px;padding-right:12px}.markdown-codeblock p{padding-top:6px;line-height:normal;font-size:14px}.topic-sidebar-my{padding:8px 0;line-height:normal}.topic-sidebar-my a{line-height:22px}.topic-sidebar-title{padding-left:12px;background:#f6f6f6;height:40px}.editor-fullScreen-save{position:fixed;top:7px;right:20px;z-index:9}.topic-none{text-align:center;color:#a8a8a8}.CodeMirror{height:400px}",""])},lERW:function(e,t,a){"use strict";var i=a("V8bM"),n=a("MyuZ"),o=a("3G8Z"),s=a("y8ae"),r=a("7EVb"),l=a("FhoZ"),c=a.n(l);t.a={props:["categories","article","recentArticles","hasRecentArticles","id","user"],data:function(){return{isMounted:!1,formValidate:{topicName:this.article&&this.article.name||"",categories:this.categories,selected:this.article&&this.article.categories[0].id+""||"",content:this.article&&(this.article.content||this.article.htmlContent)||""},ruleInline:{topicName:[{required:!0,message:"请输入话题名称",trigger:"blur"}],selected:[{required:!0,message:"请选择板块",trigger:"change"}],content:[{required:!0,message:"请输入话题内容",trigger:"blur"}]}}},mounted:function(){this.isMounted=!0},methods:{onContentChage:function(e){this.formValidate.content=e},onSubmit:function(){var e=this;return this.user.status===r.a.STATUS_IN_ACTIVE?void(this.id?this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能保存话题"}):this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能发布话题"})):(this.$refs.formValidate.validate(function(t){if(t){var a=e;(e.id?i.a.updateArticle:i.a.createArticle)({body:{id:e.id,name:e.formValidate.topicName,content:e.formValidate.content,categories:[{id:parseInt(e.formValidate.selected)}]}}).then(function(e){e.errNo===s.a.ERROR?a.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.msg}):e.errNo===s.a.IN_ACTIVE?a.id?a.$Message.error("账号未激活，不能保存话题"):a.$Message.error("账号未激活，不能发布话题"):e.errNo===s.a.LOGIN_TIMEOUT?location.href="/signin?ref="+encodeURIComponent(location.href):e.errNo===s.a.SUCCESS&&setTimeout(function(){location.href="/topic/"+e.data.id},500)}).catch(function(e){a.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.message||e.msg})})}}),!1)},onContentSave:function(){this.onSubmit()}},components:{"md-editor":n.a,"html-editor":o.a}}},pq6b:function(e,t,a){"use strict";var i=a("y8ae"),n=a("7EVb"),o=a("FhoZ"),s=a.n(o);t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{isMounted:!1,host:"",simplemde:null,SimpleMDE:null,uploadURL:s.a.uploadURL,modalVisible:!1,toolbar:null,isFullscreen:!1}},methods:{ok:function(){},cancel:function(){},showUpload:function(){if(this.user.status===n.a.STATUS_IN_ACTIVE)return void this.$Message.error({duration:s.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"});this.modalVisible=!0},onToggleFullScreen:function(e){e.toggleFullScreen(),this.isFullscreen=!this.isFullscreen},onSave:function(){this.$emit("save")},onUploadCallback:function(e,t){if(e)if(e.errNo===i.a.SUCCESS){var a=e.data.url;this.simplemde.setImageURL(a),this.SimpleMDE.drawImage(this.simplemde)}else e.errNo===i.a.IN_ACTIVE?(this.modalVisible=!1,this.$Message.error({duration:s.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"})):e.errNo===i.a.ERROR?(this.modalVisible=!1,this.$Message.error({duration:s.a.messageDuration,closable:!0,content:e.msg})):e.errNo===i.a.LOGIN_TIMEOUT&&(location.href="/signin")}},head:function(){return{script:[{src:"/javascripts/editor/simplemde.js"}]}},mounted:function(){this.isMounted=!0,this.$nextTick(function(){this.host=document.location.hostname;var e=window.SimpleMDE;this.toolbar=[{name:"bold",action:e.toggleBold,className:"fa fa-bold",title:"粗体"},{name:"italic",action:e.toggleItalic,className:"fa fa-italic",title:"斜体"},{name:"heading",action:e.toggleHeadingSmaller,className:"fa fa-header",title:"标题"},"|",{name:"unordered-list",action:e.toggleUnorderedList,className:"fa fa-list-ul",title:"无序列表"},{name:"ordered-list",action:e.toggleOrderedList,className:"fa fa-list-ol",title:"有序列表"},{name:"table",action:e.drawTable,className:"fa fa-table",title:"表格"},{name:"horizontal-rule",action:e.drawHorizontalRule,className:"fa fa-minus",title:"水平分隔线"},"|",{name:"code",action:e.toggleCodeBlock,className:"fa fa-code",title:"代码"},{name:"quote",action:e.toggleBlockquote,className:"fa fa-quote-left",title:"块引用"},{name:"link",action:e.drawLink,className:"fa fa-link",title:"链接"},{name:"image",action:this.showUpload,className:"fa fa-picture-o",title:"上传图片"},"|",{name:"preview",action:e.togglePreview,className:"fa fa-eye no-disable",title:"预览"},{name:"fullscreen",action:this.onToggleFullScreen,className:"fa fa-arrows-alt no-disable no-mobile",title:"全屏"}],this.SimpleMDE=e;var t=new e({element:this.$refs.textarea,promptURLs:!1,spellChecker:!1,toolbar:this.toolbar});this.simplemde=t;var a=e.prototype;a.getImageURL||(a.getImageURL=function(){return this.imageURL},a.setImageURL=function(e){this.imageURL=e});var i=this;this.simplemde.codemirror.on("change",function(){i.$emit("change",i.simplemde.value())}),this.simplemde.value(this.value)})},watch:{value:function(e,t){(e=e||"")!==this.simplemde.value()&&this.simplemde.value(e)}}}},y8ae:function(e,t,a){"use strict";t.a={SUCCESS:0,ERROR:1,LOGIN_TIMEOUT:1001,IN_ACTIVE:1002}}});
//# sourceMappingURL=_id.fbf212f5cd5abb936c8d.js.map