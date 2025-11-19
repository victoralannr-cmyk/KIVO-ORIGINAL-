'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';


const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Serviços', href: '#como-funciona' },
  { name: 'Apoiadores', href: '#sucesso'},
  { name: 'Sobre', href: '#sobre' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center">
             {logo && (
              <Image
                src={logo.imageUrl}
                alt="Kivo Logo"
                width={120}
                height={30}
                className="h-10 w-auto"
              />
            )}
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
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
                    'relative font-medium text-sm transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.name}
                  {isActive && (
                     <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
             <Button asChild size="sm" className="hidden md:flex group transition-all duration-300 ease-in-out bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 rounded-full px-5 py-2">
                <Link href="#agendar">
                    Agendar
                </Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
