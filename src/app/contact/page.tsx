import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Saber Mahmoud',
  description: 'Get in touch with Saber Mahmoud, an Embedded & Digital Systems Engineer specializing in FPGA, ASIC, and SystemVerilog-based design and verification.',
};

export default function ContactPage() {
  return <Contact />;
}
