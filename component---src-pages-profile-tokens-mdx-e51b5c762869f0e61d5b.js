(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),b=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a.n(p),m=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,b=o.subDirectory,i=r+"/edit/"+o.branch+b+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(m.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(m.b)(l.Link,{className:T.link,to:""+c},e))}));return Object(m.b)("div",{className:T.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:T.list},r))))))},t}(o.a.Component),k=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,u=s.tabs,x=s.title,h=s.theme,T=s.description,v=s.keywords,N=Object(w.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,I=u?y.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",C=h||N;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:C,pageTitle:x,pageDescription:T,pageKeywords:v,titleType:p},Object(m.b)(j,{title:o?Object(m.b)(o,null):x,label:"label",tabs:u,theme:C}),u&&Object(m.b)(f,{title:x,slug:y,tabs:u,currentTab:I}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(g.a,{pageContext:t,location:n,slug:y,tabs:u,currentTab:I}),Object(m.b)(i.a,null))}},AwBI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n,o=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),s={_frontmatter:i},d=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(d,Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(c,{mdxType:"PageDescription"},"API Tokens allow you to access our"," ",Object(b.b)("a",{href:"https://developers.projectpandora.xyz"},"public API")," without a using username or password."),Object(b.b)("p",null,"To create a new API Token:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Go to ",Object(b.b)("a",{parentName:"li",href:"https://platform.projectpandora.xyz/profile"},"profile settings")," page and choose the ",Object(b.b)("strong",{parentName:"li"},"Tokens")," tab."),Object(b.b)("li",{parentName:"ol"},"Click ",Object(b.b)("strong",{parentName:"li"},"Create an API Token")," button, input name and choose expires date for the new API Token."),Object(b.b)("li",{parentName:"ol"},"Confirm by click ",Object(b.b)("strong",{parentName:"li"},"Add"),". In the next section, you will be able to see your new token. Save this somewhere because you won’t see it again.")),Object(b.b)("p",null,"To delete an API Token:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Go to ",Object(b.b)("a",{parentName:"li",href:"https://platform.projectpandora.xyz/profile"},"profile settings")," page and choose the ",Object(b.b)("strong",{parentName:"li"},"Tokens")," tab."),Object(b.b)("li",{parentName:"ol"},"Click the ",Object(b.b)("strong",{parentName:"li"},"Delete")," button next to the token name."),Object(b.b)("li",{parentName:"ol"},"Press ",Object(b.b)("strong",{parentName:"li"},"Delete")," in the confirm modal.")))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-profile-tokens-mdx-e51b5c762869f0e61d5b.js.map