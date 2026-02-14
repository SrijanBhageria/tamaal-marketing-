"use client";

import { motion } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { 
  FadeInUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  ScaleIn
} from "@/app/components/ui/animations";
import { 
  Leaf, 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Microscope, 
  Package, 
  Truck,
  Wheat,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    icon: Wheat,
    title: "Farm Selection",
    description: "We partner with certified farmers who follow sustainable practices and meet our strict quality criteria.",
    number: "01"
  },
  {
    icon: Microscope,
    title: "Quality Testing",
    description: "Every batch undergoes comprehensive lab testing for purity, moisture content, and grain quality.",
    number: "02"
  },
  {
    icon: Package,
    title: "Processing",
    description: "State-of-the-art milling and processing ensures optimal grain quality while preserving nutrients.",
    number: "03"
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Temperature-controlled storage and careful handling ensure freshness from our facility to your home.",
    number: "04"
  }
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System", icon: Shield },
  { name: "FSSAI Certified", description: "Food Safety Standards", icon: BadgeCheck },
  { name: "Organic India", description: "Organic Certification", icon: Leaf },
  { name: "HACCP", description: "Hazard Analysis", icon: CheckCircle },
];

const qualityMetrics = [
  { value: "99.9%", label: "Purity Rate", description: "Minimal foreign matter" },
  { value: "12%", label: "Moisture Content", description: "Optimal for storage" },
  { value: "7mm+", label: "Grain Length", description: "Premium basmati standard" },
  { value: "2+ Years", label: "Aging Period", description: "For enhanced aroma" },
];

const standards = [
  "Zero tolerance for pesticide residues",
  "No artificial colors or preservatives",
  "Non-GMO verified grains",
  "Sustainable farming practices",
  "Fair trade partnerships",
  "Carbon-neutral processing"
];

