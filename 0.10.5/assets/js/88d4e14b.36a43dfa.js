"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},l="Custom HTML",u={unversionedId:"re_cloud/integrations/custom_html",id:"re_cloud/integrations/custom_html",title:"Custom HTML",description:"Overview",source:"@site/docs/re_cloud/integrations/custom_html.md",sourceDirName:"re_cloud/integrations",slug:"/re_cloud/integrations/custom_html",permalink:"/0.10.5/docs/re_cloud/integrations/custom_html",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/integrations/custom_html.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bigquery",permalink:"/0.10.5/docs/re_cloud/integrations/bigquery"},next:{title:"dbt docs",permalink:"/0.10.5/docs/re_cloud/integrations/dbt_docs"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Uploading to re_cloud",id:"uploading-to-re_cloud",level:2},{value:"re_cloud command",id:"re_cloud-command",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-html"},"Custom HTML"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you have details about your data that you want to share with your team, custom html report maybe the best wayt to do it."),(0,n.kt)("p",null,"Some tools allows you to export HTML summary of you data. For example ",(0,n.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_html.html"},"pandas to_html command")," let's you export information about your dataframe to HTML file."),(0,n.kt)("p",null,"Example summary of your dataframe data you can upload:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"custom_html_example",src:r(5816).Z,width:"876",height:"231"})),(0,n.kt)("h2",{id:"uploading-to-re_cloud"},"Uploading to re_cloud"),(0,n.kt)("p",null,"Let's upload summary of pandas dataframe to re_cloud"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df = pd.DataFrame(np.random.rand(100, 5), columns=["a", "b", "c", "d", "e"])\ntext = df.to_html()\n\nwith open("summary.html", \'w\') as f:\n    f.write(text)\n')),(0,n.kt)("p",null,"Once generated you can upload report to the cloud:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload custom --file summary.html\n")),(0,n.kt)("h2",{id:"re_cloud-command"},"re_cloud command"),(0,n.kt)("p",null,"Below we show all the currently supported options on how you can upload custom html to ",(0,n.kt)("inlineCode",{parentName:"p"},"re_cloud")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Usage: re_cloud upload custom --name TEXT  --file TEXT\n\nOptions:\n  --file TEXT  custom html file to upload  [required]\n  --name TEXT  Name of the upload used for identification\n  --help       Show this message and exit.\n")),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"If you would like to jump into uploading data you can create your ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free account here \ud83d\ude0a"))," if you have more questions for us: don't be reluctant to join our ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}p.isMDXComponent=!0},5816:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom_html-5067963f23721f640e4dae88ad061cd4.png"}}]);