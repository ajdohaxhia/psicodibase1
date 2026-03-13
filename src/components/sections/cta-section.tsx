"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

export function CTASection() {
  return (
    <section
      className="section-spacing bg-background relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8"
          >
            <span className="font-serif text-2xl text-accent italic">PdB</span>
          </motion.div>

          <h2
            id="cta-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
          >
            Pronto a iniziare il tuo percorso?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Il primo passo è spesso il più difficile, ma non devi farlo da
            solo. Contattaci per un primo colloquio conoscitivo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
              className="text-base px-8"
            >
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </Button>
          </div>

          {/* Reassurance */}
          <p className="text-sm text-muted-foreground">
            Risposta entro 24-48 ore • Massima riservatezza • Su appuntamento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
