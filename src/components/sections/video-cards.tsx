'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const videos = [
  {
    videoId: 'm_u6m3kJr58',
    title: 'Estratégias de Vendas',
    description: 'Ofereça suporte 24/7 aos seus clientes com respostas instantâneas e personalizadas, melhorando a satisfação.',
  },
  {
    videoId: 'm_u6m3kJr58',
    title: 'Atendimento',
    description: 'Automatize tarefas repetitivas e libere sua equipe para focar em atividades estratégicas que geram mais valor.',
  },
  {
    videoId: 'm_u6m3kJr58',
    title: 'Vendas',
    description: 'Qualifique leads e agende reuniões automaticamente, aumentando a eficiência do seu time de vendas.',
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
          {videos.map((video, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="bg-[#19233A] rounded-lg shadow-lg overflow-hidden h-[550px] flex flex-col p-4">
                <div 
                  className="relative h-[200px] w-full"
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                  </div>
                   <h3 className="relative text-white font-bold text-xl mb-4 text-center">{video.title}</h3>
                </div>
                <div className="flex-grow flex items-center justify-center p-4">
                   <div className="relative w-full h-full pb-[56.25%]" style={{paddingBottom: 0}}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-white/80 text-sm text-center">{video.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
