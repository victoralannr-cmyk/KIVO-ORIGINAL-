
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import BackToTop from '@/components/common/back-to-top';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Kivo | Agentes de IA sob medida',
  description: 'Integrating Generative AI into your business.',
  icons: {
    icon: 'https://i.postimg.cc/BnkbJxMQ/favicon-kivo-(1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="https://i.postimg.cc/BnkbJxMQ/favicon-kivo-(1).png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased text-foreground")}>
        <div className="main-content">
          {children}
        </div>
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
