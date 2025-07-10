export const siteConfig = {
	name: 'Saber Mahmoud',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		// {
		// 	title: 'Blog',
		// 	href: '/blog',
		// },
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/SaberMahmoud1',
		linkedin: 'https://linkedin.com/in/saber-mahmoud-2450b0246',
		twitter: 'https://twitter.com/llEng_Saberll',
		facebook: 'https://facebook.com/saberm2024',
		instagram: 'https://instagram.com/il__sa_sa__li',
		whatsapp: 'https://wa.me/201119899016',
		email: 'saber.mahmoud702@eng-st.cu.edu.eg',
		phone: 'tel:+201119899016',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
  title: 'Digital Design Intern',
  company: 'SI-Vision',
  location: 'Cairo, Egypt',
  startDate: 'July 2024',
  endDate: 'Oct 2024',
  description: [
    'Completed a full-time on-site internship under the guidance of senior engineers at SI-Vision.',
    'Designed and verified a DMA controller with AXI4 interface using SystemVerilog.',
    'Performed RTL linting using SpyGlass and presented the final design implementation and results.'
  ],
  technologies: ['SystemVerilog', 'AXI4', 'SpyGlass', 'RTL Design']
}
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
  title: 'FPGA-Based Lane Detection System',
  description:
    'An end-to-end RTL lane detection system for real-time road perception in autonomous vehicles. The system operates on streaming image data row-by-row, processing it through RGB-to-grayscale conversion, noise reduction using an averaging filter, Sobel edge detection, and custom decision logic to identify lane count, boundaries, and current lane position. Designed entirely in Verilog, achieving ultra-low latency. The system was synthesized and deployed on both ZCU102 and PYNQ-Z2 boards. Verification was conducted using QuestaSim, and synthesis used Vivado. The project was mentored by the Electronic Research Institute (ERI).',
  image: '/projects_img/lane1.png',
  repo: 'https://github.com/SaberMahmoud1/lane_detection_system',

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
},
{
  title: 'AXI4 DMA Controller',
  description:
    'A custom-designed Direct Memory Access (DMA) controller that enables high-performance data transfers between memory regions or peripherals and memory over the AXI4 interface, without CPU intervention. The controller supports burst transactions, configurable transfer sizes, and includes a priority arbitration mechanism for optimized throughput. The design was implemented in SystemVerilog and verified using direct testbench. It followed a complete ASIC design flow, with synthesis performed to ensure resource efficiency, timing closure, and silicon readiness. The project was mentored by Si-Vision, providing professional guidance on RTL design and verification.',
  image: '/projects_img/DMA.png', // Replace with your actual image path
  repo: 'https://github.com/SaberMahmoud1/DMA-with-AXI4-interface',
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
  repo: 'https://github.com/SaberMahmoud1/Ultrasonic-zynq7000-based-system',
  tags: ["Zynq-7000", "SystemVerilog", "SVA", "UVM", "QuestaSim", "FPGA", "RTL Design", "Embedded Systems"]
}
,
{
  title: 'Temperature Control Unit',
  description: 'A hardware-implemented FSM-based temperature control unit designed to manage air conditioning systems using real-time environmental data. Developed for the P3T1035xUK/P3T2030xUK temperature sensor ICs, the system interfaces via I²C and performs intelligent thermal regulation. The design is written in SystemVerilog and verified using QuestaSim with direct testbench methodology. Functional correctness was validated with SystemVerilog Assertions (SVA). The complete RTL was synthesized targeting ZCU102 and PYNQ z2. Mentored by Electronic Research Institute (ERI).',
  image: '/projects_img/TCU.jpeg',
  repo: 'https://github.com/SaberMahmoud1/P3T1035xUK-P3T2030xUK_temperature_control_unit',
  tags: ["SystemVerilog", "FSM", "I2C", "SVA", "FPGA", "QuestaSim"]
},
{
  title: '32-Point FFT Accelerator',
  description: 'Designed and implemented a 32-point Fast Fourier Transform (FFT) hardware accelerator based on the Cooley-Tukey Radix-2 Decimation-In-Time (DIT) algorithm. The system is constructed using modular 2-point butterfly units in Verilog HDL and optimized for low-latency, high-throughput operation via pipelined architecture.\n\nThe design was simulated using QuestaSim and synthesized using Vivado on FPGA platforms.',
  image: '/projects_img/FFT.webp',
  repo: 'https://github.com/SaberMahmoud1/FFT',
  tags: ["FFT", "Verilog", "Radix-2 DIT", "QuestaSim", "Vivado", "FPGA", "Pipelined Architecture", "Digital Signal Processing"]
}
,
{
  title: 'UVM-Based SPI Slave Verification',
  description: 'Developed a complete Universal Verification Methodology (UVM) environment to verify an SPI Slave module interfacing with a single-port RAM. The testbench includes stimulus generation, monitors, checkers, and scoreboard components for comprehensive functional coverage and bug detection. The project demonstrates best practices in SystemVerilog and UVM, focusing on protocol accuracy, data integrity, and edge-case robustness.',
  image: '/projects_img/uvm_spi_RAM.png',
  repo: 'https://github.com/SaberMahmoud1/a-complete-UVM-environment-for-verifying-SPI-slave-connected-with-single-port-Ram',
  tags: ["UVM", "SystemVerilog", "SPI", "RAM", "QuestaSim", "Functional Verification", "Testbench Development"]
}
,
{
  title: 'Smart Car System',
  description: 'An embedded systems project that integrates multiple automotive functionalities, including lighting control, parking assistance, and environmental monitoring. The system was implemented using Embedded C on a microcontroller platform with modular, layered architecture. It features temperature-based fan control, ultrasonic-based obstacle detection, LDR-based light sensing, and Bluetooth communication. The system processes sensor data in real-time to enable adaptive responses and autonomous behavior, demonstrating high modularity and efficient real-time performance for smart mobility applications.',
  image: '/projects_img/smartcar.jpg',
  repo: 'https://github.com/SaberMahmoud1/Smart-car',
  tags: ["Embedded C", "Microcontroller", "Real-Time Systems", "Smart Mobility", "Sensor Integration"]
},
{
  title: 'Dual-MCU Thermal Control System',
  description: 'A complete embedded system using two AVR microcontrollers to monitor and react to temperature thresholds in real time. MCU1 reads from a temperature sensor and EEPROM to determine operational states, adjusts fan speed accordingly, and communicates status to MCU2 via UART. MCU2 controls machine behavior, LED indicators, a servo, and a buzzer based on received temperature data. The system includes emergency and abnormal handling, EEPROM fault logging, and watchdog-based recovery. Simulated in Proteus and implemented in Embedded C.',
  image: '/projects_img/motor temp monitor.png',
  repo: 'https://github.com/SaberMahmoud1/Motor-Temperature-Monitoring-System',
  tags: ["AVR", "Embedded C", "UART", "EEPROM", "Proteus", "Real-Time Systems", "Watchdog Timer", "Servo", "Buzzer"]
}
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
  {
    degree: 'B.Sc. of EECE',
    field: 'Electronics and Electrical Communications Engineering (EECE Department)',
    institution: 'Cairo University, Faculty of Engineering',
    location: 'Giza, Egypt',
    startDate: 'Sep 2020',
    endDate: 'July 2025',
    gpa: 'GPA: 3.3',
    achievements: [
  'Graduation project mentored by ERI and funded by ITIDA',
  'Hands-on experience through practical labs and real-world capstone projects',
  'Developed strong analytical and problem-solving skills rooted in engineering fundamentals',
  'Collaborated in multidisciplinary teams',
  'Built a solid foundation in RTL design, FPGA prototyping, and hardware/software co-design'
	]
  },
  {
  degree: 'Diploma',
  field: 'Digital Design using Verilog HDL and FPGA Flow',
  institution: 'Private Training (Supervised by Eng. Kareem Waseem)',
  location: 'Cairo, Egypt',
  startDate: 'Jul 2023',
  endDate: 'Aug 2023',
  gpa: 'Completed',
  achievements: [
    'Mastered digital design flow including logic modeling with Verilog HDL',
    'Learned static linting checks, STA, and Clock Domain Crossing (CDC) challenges',
    'Integrated IP cores via Vivado IP Catalog and automated workflows using TCL scripting',
    'Gained experience in FPGA prototyping, addressing partitioning, timing, and physical constraints'
  ]
}
,
  {
  degree: 'Diploma',
  field: 'Digital Verification',
  institution: 'Private Training (Supervised by Eng. Kareem Waseem)',
  location: 'Cairo, Egypt',
  startDate: 'Sep 2023',
  endDate: 'Oct 2023',
  gpa: 'Completed',
  achievements: [
    'Mastered fundamentals of SystemVerilog and SystemVerilog Assertions (SVA)',
    'Practiced coverage collection and interpretation, and wrote constraint blocks',
    'Simulated and debugged designs using Questa Sim',
    'Gained introduction to UVM methodology, OOP concepts, and formal verification'
  ]
}
,
  {
    degree: 'Diploma',
    field: 'Embedded Systems',
    institution: 'Private Training (Supervised by Eng. Mohamed Tarek)',
    location: 'Cairo, Egypt',
    startDate: 'Sep 2023',
    endDate: 'Dec 2023',
    gpa: 'Completed',
    achievements: [
      'C programming and core data structures',
      'AVR driver development from scratch',
      'RTOS, Embedded C, and HW lab experience',
    ],
  }
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	url?: string;
	pdf?: string;
	id?: string;
};

