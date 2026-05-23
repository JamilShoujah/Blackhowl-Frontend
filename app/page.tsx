import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Mail,
  Map,
  ShieldCheck,
} from 'lucide-react';
import BlackHowlLogoWithText from '../icons/BlackHowlIconWithText';
import { EMAILS } from '@/lib/consts';

const mailtoHref = `mailto:${EMAILS.TO}?cc=${EMAILS.CC}&subject=Black%20Howl%20production%20inquiry`;

const trustTags = ['Festivals', 'Concerts', 'Tours', 'Live Events', 'Production', 'Media'];

const heroSlides = [
  {
    src: '/media/blackhowl/alt-j-stage.jpg',
    title: 'Festival atmosphere',
    detail: 'Scale, light, crowd, and the invisible crew holding the room together.',
    position: 'object-[center_56%]',
  },
  {
    src: '/media/blackhowl/backstage-lights.jpg',
    title: 'Live capture',
    detail: 'Backstage perspectives that catch the seconds before the moment happens.',
    position: 'object-[center_58%]',
  },
  {
    src: '/media/blackhowl/img-2904.jpg',
    title: 'Backstage rhythm',
    detail: 'Audience energy, production timing, and artists moving through the room.',
    position: 'object-[center_54%]',
  },
  {
    src: '/media/blackhowl/photo-3-2.jpg',
    title: 'Crowd memory',
    detail: 'The view from the stage, where the night becomes something people keep.',
    position: 'object-[center_56%]',
  },
  {
    src: '/media/blackhowl/img-4794.jpg',
    title: 'Blue hour',
    detail: 'A cinematic frame for sound, haze, and the architecture of live production.',
    position: 'object-[center_62%]',
  },
  {
    src: '/media/blackhowl/ewc-photo.webp',
    title: 'Major events',
    detail: 'Production support for high-pressure environments, built around precision.',
    position: 'object-[center_50%]',
  },
  {
    src: '/media/blackhowl/crew-backstage-arena.jpg',
    title: 'The crew behind it',
    detail: 'Creative freelancers working where the show actually comes together.',
    position: 'object-[center_50%]',
  },
];

const carouselStyle = {
  '--carousel-duration': `${heroSlides.length * 6}s`,
} as CSSProperties;

