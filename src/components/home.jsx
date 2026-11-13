import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Hammer,
  Layers,
  Utensils,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <main
        id="home"
        className="relative min-h-screen h-auto w-full overflow-hidden bg-[#302015] text-white selection:bg-[#E9BD70] selection:text-[#24170D] lg:min-h-[720px] lg:h-[calc(92vh+75px)]"
      >
        {/* Layered studio backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(112deg,#24170F_0%,#392719_48%,#523925_100%)]" />
          <div className="absolute -right-[12%] top-[8%] h-[620px] w-[620px] rounded-full bg-[#D5A85E]/[.10] blur-[130px]" />
          <div className="absolute -left-[12%] bottom-[-28%] h-[520px] w-[520px] rounded-full bg-[#9B6A37]/[.12] blur-[130px]" />
          <div className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(rgba(255,241,216,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,241,216,.08)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(90deg,transparent,black,transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E9BD70]/50 to-transparent" />
        </div>

        <section className="relative z-10 mx-auto flex min-h-screen h-auto max-w-[1550px] items-start px-5 pb-20 pt-[155px] sm:px-9 sm:pt-[165px] lg:h-full lg:min-h-0 lg:items-center lg:px-16 lg:pt-[calc(75px+3vh)]">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-5">
            <div className="relative z-20 order-2 mx-auto w-full max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
                className="font-serif text-[clamp(3.25rem,6.1vw,6.4rem)] font-normal leading-[.94] tracking-[-.055em] text-[#FFF1D8]"
              >
                Crafted for
                <span className="mt-2 block italic text-[#E9BD70]">Everyday Living.</span>
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
                className="mx-auto mt-7 max-w-[35rem] text-sm leading-[1.95] text-[#EADBC8]/85 sm:text-base lg:mx-0"
              >
                Discover thoughtfully designed wooden tray sets that bring natural warmth and effortless style to your home. Made for serving, hosting, and making everyday moments feel special.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
                className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start"
              >
                <a
                  href="#collections"
                  className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#F4D99E] via-[#E9BD70] to-[#D6A653] px-7 text-[10px] font-bold uppercase tracking-[.16em] text-[#2B1B12] shadow-[0_12px_35px_rgba(201,151,73,.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(201,151,73,.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5D69D] sm:px-8"
                >
                  Explore collection
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="/about"
                  className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#E9BD70]/40 bg-white/[.035] px-7 text-[10px] font-semibold uppercase tracking-[.16em] text-[#F5DDB6] backdrop-blur-sm transition-all duration-300 hover:border-[#E9BD70]/80 hover:bg-[#E9BD70]/[.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5D69D]"
                >
                  Discover our story
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.48, ease: EASE }}
                className="mt-11 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-[#E9BD70]/20 pt-6 text-[9px] font-medium uppercase tracking-[.13em] text-[#EADBC8]/80 sm:gap-x-8 lg:justify-start"
              >
                <span className="flex items-center gap-2.5"><Layers size={17} className="text-[#E9BD70]" /> Considered design</span>
                <span className="hidden h-6 w-px bg-[#E9BD70]/30 sm:block" />
                <span className="flex items-center gap-2.5"><Hammer size={17} className="text-[#E9BD70]" /> Thoughtful craft</span>
                <span className="hidden h-6 w-px bg-[#E9BD70]/30 sm:block" />
                <span className="flex items-center gap-2.5"><Utensils size={17} className="text-[#E9BD70]" /> Everyday function</span>
              </motion.div>
            </div>

            {/* Product showcase stage */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: .96, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.05, delay: .12, ease: EASE }}
              className="relative order-1 mx-auto flex w-full max-w-[760px] items-center justify-center py-5 sm:py-8 lg:order-2 lg:min-h-[650px] lg:py-0"
            >
              <motion.div
                aria-hidden="true"
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
                className="absolute h-[min(76vw,610px)] w-[min(76vw,610px)] rounded-full border border-dashed border-[#E9BD70]/20"
              />
              <div aria-hidden="true" className="absolute h-[min(65vw,520px)] w-[min(65vw,520px)] rounded-full border border-[#E9BD70]/20 shadow-[0_0_100px_rgba(233,189,112,.09),inset_0_0_80px_rgba(233,189,112,.06)]" />
              <motion.div
                aria-hidden="true"
                animate={reduce ? {} : { y: [0, -12, 0], scale: [1, 1.025, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[min(56vw,440px)] w-[min(56vw,440px)] rounded-full bg-[radial-gradient(circle,rgba(226,184,112,.2)_0%,rgba(226,184,112,.06)_48%,transparent_72%)] blur-2xl"
              />

              <div className="relative z-10 w-full max-w-[700px] px-1 sm:px-4">
                <div className="absolute inset-[7%] rounded-[48%] border border-[#F5DDB6]/15 bg-gradient-to-br from-[#F5DDB6]/[.07] via-transparent to-[#E9BD70]/[.06] shadow-[0_30px_100px_rgba(0,0,0,.18)] backdrop-blur-[2px]" />
                <motion.img
                  src="./images/Home.png"
                  alt="Woodique wooden tray set"
                  fetchPriority="high"
                  animate={reduce ? {} : { y: [0, -9, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 mx-auto max-h-[38vh] w-full object-contain drop-shadow-[0_32px_35px_rgba(0,0,0,.32)] sm:max-h-[52vh] lg:max-h-[68vh]"
                />
                <div className="pointer-events-none absolute inset-[4%] z-20 border border-[#E9BD70]/20 [clip-path:polygon(0_0,18%_0,18%_1px,1px_1px,1px_18%,0_18%,0_0,100%_0,100%_18%,calc(100%_-_1px)_18%,calc(100%_-_1px)_1px,82%_1px,82%_0,100%_0,100%_100%,82%_100%,82%_calc(100%_-_1px),calc(100%_-_1px)_calc(100%_-_1px),calc(100%_-_1px)_82%,100%_82%,100%_100%,0_100%,0_82%,1px_82%,1px_calc(100%_-_1px),18%_calc(100%_-_1px),18%_100%)]" />
              </div>

              <motion.div
                initial={reduce ? false : { opacity: 0, x: 18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: .7, delay: .8, ease: EASE }}
                className="absolute bottom-[9%] right-[2%] z-30 hidden items-center gap-3 rounded-2xl border border-[#E9BD70]/25 bg-[#2B1B12]/85 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,.25)] backdrop-blur-xl sm:flex lg:right-[-1%]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9BD70]/30 bg-[#E9BD70]/10 text-[#E9BD70]"><BadgeCheck size={19} strokeWidth={1.4} /></span>
                <span><span className="block text-[8px] uppercase tracking-[.2em] text-[#D5B989]">The Woodique touch</span><span className="mt-1 block font-serif text-sm text-[#FFF1D8]">Made for your moments</span></span>
              </motion.div>

              <div className="absolute left-[1%] top-[17%] z-20 hidden h-2 w-2 rounded-full bg-[#F1D69D] shadow-[0_0_18px_5px_rgba(233,189,112,.35)] sm:block" />
              <div className="absolute bottom-[20%] left-[8%] z-20 hidden h-1.5 w-1.5 rounded-full bg-[#E9BD70]/80 shadow-[0_0_15px_4px_rgba(233,189,112,.3)] sm:block" />
            </motion.div>
          </div>
        </section>

        <a
          href="#collections"
          className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[8px] font-semibold uppercase tracking-[.28em] text-[#E9BD70]/80 transition-colors hover:text-[#FFF1D8]"
        >
          <span>Scroll to explore</span>
          <motion.span animate={reduce ? {} : { y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={15} strokeWidth={1.4} />
          </motion.span>
        </a>
      </main>

      {/* Lifestyle imagery is editorial inspiration, separate from product listings. */}
      <section className="relative overflow-hidden border-y border-[#E9BD70]/20 bg-[#241810] px-5 py-20 text-[#FFF1D8] sm:px-9 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] items-center gap-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.3em] text-[#D9B477]"><span className="h-px w-8 bg-current" /> The art of serving</div>
            <h2 className="max-w-xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[.98] tracking-[-.055em]">Make room for <span className="italic text-[#E9BD70]">little rituals.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#D8C5AD] sm:text-base">A favourite cup, a quiet moment, and the natural warmth of wood. Our tray sets are made to bring a little more intention to the everyday.</p>
            <a href="#collections" className="group mt-8 inline-flex items-center gap-3 border-b border-[#E9BD70]/50 pb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#F5DDB6] transition-colors hover:text-[#E9BD70]">Find your tray set <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <p className="mt-8 text-[9px] uppercase tracking-[.18em] text-[#BDA88F]/70">Tray styling reference · Image source: Objectry</p>
          </motion.div>

          <motion.figure
            initial={reduce ? false : { opacity: 0, scale: .97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .9, ease: EASE }}
            className="group relative order-1 min-h-[340px] overflow-hidden border border-[#E9BD70]/25 bg-[#342419] sm:min-h-[520px] lg:order-2"
          >
            <img
              src="https://objectry.com/cdn/shop/products/ClassicTraySetDomeCoffeeTable_2048x2048.jpg?v=1712568732"
              alt="Nested rectangular wooden tray set with polished brass handles styled on a coffee table"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C]/35 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[.24em] text-[#FFF1D8] sm:bottom-7 sm:left-7">A moment, thoughtfully arranged</figcaption>
          </motion.figure>
        </div>
      </section>
    </>
  );
}
