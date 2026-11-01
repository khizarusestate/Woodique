import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Leaf, Layers, Hammer, Utensils, PackageCheck, HeartHandshake } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];
const values = [
  { number: "01", Icon: Leaf, title: "Natural by design", copy: "Warm wood tones and thoughtful forms bring a calm, welcoming feel to everyday spaces." },
  { number: "02", Icon: Hammer, title: "Made with care", copy: "We value considered details, practical design and pieces that feel at home in daily use." },
  { number: "03", Icon: HeartHandshake, title: "Chosen for living", copy: "From serving guests to organising your space, our tray sets are selected to make ordinary moments feel special." },
];

function Eyebrow({ children }) {
  return <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#D9B477]"><span className="h-px w-8 bg-current" />{children}</div>;
}

export default function About() {
  const reduce = useReducedMotion();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  return (
    <main className="relative overflow-hidden bg-[#392719] text-[#FFF1D8] selection:bg-[#E9BD70] selection:text-[#2B1B12]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[linear-gradient(110deg,#2B1B12_0%,#422B1C_55%,#503522_100%)]" />
      <section className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-6 pb-20 pt-32 sm:px-10 lg:min-h-[820px] lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:px-16 lg:pt-36">
        <motion.div initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: EASE }} className="relative z-10 order-2 lg:order-1">
          <Eyebrow>Our world · Woodique</Eyebrow>
          <h1 className="max-w-2xl font-serif text-[clamp(2.8rem,5.8vw,5.4rem)] font-normal leading-[.94] tracking-[-.06em]">A little warmth.<span className="block pl-[.38em] italic text-[#E9BD70]">A lot of purpose.</span></h1>
          <p className="mt-8 max-w-lg text-[15px] leading-8 text-[#EADBC8]/85 sm:text-base">At Woodique, we believe the everyday deserves thoughtful design. Our wooden tray sets bring natural warmth, practical beauty and an effortless sense of style to your home.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="/#collections" className="group inline-flex items-center gap-4 rounded-full bg-[#E9BD70] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#2B1B12] transition hover:bg-[#F5D69D]">Explore tray sets <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="/#contact" className="inline-flex items-center gap-2 text-xs text-[#EADBC8] transition-colors hover:text-[#E9BD70]">Talk to us <ArrowRight size={14} /></a>
          </div>
          <div className="mt-14 flex items-center gap-4 border-t border-[#E9BD70]/20 pt-5 sm:mt-20">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9BD70]/40 text-[#E9BD70]"><Leaf size={19} strokeWidth={1.3} /></div>
            <p className="text-[10px] uppercase leading-5 tracking-[.2em] text-[#D8C5AD]">Thoughtful by design<span className="block text-[#FFF1D8]">Made for everyday living</span></p>
          </div>
        </motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: EASE, delay: .1 }} className="relative order-1 mx-auto w-full max-w-[680px] lg:order-2">
          <div className="relative ml-auto aspect-[.9] w-[90%] overflow-hidden rounded-[2px] border border-[#E9BD70]/20 bg-[#2B1B12]/50 p-5 shadow-[0_35px_90px_rgba(20,12,6,.35)] sm:w-[78%] sm:p-8">
            <img src="/images/Home.png" alt="Woodique wooden tray set" fetchPriority="high" className="h-full w-full object-contain" />
            <div className="pointer-events-none absolute inset-3 border border-[#E9BD70]/20 sm:inset-5" />
          </div>
          <div className="absolute -bottom-5 left-0 flex items-center gap-3 border border-[#E9BD70]/30 bg-[#2B1B12] px-5 py-4 shadow-xl sm:bottom-8">
            <Layers size={22} strokeWidth={1.2} className="text-[#E9BD70]" />
            <div><p className="font-serif text-base leading-none">Simple. Useful. Beautiful.</p><p className="mt-1.5 text-[8px] uppercase tracking-[.2em] text-[#D8C5AD]">The Woodique approach</p></div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-[#E9BD70]/15 bg-[#2F2016]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-20 sm:px-10 md:py-28 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-16 lg:py-32">
          <div><Eyebrow>The heart of Woodique</Eyebrow><p className="font-serif text-3xl leading-tight text-[#E9BD70] sm:text-4xl">Designed for the moments that make a home.</p></div>
          <div><p className="font-serif text-[clamp(1.45rem,2.8vw,2.7rem)] leading-[1.2] tracking-[-.035em] text-[#FFF1D8]">We see a tray as <span className="italic text-[#E9BD70]">more than an accessory.</span> It helps bring things together — from a relaxed breakfast to a table set for guests.</p><p className="mt-7 max-w-2xl text-sm leading-7 text-[#D8C5AD]">That belief shapes our approach: natural materials, useful forms and details that complement the spaces you live in.</p></div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-36">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div><Eyebrow>What guides us</Eyebrow><h2 className="font-serif text-4xl leading-[.98] tracking-[-.05em] sm:text-6xl">The details make<br /><span className="italic text-[#E9BD70]">the difference.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-[#D8C5AD]">A point of view built around natural character, practical design and care in the details.</p>
        </motion.div>
        <div className="grid border-t border-[#E9BD70]/20 md:grid-cols-3">
          {values.map(({ number, Icon, title, copy }, index) => <motion.article key={number} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, delay: index * .1 }} className="group border-b border-[#E9BD70]/15 px-4 py-8 transition-colors hover:bg-[#E9BD70]/[.04] md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0"><div className="flex items-center justify-between"><span className="font-serif text-sm text-[#C5AD8D]">{number} / 03</span><Icon size={23} strokeWidth={1.2} className="text-[#E9BD70] transition-transform duration-500 group-hover:-translate-y-1" /></div><h3 className="mt-10 font-serif text-xl text-[#FFF1D8] transition-colors group-hover:text-[#E9BD70]">{title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-[#D8C5AD]">{copy}</p><div className="mt-8 h-px w-10 bg-[#E9BD70]/70 transition-all duration-500 group-hover:w-20" /></motion.article>)}
        </div>
      </section>

      <section className="relative border-y border-[#E9BD70]/15 bg-[#2F2016] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#E9BD70]/35 text-[#E9BD70]"><PackageCheck size={24} strokeWidth={1.2} /></div>
          <Eyebrow>Bring warmth to your home</Eyebrow>
          <h2 className="font-serif text-[clamp(2.45rem,5.6vw,5.1rem)] leading-[.95] tracking-[-.06em]">Everyday moments.<br /><span className="italic text-[#E9BD70]">Thoughtfully styled.</span></h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#D8C5AD]">Explore wooden tray sets designed to look at home in your space and be part of your everyday routine.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/#collections" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E9BD70] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#2B1B12] transition hover:bg-[#F5D69D]">Shop tray sets <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="/#contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E9BD70]/40 px-7 py-4 text-[10px] uppercase tracking-[.18em] text-[#FFF1D8] transition hover:border-[#E9BD70] hover:text-[#E9BD70]">Contact us <ArrowDownRight size={15} /></a></div>
        </motion.div>
      </section>
    </main>
  );
}
