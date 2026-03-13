"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, User, Heart, Users, Brain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, type Service } from "@/lib/data/content";

const iconMap = {
  user: User,
  heart: Heart,
  users: Users,
  brain: Brain,
  home: Home,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card hover:bg-secondary/30 transition-all duration-300 border-border hover:border-accent/30 group cursor-default">
        <CardContent className="p-6 md:p-8">
          {/* Icon - fixed size container */}
          <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Details list - visible on hover */}
          <ul className="mt-4 space-y-1.5 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">
            {service.details.slice(0, 3).map((detail) => (
              <li
                key={detail}
                className="text-xs text-muted-foreground flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servizi"
      className="section-spacing bg-background"
      aria-labelledby="services-heading"
    >
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
            I nostri servizi
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Supporto psicologico per ogni esigenza
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Offriamo una gamma completa di servizi psicologici, sempre con un
            approccio umano, professionale e riservato.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Non sai quale servizio è più adatto a te?
          </p>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="/#contatti">
              Richiedi una consulenza
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
