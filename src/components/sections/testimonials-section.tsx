"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section
      className="section-spacing bg-background relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle decorative element */}
      <div
        className="absolute top-1/2 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-accent/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 bg-accent/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
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
            Testimonianze
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6"
          >
            Le storie di chi ha scelto di farsi accompagnare
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-accent/30 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quote
                    className="h-8 w-8 text-accent/25 mb-4"
                    aria-hidden="true"
                  />

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic leading-relaxed flex-grow mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
