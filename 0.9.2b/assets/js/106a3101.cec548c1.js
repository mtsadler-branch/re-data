"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[238],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(r),d=n,k=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return r?a.createElement(k,s(s({ref:t},m),{},{components:r})):a.createElement(k,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6647:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),s=["components"],i={sidebar_position:1},u="Asserts",o={unversionedId:"reference/tests/asserts",id:"reference/tests/asserts",title:"Asserts",description:"re_data comes with asserts library, created to test metrics computed.",source:"@site/docs/reference/tests/asserts.md",sourceDirName:"reference/tests",slug:"/reference/tests/asserts",permalink:"/0.9.2b/docs/reference/tests/asserts",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests/asserts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Table Samples",permalink:"/0.9.2b/docs/reference/table_samples"},next:{title:"Tests history",permalink:"/0.9.2b/docs/reference/tests/history"}},m={},p=[{value:"assert_true",id:"assert_true",level:3},{value:"assert_false",id:"assert_false",level:3},{value:"assert_in_range",id:"assert_in_range",level:3},{value:"assert_equal",id:"assert_equal",level:3},{value:"assert_greater",id:"assert_greater",level:3},{value:"assert_greater_equal",id:"assert_greater_equal",level:3},{value:"assert_less",id:"assert_less",level:3},{value:"assert_less_equal",id:"assert_less_equal",level:3}],c={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"asserts"},"Asserts"),(0,l.kt)("p",null,"re_data comes with asserts library, created to test metrics computed.\nYou can use those as tests in ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.yml")," of every model monitored by re_data."),(0,l.kt)("p",null,"re_data asserts can be applied both as table and column level tests as show in the example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="schema.yml"',title:'"schema.yml"'},"version: 2\n\nmodels:\n  - name: buy_events\n    tests:\n      - re_data.assert_in_range:\n          metric: row_count\n          min_value: 0\n          max_value: 10\n\n    columns:\n      - name: value1\n        tests:\n          - re_data.assert_true:\n              metric: nulls_percent\n              expression: value = 0\n\n      - name: value2\n        tests:\n          - re_data.assert_greater:\n              metric: min\n              value: 200\n              where: time_window_start >= '2020-05-02'\n\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Asserts have a set of standard params with the same meaning in all tests:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"metric: name of the metric you are testing"),(0,l.kt)("li",{parentName:"ul"},"expression: an expression which re_data will evaluate to be true or false. Use ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," to indicate the value of a metric computed. Example expression: ",(0,l.kt)("inlineCode",{parentName:"li"},"value > 0")," asserts that metric is greater than 0"),(0,l.kt)("li",{parentName:"ul"},"value - a number to which you would like to compare metric. Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"value: 5")," in the ",(0,l.kt)("inlineCode",{parentName:"li"},"assert_greater")," test would check if all metric values are larger than 5"),(0,l.kt)("li",{parentName:"ul"},"min_value, max_value - similarly to ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," re_data will compare metric values to values passed here"),(0,l.kt)("li",{parentName:"ul"},"where: (optional) time filter for the metric, if you would like to tests only metric from specific time range. User ",(0,l.kt)("inlineCode",{parentName:"li"},"time_window_start")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"time_window_end")," to compare against time. Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"time_window_start > '2020-05-02'")," will check only metrics computed later than on '2020-05-02'")))),(0,l.kt)("h3",{id:"assert_true"},"assert_true"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"expression"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that given expression is true for the metric computed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_true:\n    metric: nulls_percent\n    expression: value = 0\n    where: time_window_start >= '2020-05-02' # (optinal)\n")),(0,l.kt)("h3",{id:"assert_false"},"assert_false"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"expression"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that given expression is false for the metric computed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_false:\n    metric: freshness\n    expression: value is null\n")),(0,l.kt)("h3",{id:"assert_in_range"},"assert_in_range"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"min_value"),(0,l.kt)("li",{parentName:"ul"},"max_value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is between min_value and max_value (inclusive)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_in_range:\n    metric: row_count\n    min_value: 0\n    max_value: 10\n")),(0,l.kt)("h3",{id:"assert_equal"},"assert_equal"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is equal to specified value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_equal:\n    metric: row_count\n    value: 1\n")),(0,l.kt)("h3",{id:"assert_greater"},"assert_greater"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is greater to specified value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_greater:\n    metric: min\n    value: 200\n")),(0,l.kt)("h3",{id:"assert_greater_equal"},"assert_greater_equal"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is greater or equal specified value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_greater_equal:\n    metric: my_distinct_table_rows\n    value: 10\n")),(0,l.kt)("h3",{id:"assert_less"},"assert_less"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is smaller specified value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_less:\n    metric: min\n    value: 100\n")),(0,l.kt)("h3",{id:"assert_less_equal"},"assert_less_equal"),(0,l.kt)("p",null,"Accepted params:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"metric"),(0,l.kt)("li",{parentName:"ul"},"value"),(0,l.kt)("li",{parentName:"ul"},"where")),(0,l.kt)("p",null,"Assert that metric value is smaller or equal to specified value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- re_data.assert_less_equal:\n    metric: min\n    value: 107\n")),(0,l.kt)("p",null,"If you would like us to add some other tests, information about tests history, etc., join ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," and let us know! \ud83d\ude0a"))}d.isMDXComponent=!0}}]);