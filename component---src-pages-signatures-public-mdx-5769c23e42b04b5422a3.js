(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),b=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),v=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(p.b)(b.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},i))))))},t}(r.a.Component),T=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,v=s.description,P=s.keywords,k=Object(w.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,N=y?n.pathname.replace(y,""):n.pathname,I=m?N.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=f||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:v,pageKeywords:P,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(h,{title:g,slug:N,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:I}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YLrC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:l},d=b.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Signatures are one of the foundations of Pandora. It helps to identify known vulnerabilities. We actively monitor for new public vulnerabilities and write signatures for them.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-signatures-public-mdx-5769c23e42b04b5422a3.js.map