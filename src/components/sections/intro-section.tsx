"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/data/images";

export function IntroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Decorative side images - visible on larger screens */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-32 h-48 rounded-r-2xl overflow-hidden opacity-30">
        <Image
          src={images.atmospheric.calm.src}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-48 rounded-l-2xl overflow-hidden opacity-30">
        <Image
          src={images.atmospheric.listening.src}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8"
          >
            <span className="font-serif text-accent text-lg italic">PdB</span>
          </motion.div>

          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
            Crediamo che ogni persona possieda le risorse per affrontare le
            proprie difficoltà.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Il nostro compito è aiutarti a scoprirle, offrendo uno spazio sicuro
            dove{" "}
            <span className="text-accent font-medium">
              esplorare, comprendere e crescere
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
