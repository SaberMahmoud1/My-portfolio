import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import MrEasy from '../Images/MrEasy.jpg'
import proto from '../Images/proto.png'
import Wyellow from './Wyellow'
import Dbluec from  './Dbluec'
export default function Wmlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Fade delay={200}><Wyellow title={"MR.Easy"}para={"Developed a telegram bot designed to help the student manage his schedule and laps and exams also deadlines and much more. Purpose: The bot is designed to simplify daily planning and task management by providing a centralized tool for:Keeping track of schedules, labs, deadlines, and tasks. Uploading and retrieving personal notes or images. Managing a to-do list efficiently. Automating updates to important information like schedules or deadlines. Providing a clean and user-friendly interface for data storage and access."}img={MrEasy}linka={"https://t.me/EECE25_bot"} linkb={"https://github.com/SaberMahmoud1/Mr.Easy"}/></Fade>
      <Fade delay={200}><Dbluec title={"My protofolio"}para={"Designed and developed this personal portfolio website to showcase my projects, skills, and achievements. The website highlights my expertise in various fields and serves as a dynamic platform for professional engagement and networking."}img={proto} /></Fade>
            </div> :null}
        </div>
    )
}
