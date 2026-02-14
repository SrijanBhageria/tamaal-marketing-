"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { FadeInUp, FadeIn } from "@/app/components/ui/animations";
import { ArrowRight, Leaf, Heart, Globe, Users, Award } from "lucide-react";
import Link from "next/link";

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <>
      {/* ─── 01. Hero ─── Full-screen typographic statement */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-cream)]/40 to-[var(--color-background)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-secondary)]/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-accent-soft)]/30 to-transparent" />
        
        {/* Giant background text */}
        <motion.span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[22rem] md:text-[32rem] lg:text-[42rem] font-bold leading-none select-none pointer-events-none"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.04
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          74
        </motion.span>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-32 right-[20%] w-3 h-3 rounded-full bg-[var(--color-secondary)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
        <motion.div 
          className="absolute bottom-40 left-[15%] w-2 h-2 rounded-full bg-[var(--color-primary)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <motion.p
              className="flex items-center gap-3 text-[var(--color-primary)] font-medium tracking-widest uppercase text-sm mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-[var(--color-secondary)]" />
              Est. 1974 &mdash; Our Story
            </motion.p>

            <motion.h1
              className="font-heading text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.08] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              A family&apos;s promise,{" "}
              <span className="text-[var(--color-primary)]">
                grown into a national trust.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              What started in the rice fields of Punjab is now on the shelves 
              of homes across India. Same values. Same purity. Bigger reach.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ─── 02. Big Statement ─── Full-width quote */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        {/* Green gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-soft)]" />
        
        {/* Decorative background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-secondary)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        
        {/* Floating decorative dots */}
        <motion.div 
          className="absolute top-12 left-[15%] w-2 h-2 rounded-full bg-white/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-12 right-[20%] w-3 h-3 rounded-full bg-[var(--color-secondary)]/40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <Container className="relative">
          <FadeInUp>
            <blockquote className="max-w-4xl mx-auto text-center">
              {/* Decorative quote mark */}
              <motion.span 
                className="block font-heading text-8xl text-white/10 leading-none mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                &ldquo;
              </motion.span>
              <p className="font-heading text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-snug text-white">
                We don&apos;t just sell rice. We carry forward a 
                legacy of trust that was built one <span className="text-[var(--color-secondary-soft)]">honest grain</span> at a time.
              </p>
              <footer className="mt-8 flex items-center justify-center gap-4 text-white/70">
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
                <div>
                  <span className="font-medium text-white">Rajesh Kumar</span>
                  <span className="mx-2">&middot;</span>
                  Founder &amp; Chairman
                </div>
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
              </footer>
            </blockquote>
          </FadeInUp>
        </Container>
      </section>

      {/* ─── 03. Bento Grid ─── Modern asymmetric layout */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background with warm tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-sand)]/20 to-[var(--color-background)]" />
        
        <Container className="relative">
          <FadeInUp className="mb-14">
            <p className="flex items-center gap-3 text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium max-w-md">
              Built on <span className="text-[var(--color-primary)]">four pillars.</span>
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Large card — spans 2 cols */}
            <FadeInUp className="md:col-span-2">
              <motion.div
                className="group relative h-full p-10 rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)' }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-[var(--color-secondary)]/20" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--color-warm)]/10 blur-3xl" />
                <div className="relative z-10">
                  <Heart className="w-8 h-8 text-[var(--color-secondary-soft)] mb-6" />
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">Purity First</h3>
                  <p className="text-white/70 max-w-md leading-relaxed">
                    No additives. No preservatives. No shortcuts. 
                    Every grain is delivered exactly as nature intended it.
                  </p>
                </div>
              </motion.div>
            </FadeInUp>

            {/* Tall card */}
            <FadeInUp delay={0.1}>
              <motion.div
                className="group h-full p-8 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-cream)]/50 border border-[var(--color-border-warm)]"
                whileHover={{ y: -4 }}
              >
                <Globe className="w-8 h-8 text-[var(--color-warm)] mb-6" />
                <h3 className="font-heading text-xl font-semibold mb-3">Sustainably Grown</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                  We protect the land that feeds us. Our farming practices 
                  ensure the soil stays fertile for generations.
                </p>
                <div className="mt-auto pt-4 border-t border-[var(--color-border-warm)]">
                  <p className="font-heading text-3xl font-medium text-[var(--color-warm)]">100%</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Sustainable sourcing by 2025</p>
                </div>
              </motion.div>
            </FadeInUp>

            {/* Small card */}
            <FadeInUp delay={0.15}>
              <motion.div
                className="group h-full p-8 rounded-3xl bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-surface)] border border-[var(--color-accent-muted)]/30"
                whileHover={{ y: -4 }}
              >
                <Users className="w-8 h-8 text-[var(--color-primary)] mb-6" />
                <h3 className="font-heading text-xl font-semibold mb-3">Farmer-First</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  Direct partnerships with 2,000+ farmers. Fair prices, 
                  no middlemen, and shared prosperity.
                </p>
              </motion.div>
            </FadeInUp>

            {/* Wide card — spans 2 cols */}
            <FadeInUp delay={0.2} className="md:col-span-2">
              <motion.div
                className="group h-full p-8 rounded-3xl bg-gradient-to-r from-[var(--color-cream)] to-[var(--color-surface)] border border-[var(--color-border-warm)] flex flex-col sm:flex-row sm:items-center gap-8"
                whileHover={{ y: -4 }}
              >
                <div className="flex-1">
                  <Award className="w-8 h-8 text-[var(--color-secondary)] mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">Relentless Quality</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    ISO-certified facilities, 50+ lab tests per batch, 
                    and a quality team that rejects anything below premium.
                  </p>
                </div>
                <div className="flex gap-6 sm:border-l sm:border-[var(--color-border-warm)] sm:pl-8">
                  <div>
                    <p className="font-heading text-3xl font-medium text-[var(--color-secondary)]">50+</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Lab Tests</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-medium text-[var(--color-secondary)]">A+</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Grade</p>
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* ─── 04. Decorative Divider ─── */}
      <div className="py-8">
        <Container>
          <div className="flex items-center justify-center">
            <motion.div 
              className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--color-primary)]"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[var(--color-primary)] mx-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            <motion.div 
              className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--color-primary)]"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </Container>
      </div>

      {/* ─── 05. Our Story ─── Interactive Timeline */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
        <Container>
          <FadeInUp className="mb-16">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Our Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium max-w-lg">
              Milestones that shaped who we are.
            </h2>
          </FadeInUp>

          {/* Horizontal scrolling year selector on mobile, vertical on desktop */}
          <div className="relative">
            {/* Progress line - desktop */}
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-[var(--color-border)]">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[var(--color-primary)]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-6 lg:space-y-0">
              {[
                { year: "1974", title: "The Beginning", text: "Founded in Punjab with a single mill and a vision to bring premium rice to every Indian household.", highlight: "Where it all started" },
                { year: "1990", title: "National Reach", text: "Expanded operations to 10+ states, building a distribution network that brought Tamaal to millions.", highlight: "10+ states" },
                { year: "2005", title: "Quality Certified", text: "Achieved ISO 9001 certification, setting a new benchmark for rice quality in India.", highlight: "ISO 9001" },
                { year: "2015", title: "Going Green", text: "Launched our sustainable farming initiative, partnering directly with 2,000+ farmers.", highlight: "2,000+ farmers" },
                { year: "2024", title: "A New Chapter", text: "Embracing technology and digital-first distribution to reach the modern Indian consumer.", highlight: "Digital-first" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                    {/* Year bubble */}
                    <div className="lg:col-span-2 flex items-center gap-4 lg:justify-end mb-4 lg:mb-0">
                      <motion.div
                        className="relative z-10 w-[120px] lg:w-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          className="px-5 py-3 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border-light)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all duration-300 cursor-default"
                          whileHover={{ y: -2 }}
                        >
                          <span className="font-heading text-2xl lg:text-3xl font-semibold text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                            {item.year}
                          </span>
                        </motion.div>
                        {/* Connector dot - desktop */}
                        <motion.div
                          className="hidden lg:block absolute -right-[29px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-surface)] border-4 border-[var(--color-primary)] z-20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                        />
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <motion.div
                      className="lg:col-span-10 lg:pl-12"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-6 lg:p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border-light)] group-hover:border-[var(--color-primary)]/30 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <h3 className="font-heading text-xl lg:text-2xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                            {item.title}
                          </h3>
                          <motion.span
                            className="px-3 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.4 }}
                          >
                            {item.highlight}
                          </motion.span>
                        </div>
                        <p className="text-[var(--color-text-muted)] leading-relaxed">
                          {item.text}
                        </p>
                        
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 06. Team ─── Minimal modern cards */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <Container>
          <FadeInUp className="mb-14">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-4">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium max-w-md">
              The people behind every grain.
            </h2>
          </FadeInUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rajesh Kumar", role: "Founder & Chairman", initials: "RK" },
              { name: "Priya Sharma", role: "Chief Executive Officer", initials: "PS" },
              { name: "Amit Patel", role: "Head of Quality", initials: "AP" },
              { name: "Sunita Reddy", role: "Sustainability Lead", initials: "SR" },
            ].map((person, i) => (
              <FadeInUp key={i} delay={i * 0.08}>
                <motion.div
                  className="group p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/20 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-5">
                    <span className="font-heading text-lg font-semibold text-[var(--color-primary)]">
                      {person.initials}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{person.name}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm">{person.role}</p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 07. CTA ─── Clean, confident */}
      <section className="py-24 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInUp>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                Taste the tradition.
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-white/70 text-lg mb-10">
                Explore our range of premium rice varieties and bring 
                five decades of quality to your kitchen.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Link href="/products">
                <motion.button
                  className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-full font-medium inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Products
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </FadeInUp>
          </div>
        </Container>
      </section>
    </>
  );
}
