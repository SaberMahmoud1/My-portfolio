import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dbluec from './Dbluec';
import Dyellowc from './Dyellowc';
import dd from '../Images/degital_design.jpg'
import ver from '../Images/digital_verification.jpg'
import si_vision from '../Images/si_vision.jpg'
export default function Dmlfccmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdccmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='dcourses'>
       <Fade delay={200}><Dbluec title={"Digital design internship program’s attendance in Si-Vision"} para={"SI-Vision Internship (2.5 months, Full-Time): Completed a full-time internship at SI-Vision, including on-site sessions in a professional working environment. Accessed SI-Vision Academy and company servers, used SpyGlass for linting. Worked on a DMA project with an AXI4 interface under the supervision of a digital team leader and two senior engineers, culminating in a final presentation discussing the project's implementation and outcomes."} img={si_vision}/></Fade>
       <Fade delay={200}><Dyellowc title={"Digital Verification Diploma"} para={"The Diploma was provided by Eng.Kareem Waseem. It covered essential topics regarding digital verification. The diploma content covered : \n-System Verilog Data types, tasks and functions.\n-System Verilog interfaces and how to use it in the design,testbench and the monitor files.\n-Enhancing the ability of establishing a good verification plan.\n-The way of constructing functional cover groups. \n-The way of constructing constraint blocks. \n-System Verilog Assertions. \n-Basics of OOP.\n-UVM structure and how to create a UVM based verification environment."}img={ver}/></Fade>
       <Fade delay={200}><Dbluec title={"Digital Design Diploma"}para={"The Diploma was provided by Eng.Kareem Waseem. It covered many important topics concerning digital design. I was also awarded as one of the top performers throughout the diploma. The diploma content covered : \n-History of HDLs.\n-Verilog HDL and design flows.\n-Digital Design using Vivado flow.\n-Practising both combinational and sequential circuits design.\n-Practising both combinational and sequential circuits test benches.\n-Finite state machines (mealy and moore).\n-Memories.\n-Field Programmable Gate Array (FPGA).\n-Clock Domain Crossing.\n-Static Timing Analysis."} img={dd}/></Fade>
            </div>:null}
        </div>
    )
}
