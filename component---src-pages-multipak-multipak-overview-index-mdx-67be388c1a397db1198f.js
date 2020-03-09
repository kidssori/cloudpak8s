(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(t,e,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),r=a.n(o),i=a("NmYn"),l=a.n(i),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),d=a("qKvR"),m=function(t){var e,a=t.title,n=t.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:u()(p.pageHeader,(e={},e[p.withTabs]=o.length,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},O=a("pEPl"),h=a("BAC9"),f=function(t){var e=t.relativePagePath,a=t.repository,n=O.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+e;return r?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),g=a("I8xM");var w=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((function(t){var e,o=l()(t,{lower:!0}),r=o===n,i=new RegExp(n+"(?!-)"),c=a.replace(i,o);return Object(d.b)("li",{key:t,className:u()((e={},e[g.selectedItem]=r,e),g.listItem)},Object(d.b)(v.Link,{className:g.link,to:""+c},t))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:g.list},o))))))},n}(r.a.Component),N=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,o=t.location,r=t.Title,i=e.frontmatter,b=void 0===i?{}:i,u=e.relativePagePath,p=e.titleType,O=b.tabs,h=b.title,v=b.theme,g=b.description,y=b.keywords,k=n.data.site.pathPrefix,P=k?o.pathname.replace(k,""):o.pathname,x=O?P.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:O,homepage:!1,theme:v,pageTitle:h,pageDescription:g,pageKeywords:y,titleType:p},Object(d.b)(m,{title:r?Object(d.b)(r,null):h,label:"label",tabs:O}),O&&Object(d.b)(w,{slug:P,tabs:O,currentTab:x}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:u})),Object(d.b)(j.a,{pageContext:e,location:o,slug:P,tabs:O,currentTab:x}),Object(d.b)(c.a,null))}},X5xc:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return i})),a.d(e,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var i={},l={_frontmatter:i},c=o.a;function s(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,["components"]);return Object(n.b)(c,r({},l,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution Overview"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../apps/cp4a_overview"}),"IBM Cloud Pak™ for Applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../integration/introduction"}),"IBM Cloud Pak™ for Integration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../automation/introduction"}),"IBM Cloud Pak™ for Automation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../data/introduction"}),"IBM Cloud Pak™ for Data")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"../../mcm/cp4mcm_introduction"}),"IBM Cloud Pak™ for Multicloud Management"))),Object(n.b)("p",null,"This repository provides documentation and access to automation for:\n1. Installing each Cloud Pak on Red Hat OpenShift on IBM Cloud, including automation (terraforms) for the installation.\n2. Installing each on VMWare, including automation (terraforms) for the installation.\n3. Multiple Cloud Paks Residency: installing more than one Cloud Pak on one shared cluster on Red Hat OpenShift on IBM Cloud\n4. Multiple Cloud Paks Residency: installing more than one Cloud Pak on one shared cluster on VMWare\n5. A set of common use cases the documentation on how to demonstrate them."),Object(n.b)("h2",null,"Links to further information sources"),Object(n.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.1.0/kc_welcome_cloud_pak.html"},"Knowledge Center"))}s.isMDXComponent=!0},pEPl:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(t){t.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-multipak-multipak-overview-index-mdx-67be388c1a397db1198f.js.map