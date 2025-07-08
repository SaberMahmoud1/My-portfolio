import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Saber Mahmoud',
  description: 'Explore Saber Mahmoud\'s engineering portfolio, including AXI4 DMA Controller, FPGA-based Lane Detection System, UVM testbenches, Smart Car System, and other embedded and digital design projects using SystemVerilog, Vivado, and QuestaSim.',
};

export default function ProjectsPage() {
  return <Projects />;
}
