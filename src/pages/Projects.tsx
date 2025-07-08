'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [

{
  title: 'FPGA-Based Lane Detection System',
  description:
    'An end-to-end RTL lane detection system for real-time road perception in autonomous vehicles. The system operates on streaming image data row-by-row, processing it through RGB-to-grayscale conversion, noise reduction using an averaging filter, Sobel edge detection, and custom decision logic to identify lane count, boundaries, and current lane position. Designed entirely in Verilog, achieving ultra-low latency. The system was synthesized and deployed on both ZCU102 and PYNQ-Z2 boards. Verification was conducted using QuestaSim, and synthesis used Vivado. The project was mentored by the Electronic Research Institute (ERI).',
  image: '/projects_img/lane1.png', // Replace with actual image path
  github: 'https://github.com/SaberMahmoud1/lane_detection_system',

  tags: [
    'Verilog',
    'Lane Detection',
    'FPGA',
    'RTL Design',
    'Computer Vision',
    'Edge Detection',
    'QuestaSim',
    'Vivado',
    'PYNQ-Z2',
    'ZCU102',
    'ERI'
  ]
}
,
{
  title: 'AXI4 DMA Controller',
  description:
    'A custom-designed Direct Memory Access (DMA) controller that enables high-performance data transfers between memory regions or peripherals and memory over the AXI4 interface, without CPU intervention. The controller supports burst transactions, configurable transfer sizes, and includes a priority arbitration mechanism for optimized throughput. The design was implemented in SystemVerilog and verified using direct testbench. It followed a complete ASIC design flow, with synthesis performed to ensure resource efficiency, timing closure, and silicon readiness. The project was mentored by Si-Vision, providing professional guidance on RTL design and verification.',
  image: '/projects_img/DMA.png', // Replace with your actual image path
  github: 'https://github.com/SaberMahmoud1/DMA-with-AXI4-interface',
  tags: [
    'SystemVerilog',
    'DMA',
    'AXI4',
    'ASIC Flow',
    'RTL Design',
    'Verification',
    'Si-Vision'
  ]
}
,
	{
  title: 'Ultrasonic Zynq-7000 Based System',
  description: 'A shared repository between Software, Embedded, and FPGA teams to handle sending and receiving ultrasonic waves from the appropriate transducers. The project is based on the Xilinx Zynq-7000 board.\n\nMy Contributions:\n- Participated in developing the top-level UVM verification environment and stimulus generation.\n- Verified the system decoder using SystemVerilog and SystemVerilog Assertions (SVA).\n- Designed the receiving block within the control unit along with the dedicated storage RAM.\n- Used QuestaSim for simulation and waveform analysis to ensure correct timing and functionality.',
  image: '/projects_img/soundwaves.jpg',
  github: 'https://github.com/SaberMahmoud1/Ultrasonic-zynq7000-based-system',
  tags: ["Zynq-7000", "SystemVerilog", "SVA", "UVM", "QuestaSim", "FPGA", "RTL Design", "Embedded Systems"]
}
,
{
  title: 'Temperature Control Unit',
  description: 'A hardware-implemented FSM-based temperature control unit designed to manage air conditioning systems using real-time environmental data. Developed for the P3T1035xUK/P3T2030xUK temperature sensor ICs, the system interfaces via I²C and performs intelligent thermal regulation. The design is written in SystemVerilog and verified using QuestaSim with direct testbench methodology. Functional correctness was validated with SystemVerilog Assertions (SVA). The complete RTL was synthesized targeting ZCU102 and PYNQ z2. Mentored by Electronic Research Institute (ERI).',
  image: '/projects_img/TCU.jpeg',
  github: 'https://github.com/SaberMahmoud1/P3T1035xUK-P3T2030xUK_temperature_control_unit',
  tags: ["SystemVerilog", "FSM", "I2C", "SVA", "FPGA", "QuestaSim"]
},
{
  title: '32-Point FFT Accelerator',
  description: 'Designed and implemented a 32-point Fast Fourier Transform (FFT) hardware accelerator based on the Cooley-Tukey Radix-2 Decimation-In-Time (DIT) algorithm. The system is constructed using modular 2-point butterfly units in Verilog HDL and optimized for low-latency, high-throughput operation via pipelined architecture.\n\nThe design was simulated using QuestaSim and synthesized using Vivado on FPGA platforms.',
  image: '/projects_img/FFT.webp',
  github: 'https://github.com/SaberMahmoud1/FFT',
  tags: ["FFT", "Verilog", "Radix-2 DIT", "QuestaSim", "Vivado", "FPGA", "Pipelined Architecture", "Digital Signal Processing"]
}
,
{
  title: 'UVM-Based SPI Slave Verification',
  description: 'Developed a complete Universal Verification Methodology (UVM) environment to verify an SPI Slave module interfacing with a single-port RAM. The testbench includes stimulus generation, monitors, checkers, and scoreboard components for comprehensive functional coverage and bug detection. The project demonstrates best practices in SystemVerilog and UVM, focusing on protocol accuracy, data integrity, and edge-case robustness.',
  image: '/projects_img/uvm_spi_RAM.png',
  github: 'https://github.com/SaberMahmoud1/a-complete-UVM-environment-for-verifying-SPI-slave-connected-with-single-port-Ram',
  tags: ["UVM", "SystemVerilog", "SPI", "RAM", "QuestaSim", "Functional Verification", "Testbench Development"]
}
,
{
  title: 'Smart Car System',
  description: 'An embedded systems project that integrates multiple automotive functionalities, including lighting control, parking assistance, and environmental monitoring. The system was implemented using Embedded C on a microcontroller platform with modular, layered architecture. It features temperature-based fan control, ultrasonic-based obstacle detection, LDR-based light sensing, and Bluetooth communication. The system processes sensor data in real-time to enable adaptive responses and autonomous behavior, demonstrating high modularity and efficient real-time performance for smart mobility applications.',
  image: '/projects_img/smartcar.jpg',
  github: 'https://github.com/SaberMahmoud1/Smart-car',
  tags: ["Embedded C", "Microcontroller", "Real-Time Systems", "Smart Mobility", "Sensor Integration"]
},
{
  title: 'Dual-MCU Thermal Control System',
  description: 'A complete embedded system using two AVR microcontrollers to monitor and react to temperature thresholds in real time. MCU1 reads from a temperature sensor and EEPROM to determine operational states, adjusts fan speed accordingly, and communicates status to MCU2 via UART. MCU2 controls machine behavior, LED indicators, a servo, and a buzzer based on received temperature data. The system includes emergency and abnormal handling, EEPROM fault logging, and watchdog-based recovery. Simulated in Proteus and implemented in Embedded C.',
  image: '/projects_img/motor temp monitor.png',
  github: 'https://github.com/SaberMahmoud1/Motor-Temperature-Monitoring-System',
  tags: ["AVR", "Embedded C", "UART", "EEPROM", "Proteus", "Real-Time Systems", "Watchdog Timer", "Servo", "Buzzer"]
}



];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									{/* <a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a> */}
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;