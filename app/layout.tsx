import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue', // define CSS variable
});

export const metadata: Metadata = {
  title: 'Blackhowl',
  description: 'Concerts & Events by Blackhowl.org',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      {/* Apply antialiased globally, font is handled via CSS variable */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
