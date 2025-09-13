import "./globals.css";

import Providers from "@/store/Provider";
import { Loader } from "@/components/loader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Escala Materiais Elétricos - Tecnologia e Qualidade para sua Obra",
  description:
    "A Escala oferece materiais elétricos de qualidade: fios, cabos, quadros, disjuntores, interruptores, tomadas, eletrodutos e muito mais. Entrega rápida e segura para sua obra.",
  icons: {
    icon: "/favicon.ico", // depois você pode trocar pelo ícone da Escala
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "none" }}>
        <Loader>
          <Providers>
            <div>{children}</div>
          </Providers>
        </Loader>
      </body>
    </html>
  );
}
