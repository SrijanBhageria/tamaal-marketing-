"use client";

import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem,
  ScaleIn
} from "@/app/components/ui/animations";
import { Leaf, Star, ArrowRight, Check, Sparkles, Award, Shield } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Royal Basmati",
    tagline: "The Crown Jewel",
    category: "Basmati",
    description: "Extra-long grain basmati rice, aged for 2 years for exceptional aroma and taste.",
    features: ["Extra Long Grain", "Aged 2 Years", "Premium Quality"],
    bgColor: "bg-[var(--color-cream)]",
    accentColor: "var(--color-secondary)",
    rating: 4.9,
    reviews: 324,
    bestseller: true
  },
  {
    id: 2,
    name: "Classic Long Grain",
    tagline: "Everyday Excellence",
    category: "Traditional",
    description: "Perfect for daily cooking, this versatile rice delivers consistent quality.",
    features: ["Fluffy Texture", "Easy to Cook", "Family Favorite"],
    bgColor: "bg-[var(--color-accent-soft)]",
    accentColor: "var(--color-primary)",
    rating: 4.7,
    reviews: 556,
    bestseller: false
  },
  {
    id: 3,
    name: "Organic Brown Rice",
    tagline: "Wholesome Goodness",
    category: "Organic",
    description: "Certified organic brown rice, rich in fiber and natural nutrients.",
    features: ["100% Organic", "High Fiber", "Nutrient Rich"],
    bgColor: "bg-[var(--color-sand)]",
    accentColor: "var(--color-warm)",
    rating: 4.8,
    reviews: 293,
    bestseller: false
  },
  {
    id: 4,
    name: "Sona Masoori",
    tagline: "South Indian Favorite",
    category: "Traditional",
    description: "Lightweight and aromatic, perfect for everyday South Indian cuisine.",
    features: ["Light & Fluffy", "Low GI", "Aromatic"],
    bgColor: "bg-[var(--color-highlight)]",
    accentColor: "var(--color-secondary-dark)",
    rating: 4.6,
    reviews: 412,
    bestseller: false
  },
  {
    id: 5,
    name: "Premium Biryani Rice",
    tagline: "Celebration Special",
    category: "Specialty",
    description: "Specially selected for biryani, with perfect grain separation and aroma.",
    features: ["Perfect Separation", "Rich Aroma", "Celebration Grade"],
    bgColor: "bg-[var(--color-cream)]",
    accentColor: "var(--color-warm)",
    rating: 4.9,
    reviews: 487,
    bestseller: true
  },
  {
    id: 6,
    name: "Organic Basmati",
    tagline: "Pure & Natural",
    category: "Organic",
    description: "Organically grown basmati rice, combining purity with premium quality.",
    features: ["Certified Organic", "Pesticide Free", "Premium Basmati"],
    bgColor: "bg-[var(--color-accent-soft)]",
    accentColor: "var(--color-primary-soft)",
    rating: 4.8,
    reviews: 268,
    bestseller: false
  },
];

const qualityBadges = [
  { icon: Shield, label: "ISO Certified" },
  { icon: Award, label: "Premium Grade" },
  { icon: Leaf, label: "Sustainably Sourced" },
];

