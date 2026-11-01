import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, ShoppingBag, X, ArrowUpRight, Leaf } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { useCatalog } from "../context/CatalogContext";
import { formatPrice } from "../data/products";

const ease = [0.16, 1, 0.3, 1];

export default function Collection() {
  const [active, setActive] = useState("All Tray Sets");
  const { products, categories, loading, error, refresh } = useCatalog();
  const filters = ["All Tray Sets", ...categories];
  const { wishlist: favorites, cart, addToCart, toggleWishlist, cartCount } = useShop();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [cartMessage, setCartMessage] = useState("");
  const reduceMotion = useReducedMotion();
  const filtered = active === "All Tray Sets" ? products : products.filter((p) => p.category === active);
  const shown = showAll ? filtered : filtered.slice(0, 4);

  const addProductToCart = (product) => {
    addToCart(product.id, 1);
    setCartMessage(product.name);
  };
  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <section id="collections" className="relative isolate scroll-mt-20 overflow-hidden bg-[#F3EBDD] text-[#2B1B12]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[480px] w-[480px] rounded-full bg-[#C69A5B]/[.12] blur-[120px]" />
        <div className="absolute -right-40 top-[42%] h-[420px] w-[420px] rounded-full bg-[#8A6036]/[.10] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A77A43]/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8, ease }} className="mb-12 grid gap-7 sm:mb-16 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.32em] text-[#967044] sm:text-[10px]"><span className="h-px w-8 bg-current" /> The Woodique collection</p>
            <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[.94] tracking-[-.06em]">Everyday pieces, <span className="italic text-[#A8793E]">naturally beautiful.</span></h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-lg text-sm leading-7 text-[#756858] sm:text-base">Explore wooden tray sets selected to bring warmth, order and effortless style to your home — from serving guests to the little rituals of every day.</p>
            <div className="mt-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[.2em] text-[#967044]"><Leaf size={14} strokeWidth={1.5} /> Thoughtful design for everyday living</div>
          </div>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 border-y border-[#A77A43]/25 py-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#806C53]">Find your style</span>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-end sm:pb-0" role="group" aria-label="Filter collection by category">
            {filters.map((filter) => <button key={filter} type="button" onClick={() => { setActive(filter); setShowAll(false); setSelectedProduct(null); }} aria-pressed={active === filter} className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[.12em] transition-all duration-300 sm:px-5 sm:text-[10px] ${active === filter ? "border-[#392719] bg-[#392719] text-[#F6E8CE] shadow-md" : "border-[#C9B99F] bg-white/45 text-[#6B5A45] hover:border-[#9A7040] hover:bg-white/80"}`}>{filter}</button>)}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-end gap-2 text-[9px] font-medium uppercase tracking-[.16em] text-[#806C53]"><ShoppingBag size={13} /> <a href="/cart" className="underline underline-offset-4 transition-colors hover:text-[#392719]">Your bag · {cartCount}</a></div>

        {loading && <p className="py-12 text-center font-serif text-xl text-[#806C53]">Preparing the collection…</p>}
        {error && <div className="my-6 border border-rose-300/60 bg-white/60 p-5 text-center text-sm text-[#8A4038]">{error}<button type="button" onClick={refresh} className="ml-3 underline">Try again</button></div>}
        {!loading && !error && products.length === 0 && <div className="border-y border-[#A77A43]/25 bg-white/30 px-6 py-20 text-center"><p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#967044]">A new collection is on its way</p><h3 className="mt-4 font-serif text-3xl sm:text-4xl">Something thoughtful is taking shape.</h3><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#756858]">We are preparing the Woodique tray collection. Please check back soon to discover the pieces.</p></div>}

        <motion.div layout className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7">
          <AnimatePresence mode="popLayout">
            {shown.map((product, index) => <motion.article layout key={product.id} initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .45, delay: reduceMotion ? 0 : index * .045, ease }} className="group min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#B99A70]/35 bg-[#E6D9C5] shadow-[0_12px_32px_rgba(61,42,22,.10)]">
                <button type="button" onClick={() => setSelectedProduct((current) => current === product.id ? null : product.id)} aria-expanded={selectedProduct === product.id} aria-label={`Show purchase options for ${product.name}`} className="absolute inset-0 z-[1] h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#A8793E]">
                  <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]" />
                </button>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#24170F]/25 via-transparent to-white/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-[6px] z-[3] border border-white/35 transition-inset duration-500 group-hover:inset-[10px]" />
                {product.tag && <span className="pointer-events-none absolute left-2.5 top-2.5 z-[5] bg-[#F5EBDD]/95 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[.13em] text-[#65451F] sm:left-4 sm:top-4 sm:text-[9px]">{product.tag}</span>}
                <button type="button" onClick={() => toggleWishlist(product.id)} aria-label={favorites.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={favorites.includes(product.id)} className={`absolute right-2.5 top-2.5 z-[6] flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 sm:right-4 sm:top-4 sm:h-10 sm:w-10 ${favorites.includes(product.id) ? "border-[#A8793E] bg-[#A8793E] text-white" : "border-white/80 bg-[#F5EBDD]/90 text-[#392719] hover:scale-105 hover:bg-white"}`}><Heart size={16} fill={favorites.includes(product.id) ? "currentColor" : "none"} strokeWidth={1.6} /></button>
                <AnimatePresence>
                  {selectedProduct === product.id && <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: .25 }} className="absolute inset-x-2 bottom-2 z-[7] flex flex-col gap-2 sm:inset-x-4 sm:bottom-4">
                    {!isInCart(product.id) ? <button type="button" onClick={() => addProductToCart(product)} className="flex min-h-10 items-center justify-center gap-2 border border-[#F5EBDD]/70 bg-[#392719]/95 px-2 py-2.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[#F5EBDD] shadow-lg backdrop-blur-md transition-colors hover:bg-[#624326] sm:text-[10px]"><ShoppingBag size={13} /> Add to bag</button> : <a href="/cart" onClick={() => setSelectedProduct(null)} className="flex min-h-10 items-center justify-center gap-2 border border-[#F5EBDD]/70 bg-[#F5EBDD]/95 px-2 py-2.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[#392719] shadow-lg backdrop-blur-md sm:text-[10px]"><ShoppingBag size={13} /> In bag · View</a>}
                    <a href={`/product/${product.id}`} onClick={() => setSelectedProduct(null)} className="flex min-h-10 items-center justify-center bg-[#F5EBDD]/95 px-2 py-2.5 text-[9px] font-semibold uppercase tracking-[.12em] text-[#392719] shadow-lg backdrop-blur-md transition-colors hover:bg-white sm:text-[10px]">View details <ArrowUpRight size={12} className="ml-1" /></a>
                    <button type="button" onClick={() => setSelectedProduct(null)} aria-label="Close purchase options" className="absolute -right-1 -top-[6.5rem] flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-[#F5EBDD]/95 text-[#30271A] shadow-md sm:-right-2 sm:-top-[6.5rem]"><X size={14} /></button>
                  </motion.div>}
                </AnimatePresence>
              </div>
              <div className="w-full pt-4 text-left sm:pt-5">
                <div className="mb-1.5 flex items-start justify-between gap-2"><h3 className="font-serif text-[15px] leading-snug text-[#392719] sm:text-lg">{product.name}</h3><span className="mt-1 hidden text-[8px] uppercase tracking-[.14em] text-[#967044] sm:inline">{product.category}</span></div>
                <p className="text-[11px] leading-5 text-[#817362] sm:text-xs">A considered wooden detail for serving, styling and everyday use.</p>
                <div className="mt-3"><span className="text-xs font-semibold tracking-wide text-[#65451F] sm:text-sm">{formatPrice(product.price)}</span></div>
              </div>
            </motion.article>)}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#A77A43]/25 pt-7 sm:mt-16 sm:flex-row">
          <p className="text-center text-[9px] font-medium uppercase tracking-[.15em] text-[#806C53] sm:text-left">{products.length === 0 ? "New pieces coming soon" : `Showing ${shown.length} of ${filtered.length} tray sets`}</p>
          {filtered.length > 4 && <button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#9B7B46]/55 px-6 py-3 text-[9px] font-semibold uppercase tracking-[.18em] text-[#4B3920] transition-all duration-300 hover:border-[#392719] hover:bg-[#392719] hover:text-[#F8E9BE]">{showAll ? "Show featured sets" : "View all tray sets"} <ArrowUpRight size={14} /></button>}
        </div>

        <AnimatePresence>{cartMessage && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 border border-[#B98536]/40 bg-[#392719] px-5 py-3 text-xs text-[#F8E9BE] shadow-2xl">Added {cartMessage} to your bag.<button type="button" onClick={() => setCartMessage("")} className="ml-4 underline underline-offset-4">Dismiss</button></motion.div>}</AnimatePresence>
      </div>
    </section>
  );
}
