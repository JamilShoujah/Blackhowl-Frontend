'use client';

import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Youtube,
} from 'lucide-react';
import { type TransitionEvent, useEffect, useMemo, useRef, useState } from 'react';
import BlackHowlLogoWithText from '../icons/BlackHowlIconWithText';
import { EMAILS, SOCIAL_LINKS } from '@/lib/consts';

const PROJECT_GAP = 20;
const MOBILE_PROJECT_CARD_MAX_WIDTH = 360;
const MOBILE_PROJECT_CARD_RATIO = 0.88;

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <path
      d="M14.25 3v11.1a4.65 4.65 0 1 1-4.65-4.65c.42 0 .83.06 1.2.17v2.95a1.78 1.78 0 1 0 1.05 1.63V3h2.4Z"
      fill="currentColor"
    />
    <path
      d="M14.25 3c.47 2.9 2.04 4.57 4.75 5.05v2.86c-1.88-.13-3.48-.84-4.75-2.02V3Z"
      fill="currentColor"
    />
  </svg>
);

const XSocialIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <path
      d="m4.75 4 5.82 8.16L4.4 20h3.15l4.47-5.69L16.05 20h3.55l-6.04-8.48L19.25 4H16.1l-3.98 5.26L8.38 4H4.75Zm4.5 2.1 6.25 8.77.01.01 2.12 2.98h-1.45L9.9 9.05 7.8 6.1h1.45Z"
      fill="currentColor"
    />
  </svg>
);

const services = [
  {
    title: 'Event Production & Management',
    description: 'It all begins with an idea. We can help you build it and bring it to life.',
    iconImage: '/media/blackhowl/event-management-icon.png',
  },
  {
    title: 'Tour Management',
    description: 'Any artist needs the right team on the road to spread the show consistently across territories.',
    iconImage: '/media/blackhowl/tour-management-icon.png',
  },
  {
    title: 'Talent Management',
    description: 'Your talent needs to be nurtured and protected. We can step in for that.',
    iconImage: '/media/blackhowl/talent-management-icon.png',
  },
  {
    title: 'Live Photo & Video',
    description: 'Unique experiences are meant to be immortalized. Our lens can capture those memories for you.',
    iconImage: '/media/blackhowl/live-photo-video-icon.png',
  },
];

const projects = [
  {
    title: '2015: Sound of Music - Event Production & Management',
    image: '/media/blackhowl/img-2082.jpg',
    shape: 'wide',
  },
  {
    title: '2024-2025: Esports World Cup - Talent & Player Management',
    image: '/media/blackhowl/ewc-photo.webp',
    shape: 'wide',
  },
  {
    title: '2024-2025: Marvels of Saudi (Sydney and Tokyo) - Event Production & Management',
    image: '/media/blackhowl/marvels-of-saudi.webp',
    shape: 'wide',
  },
  {
    title: '2015: Alt-J - Live Photography',
    image: '/media/blackhowl/img-4797.jpg',
    shape: 'tall',
  },
  {
    title: '2013: Guns N Roses in Beirut - Event Production & Management',
    image: '/media/blackhowl/guns-n-roses.jpg',
    shape: 'square',
  },
  {
    title: '2022: Zaz - Tour Management',
    image: '/media/blackhowl/img-4794.jpg',
    shape: 'tall',
  },
  {
    title: "2014 - 2015: Mashrou' Leila - Tour Management",
    image: '/media/blackhowl/leila-6.jpg',
    shape: 'wide',
  },
  {
    title: '2019: Two Door Cinema Club - Live Photography',
    image: '/media/blackhowl/two-door-cinema-club.jpg',
    shape: 'tall',
  },
  {
    title: '2014 - 2016: Jim Beam Festival - Event Production & Management',
    image: '/media/blackhowl/jim-beam-stage-crew.jpg',
    shape: 'wide',
  },
  {
    title: '2013 - 2017: Byblos International Festival - Production & Management',
    image: '/media/blackhowl/photo-3-2.jpg',
    shape: 'wide',
  },
  {
    title: '2013: Al Ain Aerobatic Show - Event Production & Management',
    image: '/media/blackhowl/al-ain-aerobatic-show.jpg',
    shape: 'wide',
  },
  {
    title: '2015: Beauty & The Beast - Event Production & Management',
    image: '/media/blackhowl/beauty-and-the-beast.png',
    shape: 'wide',
  },
];

