"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/data/content";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  return (
    <section
      id="contatti"
      className="section-spacing bg-secondary/30 relative"
      aria-labelledby="contact-heading"
    >
      {/* Decorative element */}
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
            Contatti
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Iniziamo insieme il tuo percorso
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Compila il modulo per richiedere informazioni o prenotare un primo
            colloquio. Ti risponderemo entro 24-48 ore lavorative.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Messaggio inviato con successo
                </h3>
                <p className="text-muted-foreground mb-2">
                  Ti risponderemo al più presto.
                </p>
                <p className="text-sm text-muted-foreground">
                  Se hai urgenza, puoi chiamarci al{" "}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-accent hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nome e cognome <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Il tuo nome completo"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="La tua email"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Telefono <span className="text-muted-foreground">(opzionale)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Il tuo numero di telefono"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Messaggio <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Raccontaci brevemente come possiamo aiutarti..."
                      className="bg-background border-border focus:border-accent resize-none"
                    />
                  </div>

                  {/* Privacy consent */}
                  <div className="flex items-start gap-3 py-2">
                    <Checkbox
                      id="privacy"
                      required
                      className="mt-1 border-border data-[state=checked]:border-accent data-[state=checked]:bg-accent"
                    />
                    <Label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Ho letto e accetto la{" "}
                      <a
                        href="/privacy"
                        className="text-accent hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      e acconsento al trattamento dei miei dati personali.
                    </Label>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia messaggio
                        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Privacy note */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" aria-hidden="true" />
                  <span>I tuoi dati sono protetti e non vengono condivisi con terzi.</span>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Informazioni di contatto
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin
                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-foreground mb-1">Indirizzo</p>
                    <p className="text-muted-foreground text-sm">
                      {/* EDITABLE: Address */}
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone
                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-foreground mb-1">Telefono</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      {/* EDITABLE: Phone */}
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail
                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      {/* EDITABLE: Email */}
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock
                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-foreground mb-1">Orari</p>
                    <p className="text-muted-foreground text-sm">
                      {/* EDITABLE: Hours */}
                      {siteConfig.contact.hours}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Su appuntamento
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Map container */}
              <div className="relative aspect-[4/3] bg-secondary/50">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.655039748781!2d${siteConfig.contact.mapCoordinates.lng}!3d${siteConfig.contact.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjEiTiAxMsKwMjknNDcuMCJF!5e0!3m2!1sit!2sit!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa dello studio Psicologo Di Base"
                />
              </div>
              
              {/* Map footer */}
              <div className="p-4 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  {/* EDITABLE: Directions placeholder */}
                  <span>Qualche metro dalla fermata Metro A</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
