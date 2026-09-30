import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ADDRESS_LINE,
  GOOGLE_MAPS_SEARCH,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE,
  SITE_URL,
} from "@/config/site";
import "./globals.css";

const title = `${SITE.name} – ${SITE.tagline}`;
const description =
  "Clínica odontológica em Bauru/SP. Tratamentos estéticos, facetas, lentes, alinhadores e muito mais. Agende sua consulta!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "dentista bauru",
    "clínica odontológica bauru",
    "facetas dentais",
    "lentes de contato dental",
    "alinhadores",
    "ortodontia bauru",
    "clareamento dental bauru",
    "implante dentário bauru",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE.name,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Dados estruturados do negócio — é o que o Google usa para a ficha local. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#clinica`,
  name: SITE.name,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  telephone: PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE.replace(" – Centro", ""),
    addressLocality: "Bauru",
    addressRegion: "SP",
    postalCode: "17015-070",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -22.315, longitude: -49.06 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [INSTAGRAM_URL, GOOGLE_MAPS_SEARCH],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:font-semibold focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
