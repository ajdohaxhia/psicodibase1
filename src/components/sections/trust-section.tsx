"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Heart, Users, Award, BookOpen } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "Psicologhe iscritte all'Ordine",
    description: "Tutte le professioniste sono regolarmente iscritte all'Ordine degli Psicologi.",
  },
  {
    icon: Shield,
    title: "Segreto professionale",
    description: "Tutti i contenuti dei colloqui sono tutelati dal segreto professionale.",
  },
  {
    icon: Heart,
    title: "Approccio personalizzato",
    description: "Ogni percorso è costruito attorno alle esigenze specifiche della persona.",
  },
  {
    icon: Clock,
    title: "Flessibilità oraria",
    description: "Appuntamenti in presenza o online, con orari flessibili.",
  },
  {
    icon: Users,
    title: "Team multidisciplinare",
    description: "Tre psicologhe con competenze diverse e complementari.",
  },
  {
    icon: BookOpen,
    title: "Formazione continua",
    description: "Aggiornamento costante sulle più recenti evidenze scientifiche.",
  },
];

export function TrustSection() {
  return (
    <section
      className="py-12 md:py-16 bg-secondary/30 border-y border-border"
      aria-labelledby="trust-heading"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 id="trust-heading" className="sr-only">
            Perché scegliere Psicologo Di Base
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Un approccio professionale, umano e riservato
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center group"
              >
                {/* Icon container - fixed size */}
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground text-xs md:text-sm mb-1">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