export default function ProductsPage() {
  const marqueeItems = ["Royal Basmati", "Classic Long Grain", "Organic Brown", "Sona Masoori", "Biryani Special", "Organic Basmati"];
  
  return (
    <>
      {/* Hero Section — Marquee / Collection feel */}
      <section className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-cream)]/30 to-[var(--color-background)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-secondary)]/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-accent-soft)]/20 to-transparent" />
        
        {/* Scrolling marquee behind text */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems, ...marqueeItems].map((name, i) => (
              <span 
                key={i} 
                className="font-heading text-[10rem] lg:text-[14rem] font-bold leading-none"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.04
                }}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <p className="inline-flex items-center gap-3 text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
                Our Collection
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[4.25rem] font-medium mb-6 leading-[1.1]">
                Carefully Curated,
                <br />
                <span className="text-[var(--color-primary)]">Honestly Grown.</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed mb-10">
                Six distinct varieties, each selected for a purpose -- 
                from everyday cooking to celebration feasts.
              </p>
            </FadeInUp>

            {/* Interactive product pills */}
            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3">
                {marqueeItems.map((name, i) => (
                  <motion.div
                    key={i}
                    className="px-5 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-full text-sm text-[var(--color-text-muted)] cursor-default"
                    whileHover={{ 
                      borderColor: "var(--color-primary)", 
                      color: "var(--color-primary)",
                      y: -3,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Quality Badges */}
      <section className="py-8 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-cream)]/30 to-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <Container>
          <StaggerContainer className="flex flex-wrap justify-center gap-8 md:gap-16">
            {qualityBadges.map((badge, index) => {
              const Icon = badge.icon;
              const colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-warm)'];
              return (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `color-mix(in srgb, ${colors[index]} 15%, transparent)` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: colors[index] }} />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">
                      {badge.label}
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-sand)]/10 to-[var(--color-background)]" />
        
        <Container className="relative">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <StaggerItem key={product.id} className="h-full">
                <motion.div
                  className="group relative bg-[var(--color-surface)] rounded-3xl overflow-hidden border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 transition-all duration-500 h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Bestseller Badge */}
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 z-10">
                      <span 
                        className="px-3 py-1 text-white text-xs font-medium rounded-full"
                        style={{ backgroundColor: product.accentColor }}
                      >
                        Bestseller
                      </span>
                    </div>
                  )}

                  {/* Product Image Area */}
                  <div className={`aspect-[4/3] ${product.bgColor} p-8 flex items-center justify-center relative overflow-hidden`}>
                    {/* Accent gradient overlay */}
                    <div 
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30"
                      style={{ backgroundColor: product.accentColor }}
                    />
                    
                    <motion.div
                      className="w-24 h-24 rounded-full backdrop-blur-sm flex items-center justify-center border"
                      style={{ 
                        backgroundColor: `color-mix(in srgb, ${product.accentColor} 10%, white)`,
                        borderColor: `color-mix(in srgb, ${product.accentColor} 20%, transparent)`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Leaf className="w-12 h-12" style={{ color: product.accentColor }} />
                    </motion.div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor }} />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-[var(--color-secondary)] text-[var(--color-secondary)]" />
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        {product.rating}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-[var(--color-text-primary)]">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--color-background)] rounded-md text-xs text-[var(--color-text-muted)]"
                        >
                          <Check className="w-3 h-3 text-[var(--color-primary)]" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1" />

                    {/* CTA */}
                    <motion.button
                      className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium flex items-center justify-center gap-2 group-hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Quality Promise Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  Our Promise
                </span>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                  Quality You Can Trust
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
                  Every grain of Tamaal rice undergoes rigorous quality checks to ensure 
                  you receive only the finest product. From farm selection to packaging, 
                  we maintain the highest standards.
                </p>
              </FadeInUp>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {[
                  "100% pure, no mixing or adulteration",
                  "Rigorous lab testing for every batch",
                  "Sustainable and ethical sourcing",
                  "Optimal aging for best taste and aroma"
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                      <span className="text-[var(--color-text-primary)]">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <ScaleIn>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/10 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 rounded-full bg-[var(--color-surface)] shadow-2xl flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="w-24 h-24 text-[var(--color-primary)]" />
                  </motion.div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-[var(--color-surface)] rounded-2xl p-4 shadow-xl border border-[var(--color-border-light)]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-[var(--color-secondary)]" />
                    <div>
                      <p className="text-sm font-semibold">ISO 9001</p>
                      <p className="text-xs text-[var(--color-text-muted)]">Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScaleIn>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                Can't Decide? We're Here to Help
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Our team can help you choose the perfect rice variety for your needs. 
                Get personalized recommendations today.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-full font-medium inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Our Team
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
