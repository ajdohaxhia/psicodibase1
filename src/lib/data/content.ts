// ============================================
// SITE CONTENT DATA
// All content is in Italian for the target audience
// EDITABLE markers indicate placeholder content
// ============================================

export const siteConfig = {
  name: "Psicologo Di Base",
  description:
    "Supporto psicologico professionale con un approccio umano, attento e riservato.",
  tagline: "Uno spazio per ascoltarsi, comprendersi, crescere.",
  
  // EDITABLE: Contact Information
  contact: {
    address: "Via Roma 123, 00100 Roma RM",
    phone: "+39 06 1234567",
    email: "info@psicologodibase.it",
    hours: "Lunedì - Venerdì: 9:00 - 19:00",
    // EDITABLE: Google Maps embed coordinates
    mapCoordinates: {
      lat: 41.9028,
      lng: 12.4964,
    },
  },
};

// ============================================
// TEAM MEMBERS
// ============================================

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  approach: string;
  areas: string[];
  education: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "camilla",
    name: "Dott.ssa Camilla",
    title: "Psicologa Psicoterapeuta",
    shortBio:
      "Accompagna le persone in percorsi di crescita personale e consapevolezza, con particolare attenzione alle dinamiche relazionali.",
    fullBio:
      "La Dott.ssa Camilla svolge la sua attività con un approccio integrato, unendo competenze cliniche e sensibilità relazionale. Il suo lavoro si concentra sulla creazione di uno spazio sicuro e accogliente, dove ogni persona possa esplorare le proprie emozioni e trovare nuove prospettive. Crede fermamente nel valore dell'ascolto autentico e nella possibilità di trasformare le difficoltà in opportunità di crescita.",
    approach:
      "Utilizza un approccio integrato che combina elementi della psicoterapia cognitivo-comportamentale con tecniche di mindfulness e prospettive relazionali, adattando il percorso alle esigenze specifiche di ogni persona.",
    areas: [
      "Relazioni interpersonali",
      "Difficoltà emotive",
      "Percorsi di crescita personale",
      "Transizioni di vita",
    ],
    education: [
      "Laurea in Psicologia Clinica",
      "Specializzazione in Psicoterapia",
      // EDITABLE: Add actual qualifications
    ],
  },
  {
    id: "benedetta",
    name: "Dott.ssa Benedetta",
    title: "Psicologa Clinica",
    shortBio:
      "Specializzata nel supporto a giovani adulti e adulti, offre uno spazio di ascolto per affrontare ansia, stress e momenti di transizione.",
    fullBio:
      "La Dott.ssa Benedetta accompagna le persone attraverso i momenti di maggiore complessità della vita, offrendo strumenti pratici e un sostegno empatico. Il suo lavoro si rivolge in particolare a chi affronta sfide legate all'ansia, allo stress e alle transizioni significative. Crea un ambiente non giudicante dove ogni persona possa sentirsi compresa e supportata.",
    approach:
      "Il suo approccio clinico si basa sulla pratica evidence-based, integrando tecniche cognitivo-comportamentali con una profonda attenzione alla relazione terapeutica e al benessere globale della persona.",
    areas: [
      "Ansia e stress",
      "Gestione delle emozioni",
      " Giovani adulti",
      "Momenti di transizione",
    ],
    education: [
      "Laurea in Psicologia Clinica e di Comunità",
      "Master in Psicologia della Salute",
      // EDITABLE: Add actual qualifications
    ],
  },
  {
    id: "alessandra",
    name: "Dott.ssa Alessandra",
    title: "Psicologa Psicoterapeuta",
    shortBio:
      "Si dedica al supporto di individui, coppie e famiglie, con particolare attenzione alle dinamiche relazionali e al benessere familiare.",
    fullBio:
      "La Dott.ssa Alessandra lavora con individui, coppie e famiglie, aiutando a navigare le complessità delle relazioni interpersonali. La sua esperienza le permette di offrire uno spazio dove esplorare dinamiche familiari, conflitti di coppia e difficoltà relazionali. Crea un ambiente di fiducia reciproca dove ogni voce può essere ascoltata.",
    approach:
      "Adotta un approccio sistemico-relazionale che considera la persona nel contesto delle proprie relazioni significative, lavorando per comprendere e trasformare le dinamiche che ostacolano il benessere individuale e relazionale.",
    areas: [
      "Terapia di coppia",
      "Dinamiche familiari",
      "Supporto genitoriale",
      "Comunicazione relazionale",
    ],
    education: [
      "Laurea in Psicologia Clinica",
      "Specializzazione in Terapia Familiare",
      // EDITABLE: Add actual qualifications
    ],
  },
];

