'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Settings, Briefcase, Info, HelpCircle, X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Serviços', href: '#como-funciona', id: 'como-funciona' },
  { name: 'Apoiadores', href: '#sucesso', id: 'sucesso' },
  { name: 'Sobre', href: '#sobre', id: 'sobre' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto">
        <nav 
          className="w-full h-16 flex items-center justify-between rounded-2xl px-4"
          style={{
            background: 'rgba(33, 33, 33, 0.4)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            {logo && (
              <Image
                src={logo.imageUrl}
                alt="Kivo Logo"
                width={100}
                height={30}
                className="h-8 w-auto object-contain"
              />
            )}
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-muted/50 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
             <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2 rounded-lg hover:bg-muted/20 text-sm font-medium text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
               <Button asChild className="button-wavy-gradient rounded-full ml-2">
                <Link href="#agendar" onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }}>
                  Agendar
                </Link>
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
                        width={100}
                        height={30}
                        className="h-8 w-auto object-contain"
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
                  <Button asChild className="w-full button-wavy-gradient rounded-full">
                      <Link href="#agendar" onClick={(e) => { e.preventDefault(); handleNavClick('#agendar'); }}>
                        Agendar uma demonstração
                      </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
