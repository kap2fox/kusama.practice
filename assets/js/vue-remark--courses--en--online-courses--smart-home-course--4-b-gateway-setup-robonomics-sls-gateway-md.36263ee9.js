(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"DO+d":function(e,t,o){"use strict";o.r(t);var s=o("7uw+"),n=o("UQSp"),a=o("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===r(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},l=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",v={excerpt:null,title:"Lesson #4b, Gateway Setup: Robonomics SLS Gateway",description:"home assistant course",lessonNumber:5,courseID:3,metaOptions:["Online Courses","Sovereign Smart Home with Robonomics and Home Assistant"]};var h=function(e){e.options[d]&&(e.options[d]=v),a.a.util.defineReactive(e.options,d,v),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},p=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"whats-this-about"}},[o("a",{attrs:{href:"#whats-this-about","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("What's this about")]),o("p",[e._v("This is a scenario setup for connecting devices using the Robonomics SLS Gateway. Robonomics took design inspiration from the  gateway developed by the "),o("a",{attrs:{href:"https://github.com/slsys/Gateway",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Smart Logic System")]),e._v(" project and modified part of the circuitry. You can order a gateway from Robonomics or build your own using our "),o("a",{attrs:{href:"https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("blueprints")]),e._v(".")]),o("p",[e._v("You will install the required software for the gateway, configure it and connect it to Home Assistant.")]),o("robo-academy-note",{attrs:{type:"note",title:"Attention"}},[e._v("\n  SmartRF Flash Programmer, a program for updating firmware, requires Windows operating system.\n")])],1),o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"instructions"}},[o("a",{attrs:{href:"#instructions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Instructions")]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[e._v("Installing Zigbee Microcontroller Firmware")]),o("List",[o("li",[o("p",[e._v("First you need to flash the CC2652P microcontroller of the gateway. Set to "),o("code",[e._v("ON")]),e._v(" switches "),o("code",[e._v("2")]),e._v(", "),o("code",[e._v("4")]),e._v(" and "),o("code",[e._v("7")]),e._v(" at the bottom part of SLS Gateway, others must be "),o("code",[e._v("OFF")]),e._v(".")]),o("LessonImages",{attrs:{src:"smart-house-course/lesson-4-b-1.png",alt:"controllers"}})],1),o("li",[o("p",[e._v("Connect the gateway to your computer with a USB-A<>USB-C cable.")]),o("robo-academy-note",{attrs:{type:"warning",title:"WARNING"}},[e._v("\n  Please use only USB-A<>USB-C types of cables, because at the moment the gateway does not support USB-C<>USB-C type.\n")])],1),o("li",[o("p",[e._v("The CC2652 firmware requires SmartRF Flash Programmer v2 from Texas Instrument. Download it from "),o("a",{attrs:{href:"https://www.ti.com/tool/download/FLASH-PROGRAMMER-2",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the official site")]),e._v(" and then install it.")])]),o("li",[o("p",[e._v("Download firmware for CC2652P microcontroller from "),o("a",{attrs:{href:"https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("GitHub repository")]),e._v(".")])]),o("li",[o("p",[e._v("Run the program. In the "),o("code",[e._v("Connected device")]),e._v(" window select the CC2652P microcontroller, set the path to the firmware, set the flags to "),o("code",[e._v("Erase, Program, Verify")]),e._v(" as in the picture and press "),o("code",[e._v("Start")]),e._v(".")]),o("LessonImages",{attrs:{src:"smart-house-course/lesson-4-b-2.png",alt:"tutorial",imageClasses:"mb"}}),o("p",[e._v("After a successful flashing, you will see a "),o("code",[e._v("Success!")]),e._v(" message. Now you can unplug the USB cable.")])],1)])],1),o("li",[o("p",[e._v("Installing Microcontroller Firmware")]),o("List",[o("li",[o("p",[e._v("Now you need to set up the gateway for software installation. We advise you to update the firmware by connecting the gateway directly to your Raspberry Pi and entering all of the following commands on that device. ")])]),o("li",[o("p",[e._v("Set "),o("code",[e._v("ON")]),e._v(" switches "),o("code",[e._v("1")]),e._v(" and "),o("code",[e._v("3")]),e._v(" at the bottom part of SLS gateway, others must be "),o("code",[e._v("OFF")]),e._v(". Then connect the gateway to your Raspberry Pi the USB type-C port.")]),o("LessonImages",{attrs:{src:"smart-house-course/lesson-4-b-3.gif",alt:"tutorial",imageClasses:"mb"}})],1),o("li",[o("p",[e._v("Connect to the Raspberry Pi via SSH.")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\nssh ubuntu@192.168.xxx.xxx\n")])],1),o("li",[o("p",[e._v("Clone the repository with firmware:")]),o("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code",noLines:""}},[e._v("\ngit clone https://github.com/airalab/robonomics-hass-utils.git\n")])],1),o("li",[o("p",[e._v("To flash the SLS gateway you need to run "),o("code",[e._v("Clear")]),e._v(" and "),o("code",[e._v("Flash_16mb")]),e._v(" scripts:")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\ncd robonomics-hass-utils/esp_firmware/linux\n")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\nsudo chmod +x Clear.sh\n")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\nsudo chmod +x Flash_16mb.sh\n")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\n./Clear.sh\n")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\n./Flash_16mb.sh\n")])],1),o("li",{staticClass:"no-bullet"},[o("p",[e._v("- "),o("strong",[e._v("Troubleshooting")])]),o("p",[e._v("If you are experiencing problems updating the gateway firmware, you need to take additional steps:")]),o("List",[o("li",[o("p",[e._v("Make sure you have the pySerial module installed:")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\npip install pyserial\n")])],1),o("li",[o("p",[e._v("Give your user access rights to the USB port:")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\nsudo usermod -a -G dialout $USER\n")])],1),o("li",[o("p",[e._v("In some cases, it is necessary to change the bandwidth setting in the script to update the firmware. Open the "),o("code",[e._v("Flash_16mb.sh")]),e._v(" script with the nano editor and change the baud parameter from "),o("code",[e._v("921600")]),e._v(" to a smaller value (for example, "),o("code",[e._v("115200")]),e._v(").")])])])],1),o("li",{staticClass:"no-bullet"},[o("p",[e._v("- "),o("strong",[e._v("Extra")])]),o("p",[e._v("We also provide options for updating the firmware using other operating systems (macOS and Windows). You can find corresponding scripts in a folder, which name depends on your OS.")])])])],1),o("li",[o("p",[e._v("Setting up the Gateway")]),o("List",[o("li",[o("p",[e._v("Set the switches on the back of the gateway to their new  position. Switches "),o("code",[e._v("5")]),e._v(" (RX Zigbee to ESP) and "),o("code",[e._v("6")]),e._v(" (TX Zigbee to ESP) must be in the "),o("code",[e._v("ON")]),e._v(" position, the others must be "),o("code",[e._v("OFF")]),e._v(".")]),o("LessonImages",{attrs:{src:"smart-house-course/lesson-4-b-4.gif",alt:"tutorial",imageClasses:"mb"}})],1),o("li",[o("p",[e._v("Connect the type-C power cable. The indicator light in the center should turn green.")])]),o("li",[o("p",[e._v("On the first startup, the gateway will start sharing Wi-Fi with the SSID "),o("code",[e._v("zgw****")]),e._v(". Connect to this network. Keep in mind that the signal may be quite weak, so it is better to keep the SLS gateway closer to your computer.")]),o("p",[e._v("If the connection is successful, the web interface will open (or you can find it on 192.168.1.1 address).")])]),o("li",[o("p",[e._v("Go to the Wi-Fi page and insert your Wi-Fi credentials by entering the user / pass and press "),o("code",[e._v("Save")]),e._v(" button. After that press the "),o("code",[e._v("Reboot")]),e._v(" button. The gateway will restart and connect to your WI-Fi network.")]),o("LessonVideo",{attrs:{controls:"",loop:"",src:"https://crustipfs.live/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH"}})],1),o("li",[o("p",[e._v("Find the local IP of the SLS gateway to access the web interface. For that you can use the "),o("a",{attrs:{href:"https://www.fing.com/products",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Fing")]),e._v(" app or "),o("code",[e._v("arp -a")]),e._v(" in your terminal or Nmap: ")]),o("LessonCodeWrapper",{attrs:{language:"bash",noLines:""}},[e._v("\nsudo nmap -sP 192.168.xxx.0/24\n")]),o("p",[e._v("where "),o("code",{staticClass:"bold"},[e._v("xxx")]),e._v(" is your IP address in the local network. The gateway name should look like this: "),o("code",[e._v("zgw****")]),e._v(". Open the web interface of the gateway by pasting the gateway IP into a browser.")])],1),o("li",[o("p",[e._v("Go to "),o("code",[e._v("Setting")]),e._v(" -> "),o("code",[e._v("Hardware")]),e._v(" and make sure that the settings look like on the image. Correct the settings if necessary and click "),o("code",[e._v("Save")]),e._v(" button:")]),o("LessonVideo",{attrs:{controls:"",loop:"",src:"https://crustipfs.live/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn"}}),o("p",[e._v("The table with required values:")]),o("table",[o("thead",[o("tr",[o("th",[e._v("Field")]),o("th",[o("strong",[e._v("Value")])])])]),o("tbody",[o("tr",[o("td",[e._v("Zigbee module")]),o("td",[e._v("TI")])]),o("tr",[o("td",[e._v("Zigbee UART RX")]),o("td",[e._v("22")])]),o("tr",[o("td",[e._v("Zigbee UART TX")]),o("td",[e._v("23")])]),o("tr",[o("td",[e._v("Zigbee RST Pin")]),o("td",[e._v("18")])]),o("tr",[o("td",[e._v("Zigbee BSL Pin")]),o("td",[e._v("19")])]),o("tr",[o("td",[e._v("Button Mode")]),o("td",[e._v("33 (pullUP - true)")])]),o("tr",[o("td",[e._v("Number addressable leds")]),o("td",[e._v("0")])]),o("tr",[o("td",[e._v("Led Red (or addr)")]),o("td",[e._v("21")])]),o("tr",[o("td",[e._v("Led Green")]),o("td",[e._v("5")])]),o("tr",[o("td",[e._v("Led Blue")]),o("td",[e._v("27")])]),o("tr",[o("td",[e._v("I2C SDA")]),o("td",[e._v("255")])]),o("tr",[o("td",[e._v("I2C SCL")]),o("td",[e._v("255")])])])])],1),o("li",[o("p",[e._v("Then reboot the gateway. Choose "),o("code",[e._v("Actions")]),e._v(" -> "),o("code",[e._v("Reboot system")]),e._v(" at the right top corner. Make sure that the gateway works properly with the CC2652P microcontroller in the Zigbee info window. DeviceState should be "),o("code",[e._v("OK")]),e._v(".")])]),o("li",[o("p",[e._v("Reboot the gateway. Choose "),o("code",[e._v("Actions")]),e._v(" -> "),o("code",[e._v("Reboot")]),e._v(" system at the right top corner.")])]),o("li",[o("p",[e._v("Configure automatically adding devices to Home Assistant. Go to "),o("code",[e._v("Zigbee")]),e._v(" -> "),o("code",[e._v("Config")]),e._v(" then choose "),o("code",[e._v("Home Assistant MQTT Discovery")]),e._v(" and "),o("code",[e._v("Clear States")]),e._v(". Save changes and again reboot SLS gateway.")]),o("LessonVideo",{attrs:{controls:"",loop:"",src:"https://crustipfs.live/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ"}})],1),o("li",{staticClass:"no-bullet"},[o("p",[e._v("- "),o("strong",[e._v("Extra")]),e._v(":")]),o("p",[e._v("If you already have an active SLS gateway in your home, and you are now configuring another one, then they will conflict with each other. To solve this problem you need to change the channel on the new device.")]),o("p",[e._v("To do this, go to  "),o("code",[e._v("Zigbee")]),e._v(" -> "),o("code",[e._v("Config")]),e._v(" and change the channel to another one (e.g. channel 15).")])]),o("li",[o("p",[e._v("Connect your devices by going to "),o("code",[e._v("Zigbee")]),e._v(" -> "),o("code",[e._v("Join")]),e._v(". Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times. Press the "),o("code",[e._v("Enable Join")]),e._v(" button to start searching Zigbee devices. You will see active sensors.")])])])],1),o("li",[o("p",[e._v("Connecting SLS Gateway to Home Assistant")]),o("List",[o("li",[o("p",[e._v("You need to configure MQTT on SLS Gateway. Come back to your SLS Gateway web interface and go to "),o("code",[e._v("Settings")]),e._v(" -> "),o("code",[e._v("Link")]),e._v(" -> "),o("code",[e._v("MQTT Setup")]),e._v(".")]),o("LessonVideo",{attrs:{controls:"",loop:"",src:"https://crustipfs.live/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y"}})],1),o("li",[o("p",[e._v("Add your broker address (address of the Raspberry Pi with Home Assistant in local network, you can find it with "),o("a",{attrs:{href:"https://www.fing.com/products",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Fing")]),e._v(" app or using "),o("code",[e._v("ip -a")]),e._v(" command on your RPi), port (default is 1883) your broker username and password (which you have created earlier) and the topic name (you can choose any). Also, the local Raspberry Pi IP address must be static.")]),o("p",[e._v("Don't forget to click "),o("code",[e._v("Enable")]),e._v(" and  "),o("code",[e._v("Retain states")]),e._v(".")])]),o("li",[o("p",[e._v("Save changes. Now devices will be automatically shown in Home Assistant.")])])])],1),o("li",[o("p",[e._v("Connect Devices ")]),o("List",[o("li",[o("p",[e._v("Connect your devices by going to "),o("code",[e._v("Zigbee")]),e._v(" -> "),o("code",[e._v("Join")]),e._v(". Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times.")]),o("LessonImages",{attrs:{src:"smart-house-course/lesson-4-a-4.gif",alt:"tutorial",imageClasses:"mb"}}),o("LessonVideo",{attrs:{controls:"",loop:"",src:"https://crustipfs.live/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA"}})],1),o("li",[o("p",[e._v("Press the Enable Join button to start searching Zigbee devices. You will see active sensors.")])])])],1)])],1)])}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof h&&h(p);t.default=p.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);