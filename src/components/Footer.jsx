import { ArrowUpRight, Heart, Layers, MessageCircle, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923177348178";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/about" },
  { label: "Explore tray sets", href: "/#collections" },
  { label: "My account", href: "/account" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D9B879]/20 bg-[#2B1B12] text-[#FFF1D8]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(190,139,75,.16),transparent_48%),linear-gradient(120deg,#2B1B12,#3A281C_58%,#2B1B12)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E9BD70]/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-8 border-b border-[#E9BD70]/20 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-[9px] font-medium uppercase tracking-[.32em] text-[#D9B879]">A thoughtful touch for every day</p>
            <h2 className="font-serif text-[clamp(2.4rem,6vw,5.2rem)] font-normal leading-[.96] tracking-[-.055em]">
              Bring a little warmth.
              <span className="mt-2 block italic text-[#E9BD70]">Make room for moments.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[12px] leading-7 text-[#D8C5AD] sm:text-sm sm:leading-8">
              Discover wooden tray sets made to complement your home, make serving effortless and add character to everyday living.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex min-h-[54px] w-fit items-center gap-5 rounded-full bg-[#E9BD70] px-6 py-4 text-[9px] font-semibold uppercase tracking-[.17em] text-[#2B1B12] transition hover:bg-[#F5D69D]">
            <MessageCircle size={17} /> Talk to our team
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr] lg:gap-16 lg:py-16">
          <div className="max-w-sm">
            <a href="/" aria-label="Woodique home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9BD70]/35 bg-[#E9BD70]/[.07]">
                <img src="/images/Logo.png" alt="" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105" />
              </span>
              <span>
                <span className="block font-serif text-[25px] leading-none tracking-[-.035em]">Woodique</span>
                <span className="mt-2 block text-[8px] uppercase tracking-[.25em] text-[#D9B879]">Wooden tray sets · Thoughtfully crafted</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-[12px] leading-7 text-[#D8C5AD]">
              Natural warmth, useful design and thoughtful details — made to feel at home in your everyday moments.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-wide text-[#E9BD70] transition-colors hover:text-[#FFF1D8]">
              <MessageCircle size={15} /> 0317 7348178 <ArrowUpRight size={12} />
            </a>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.25em] text-[#E9BD70]">
              <span className="h-px w-5 bg-[#B78B42]" /> Explore
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-2 text-[12px] text-[#D8C5AD] transition-colors hover:text-[#FFF1D8]">
                    <span className="h-px w-0 bg-[#E9BD70] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.25em] text-[#E9BD70]">
              <span className="h-px w-5 bg-[#B78B42]" /> Your experience
            </h3>
            <ul className="space-y-4">
              <li><a href="/wishlist" className="group inline-flex items-center gap-3 text-[12px] text-[#D8C5AD] transition-colors hover:text-[#FFF1D8]"><Heart size={15} className="text-[#E9BD70]" /> Saved favourites</a></li>
              <li><a href="/cart" className="group inline-flex items-center gap-3 text-[12px] text-[#D8C5AD] transition-colors hover:text-[#FFF1D8]"><Layers size={15} className="text-[#E9BD70]" /> Shopping bag</a></li>
              <li className="flex items-start gap-3 text-[12px] leading-6 text-[#D8C5AD]"><ShieldCheck size={15} className="mt-1 shrink-0 text-[#E9BD70]" /> Thoughtful details, made for everyday use.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E9BD70]/20 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[.08em] text-[#B7A58D]">© {new Date().getFullYear()} Woodique. All rights reserved.</p>
          <p className="text-[9px] uppercase tracking-[.2em] text-[#D9B879]">Simple. Useful. Beautiful.</p>
        </div>
      </div>
    </footer>
  );
}
