"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/content";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="section-spacing bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent uppercase tracking-wide mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            Domande frequenti
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6"
          >
            Hai delle domande?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ecco le risposte alle domande più comuni. Se non trovi quello che
            cerchi, non esitare a contattarci.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            aria-label="Domande frequenti"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden data-[state=open]:border-accent/30 data-[state=open]:shadow-sm transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent transition-colors py-5 hover:no-underline">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Non hai trovato la risposta che cercavi?{" "}
            <a
              href="/#contatti"
              className="text-accent hover:underline font-medium"
            >
              Contattaci direttamente
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
