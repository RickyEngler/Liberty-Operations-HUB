import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Liberty',
  description: 'Portal de Integração da Empresa Liberty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
