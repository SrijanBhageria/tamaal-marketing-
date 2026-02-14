"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { 
  FadeInUp, 
  FadeIn, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement,
  ScaleIn
} from "@/app/components/ui/animations";
import { ArrowRight, Leaf, Shield, Sparkles, Award, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Directly sourced from trusted farmers across India's finest rice-growing regions."
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every grain passes through rigorous quality checks for purity and excellence."
  },
  {
    icon: Sparkles,
    title: "Naturally Aged",
    description: "Aged to perfection for enhanced aroma, texture, and cooking quality."
  }
];

const products = [
  { name: "Premium Basmati", tagline: "The Crown Jewel", bgColor: "bg-[var(--color-cream)]", accentColor: "var(--color-secondary)" },
  { name: "Classic Long Grain", tagline: "Everyday Excellence", bgColor: "bg-[var(--color-accent-soft)]", accentColor: "var(--color-primary)" },
  { name: "Organic Brown Rice", tagline: "Wholesome Goodness", bgColor: "bg-[var(--color-sand)]", accentColor: "var(--color-warm)" },
  { name: "Sona Masoori", tagline: "South Indian Favorite", bgColor: "bg-[var(--color-highlight)]", accentColor: "var(--color-secondary-dark)" },
];

const stats = [
  { value: "50+", label: "Years of Heritage" },
  { value: "100K+", label: "Happy Families" },
  { value: "15+", label: "Rice Varieties" },
  { value: "98%", label: "Purity Guaranteed" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements - Richer gradient with warm undertones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-cream)]/30 to-[var(--color-accent-soft)]/20" />
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[var(--color-primary)]/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[var(--color-warm)]/[0.03] rounded-full blur-3xl" />
        
        {/* Floating Decorative Elements */}
        <FloatingElement className="absolute top-32 right-[15%] hidden lg:block">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-warm)]/10 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-[10%] hidden lg:block">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/10 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-[8%] hidden xl:block">
          <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)]" />
        </FloatingElement>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/5 rounded-full mb-8">
                  <Leaf className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm font-medium text-[var(--color-primary)]">
                    Premium Indian Rice
                  </span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="font-heading text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-medium leading-[1.1] tracking-tight mb-6">
                  Purity from{" "}
                  <span className="text-[var(--color-primary)]">Farm</span>
                  <br />
                  to Your{" "}
                  <span className="relative inline-block">
                    Table
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                    >
                      <motion.path
                        d="M2 8 Q50 2 100 8 T198 8"
                        fill="none"
                        stroke="var(--color-secondary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Experience the finest Indian rice, sustainably sourced and carefully 
                  processed to bring authentic taste and nutrition to every meal.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/products">
                    <motion.button
                      className="group px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-primary)]/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Products
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                      className="px-8 py-4 bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-primary)] rounded-full font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Our Story
                    </motion.button>
                  </Link>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Visual */}
            <SlideInRight className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image Container */}
                <motion.div
                  className="relative w-full aspect-square max-w-[500px] mx-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Decorative Circles */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-primary)]/10" />
                  <motion.div
                    className="absolute inset-4 rounded-full bg-gradient-to-tr from-[var(--color-surface)] to-[var(--color-accent-soft)]/50 shadow-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Leaf className="w-16 h-16 text-[var(--color-primary)]" />
                      </motion.div>
                      <p className="font-heading text-2xl text-[var(--color-primary)] font-medium">
                        Pure & Natural
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -right-4 top-20 bg-[var(--color-surface)] rounded-2xl p-4 shadow-xl border border-[var(--color-border-light)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">Premium Quality</p>
                      <p className="text-xs text-[var(--color-text-muted)]">ISO Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </Container>
      </section>

      {/* Stats Section - Enhanced with warm accents */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-cream)]/30 to-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {/* Decorative dot */}
                  <motion.div 
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: index % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                  <p className="font-heading text-4xl md:text-5xl font-medium text-[var(--color-primary)] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Features Section - Enhanced with warm gradient background */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Rich layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-cream)]/40 to-[var(--color-background)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/[0.04] rounded-full blur-3xl" />
        
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
                Why Choose Us
                <span className="w-8 h-px bg-[var(--color-secondary)]" />
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                The Tamaal <span className="text-[var(--color-primary)]">Difference</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-[var(--color-text-muted)] text-lg">
                Every grain tells a story of quality, tradition, and care.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const accentColors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-warm)'];
              const bgColors = ['var(--color-accent-soft)', 'var(--color-cream)', 'var(--color-sand)'];
              return (
                <StaggerItem key={index} className="h-full">
                  <motion.div
                    className="group relative p-8 lg:p-10 bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 transition-all duration-500 h-full overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    {/* Subtle background accent on hover */}
                    <motion.div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                      style={{ backgroundColor: bgColors[index] }}
                    />
                    
                    <div className="relative">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                        style={{ 
                          backgroundColor: `color-mix(in srgb, ${accentColors[index]} 15%, transparent)`,
                        }}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <Icon 
                          className="w-7 h-7 transition-colors duration-500" 
                          style={{ color: accentColors[index] }}
                        />
                      </motion.div>
                      <h3 className="font-heading text-xl font-semibold mb-3 text-[var(--color-text-primary)]">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Decorative line */}
                      <motion.div 
                        className="mt-6 h-0.5 rounded-full origin-left"
                        style={{ backgroundColor: accentColors[index] }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 0.3, opacity: 0.5 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  Our Collection
                </span>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium">
                  Premium Rice Varieties
                </h2>
              </FadeInUp>
            </div>
            <FadeInUp delay={0.2}>
              <Link href="/products">
                <motion.span
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  View All Products
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <StaggerItem key={index}>
                <Link href="/products">
                  <motion.div
                    className="group relative overflow-hidden rounded-3xl cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`aspect-[4/5] ${product.bgColor} p-6 flex flex-col justify-between relative overflow-hidden`}>
                      {/* Decorative corner accent */}
                      <motion.div 
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        style={{ backgroundColor: product.accentColor }}
                      />
                      
                      <div 
                        className="w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center relative z-10 border"
                        style={{ 
                          backgroundColor: `color-mix(in srgb, ${product.accentColor} 10%, white)`,
                          borderColor: `color-mix(in srgb, ${product.accentColor} 20%, transparent)`
                        }}
                      >
                        <Leaf className="w-6 h-6" style={{ color: product.accentColor }} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-sm text-[var(--color-text-muted)] mb-1">{product.tagline}</p>
                        <h3 className="font-heading text-xl font-semibold text-[var(--color-text-primary)]">
                          {product.name}
                        </h3>
                        {/* Accent underline */}
                        <motion.div 
                          className="mt-3 h-0.5 w-8 rounded-full group-hover:w-16 transition-all duration-500"
                          style={{ backgroundColor: product.accentColor }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Story Section - Enhanced with warm tones */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-[var(--color-background)]" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-cream)]/50 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-accent-soft)]/30 to-transparent" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-accent-soft)]/50 to-[var(--color-sand)]/30 overflow-hidden border border-[var(--color-border-warm)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-40 h-40 rounded-full bg-[var(--color-surface)] shadow-2xl flex items-center justify-center border border-[var(--color-border-light)]"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Leaf className="w-20 h-20 text-[var(--color-primary)]" />
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements inside */}
                  <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-[var(--color-secondary)]" />
                  <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                </div>
                
                {/* Floating Card - Enhanced */}
                <motion.div
                  className="absolute -right-8 -bottom-8 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-cream)] rounded-2xl p-6 shadow-xl max-w-[200px] border border-[var(--color-border-warm)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mb-3" />
                  <p className="font-heading text-3xl font-medium text-[var(--color-primary)] mb-1">50+</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Years of farming excellence</p>
                </motion.div>
              </div>
            </SlideInLeft>

            <div>
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  Our Heritage
                </span>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                  A Legacy of Quality
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[var(--color-text-muted)] text-lg mb-6 leading-relaxed">
                  For over five decades, Tamaal has been synonymous with premium Indian rice. 
                  Our journey began in the fertile plains of Punjab, where generations of farmers 
                  have perfected the art of rice cultivation.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
                  Today, we continue this tradition, combining time-honored practices with 
                  modern quality standards to bring you rice that's pure, nutritious, and 
                  full of authentic flavor.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <Link href="/about">
                  <motion.button
                    className="group inline-flex items-center gap-2 text-[var(--color-primary)] font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Learn More About Us
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Enhanced with gradient and warm accents */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-soft)]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-warm)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-white" />
          <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-[var(--color-secondary)]" />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-white" />
        </div>
        
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-12 h-px bg-[var(--color-secondary)]" />
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                <span className="w-12 h-px bg-[var(--color-secondary)]" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                Ready to Experience <span className="text-[var(--color-secondary-soft)]">Premium Rice?</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of families who trust Tamaal for their daily meals. 
                Discover the difference quality makes.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-soft)] text-[var(--color-text-primary)] rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Shop Now
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>
    </>
  );
}
