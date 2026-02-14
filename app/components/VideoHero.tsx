"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Add your rice field video to /public/videos/hero.mp4 for full cinematic effect
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80";

export default function VideoHero() {
  const [videoError, setVideoError] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.section
      style={{ opacity }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a2e24]"
    >
      {/* Video or image background */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/5301104-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        ) : null}
        {videoError && (
          <Image
            src={FALLBACK_IMAGE}
            alt="Rice fields"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        {/* Darkened overlay for text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#2F6F4F]/40 via-[#2F6F4F]/60 to-[#111]/80"
          aria-hidden
        />
      </div>

      {/* Content — main message, not just the name */}
      <motion.div
        style={{ scale, y }}
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Rooted in the richness of India.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 font-display text-2xl font-light tracking-wide text-white/90 md:text-3xl"
        >
          Tamaal
        </motion.p>
      </motion.div>

      {/* Scroll indicator — pinned to bottom of viewport, no overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/70">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/80" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
