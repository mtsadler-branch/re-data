"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},s="Anonymous data collection",i={unversionedId:"re_data/reference/anonymous_usage",id:"re_data/reference/anonymous_usage",title:"Anonymous data collection",description:"In order to catch problems early, understand how users are using redata and improve our product redata captures anonymous information about command-line usage. We track only the most important information and don't track any table names, metric names, etc. Here are a sample requests we are getting to our systems.",source:"@site/docs/re_data/reference/anonymous_usage.md",sourceDirName:"re_data/reference",slug:"/re_data/reference/anonymous_usage",permalink:"/0.10.6/docs/re_data/reference/anonymous_usage",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/anonymous_usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/0.10.6/docs/re_data/reference/models"},next:{title:"Q&A \ud83d\udcac",permalink:"/0.10.6/docs/re_data/qa"}},l={},c=[{value:"Sample events",id:"sample-events",level:2},{value:"Opt out",id:"opt-out",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anonymous-data-collection"},"Anonymous data collection"),(0,a.kt)("p",null,"In order to catch problems early, understand how users are using ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," and improve our product ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," captures anonymous information about command-line usage. We track only the most important information and don't track any table names, metric names, etc. Here are a sample requests we are getting to our systems."),(0,a.kt)("h2",{id:"sample-events"},"Sample events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    'command': 'run',\n    'dbt_version': '1.0.3',\n    'end_date': '2021-01-02T00:00:00.000Z',\n    'interval': 'days:1',\n    'os_system': 'Darwin',\n    'profile': null,\n    'python_version': '3.9.9',\n    're_data_version': '0.6.2',\n    'start_date': '2021-01-01T00:00:00.000Z',\n    'status': 'start',\n    'target': null\n")),(0,a.kt)("p",null,"In case of an exception happening when running ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," we will also get a type of exception:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    'command': 'run',\n    'dbt_version': '1.0.3',\n    'end_date': '2021-01-02T00:00:00.000Z',\n    'error': '<class \\'subprocess.CalledProcessError\\'>',\n    'interval': 'days:1',\n    'os_system': 'Darwin',\n    'profile': null,\n    'python_version': '3.9.9',\n    're_data_version': '0.6.2',\n    'start_date': '2021-01-01T00:00:00.000Z',\n    'status': 'exception',\n    'target': null\n")),(0,a.kt)("h2",{id:"opt-out"},"Opt out"),(0,a.kt)("p",null,"If you would like to opt out of anonymous usage collection set ",(0,a.kt)("inlineCode",{parentName:"p"},"RE_DATA_SEND_ANONYMOUS_USAGE_STATS=0")," in your environment. You can do it before or togather with ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," command call like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RE_DATA_SEND_ANONYMOUS_USAGE_STATS=1 re_data overview generate\n")))}p.isMDXComponent=!0}}]);