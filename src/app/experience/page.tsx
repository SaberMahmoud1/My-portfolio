import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Saber Mahmoud',
  description: 'Saber Mahmoud\'s engineering experience including internships at Si-Vision and the Electronic Research Institute (ERI), along with hands-on projects in embedded systems, digital design, SystemVerilog, and UVM verification.',
};

export default function ExperiencePage() {
  return <Experience />;
}
