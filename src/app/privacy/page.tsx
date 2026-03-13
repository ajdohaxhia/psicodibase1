import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy e sul trattamento dei dati personali di Psicologo Di Base. Come proteggiamo i tuoi dati nel rispetto del GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <article className="section-spacing">
          <div className="container-narrow">
            {/* Header */}
            <header className="mb-12">
              <p className="text-sm text-accent uppercase tracking-wide mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                Informazioni legali
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Ultimo aggiornamento: Gennaio 2025
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-neutral max-w-none">
              {/* EDITABLE: Review with legal counsel */}

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  1. Titolare del Trattamento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il Titolare del trattamento dei dati personali è{" "}
                  <strong>Psicologo Di Base</strong>, con sede in{" "}
                  {/* EDITABLE: Insert actual address */}
                  Via Roma 123, 00100 Roma RM.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Per qualsiasi richiesta relativa al trattamento dei dati
                  personali, è possibile contattare il Titolare all'indirizzo
                  email:{" "}
                  {/* EDITABLE: Insert actual email */}
                  <a
                    href="mailto:privacy@psicologodibase.it"
                    className="text-accent hover:underline"
                  >
                    privacy@psicologodibase.it
                  </a>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Tipologie di Dati Raccolti
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I dati personali raccolti dal nostro sito includono:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Dati di contatto:</strong> nome, cognome, indirizzo
                    email, numero di telefono
                  </li>
                  <li>
                    <strong>Dati di navigazione:</strong> indirizzo IP, tipo di
                    browser, pagine visitate, tempo di permanenza
                  </li>
                  <li>
                    <strong>Cookies:</strong> come descritto nella nostra{" "}
                    <Link
                      href="/cookie-policy"
                      className="text-accent hover:underline"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. Finalità del Trattamento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I dati personali vengono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Rispondere alle richieste di informazioni</strong> -
                    per gestire le richieste inviate tramite il modulo di
                    contatto
                  </li>
                  <li>
                    <strong>Prenotazione di appuntamenti</strong> - per
                    organizzare e gestire i colloqui psicologici
                  </li>
                  <li>
                    <strong>Adempimenti legali</strong> - per rispettare gli
                    obblighi previsti dalla normativa applicabile
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. Base Giuridica del Trattamento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Il trattamento dei dati personali si basa su: esecuzione di un
                  contratto o di misure precontrattuali, consenso dell&apos;interessato
                  per finalità specifiche, legittimo interesse del Titolare,
                  obblighi di legge.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Destinatari dei Dati
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I dati personali potranno essere comunicati a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Collaboratori e dipendenti autorizzati al trattamento</li>
                  <li>Fornitori di servizi tecnici (hosting, email)</li>
                  <li>Consulenti professionali (commercialisti, avvocati)</li>
                  <li>Autorità pubbliche, se richiesto dalla legge</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I dati non vengono venduti a terzi né trasferiti al di fuori
                  dell&apos;Unione Europea.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Periodo di Conservazione
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I dati personali vengono conservati per il tempo necessario al
                  raggiungimento delle finalità per cui sono stati raccolti e, in
                  ogni caso, nel rispetto dei termini previsti dalla normativa
                  applicabile. I dati clinici sono conservati secondo le
                  disposizioni dell&apos;Ordine degli Psicologi.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Diritti dell&apos;Interessato
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In conformità al GDPR, l&apos;interessato ha diritto di:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Accesso:</strong> ottenere conferma del trattamento e
                    accesso ai propri dati
                  </li>
                  <li>
                    <strong>Rettifica:</strong> correggere dati inesatti o
                    incompleti
                  </li>
                  <li>
                    <strong>Cancellazione:</strong> richiedere la cancellazione
                    dei dati (&ldquo;diritto all&apos;oblio&rdquo;)
                  </li>
                  <li>
                    <strong>Limitazione:</strong> limitare il trattamento in
                    determinate circostanze
                  </li>
                  <li>
                    <strong>Portabilità:</strong> ricevere i propri dati in formato
                    strutturato
                  </li>
                  <li>
                    <strong>Opposizione:</strong> opporsi al trattamento per
                    legittimo interesse
                  </li>
                  <li>
                    <strong>Revoca del consenso:</strong> revocare il consenso in
                    qualsiasi momento
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Per esercitare questi diritti, contattare{" "}
                  <a
                    href="mailto:privacy@psicologodibase.it"
                    className="text-accent hover:underline"
                  >
                    privacy@psicologodibase.it
                  </a>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  8. Diritto di Reclamo
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;interessato ha diritto di proporre reclamo all&apos;Autorità
                  Garante per la Protezione dei Dati Personali (
                  <a
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.garanteprivacy.it
                  </a>
                  ).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  9. Cookie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per informazioni sull&apos;uso dei cookie, si prega di consultare la
                  nostra{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-accent hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  10. Modifiche alla Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di modificare questa Privacy Policy in
                  qualsiasi momento. Le modifiche saranno pubblicate su questa
                  pagina con indicazione della data dell&apos;ultimo aggiornamento.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  11. Contatti
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per qualsiasi domanda relativa a questa Privacy Policy, è
                  possibile contattarci all&apos;indirizzo{" "}
                  <a
                    href="mailto:privacy@psicologodibase.it"
                    className="text-accent hover:underline"
                  >
                    privacy@psicologodibase.it
                  </a>
                </p>
              </section>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                ← Torna alla homepage
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
