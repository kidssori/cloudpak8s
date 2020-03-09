(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var o=n("pOBw"),i=n("q1tI"),a=n.n(i),r=n("NmYn"),s=n.n(r),l=n("OKom"),c=n("k4MR"),p=n("TSYQ"),h=n.n(p),u=n("QH2O"),m=n("qKvR"),b=function(e){var t,n=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:h()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},n)))))},d=n("pEPl"),g=n("BAC9"),w=function(e){var t=e.relativePagePath,n=e.repository,o=d.data.site.siteMetadata.repository,i=n||o,a=i.baseUrl,r=i.subDirectory,s=a+"/edit/"+i.branch+r+"/src/pages"+t;return a?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=n("FCXl"),y=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var O=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),a=i===o,r=new RegExp(o+"(?!-)"),l=n.replace(r,i);return Object(m.b)("li",{key:e,className:h()((t={},t[v.selectedItem]=a,t),v.listItem)},Object(m.b)(y.Link,{className:v.link,to:""+l},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},i))))))},o}(a.a.Component),k=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,i=e.location,a=e.Title,r=t.frontmatter,p=void 0===r?{}:r,h=t.relativePagePath,u=t.titleType,d=p.tabs,g=p.title,y=p.theme,v=p.description,j=p.keywords,I=o.data.site.pathPrefix,S=I?i.pathname.replace(I,""):i.pathname,P=d?S.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:y,pageTitle:g,pageDescription:v,pageKeywords:j,titleType:u},Object(m.b)(b,{title:a?Object(m.b)(a,null):g,label:"label",tabs:d}),d&&Object(m.b)(O,{slug:S,tabs:d,currentTab:P}),Object(m.b)(k.a,{padded:!0},n,Object(m.b)(w,{relativePagePath:h})),Object(m.b)(f.a,{pageContext:t,location:i,slug:S,tabs:d,currentTab:P}),Object(m.b)(l.a,null))}},S5Q1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),i=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},l=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(o.b)(l,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Monitoring the Bookinfo Application"),Object(o.b)("p",null,"IBM Cloud App Management (ICAM) can provide great visibiliity into Bookinfo application and how it is performing.  This document will guide you through the steps to setup monitoring for the application.  ICAM has many other capabilities, but we’re going to focus these activities around the Bookinfo application.  Additional details can be found in the “ICAM - Post Install Setup” section or in the product documentation.  The recommendation is to perform the following key activities in the order listed in this document:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Setup kubernetes monitoring"),Object(o.b)("li",{parentName:"ul"},"Setup the Unified Agent and the OpenShift Plugin + optionally setup the NGINX plugin"),Object(o.b)("li",{parentName:"ul"},"Setup synthetic monitoring to proactively monitor the Bookinfo application and microservices"),Object(o.b)("li",{parentName:"ul"},"Install the Runtime Data Collectors to instrument the Bookinfo Microservices"),Object(o.b)("li",{parentName:"ul"},"Perform additional tasks such as Policies, Runbooks, Resource Groups, etc. to fine tune your experience")),Object(o.b)("h3",null,"1.  Setup kubernetes monitoring"),Object(o.b)("p",null,"Our recommendation is to start by instrumenting your Kubernetes clusters with the Kubernetes Data Collector.  The Kubernetest Data Collector will gather detailed information about the performance of the components of the kubernetes cluster and will generate alerts on abnormal behavior.  You’ll see performance and topology information about the cluster, namespaces, nodes, pods, containers, and more.  In addition, the Kubernetes Data Collector will generate Events and Incidents whenever kubernetes detects problems."),Object(o.b)("img",{src:"/assets/img/cp4mcm/node.png",alt:"Kubernetes Node topology and utilization"}),Object(o.b)("p",null,"For MCM environments, use the klusterlet to install the Kubernetes Data Collector.  Instructions for monitoring a cluster containing the ICP core services can be found here:   ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet.html"),".  If the monitored cluster does not have the core services available, use these instructions:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet_no_helm.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet_no_helm.html"),"."),Object(o.b)("h3",null,"2.  Setup the Unified Agent and the OpenShift plugin"),Object(o.b)("p",null,"After instrumenting the OpenShift cluster with the kubernetes data collector, you will see a large amount of monitor data related to the cluster.  But, in an OpenShift environment there are some additional metrics that you will want to monitor.  For example, constructs like “projects” are unique to OpenShift and are not monitored by the Kubernetes Data Collector.   In the environment, install the Unified Agent and configure the OpenShift plugin.   Instructions on setting up the Unified Agent can be found here:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/unifiedagent_intro.html"}),"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/unifiedagent_intro.html")),Object(o.b)("p",null,"Optionally, when you setup the OpenShift plugin, you may also want to configure the NGINX plugin.  This plugin allows you to monitor the health NGINX and monitor the performance of the traffic through the NGINX http server."),Object(o.b)("h3",null,"3.  Setup Synthetic Monitoring"),Object(o.b)("p",null,"One of the most effective and easiest ways to monitor an application is by using the Synthetic monitoring capability.  With ICAM, you can deploy Synthetic PoP Agents that will automatically play back synthetic Web and REST API tests to validate that the application and microsevices are healthy."),Object(o.b)("h3",null,"PoP Agent Locations"),Object(o.b)("p",null,"One consideration when deploying the Synthetic PoP Agents is the location of web pages and APIs that are being monitored.   In the case of the bookinfo application the application website is available on the external network.  To monitor the application web page, you can setup a PoP on an external network segment and setup a PoP within the kubernetes network.  This can be valuable because it helps you understand whether you have backend server/application problems or network problems.  If the synthetic tests within the kubernetes network are responding normally, but the tests from the external network are slow or failing, then you know that you have a networking problem."),Object(o.b)("p",null,"For the synthetic testing of the REST APIs, they are typically only accessible via the kubernetes network.  So, you will only be able to run the synthetic tests from a PoP running within the kubernetes environment.  If you want high availability of the PoP Agents, you can install multiples, but they all need to run within the kubernetes network.  "),Object(o.b)("p",null,"Once you setup your synthetic PoP Agents are setup, you are ready to setup the synthetic tests."),Object(o.b)("h3",null,"Setting up the Synthetic Tests"),Object(o.b)("p",null,"Website testing is executed via Selenium.  For most applications, you typically want to exercise the entire application functionality to make sure the application is working.  This type of test can be accomplished by installing the Selenium IDE plugin into your browser and then recording the key clicks as you exercise your application.  The bookinfo application is very simple.  If you want, you can simply setup a website test of single URL with the following format"),Object(o.b)("p",null,"​    ",Object(o.b)("a",a({parentName:"p"},{href:"http://bookinfo.%3CIngress"}),"http://bookinfo.","<","Ingress")," IP address",">",".nip.io/productpage?u=normal"),Object(o.b)("p",null,"Or, you can ceate a simple Selenium scripted test where you go to the main web page "),Object(o.b)("p",null,"​    ",Object(o.b)("a",a({parentName:"p"},{href:"http://bookinfo.%3CIngress"}),"http://bookinfo.","<","Ingress")," IP address",">",".nip.io/"),Object(o.b)("p",null,"and then navigate from the main page to the “Normal user” or “Test user” link."),Object(o.b)("p",null,"Replace ","<","Ingress IP Address",">"," with the IP address of your cluster ingress."),Object(o.b)("p",null,"Once your synthetic test is configured, test it from 2 or more locations so that you can compare the performance.  "),Object(o.b)("p",null,"In addition to the website synthetic test, you want to proactively test each of the REST APIs.   The microservice REST APIs are not expose externally, so you will only be able to test them from a PoP running inside the kubernetes network.  Setup synthetic GET requests against the following URLs:"),Object(o.b)("p",null,"​    ",Object(o.b)("a",a({parentName:"p"},{href:"http://%3CIP"}),"http://","<","IP")," address",">",":9080/details/0"),Object(o.b)("p",null,"​    ",Object(o.b)("a",a({parentName:"p"},{href:"http://%3CIP"}),"http://","<","IP")," address",">",":9080/ratings/0"),Object(o.b)("p",null,"​    ",Object(o.b)("a",a({parentName:"p"},{href:"http://%3CIP"}),"http://","<","IP")," address",">",":9080/reviews/0"),Object(o.b)("p",null,"You can determine the IP address and confirm the port for each of the microservices by typing “kubectl get services”.  You will see a report similar to the one below:"),Object(o.b)("p",null,"​    NAME            TYPE        CLUSTER-IP    EXTERNAL-IP  PORT(S)      AGE"),Object(o.b)("p",null,"​    details            ClusterIP  10.0.48.208      ","<","none",">","            9080/TCP   45d"),Object(o.b)("p",null,"​    mysqldb         ClusterIP  10.0.36.138      ","<","none",">","            3306/TCP   45d"),Object(o.b)("p",null,"​    productpage  ClusterIP  10.0.255.0        ","<","none",">","            9080/TCP   45d"),Object(o.b)("p",null,"​    ratings            ClusterIP  10.0.151.72      ","<","none",">","            9080/TCP   45d"),Object(o.b)("p",null,"​    reviews           ClusterIP  10.0.29.64        ","<","none",">","            9080/TCP   45d"),Object(o.b)("p",null,"When you define the synthetic tests, you can also validate the json payload.  For example, when you call the details microservice, you will see that the “author” is “William Shakespeare”.  You can have the synthetic test confirm that “William Shakespeare” is being returned."),Object(o.b)("img",{src:"/assets/img/cp4mcm/create_synthetics.png",alt:"Setup Synthetic API Test"}),Object(o.b)("p",null,"After you have setup your test, you can view the results of the sythetic test by going to the “Synthetic results” tab."),Object(o.b)("img",{src:"/assets/img/cp4mcm/rest_synthetics.png",alt:"Synthetic API Test Result"}),Object(o.b)("h3",null,"4.  Instrument the Bookinfo Runtimes"),Object(o.b)("p",null,"The next recommended step is to instrument the Runtimes that make up the Bookinfo application.  This application consists of python, node.js, Go, and Liberty runtimes.  Each can be instrumented with the Runtime Data Collectors.  More information on the Runtime Data Collectors can be found here:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/dc_runtime_intro.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/dc_runtime_intro.html")),Object(o.b)("p",null,"The Runtimes are normally instrumented in your DevOps pipeline or early in the development phases.  The Data Collectors gather detailed information about the Application Server performance and tracks the transactions as they flow between the microservices.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instrument the productpage service with the python Data Collector.   "),Object(o.b)("li",{parentName:"ul"},"Instrument the details service with the Go Data Collector"),Object(o.b)("li",{parentName:"ul"},"Instrument the reviews service with the Liberty Data Collector"),Object(o.b)("li",{parentName:"ul"},"Instrument the ratings service with the node.js Data Collector")),Object(o.b)("p",null,"When instrumenting the Runtimes, the Data Collectors have a configuration parameter that allows you to determine the percentage of transactions that are sampled.   Depending on the Runtime, the parameter will either be OPENTRACING_SAMPLER or JAEGER_SAMPLER_PARAM.  If this value is set to “1”, 100% of the transactions are monitored.  If the parameter is set to “0.1”, 10% of the transactions are sampled.  By default, only 1% of the transactions are sampled in order to keep the overhead of the Data Collector small.  In a production environment with high transaction rates, 1% is appropriate.  In a test environment, you might want to enable 100% sampling of the transactions to make it easier to see data in the UI.  For applications with low to moderate transaction rates, 5% or 10% sampling might be a good sampling rate. "),Object(o.b)("p",null,"Once you have instrumented the Runtimes, you will start to see a number of useful pieces of information by selecting “Resources” and then drilling down into any of the “kubernetes service” resources that make up the Bookinfo application.  The kubernetes service names are:  productpage, details, ratings, and reviews.  There is also a mysqldb service, but that is not instrumented with Runtime monitoring."),Object(o.b)("img",{src:"/assets/img/cp4mcm/golden_signals.png",alt:"Golden Signals and Microservice Topology"}),Object(o.b)("p",null,"In the page for each microservice, you will see the Golden Signals, service topology, and service deployment.  You can use this information to diagnose performance bottlenecks within the Bookinfo application."),Object(o.b)("h3",null,"5. What to do Next"),Object(o.b)("p",null,"At this point you have a fully functional monitoring environment that is monitoring the Bookinfo application.  There are default thresholds that are monitoring your application.  There are some optional steps listed below that you may want to do in order to improve your experience with the product."),Object(o.b)("h4",null,"Users and Groups:"),Object(o.b)("p",null,"If you want, under the Admnistration tab, you can. click on the “Users and Groups” tab and add users and groups into the system.  Note, in order to add users to ICAM, you must first add them into MCM.  When adding Users and Groups, you assign roles to those users depending on what permissions you want them to have.  The highlight level permissions is an “Operations Lead” which give you access to the Administratiive tools.  An “Operator” has the fewest permissions in the tool and can primarly do read-only operations.  For more information in configuring Users and Groups:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/admin_manage_users.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/admin_manage_users.html")),Object(o.b)("p",null,"One of the options when setting up a user account is to setup how the user wants to be notified.  For example, a user might want to be notified via E-mail during normal working hours from 8:00 to 5:00.  Other notification options like SMS and Voicemail are possible, but require additional configuration and rely on 3rd party services."),Object(o.b)("h4",null,"Resource  Groups"),Object(o.b)("p",null,"If you want to organize your monitored resources into Resource Groups so that you can group related resources and perform administrative tasks against those groups, click on the “Resource Groups” tile within the Administrative tab.  For the Bookinfo application, it makes sense to organize the various resources that make up the application.  Once you have a Resource Group defined, you will be able to view the group and assign thresholds to the group.   More information on Resource Groups can be found here:   ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSHLNR_8.1.4/com.ibm.pm.doc/install/admin_thresholds_intro.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSHLNR_8.1.4/com.ibm.pm.doc/install/admin_thresholds_intro.html")),Object(o.b)("p",null,"In the case of the Bookinfo application, consider adding the “Kubernetes Services” along with the various Runtime Data Collectors into the Resource Group."),Object(o.b)("h4",null,"Integrations"),Object(o.b)("p",null,"The primary Integration that you would want to setup for the Bookinfo application would be outbound integration with an Event Management server or a Service Desk.  For example, if you have Netcool Operations Insights in the environment, you will want to forward the Incidents to Netcool.  If you have a Service Desk such as Service Now, you will want to forward the Incidents from ICAM or possible configure the integration within Netcool:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/integ_intro.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/integ_intro.html")),Object(o.b)("h4",null,"Runbooks"),Object(o.b)("p",null,"The Bookinfo application is not defined to auto-scale.  Therefore, you might want to create a runbook that allows you to scale out the deployment.  For example, you detect that the Ratings service is having performance problems, scale out the bookinfo-ratings deployment.  If you want your Runbook integrated with the Incidents, then you must pass parameters in from the Events.  That will be a bit tricky because the most likely source of the Events will be the pod.  Let’s say the pod name is bookinfo-ratings-75459645d4-nwhv6, you will need to extract the “bookinfo-ratings” portion of the name in your script and then run a command similar to “kubectl scale deploy bookinfo-ratings —replicas=3”.  The parameters can be passed into the Runbook from the Event and the replicas can be defined as a configurable parameter."),Object(o.b)("p",null,"Find more information on runbooks here:  ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_rba.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_rba.html")),Object(o.b)("h4",null,"Policies"),Object(o.b)("p",null,"Policies are way of customizing the way that Events and Incidents are processed.  As new Events and Incidents  are detected,  you may want to customize the event details, send out a notification, suppress specific events and more.  All of this can be achieved by selecting the “Policies” tile within the Administration tab.  Find information on Event Policies here ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_setupeventpolicies.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_setupeventpolicies.html")," and on Incident Policies here ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_overview.html"}),"https://www.ibm.com/support/knowledgecenter/en/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/em_overview.html"),"."),Object(o.b)("p",null,"In the case of the Bookinfo application, you may want to create an Event Policy that cause the Events from the Bookinfo application to be correlated into a single incident.  By default, Incidents are correlated based on the hostname and IP address, but these microservices are running on different hosts with different IPs.  Create a policy similar to the one shown below.  You’ll notice that it will affect any Event where the resource name contains “bookinfo” AND the resource type contains “k8s” which means it is a kubernetes resource.  Any Event that matches the criteria will have an “Application” Event slot populated with “Bookinfo”.  This will cause the events to be correlated into a single Incident."),Object(o.b)("img",{src:"/assets/img/cp4mcm/bookinfo_policy.png",alt:"Bookinfo Policy"}),Object(o.b)("p",null,"It is also possible to assign a Runbook via the Event Policy.  In order to assign a Runbook, you must first create the Runbook following the guidance below."))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-monitoring-bookinfo-index-mdx-451ea8433a0a1d8f5097.js.map