import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle, ShieldCheck, ShoppingBag, Leaf } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923177348178";
const EASE = [0.16, 1, 0.3, 1];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/about" },
  { label: "Explore tray sets", href: "/#collections" },
  { label: "My account", href: "/account" },
];

export default function Footer() {
  const reduce = useReducedMotion();
  const particles = useMemo(
    () => Array.from({ length: reduce ? 14 : 38 }, (_, i) => ({
      id: i,
      left: `${(i * 37.7) % 100}%`,
      top: `${(i * 61.3) % 100}%`,
      size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
      duration: 6 + (i % 8) * 1.5,
      delay: (i % 11) * -0.6,
      x: ((i * 29) % 110) - 55,
      y: ((i * 43) % 130) - 65,
    })),
    [reduce]
  );

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#A77A43]/30 bg-[#24180F] text-[#F5EBDD]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -inset-6 scale-[1.04] bg-cover bg-center bg-no-repeat blur-[14px]"
          style={{ backgroundImage: "url('/images/Home.png')", opacity: 0.16 }}
          animate={reduce ? {} : { scale: [1.04, 1.08, 1.04], opacity: [.12, .19, .12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,24,15,.96)_0%,rgba(45,30,18,.86)_52%,rgba(29,20,13,.96)_100%)]" />
        <motion.div animate={reduce ? {} : { x: [0, 45, -20, 0], y: [0, -20, 24, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 -top-48 h-[430px] w-[430px] rounded-full bg-[#C69A5B]/[.13] blur-[115px]" />
        <motion.div animate={reduce ? {} : { x: [0, -35, 20, 0], y: [0, 20, -15, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-52 -left-32 h-[390px] w-[390px] rounded-full bg-[#8A6036]/[.16] blur-[110px]" />
        {particles.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full" style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: p.id % 4 === 0 ? "#F5E2BD" : "#C69A5B", boxShadow: "0 0 9px 2px rgba(198,154,91,.38)" }}
            animate={reduce ? { opacity: .35 } : { x: [0, p.x, 0], y: [0, p.y, 0], opacity: [.12, .65, .12], scale: [.7, 1.2, .7] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C69A5B]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .85, ease: EASE }}
          className="grid gap-8 border-b border-[#C69A5B]/25 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[.34em] text-[#D6B27A] sm:text-[10px]"><Leaf size={14} /> Made for the moments that matter</div>
            <h2 className="font-serif text-[clamp(2.4rem,6vw,5.4rem)] font-normal leading-[.95] tracking-[-.055em]">
              Bring warmth to your table.
              <span className="mt-2 block italic text-[#D6B27A]">Make every moment feel special.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[12px] leading-7 text-[#C5B49D] sm:text-sm sm:leading-8">
              Thoughtfully crafted wooden tray sets for serving, sharing and adding a natural touch to everyday living.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex min-h-[54px] w-fit items-center justify-between gap-8 rounded-sm border border-[#C69A5B]/60 bg-gradient-to-r from-[#C69A5B]/[.13] to-transparent px-5 py-4 text-[9px] font-semibold uppercase tracking-[.2em] text-[#F1DDBB] transition-all duration-500 hover:border-[#E2BD83] hover:bg-[#C69A5B]/[.2] hover:shadow-[0_0_35px_rgba(198,154,91,.12)] sm:px-6">
            <span className="flex items-center gap-3"><MessageCircle size={17} strokeWidth={1.4} /> Talk to our team</span>
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr] lg:gap-16 lg:py-16">
          <div className="max-w-sm">
            <a href="/" aria-label="Woodique home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C69A5B]/50 bg-[#C69A5B]/[.08]">
                <img src="/images/Logo.png" alt="" className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span>
                <span className="block font-serif text-[25px] leading-none tracking-[-.035em] text-[#F5EBDD]">Woodique</span>
                <span className="mt-2 block text-[8px] uppercase tracking-[.29em] text-[#C69A5B]">Wooden tray sets · Thoughtfully crafted</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-[12px] leading-7 text-[#C5B49D]">
              Natural warmth, considered details and beautiful pieces made to be part of your everyday moments.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-wide text-[#D6B27A] transition-colors hover:text-[#F5EBDD]">
              <MessageCircle size={15} /> 0317 7348178 <ArrowUpRight size={12} />
            </a>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.27em] text-[#E4C99F]"><span className="h-px w-5 bg-[#C69A5B]" /> Explore</h3>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => <li key={link.label}><a href={link.href} className="group inline-flex items-center gap-2 text-[12px] text-[#C5B49D] transition-colors duration-300 hover:text-[#F5EBDD]"><span className="h-px w-0 bg-[#C69A5B] transition-all duration-300 group-hover:w-4" />{link.label}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.27em] text-[#E4C99F]"><span className="h-px w-5 bg-[#C69A5B]" /> Your Woodique</h3>
            <ul className="space-y-4">
              <li><a href="/wishlist" className="group inline-flex items-center gap-3 text-[12px] text-[#C5B49D] transition-colors hover:text-[#F5EBDD]"><Heart size={15} className="text-[#C69A5B] transition-transform group-hover:scale-110" /> Saved favourites</a></li>
              <li><a href="/cart" className="group inline-flex items-center gap-3 text-[12px] text-[#C5B49D] transition-colors hover:text-[#F5EBDD]"><ShoppingBag size={15} className="text-[#C69A5B] transition-transform group-hover:scale-110" /> Shopping bag</a></li>
              <li className="flex items-start gap-3 text-[12px] leading-6 text-[#C5B49D]"><ShieldCheck size={15} className="mt-1 shrink-0 text-[#C69A5B]" /> Thoughtful service, from selection to delivery.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#C69A5B]/25 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[.08em] text-[#A18D73]">© {new Date().getFullYear()} Woodique. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[#C5B49D]">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#C69A5B]" />
            Naturally made for living
            <Leaf size={12} className="text-[#D6B27A]" />
            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#C69A5B]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
