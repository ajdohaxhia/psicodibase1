"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/data/images";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay - warm and soft */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base text-muted-foreground tracking-wide uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            Supporto psicologico professionale
          </motion.p>

          {/* Main headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-8"
          >
            Uno spazio per
            <br />
            <span className="text-accent">ascoltarsi</span>,
            <br />
            capirsi, crescere.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Psicologo Di Base accompagna le persone in percorsi di crescita e
            benessere emotivo. Uno studio fondato da tre psicologhe, con un
            approccio umano e professionale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/#contatti">
                Prenota un colloquio
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 bg-background/50 backdrop-blur-sm"
            >
              <Link href="/#servizi">Scopri i servizi</Link>
            </Button>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <a
              href="tel:+390612345678"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>+39 06 1234567</span>
            </a>
            <a
              href="mailto:info@psicologodibase.it"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>info@psicologodibase.it</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scopri
          </span>
          <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
            <span className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