const quotes = [
  {
    quote: 'Black Howl conscientiously fulfilled their tasks and I can completely rely on them.',
    credit: 'Buzz Productions',
  },
  {
    quote: 'Their team moves with calm focus, sharp timing, and the rare instinct every live show needs.',
    credit: 'Tour Partner',
  },
  {
    quote: 'Black Howl understands the pace of production and the pressure behind unforgettable nights.',
    credit: 'Event Producer',
  },
  {
    quote: 'Every detail felt considered, from artist arrivals to the final cue of the night.',
    credit: 'Festival Client',
  },
  {
    quote: 'They kept the show moving cleanly, even when the schedule got tight and the room got louder.',
    credit: 'Production Partner',
  },
  {
    quote: 'Black Howl brought structure, calm communication, and a serious eye for the audience experience.',
    credit: 'Brand Activation Client',
  },
  {
    quote: 'The team made complex logistics feel simple and gave everyone confidence backstage.',
    credit: 'Artist Management Team',
  },
  {
    quote: 'Reliable, thoughtful, and fast on their feet when live production demanded quick decisions.',
    credit: 'Venue Partner',
  },
  {
    quote: 'Their photo and video coverage captured the atmosphere without missing the human moments.',
    credit: 'Live Media Client',
  },
  {
    quote: 'From planning to load-out, Black Howl handled the details that make an event feel effortless.',
    credit: 'Corporate Event Client',
  },
];

const contactHref = EMAILS.CC ? `mailto:${EMAILS.TO}?cc=${EMAILS.CC}` : `mailto:${EMAILS.TO}`;

const socialItems = [
  {
    label: 'Instagram',
    href: SOCIAL_LINKS.INSTAGRAM,
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    href: SOCIAL_LINKS.FACEBOOK,
    Icon: Facebook,
  },
  {
    label: 'TikTok',
    href: SOCIAL_LINKS.TIKTOK,
    Icon: TikTokIcon,
  },
  {
    label: 'YouTube',
    href: SOCIAL_LINKS.YOUTUBE,
    Icon: Youtube,
  },
  {
    label: 'X',
    href: SOCIAL_LINKS.X,
    Icon: XSocialIcon,
  },
  {
    label: 'Email Black Howl',
    href: contactHref,
    Icon: Mail,
  },
];

