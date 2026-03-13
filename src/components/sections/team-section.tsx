"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { teamMembers, type TeamMember } from "@/lib/data/content";
import { images } from "@/lib/data/images";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const imageConfig =
    images.team[member.id as keyof typeof images.team] || images.team.camilla;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group h-full bg-card hover:bg-secondary/20 transition-all duration-500 border-border hover:border-accent/30 overflow-hidden">
        {/* Image container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
          <Image
            src={imageConfig.src}
            alt={imageConfig.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority={index < 3}
          />
          {/* Subtle overlay on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />
        </div>

        <CardContent className="p-6">
          {/* Name and title */}
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{member.title}</p>

          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {member.shortBio}
          </p>

          {/* Areas */}
          <div className="flex flex-wrap gap-2">
            {member.areas.slice(0, 3).map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/80 text-muted-foreground border border-border/50"
              >
                {area}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-spacing bg-background"
      aria-labelledby="team-heading"
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
            Il nostro team
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="team-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Tre professioniste al tuo fianco
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ogni membro del nostro team porta competenze e sensibilità uniche,
            unite da una visione condivisa del benessere psicologico.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
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
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="/#contatti">
              Contatta il team
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
