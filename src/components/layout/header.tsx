"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/#servizi" },
  { name: "Chi siamo", href: "/#chi-siamo" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contatti", href: "/#contatti" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Initial check
    if (window.scrollY > 20) {
      header.setAttribute("data-scrolled", "true");
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      const currentScrolled = header.getAttribute("data-scrolled") === "true";
      
      if (scrolled !== currentScrolled) {
        header.setAttribute("data-scrolled", scrolled.toString());
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header styles */}
      <style>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          background-color: transparent;
        }
        .header-wrapper[data-scrolled="true"] {
          background-color: var(--background);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        .header-wrapper[data-scrolled="true"]::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--border);
          opacity: 0.5;
        }
      `}</style>
      
      <header ref={headerRef} className="header-wrapper" aria-label="Header">
        <nav className="container-wide" aria-label="Navigazione principale">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 group flex items-center gap-3"
              aria-label="Psicologo Di Base - Torna alla homepage"
              onClick={closeMobileMenu}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/logo.png"
                  alt="Psicologo Di Base Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-serif text-lg md:text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                Psicologo Di Base
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-border flex items-center gap-3">
                <Button asChild variant="default" size="default">
                  <Link href="/#contatti">Prenota un colloquio</Link>
                </Button>
              </div>
            </div>

            {/* Mobile: Phone button + Menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="Chiama ora"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                className="relative z-50 p-2 -mr-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-background"
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center justify-center h-full gap-2 px-6"
                aria-label="Navigazione mobile"
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-3 px-6 text-2xl font-serif font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: 0.35 }}
                  className="mt-8 flex flex-col items-center gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8"
                    onClick={closeMobileMenu}
                  >
                    <Link href="/#contatti">Prenota un colloquio</Link>
                  </Button>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