const Home = () => {
  const projectStageRef = useRef<HTMLDivElement>(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectTransitionEnabled, setProjectTransitionEnabled] = useState(true);
  const [projectStepWidth, setProjectStepWidth] = useState(0);
  const [projectCardWidth, setProjectCardWidth] = useState(0);
  const [projectGap, setProjectGap] = useState(PROJECT_GAP);
  const [projectTrackOffset, setProjectTrackOffset] = useState(0);
  const [visibleProjectCount, setVisibleProjectCount] = useState(1);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const carouselProjects = useMemo(() => [...projects, ...projects.slice(0, 3)], []);
  const normalizedProjectIndex = projectIndex % projects.length;
  const projectCardBasis =
    projectCardWidth > 0
      ? `${projectCardWidth}px`
      : visibleProjectCount === 1
        ? `min(${MOBILE_PROJECT_CARD_RATIO * 100}vw, ${MOBILE_PROJECT_CARD_MAX_WIDTH}px)`
        : `calc((100% - ${PROJECT_GAP * (visibleProjectCount - 1)}px) / ${visibleProjectCount})`;

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setProjectTransitionEnabled(true);
      setProjectIndex((current) => current + 1);
    }, 5200);

    return () => window.clearInterval(rotation);
  }, []);

  useEffect(() => {
    const updateProjectMetrics = () => {
      const stageWidth = projectStageRef.current?.clientWidth ?? 0;
      const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const cardWidth =
        visibleCount === 1
          ? Math.min(stageWidth * MOBILE_PROJECT_CARD_RATIO, MOBILE_PROJECT_CARD_MAX_WIDTH)
          : (stageWidth - PROJECT_GAP * (visibleCount - 1)) / visibleCount;
      const centerOffset = visibleCount === 1 ? Math.max((stageWidth - cardWidth) / 2, 0) : 0;
      const gap = visibleCount === 1 ? Math.max(PROJECT_GAP, centerOffset + 2) : PROJECT_GAP;

      setVisibleProjectCount(visibleCount);
      setProjectCardWidth(cardWidth);
      setProjectGap(gap);
      setProjectStepWidth(cardWidth + gap);
      setProjectTrackOffset(centerOffset);
    };

    updateProjectMetrics();

    const resizeObserver = new ResizeObserver(updateProjectMetrics);
    const projectStage = projectStageRef.current;

    if (projectStage) {
      resizeObserver.observe(projectStage);
    }

    window.addEventListener('resize', updateProjectMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateProjectMetrics);
    };
  }, []);

  const shiftProjects = (direction: number) => {
    if (direction < 0 && projectIndex === 0) {
      setProjectTransitionEnabled(false);
      setProjectIndex(projects.length);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setProjectTransitionEnabled(true);
          setProjectIndex(projects.length - 1);
        });
      });

      return;
    }

    setProjectTransitionEnabled(true);
    setProjectIndex(projectIndex + direction);
  };

  const handleProjectTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (projectIndex < projects.length) {
      return;
    }

    setProjectTransitionEnabled(false);
    setProjectIndex(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setProjectTransitionEnabled(true));
    });
  };

  const shiftQuotes = (direction: number) => {
    setQuoteIndex((current) => (current + direction + quotes.length) % quotes.length);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="hero-section relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src="/media/blackhowl/hero-backstage.jpg"
          alt="Black Howl backstage crew member watching a live show"
          fill
          className="object-cover object-[56%_center] sm:object-center"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <header className="absolute left-0 top-0 z-20 px-6 py-7 sm:px-10 sm:py-8 lg:px-16">
          <div className="h-20 w-20 drop-shadow-[0_8px_22px_rgba(0,0,0,0.7)] sm:h-32 sm:w-32">
            <BlackHowlLogoWithText color="#ffffff" />
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-center px-6 pb-32 pt-36 sm:px-10 sm:pb-40 sm:pt-44 lg:px-16">
          <div className="hero-copy max-w-[780px] border-l border-white/45 pl-5 sm:pl-8 lg:ml-[6vw]">
            <p className="display-font text-xs leading-none text-white/72 sm:text-sm">
              Live events / creative production / touring
            </p>
            <h1 className="display-font hero-copy-text mt-5 max-w-[780px] text-white">
              <span className="hero-welcome-line block whitespace-nowrap">Welcome to</span>
              <span className="hero-brand-line block whitespace-nowrap" style={{ fontSize: 'clamp(35px, 11vw, 7.4rem)' }}>
                Black Howl
              </span>
            </h1>
            <p className="mt-6 max-w-[620px] text-[clamp(1.05rem,1.45vw,1.45rem)] font-semibold leading-[1.35] text-white/88">
              The creative team behind unforgettable live events and the moments that make them memorable.
            </p>
            <a
              href={contactHref}
              className="display-font group mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm text-black transition hover:bg-white/82"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="display-font hero-marquee pointer-events-none absolute bottom-[5vh] left-0 z-[5] flex text-[clamp(4.5rem,8.2vw,10rem)] leading-none">
          <span>WE WORK IN PACKS&nbsp;</span>
          <span>WE WORK IN PACKS&nbsp;</span>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1900px]">
          <h2 className="display-font section-title text-[clamp(2.7rem,4vw,5.1rem)] leading-[1.28]">
            Our
            <br />
            Services
          </h2>

          <div className="mt-10 grid gap-4 sm:mt-20 sm:gap-5 lg:grid-cols-4">
            {services.map((service) => (
                <article key={service.title} className="flex items-start gap-5 bg-white px-5 py-6 text-black sm:block sm:min-h-[330px] sm:px-9 sm:py-9">
                  <Image
                    src={service.iconImage}
                    alt=""
                    aria-hidden="true"
                    width={96}
                    height={96}
                    className="h-14 w-14 shrink-0 object-contain sm:h-24 sm:w-24"
                  />
                  <div className="min-w-0">
                    <h3 className="display-font max-w-[420px] text-[clamp(1.35rem,1.7vw,2.25rem)] leading-[1.02] sm:mt-10">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[440px] text-base font-semibold normal-case leading-snug tracking-normal sm:mt-6 sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </article>
            ))}
          </div>

        </div>
      </section>

      <section id="projects" className="overflow-hidden bg-[#f6f6f6] px-0 py-14 text-black sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1900px]">
          <div className="flex flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:px-0">
            <h2 className="display-font section-title text-[clamp(2.45rem,4vw,5.1rem)] leading-[1.02] sm:leading-[1.05]">
              Some
              <br />
              Projects
            </h2>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <p className="display-font text-sm text-black/55 sm:hidden">
                {String(normalizedProjectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous projects"
                  onClick={() => shiftProjects(-1)}
                  className="project-arrow"
                >
                  <ArrowLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  aria-label="Next projects"
                  onClick={() => shiftProjects(1)}
                  className="project-arrow"
                >
                  <ArrowRight className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>

          <div className="projects-viewport mt-8 sm:mt-14">
            <div
              ref={projectStageRef}
              className="project-carousel-stage"
              style={{ isolation: 'isolate', overflow: 'hidden' }}
            >
              <div
                className="project-track"
                onTransitionEnd={handleProjectTransitionEnd}
                style={{
                  display: 'flex',
                  gap: `${projectGap}px`,
                  transform: `translate3d(${projectTrackOffset - projectIndex * projectStepWidth}px, 0, 0)`,
                  transition: projectTransitionEnabled ? 'transform 1800ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                  willChange: 'transform',
                }}
              >
                {carouselProjects.map((project, index) => (
                  <article
                    key={`${project.title}-${index}`}
                    className="project-card bg-white p-2.5 text-center sm:p-3 sm:text-left"
                    style={{ flex: `0 0 ${projectCardBasis}` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 88vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="display-font mt-3 min-h-[2.6em] text-[clamp(1rem,4.5vw,1.18rem)] leading-[1.03] sm:mt-4 sm:min-h-[3.4em] sm:text-[clamp(1.1rem,1.1vw,1.45rem)] sm:leading-[1.04]">
                      {project.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            <p className="display-font mt-8 hidden text-sm text-black/55 sm:block">
              {String(normalizedProjectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto flex min-h-[420px] max-w-[1250px] flex-col items-center justify-center sm:min-h-[520px]">
          <h2 className="display-font text-[clamp(2.35rem,3.5vw,4.4rem)] leading-none">What our clients say</h2>

          <blockquote className="display-font mt-12 max-w-[960px] text-[clamp(1.35rem,2vw,2.45rem)] leading-[1.04] sm:mt-36">
            &ldquo;{quotes[quoteIndex].quote}&rdquo;
          </blockquote>
          <p className="mt-7 text-lg font-semibold normal-case tracking-normal">{quotes[quoteIndex].credit}</p>

          <div className="mt-12 flex justify-center gap-4 sm:mt-40 sm:gap-5">
            <button type="button" aria-label="Previous testimonial" onClick={() => shiftQuotes(-1)} className="quote-arrow">
              <ArrowLeft className="h-8 w-8" />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => shiftQuotes(1)} className="quote-arrow">
              <ArrowRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      <footer className="cube-footer relative overflow-hidden bg-[#171717] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
        <div className="relative z-10 mx-auto flex max-w-[1900px] flex-col items-center gap-10 text-center sm:gap-16 md:items-end">
          <div className="md:text-right">
            <h2 className="display-font text-[clamp(2.6rem,4vw,5.1rem)] leading-none">Get in touch</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-end">
              {socialItems
                .filter(({ href }) => href)
                .map(({ label, href, Icon }) => (
                  <a key={label} aria-label={label} href={href} className="social-button">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
            </div>
          </div>

          <p className="mx-auto text-base font-semibold normal-case tracking-normal text-white/90">
            Website made by our freelancers © 2026
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
