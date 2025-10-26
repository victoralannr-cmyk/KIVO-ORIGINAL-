
import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            {logo && (
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={32}
                height={32}
                className="h-8 w-auto"
                data-ai-hint={logo.imageHint}
              />
            )}
            <span className="font-headline text-xl font-bold text-foreground">AetherAI</span>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AetherAI. Todos os direitos reservados.</p>
          <Link href="#" className="mt-4 sm:mt-0 transition-colors hover:text-primary">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
