"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9218:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},c="Notify",s={unversionedId:"reference/cli/notify",id:"reference/cli/notify",title:"Notify",description:"redata notify command is used to send notifications relating to redata alerts.",source:"@site/docs/reference/cli/notify.md",sourceDirName:"reference/cli",slug:"/reference/cli/notify",permalink:"/0.7.1/docs/reference/cli/notify",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/notify.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/0.7.1/docs/reference/cli/run"},next:{title:"Overview",permalink:"/0.7.1/docs/reference/metrics/overview_metric"}},u={},d=[{value:"slack",id:"slack",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notify"},"Notify"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re_data notify")," command is used to send notifications relating to re_data alerts."),(0,o.kt)("h3",{id:"slack"},"slack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"\n')),(0,o.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supported arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,o.kt)("li",{parentName:"ul"},"end-date (default: today - 7 days) - end date of the period for which you want to generate alerts"),(0,o.kt)("li",{parentName:"ul"},"webhook-url - ",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"incoming webhook")," gotten from a slack app."),(0,o.kt)("li",{parentName:"ul"},"subtitle (optional) - extra markdown text passed to the generated message. Often used to add some more context to the message generated."),(0,o.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."))),(0,o.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,o.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,o.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,o.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))))}f.isMDXComponent=!0}}]);