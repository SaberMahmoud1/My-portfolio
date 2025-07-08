import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education - Saber Mahmoud',
  description: 'Saber Mahmoud\'s academic background, including a B.Sc. in Electrical Engineering (EECE) from Cairo University, with a strong focus on embedded systems, digital design, and FPGA/ASIC development.',
};

export default function EducationPage() {
  return <Education />;
}
