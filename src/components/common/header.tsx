
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Settings, Briefcase, Info, HelpCircle, X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Serviços', href: '#como-funciona', icon: Settings },
  { name: 'Apoiadores', href: '#sucesso', icon: Briefcase },
  { name: 'Sobre', href: '#sobre', icon: Info },
  { name: 'FAQ', href: '#faq', icon: HelpCircle },
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
          className="w-full h-16 p-1 rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, rgb(33, 33, 33) 0%, rgba(33, 33, 33, 0.4) 100%)'
          }}
        >
          <div className="w-full h-full flex flex-col justify-center rounded-xl px-4">
            <div className="w-full flex items-center justify-between">
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
                  <Button variant="ghost" size="icon" className="text-white hover:bg-muted/50">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
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
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted text-lg"
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
            </div>
            <div 
              className="h-px w-full mt-2" 
              style={{ background: 'linear-gradient(90deg, rgba(61, 61, 61, 0) 0%, rgb(50, 50, 50) 25%, rgb(50, 50, 50) 75%, rgba(61, 61, 61, 0) 100%)' }}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
