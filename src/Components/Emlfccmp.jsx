import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import Embedded from '../Images/Embedded.png'
export default function Emlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>

                <Fade delay={200}> <Dyellowc title={"Embedded Systems based on AVR Diploma"}para={"Full Embedded Systems Diploma under supervision of Eng/MohamedTarek covering:Basic Concepts of Embedded Systems, C Programming, Data Structures (Linked-List, Stack and Queue), AVR Micro-controllers Interfacing (Implement all thedrivers), C For Embedded Applications (Embedded C), Real Time OS(RTOS),Software Engineering, Embedded Tools, HW Labs."} img={Embedded}/></Fade>
                
            </div>:null}
        </div>
    )
}
