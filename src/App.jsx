import { useEffect, useRef, useState } from "react";
import About from "./components/about";
import Collection from "./components/Collection";
import Home from "./components/home";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Preloader from "./components/preloader";
import AuthPage from "./pages/AuthPage";
import Account from "./pages/Account";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { ShopProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./components/ToastProvider";
import { CatalogProvider } from "./context/CatalogContext";

const normalizePath = pathname => pathname.replace(/\/+$/, "") || "/";
const ROUTES = new Set(["/", "/about", "/login", "/register", "/account", "/cart", "/wishlist"]);
const isKnownRoute = pathname => ROUTES.has(pathname) || /^\/product\/[a-f0-9]{24}$/.test(pathname);

function AppContent() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [loading, setLoading] = useState(true);
  const transitionTimer = useRef(null);
  useEffect(() => {
    const baseUrl = "https://woodique.vercel.app";
    const routeMeta = {
      "/": { title: "Woodique | Wooden Tray Sets", description: "Discover handcrafted wooden tray sets designed to bring warmth and function to your home.", index: true },
      "/about": { title: "About Woodique | Our Story", description: "Discover Woodique’s approach to thoughtful woodworking, practical design and a considered shopping experience.", index: true },
      "/login": { title: "Login | Woodique", description: "Sign in to your Woodique account.", index: false },
      "/register": { title: "Create Account | Woodique", description: "Create your Woodique account.", index: false },
      "/account": { title: "My Account | Woodique", description: "Manage your Woodique account and delivery details.", index: false },
      "/cart": { title: "Shopping Bag | Woodique", description: "Review your Woodique shopping bag.", index: false },
      "/wishlist": { title: "Wishlist | Woodique", description: "View your saved wooden pieces at Woodique.", index: false }
    };
    const productRoute = /^\/product\/[a-f0-9]{24}$/.test(path);
    const meta = routeMeta[path] || (productRoute
      ? { title: "Wooden Tray Set | Woodique", description: "Explore this wooden tray set at Woodique.", index: true }
      : routeMeta["/"]);
    document.title = meta.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = meta.index ? "index, follow, max-image-preview:large" : "noindex, nofollow";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = baseUrl + path;
  }, [path]);


  useEffect(() => {
    transitionTimer.current = window.setTimeout(() => setLoading(false), 1750);
    return () => window.clearTimeout(transitionTimer.current);
  }, []);

  useEffect(() => {
    const finishTransition = (delay, hash = "") => {
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = window.setTimeout(() => {
        setLoading(false);
        if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, delay);
    };
    const handleNavigation = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      const nextPath = normalizePath(destination.pathname);
      if (!isKnownRoute(nextPath)) return;
      if (nextPath === path && !destination.hash) return;
      event.preventDefault();
      window.history.pushState({}, "", destination.pathname + destination.search + destination.hash);
      setPath(nextPath);
      if (nextPath !== path) {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "instant" });
        finishTransition(850, destination.hash);
      } else if (destination.hash) {
        document.getElementById(decodeURIComponent(destination.hash.slice(1)))?.scrollIntoView({ behavior: "smooth" });
      }
    };
    const handleBackForward = () => {
      const nextPath = normalizePath(window.location.pathname);
      if (!isKnownRoute(nextPath)) return;
      setPath(nextPath);
      if (nextPath !== path) {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "instant" });
        finishTransition(750, window.location.hash);
      }
    };
    document.addEventListener("click", handleNavigation);
    window.addEventListener("popstate", handleBackForward);
    return () => {
      document.removeEventListener("click", handleNavigation);
      window.removeEventListener("popstate", handleBackForward);
    };
  }, [path]);

  const productMatch = path.match(/^\/product\/([a-f0-9]{24})$/);
  const page = productMatch ? <ProductDetails productId={productMatch[1]} /> : path === "/about" ? <About /> : path === "/login" ? <AuthPage mode="login" /> : path === "/register" ? <AuthPage mode="register" />  : path === "/account" ? <Account /> : path === "/cart" ? <Cart /> : path === "/wishlist" ? <Wishlist /> : <><Home /><Collection /></>;

  return <>
    <Nav />
    {page}
    <Footer />
    <Preloader visible={loading} />
  </>;
}

export default function App() {
  return <AuthProvider><ToastProvider><CatalogProvider><ShopProvider><AppContent /></ShopProvider></CatalogProvider></ToastProvider></AuthProvider>;
}
