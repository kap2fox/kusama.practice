(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{nWae:function(t,o,e){"use strict";e.r(o);e("07d7"),e("PKPk"),e("3bBZ");var s={components:{MetaInfo:function(){return e.e(1).then(e.bind(null,"9qaU"))}}},n=e("KHd+"),a=Object(n.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("LayoutCourse",{attrs:{courseId:"2",lessonId:"3"}},[e("MetaInfo",{attrs:{pageTitle:"Lesson #2, Remote controlled and programmed motion",pageDescription:"In the second lesson you will learn how to use Spot Command services and walk with Spot.",pageImage:"/og/boston-dynamics-course/2-remote-controlled-and-programmed-motion"}}),e("section",{staticClass:"text__hyphened"},[e("section",{staticClass:"container__narrow"},[e("h2",[t._v(t._s(t.$ts("What's this about")))]),e("p",[t._v(t._s(t.$ts("In the second lesson you will learn how to use Spot Command services and walk with Spot.")))])]),e("section",{staticClass:"container__narrow"},[e("h2",[t._v(t._s(t.$ts("The challenge")))]),e("p",[t._v(t._s(t.$ts("You have a list of points with their local coordinates in the"))+" "),e("code",[t._v("/home/student/lessons")]),t._v(" "+t._s(t.$ts("directory.")))]),e("p",[t._v(t._s(t.$ts("The list of moves:")))]),e("List",[e("li",[t._v(t._s(t.$ts("To turn around himself")))]),e("li",[t._v(t._s(t.$ts("To nod")))]),e("li",[t._v(t._s(t.$ts("To change the stance of robot's legs")))]),e("li",[t._v(t._s(t.$ts("To go sideways to the next point")))]),e("li",[t._v(t._s(t.$ts("To lie down on pose to change battery (this command must be performed the last because it cuts the power to the motors.)")))])]),e("br"),e("p",[t._v(t._s(t.$ts("Create and execute a Python script that implements behavior described.")))]),e("p",[t._v(t._s(t.$ts("You can find Spot local coordinates with (before you need to create"))+" "),e("code",[t._v("state_client")]),t._v(", "+t._s(t.$ts("you can find information about it in"))+" "),e("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/python/understanding_spot_programming"}},[t._v(t._s(t.$ts("Understanding Spot Programming")))]),t._v("):")],1),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("from bosdyn.client.frame_helpers import get_vision_tform_body\nget_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot")])],1),e("section",{staticClass:"container__reg"},[e("h2",[t._v(t._s(t.$ts("Instructions")))]),e("List",{attrs:{type:"numbers"}},[e("li",[e("p",[t._v(t._s(t.$ts("You can control Spot with"))+" "),e("code",[t._v("Robot Command Service")]),t._v(". "+t._s(t.$ts("Firstly you need to build a command to supply it to the command service. Spot SDK has a"))+" "),e("code",[t._v("RobotCommandBuilder")]),t._v(" "+t._s(t.$ts("class for it.")))]),e("p",[t._v(t._s(t.$ts("Full list of methods and its descriptions you can find"))+" "),e("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593"}},[t._v(t._s(t.$ts("here")))]),t._v(". "+t._s(t.$ts("In this lesson you may need to use:")))],1),e("p",[t._v("\n              - "+t._s(t.$ts("Stand Command"))),e("br"),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())")])],1),e("p",[t._v("\n              - "+t._s(t.$ts("Go to point"))),e("br"),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)")]),t._v("\n              "+t._s(t.$ts("Check usage"))+" "),e("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py"}},[t._v(t._s(t.$ts("here")))]),t._v("."),e("br")],1),e("p",[t._v(t._s(t.$ts("Attention! The example considers robot movement relative to the current position. In your case you must specify movements relative to the point where robot was turned on. That means you can set"))+" "),e("code",[t._v("goal_x")]),t._v(" "+t._s(t.$ts("and"))+" "),e("code",[t._v("goal_y")]),t._v(" "+t._s(t.$ts("values from the task.")))]),e("p",[t._v("\n              - "+t._s(t.$ts("Velocity Command "))),e("br"),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("def synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME)")])],1),e("p",[t._v("\n              - "+t._s(t.$ts("Stance Command"))+" "),e("br"),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)")]),t._v("\n              "+t._s(t.$ts("The example of use is"))+" "),e("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py"}},[t._v(t._s(t.$ts("here")))]),t._v(".\n            ")],1),e("p",[t._v("\n              - "+t._s(t.$ts("Pose to change battery"))+"\n              "),e("code",[t._v("def battery_change_pose_command(dir_hint=1)")]),e("br"),t._v("\n              "+t._s(t.$ts("Example of building and running velocity command:"))),e("br"),e("prism",{staticClass:"big-code",attrs:{language:"python"}},[t._v("from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder\nimport time\n\ncommand_client=robot.ensure_client(RobotCommandClient.default_service_name)\ncmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)\ncommand_client.robot_command(cmd, end_time_secs=time.time() + 2)")])],1)]),e("li",[t._v(t._s(t.$ts("Connect to Spot from a terminal or using your development environment remote execution function.")))]),e("li",[e("p",[t._v(t._s(t.$ts("Develop and demonstrate your solution to the challenge.")))]),e("p",[t._v(t._s(t.$ts("We create"))+" "),e("g-link",{attrs:{to:"https://dev.bostondynamics.com/python/examples/estop/readme"}},[t._v(t._s(t.$ts("E-Stop endpoint")))]),t._v(" "+t._s(t.$ts("for you, so you should not create it."))+" "+t._s(t.$ts("For Spot authentication use username and password from "))),e("code",[t._v("/home/student/credentials")]),t._v(" "+t._s(t.$ts("file"))+". "+t._s(t.$ts("Spot address is "))),e("code",[t._v("192.168.50.3")]),t._v(".")],1)])])],1),e("section",{staticClass:"container__narrow"},[e("h3",[t._v(t._s(t.$ts("Are you ready to practice?")))]),e("p",[t._v(t._s(t.$ts("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")))]),e("h5",[e("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[t._v(t._s(t.$ts("Rent a spot")))])],1)])])],1)}),[],!1,null,null,null);o.default=a.exports}}]);