"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[125],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},l="Configuring Channels and Sending Alerts",c={unversionedId:"reference/notifications/configuring_channels",id:"reference/notifications/configuring_channels",title:"Configuring Channels and Sending Alerts",description:"Before using the notify command to send alerts, we need to configure the respective channels.",source:"@site/docs/reference/notifications/configuring_channels.md",sourceDirName:"reference/notifications",slug:"/reference/notifications/configuring_channels",permalink:"/0.10.0/docs/reference/notifications/configuring_channels",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/notifications/configuring_channels.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Owners",permalink:"/0.10.0/docs/reference/notifications/configuring_owners"},next:{title:"Table Samples",permalink:"/0.10.0/docs/reference/table_samples"}},u={},p=[{value:"Slack",id:"slack",level:2},{value:"Email",id:"email",level:2}],m={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-channels-and-sending-alerts"},"Configuring Channels and Sending Alerts"),(0,o.kt)("p",null,"Before using the notify command to send alerts, we need to configure the respective channels."),(0,o.kt)("h2",{id:"slack"},"Slack"),(0,o.kt)("p",null,"To send alerts to a slack channel, we make use of ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"incoming webhooks")," which is a simple way to post messages from apps into Slack."),(0,o.kt)("p",null,"The steps required to enable incoming webhooks and get started can be found in the slack ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks#enable_webhooks"},"API docs"),". Once you have created an incoming webhook successfully, you should see a new entry under Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,o.kt)("p",null,"The webhook url can now be used with the re_data notify command as shown below,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--select anomaly \\\n--select test \\\n--select schema_change \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"\n')),(0,o.kt)("p",null,"or configure in re_data.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="~/.re_data/re_data.yml"',title:'"~/.re_data/re_data.yml"'},"notifications:\n  slack:\n    webhook_url: https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,o.kt)("p",null,"Below is a sample alert notification message sent by a slack app created."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"SlackMessage",src:n(5162).Z,width:"1212",height:"1398"})),(0,o.kt)("p",null,"By default, the most recent 20 alerts are shown and you can generate the Observability UI to show more details relating to alerts."),(0,o.kt)("h2",{id:"email"},"Email"),(0,o.kt)("p",null,"Before you can send alerts via email, you need to have configured an email account on the SMTP server you are going to use to send the email."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mail_from: Email address to set as the email's from"),(0,o.kt)("li",{parentName:"ul"},"smtp_host: SMTP server to use"),(0,o.kt)("li",{parentName:"ul"},"smtp_port: SMTP port to use"),(0,o.kt)("li",{parentName:"ul"},"smtp_user: SMTP user to use"),(0,o.kt)("li",{parentName:"ul"},"smtp_password: SMTP password to use"),(0,o.kt)("li",{parentName:"ul"},"use_ssl: Use SSL to connect to SMTP server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="~/.re_data/re_data.yml"',title:'"~/.re_data/re_data.yml"'},"notifications:\n  email:\n    mail_from: notifications@getre.io\n    smtp_host: smtp.sendgrid.net\n    smtp_port: 465\n    smtp_user: username\n    smtp_password: xxxxx\n    use_ssl: true\n")),(0,o.kt)("p",null,"Email alerts can now be sent using the command as shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_data notify email \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--select anomaly \\\n--select test \\\n--select schema_change\n")),(0,o.kt)("p",null,"Below is a sample alert notification message sent by a slack app created.\n",(0,o.kt)("img",{loading:"lazy",alt:"EmailAlertMessage",src:n(3773).Z,width:"959",height:"859"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"having-issues"},"Having issues?"),(0,o.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide."))))}d.isMDXComponent=!0},3773:function(e,t,n){t.Z=n.p+"assets/images/email_notification_message-f9f5e83c9bef2e4808fc8f0ff0c0cb66.png"},5162:function(e,t,n){t.Z=n.p+"assets/images/slack_notification_message-3cfeb3b3544f9c58d3d96247b1c38c9d.png"}}]);