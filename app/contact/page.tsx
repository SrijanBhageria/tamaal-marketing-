"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";
import { CONTACT } from "../constants/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F2]">
      <Navbar />

      <main className="pt-20">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionReveal>
            <h1 className="font-display text-4xl font-semibold text-[#111111] md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-[#6B7280]">
              Distribution inquiries, partnership opportunities, or general
              questions — we're here to help.
            </p>
          </SectionReveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Inquiry form placeholder */}
            <SectionReveal delay={0.1}>
              <form className="space-y-6 rounded-2xl border border-[#E5E7EB] bg-white p-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#111111]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111111] focus:border-[#2F6F4F] focus:outline-none focus:ring-1 focus:ring-[#2F6F4F]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#111111]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111111] focus:border-[#2F6F4F] focus:outline-none focus:ring-1 focus:ring-[#2F6F4F]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#111111]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111111] focus:border-[#2F6F4F] focus:outline-none focus:ring-1 focus:ring-[#2F6F4F]"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#2F6F4F] py-3.5 font-medium text-white transition-all hover:bg-[#4E8A68]"
                >
                  Send Inquiry
                </button>
              </form>
            </SectionReveal>

            {/* Contact info & Distribution CTA */}
            <SectionReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#111111]">
                    Contact Information
                  </h3>
                  <p className="mt-1 text-sm text-[#6B7280]">{CONTACT.companyName}</p>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center gap-3 text-[#6B7280]">
                      <Mail className="h-5 w-5 shrink-0 text-[#2F6F4F]" />
                      <a href={`mailto:${CONTACT.email}`} className="hover:text-[#2F6F4F]">
                        {CONTACT.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-[#6B7280]">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6F4F]" />
                      <span className="flex flex-col gap-1">
                        {CONTACT.phones.map((num) => (
                          <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-[#2F6F4F]">
                            {num}
                          </a>
                        ))}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#6B7280]">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6F4F]" />
                      <span>
                        <span className="font-medium text-[#111111]">Mill Address:</span>
                        <br />
                        {CONTACT.millAddress.line1}
                        <br />
                        {CONTACT.millAddress.line2}
                        <br />
                        {CONTACT.millAddress.line3}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Distribution CTA */}
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8">
                  <h3 className="font-display text-xl font-semibold text-[#111111]">
                    Distribution & Partnerships
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#6B7280]">
                    Interested in stocking Tamaal? We work with retailers,
                    distributors, and food service partners across India.
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-6 inline-block font-medium text-[#2F6F4F] hover:underline"
                  >
                    {CONTACT.email} →
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="aspect-video overflow-hidden rounded-2xl bg-[#E5E7EB]">
                  <div className="flex h-full items-center justify-center text-[#6B7280]">
                    Map placeholder
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
