
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Puzzle, Award, Info, Handshake } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Serviços', href: '#como-funciona', icon: Puzzle },
  { name: 'Apoiadores', href: '#sucesso', icon: Award },
  { name: 'Sobre', href: '#sobre', icon: Info },
  { name: 'Contato', href: '#agendar', icon: Handshake },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (section.id) {
            observer.observe(section);
        }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
            observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-lg border border-white/10 shadow-lg rounded-full">
        <nav className="flex items-center justify-center h-16 md:h-20 space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  'flex flex-col items-center justify-center w-16 h-16 rounded-full text-center p-2 transition-all duration-300 ease-in-out',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <item.icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
