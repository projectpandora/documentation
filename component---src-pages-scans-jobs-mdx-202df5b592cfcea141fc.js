(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,c=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),s=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=o,t),T.listItem)},Object(p.b)(i.Link,{className:T.link,to:""+s},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:T.list},o))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=l.tabs,g=l.title,h=l.theme,T=l.description,P=l.keywords,k=Object(w.a)().interiorTheme,N=Object(i.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",C=h||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:T,pageKeywords:P,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(f,{title:g,slug:y,tabs:m,currentTab:I}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},h6CZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),l={_frontmatter:c},d=i.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(b.b)(d,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(s,{mdxType:"PageDescription"},Object(b.b)("p",null,"A scan is consist of jobs. If you want to control the scan further, go to the ",Object(b.b)("strong",{parentName:"p"},"Jobs")," tab on the scan detail page.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scans-jobs-mdx-202df5b592cfcea141fc.js.map