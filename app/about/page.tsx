"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F2]">
      <Navbar />

      <main className="pt-20">
        {/* Hero — cinematic quote */}
        <section className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <Image
            src="/pexels-mart-production-8108067.jpg"
            alt="Four varieties of rice in ceramic bowls — wild, white, brown, and red"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-[#111]/50 to-[#111]/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
            <SectionReveal>
              <Quote className="mx-auto h-8 w-8 text-white/40 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <blockquote className="mt-3 font-display max-w-4xl text-center text-2xl font-light leading-snug text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                We didn&apos;t invent rice. We just decided to honour it.
              </blockquote>
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Our story
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Story — editorial two-column */}
        <section className="border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
              <SectionReveal>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#2F6F4F]">
                  Who we are
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
                  Born from the soil
                </h2>
                <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                  <p className="text-base leading-relaxed text-[#6B7280] sm:text-lg">
                    Tamaal was born from a simple belief: Indian rice deserves to be
                    celebrated at the level it has always deserved. For generations,
                    our farmers have tended to these grains with care — we&apos;re here to
                    bring that care to every packet, every plate.
                  </p>
                  <p className="text-base leading-relaxed text-[#6B7280] sm:text-lg">
                    We blend tradition with modern quality assurance. Old-world
                    values meet new-world standards. The result? Rice that feels
                    both timeless and trustworthy.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-[#A8D5BA]/30" aria-hidden />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/pexels-polina-tankilevitch-4110253.jpg"
                      alt="Red rice in a wooden spoon — born from the soil"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Pull quote — full-bleed green */}
        <section className="bg-[#2F6F4F] py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-center font-display text-xl font-light leading-relaxed text-white sm:text-2xl md:text-3xl lg:text-4xl">
                We&apos;re not a startup. We&apos;re not a corporation. We&apos;re custodians of
                something that has fed families for centuries — and we take that
                responsibility seriously.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Mission & Vision — cards with icons */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionReveal>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#2F6F4F]">
              What drives us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#111111] md:text-5xl">
              Mission & Vision
            </h2>
          </SectionReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <SectionReveal delay={0}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-10 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#A8D5BA]/20" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6F4F] text-white">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-[#111111]">
                    Our Mission
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#6B7280]">
                    To make premium Indian rice accessible without compromise —
                    quality that families can trust, tables can celebrate.
                  </p>
                </div>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-10 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#C4A962]/15" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6F4F] text-white">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-[#111111]">
                    Our Vision
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#6B7280]">
                    A nation where every grain tells a story. Where Tamaal becomes
                    synonymous with trust, warmth, and the richness of India.
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="mt-20 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#2F6F4F] px-10 py-4 font-medium text-white transition-all hover:bg-[#4E8A68] hover:shadow-lg"
              >
                Partner With Us
              </Link>
            </div>
          </SectionReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}