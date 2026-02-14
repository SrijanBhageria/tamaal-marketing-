"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/app/components/ui/Container";
import { 
  FadeInUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem 
} from "@/app/components/ui/animations";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  ArrowRight,
  CheckCircle,
  ChevronDown
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@tamaal.com",
    description: "We'll respond within 24 hours",
    href: "mailto:hello@tamaal.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 123 456 7890",
    description: "Mon-Sat, 9am to 6pm IST",
    href: "tel:+911234567890"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Rice Mill Road",
    description: "New Delhi, India 110001",
    href: "#"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9am - 6pm",
    description: "Sunday: Closed",
    href: "#"
  }
];

const faqs = [
  {
    question: "What makes Tamaal rice different from other brands?",
    answer: "Tamaal rice is sourced directly from certified farmers, aged for optimal flavor, and undergoes rigorous quality testing. Every grain meets our exacting standards for purity and taste."
  },
  {
    question: "Do you offer bulk orders for businesses?",
    answer: "Yes, we offer competitive pricing for bulk orders. Contact our business team for customized quotes and partnership opportunities."
  },
  {
    question: "How should I store Tamaal rice?",
    answer: "Store in a cool, dry place away from direct sunlight. Once opened, transfer to an airtight container. Properly stored, our rice maintains quality for up to 18 months."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship across India. International shipping is coming soon. Sign up for our newsletter to be notified when we expand globally."
  },
  {
    question: "Are your products organic?",
    answer: "We offer both conventional and certified organic rice varieties. Look for the 'Organic' label on our products page for our organic range."
  }
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section — Conversational Chat Bubble Style */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-cream)]/40 to-[var(--color-background)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-secondary)]/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[var(--color-accent-soft)]/30 to-transparent" />
        
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <FadeInUp>
                <p className="flex items-center gap-3 text-sm font-medium text-[var(--color-primary)] tracking-widest uppercase mb-6">
                  <span className="w-8 h-px bg-[var(--color-secondary)]" />
                  Let's Talk
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-[4.25rem] font-medium mb-6 leading-[1.1]">
                  Start a
                  <br />
                  <span className="text-[var(--color-primary)]">conversation.</span>
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed mb-8">
                  Whether it's a product question, a bulk order, or 
                  a distribution partnership -- we respond within 24 hours.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col gap-3">
                  <a href="mailto:hello@tamaal.com" className="inline-flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 flex items-center justify-center group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-primary)] transition-all duration-300">
                      <Mail className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors duration-300">hello@tamaal.com</span>
                  </a>
                  <a href="tel:+911234567890" className="inline-flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-warm)]/10 flex items-center justify-center group-hover:from-[var(--color-secondary)] group-hover:to-[var(--color-secondary)] transition-all duration-300">
                      <Phone className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">+91 123 456 7890</span>
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Chat bubbles side */}
            <div className="hidden lg:flex flex-col gap-4 max-w-sm ml-auto">
              {[
                { text: "Hi! I'd like to know about bulk orders.", align: "right", delay: 0.4 },
                { text: "Of course! We offer competitive pricing for businesses. What quantity are you looking for?", align: "left", delay: 0.8 },
                { text: "Around 500kg per month for our restaurant chain.", align: "right", delay: 1.2 },
                { text: "Great! I'll connect you with our partnerships team right away.", align: "left", delay: 1.6 },
              ].map((bubble, i) => (
                <motion.div
                  key={i}
                  className={`flex ${bubble.align === "right" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: bubble.delay, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
                      bubble.align === "right"
                        ? "bg-[var(--color-primary)] text-white rounded-br-md"
                        : "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-light)] rounded-bl-md"
                    }`}
                  >
                    {bubble.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <div className="bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-2xl rounded-bl-md px-5 py-3.5 flex gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-[var(--color-primary)]/40"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[var(--color-surface)] border-y border-[var(--color-border-light)]">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <StaggerItem key={index}>
                  <motion.a
                    href={info.href}
                    className="group block p-6 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/20 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-muted)] mb-1">{info.title}</p>
                        <p className="font-semibold text-[var(--color-text-primary)] mb-1">{info.value}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{info.description}</p>
                      </div>
                    </div>
                  </motion.a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft>
              <div className="bg-[var(--color-surface)] rounded-3xl p-8 lg:p-10 border border-[var(--color-border-light)]">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-medium mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-[var(--color-text-muted)]">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="py-16 text-center"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <CheckCircle className="w-10 h-10 text-[var(--color-primary)]" />
                      </motion.div>
                      <h3 className="font-heading text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-[var(--color-text-muted)]">
                        Thank you for reaching out. We'll respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                            Your Name
                          </label>
                          <motion.input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border-light)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300"
                            placeholder="John Doe"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                            Email Address
                          </label>
                          <motion.input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border-light)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300"
                            placeholder="john@example.com"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                          Subject
                        </label>
                        <motion.input
                          type="text"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border-light)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300"
                          placeholder="How can we help?"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                          Message
                        </label>
                        <motion.textarea
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border-light)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300 resize-none"
                          placeholder="Tell us more about your inquiry..."
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SlideInLeft>

            {/* Map & Additional Info */}
            <SlideInRight>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/10 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-[var(--color-surface)] shadow-xl flex items-center justify-center mx-auto mb-4"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MapPin className="w-10 h-10 text-[var(--color-primary)]" />
                      </motion.div>
                      <p className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                        New Delhi, India
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        123 Rice Mill Road
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-[var(--color-primary)]/5 blur-xl" />
                  <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[var(--color-accent)]/10 blur-xl" />
                </div>

                {/* Business Inquiries Card */}
                <motion.div
                  className="p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-light)]"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2">Business Inquiries</h3>
                      <p className="text-[var(--color-text-muted)] text-sm mb-3">
                        Interested in bulk orders or distribution partnerships? 
                        Our business team is ready to help.
                      </p>
                      <a 
                        href="mailto:business@tamaal.com"
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm hover:gap-3 transition-all duration-300"
                      >
                        business@tamaal.com
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp>
                <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-4 tracking-wide uppercase">
                  FAQ
                </span>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                  Frequently Asked Questions
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[var(--color-text-muted)] text-lg">
                  Find answers to common questions about our products and services.
                </p>
              </FadeInUp>
            </div>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-[var(--color-background)] rounded-2xl border border-[var(--color-border-light)] overflow-hidden"
                    whileHover={{ y: -2 }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-[var(--color-text-primary)] pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-[var(--color-text-muted)] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                Ready to Experience Premium Rice?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Explore our collection of premium rice varieties and taste the 
                Tamaal difference.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <motion.a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] rounded-full font-medium"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Products
                <ArrowRight size={18} />
              </motion.a>
            </FadeInUp>
          </div>
        </Container>
      </section>
    </>
  );
}
