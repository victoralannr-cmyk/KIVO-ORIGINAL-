
'use client';

import { useState, useMemo } from 'react';
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import BackToTop from '@/components/common/back-to-top';
import { cn } from '@/lib/utils';
import FloatingLines from '@/components/common/FloatingLines';
import { NavigationProvider, useNavigation } from '@/context/NavigationContext';

const metadata: Metadata = {
  title: 'Kivo | Agentes de IA sob medida',
  description: 'Integrating Generative AI into your business.',
};

const wavePositions = {
  home: {
    top: { x: 10.0, y: 0.5, rotate: -0.4 },
    middle: { x: 5.0, y: 0.0, rotate: 0.2 },
    bottom: { x: 2.0, y: -0.7, rotate: 0.8 },
  },
  'como-funciona': {
    top: { x: 8.0, y: 0.6, rotate: 0.3 },
    middle: { x: 6.0, y: -0.2, rotate: -0.5 },
    bottom: { x: 3.0, y: -0.5, rotate: 0.6 },
  },
  sucesso: {
    top: { x: 12.0, y: 0.4, rotate: -0.6 },
    middle: { x: 4.0, y: 0.1, rotate: 0.4 },
    bottom: { x: 1.0, y: -0.9, rotate: -1.0 },
  },
  sobre: {
    top: { x: 9.0, y: 0.7, rotate: 0.5 },
    middle: { x: 7.0, y: -0.1, rotate: -0.3 },
    bottom: { x: 4.0, y: -0.6, rotate: 0.7 },
  },
  faq: {
    top: { x: 11.0, y: 0.3, rotate: -0.2 },
    middle: { x: 3.0, y: 0.2, rotate: 0.6 },
    bottom: { x: 5.0, y: -0.8, rotate: -0.9 },
  },
  agendar: {
    top: { x: 7.0, y: 0.8, rotate: 0.1 },
    middle: { x: 8.0, y: -0.3, rotate: -0.1 },
    bottom: { x: 6.0, y: -0.4, rotate: 0.5 },
  }
};


function AppLayout({ children }: { children: React.ReactNode }) {
  const { activeSection } = useNavigation();

  const currentPositions = useMemo(() => {
    return wavePositions[activeSection as keyof typeof wavePositions] || wavePositions.home;
  }, [activeSection]);

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
          topWavePosition={currentPositions.top}
          middleWavePosition={currentPositions.middle}
          bottomWavePosition={currentPositions.bottom}
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <AppLayout>{children}</AppLayout>
    </NavigationProvider>
  );
}
