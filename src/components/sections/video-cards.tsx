'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '../common/scroll-reveal';

const videoCardsData = [
  {
    videoId: 'L_LUpnjgPso',
    title: 'Automações',
    description: 'Nossos agentes de IA podem automatizar tarefas repetitivas, liberando sua equipe para se concentrar no que realmente importa.',
  },
  {
    videoId: 'm_u6m3kJr58',
    title: 'Atendimento',
    description: 'Ofereça suporte 24/7 aos seus clientes com respostas instantâneas e personalizadas, melhorando a satisfação.',
  },
  {
    videoId: 'UpS5_w2dGjQ',
    title: 'Vendas',
    description: 'Qualifique leads, agende reuniões e até mesmo feche vendas, tudo de forma automática e eficiente com nossos agentes.',
  },
];

const VideoCard = ({ videoId, title, description, delay }: { videoId: string; title: string; description: string; delay: number }) => {
  return (
    <ScrollReveal delay={delay} direction="up">
      <Card className="bg-background/80 border-border/30 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col glow-shadow-primary transition-all duration-300 hover:shadow-accent/50 hover:-translate-y-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground text-center">{title}</CardTitle>
        </CardHeader>
        <div className="relative aspect-video">
           <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
            title={`YouTube video player for ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <p className="text-muted-foreground text-sm flex-grow">{description}</p>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};


export default function VideoCardsSection() {
  return (
    <section className="py-12 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoCardsData.map((card, index) => (
            <VideoCard
              key={card.title}
              videoId={card.videoId}
              title={card.title}
              description={card.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
