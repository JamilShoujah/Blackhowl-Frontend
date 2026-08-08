import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
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
    <html lang="en">
      <body className={`${archivo.variable} ${archivoBlack.variable} antialiased`}>{children}</body>
    </html>
  );
}
