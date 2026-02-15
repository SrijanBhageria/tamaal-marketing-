"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-cream)]/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
      
      {/* Main Footer Content */}
      <Container className="relative">
        <div className="py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 font-heading text-xl font-medium text-[var(--color-primary)] mb-3"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                Tamaal
              </Link>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5 max-w-[260px]">
                Premium Indian rice, sustainably sourced from the finest farms.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-warm)'];
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-[var(--color-background)] border border-[var(--color-border-light)] flex items-center justify-center text-[var(--color-text-muted)] transition-all duration-300"
                      style={{ 
                        ['--hover-color' as string]: colors[index]
                      }}
                      aria-label={social.label}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: colors[index],
                        borderColor: colors[index],
                        color: 'white'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                Contact
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@tamaal.com"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                  >
                    <Mail size={14} />
                    <span>hello@tamaal.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                  >
                    <Phone size={14} />
                    <span>+91 123 456 7890</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
                    <MapPin size={14} className="flex-shrink-0" />
                    <span>New Delhi, India</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                Newsletter
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-3">
                Subscribe for product updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[var(--color-background)] border border-[var(--color-border-warm)] rounded-lg text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors duration-200"
                />
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-soft)] text-white rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="relative border-t border-[var(--color-border-light)]">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[var(--color-text-muted)] text-xs flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--color-secondary)]" />
              &copy; {currentYear} Tamaal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
