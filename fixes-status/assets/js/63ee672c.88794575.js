"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),_=d(n),c=a,u=_["".concat(l,".").concat(c)]||_[c]||m[c]||r;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}_.displayName="MDXCreateElement"},4466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},i="Reliability data",s={unversionedId:"re_data/getting_started/toy_shop/compute_monitoring",id:"re_data/getting_started/toy_shop/compute_monitoring",title:"Reliability data",description:"Now, let's compute the first health data. The toy shop sample project already has re_data configuration defined, but let's go over it and see what we needed to configure.",source:"@site/docs/re_data/getting_started/toy_shop/compute_monitoring.md",sourceDirName:"re_data/getting_started/toy_shop",slug:"/re_data/getting_started/toy_shop/compute_monitoring",permalink:"/fixes-status/docs/re_data/getting_started/toy_shop/compute_monitoring",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/getting_started/toy_shop/compute_monitoring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to toy shop!",permalink:"/fixes-status/docs/re_data/getting_started/toy_shop/toy_shop_data"},next:{title:"Reliability UI \ud83d\udc40",permalink:"/fixes-status/docs/re_data/getting_started/toy_shop/generate_ui"}},l={},d=[{value:"re_data configuration",id:"re_data-configuration",level:2},{value:"First re_data run",id:"first-re_data-run",level:2},{value:"re_data run for ten first days of January",id:"re_data-run-for-ten-first-days-of-january",level:2},{value:"Looking into anomalies",id:"looking-into-anomalies",level:2},{value:"Running tests",id:"running-tests",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reliability-data"},"Reliability data"),(0,a.kt)("p",null,"Now, let's compute the first health data. The toy shop sample project already has re_data configuration defined, but let's go over it and see what we needed to configure."),(0,a.kt)("h2",{id:"re_data-configuration"},"re_data configuration"),(0,a.kt)("p",null,"For re_data pending orders models, we do have in file configuration defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=toy_shop/models/pending_orders_per_customers.sql",title:"toy_shop/models/pending_orders_per_customers.sql"},"\n{{\n    config(\n        re_data_monitored=true,\n        re_data_time_filter='time_created',\n        re_data_anomaly_detector={'name': 'z_score', 'threshold': 2.2},\n    )\n}}\n\nselect o.id, o.amount ...\n\n")),(0,a.kt)("p",null,"This configuration makes the",(0,a.kt)("inlineCode",{parentName:"p"}," pending_orders_per_customers")," model monitored by re_data and uses column named: ",(0,a.kt)("inlineCode",{parentName:"p"},"time_created")," as timestamp column when computing re_data stats."),(0,a.kt)("p",null,"We also optionally configured an anomaly detector to check for anomalies for this table. Other additional things we can configure are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"re_data_columns")," - to specify for what table columns re_data metrics should be computed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"re_data_metrics")," - to add additional metrics to be computed for the table")),(0,a.kt)("p",null,"For re_data seed files, let's look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"toy_shop/seeds/schema.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=toy_shop/seeds/schema.yml",title:"toy_shop/seeds/schema.yml"},"version: 2\n\nseeds:\n  - name: customers\n    config:\n      re_data_monitored: true\n      re_data_time_filter: null\n\n    columns:\n      - name: id\n        tests:\n          - not_null\n          - unique\n\n  - name: orders\n    config:\n      re_data_monitored: true\n      re_data_time_filter: time_created\n      re_data_anomaly_detector:\n        name: modified_z_score\n        threshold: 3.5\n  ...\n")),(0,a.kt)("p",null,"We do see the ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data_monitored")," set for both of those tables. For the ",(0,a.kt)("inlineCode",{parentName:"p"},"customers")," table as data, there doesn't have any timestamp column we set ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data_time_filter")," to null to compute stats globally for the whole table. For the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," table similarly to the pending orders table we set it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"time_created")," column. "),(0,a.kt)("p",null,"Additionally for the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," table, we configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data_anomaly_detector")," method and set up a specific threshold to be used when looking for anomalies in this table."),(0,a.kt)("p",null,"Apart from configuration specific to some of the tables (or table groups) re_data also has a possibility to define global configuration which will apply to all data computed. This is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"vars")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=toy_shop/dbt_project.yml",title:"toy_shop/dbt_project.yml"},"vars:\n  re_data:anomaly_detector:\n    name: modified_z_score\n    threshold: 3\n")),(0,a.kt)("p",null,"Here we set the anomaly_detector method for re_data globally. This will have ",(0,a.kt)("strong",{parentName:"p"},"less")," priority than model defined configurations. In general re_data configuration follows the rule that the more specific configuration, the more important it is."),(0,a.kt)("p",null,"Now with this explained, we can compute re_data models for the first time:"),(0,a.kt)("h2",{id:"first-re_data-run"},"First re_data run"),(0,a.kt)("p",null,"We choose to run re_data for the first day of 2021."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data:time_window_start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data:time_window_end")," are another global configuration parameters. They can be defined also in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," vars file, but here we want them to be more dynamic and we use a dbt ",(0,a.kt)("inlineCode",{parentName:"p"},"--vars")," option to pass them. If we don't pass time window parameters re_data will compute stats for the previous day. (from yesterday's 00:00 AM up until today 00:00 AM)")),(0,a.kt)("p",null,"Anytime re_data computes its models, it detects tables being monitored, their configuration and that inside your database as a re_data model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'postgres=> SELECT * FROM toy_shop_re.re_data_monitored;\n\n            name             |  schema  | database | time_filter  | metrics | columns |                anomaly_detector\n-----------------------------+----------+----------+--------------+---------+---------+------------------------------------------------\n pending_orders_per_customer | toy_shop | postgres | time_created | {}      | []      | {"name": "z_score", "threshold": 2.2}\n customers                   | toy_shop | postgres |              | {}      | []      | {"name": "modified_z_score", "threshold": 3}\n orders                      | toy_shop | postgres | time_created | {}      | []      | {"name": "modified_z_score", "threshold": 3.5}\n')),(0,a.kt)("p",null,"You would notice that here we will also see ",(0,a.kt)("em",{parentName:"p"},"final")," configuration applied when actually computing models (taking into account priorties from different configuration levels). More information on configuration can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/re_data/reference/config"},"here"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice that table was created inside ",(0,a.kt)("inlineCode",{parentName:"p"},"toy_shop_re")," schema. re_data tables are by default created with this schema suffix, ",(0,a.kt)("em",{parentName:"p"},"except ",(0,a.kt)("inlineCode",{parentName:"em"},"toy_shop_re_internal"))," tables which are internal tables not be used directly by you. You can change this behaviour however you want, we use following dbt config for our models. (which can be overwritten)"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=dbt_project.yml",title:"dbt_project.yml"},"models:\n  re_data:\n    +schema: re\n    internal:\n      +schema: re_internal\n"))),(0,a.kt)("p",null,"Metrics have been computed for the window between 2021-01-01 and 2021-01-02, let us see how many rows we have for the tables being monitored. The ",(0,a.kt)("inlineCode",{parentName:"p"},"row_count")," metric gives us that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed metrics"',title:'"Viewing',computed:!0,'metrics"':!0},'postgres=> SELECT table_name, metric, value, time_window_start, time_window_end from toy_shop_re.re_data_metrics where metric in( \'row_count\', \'global__row_count\');\n\n                     table_name                      |      metric       | value |  time_window_start  |   time_window_end\n-----------------------------------------------------+-------------------+-------+---------------------+---------------------\n "postgres"."toy_shop"."customers"                   | global__row_count |    15 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n "postgres"."toy_shop"."orders"                      | row_count         |    20 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n "postgres"."toy_shop"."pending_orders_per_customer" | row_count         |     5 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note, if a model being monitored has no time filter specified, re_data will compute the metric over the whole table. A ",(0,a.kt)("inlineCode",{parentName:"p"},"global__")," prefix would be added to that metric.")),(0,a.kt)("h2",{id:"re_data-run-for-ten-first-days-of-january"},"re_data run for ten first days of January"),(0,a.kt)("p",null,"On production, we would set up re_data to run daily/hourly/etc. For toy shop, by using the re_data python package command we backfill daily data for the past."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"re_data run --start-date 2021-01-01 --end-date 2021-01-11\n")),(0,a.kt)("h2",{id:"looking-into-anomalies"},"Looking into anomalies"),(0,a.kt)("p",null,"And now let's look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data_anomalies")," table to see if ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," found anything suspicious for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed anomalies"',title:'"Viewing',computed:!0,'anomalies"':!0},'postgres=> select table_name, metric, z_score_value, modified_z_score_value, last_value, time_window_end from toy_shop_re.re_data_anomalies;\n\n                     table_name                      |   metric   |  z_score_value   | modified_z_score_value |    last_value    |   time_window_end\n-----------------------------------------------------+------------+------------------+------------------------+------------------+---------------------\n "postgres"."toy_shop"."orders"                      | stddev     | 2.26512659456492 |       33.1559468401042 | 76623.0542133031 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | max        | 1.90332380570845 |       5.39599999982013 |              220 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | avg        | 2.23609834440421 |       12.5165457875454 | 83714.2857142857 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | variance   | 2.17679662067361 |       14.3162734688659 | 5933.28235294118 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | avg_length | 1.99359828729157 |       4.83162244794424 | 12.1428571428571 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | stddev     | 2.12566830905018 |       12.0321401712802 | 77.0278024672986 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | row_count  | 1.97360659802582 |       5.05874999974706 |               35 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."orders"                      | variance   | 2.26750636806239 |       96.2432445786529 | 5871092436.97479 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."pending_orders_per_customer" | avg        | 2.23118408449371 |       11.0541393078969 | 114782.608695652 | 2021-01-08 00:00:00\n "postgres"."toy_shop"."pending_orders_per_customer" | max        | 2.25075673466898 |       27.6544999999994 |           250000 | 2021-01-08 00:00:00\n')),(0,a.kt)("p",null,"We can see there are a couple of things re_data flagged for us. Recall that re_data would flag anomalies based on the method of detection and the threshold set."),(0,a.kt)("h2",{id:"running-tests"},"Running tests"),(0,a.kt)("p",null,"Before moving on and investigating it in re_data UI. Let's run tests to see if they point to any problems in our data."),(0,a.kt)("p",null,"First we update the dbt_project.yml and enable storing tests history (simply by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data:save_test_history")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="toy_shop/dbt_project.yml"',title:'"toy_shop/dbt_project.yml"'},"vars:\n  ...\n  \n  re_data:save_test_history: true\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running tests"',title:'"Running','tests"':!0},"$ dbt test --select package:toy_shop\n\n...\n\n22:36:20  1 of 7 START test accepted_values_orders_status__PENDING_PAYMENT__PAID__SHIPPED__DELIVERED [RUN]\n22:36:20  2 of 7 START test not_null_customers_id......................................... [RUN]\n22:36:20  3 of 7 START test not_null_orders_amount........................................ [RUN]\n22:36:20  4 of 7 START test not_null_orders_customer_id................................... [RUN]\n22:36:21  2 of 7 PASS not_null_customers_id............................................... [PASS in 0.12s]\n22:36:21  3 of 7 PASS not_null_orders_amount.............................................. [PASS in 0.13s]\n22:36:21  4 of 7 PASS not_null_orders_customer_id......................................... [PASS in 0.13s]\n22:36:21  1 of 7 PASS accepted_values_orders_status__PENDING_PAYMENT__PAID__SHIPPED__DELIVERED [PASS in 0.13s]\n22:36:21  5 of 7 START test not_null_orders_status........................................ [RUN]\n22:36:21  6 of 7 START test not_null_orders_time_created.................................. [RUN]\n22:36:21  7 of 7 START test unique_customers_id........................................... [RUN]\n22:36:21  5 of 7 PASS not_null_orders_status.............................................. [PASS in 0.05s]\n22:36:21  6 of 7 PASS not_null_orders_time_created........................................ [PASS in 0.05s]\n22:36:21  7 of 7 PASS unique_customers_id................................................. [PASS in 0.05s]\n22:36:21  \n22:36:21  Finished running 7 tests in 0.56s.\n22:36:21  \n22:36:21  Completed successfully\n22:36:21  \n22:36:21  Done. PASS=7 WARN=0 ERROR=0 SKIP=0 TOTAL=7\n\n")),(0,a.kt)("p",null,"Ok, so all of the tests are actually passing. Let's move to the next chapter and investigate what's going on."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h3",{parentName:"admonition",id:"is-something-not-clear"},"Is something not clear?"),(0,a.kt)("p",{parentName:"admonition"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide.")))}m.isMDXComponent=!0}}]);