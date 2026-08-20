import type { Metadata } from "next";
import "./globals.css";
import "./credibility.css";

export const metadata: Metadata = {
  title: "NexoPC | Soporte de software profesional",
  description: "Soporte remoto, optimización, seguridad, respaldo y configuración de Windows y Linux con atención clara y confiable.",
  metadataBase: new URL("https://nexopc-soporte.chris04162008.chatgpt.site"),
  openGraph: {
    title: "NexoPC | Soporte de software profesional",
    description: "Tu computadora, funcionando como debe. Soporte claro y confiable en México.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NexoPC, soporte de software claro y confiable" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
