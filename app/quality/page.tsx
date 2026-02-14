"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Award, Sprout, Factory, FlaskConical, Truck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";

const timeline = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "We partner with trusted farming communities across India's rice heartlands. Every paddy is traceable to its origin.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Processing",
    description:
      "State-of-the-art facilities with minimal intervention. We preserve the grain's natural goodness at every stage.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Testing",
    description:
      "Rigorous quality checks. From field to pack, every batch meets our exacting standards.",
    icon: FlaskConical,
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Sealed for freshness. Delivered with care. From our hands to your table.",
    icon: Truck,
  },
];

const certifications = [
  { name: "FSSAI Certified", icon: Shield },
  { name: "ISO 22000", icon: CheckCircle2 },
  { name: "Quality Assured", icon: Award },
];

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F2]">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative aspect-[2/1] overflow-hidden md:aspect-[21/9]">
          <Image
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80"
            alt="Rice processing facility"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-[#111]/50 to-[#111]/20" />
          <div className="absolute inset-0 flex items-end px-4 pb-10 sm:px-6 sm:pb-16 lg:px-16">
            <SectionReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
                Our Process
              </span>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Our Quality Promise
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
                Institutional standards. Transparent process. Trust built on every grain.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Tagline strip */}
        <section className="border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <SectionReveal>
              <p className="text-center font-display text-xl font-light leading-relaxed text-[#111111] md:text-3xl">
                From the moment the seed touches soil to the moment Tamaal reaches your kitchen — we control the journey.
              </p>
              <p className="mt-4 text-center text-base font-medium uppercase tracking-widest text-[#2F6F4F]">
                No shortcuts. No compromise.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Vertical timeline with connecting line */}
        <section className="mx-auto max-w-4xl px-4 py-12 pb-24 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative">
            {/* Vertical line — left of icons */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2F6F4F] via-[#A8D5BA] to-[#2F6F4F] sm:left-8 md:left-10" />

            {timeline.map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.08}>
                <div className="relative flex gap-4 pb-12 last:pb-0 sm:gap-6 md:gap-10 md:pb-16">
                  {/* Step indicator */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#2F6F4F] bg-white shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
                      <item.icon className="h-6 w-6 text-[#2F6F4F] sm:h-7 sm:w-7" />
                    </div>
                    <span className="mt-1.5 font-mono text-xs font-semibold text-[#2F6F4F]">
                      {item.step}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="min-w-0 flex-1">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 md:p-8"
                    >
                      <h3 className="font-display text-xl font-semibold text-[#111111] sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-[#6B7280] sm:mt-4">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* Certifications — premium band */}
        <section className="border-t border-[#E5E7EB] bg-[#2F6F4F] py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Trust & Compliance
              </p>
              <h2 className="mt-2 text-center font-display text-3xl font-semibold text-white md:text-4xl">
                Certified Quality
              </h2>
            </SectionReveal>
            <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
              {certifications.map(({ name, icon: Icon }, i) => (
                <SectionReveal key={name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 px-6 py-8 backdrop-blur-sm sm:px-8 sm:py-10"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="mt-5 font-display text-xl font-semibold text-white">
                      {name}
                    </h4>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F4F7F2] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-[#6B7280]">Questions about our quality or process?</p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-full bg-[#2F6F4F] px-8 py-3.5 font-medium text-white transition-all hover:bg-[#4E8A68] hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}