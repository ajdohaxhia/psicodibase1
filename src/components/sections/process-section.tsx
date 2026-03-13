"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Primo contatto",
    description:
      "Ci contatti via email, telefono o modulo. Ti risponderemo entro 24-48 ore per fissare un appuntamento.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Colloquio conoscitivo",
    description:
      "Nel primo incontro racconti la tua storia e le tue difficoltà. Insieme valutiamo come possiamo aiutarti.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Percorso personalizzato",
    description:
      "Definiamo obiettivi e modalità del percorso, adattandolo alle tue esigenze e ai tuoi tempi.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Accompagnamento",
    description:
      "Ti accompagniamo con competenza e umanità verso una maggiore consapevolezza e benessere.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="section-spacing bg-secondary/30 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-accent uppercase tracking-wide mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            Come funziona
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="process-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Il tuo percorso in quattro passi
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un percorso semplice e chiaro, dove ogni passo è pensato per farti
            sentire accolto e supportato.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-border"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card border border-border rounded-xl p-6 md:p-8 h-full hover:border-accent/30 hover:shadow-lg transition-all duration-300 group">
                    {/* Number with icon - fixed positioning */}
                    <div className="mb-5">
                      <span className="text-5xl font-serif font-bold text-accent/15 group-hover:text-accent/25 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon in circle - separate from number */}
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                      <Icon
                        className="h-5 w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