export default function QualityPage() {
  return (
    <>
      {/* Hero Section — Quality Score Gauge */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-cream)]/40 to-[var(--color-background)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-secondary)]/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-accent-soft)]/30 to-transparent" />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-[var(--color-secondary)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
        <motion.div 
          className="absolute bottom-40 left-[10%] w-2 h-2 rounded-full bg-[var(--color-primary)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <FadeInUp>
                <p className="flex items-center gap-3 text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-6">
                  <span className="w-8 h-px bg-[var(--color-secondary)]" />
                  Quality Assurance
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-[4.25rem] font-medium mb-6 leading-[1.1]">
                  Every grain,
                  <br />
                  <span className="text-[var(--color-primary)]">verified pure.</span>
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="text-lg text-[var(--color-text-muted)] max-w-lg leading-relaxed mb-8">
                  50+ lab tests per batch. Zero compromises.
                  From farm to table, every step is designed to deliver 
                  the purest rice to your family.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "99.9%", label: "Purity", color: "var(--color-primary)" },
                    { value: "50+", label: "Lab Tests", color: "var(--color-secondary)" },
                    { value: "0%", label: "Additives", color: "var(--color-warm)" },
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                      <motion.div 
                        className="absolute -top-2 left-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: stat.color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                      />
                      <p className="font-heading text-2xl md:text-3xl font-medium" style={{ color: stat.color }}>{stat.value}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Animated circular quality gauge */}
            <FadeInUp delay={0.2} className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent)]/15 to-[var(--color-primary)]/10 blur-2xl" />
                
                {/* Outer ring */}
                <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-border-light)" strokeWidth="6" />
                  <motion.circle
                    cx="100" cy="100" r="90" fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={565.48}
                    initial={{ strokeDashoffset: 565.48 }}
                    animate={{ strokeDashoffset: 565.48 * 0.001 }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </svg>
                {/* Inner ring - Green accent */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 z-10" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="72" fill="none" stroke="var(--color-border-light)" strokeWidth="4" />
                  <motion.circle
                    cx="100" cy="100" r="72" fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={452.39}
                    initial={{ strokeDashoffset: 452.39 }}
                    animate={{ strokeDashoffset: 452.39 * 0.04 }}
                    transition={{ duration: 2.2, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <motion.span
                    className="font-heading text-5xl md:text-6xl font-medium text-[var(--color-primary)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    A+
                  </motion.span>
                  <motion.span
                    className="text-sm text-[var(--color-text-muted)] mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    Quality Grade
                  </motion.span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -4 }}
                >
                  <motion.p 
                    className="font-heading text-4xl md:text-5xl font-medium text-[var(--color-primary)] mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {metric.value}
                  </motion.p>
                  <p className="font-medium text-[var(--color-text-primary)] mb-1">{metric.label}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{metric.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-primary)]/[0.02] rounded-full blur-3xl" />
        
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <FadeInUp>
              <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                Our Process
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                From Farm to Your Table
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-[var(--color-text-muted)] text-lg">
                A meticulous journey ensuring every grain meets our exacting standards.
              </p>
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInUp key={index} delay={index * 0.1} className="h-full">
                  <motion.div
                    className="relative group h-full"
                    whileHover={{ y: -8 }}
                  >
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[var(--color-border)] to-transparent z-0" />
                    )}
                    
                    <div className="relative bg-[var(--color-surface)] rounded-3xl p-8 border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/20 transition-all duration-500 h-full flex flex-col">
                      {/* Step Number */}
                      <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-[var(--color-primary)]/10">
                        {step.number}
                      </span>
                      
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-500"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      
                      <h3 className="font-heading text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeInUp>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Standards Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SlideInLeft>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-64 h-64 rounded-full border-2 border-dashed border-[var(--color-primary)]/20" />
                    </motion.div>
                    <motion.div
                      className="absolute w-40 h-40 rounded-full bg-[var(--color-surface)] shadow-2xl flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Microscope className="w-20 h-20 text-[var(--color-primary)]" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -right-4 -bottom-4 bg-[var(--color-surface)] rounded-2xl p-5 shadow-xl border border-[var(--color-border-light)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Lab Tested</p>
                      <p className="text-sm text-[var(--color-text-muted)]">Every Batch</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideInLeft>

            <div>
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  Our Standards
                </span>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
                  Commitment to Excellence
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
                  Our quality standards go beyond industry requirements. We've established 
                  rigorous protocols that ensure every grain of Tamaal rice is pure, 
                  nutritious, and flavorful.
                </p>
              </FadeInUp>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {standards.map((standard, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex items-center gap-4 p-4 bg-[var(--color-background)] rounded-xl"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                      <span className="text-[var(--color-text-primary)] font-medium">{standard}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeInUp>
              <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                Certifications
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                Trusted & Certified
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-[var(--color-text-muted)] text-lg">
                Our quality is verified by leading certification bodies worldwide.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="group p-8 bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/20 transition-all duration-500 text-center h-full"
                    whileHover={{ y: -8 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-500"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      {cert.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Lab Testing Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  Lab Testing
                </span>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
                  Rigorous Quality Control
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
                  Our in-house laboratory conducts over 50 different tests on every batch 
                  of rice. From grain analysis to microbiological testing, we leave nothing 
                  to chance.
                </p>
              </FadeInUp>
              
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {[
                  { label: "Purity Analysis", value: "100%" },
                  { label: "Moisture Testing", value: "Daily" },
                  { label: "Grain Grading", value: "A+" },
                  { label: "Aroma Testing", value: "Premium" }
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="p-4 bg-[var(--color-background)] rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-2xl font-heading font-semibold text-[var(--color-primary)] mb-1">
                        {item.value}
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">{item.label}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <SlideInRight>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-primary)]/10 overflow-hidden flex items-center justify-center">
                  <motion.div
                    className="grid grid-cols-3 gap-4 p-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-16 h-16 rounded-xl bg-[var(--color-surface)]/80 backdrop-blur-sm flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, type: "spring" }}
                      >
                        <CheckCircle className="w-8 h-8 text-[var(--color-primary)]" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SlideInRight>
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
              <Sparkles className="w-12 h-12 text-white/60 mx-auto mb-6" />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                Experience the Quality Difference
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Taste the result of our uncompromising commitment to quality. 
                Try Tamaal rice today.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
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
