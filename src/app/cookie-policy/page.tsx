import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sui cookie utilizzati dal sito Psicologo Di Base. Scopri come gestiamo i cookie e la tua privacy.",
};

export default function CookiePolicyPage() {
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
                Cookie Policy
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
                  1. Cosa sono i Cookie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I cookie sono piccoli file di testo che vengono memorizzati sul
                  tuo dispositivo quando visiti un sito web. Servono a memorizzare
                  preferenze, migliorare l&apos;esperienza di navigazione e raccogliere
                  informazioni statistiche sull&apos;utilizzo del sito.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Tipologie di Cookie Utilizzati
                </h2>

                <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">
                  Cookie Tecnici (necessari)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questi cookie sono essenziali per il corretto funzionamento del
                  sito e non possono essere disattivati. Includono:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Cookie di sessione:</strong> per gestire la tua
                    navigazione durante la visita
                  </li>
                  <li>
                    <strong>Cookie di sicurezza:</strong> per prevenire utilizzi
                    fraudolenti
                  </li>
                </ul>

                <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">
                  Cookie Analitici
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questi cookie ci aiutano a capire come i visitatori interagiscono
                  con il sito, raccogliendo informazioni in forma anonima.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I dati raccolti sono anonimi e non permettono di identificare
                  personalmente gli utenti.
                </p>

                <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">
                  Cookie di Funzionalità
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Questi cookie permettono di ricordare le tue preferenze (come la
                  scelta della lingua) per offrirti un&apos;esperienza più personalizzata.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. Cookie di Terze Parti
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alcuni cookie sono installati da servizi di terze parti. Sul
                  nostro sito potrebbero essere presenti:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-muted-foreground border border-border rounded-lg">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="p-4 font-semibold">Servizio</th>
                        <th className="p-4 font-semibold">Finalità</th>
                        <th className="p-4 font-semibold">Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="p-4">Google Analytics</td>
                        <td className="p-4">Analisi traffico web</td>
                        <td className="p-4">
                          <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            Link
                          </a>
                        </td>
                      </tr>
                      {/* EDITABLE: Add other third-party services if used */}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. Come Gestire i Cookie
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Puoi gestire le tue preferenze sui cookie in diversi modi:
                </p>

                <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">
                  Tramite il Browser
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La maggior parte dei browser permette di:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Visualizzare i cookie presenti</li>
                  <li>Bloccare i cookie di terze parti</li>
                  <li>Rifiutare tutti i cookie</li>
                  <li>Cancellare i cookie alla chiusura del browser</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 mb-2">
                  Per informazioni su come gestire i cookie nel tuo browser:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Conseguenze della Disattivazione
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La disattivazione di alcuni cookie potrebbe compromettere la
                  funzionalità del sito e l&apos;esperienza di navigazione. I cookie
                  tecnici necessari non possono essere disattivati senza
                  compromettere il funzionamento del sito.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Aggiornamenti
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questa Cookie Policy può essere aggiornata periodicamente.
                  Ti invitiamo a consultarla regolarmente per essere informato su
                  eventuali modifiche.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Contatti
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per domande sulla nostra Cookie Policy, contattaci all&apos;indirizzo{" "}
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
