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
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#A77A43]/30 bg-[#2B1B12] text-[#FFF1D8]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,24,15,.96)_0%,rgba(45,30,18,.86)_52%,rgba(29,20,13,.96)_100%)]" />
        <motion.div animate={reduce ? {} : { x: [0, 45, -20, 0], y: [0, -20, 24, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 -top-48 h-[430px] w-[430px] rounded-full bg-[#E9BD70]/[.13] blur-[115px]" />
        <motion.div animate={reduce ? {} : { x: [0, -35, 20, 0], y: [0, 20, -15, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-52 -left-32 h-[390px] w-[390px] rounded-full bg-[#503522]/[.16] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E9BD70]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .85, ease: EASE }}
          className="grid gap-8 border-b border-[#E9BD70]/25 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[.34em] text-[#E9BD70] sm:text-[10px]"><Leaf size={14} /> Made for the moments that matter</div>
            <h2 className="font-serif text-[clamp(2.4rem,6vw,5.4rem)] font-normal leading-[.95] tracking-[-.055em]">
              Bring warmth to your table.
              <span className="mt-2 block italic text-[#E9BD70]">Make every moment feel special.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[12px] leading-7 text-[#EADBC8] sm:text-sm sm:leading-8">
              Thoughtfully crafted wooden tray sets for serving, sharing and adding a natural touch to everyday living.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex min-h-[54px] w-fit items-center justify-between gap-8 rounded-sm border border-[#E9BD70]/60 bg-gradient-to-r from-[#E9BD70]/[.13] to-transparent px-5 py-4 text-[9px] font-semibold uppercase tracking-[.2em] text-[#FFF1D8] transition-all duration-500 hover:border-[#E2BD83] hover:bg-[#E9BD70]/[.2] hover:shadow-[0_0_35px_rgba(198,154,91,.12)] sm:px-6">
            <span className="flex items-center gap-3"><MessageCircle size={17} strokeWidth={1.4} /> Talk to our team</span>
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr] lg:gap-16 lg:py-16">
          <div className="max-w-sm">
            <a href="/" aria-label="Woodique home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9BD70]/50 bg-[#E9BD70]/[.08]">
                <img src="/images/Logo.png" alt="" className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span>
                <span className="block font-serif text-[25px] leading-none tracking-[-.035em] text-[#FFF1D8]">Woodique</span>
                <span className="mt-2 block text-[8px] uppercase tracking-[.29em] text-[#E9BD70]">Wooden tray sets · Thoughtfully crafted</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-[12px] leading-7 text-[#EADBC8]">
              Natural warmth, considered details and beautiful pieces made to be part of your everyday moments.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-wide text-[#E9BD70] transition-colors hover:text-[#FFF1D8]">
              <MessageCircle size={15} /> 0317 7348178 <ArrowUpRight size={12} />
            </a>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.27em] text-[#F0D5A4]"><span className="h-px w-5 bg-[#E9BD70]" /> Explore</h3>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => <li key={link.label}><a href={link.href} className="group inline-flex items-center gap-2 text-[12px] text-[#EADBC8] transition-colors duration-300 hover:text-[#FFF1D8]"><span className="h-px w-0 bg-[#E9BD70] transition-all duration-300 group-hover:w-4" />{link.label}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.27em] text-[#F0D5A4]"><span className="h-px w-5 bg-[#E9BD70]" /> Your Woodique</h3>
            <ul className="space-y-4">
              <li><a href="/wishlist" className="group inline-flex items-center gap-3 text-[12px] text-[#EADBC8] transition-colors hover:text-[#FFF1D8]"><Heart size={15} className="text-[#E9BD70] transition-transform group-hover:scale-110" /> Saved favourites</a></li>
              <li><a href="/cart" className="group inline-flex items-center gap-3 text-[12px] text-[#EADBC8] transition-colors hover:text-[#FFF1D8]"><ShoppingBag size={15} className="text-[#E9BD70] transition-transform group-hover:scale-110" /> Shopping bag</a></li>
              <li className="flex items-start gap-3 text-[12px] leading-6 text-[#EADBC8]"><ShieldCheck size={15} className="mt-1 shrink-0 text-[#E9BD70]" /> Thoughtful service, from selection to delivery.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E9BD70]/25 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[.08em] text-[#BCA58A]">© {new Date().getFullYear()} Woodique. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[#EADBC8]">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#E9BD70]" />
            Naturally made for living
            <Leaf size={12} className="text-[#E9BD70]" />
            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#E9BD70]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
