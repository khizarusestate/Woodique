import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, X, Leaf, Package, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "923177348178";

export default function Contact({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => { if (event.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const text = ["Hello Woodique,", "", "I would like to make an enquiry about your wooden tray sets.", "", `Name: ${form.name.trim()}`, `Phone: ${form.phone.trim()}`, "", "Message:", form.message.trim()].join("\\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const fieldClass = "w-full border-0 border-b border-[#A58A65]/40 bg-transparent px-0 py-3.5 text-[13px] tracking-wide text-[#FFF1D8] outline-none transition placeholder:text-[#C2AA8B]/65 focus:border-[#E9BD70] focus:ring-0";

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-[#1B120C]/80 px-3 py-5 backdrop-blur-md sm:px-6 sm:py-8" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose?.(); }} role="presentation">
      <motion.section role="dialog" aria-modal="true" aria-labelledby="contact-title" initial={reduce ? false : { opacity: 0, y: 22, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .985 }} transition={{ duration: .35 }} className="relative my-auto w-full max-w-[1040px] overflow-hidden rounded-sm border border-[#E9BD70]/30 bg-[#2B1B12] text-[#FFF1D8] shadow-[0_35px_100px_rgba(20,12,6,.55)]">
        <button type="button" onClick={onClose} aria-label="Close contact form" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#E9BD70]/40 bg-[#392719]/70 text-[#E9BD70] transition hover:bg-[#E9BD70]/15 sm:right-6 sm:top-6"><X size={18} strokeWidth={1.4} /></button>
        <div className="grid lg:min-h-[640px] lg:grid-cols-[.88fr_1.12fr]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[linear-gradient(145deg,#2B1B12,#422B1C_65%,#503522)] px-7 pb-9 pt-12 sm:px-11 sm:pb-12 sm:pt-16 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -bottom-24 -left-16 font-serif text-[270px] leading-none text-[#E9BD70]/[.045]">W</div>
            <div className="relative">
              <div className="mb-9 flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-[#E9BD70]"><span className="h-px w-8 bg-current" /> Woodique · Get in touch</div>
              <h2 id="contact-title" className="max-w-md font-serif text-[42px] font-normal leading-[1.08] tracking-[-.035em] text-[#FFF1D8] sm:text-[54px]">Let’s make your<br />space feel <i className="font-normal text-[#E9BD70]">special.</i></h2>
              <p className="mt-7 max-w-[330px] text-[12px] leading-7 tracking-[.035em] text-[#EADBC8]/80">Questions about a tray set, an order or choosing the right piece? Send us a message — we’ll be happy to help.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-[9px] uppercase tracking-[.13em] text-[#EADBC8]/75"><span className="inline-flex items-center gap-2 rounded-full border border-[#E9BD70]/25 px-3 py-2"><Leaf size={13} className="text-[#E9BD70]" /> Natural warmth</span><span className="inline-flex items-center gap-2 rounded-full border border-[#E9BD70]/25 px-3 py-2"><Package size={13} className="text-[#E9BD70]" /> Tray sets</span></div>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="relative mt-10 inline-flex w-fit items-center gap-4 border-t border-[#E9BD70]/30 pt-5 text-[#E9BD70] transition hover:text-[#FFF1D8]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9BD70]/40"><MessageCircle size={17} strokeWidth={1.4} /></span>
              <span><span className="block text-[8px] uppercase tracking-[.25em] text-[#D8C5AD]">Call or message</span><span className="mt-1 block text-[12px] tracking-[.08em]">0317 7348178</span></span><ArrowUpRight size={15} />
            </a>
          </div>

          <div className="bg-[#F3E9D8] px-6 py-9 text-[#2B1B12] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="mb-9 border-b border-[#8A6B48]/25 pb-6">
              <p className="mb-2 text-[8px] uppercase tracking-[.3em] text-[#987044]">Woodique · Correspondence</p>
              <h3 className="font-serif text-[30px] font-normal tracking-[-.02em] text-[#2B1B12]">Send an enquiry</h3>
              <p className="mt-2 text-[11px] leading-6 text-[#806C55]">Share a few details and send us your enquiry.</p>
            </div>
            <motion.form onSubmit={submit} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="relative">
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <label className="block"><span className="mb-1 block text-[8px] uppercase tracking-[.23em] text-[#987044]">01 / Your name</span><input className="w-full border-0 border-b border-[#A58A65]/50 bg-transparent px-0 py-3.5 text-[13px] tracking-wide text-[#2B1B12] outline-none placeholder:text-[#A18B70] focus:border-[#9A6B35] focus:ring-0" type="text" name="name" autoComplete="name" placeholder="Full name" value={form.name} onChange={update} required maxLength={80} /></label>
                <label className="block"><span className="mb-1 block text-[8px] uppercase tracking-[.23em] text-[#987044]">02 / Phone number</span><input className="w-full border-0 border-b border-[#A58A65]/50 bg-transparent px-0 py-3.5 text-[13px] tracking-wide text-[#2B1B12] outline-none placeholder:text-[#A18B70] focus:border-[#9A6B35] focus:ring-0" type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="03XX XXXXXXX" value={form.phone} onChange={update} required maxLength={25} /></label>
                <label className="block sm:col-span-2"><span className="mb-1 block text-[8px] uppercase tracking-[.23em] text-[#987044]">03 / Your message</span><textarea className="w-full min-h-[126px] resize-y border-0 border-b border-[#A58A65]/50 bg-transparent px-0 py-3.5 text-[13px] tracking-wide text-[#2B1B12] outline-none placeholder:text-[#A18B70] focus:border-[#9A6B35] focus:ring-0" name="message" placeholder="Tell us what you’re looking for..." value={form.message} onChange={update} required maxLength={1500} rows={4} /></label>
              </div>
              <button type="submit" className="group mt-9 flex min-h-[56px] w-full items-center justify-between rounded-full bg-[#392719] px-6 text-[9px] font-semibold uppercase tracking-[.22em] text-[#F3D79F] transition duration-300 hover:bg-[#503522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A6B35]"><span>Send</span><span className="flex items-center gap-3"><span className="hidden text-[8px] font-normal tracking-[.16em] text-[#D8C5AD] sm:inline">REVIEW & SEND</span><ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></button>
              <p className="mt-4 text-center text-[9px] leading-5 tracking-[.03em] text-[#806C55]">Your message will open in your messaging app, where you can review it before sending.</p>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
