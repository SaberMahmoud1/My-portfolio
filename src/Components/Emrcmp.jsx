import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
export default function Wmrcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdrcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show?
            <Fade delay={200}> <div className='dskills'>
           <ul className='dlist'>
           <li>C Programming</li>
           <li>Data Structures (Linked-List, Stack and Queue)</li>
           <li>AVR Micro-controllers Interfacing (Implement all thedrivers)</li>
           <li>C For Embedded Applications (Embedded C)</li>
           <li>eclipse with gcc compiler</li>
           <li>RTOS Basics</li>
           </ul>
            </div></Fade> :null}
        </div>
    )
}
