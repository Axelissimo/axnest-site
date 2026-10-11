export const APP_URL = "https://app.axnest.com";

export const LANGS = ["en", "es", "de", "fi"] as const;
export type Lang = (typeof LANGS)[number];

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "es" || value === "de" || value === "fi";
}

export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fi: "Suomi",
};

type Section = { heading: string; paragraphs: string[] };

export type Copy = {
  metaTitle: string;
  metaDescription: string;
  openApp: string;
  skipLink: string;
  languageLabel: string;
  workflowLabel: string;
  hostingLabel: string;
  newTab: string;
  mark: string;
  title: string;
  lead: string;
  sections: Section[];
  cloud: string;
  close: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    metaTitle: "AXNEST — industrial nesting from sales to production",
    metaDescription:
      "AXNEST is user-friendly industrial nesting software designed for the entire organization. Sales and production work with the same parts, material data and cutting layouts.",
    openApp: "Open AXNEST",
    skipLink: "Skip to content",
    languageLabel: "Language",
    workflowLabel: "One workflow. Shared data.",
    hostingLabel: "Hosting",
    newTab: "Opens the AXNEST application in a new tab",
    mark: "Industrial nesting",
    title: "AXNEST – industrial nesting from sales to production",
    lead: "Nesting software for the whole organization. Sales, project teams and production work with the same parts, materials and cutting layouts.",
    sections: [
      {
        heading: "Prepare the parts",
        paragraphs: [
          "AI-assisted import extracts dimensions from requests for quotation and creates parts for the library. Review the imported data before nesting or production. Automatic cleanup and repair prepare DXF files and other supported vector formats for nesting. Parts can also be drawn, defined or selected from standard libraries.",
        ],
      },
      {
        heading: "Cost the actual layout",
        paragraphs: [
          "Nest the parts before pricing them. Material requirements then come from the actual layout rather than from surface area alone. Cost calculation and quotations are based on a plan for how the parts will be made.",
        ],
      },
      {
        heading: "The same plan in production",
        paragraphs: [
          "The same layout goes to production. This helps keep material consumption in line with the quotation and reduces the risk of unexpected waste eroding the margin. Production receives the plan behind the price.",
        ],
      },
      {
        heading: "Shared parts and project data",
        paragraphs: [
          "AXNEST gives sales, project teams and production a shared basis for their work. Saved parts and libraries can be reused, reducing duplicate work and making the transition from quotation to manufacturing easier.",
        ],
      },
    ],
    cloud:
      "Designed for professional use. AXNEST runs in the cloud on UpCloud with AMD hardware.",
    close: "AXNEST helps you price what you plan to produce – and produce what you have quoted.",
  },
  es: {
    metaTitle: "AXNEST — nesting industrial desde ventas hasta producción",
    metaDescription:
      "AXNEST es un software de nesting industrial fácil de usar, diseñado para toda la organización. Ventas y producción utilizan las mismas piezas, datos de materiales y planos de corte.",
    openApp: "Abrir AXNEST",
    skipLink: "Ir al contenido",
    languageLabel: "Idioma",
    workflowLabel: "Un flujo de trabajo. Datos compartidos.",
    hostingLabel: "Alojamiento",
    newTab: "Abre la aplicación AXNEST en una pestaña nueva",
    mark: "Nesting industrial",
    title: "AXNEST – nesting industrial desde ventas hasta producción",
    lead: "Software de nesting para toda la organización. Ventas, proyectos y producción trabajan con las mismas piezas, materiales y planos de corte.",
    sections: [
      {
        heading: "Preparar las piezas",
        paragraphs: [
          "La importación asistida por inteligencia artificial extrae medidas de las solicitudes de cotización y crea piezas para la biblioteca. Los datos importados se revisan antes del nesting o la producción. La limpieza y reparación automática preparan los DXF y otros formatos vectoriales compatibles para el nesting. Las piezas también pueden dibujarse, definirse o seleccionarse de bibliotecas de productos normalizados.",
        ],
      },
      {
        heading: "Costos según el anidado real",
        paragraphs: [
          "Al anidar las piezas antes de fijar el precio, las necesidades de material se calculan a partir de la distribución real y no solo de la superficie. El cálculo de costos y la cotización se basan en un plan de fabricación.",
        ],
      },
      {
        heading: "El mismo plan en producción",
        paragraphs: [
          "La misma distribución pasa a producción. Esto ayuda a mantener el consumo de material dentro de lo previsto en la cotización y reduce el riesgo de que el desperdicio imprevisto afecte el margen. Producción recibe el plan con el que se calculó el precio.",
        ],
      },
      {
        heading: "Piezas y datos compartidos",
        paragraphs: [
          "AXNEST permite que ventas, los equipos de proyectos y producción trabajen sobre una misma base de información. Las piezas y bibliotecas guardadas pueden reutilizarse, lo que reduce la duplicación de tareas y facilita el paso de la cotización a la fabricación.",
        ],
      },
    ],
    cloud:
      "Diseñado para uso profesional. AXNEST funciona en la nube de UpCloud con hardware AMD.",
    close: "AXNEST ayuda a cotizar lo que se va a producir y a producir lo que se ha cotizado.",
  },
  de: {
    metaTitle: "AXNEST — industrielle Verschachtelung vom Vertrieb bis zur Fertigung",
    metaDescription:
      "AXNEST ist eine benutzerfreundliche industrielle Verschachtelungssoftware für das gesamte Unternehmen. Vertrieb und Fertigung arbeiten mit denselben Teilen, Materialdaten und Schnittplänen.",
    openApp: "AXNEST öffnen",
    skipLink: "Zum Inhalt",
    languageLabel: "Sprache",
    workflowLabel: "Ein Workflow. Gemeinsame Daten.",
    hostingLabel: "Hosting",
    newTab: "Öffnet die AXNEST-Anwendung in einem neuen Tab",
    mark: "Industrielles Nesting",
    title: "AXNEST – industrielle Verschachtelung vom Vertrieb bis zur Fertigung",
    lead: "Verschachtelungssoftware für das gesamte Unternehmen. Vertrieb, Projektteams und Fertigung arbeiten mit denselben Teilen, Materialien und Schnittplänen.",
    sections: [
      {
        heading: "Teile vorbereiten",
        paragraphs: [
          "Der KI-gestützte Import übernimmt Maße aus Angebotsanfragen und erstellt daraus Teile für die Bibliothek. Die importierten Daten werden vor der Verschachtelung oder Fertigung geprüft. Die automatische Bereinigung und Reparatur bereitet DXF-Dateien und andere unterstützte Vektorformate für die Verschachtelung vor. Teile können auch gezeichnet, definiert oder aus Normteilbibliotheken ausgewählt werden.",
        ],
      },
      {
        heading: "Kosten aus der tatsächlichen Belegung",
        paragraphs: [
          "Werden die Teile vor der Preisberechnung verschachtelt, ergibt sich der Materialbedarf aus der tatsächlichen Belegung statt allein aus der Fläche. Kostenkalkulation und Angebot basieren auf einem konkreten Fertigungsplan.",
        ],
      },
      {
        heading: "Derselbe Plan in der Fertigung",
        paragraphs: [
          "Dieselbe Belegung geht in die Fertigung. Das hilft, den Materialverbrauch im kalkulierten Rahmen zu halten, und reduziert das Risiko, dass unerwarteter Verschnitt die Marge schmälert. Die Fertigung erhält den Plan, auf dem der Preis beruht.",
        ],
      },
      {
        heading: "Gemeinsame Teile und Projektdaten",
        paragraphs: [
          "AXNEST schafft eine gemeinsame Informationsgrundlage für Vertrieb, Projektteams und Fertigung. Gespeicherte Teile und Bibliotheken können wiederverwendet werden. Das reduziert doppelte Arbeit und erleichtert den Übergang vom Angebot zur Herstellung.",
        ],
      },
    ],
    cloud:
      "Für den professionellen Einsatz entwickelt. AXNEST läuft in der Cloud bei UpCloud auf AMD-Hardware.",
    close: "AXNEST hilft Ihnen, das zu kalkulieren, was Sie fertigen wollen – und das zu fertigen, was Sie angeboten haben.",
  },
  fi: {
    metaTitle: "AXNEST — teollinen nestaus myynnistä tuotantoon",
    metaDescription:
      "AXNEST on käyttäjäystävällinen teollinen nestausohjelmisto koko organisaation käyttöön. Myynti ja tuotanto hyödyntävät samoja osia, materiaalitietoja ja leikkuusuunnitelmia.",
    openApp: "Avaa AXNEST",
    skipLink: "Siirry sisältöön",
    languageLabel: "Kieli",
    workflowLabel: "Yksi työnkulku. Yhteinen tieto.",
    hostingLabel: "Palvelinympäristö",
    newTab: "Avaa AXNEST-sovelluksen uuteen välilehteen",
    mark: "Teollinen nestaus",
    title: "AXNEST – teollinen nestaus myynnistä tuotantoon",
    lead: "Nestausohjelmisto koko organisaation käyttöön. Myynti, projektit ja tuotanto käyttävät samoja osia, materiaaleja ja leikkuusuunnitelmia.",
    sections: [
      {
        heading: "Osat valmiiksi nestaukseen",
        paragraphs: [
          "Tekoälyavusteinen tuonti poimii tarjouspyynnöstä mitat ja muodostaa niistä osia kirjastoon. Tuodut tiedot tarkistetaan ennen nestausta tai tuotantoa. Automaattinen siivous ja korjaus valmistelevat DXF-tiedostot ja muut tuetut vektoriaineistot nestaukseen. Osan voi myös piirtää, määrittää tai valita standardikirjastosta.",
        ],
      },
      {
        heading: "Kustannukset todellisesta sijoittelusta",
        paragraphs: [
          "Kun osat nestataan ennen hinnoittelua, materiaalitarve lasketaan todellisesta sijoittelusta eikä pelkästään pinta-alasta. Kustannuslaskenta ja tarjous perustuvat suunnitelmaan siitä, miten osat valmistetaan.",
        ],
      },
      {
        heading: "Sama suunnitelma tuotantoon",
        paragraphs: [
          "Sama nestaussuunnitelma siirtyy tuotantoon. Tämä auttaa pitämään materiaalinkulutuksen tarjouksen mukaisena ja vähentää odottamattoman materiaalihukan vaikutusta katteeseen. Tuotanto saa suunnitelman, jonka mukaan hinta laskettiin.",
        ],
      },
      {
        heading: "Yhteiset osat ja projektitiedot",
        paragraphs: [
          "AXNEST tuo myynnin, projektihenkilöstön ja tuotannon saman tiedon äärelle. Tallennettuja osia ja kirjastoja voidaan hyödyntää uudelleen, mikä vähentää päällekkäistä työtä ja helpottaa siirtymistä tarjousvaiheesta valmistukseen.",
        ],
      },
    ],
    cloud:
      "Suunniteltu ammattikäyttöön. AXNEST toimii pilvipalveluna UpCloudissa AMD-laitteistolla.",
    close: "AXNEST auttaa hinnoittelemaan sen, mitä tuotannossa aiotaan tehdä – ja valmistamaan sen, mitä asiakkaalle on tarjottu.",
  },
};
