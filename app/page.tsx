'use client';

import Image from 'next/image';
import BlackHowlLogoWithText from '../icons/BlackHowlIconWithText';
import { Button } from '../components/buttons';
import { EMAILS } from '@/lib/consts';
import { Mail } from 'lucide-react';

const Home = () => {
  return (
    <main className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover object-[center_60%]"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col justify-center h-screen sm:space-y-12 px-4">
        {/* Logo */}
        <div
          className="flex justify-center w-48 sm:w-96 mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <BlackHowlLogoWithText color="#ffffff" />
        </div>

        {/* Coming Soon Message */}
        <div
          className="text-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-snug sm:leading-tight">
            Coming Soon!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-md mx-auto mt-2 sm:mt-4">
            We're revamping, stay tuned!
          </p>
        </div>

        {/* Contact Button */}
        <div
          className="flex justify-center mt-4 sm:mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Button
            onClick={() => {
              window.location.href = `mailto:${EMAILS.TO}?cc=${EMAILS.CC}`;
            }}
            size="lg"
            className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-xl font-medium hover-scale bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 backdrop-blur-md group"
          >
            <Mail className="mr-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
            Hit Us Up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