const services = [
  {
    title: 'Event Production & Management',
    description: 'It all begins with an idea. We help shape it, plan it, and bring it to life.',
    icon: Clapperboard,
  },
  {
    title: 'Tour Management',
    description:
      'Artists need the right team on the road to carry the show consistently across territories.',
    icon: Map,
  },
  {
    title: 'Talent Management',
    description:
      'Talent needs to be nurtured and protected. We step in with calm, practical support.',
    icon: ShieldCheck,
  },
  {
    title: 'Live Photo & Video',
    description:
      'Unique experiences are meant to be immortalized. Our lens captures the memories that matter.',
    icon: Camera,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--obsidian)] text-white">
      <section className="relative isolate min-h-screen overflow-hidden bg-[var(--obsidian)]">
        <div className="absolute inset-0 -z-30" style={carouselStyle}>
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className="hero-slide absolute inset-0"
              style={{ animationDelay: `${index * 6}s` }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`hero-slide-image object-cover ${slide.position}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,194,168,0.18),rgba(10,10,11,0.12)_38%,rgba(106,90,205,0.2)_100%)] mix-blend-screen" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(111,231,221,0.16),transparent_32%),radial-gradient(circle_at_22%_80%,rgba(0,194,168,0.12),transparent_36%)]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,10,11,0.34)_0%,rgba(10,10,11,0.28)_36%,rgba(10,10,11,0.88)_100%),linear-gradient(90deg,rgba(10,10,11,0.88)_0%,rgba(10,10,11,0.56)_42%,rgba(10,10,11,0.18)_100%)]" />
        <div className="absolute inset-0 -z-10 shadow-[inset_0_0_180px_rgba(0,0,0,0.82)]" />
        <div className="hero-noise absolute inset-0 -z-10 opacity-[0.14]" />
        <div className="hero-particles absolute inset-0 -z-10 opacity-40" />
        <div className="animate-aurora-flow pointer-events-none absolute -right-56 top-0 -z-10 h-72 w-[70rem] -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(0,194,168,0.2),rgba(111,231,221,0.18),rgba(106,90,205,0.24),transparent)] blur-3xl" />
        <div className="animate-fog-drift pointer-events-none absolute -left-56 bottom-0 -z-10 h-72 w-[58rem] rotate-6 bg-[linear-gradient(90deg,transparent,rgba(0,194,168,0.14),rgba(111,231,221,0.1),transparent)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(111,231,221,0.08),transparent)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[92rem] flex-col justify-between px-5 pb-8 pt-7 sm:px-8 sm:pb-10 lg:px-10">
          <div className="flex items-center justify-between">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/54">
              Blackhowl / Production & Media
            </p>
            <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/42 sm:block">
              We are the people behind the lights
            </p>
          </div>

          <div className="max-w-6xl animate-rise-fade pb-7 sm:pb-10 lg:pb-12">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--aurora)] shadow-[0_0_22px_rgba(0,194,168,0.78)]" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[var(--polar)]">
                Live experiences / unseen hands
              </p>
            </div>

            <h1 className="max-w-5xl text-balance font-heading text-5xl font-normal leading-[0.95] tracking-normal text-white drop-shadow-[0_22px_70px_rgba(0,0,0,0.58)] sm:text-7xl lg:text-8xl xl:text-[6.7rem]">
              The crew behind the lights.
            </h1>

            <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-white/76 sm:text-xl">
              Behind festivals, concerts, tours, and live experiences, Blackhowl shapes the energy
              and captures the moments the crowd lives for.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoHref}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgba(111,231,221,0.96),rgba(0,194,168,0.92))] px-6 font-sans text-base font-semibold tracking-normal text-[var(--obsidian)] shadow-[0_0_38px_rgba(111,231,221,0.22),0_18px_48px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_58px_rgba(111,231,221,0.36),0_20px_54px_rgba(0,0,0,0.44)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--polar)]"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Start a Project
              </a>
              <a
                href="#work"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/16 bg-white/[0.055] px-6 font-sans text-base font-semibold tracking-normal text-white shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--polar)] hover:bg-[var(--polar)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--polar)]"
              >
                See Our Work
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustTags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/48"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-16 w-full max-w-sm sm:w-80" style={carouselStyle}>
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className="hero-caption absolute inset-0 sm:text-right"
                  style={{ animationDelay: `${index * 6}s` }}
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--polar)]">
                    Field note
                  </p>
                  <p className="mt-1 font-sans text-sm leading-6 text-white/68">{slide.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative isolate overflow-hidden bg-[var(--obsidian)] text-white">
        <div className="hero-noise absolute inset-0 -z-10 opacity-[0.08]" />
        <div className="pointer-events-none absolute -right-52 top-20 -z-10 h-80 w-[48rem] bg-[radial-gradient(circle,rgba(106,90,205,0.22),transparent_58%)] blur-3xl" />
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-[var(--polar)]">
              Blackhowl in frame
            </p>
            <h2 className="mt-5 text-balance font-heading text-4xl font-normal uppercase leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              The night is built long before the lights go up.
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-2xl font-sans text-xl leading-9 text-white/76">
              We are a crew of creative freelancers moving through the parts of a live experience
              most people never see: the plans, the road, the artists, the camera angles, the
              pressure, the details, the seconds before the crowd erupts.
            </p>
            <div className="mt-10 grid gap-5 border-y border-white/10 py-7 sm:grid-cols-3">
              {['Behind the scenes', 'On the road', 'In the moment'].map((item) => (
                <p
                  key={item}
                  className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white/54"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[92rem] gap-4 px-5 pb-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-28">
          <div className="group relative min-h-[24rem] overflow-hidden md:min-h-[34rem]">
            <Image
              src="/media/blackhowl/photo-3-2.jpg"
              alt="Audience reaching toward the stage during a live show"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover object-[center_54%] grayscale contrast-125 transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.08),rgba(10,10,11,0.78)),linear-gradient(90deg,rgba(0,194,168,0.16),transparent_40%,rgba(106,90,205,0.16))]" />
            <div className="hero-noise absolute inset-0 opacity-[0.12]" />
          </div>

          <div className="relative min-h-[24rem] overflow-hidden md:min-h-[34rem]">
            <Image
              src="/media/blackhowl/backstage-lights.jpg"
              alt="Crew member watching stage lights from backstage"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[center_58%] saturate-[0.82] brightness-[0.82] contrast-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.08),rgba(10,10,11,0.72)),radial-gradient(circle_at_70%_20%,rgba(111,231,221,0.2),transparent_38%)]" />
            <p className="absolute bottom-5 left-5 max-w-xs font-sans text-sm leading-6 text-white/72">
              The best work happens where the audience cannot see it.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--obsidian),var(--graphite)_48%,var(--obsidian))] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="animate-fog-drift pointer-events-none absolute -left-56 top-24 -z-10 h-80 w-[50rem] bg-[linear-gradient(90deg,transparent,rgba(0,194,168,0.16),rgba(111,231,221,0.12),transparent)] blur-3xl" />
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-[var(--aurora)]">
              What we carry
            </p>
            <h2 className="max-w-5xl text-balance font-heading text-4xl font-normal uppercase leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Production, road, talent, and media support for nights that cannot miss.
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="group grid gap-6 py-8 transition duration-500 lg:grid-cols-[0.22fr_0.38fr_0.4fr] lg:items-center lg:py-10"
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/34">
                    0{index + 1}
                  </span>
                  <Icon
                    className="h-7 w-7 text-[var(--polar)] transition duration-500 group-hover:drop-shadow-[0_0_18px_rgba(111,231,221,0.55)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-3xl font-normal uppercase leading-none tracking-normal text-white sm:text-4xl">
                  {title}
                </h3>
                <p className="max-w-2xl font-sans text-base leading-7 text-white/64 sm:text-lg">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative isolate overflow-hidden bg-[var(--obsidian)] text-white">
        <div className="hero-noise absolute inset-0 -z-10 opacity-[0.1]" />
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-[var(--polar)]">
                Field archive
              </p>
              <h2 className="mt-5 max-w-4xl text-balance font-heading text-4xl font-normal uppercase leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
                Fragments from rooms that became memories.
              </h2>
            </div>
            <p className="max-w-xl font-sans text-lg leading-8 text-white/66">
              Festivals, theater stages, arena crowds, brand activations, and the quiet moments
              around them. The archive is part production record, part emotional evidence.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-4 md:auto-rows-[15rem] lg:auto-rows-[17rem]">
            {[
              {
                src: '/media/blackhowl/alt-j-stage.jpg',
                alt: 'Alt-J performance with dramatic stage lighting',
                label: 'Concert architecture',
                className: 'md:col-span-2 md:row-span-2',
              },
              {
                src: '/media/blackhowl/ewc-photo.webp',
                alt: 'Major esports event exterior at night',
                label: 'Major event scale',
                className: 'md:col-span-1 md:row-span-1',
              },
              {
                src: '/media/blackhowl/img-2082.jpg',
                alt: 'Performer holding a hoop in darkness',
                label: 'Live performance',
                className: 'md:col-span-1 md:row-span-2',
              },
              {
                src: '/media/blackhowl/beauty-and-the-beast.png',
                alt: 'Large theater cast and crew on stage',
                label: 'Stage production',
                className: 'md:col-span-1 md:row-span-1',
              },
              {
                src: '/media/blackhowl/crew-backstage-arena.jpg',
                alt: 'Blackhowl crew backstage in an arena',
                label: 'Crew presence',
                className: 'md:col-span-2 md:row-span-1',
              },
              {
                src: '/media/blackhowl/img-2904.jpg',
                alt: 'Artist moving through the audience',
                label: 'Audience energy',
                className: 'md:col-span-2 md:row-span-1',
              },
            ].map((item) => (
              <figure key={item.src} className={`group relative overflow-hidden ${item.className}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover saturate-[0.82] brightness-[0.78] contrast-110 transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.04),rgba(10,10,11,0.76)),linear-gradient(120deg,rgba(0,194,168,0.14),transparent_42%,rgba(106,90,205,0.16))]" />
                <figcaption className="absolute bottom-4 left-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate min-h-screen overflow-hidden bg-[var(--obsidian)] text-white">
        <Image
          src="/media/blackhowl/img-4794.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-[center_58%] brightness-[0.62] saturate-[0.86] contrast-125"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,10,11,0.5),rgba(10,10,11,0.34)_38%,rgba(10,10,11,0.94)),linear-gradient(90deg,rgba(10,10,11,0.94),rgba(10,10,11,0.62)_48%,rgba(10,10,11,0.2))]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_22%,rgba(111,231,221,0.18),transparent_32%),radial-gradient(circle_at_20%_78%,rgba(106,90,205,0.22),transparent_34%)]" />
        <div className="hero-noise absolute inset-0 -z-10 opacity-[0.14]" />
        <div className="hero-particles absolute inset-0 -z-10 opacity-30" />
        <div className="animate-aurora-flow pointer-events-none absolute -right-44 top-16 -z-10 h-72 w-[52rem] bg-[linear-gradient(90deg,transparent,rgba(111,231,221,0.16),rgba(106,90,205,0.22),transparent)] blur-3xl" />

        <div className="mx-auto flex min-h-screen max-w-[92rem] flex-col justify-between px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/46">
              Final cue / Project briefing
            </p>
            <p className="hidden font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[var(--polar)] sm:block">
              Bring us in before the lights go up
            </p>
          </div>

          <div className="grid gap-12 pb-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-[var(--polar)]">
                Bring us in early
              </p>
              <h2 className="mt-5 text-balance font-heading text-5xl font-normal uppercase leading-[0.94] tracking-normal drop-shadow-[0_20px_68px_rgba(0,0,0,0.62)] sm:text-7xl lg:text-8xl xl:text-[6.4rem]">
                Let the night find its shape.
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-white/76 sm:text-xl">
                Send us the date, city, artist, event idea, or media brief. We will help shape the
                crew, the plan, and the next move.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoHref}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgba(111,231,221,0.96),rgba(0,194,168,0.92))] px-6 font-sans text-base font-semibold text-[var(--obsidian)] shadow-[0_0_44px_rgba(111,231,221,0.22),0_18px_48px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(111,231,221,0.36),0_20px_54px_rgba(0,0,0,0.44)]"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Start a Project
                </a>
                <a
                  href={`mailto:${EMAILS.TO}`}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/16 bg-white/[0.055] px-6 font-sans text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--polar)] hover:bg-[var(--polar)]/10"
                >
                  {EMAILS.TO}
                </a>
              </div>
            </div>

            <div className="border-l border-white/12 pl-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
                Send what you have
              </p>
              <div className="mt-6 space-y-5">
                {['Date + city', 'Artist or event idea', 'Production needs', 'Photo / video brief'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="h-px w-8 bg-[var(--aurora)] shadow-[0_0_18px_rgba(0,194,168,0.72)]" />
                      <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-white/68">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--obsidian)] px-5 py-8 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-28">
            <BlackHowlLogoWithText color="#ffffff" aria-hidden="true" />
          </div>
          <p className="font-sans text-sm text-white/50">
            Production & media crew for live moments.
          </p>
        </div>
      </footer>
    </main>
  );
}