export const certificates: Certificate[] = [
	{
  		title: 'Digital Design Internship Certification',
  		issuer: 'SI-Vision',
  		date: 'Oct 2024',
  		url: '#',
  		pdf: '/files/experience_pdf/SI-Vision-Certificate.pdf',

	},

	{
		title: 'Digital Design Diploma',
		issuer: 'kareem Wassem',
		date: 'Aug 2023',
		url: '#',
		pdf: '/files/education_pdf/Digital-Design-Diploma.pdf'
	},
	{
		title: 'Digital verification Diploma',
		issuer: 'kareem Wassem',
		date: 'Oct 2023',
		url: '#',
		pdf: '/files/education_pdf/Digital-Verification-Diploma.pdf'
	},
	{
		title: 'Embedded systems Diploma',
		issuer: 'Mohamed Tarek',
		date: 'Oct 2022',
		url: '#',
		pdf: '/files/education_pdf/Embedded-Systems-Diploma.pdf',
	}
	,
	{
		title: 'Mathematics Research Forum',
		issuer: 'TCCD',
		date: 'Dec 2022',
		url: '#',
		pdf: '/files/education_pdf/vinamatics.pdf',
	}
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language' | 'tool';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'verilog', level: 10, category: 'technical' },
	{ name: 'system verilog', level: 10, category: 'technical' },
	{ name: 'VHDL', level: 7, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'embedded C', level: 9, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 8, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 9, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'German', level: 5, category: 'language' },

	// tools
	{ name: 'Vivado', level: 9, category: 'tool' },
	{ name: 'Questa Sim', level: 10, category: 'tool' },
	{ name: 'SpyGlass', level: 8, category: 'tool' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

// export const blogPosts: BlogPost[] = [
// 	{
// 		title: 'Advances in Renewable Energy Technologies',
// 		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
// 		date: 'Mar 15, 2024',
// 		author: 'Your Name',
// 		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
// 		slug: 'advances-in-renewable-energy',
// 	},
// 	{
// 		title: 'The Future of Robotics in Manufacturing',
// 		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
// 		date: 'Feb 22, 2024',
// 		author: 'Your Name',
// 		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
// 		slug: 'future-of-robotics-manufacturing',
// 	},
// 	{
// 		title: 'Sustainable Building Materials in Modern Construction',
// 		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
// 		date: 'Jan 10, 2024',
// 		author: 'Your Name',
// 		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
// 		slug: 'sustainable-building-materials',
// 	},
// ];