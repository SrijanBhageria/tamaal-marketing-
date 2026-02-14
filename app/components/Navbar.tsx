"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeHero = pathname === "/" && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHomeHero
            ? "bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]/60 shadow-sm"
            : "bg-gradient-to-b from-black/50 via-black/30 to-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
              isHomeHero
                ? "text-white hover:text-white/90"
                : "text-[#2F6F4F] hover:text-[#4E8A68]"
            }`}
          >
            Tamaal
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                  isHomeHero
                    ? pathname === link.href
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                    : pathname === link.href
                      ? "text-[#2F6F4F]"
                      : "text-[#6B7280] hover:text-[#2F6F4F]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1.5 left-0 h-px w-full ${
                      isHomeHero ? "bg-white" : "bg-[#2F6F4F]"
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                isHomeHero
                  ? "border-2 border-white text-white hover:bg-white hover:text-[#1a2e24]"
                  : "bg-[#2F6F4F] text-white hover:bg-[#4E8A68] hover:shadow-lg"
              }`}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button — 44px min touch target */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden ${isHomeHero ? "text-white" : "text-[#111111]"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-white md:hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="flex flex-col gap-6 p-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-2xl font-medium ${
                    pathname === link.href ? "text-[#2F6F4F]" : "text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-[#2F6F4F] px-6 py-3 text-center font-medium text-white"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
