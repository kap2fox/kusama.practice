(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DzxS:function(t,e,o){"use strict";o.r(e);var s={metaInfo:function(){return this.$seo({title:"Lesson #4, GraphNav service. Mapping and navigating on the map",description:"In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.",image:{url:this.$website+"/og/boston-dynamics-course/4-graphnav-service-mapping-and-navigatiing-on-the-map.png",width:1280,height:650},openGraph:{title:"Lesson #4, GraphNav service. Mapping and navigating on the map",type:"website"},twitter:{title:"Lesson #4, GraphNav service. Mapping and navigating on the map",type:"summary"}})}},a=o("KHd+"),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LayoutCourse",{attrs:{courseId:"2",lessonId:"5"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("h2",[t._v("What's this about")]),o("p",[t._v("In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.")])]),o("section",{staticClass:"container__narrow"},[o("h2",[t._v("The challenge")]),o("p",[t._v("This lesson you can solve the challenge without writing your own Python script.")]),o("List",{attrs:{type:"numbers"}},[o("li",[t._v("Record a map avioding obstacles. You can use WASD remote control tool. Save your mission in "),o("code",[t._v("/home/student/result")]),t._v(".")]),o("li",[t._v("Move Spot through recorded waypoints. You can use GraphNav service command line tool.")])])],1),o("section",{staticClass:"container__reg"},[o("h2",[t._v("Instructions")]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[t._v("The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.")]),o("p",[t._v("Read "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary"}},[t._v("GraphNav Tech Summary")]),t._v(" to learn how it works. "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/autonomy/initialization"}},[t._v("Initialisation")]),t._v(" is also important part, it will be usefull in this lesson.")],1),o("p",[t._v("You can view recorded maps with "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map"}},[t._v("View Map")]),t._v(" example. For that you need to copy the map to your computer:")],1),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"bash"},[t._v("scp -r student@strelka.ygg.merklebot.com:<path_to_the_map_on_spot> <path_to_the_map_to_download>")]),t._v("\n            ")]),o("p",[t._v("Also you need "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages"}},[t._v("install spot packages")]),t._v(".")],1),o("p",[t._v("Study "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line"}},[t._v("recording and playing missions")]),t._v(" examples in order to use it to record the map and playback the mission recorded. Use "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd"}},[t._v("wasd")]),t._v(" example to move robot while recording the map.")],1)]),o("li",[o("p",[t._v("Connect to Spot from a terminal or using your development environment remote execution function.")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"bash"},[t._v("ssh student@strelka.ygg.merklebot.com")]),t._v("\n            ")])]),o("li",[o("p",[t._v("Develop and demonstrate your solution to the challenge.")]),o("p",[t._v("We create "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/python/examples/estop/readme"}},[t._v("E-Stop endpoint")]),t._v(" for you, so you should not create it. For Spot authentication use username and password from "),o("code",[t._v("/home/student/credentials")]),t._v(" file. Spot address is "),o("code",[t._v("192.168.50.3")]),t._v(".")],1),o("p",[t._v("You can run remote control tool from examples directory.")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"bash"},[t._v("cd ~/spot-sdk/python/examples/wasd\npython3 wasd.py --username <SPOT_AUTH_USERNAME> --password <SPOT_AUTH_PASSWORD> <SPOT_ADDRESS>")]),t._v("\n            ")]),o("p",[t._v("GraphNav command line tool is located at ")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"bash"},[t._v("~/spot-sdk/python/examples/graph_nav_command_line")]),t._v("\n            ")])])])],1),o("section",{staticClass:"container__narrow"},[o("h3",[t._v("Are you ready to practice?")]),o("p",[t._v("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")]),o("h5",[o("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[t._v("Rent a spot")])],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);