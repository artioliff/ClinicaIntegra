import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Íntegra Odontologia – Odontologia com Excelência em Bauru",
  description: "Clínica odontológica em Bauru/SP. Tratamentos estéticos, facetas, lentes, alinhadores e muito mais com a Dra. Marcela Souza. Agende sua consulta!",
  keywords: "dentista bauru, clínica odontológica bauru, facetas dentais, lentes de contato dental, alinhadores, ortodontia bauru",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
