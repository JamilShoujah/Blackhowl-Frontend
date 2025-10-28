'use client';

import Image from 'next/image';
import BlackHowlLogoWithText from './icons/BlackHowlIconWithText';
import { Button } from './components/buttons';
import { EMAILS } from '@/lib/consts';
import { Mail } from 'lucide-react';

const Home = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover object-[center_65%]"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-16 relative z-10">
        {/* Logo */}
        <div
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <BlackHowlLogoWithText color="#ffffff" size={500} />
        </div>

        {/* Coming Soon Message */}
        <div
          className="text-center space-y-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">Coming Soon!</h1>
          <p className="text-xl md:text-2xl text-white/90">We're revamping, stay tuned!</p>
        </div>

        {/* Contact Button (optional) */}
        <div
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Button
            onClick={() => {
              window.location.href = `mailto:${EMAILS.TO}?cc=${EMAILS.CC}`;
            }}
            size="lg"
            className="h-16 px-10 text-xl font-medium hover-scale bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 backdrop-blur-md group"
          >
            <Mail className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
            Hit Us Up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
