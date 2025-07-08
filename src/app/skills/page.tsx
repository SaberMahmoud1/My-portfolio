import Skills from '@/pages/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Saber Mahmoud',
  description: 'Explore Saber Mahmoud\'s technical skill set including SystemVerilog, UVM, FPGA design with Vivado, embedded systems development in C, RTL verification with QuestaSim, and digital design workflows for ASIC and FPGA projects.',
};

export default function SkillsPage() {
  return <Skills />;
}
