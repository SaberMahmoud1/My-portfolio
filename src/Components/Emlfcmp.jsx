import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dblue from './Dblue';
import scc from '../Images/p.png'
import motortempmonitor from '../Images/motor temp monitor.png'
import doorlocker from '../Images/doorlocker.png'
import distancemeaseurmentsys from '../Images/distancemeaseurmentsys.png'
import stopwatch from '../Images/stopwatch.png'
import smartcar from '../Images/smartcar.jpg'
import Dyellow from './Dyellow';
import Dbluec from './Dbluec';
export default function Emlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Fade delay={200}><Dyellow title={"Smart car"}para={"Developed a comprehensive smart car system integrating multiple subsystems, including lighting control, parking assistance, and air-conditioning management. The project features modular design and implementation in C, leveraging STM32 microcontrollers. It employs sensors for automated parking and temperature-based AC control, alongside efficient power management. The system is fully documented with a structured codebase and detailed design approach."}img={smartcar}linka={"https://github.com/SaberMahmoud1/Smart-car"}/></Fade>
      <Fade delay={200}><Dblue title={"Motor Temperature Monitoring System"} para={"Developed a motor temperature monitoring system using microcontroller-based design, which continuously tracks and monitors the temperature of motors in real-time. The system integrates temperature sensors, displays data on an LCD, and triggers alerts when temperatures exceed predefined thresholds. The project aims to enhance motor reliability by preventing overheating and ensuring optimal performance."} img={motortempmonitor} linka={"https://github.com/SaberMahmoud1/Motor-Temperature-Monitoring-System"}/></Fade>
      <Fade delay={200}><Dyellow title={"Door Locker System"} para={"Developed a secure door locking system using a microcontroller, featuring password-based authentication for access control. The system utilizes a keypad for input, a motorized locking mechanism for security, and an LCD to display status messages. The project demonstrates practical application of embedded systems for security solutions, ensuring efficient and reliable operation."} img={doorlocker} linka={"https://github.com/SaberMahmoud1/Door-Locker"}/></Fade>
      <Fade delay={200}><Dblue title={"Distance Measuring and Displaying System"} para={"Developed a distance measurement system using ultrasonic sensors and a microcontroller to accurately measure distances. The system displays the measured distance on an LCD screen and provides real-time feedback for various applications such as object detection or distance monitoring. The project highlights the integration of sensors with embedded systems for precise measurements and user-friendly interfaces. "} img={distancemeaseurmentsys} linka={"https://github.com/SaberMahmoud1/Distance-Measuring-and-Displaying-System"}/></Fade>
      <Fade delay={200}><Dyellow title={"Stopwatch System"} para={"Designed and implemented a digital stopwatch system using a microcontroller, featuring start, stop, and reset functionalities. The system displays elapsed time on a 7-segment display, providing accurate time measurement for various applications. The project demonstrates the integration of timers and user interface components in embedded systems."} img={stopwatch} linka={"https://github.com/SaberMahmoud1/stop-watch"}/></Fade>   
      <Fade delay={200}><Dblue title={"Vehicle Controller System"} para={" Developed a vehicle control system using a microcontroller to manage various vehicle functions, including speed control, engine start/stop, and indicator monitoring. The system integrates sensors and actuators to enable efficient control and monitoring of the vehicle's operations, enhancing automation and safety. The project demonstrates the application of embedded systems in automotive control."} img={scc} linka={"https://github.com/SaberMahmoud1/vehicle-controller"} /></Fade>
      
      
            </div> :null}
        </div>
    )
}
