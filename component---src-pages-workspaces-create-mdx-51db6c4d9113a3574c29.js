(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a.n(p),m=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,c=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=o,t),T.listItem)},Object(m.b)(i.Link,{className:T.link,to:""+l},e))}));return Object(m.b)("div",{className:T.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:T.list},o))))))},t}(r.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,u=s.tabs,j=s.title,h=s.theme,T=s.description,N=s.keywords,k=Object(w.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,I=u?y.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",C=h||k;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:C,pageTitle:j,pageDescription:T,pageKeywords:N,titleType:p},Object(m.b)(x,{title:r?Object(m.b)(r,null):j,label:"label",tabs:u,theme:C}),u&&Object(m.b)(v,{title:j,slug:y,tabs:u,currentTab:I}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(g.a,{pageContext:t,location:n,slug:y,tabs:u,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VTQ9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),s={_frontmatter:c},d=i.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(b.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(l,{mdxType:"PageDescription"},Object(b.b)("p",null,"Workspaces is either a root domain or a subnet.")),Object(b.b)("p",null,"To create a new workspace:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Navigate to the workspace list in your organization and click ",Object(b.b)("strong",{parentName:"p"},"Add new")," button (near the top of the page).")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"On the open popup, input name and domain / subnet. Ex: ",Object(b.b)("em",{parentName:"p"},"Pandora - domain - projectpandora.xyz"),".")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Confirm creation with the ",Object(b.b)("strong",{parentName:"p"},"Save")," button."))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workspaces-create-mdx-51db6c4d9113a3574c29.js.map