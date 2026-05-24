'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';
import { Button } from '../components/buttons';
import BlackHowlLogoWithText from '../icons/BlackHowlIconWithText';
import { EMAILS } from '@/lib/consts';

const Home = () => {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover object-[center_60%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="flex w-full max-w-xl flex-col items-center justify-center space-y-4 px-4 sm:space-y-12">
        <div
          className="mx-auto flex w-40 justify-center opacity-0 animate-fade-in sm:w-96"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <BlackHowlLogoWithText color="#ffffff" />
        </div>

        <div
          className="text-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl">
            Coming Soon!
          </h1>
          <p className="mx-auto mt-2 max-w-md text-base text-white/90 sm:mt-4 sm:text-lg md:text-xl">
            We&apos;re revamping, stay tuned!
          </p>
        </div>

        <div
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Button
            onClick={() => {
              window.location.href = `mailto:${EMAILS.TO}?cc=${EMAILS.CC}`;
            }}
            size="lg"
            className="group h-14 border-2 border-white/40 bg-white/20 px-8 text-base font-medium text-white backdrop-blur-md hover:bg-white/30 sm:h-16 sm:px-10 sm:text-xl"
          >
            <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
            Hit Us Up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
