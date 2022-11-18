"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={sidebar_position:2},l="Tests history",d={unversionedId:"reference/tests/history",id:"reference/tests/history",title:"Tests history",description:"redata can store dbt tests history into your data warehouse and visualize details of it in redata UI.",source:"@site/docs/reference/tests/history.md",sourceDirName:"reference/tests",slug:"/reference/tests/history",permalink:"/0.9.1/docs/reference/tests/history",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests/history.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Asserts",permalink:"/0.9.1/docs/reference/tests/asserts"},next:{title:"Data Cleaning",permalink:"/0.9.1/docs/reference/macros/data_cleaning"}},c={},u=[{value:"Config",id:"config",level:2},{value:"<code>re_data:save_test_history</code> (default false)",id:"re_datasave_test_history-default-false",level:4},{value:"Tests view",id:"tests-view",level:2},{value:"Test details",id:"test-details",level:2},{value:"re_data_test_history",id:"re_data_test_history",level:2}],p={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tests-history"},"Tests history"),(0,s.kt)("p",null,"re_data can store dbt tests history into your data warehouse and visualize details of it in re_data UI."),(0,s.kt)("h2",{id:"config"},"Config"),(0,s.kt)("p",null,"re_data comes with 3 config options to configure:"),(0,s.kt)("h4",{id:"re_datasave_test_history-default-false"},(0,s.kt)("inlineCode",{parentName:"h4"},"re_data:save_test_history")," (default false)"),(0,s.kt)("p",null,"by default re_data doesn't store tests history to enable this you would need to set this var to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")),(0,s.kt)("p",null,"Example test history configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:"dbt_project.yml","dbt_project.yml":!0},"vars:\n  re_data:save_test_history: true\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"re_data uses on-run-end hooks for dbt tests to save the tests data. This is only available in dbt versions 1.0.0 or newer."))),(0,s.kt)("h2",{id:"tests-view"},"Tests view"),(0,s.kt)("p",null,"Tests view lets you see the history of all dbt tests run. You can filter on the table, time, etc."),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"GraphExample",src:r(2156).Z,width:"1566",height:"839"})),(0,s.kt)("h2",{id:"test-details"},"Test details"),(0,s.kt)("p",null,"Tests detail view lets you see the history of a single tests over time. It shows number of failures, SQL code run and failure rows."),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"GraphExample",src:r(2156).Z,width:"1566",height:"839"})),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To see failing rows from tests you would need to run dbt test with ",(0,s.kt)("inlineCode",{parentName:"p"},"--store-failures")," config option."))),(0,s.kt)("h2",{id:"re_data_test_history"},"re_data_test_history"),(0,s.kt)("p",null,"re_data test history model contains information about tests and their stats."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select * from toy_shop_re.re_data_test_history\n        table_name        | column_name |                                 test_name                                  | status |       run_at\n--------------------------+-------------+----------------------------------------------------------------------------+--------+---------------------\n postgres.toy_shop.orders | amount      | not_null_orders_amount                                                     | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | accepted_values_orders_status__pending__shipped__delivered__not_paid__paid | Fail   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | customer_id | not_null_orders_customer_id                                                | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | created_at  | not_null_orders_created_at                                                 | Pass   | 2022-01-13 08:49:39\n postgres.toy_shop.orders | status      | not_null_orders_status                                                     | Pass   | 2022-01-13 08:49:39\n")))}m.isMDXComponent=!0},2156:function(e,t,r){t.Z=r.p+"assets/images/tests-5fa038cf9e4af79a7c85ce16707c199c.png"}}]);