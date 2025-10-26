
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Benefícios', href: '#beneficios' },
  { name: 'Sobre', href: '#sobre' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        isScrolled || isMenuOpen
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
                  alt="Kyon Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              )}
            </Link>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
             <Button asChild className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 py-3">
              <Link href="#agendar">
                Agendar uma demonstração
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
           <div className="md:hidden pt-2 pb-4 space-y-1 sm:px-3">
           {navItems.map((item) => (
             <Link
               key={item.name}
               href={item.href}
               onClick={() => setIsMenuOpen(false)}
               className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
             >
               {item.name}
             </Link>
           ))}
            <div className="pt-4">
              <Button asChild className="w-full group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 py-3">
                <Link href="#agendar" onClick={() => setIsMenuOpen(false)}>
                  Agendar uma demonstração
                </Link>
              </Button>
            </div>
         </div>
        )}
      </div>
    </header>
  );
}