// ============================================
// SERVICES
// ============================================

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  icon: "user" | "heart" | "users" | "brain" | "home";
}

export const services: Service[] = [
  {
    id: "colloqui-individuali",
    title: "Colloqui Psicologici Individuali",
    shortDescription:
      "Uno spazio riservato e professionale per esplorare le proprie emozioni, pensieri e difficoltà.",
    fullDescription:
      "I colloqui psicologici individuali offrono un ambiente protetto e confidenziale dove esplorare il proprio mondo interiore. Attraverso un ascolto attento e professionale, aiutiamo a comprendere le origini delle difficoltà e a sviluppare strategie efficaci per affrontarle.",
    details: [
      "Primo colloquio conoscitivo",
      "Percorsi personalizzati",
      "Spazio di ascolto e riflessione",
      "Sviluppo di strategie di coping",
    ],
    icon: "user",
  },
  {
    id: "sostegno-psicologico",
    title: "Sostegno Psicologico",
    shortDescription:
      "Accompagnamento professionale attraverso momenti di difficoltà, transizioni e sfide della vita.",
    fullDescription:
      "Il sostegno psicologico è un percorso di accompagnamento pensato per chi sta attraversando un periodo difficile o una transizione significativa. Offriamo strumenti concreti e supporto emotivo per affrontare situazioni complesse e ritrovare equilibrio e benessere.",
    details: [
      "Supporto in momenti di crisi",
      "Accompagnamento in transizioni di vita",
      "Gestione dello stress",
      "Elaborazione di esperienze difficili",
    ],
    icon: "heart",
  },
  {
    id: "ascolto-orientamento",
    title: "Percorsi di Ascolto e Orientamento",
    shortDescription:
      "Spazi di ascolto per chi cerca chiarezza, orientamento o supporto nelle proprie scelte.",
    fullDescription:
      "I percorsi di ascolto e orientamento sono pensati per chi si trova in un momento di incertezza o sta cercando una direzione. Attraverso un dialogo aperto e non giudicante, aiutiamo a fare chiarezza su bisogni, desideri e possibilità.",
    details: [
      "Orientamento professionale",
      "Sostegno nelle decisioni importanti",
      "Esplorazione di sé",
      "Chiarificazione dei propri valori",
    ],
    icon: "brain",
  },
  {
    id: "ansia-stress",
    title: "Supporto per Ansia, Stress e Difficoltà Emotive",
    shortDescription:
      "Strumenti e supporto per gestire ansia, stress e le sfide emotive della vita quotidiana.",
    fullDescription:
      "Offriamo un supporto specializzato per chi vive ansia, stress o altre difficoltà emotive. Attraverso tecniche evidence-based e un approccio empatico, aiutiamo a comprendere le origini del malessere e a sviluppare strategie efficaci per gestirlo.",
    details: [
      "Gestione dell'ansia",
      "Tecniche di rilassamento",
      "Mindfulness e consapevolezza",
      "Regolazione emotiva",
    ],
    icon: "heart",
  },
  {
    id: "giovani-adulti",
    title: "Supporto per Giovani Adulti e Adulti",
    shortDescription:
      "Percorsi pensati specificamente per le sfide e le esigenze dei giovani adulti e degli adulti.",
    fullDescription:
      "I giovani adulti si trovano ad affrontare sfide uniche: transizioni scolastiche e lavorative, costruzione dell'identità, prime relazioni significative. Offriamo uno spazio dedicato dove esplorare queste tematiche con competenza e sensibilità.",
    details: [
      "Transizione alla vita adulta",
      "Difficoltà nello studio e nel lavoro",
      "Costruzione dell'identità",
      "Relazioni e affettività",
    ],
    icon: "users",
  },
  {
    id: "famiglie-coppie",
    title: "Supporto per Famiglie e Coppie",
    shortDescription:
      "Uno spazio per coppie e famiglie che desiderano migliorare la comunicazione e affrontare le difficoltà insieme.",
    fullDescription:
      "Le relazioni sono fondamentali per il nostro benessere, ma possono anche essere fonte di difficoltà. Offriamo uno spazio neutrale e professionale dove coppie e famiglie possono esplorare le proprie dinamiche, migliorare la comunicazione e trovare nuove modalità di relazione.",
    details: [
      "Mediazione familiare",
      "Terapia di coppia",
      "Supporto alla genitorialità",
      "Gestione dei conflitti",
    ],
    icon: "home",
  },
];

