
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Benefícios', href: '#beneficios' },
  { name: 'Sobre', href: '#sobre' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {logo && (
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                  data-ai-hint={logo.imageHint}
                />
              )}
              <span className="font-headline text-2xl font-bold text-foreground">
                AetherAI
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
             <Button asChild className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#agendar">
                Agendar uma demonstração
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
