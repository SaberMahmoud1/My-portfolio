import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
export default function Emrcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdrcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show?
            <Fade delay={200}> <div className='dskills'>
           <ul className='dlist'>
           <li>-JavaScript Fundamentals</li>
           <li>-SQLite</li>
           <li>-Node.js</li>
           <li>-Express.js</li>
           <li>-HTML Basics</li>
           <li>-CSS Basics</li>
           <li>-React.js</li>
           <li>-JavaScript (ES6)</li>
           <li>-Deployment and Hosting</li>
           </ul>
            </div></Fade> :null}
        </div>
    )
}