// ============================================
// FAQ
// ============================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "generale" | "primo-colloquio" | "pratiche";
}

export const faqs: FAQ[] = [
  {
    id: "come-prenotare",
    question: "Come posso prenotare un primo colloquio?",
    answer:
      "Puoi prenotare un primo colloquio contattandoci telefonicamente o via email, oppure compilando il modulo di contatto presente sul sito. Ti risponderemo entro 24-48 ore lavorative per concordare data e ora dell'appuntamento.",
    category: "generale",
  },
  {
    id: "chi-puo-accedere",
    question: "A chi è rivolto il servizio?",
    answer:
      "Il servizio è rivolto a tutti coloro che desiderano un supporto psicologico professionale: giovani adulti, adulti, coppie e famiglie. Non è necessario avere una diagnosi per accedere ai nostri servizi.",
    category: "generale",
  },
  {
    id: "primo-colloquio",
    question: "In cosa consiste il primo colloquio?",
    answer:
      "Il primo colloquio è un incontro conoscitivo durante il quale potrai raccontare le tue difficoltà e i tuoi obiettivi. Lo psicologo ti ascolterà e ti proporrà un percorso personalizzato. È anche un'opportunità per capire se c'è un buon feeling e se il nostro approccio è adatto alle tue esigenze.",
    category: "primo-colloquio",
  },
  {
    id: "modalita-incontri",
    question: "Gli incontri sono in presenza o online?",
    answer:
      "Offriamo entrambe le modalità. Gli incontri possono svolgersi presso il nostro studio oppure online tramite piattaforma sicura, in base alle tue preferenze ed esigenze.",
    category: "pratiche",
  },
  {
    id: "riservatezza",
    question: "Come viene garantita la riservatezza?",
    answer:
      "La riservatezza è un principio fondamentale della nostra professione. Tutti i contenuti dei colloqui sono tutelati dal segreto professionale. Le informazioni raccolhe sono trattate in conformità con la normativa sulla privacy (GDPR) e non vengono condivise con terzi senza il tuo consenso.",
    category: "pratiche",
  },
  {
    id: "costi",
    question: "Quali sono i costi delle prestazioni?",
    answer:
      "I costi variano in base al tipo di prestazione e alla durata del percorso. Durante il primo colloquio ti verranno fornite tutte le informazioni dettagliate sui costi. È possibile richiedere informazioni anche prima dell'appuntamento contattandoci via email o telefono.",
    category: "pratiche",
  },
  {
    id: "durata-percorso",
    question: "Quanto dura un percorso psicologico?",
    answer:
      "La durata del percorso varia in base alle esigenze e agli obiettivi di ogni persona. Alcuni percorsi possono essere brevi (poche sedute), altri possono richiedere un impegno più lungo. Durante il primo colloquio potremo darti indicazioni più precise.",
    category: "generale",
  },
  {
    id: "frequenza-sedute",
    question: "Con che frequenza si svolgono le sedute?",
    answer:
      "Generalmente le sedute si svolgono con cadenza settimanale o quindicinale, in base alle esigenze e al tipo di percorso. La frequenza viene concordata insieme all'inizio del percorso.",
    category: "pratiche",
  },
];

// ============================================
// TESTIMONIALS
// Placeholder testimonials - EDITABLE
// ============================================

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Ho trovato uno spazio sicuro dove potermi aprire senza giudizio. L'approccio professionale e umano mi ha aiutato a capire aspetti di me che non riuscivo a vedere.",
    author: "M.",
    role: "Percorso individuale",
  },
  {
    id: "2",
    quote:
      "Dopo anni di difficoltà, ho finalmente trovato il coraggio di affrontare le mie paure. Il supporto che ho ricevuto è stato fondamentale per il mio percorso di crescita.",
    author: "A.",
    role: "Percorso individuale",
  },
  {
    id: "3",
    quote:
      "Come coppia, avevamo perso la capacità di comunicare. Grazie al percorso fatto insieme, abbiamo ritrovato un modo nuovo di ascoltarci e capirci.",
    author: "L. e G.",
    role: "Terapia di coppia",
  },
];
