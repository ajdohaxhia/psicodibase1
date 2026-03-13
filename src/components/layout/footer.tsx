"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/lib/data/content";

const footerLinks = {
  servizi: [
    { name: "Colloqui individuali", href: "/#servizi" },
    { name: "Sostegno psicologico", href: "/#servizi" },
    { name: "Percorsi di ascolto", href: "/#servizi" },
    { name: "Supporto famiglie", href: "/#servizi" },
  ],
  informazioni: [
    { name: "Chi siamo", href: "/#chi-siamo" },
    { name: "Il nostro team", href: "/#team" },
    { name: "Come funziona", href: "/#process" },
    { name: "Domande frequenti", href: "/#faq" },
  ],
  legale: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-secondary/50 border-t border-border relative"
      role="contentinfo"
    >
      <div className="container-wide relative z-10">
        {/* Main Footer Content */}
        <div className="section-spacing pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 group"
              >
                <div className="relative w-14 h-14">
                  <Image
                    src="/logo.png"
                    alt="Psicologo Di Base Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-serif text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  Psicologo Di Base
                </span>
              </Link>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
                Supporto psicologico professionale con un approccio umano,
                attento e riservato. Un percorso verso il benessere, un passo
                alla volta.
              </p>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Segreto professionale</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Approccio umano</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Servizi
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.servizi.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Informazioni
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.informazioni.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Contatti
              </h3>
              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="h-4 w-4 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {/* EDITABLE: Address */}
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {/* EDITABLE: Phone */}
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {/* EDITABLE: Email */}
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">
                    {/* EDITABLE: Hours */}
                    {siteConfig.contact.hours}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Psicologo Di Base. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legale.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
