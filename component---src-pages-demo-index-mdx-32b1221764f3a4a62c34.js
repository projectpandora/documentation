(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("NmYn"),o=t.n(i),n=t("Wbzz"),c=t("Xrax"),s=t("k4MR"),l=t("TSYQ"),b=t.n(l),d=t("QH2O"),m=t.n(d),g=t("qKvR"),p=function(A){var e,t=A.title,a=A.theme,r=A.tabs,i=void 0===r?[]:r;return Object(g.b)("div",{className:b()(m.a.pageHeader,(e={},e[m.a.withTabs]=i.length,e[m.a.darkMode]="dark"===a,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},t)))))},u=t("BAC9"),j=function(A){var e=A.relativePagePath,t=A.repository,a=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||a,i=r.baseUrl,o=r.subDirectory,c=i+"/edit/"+r.branch+o+"/src/pages"+e;return i?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},h=t("FCXl"),E=t("dI71"),f=t("I8xM"),B=function(A){function e(){return A.apply(this,arguments)||this}return Object(E.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,a=A.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(A){var e,t=o()(A,{lower:!0,strict:!0}),i=t===r,c=new RegExp(r+"/?(#.*)?$"),s=a.replace(c,t);return Object(g.b)("li",{key:A,className:b()((e={},e[f.selectedItem]=i,e),f.listItem)},Object(g.b)(n.Link,{className:f.link,to:""+s},A))}));return Object(g.b)("div",{className:f.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:f.list},i))))))},e}(r.a.Component),w=t("MjG9"),x=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,r=A.Title,i=e.frontmatter,l=void 0===i?{}:i,b=e.relativePagePath,d=e.titleType,m=l.tabs,u=l.title,E=l.theme,f=l.description,y=l.keywords,O=Object(x.a)().interiorTheme,Q=Object(n.useStaticQuery)("2456312558").site.pathPrefix,k=Q?a.pathname.replace(Q,""):a.pathname,N=m?k.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",T=E||O;return Object(g.b)(s.a,{tabs:m,homepage:!1,theme:T,pageTitle:u,pageDescription:f,pageKeywords:y,titleType:d},Object(g.b)(p,{title:r?Object(g.b)(r,null):u,label:"label",tabs:m,theme:T}),m&&Object(g.b)(B,{title:u,slug:k,tabs:m,currentTab:N}),Object(g.b)(w.a,{padded:!0},t,Object(g.b)(j,{relativePagePath:b})),Object(g.b)(h.a,{pageContext:e,location:a,slug:k,tabs:m,currentTab:N}),Object(g.b)(c.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},lmlK:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return n})),t.d(e,"default",(function(){return E}));var a=t("wx14"),r=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("013z"),n=(t("qKvR"),{}),c=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}},s=c("PageDescription"),l=c("AnchorLinks"),b=c("AnchorLink"),d=c("Row"),m=c("Column"),g=c("ArticleCard"),p=c("Aside"),u=c("Video"),j={_frontmatter:n},h=o.a;function E(A){var e=A.components,t=Object(r.a)(A,["components"]);return Object(i.b)(h,Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"This page is meant to demonstrate some of the components in action. You can check out the markdown used for this page ",Object(i.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/pages/demo/index.mdx"},"on github"),".")),Object(i.b)(l,{mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Building bonds"),Object(i.b)(b,{mdxType:"AnchorLink"},"Global accessibility standards"),Object(i.b)(b,{mdxType:"AnchorLink"},"Small anchor links"),Object(i.b)(b,{mdxType:"AnchorLink"},"Videos")),Object(i.b)(d,{mdxType:"Row"},Object(i.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Getting started",href:"/getting-started",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/article.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/article.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Theme configuration",href:"/guides/configuration",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/article.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/article.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(g,{title:"Contributions",href:"/contributions",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/article.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/article.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/article.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.")),Object(i.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."),Object(i.b)(d,{mdxType:"Row"},Object(i.b)(m,{colMd:5,colLg:8,mdxType:"Column"},Object(i.b)("h2",null,"Section heading"),Object(i.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Add-on repositories, or repos, are components built for a specific product or\nexperience. The repos are built on top of the core Carbon repo, and enable")),Object(i.b)("p",null,"IBMers believe in progress—that application of intelligence, reason and science can improve business, society and the human condition.")),Object(i.b)(m,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(i.b)(p,{mdxType:"Aside"},Object(i.b)("p",null,Object(i.b)("strong",null,"Good design is always",Object(i.b)("br",null),"good design.")),Object(i.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in stylistic terms, but the modernist attitudes and approach used at the time.")))),Object(i.b)("h2",null,"Small anchor links"),Object(i.b)("p",null,"Swab barque interloper™ chantey doubloon starboard grog black jack gangway rutters π."),Object(i.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Header"),Object(i.b)(b,{mdxType:"AnchorLink"},"Header again")),Object(i.b)("h3",null,"Header"),Object(i.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."),Object(i.b)("h3",null,"Header again"),Object(i.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"This is a demonstration of an ordered list item. This list item is particularly long to demonstrate how the text wraps and aligns with the first line.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"This is a nested list item, it should wrap in the same way. Typically, nested list items should be of the same type (ordered, unordered) as their parent."))),Object(i.b)("li",{parentName:"ol"},"Ordered list item"),Object(i.b)("li",{parentName:"ol"},"Ordered list item")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is a demonstration of an unordered list item. This list item is particularly long to demonstrate how the text wraps and aligns with the first line.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is a nested list item, it should wrap in the same way. Typically, nested list items should be of the same type (ordered, unordered) as their parent."))),Object(i.b)("li",{parentName:"ul"},"Unordered list item"),Object(i.b)("li",{parentName:"ul"},"Unordered list item")),Object(i.b)("h2",null,"Images"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMSMf/aAAgBAgEBPwHLrREhyf/EAB4QAAIBAwUAAAAAAAAAAAAAAAARIQECEBIxQVFx/9oACAEBAAY/AuCjersnfDUl3p//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVGBkaH/2gAIAQEAAT8hbFFJ0iQmBSZ5JmvtIsinaOz1j//aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EEoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QAxW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkqCcmuBpJtY0SHbfEnqHkvOeDvI4UWIoqvvPlb5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Large blocky illustration",title:"Large blocky illustration",src:"/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h2",null,"Videos"),Object(i.b)(u,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}))}E.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-demo-index-mdx-32b1221764f3a4a62c34.js.map