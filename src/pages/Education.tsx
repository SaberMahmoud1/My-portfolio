'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const Education = () => {
	const educationData = [
		{
			school: "Cairo University, Faculty of Engineering",
			location: "Giza, Egypt",
			duration: "September 2020 - July 2025",
			degree: "B.Sc. in Electrical Engineering (EECE Department)",
			grade: "GPA: 3.3",
			image: "/education/CUFE_img.jpeg", // Replace with actual image if available
			resultUrl: "/files/education_pdf/Digital-Verification-Diploma.pdf", // Replace with actual path
			subjects: [
							"Embedded Systems",
							"Digital Design",
							"Control Systems",
							"Signal Processing",
							"Communication Systems",
							"Computer Architecture",
							"Programming",
						],
	description: "As an Electrical Engineering student in the Electronics and Communications (EECE) Department at Cairo University, I have developed a strong background in embedded systems, digital engineering, and control. My academic journey includes practical labs, challenging projects, and hands-on experiences that enhanced my problem-solving and technical skills. My interests lie in designing efficient hardware systems and exploring innovative embedded solutions."
},{
	school: "Digital Verification Diploma",
	location: "Cairo, Egypt",
	duration: "6 Weeks",
	degree:"Digital Verification Engineer",
	grade: "Completed",
	image: "/education/digital-verification.jpg",
	resultUrl: "/files/education_pdf/Digital-Verification-Diploma.pdf",
	subjects: [
		"SystemVerilog",
		"SystemVerilog Assertions (SVA)",
		"Functional Coverage",
		"Constraints",
		"Questa Sim",
		"OOP Basics",
		"UVM",
		"Formal Verification"
	],
	description: "Completed a 6-week digital verification diploma under the supervision of Eng. Kareem Waseem. Covered SystemVerilog fundamentals, SystemVerilog Assertions (SVA), interpreting coverage reports, writing constraint blocks, simulating designs using Questa Sim, and object-oriented programming basics. Gained an introduction to UVM and formal verification methodologies."
},{
	school: "Digital Design Diploma",
	location: "Cairo, Egypt",
	duration: "6 Weeks",
	degree:"Digital Designer",
	grade: "Completed",
	image: "/education/digital-design.jpg",
	resultUrl: "/files/education_pdf/Digital-Design-Diploma.pdf",
	subjects: [
		"Verilog HDL",
		"Digital Design Flow",
		"Testbench Construction",
		"ModelSim Simulation",
		"FPGA Flow (Vivado)",
		"Static Timing Analysis (STA)",
		"Metastability",
		"CDC Techniques"
	],
	description: "Completed a 6-week digital design diploma under the supervision of Eng. Kareem Waseem. Covered essential Verilog HDL concepts, digital design flow, testbench construction, and design simulation using ModelSim. Learned FPGA implementation using Vivado, along with an introduction to static timing analysis (STA), metastability, and basic clock domain crossing (CDC) handling techniques."
},{
	school: "Full Embedded Systems Diploma",
	location: "Cairo, Egypt",
	duration: "14 Weeks",
	degree:"Embedded Systems Engineer",
	grade: "Completed",
	image: "/education/embedded-systems1.jpg",
	resultUrl: "/files/education_pdf/Embedded-Systems-Diploma.pdf",
	subjects: [
		"Embedded Systems Basics",
		"C Programming",
		"Data Structures (Linked List, Stack, Queue)",
		"AVR Microcontroller Interfacing",
		"Embedded C",
		"RTOS",
		"Software Engineering",
		"Embedded Tools",
		"HW Labs"
	],
	description: "Completed a 14-week full embedded systems diploma under the supervision of Eng. Mohamed Tarek. Gained solid grounding in embedded systems concepts, C programming, and core data structures. Practiced interfacing with AVR microcontrollers by implementing all drivers from scratch. Covered embedded C for applications, real-time operating systems (RTOS), and software engineering fundamentals. Worked hands-on with embedded tools and hardware labs."
}

	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="grid md:grid-cols-[300px,1fr] gap-6">
								{/* Left Column - Image */}
								<div className="relative h-64 md:h-full">
									<Image
										src={edu.image}
										alt={edu.school}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 300px"
										priority
										quality={90}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
											<div className="flex items-center gap-2 text-gray-300 mb-1">
												<MapPin className="w-4 h-4" />
												<span>{edu.location}</span>
											</div>
											<div className="flex items-center gap-2 text-gray-300">
												<Award className="w-4 h-4" />
												<span>{edu.grade}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<h4 className="text-lg font-semibold">{edu.degree}</h4>
									</div>

									<div className="flex items-start gap-2 text-gray-300 mb-6">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div>

									{edu.subjects && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.subjects.map((course) => (
													<span
														key={course}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{course}
													</span>
												))}
											</div>
										</div>
									)}

									{edu.subjects && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.subjects.map((subject) => (
													<span
														key={subject}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{subject}
													</span>
												))}
											</div>
										</div>
									)}

									<motion.a
										href={edu.resultUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
										whileHover={{ scale: 1.02 }}
									>
										View Result
										<ExternalLink className="w-4 h-4" />
									</motion.a>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;