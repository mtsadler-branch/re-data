"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||s[m]||n;return r?a.createElement(y,i(i({ref:t},d),{},{components:r})):a.createElement(y,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2},i="Quickstart \ud83d\ude80",l={unversionedId:"re_cloud/quickstart",id:"re_cloud/quickstart",title:"Quickstart \ud83d\ude80",description:"In this quick tutorial we will deploy the UI of redata & dbtdocs to production environment when you and your team can check those 2 usefull reports.",source:"@site/docs/re_cloud/quickstart.md",sourceDirName:"re_cloud",slug:"/re_cloud/quickstart",permalink:"/master/docs/re_cloud/quickstart",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is re_cloud?",permalink:"/master/docs/re_cloud/whatis_cloud"},next:{title:"Bigquery",permalink:"/master/docs/re_cloud/integrations/bigquery"}},c={},u=[{value:"Install re_cloud package",id:"install-re_cloud-package",level:2},{value:"Configure your API key",id:"configure-your-api-key",level:2},{value:"Generate reports",id:"generate-reports",level:2},{value:"Upload reports! \ud83d\ude0a",id:"upload-reports-",level:2},{value:"View them in the cloud",id:"view-them-in-the-cloud",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-"},"Quickstart \ud83d\ude80"),(0,o.kt)("p",null,"In this quick tutorial we will deploy the UI of re_data & dbt_docs to production environment when you and your team can check those 2 usefull reports."),(0,o.kt)("p",null,"This introduction assumes you are using dbt and optionally re_data."),(0,o.kt)("h2",{id:"install-re_cloud-package"},"Install re_cloud package"),(0,o.kt)("p",null,"re_cloud package is small python package for uploading data reports files to re_cloud \ud83d\ude0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_cloud\n")),(0,o.kt)("h2",{id:"configure-your-api-key"},"Configure your API key"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account Settings")," section of the re_cloud, you can find your API key, which will be used for uploading data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DashboardExample",src:r(1020).Z,width:"1559",height:"584"})),(0,o.kt)("p",null,"Then paste this into your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.re_data/re_data.yml")," configuration file. (For simplicity we use the same directory and file as you would use for ",(0,o.kt)("em",{parentName:"p"},"re_data")," package configuration)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="~/.re_data/re_data.yml"',title:'"~/.re_data/re_data.yml"'},"\nre_cloud:\n  api_key: YOUR_KEY_HERE\n")),(0,o.kt)("h2",{id:"generate-reports"},"Generate reports"),(0,o.kt)("p",null,"If you didn't yet generated dbt docs and re_data reports you can do it now. ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to your dbt project catalog and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dbt docs generate\nre_data overview generate\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This commands require you to have dbt & re_data configured for the project. In case you just use dbt docs not re_data you can skip the second command. If you don't use any of it, check our instructions other tools we support.")),(0,o.kt)("h2",{id:"upload-reports-"},"Upload reports! \ud83d\ude0a"),(0,o.kt)("p",null,"Now with just 2 commands we can upload our reports to cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_cloud upload dbt-docs\nre_cloud upload re-data\n")),(0,o.kt)("h2",{id:"view-them-in-the-cloud"},"View them in the cloud"),(0,o.kt)("p",null,"Now you cloud account should contain 2 additional reports with recent upload times."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DashboardExample",src:r(1359).Z,width:"1898",height:"992"})),(0,o.kt)("p",null,"re_cloud supports uploading a couple of different reports, let's check all of them \ud83d\ude0a"))}s.isMDXComponent=!0},1020:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/getapikey-7e44a22d8ce86b37de77b0870ac2c5cc.png"},1359:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/start_dashboard-e9ac36568d4525da6eb5ac06507f0939.png"}}]);