webpackJsonp([28],{"1sbi":function(t,e,a){var r=a("P6Yz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("5e2da125",r,!0)},"3k72":function(t,e,a){"use strict";var r=a("y8ae"),o=a("V8bM"),l=a("FhoZ"),s=a.n(l);e.a={props:["from","defaultURL","cateId","categories"],data:function(){return{isCustom:10===this.from,formData:{scope:"list",crawlExist:0,articles:[],siteName:"",siteURL:"",listItemSelector:"",listItemTitleSelector:"",titleSelector:"",contentSelector:""},urlValidate:{type:"url",required:!0,message:"无效的URL"},ruleCustom:{siteName:[{required:!0,message:"来源网站名称不能为空",trigger:"blur"}],siteURL:[{type:"url",required:!0,message:"无效的URL",trigger:"blur"}],listItemSelector:[{required:!0,message:"列表项选择器不能为空",trigger:"blur"}],listItemTitleSelector:[{required:!0,message:"列表项标题选择器不能为空",trigger:"blur"}],titleSelector:[{required:!0,message:"标题选择器不能为空",trigger:"blur"}],contentSelector:[{required:!0,message:"内容选择器不能为空",trigger:"blur"}]}}},mounted:function(){this.formData.articles.push({url:this.defaultURL})},methods:{onAdd:function(){this.formData.articles.push({url:""})},onSubmit:function(){var t=this;this.$refs.crawlerForm.validate(function(e){if(e){for(var a=[],l=0;l<t.formData.articles.length;l++)a.push(t.formData.articles[l].url);var i={scope:t.formData.scope,crawlExist:!!t.formData.crawlExist,urls:a,from:t.from,categoryID:parseInt(t.cateId)},c=o.a.crawl;t.isCustom&&(c=o.a.customCrawl,i.siteName=t.formData.siteName,i.siteURL=t.formData.siteURL,i.listItemSelector=t.formData.listItemSelector,i.listItemTitleSelector=t.formData.listItemTitleSelector,i.titleSelector=t.formData.titleSelector,i.contentSelector=t.formData.contentSelector),c({body:i}).then(function(e){if(e.errNo===r.a.ERROR)return void t.$Message.error({duration:s.a.messageDuration,closable:!0,content:e.msg});t.$Message.success({duration:s.a.messageDuration,closable:!0,content:"抓取成功!"})}).catch(function(e){t.$Message.error({duration:s.a.messageDuration,closable:!0,content:e.msg})})}})}}}},"7ana":function(t,e,a){"use strict";function r(t){a("1sbi")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("84X1"),l=a("hVNx"),s=a("VU/8"),i=r,c=s(o.a,l.a,!1,i,null,null);e.default=c.exports},"84X1":function(t,e,a){"use strict";var r=a("TfCd"),o=a("V8bM");e.a={asyncData:function(t){return o.a.getCategories({client:t.req}).then(function(t){var e=t.data.categories;return{cateId:e&&e[0].id+""||"",categories:e}}).catch(function(e){console.log(e),t.error({statusCode:404,message:"Page not found"})})},data:function(){return{url:"http://www.jianshu.com/c/c7634b78294d"}},components:{crawler:r.a},head:function(){return{title:"抓取简书"}},layout:"admin"}},P6Yz:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".crawler-title{font-size:22px;margin:12px 0}",""])},TfCd:function(t,e,a){"use strict";var r=a("3k72"),o=a("TgrC"),l=a("VU/8"),s=l(r.a,o.a,!1,null,null,null);e.a=s.exports},TgrC:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("Form",{ref:"crawlerForm",attrs:{model:t.formData,rules:t.ruleCustom,"label-width":120}},[a("FormItem",{attrs:{label:"网页类型"}},[a("Row",[a("Col",[a("RadioGroup",{model:{value:t.formData.scope,callback:function(e){t.formData.scope=e},expression:"formData.scope"}},[a("Radio",{attrs:{label:"list"}},[t._v("文章列表URL")]),a("Radio",{attrs:{label:"page"}},[t._v("文章URL")])],1)],1)],1)],1),a("FormItem",{attrs:{label:"强制抓取"}},[a("Row",[a("Col",[a("RadioGroup",{model:{value:t.formData.crawlExist,callback:function(e){t.formData.crawlExist=e},expression:"formData.crawlExist"}},[a("Radio",{attrs:{label:1}},[t._v("是")]),a("Radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1),a("FormItem",{attrs:{label:"版块"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Select",{attrs:{placeholder:"请选择版块"},model:{value:t.cateId,callback:function(e){t.cateId=e},expression:"cateId"}},t._l(t.categories,function(e){return a("Option",{key:e.id,attrs:{value:e.id+""}},[t._v(t._s(e.name))])}))],1)],1)],1),t.isCustom?[a("FormItem",{attrs:{label:"来源网站名称",prop:"siteName"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入来源网站名称"},model:{value:t.formData.siteName,callback:function(e){t.formData.siteName=e},expression:"formData.siteName"}})],1)],1)],1),a("FormItem",{attrs:{label:"来源网站URL",prop:"siteURL"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入来源网站URL"},model:{value:t.formData.siteURL,callback:function(e){t.formData.siteURL=e},expression:"formData.siteURL"}})],1)],1)],1)]:t._e(),t.isCustom&&"list"===t.formData.scope?[a("FormItem",{attrs:{label:"列表项选择器",prop:"listItemSelector"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入列表项选择器"},model:{value:t.formData.listItemSelector,callback:function(e){t.formData.listItemSelector=e},expression:"formData.listItemSelector"}})],1)],1)],1),a("FormItem",{attrs:{label:"列表项标题选择器",prop:"listItemTitleSelector"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入列表项标题选择器"},model:{value:t.formData.listItemTitleSelector,callback:function(e){t.formData.listItemTitleSelector=e},expression:"formData.listItemTitleSelector"}})],1)],1)],1)]:t._e(),t.isCustom?[a("FormItem",{attrs:{label:"标题选择器",prop:"titleSelector"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入标题选择器"},model:{value:t.formData.titleSelector,callback:function(e){t.formData.titleSelector=e},expression:"formData.titleSelector"}})],1)],1)],1),a("FormItem",{attrs:{label:"内容选择器",prop:"contentSelector"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入内容选择器"},model:{value:t.formData.contentSelector,callback:function(e){t.formData.contentSelector=e},expression:"formData.contentSelector"}})],1)],1)],1)]:t._e(),t._l(t.formData.articles,function(e,r){return a("FormItem",{key:r,attrs:{label:"URL",prop:"articles."+r+".url",rules:t.urlValidate}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"请输入URL"},model:{value:e.url,callback:function(t){e.url=t},expression:"article.url"}})],1)],1)],1)}),a("FormItem",[a("Row",[a("Col",{attrs:{span:"4"}},[a("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:t.onAdd}},[t._v("添加URL")])],1)],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("开始抓取")])],1)],2)],1)},o=[],l={render:r,staticRenderFns:o};e.a=l},hVNx:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("h1",{staticClass:"crawler-title"},[t._v("简书")]),a("crawler",{attrs:{from:1,defaultURL:t.url,cateId:t.cateId,categories:t.categories}})],1)},o=[],l={render:r,staticRenderFns:o};e.a=l},y8ae:function(t,e,a){"use strict";e.a={SUCCESS:0,ERROR:1,LOGIN_TIMEOUT:1001,IN_ACTIVE:1002}}});
//# sourceMappingURL=jianshu.d399055f7f671efc12f8.js.map