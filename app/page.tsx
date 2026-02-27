"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Droplets, Sun } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoHero from "./components/VideoHero";
import GrainParticles from "./components/GrainParticles";
import SectionReveal from "./components/SectionReveal";

const pillars = [
  {
    icon: Leaf,
    title: "Soil to Table",
    description:
      "Every grain is thoughtfully selected through a structured evaluation process, ensuring uniform quality, dependable performance, and a standard you can trust in every meal.",
    delay: 0,
  },
  {
    icon: Droplets,
    title: "Pure & Natural",
    description:
      "Handled with care to preserve natural aroma, strength, and cooking character — clean, wholesome rice that stays true to its nature while meeting modern quality expectations.",
    delay: 0.1,
  },
  {
    icon: Sun,
    title: "Consistent by Commitment",
    description:
      "Driven by disciplined quality practices and deep respect for the grain, Tamaal delivers dependable rice that performs beautifully — from everyday home cooking to large-scale kitchens.",
    delay: 0.2,
  },
];

export default function Home() {
  return (
    <div className="bg-[#F4F7F2]">
      <GrainParticles />
      <Navbar />

      <main>
        {/* Cinematic Video Hero */}
        <VideoHero />

        {/* Post-hero transition — solid background continues */}
        <div className="min-h-[400px] bg-[#F4F7F2]">
          {/* Brand philosophy — editorial layout */}
          <SectionReveal className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-display text-3xl font-light leading-relaxed text-[#111111] md:text-4xl">
                Where soil meets soul. Where grain becomes grace.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-[#6B7280]">
                Tamaal is not just rice. It is the quiet confidence of consistency, the comfort of familiar meals, and the discipline of careful selection — brought together to serve kitchens with reliability, day after day.
              </p>
            </div>
          </SectionReveal>

          {/* Large full-width image block — rice grains */}
          <SectionReveal delay={0.1} className="mt-24">
            <div className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
              <Image
                src="/pexels-polina-tankilevitch-4110255 (1).jpg"
                alt="Varieties of rice from India's paddy lands"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Overlay for text visibility on both light (white/cream) and dark (brown) areas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/85 via-[#111]/50 to-[#111]/35" />
              <div className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16">
                <p className="font-display max-w-2xl text-2xl font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-3xl">
                  &ldquo;From everyday meals to festive feasts — Steam or Sella, Tamaal perfects every grain.&rdquo;
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  Varieties inspired by India&rsquo;s rice heritage. From India&rsquo;s richness to every plate it reaches.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* 3 core pillars — animated cards */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description, delay }) => (
                <SectionReveal key={title} delay={delay}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A8D5BA]/30 text-[#2F6F4F] transition-colors group-hover:bg-[#A8D5BA]/50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-[#111111]">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#6B7280]">
                      {description}
                    </p>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </section>

          {/* Sustainability visual section */}
          <SectionReveal>
            <div className="relative overflow-hidden bg-[#2F6F4F] py-24">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              <div className="relative mx-auto max-w-4xl px-6 text-center text-white lg:px-8">
                <h2 className="font-display text-4xl font-semibold md:text-5xl">
                  Built on Trust
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-white/90">
                  Trust is earned through consistency, not claims. At Tamaal, every grain is selected, evaluated, and processed with disciplined quality standards to ensure reliable performance in every meal.
                </p>
                <p className="mt-4 text-base font-light leading-relaxed text-white/80">
                  No shortcuts. No exaggeration. Only honest processes, consistent quality, and a commitment to deliver rice you can depend on every single time.
                </p>
                <Link
                  href="/quality"
                  className="mt-10 inline-block rounded-full border-2 border-white/50 px-8 py-3 font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Our Quality Promise
                </Link>
              </div>
            </div>
          </SectionReveal>

          {/* Soft CTA block */}
          <SectionReveal>
            <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
              <h2 className="font-display text-4xl font-semibold text-[#111111]">
                Ready to Experience Tamaal?
              </h2>
              <p className="mt-4 text-[#6B7280]">
                Join us in bringing premium Indian rice to tables nationwide.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#2F6F4F] px-8 py-3.5 font-medium text-white transition-all hover:bg-[#4E8A68] hover:shadow-lg"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-[#E5E7EB] bg-white px-8 py-3.5 font-medium text-[#111111] transition-colors hover:border-[#2F6F4F] hover:text-[#2F6F4F]"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
