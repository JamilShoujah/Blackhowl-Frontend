import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Black Howl | Production & Media Crew',
  description:
    'Creative freelancers for event production, tour management, talent support, and live photo and video.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
