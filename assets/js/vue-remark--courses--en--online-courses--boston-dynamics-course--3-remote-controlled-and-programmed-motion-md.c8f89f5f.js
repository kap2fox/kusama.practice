(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{UQSp:function(o,t,e){"use strict";t.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},gAJE:function(o,t,e){"use strict";e.r(t);var n=e("7uw+"),a=e("UQSp"),s=e("Kw5r");function r(o){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(o){var t=o.options.components=o.options.components||{},e=o.options.computed=o.options.computed||{};Object.keys(i).forEach((function(o){"object"===r(i[o])&&"function"==typeof i[o].render||"function"==typeof i[o]&&"function"==typeof i[o].options.render?t[o]=i[o]:e[o]=function(){return i[o]}}))},d=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,title:"Lesson #3, Remote controlled and programmed motion",description:"In the second lesson you will learn how to use Spot Command services and walk with Spot.",lessonNumber:3,courseID:2,metaOptions:["Online Courses","Boston Dynamics Spot Software Developing"]};var m=function(o){o.options[p]&&(o.options[p]=l),s.a.util.defineReactive(o.options,p,l),o.options.computed=d.computed({$frontmatter:function(){return o.options[p]}},o.options.computed)},_=Object(n.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("VueRemarkRoot",[e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"whats-this-about"}},[e("a",{attrs:{href:"#whats-this-about","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),o._v("What's this about")]),e("p",[o._v("In the second lesson you will learn how to use Spot Command services and walk with Spot.")])]),e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"the-challenge"}},[e("a",{attrs:{href:"#the-challenge","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),o._v("The challenge")]),e("p",[o._v("You have a list of points with their local coordinates in the "),e("code",[o._v("/home/student/lessons")]),o._v(" directory.")]),e("p",[o._v("The list of moves:")]),e("List",[e("li",[o._v("To turn around himself")]),e("li",[o._v("To nod")]),e("li",[o._v("To change the stance of robot's legs")]),e("li",[o._v("To go sideways to the next point")]),e("li",[o._v("To lie down on pose to change battery (this command must be performed the last because it cuts the power to the motors).")])]),e("br"),e("p",[o._v("Create and execute a Python script that implements behavior described. You can find Spot local coordinates with (before you need to create "),e("code",[o._v("state_client")]),o._v(", you can find information about it in "),e("a",{attrs:{href:"https://dev.bostondynamics.com/docs/python/understanding_spot_programming",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("Understanding Spot Programming")]),o._v("):")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\nfrom bosdyn.client.frame_helpers import get_vision_tform_body\nget_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot\n")])],1),e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"instructions"}},[e("a",{attrs:{href:"#instructions","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),o._v("Instructions")]),e("List",{attrs:{type:"numbers"}},[e("li",[e("p",[o._v("You can control Spot with "),e("code",[o._v("Robot Command Service")]),o._v(". Firstly you need to build a command to supply it to the command service. Spot SDK has a "),e("code",[o._v("RobotCommandBuilder")]),o._v(" class for it.")]),e("p",[o._v("Full list of methods and its descriptions you can find "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("here")]),o._v(". In this lesson you may need to use:")]),e("p",[o._v("- Stand Command ")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\ndef stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())\n")]),e("p",[o._v("- Go to point ")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\ndef synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)\n")]),e("p",[o._v("Check usage "),e("g-link",{attrs:{to:'"https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py'}},[o._v("here")]),o._v(".")],1),e("p",[o._v("Attention! The example considers robot movement relative to the current position. In your case you must specify movements relative to the point where robot was turned on. That means you can set "),e("code",[o._v("goal_x")]),o._v(" and  "),e("code",[o._v("goal_y")]),o._v(" values from the task.")]),e("p",[o._v("- Velocity Command")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\ndef synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME\n")]),e("p",[o._v("- Stance Command")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\ndef stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)\n")]),e("p",[o._v("The example of use is "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("here")]),o._v(".")]),e("p",[o._v("- Pose to change battery")]),e("p",[e("code",[o._v("def battery_change_pose_command(dir_hint=1)")])]),e("p",[o._v("Example of building and running velocity command:")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\nfrom bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder\nimport time\ncommand_client=robot.ensure_client(RobotCommandClient.default_service_name)\ncmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)\ncommand_client.robot_command(cmd, end_time_secs=time.time() + 2)\n\n")])],1),e("li",[o._v("\nConnect to Spot from a terminal or using your development environment remote execution function.\n")]),e("li",[e("p",[o._v("Develop and demonstrate your solution to the challenge.")]),e("p",[o._v("We create "),e("a",{attrs:{href:"https://dev.bostondynamics.com/python/examples/estop/readme",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("E-Stop endpoint")]),o._v(" for you, so you should not create it. For Spot authentication use username and password from "),e("code",[o._v("/home/student/credentials")]),o._v(" file. Spot address is "),e("code",[o._v("192.168.50.3")]),o._v(".")])])])],1),e("section",{staticClass:"container__reg"},[e("h3",{attrs:{id:"are-you-ready-to-practice"}},[e("a",{attrs:{href:"#are-you-ready-to-practice","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),o._v("Are you ready to practice?")]),e("p",[o._v("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")]),e("h5",{attrs:{id:"lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textrent-a-spot-"}},[e("a",{attrs:{href:"#lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textrent-a-spot-","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),e("LessonButtonLink",{attrs:{src:"https://dapp.spot-sdk.education/#/checkout",text:"Rent a spot"}})],1)])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof m&&m(_);t.default=_.exports}}]);