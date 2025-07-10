'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I am a dedicated engineering student specializing in digital design and embedded systems. Driven by a passion for innovation and real-world problem-solving, I’ve developed strong technical skills through hands-on projects, academic research, and industry-level training. My work spans FPGA development, system verification, and hardware-software integration, all fueled by a commitment to continuous learning and impactful engineering solutions.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Throughout my academic career, I've been involved in various projects that have
								helped me develop practical skills and theoretical knowledge. I believe in
								continuous learning and staying updated with the latest technological advancements.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/files/cv_pdf/Saber_Mahmoud.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/profile/saber1.jpg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									A passionate engineering graduate from Cairo University, Faculty of Engineering (Class of 2025), with a strong foundation in digital systems, embedded design, and hardware verification. I specialize in solving real-world problems through innovative and practical engineering solutions, with hands-on experience in RTL design, FPGA prototyping, and system-level integration.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									My background includes graduation project, internships, and projects involving AXI-based DMA design, UVM verification, and embedded system development, combining both academic rigor and industrial exposure to deliver reliable, high-performance hardware solutions.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in various engineering tools and technologies, with a strong
									foundation in problem-solving and analytical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}