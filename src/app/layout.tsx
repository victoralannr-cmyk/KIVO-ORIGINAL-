
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import BackToTop from '@/components/common/back-to-top';
import { cn } from '@/lib/utils';
import FloatingLines from '@/components/common/FloatingLines';

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased text-foreground")}>
        
        <FloatingLines
          linesGradient={['#AEB7C4', '#F8F9FB']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[10, 6]}
          lineDistance={[0.5, 3]}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -0.8 }}
          animationSpeed={0.5}
          interactive={true}
          bendRadius={8.0}
          bendStrength={-0.3}
          mouseDamping={0.03}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />

        <div className="relative z-10 app-container main-content">
          {children}
        </div>
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
