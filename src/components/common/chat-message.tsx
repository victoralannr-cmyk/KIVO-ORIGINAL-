'use client';

import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ChatMessageProps {
  logo: ImagePlaceholder | undefined;
  text: string;
  className?: string;
}

export default function ChatMessage({ logo, text, className }: ChatMessageProps) {
  return (
    <div className={`self-start flex items-start gap-2 w-full ${className}`}>
      <div className="bg-card p-1.5 rounded-full mt-2 border border-border/50">
        {logo && (
          <Image 
            src={logo.imageUrl} 
            width={32} 
            height={32} 
            alt="Kivo Logo" 
            className="rounded-full object-contain" 
          />
        )}
      </div>
      <div className="bg-muted text-foreground p-3 rounded-lg rounded-bl-none max-w-[80%]">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
