"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";

const categories = ["All", "Basmati", "Traditional", "Specialty"];

const products = [
  {
    id: 1,
    name: "Tamaal Supreme Basmati",
    category: "Basmati",
    description: "Aged for 18 months. Long grains, delicate fragrance.",
    accent: "from-[#2F6F4F] to-[#4E8A68]",
    initial: "S",
    pattern: "grain-light",
  },
  {
    id: 2,
    name: "Tamaal Golden Sona",
    category: "Traditional",
    description: "The everyday classic. Fluffy, versatile, trusted.",
    accent: "from-[#C4A962] to-[#a89050]",
    initial: "G",
    pattern: "grain-warm",
  },
  {
    id: 3,
    name: "Tamaal Heritage Red",
    category: "Specialty",
    description: "Nutrient-rich. Earthy flavour. Ancient grains.",
    accent: "from-[#6B4423] to-[#8B5A2B]",
    initial: "H",
    pattern: "grain-earth",
  },
  {
    id: 4,
    name: "Tamaal Royal Basmati",
    category: "Basmati",
    description: "Premium export grade. Extra-long, aromatic.",
    accent: "from-[#2F6F4F] via-[#3d7a5a] to-[#1a4d35]",
    initial: "R",
    pattern: "grain-deep",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F4F7F2]">
      <Navbar />

      <main className="pt-20">
        {/* Product hero */}
        <section className="relative aspect-[3/1] overflow-hidden bg-[#2F6F4F]">
          <Image
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80"
            alt="Premium rice grains"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F6F4F]/90 to-[#2F6F4F]/60" />
          <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-16">
            <SectionReveal>
              <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
                Our Grains
              </h1>
              <p className="mt-3 max-w-xl text-base text-white/90 sm:mt-4 sm:text-lg">
                A range crafted for every kitchen. Quality you can see, taste, and trust.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Category tabs */}
        <section className="sticky top-20 z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl justify-center gap-2 overflow-x-auto px-4 py-3 lg:px-8 lg:py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[44px] shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-all touch-manipulation ${
                  activeCategory === cat
                    ? "bg-[#2F6F4F] text-white"
                    : "text-[#374151] bg-[#F4F7F2] hover:bg-[#E5E7EB] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product grid — design-only cards, no images */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <SectionReveal delay={i * 0.05}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Designed card header — gradient + pattern + initial */}
                      <div
                        className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${product.accent}`}
                      >
                        {/* Subtle grain pattern overlay */}
                        <div
                          className="absolute inset-0 opacity-[0.08]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h2M4 18h2M8 22h2M12 16h2M16 20h2M20 18h2M24 22h2M28 16h2M32 20h2M36 18h2M2 24h2M6 28h2M10 26h2M14 30h2M18 24h2M22 28h2M26 26h2M30 30h2M34 24h2M38 28h2' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                          }}
                        />
                        {/* Soft radial highlight */}
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
                        {/* Large initial */}
                        <span className="font-display text-[8rem] font-light leading-none text-white/90 drop-shadow-sm md:text-[9rem]">
                          {product.initial}
                        </span>
                        {/* Category pill */}
                        <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/15 px-3 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-[#111111]">
                          {product.name}
                        </h3>
                        <p className="mt-2 leading-relaxed text-[#6B7280]">
                          {product.description}
                        </p>
                      </div>
                    </motion.div>
                  </SectionReveal>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Grain texture accent */}
        <div
          className="h-32 w-full opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%232F6F4F'/%3E%3C/svg%3E")`,
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
