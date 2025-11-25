'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import CodeTypingAnimation from './code-typing-animation';
import CreativeStrategyCard from './creative-strategy-card';

const cardContent = [
  {
    type: 'video',
    videoId: 'dQw4w9WgXcQ', // Placeholder, to be replaced
    title: 'Estratégias de Vendas',
    description: 'Atraímos atenção qualificada, geramos conversões reais e ampliamos suas visualizações. Aqui, sua marca deixa de ser invisível. Estratégias precisas em Google e Facebook Ads para resultados que realmente aparecem.',
  },
  {
    type: 'animation',
    title: 'Criação de Sites',
    description: 'Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.',
  },
  {
    type: 'creative',
    title: 'Setor Criativo',
    description: 'Desenvolvemos posicionamento e vitrines digitais que elevam sua autoridade, despertam desejo e impulsionam vendas — mesmo sem depender de investimento em anúncios.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function VideoCardsSection() {
  return (
    <section className="py-12 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardContent.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-card/10 backdrop-blur-sm border-border/20 shadow-lg rounded-2xl overflow-hidden h-full flex flex-col p-4">
                <div 
                  className="relative"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '8px',
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/futuristic.png')" }}
                  ></div>
                   <h3 className="relative text-white font-bold text-xl mb-4 text-center">{item.title}</h3>
                </div>
                <div className="flex-grow flex items-center justify-center p-2">
                   <div className="relative w-full h-[190px] flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : item.type === 'animation' ? (
                      <div className="w-full h-full rounded-lg overflow-hidden relative flex justify-center items-center">
                         <CodeTypingAnimation />
                      </div>
                    ): (
                      <CreativeStrategyCard />
                    )}
                  </div>
                </div>

                <div className="p-4 mt-auto">
                  <p className="text-white/80 text-sm text-center">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
