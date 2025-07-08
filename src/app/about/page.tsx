import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Saber Mahmoud - Embedded & Digital Systems Engineer',
  description:
    'Explore the background of Saber Mahmoud, an engineering graduate specializing in embedded systems, digital design, SystemVerilog, and FPGA/ASIC development. Learn about his projects, experience, and technical skills.',
};

export default function AboutPage() {
  return <About />;
}
