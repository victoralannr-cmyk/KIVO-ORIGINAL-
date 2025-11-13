
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Menu, X, Home, Puzzle, Award, Info } from 'lucide-react';
import { ExpandableTabs } from '../ui/expandable-tabs';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Como Funciona', href: '#como-funciona', icon: Puzzle },
  { name: 'Benefícios', href: '#sucesso', icon: Award },
  { name: 'Sobre', href: '#sobre', icon: Info },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const item = navItems[index];
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const tabs = navItems.map(item => ({ title: item.name, icon: item.icon }));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-in-out'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-lg border border-white/20 shadow-lg rounded-full">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {logo && (
                <Image
                  src={logo.imageUrl}
                  alt="Kivo Logo"
                  width={200}
                  height={50}
                  className="h-16 w-auto"
                />
              )}
            </Link>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <ExpandableTabs tabs={tabs} onChange={handleTabChange} />
          </nav>

          <div className="hidden md:flex items-center">
             <Button asChild className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-6 py-3">
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
              <Button asChild className="w-full group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-6 py-3">
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
