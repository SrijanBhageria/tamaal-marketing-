"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--color-surface)]/90 backdrop-blur-premium shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-20 lg:h-24" aria-label="Main navigation">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group"
            >
              <motion.span 
                className="font-heading text-2xl lg:text-[1.75rem] font-medium text-[var(--color-primary)] tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Tamaal
              </motion.span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-primary)]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <NavLink 
                    href={link.href} 
                    isActive={pathname === link.href}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-primary-dark)]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[var(--color-text-primary)]/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[var(--color-surface)] z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-20 px-6 border-b border-[var(--color-border-light)]">
                  <Link 
                    href="/" 
                    className="font-heading text-xl font-medium text-[var(--color-primary)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tamaal
                  </Link>
                  <motion.button
                    className="p-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-10 overflow-y-auto" aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index + 0.1, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          className={`group flex items-center justify-between py-4 px-4 rounded-xl text-lg transition-all duration-300 ${
                            pathname === link.href
                              ? "bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium"
                              : "text-[var(--color-text-primary)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{link.label}</span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="text-[var(--color-primary)]"
                          >
                            <ArrowRight size={18} />
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <motion.div 
                  className="px-6 pb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      className="w-full py-4 bg-[var(--color-primary)] text-white text-base font-medium rounded-xl flex items-center justify-center gap-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      Get in Touch
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24" />
    </>
  );
}

// NavLink component with premium hover animation
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative py-2 text-[0.95rem] font-medium tracking-[-0.01em] transition-colors duration-300 ${
        isActive
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
      }`}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-primary)] rounded-full"
          initial={{ width: isActive ? "100%" : "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </span>
    </Link>
  );
}
