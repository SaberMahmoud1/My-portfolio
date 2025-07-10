import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Saber Mahmoud',
	description: 'Degital design and Verification engineer.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
  <html lang="en" suppressHydrationWarning>
    <head>
      <link
        rel="shortcut icon"
        href="/profile/ChatGPT.png"
        type="image/png"
      />
    </head>
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

}