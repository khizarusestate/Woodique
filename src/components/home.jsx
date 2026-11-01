import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Layers, Hammer, Utensils } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function Home() {
    const reduce = useReducedMotion();

    return (
        <main
            id="home"
            className="relative h-[calc(88vh+75px)] min-h-[680px] w-full overflow-hidden bg-[#392719] text-white selection:bg-[#F1C965] selection:text-[#24170D]"
        >
            {/* Clean, warm studio-style background — intentionally no particles, glows, grids or animated effects */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#2B1B12_0%,#422B1C_52%,#503522_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-[#21150F]/35" />

            <section className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 pb-16 pt-[calc(75px+2vh)] sm:px-10 lg:px-16">
                <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-6">
                    <div className="relative z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: EASE }}
                            className="mb-7 flex items-center justify-center gap-4 lg:justify-start"
                        >
                            <span className="h-px w-20 bg-[#D5A85E]" />
                            <Layers size={23} strokeWidth={1.4} className="text-[#E9BD70]" />
                            <span className="h-px w-20 bg-[#D5A85E]" />
                        </motion.div>

                        <motion.h1
                            initial={reduce ? false : { opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                            className="relative z-50 font-serif text-[clamp(2.8rem,5.7vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#FFF1D8]"
                        >
                            Crafted for
                            <span className="mt-1 block italic text-[#E9BD70]">Everyday Living.</span>
                        </motion.h1>

                        <motion.p
                            initial={reduce ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                            className="mx-auto mt-7 max-w-[36rem] text-sm leading-[1.9] text-[#F0E5D8]/90 sm:text-base lg:mx-0"
                        >
                            Discover thoughtfully designed wooden tray sets that bring natural warmth and effortless style to your home. Made for serving, hosting, and making everyday moments feel special.
                        </motion.p>

                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                        >
                            <a
                                href="#collections"
                                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#E9BD70] px-8 py-4 text-sm font-semibold text-[#2B1B12] transition-colors hover:bg-[#F5D69D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5D69D]"
                            >
                                Shop Tray Sets <ArrowRight size={17} />
                            </a>
                            <a
                                href="/about"
                                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-[#E9BD70]/55 px-7 py-4 text-sm font-medium text-[#F5DDB6] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5D69D]"
                            >
                                Our Craft
                            </a>
                        </motion.div>

                        <motion.div
                            initial={reduce ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.48 }}
                            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-xs text-[#F0E5D8] sm:gap-x-9 lg:justify-start"
                        >
                            <span className="flex items-center gap-2.5"><Layers size={20} className="text-[#E9BD70]" /> Premium Wooden Design</span>
                            <span className="hidden h-8 w-px bg-[#E9BD70]/55 sm:block" />
                            <span className="flex items-center gap-2.5"><Hammer size={20} className="text-[#E9BD70]" /> Thoughtful Craftsmanship</span>
                            <span className="hidden h-8 w-px bg-[#E9BD70]/55 sm:block" />
                            <span className="flex items-center gap-2.5"><Utensils size={20} className="text-[#E9BD70]" /> Made for Everyday Use</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
                        className="relative mx-auto flex w-full max-w-[680px] items-center justify-center lg:min-h-[620px]"
                    >
                        <img
                            src="./images/Home.png"
                            alt="Woodique wooden tray set"
                            className="relative z-10 max-h-[68vh] w-full object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            <a
                href="#collections"
                className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[9px] uppercase tracking-[0.28em] text-[#E9BD70]/85 transition-colors hover:text-[#FFF1D8]"
            >
                <span>Explore the Collection</span>
                <ArrowDown size={15} strokeWidth={1.4} />
            </a>
        </main>
    );
}
