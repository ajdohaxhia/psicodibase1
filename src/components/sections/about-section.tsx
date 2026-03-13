"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Shield, Heart, Users } from "lucide-react";
import { images } from "@/lib/data/images";

const reasons = [
  {
    icon: Heart,
    title: "Un approccio umano",
    description:
      "Ogni percorso è costruito attorno alla persona, ai suoi tempi e alle sue esigenze specifiche.",
  },
  {
    icon: Users,
    title: "Un team di tre psicologhe",
    description:
      "Competenze diverse e complementari per offrire un supporto completo e personalizzato.",
  },
  {
    icon: Shield,
    title: "Massima riservatezza",
    description:
      "Un ambiente protetto dal segreto professionale, dove potersi aprire con completa fiducia.",
  },
  {
    icon: CheckCircle,
    title: "Professionalità e competenza",
    description:
      "Formazione continua e aggiornamento costante per offrire il miglior supporto possibile.",
  },
];

export function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="section-spacing bg-secondary/20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle decorative element */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image - Group photo of three women */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image - team of three women */}
              <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.team.group.src}
                  alt="Il team di Psicologo Di Base - tre psicologhe professioniste"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative offset frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl -z-10"
                aria-hidden="true"
              />

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-6 max-w-xs"
              >
                <p className="font-serif text-lg text-foreground italic leading-relaxed">
                  "Il primo passo verso il cambiamento è cercare aiuto."
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  — Il team di Psicologo Di Base
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm text-accent uppercase tracking-wide mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              Chi siamo
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
            >
              Uno studio pensato per te
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Psicologo Di Base nasce dalla volontà di offrire un supporto
                psicologico accessibile, professionale e profondamente umano.
              </p>
              <p>
                Siamo tre psicologhe che condividono una visione: accompagnare le
                persone verso una maggiore consapevolezza di sé e un benessere
                duraturo, nel rispetto dei tempi e delle esigenze di ciascuno.
              </p>
            </div>

            {/* Reasons list */}
            <ul className="space-y-5" role="list">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.li
                    key={reason.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Icon container - fixed size */}
                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
