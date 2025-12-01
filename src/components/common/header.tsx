
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Settings, Briefcase, Info, HelpCircle, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home', id: 'home', icon: Home },
  { name: 'Serviços', href: '#como-funciona', id: 'como-funciona', icon: Settings },
  { name: 'Apoiadores', href: '#sucesso', id: 'sucesso', icon: Briefcase },
  { name: 'Sobre', href: '#sobre', id: 'sobre', icon: Info },
  { name: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const lastScrollY = useRef(0);

  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');
  const mobileLogo = PlaceHolderImages.find(img => img.id === 'kivo-logo-mobile');
  const mobileLogoShrunk = PlaceHolderImages.find(img => img.id === 'kivo-logo-mobile-shrunk');


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        setIsShrunk(false);
      } else if (currentScroll > lastScrollY.current) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
      <div className={cn(
        "container mx-auto flex items-center justify-between bg-background/60 rounded-full border border-border/20 shadow-lg transition-all duration-300 ease-in-out",
        "py-4 md:py-5", // Normal state padding
        "backdrop-blur-none",
        isShrunk && "py-2 md:py-3 backdrop-blur-md bg-background/40" // Shrunk state padding and blur
      )}>
        {/* Desktop Logo */}
        <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hidden md:flex items-center flex-shrink-0">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt="Kivo Logo"
              width={33}
              height={22}
              className="object-contain"
            />
          )}
        </Link>
        
        {/* Mobile: Spacer to help with centering */}
        <div className="w-10 md:hidden" />

        {/* Mobile: Centered Logo */}
        <div className="flex-1 flex justify-center md:hidden">
          <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="relative h-8 w-24 flex items-center justify-center">
            {mobileLogo && (
              <Image
                src={mobileLogo.imageUrl}
                alt="Kivo Logo"
                width={100}
                height={68}
                className={cn(
                  "object-contain h-8 w-auto absolute transition-opacity duration-300",
                  isShrunk ? "opacity-0" : "opacity-100"
                )}
              />
            )}
            {mobileLogoShrunk && (
              <Image
                src={mobileLogoShrunk.imageUrl}
                alt="Kivo Logo"
                width={100}
                height={68}
                className={cn(
                  "object-contain h-8 w-auto absolute transition-opacity duration-300",
                  isShrunk ? "opacity-100" : "opacity-0"
                )}
              />
            )}
          </Link>
        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="px-4 py-2 rounded-lg hover:bg-muted text-sm font-medium text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-muted/50 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <div className="hidden md:flex items-center flex-shrink-0">
            <Button onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }} className="ml-2 button-wavy-gradient rounded-full animate-pulse">
              Agendar
            </Button>
          </div>
          <SheetContent side="right" className="bg-background border-border/50">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b border-border/20">
                <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
                  {logo && (
                    <Image
                      src={logo.imageUrl}
                      alt="Kivo Logo"
                      width={130}
                      height={33}
                      className="object-contain"
                    />
                  )}
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                  <X />
                </Button>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted text-lg text-foreground"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto pt-4 border-t border-border/20">
                <Button onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }} className="w-full button-wavy-gradient rounded-full animate-pulse">
                  Agendar uma demonstração
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
