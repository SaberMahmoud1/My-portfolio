import React from 'react'
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Dblue from './Dblue';
import spi from '../Images/spi.png'
import spiv from '../Images/uvm_spi_RAM.png'
import dsp from '../Images/sca.png'
import FIFO from '../Images/FIFO.png'
import UART from '../Images/UART.png'
import sonar from '../Images/soundwaves.jpg'
import DMA from '../Images/DMA.png'
import Dyellow from './Dyellow';
export default function Dmlfcmp({imgd}) {
    const [show,setShow]=useState(false);  

    return (
        <div className='mdcmp'>
            <img src={imgd}alt='Loading⏳'/>
            <button onClick={()=>{setShow(!show)}} >{show? "Hide" :"Show"} </button>
            {show? <div className='projects'>
      <Fade delay={200}><Dblue title={"Design and Verification for AXI-4 DMA"} para={"I have Design a Direct Memory Access (DMA) controller which is a specialized hardware component that allows for efficient data transfers between different memory locations or between a peripheral device and memory without the involvement of the central processing unit (CPU). The DMA controller autonomously handles the data transfer process, freeing up the CPU to perform other tasks, thereby improving system performance and resource utilization. the design includes  priority mechanism and much more."} img={DMA} linka={"https://github.com/SaberMahmoud1/DMA-with-AXI4-interface"} /> </Fade>
      <Fade delay={200}><Dyellow title={"Design and Verification for Ultrasonic Sytsem"} para={"I have contributed in an ultrasonic-zynq based-system with strongly participating in the top module UVM environment developing along with the stimulus generation. Verification of the system decoder using SV and SVA. Design of the receiving block in the control unit besides the storage RAM for the same block. The waveforms were generated using QuestaSim."} img={sonar} linka={"https://github.com/SaberMahmoud1/Ultrasonic-zynq7000-based-system"} /> </Fade>
      <Fade delay={200}><Dblue title={"SPI Slave UVM environment"}para={"I have build a complete UVM environment for verifying SPI_Slave with a single port RAM. I have also designed the golden model for checking the output with it. The waveforms and the UVM packages were used through Questa Sim tool."}img={spiv}linka={"https://github.com/SaberMahmoud1/a-complete-UVM-environment-for-verifying-SPI-slave-connected-with-single-port-Ram"}/></Fade>
      <Fade delay={200}><Dyellow title={"UART protocol design"} para={"Designed and implemented a UART module using Verilog/SystemVerilog, including transmitter/receiver modules, baud rate generation, and error detection, verified through simulation."}img={UART}linka={"https://github.com/SaberMahmoud1/UART"}/></Fade>
      <Fade delay={200}><Dblue title={"SPI_slave with a single port RAM Design"} para={"SPI communication protocol is one of the most famous protocols. In this project a spi slave was implemented using verilog accompanied with a single port RAM. The master is able to send the data whether address or word to be stored in the RAM block through the implemented slave. It is also capable of receiving the serial data after being transformed from parallel after 12 clock cycles from asserting the SS_n signal."} img={spi} linka={"https://github.com/SaberMahmoud1/SPI-slave-connected-with-single-port-RAM-"}/></Fade>
      <Fade delay={200}><Dyellow title={"Digital Signal Processing Unit Design"} para={"A DSP based on xilinix FPGA DSP (DSP48A1) with some extra combinational logic. The project was implemented using verilog. The design schematic was produced through vivado tool. The block is capable of performing many operations synchronously with the clock."} img={dsp} linka={"https://github.com/m7md5303/Digital-Signal-Processing-Unit"}/></Fade>
      <Fade delay={200}><Dblue title={"FIFO Verification using System Verilog."} para={"Verified a synchronous FIFO design using SystemVerilog, employing directed and random test cases, functional coverage, and assertions to ensure design correctness."} img={FIFO} linka={"https://github.com/SaberMahmoud1/Verify-FIFO-"}/></Fade>   
      
      
            </div> :null}
        </div>
    )
}
