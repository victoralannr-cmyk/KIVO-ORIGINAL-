
import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import BackToTop from '@/components/common/back-to-top';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
});

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
    <html lang="pt-BR" className={cn("scroll-smooth dark", poppins.variable)}>
      <head>
        <link rel="icon" href="https://i.postimg.cc/BnkbJxMQ/favicon-kivo-(1).png" type="image/png" />
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
