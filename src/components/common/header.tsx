'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Settings, Briefcase, Info, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Serviços', href: '#como-funciona', icon: Settings },
  { name: 'Apoiadores', href: '#sucesso', icon: Briefcase },
  { name: 'Sobre', href: '#sobre', icon: Info },
  { name: 'FAQ', href: '#faq', icon: HelpCircle },
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
        'fixed bottom-4 left-1/2 -translate-x-1/2 w-auto z-50 transition-all duration-300'
      )}
    >
      <TooltipProvider>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 bg-background/30 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-2">
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                return (
                  <Tooltip key={item.name} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={cn(
                          'relative flex items-center justify-center h-12 w-12 rounded-xl transition-colors duration-300',
                          isActive ? 'bg-muted text-primary' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </nav>
          </div>
        </div>
      </TooltipProvider>
    </header>
  );
}
