
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Settings, Briefcase, Info, HelpCircle, X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', id: 'home', icon: Home },
  { name: 'Serviços', href: '#como-funciona', id: 'como-funciona', icon: Settings },
  { name: 'Apoiadores', href: '#sucesso', id: 'sucesso', icon: Briefcase },
  { name: 'Sobre', href: '#sobre', id: 'sobre', icon: Info },
  { name: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
      <div className="container mx-auto h-[70px] md:h-20 flex items-center justify-between bg-background/60 backdrop-blur-md rounded-full border border-border/20 shadow-lg px-5 md:px-10">
        <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center flex-shrink-0">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt="Kivo Logo"
              width={37}
              height={23}
              className="object-contain"
            />
          )}
        </Link>

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
            <Button onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }} className="ml-2 button-wavy-gradient rounded-full">
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
                <Button onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }} className="w-full button-wavy-gradient rounded-full">
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
