(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(A,t,e){"use strict";var a=e("q1tI"),n=e.n(a),l=e("NmYn"),r=e.n(l),b=e("Wbzz"),c=e("Xrax"),i=e("k4MR"),o=e("TSYQ"),g=e.n(o),p=e("QH2O"),m=e.n(p),s=e("qKvR"),d=function(A){var t,e=A.title,a=A.theme,n=A.tabs,l=void 0===n?[]:n;return Object(s.b)("div",{className:g()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===a,t))},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:m.a.text},e)))))},j=e("BAC9"),E=function(A){var t=A.relativePagePath,e=A.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,n=e||a,l=n.baseUrl,r=n.subDirectory,c=l+"/edit/"+n.branch+r+"/src/pages"+t;return l?Object(s.b)("div",{className:"bx--row "+j.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},u=e("FCXl"),N=e("dI71"),f=e("I8xM"),B=function(A){function t(){return A.apply(this,arguments)||this}return Object(N.a)(t,A),t.prototype.render=function(){var A=this.props,t=A.title,e=A.tabs,a=A.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=e.map((function(A){var t,e=r()(A,{lower:!0,strict:!0}),l=e===n,c=new RegExp(n+"/?(#.*)?$"),i=a.replace(c,e);return Object(s.b)("li",{key:A,className:g()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(s.b)(b.Link,{className:f.link,to:""+i},A))}));return Object(s.b)("div",{className:f.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",{"aria-label":t},Object(s.b)("ul",{className:f.list},l))))))},t}(n.a.Component),O=e("MjG9"),Q=e("CzIb");t.a=function(A){var t=A.pageContext,e=A.children,a=A.location,n=A.Title,l=t.frontmatter,o=void 0===l?{}:l,g=t.relativePagePath,p=t.titleType,m=o.tabs,j=o.title,N=o.theme,f=o.description,w=o.keywords,x=Object(Q.a)().interiorTheme,h=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=h?a.pathname.replace(h,""):a.pathname,Y=m?y.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",C=N||x;return Object(s.b)(i.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:f,pageKeywords:w,titleType:p},Object(s.b)(d,{title:n?Object(s.b)(n,null):j,label:"label",tabs:m,theme:C}),m&&Object(s.b)(B,{title:j,slug:y,tabs:m,currentTab:Y}),Object(s.b)(O.a,{padded:!0},e,Object(s.b)(E,{relativePagePath:g})),Object(s.b)(u.a,{pageContext:t,location:a,slug:y,tabs:m,currentTab:Y}),Object(s.b)(c.a,null))}},BAC9:function(A,t,e){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,t,e){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},"J3+z":function(A,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return b})),e.d(t,"default",(function(){return d}));var a=e("wx14"),n=e("zLVn"),l=(e("q1tI"),e("7ljp")),r=e("013z"),b=(e("qKvR"),{}),c=function(A){return function(t){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},i=c("PageDescription"),o=c("Title"),g=c("Row"),p=c("Column"),m={_frontmatter:b},s=r.a;function d(A){var t=A.components,e=Object(n.a)(A,["components"]);return Object(l.b)(s,Object(a.a)({},m,e,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i,{mdxType:"PageDescription"},Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<Row>")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<Column>")," components are used to arrange content and components on the grid within a page.\nTo learn more about the grid is built, you can read the docs in the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/master/packages/grid"},"Carbon")," repo.")),Object(l.b)("h2",null,"Row"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"<Row>")," component is a wrapper that adds the ",Object(l.b)("inlineCode",{parentName:"p"},"bx--row")," class to a wrapper div. You will want to use this to define rows that you will place ",Object(l.b)("inlineCode",{parentName:"p"},"<Column>")," components inside of."),Object(l.b)("h3",null,"Code"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"},"<Row>\n  <Column>\n    Content or additional <Components />\n  </Column>\n</Row>\n")),Object(l.b)(o,{mdxType:"Title"},"Row props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"property"),Object(l.b)("th",{parentName:"tr",align:null},"propType"),Object(l.b)("th",{parentName:"tr",align:null},"required"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"children"),Object(l.b)("td",{parentName:"tr",align:null},"node"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"className"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Add custom class name")))),Object(l.b)("h2",null,"Column"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"<Column>")," component is used to define column widths for your content, you can set the rules at different breakpoints with the props."),Object(l.b)("h3",null,"Example"),Object(l.b)(g,{mdxType:"Row"},Object(l.b)(p,{colMd:4,colLg:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)(o,{mdxType:"Title"},"No gutter left"),Object(l.b)(g,{mdxType:"Row"},Object(l.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)(o,{mdxType:"Title"},"No gutter"),Object(l.b)(g,{mdxType:"Row"},Object(l.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)(o,{mdxType:"Title"},"Offset"),Object(l.b)(g,{mdxType:"Row"},Object(l.b)(p,{colMd:4,colLg:4,offsetLg:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)(p,{colMd:4,colLg:4,mdxType:"Column"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHk6T0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwADAAAAAAAAAAAAAAAAARARACEx/9oACAEBAAE/IdEkzOEcIVf/2gAMAwEAAgADAAAAEE/P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhYUH/2gAIAQEAAT8QGT6eEKMFBaU7FtcKua5j/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)("h3",null,"Code"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"},"<Row>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n</Row>\n")),Object(l.b)(o,{mdxType:"Title"},"No gutter left"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"},"<Row>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n</Row>\n")),Object(l.b)(o,{mdxType:"Title"},"No gutter"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"},"<Row>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n</Row>\n")),Object(l.b)(o,{mdxType:"Title"},"Offset"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"},"<Row>\n  <Column colMd={4} colLg={4} offsetLg={4}>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.jpg)\n  </Column>\n</Row>\n")),Object(l.b)(o,{mdxType:"Title"},"Column props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"property"),Object(l.b)("th",{parentName:"tr",align:null},"propType"),Object(l.b)("th",{parentName:"tr",align:null},"required"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"children"),Object(l.b)("td",{parentName:"tr",align:null},"node"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"className"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Add custom class name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"colSm"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col width at small breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"colMd"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col width at medium breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"colLg"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"12"),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col width at large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"colXl"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col width at x-large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"colMax"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col width at max breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offsetSm"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col offset at small breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offsetMd"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col offset at medium breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offsetLg"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col offset at large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offsetXl"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col offset at x-large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offsetMax"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify the col offset at max breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterSm"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter at small breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterMd"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter at medium breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterLg"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter at large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterXl"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter at x-large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterMax"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter at max breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterSmLeft"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter left at small breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterMdLeft"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter left at medium breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterLgLeft"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter left at large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterXlLeft"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter left at x-large breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noGutterMaxLeft"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify no-gutter left at max breakpoint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gutterLg"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Specify to explictly bring back gutters at the large breakpoint. Used almost exclusivly with ",Object(l.b)("inlineCode",{parentName:"td"},"noGutterSm")," when you need content to have no gutters on mobile and bring the gutters back for desktops.")))))}d.isMDXComponent=!0},QH2O:function(A,t,e){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-grid-mdx-5a311c19dc66d7329487.js.map