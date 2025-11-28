
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');
  return (
    <footer className="bg-transparent border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            {logo && (
              <Image
                src={logo.imageUrl}
                alt="Kivo Logo"
                width={150}
                height={42}
                className="h-12 w-auto object-contain"
              />
            )}
          </div>

        </div>

        <div className="mt-8 border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kivo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
