import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import BackToTop from '@/components/common/back-to-top';
import { cn } from '@/lib/utils';
import AnimatedGradientBackground from '@/components/common/AnimatedGradientBackground';


export const metadata: Metadata = {
  title: 'Kivo | Agentes de IA sob medida',
  description: 'Integrating Generative AI into your business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <AnimatedGradientBackground className="fixed top-0 left-0 w-full h-full z-[-1]" />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <BackToTop />
        </body>
    </html>
  );
}
