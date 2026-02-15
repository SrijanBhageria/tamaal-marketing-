"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";

const categories = ["All", "26kg", "30kg"];

const products = [
  {
    id: 1,
    name: "Tamaal 24 Carat Sella Basmati Rice",
    category: "Basmati",
    weight: "26kg",
    description: "Extra long basmati rice. Premium quality, delicate fragrance.",
    image: "/products/TAMAAL_24_CARAT_SELA BAS_RICE_26KG_CC_processed_by_imagy.png",
  },
  {
    id: 2,
    name: "Tamaal Biryani Special Rice 1",
    category: "Basmati",
    weight: "26kg",
    description: "Extra long basmati rice, perfect for biryani.",
    image: "/products/TAMAAL_BIRYANI_SPECIAL_RICE_1_26KG_CC_processed_by_imagy.png",
  },
  {
    id: 3,
    name: "Tamaal Classic Sella Basmati Rice",
    category: "Basmati",
    weight: "26kg",
    description: "Classic sella extra long basmati rice. The everyday favourite.",
    image: "/products/TAMAAL_CLASSIC_SELA_BAS_RICE_26KG _CC_processed_by_imagy.png",
  },
  {
    id: 4,
    name: "Tamaal Daily Sella Basmati Rice",
    category: "Basmati",
    weight: "26kg",
    description: "Daily sella extra long basmati rice. Fluffy, versatile, trusted.",
    image: "/products/05-12-2025 TAMAAL DAILY SELA BAS. RICE 26KG CC_processed_by_imagy.png",
  },
  {
    id: 5,
    name: "Tamaal Dubar Supreme Rice 4",
    category: "Basmati",
    weight: "26kg",
    description: "Dubar Supreme extra long basmati rice. Premium export grade.",
    image: "/products/05-12-2025 TAMAAL DUBAR SUPREME RICE 4 26KG CC_processed_by_imagy.png",
  },
  {
    id: 6,
    name: "Tamaal Magic Sella Basmati Rice",
    category: "Basmati",
    weight: "26kg",
    description: "Magic sella extra long basmati rice. Aromatic and long-grained.",
    image: "/products/05-12-2025 TAMAAL MAGIC SELA BAS. RICE 26KG CC_processed_by_imagy.png",
  },
  {
    id: 7,
    name: "Tamaal Mogra Delight Rice 5",
    category: "Basmati",
    weight: "26kg",
    description: "Mogra Delight extra long basmati rice. Fragrant and delicate.",
    image: "/products/05-12-2025 TAMAAL MOGRA DELIGHT RICE 5 26KG CC_processed_by_imagy.png",
  },
  {
    id: 8,
    name: "Tamaal Platinum Sella Basmati Rice",
    category: "Basmati",
    weight: "26kg",
    description: "Platinum sella extra long basmati rice. Premium quality.",
    image: "/products/05-12-2025 TAMAAL PLATINUM SELA BAS. RICE 26KG CC_processed_by_imagy.png",
  },
  {
    id: 9,
    name: "Tamaal Prime Gold Rice 2",
    category: "Basmati",
    weight: "26kg",
    description: "Prime Gold extra long basmati rice. Golden grains, superior taste.",
    image: "/products/05-12-2025 TAMAAL PRIME GOLD RICE 2 26KG CC_processed_by_imagy.png",
  },
  {
    id: 10,
    name: "Tamaal Super Tibar Rice 3",
    category: "Basmati",
    weight: "26kg",
    description: "Super Tibar extra long basmati rice. Perfect for special occasions.",
    image: "/products/05-12-2025 TAMAAL SUPER TIBAR RICE 3 26KG CC_processed_by_imagy.png",
  },
  {
    id: 11,
    name: "Tamaal 1121 Golden Sella",
    category: "Basmati",
    weight: "26kg",
    description: "1121 Golden Sella extra long basmati rice. Premium 1121 variety.",
    image: "/products/12-01-2026 TAMAAL 1121 GOLDEN SELLA 26KG CC_processed_by_imagy.png",
  },
  {
    id: 12,
    name: "Tamaal Biryani Sella Basmati Rice",
    category: "Basmati",
    weight: "30kg",
    description: "Biryani sella basmati rice. Ideal for biryani and pilafs.",
    image: "/products/14-10-2025 TAMAL BIRYANI SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
  {
    id: 13,
    name: "Tamaal Classic Sella Basmati Rice (30kg)",
    category: "Basmati",
    weight: "30kg",
    description: "Classic sella basmati rice in 30kg pack. The everyday favourite.",
    image: "/products/14-10-2025 TAMAL CLASSIC SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
  {
    id: 14,
    name: "Tamaal Daily Sella Basmati Rice (30kg)",
    category: "Basmati",
    weight: "30kg",
    description: "Daily sella basmati rice in 30kg pack. Fluffy and versatile.",
    image: "/products/14-10-2025 TAMAL DAILY SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
  {
    id: 15,
    name: "Tamaal Pearl Sella Basmati Rice",
    category: "Basmati",
    weight: "30kg",
    description: "Pearl sella basmati rice. Premium pearled grains.",
    image: "/products/14-10-2025 TAMAL PEARL SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
  {
    id: 16,
    name: "Tamaal Platinum XXXL Sella Basmati Rice",
    category: "Basmati",
    weight: "30kg",
    description: "Platinum XXXL sella basmati rice. Extra-long grains, premium grade.",
    image: "/products/14-10-2025 TAMAL PLATINUM XXXL SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
  {
    id: 17,
    name: "Tamaal Prime Sella Basmati Rice",
    category: "Basmati",
    weight: "30kg",
    description: "Prime sella basmati rice in 30kg pack. Export quality.",
    image: "/products/14-10-2025 TAMAL PRIME SELLA BASMATI RICE 30 KG_processed_by_imagy.png",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.weight === activeCategory);

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

        {/* Product grid */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 [&>*]:flex [&>*]:min-h-0 [&>*]:h-full [&>*]:flex-col">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-0"
                >
                  <SectionReveal delay={i * 0.05} className="h-full">
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Product image - main focus */}
                      <div className="relative aspect-[3/4] shrink-0 overflow-hidden bg-[#E5E7EB]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-xs font-medium tracking-wide text-[#374151] backdrop-blur-sm">
                          {product.weight}
                        </span>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col px-4 py-3">
                        <h3 className="font-display text-base font-semibold text-[#111111] line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-snug text-[#6B7280]">
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
