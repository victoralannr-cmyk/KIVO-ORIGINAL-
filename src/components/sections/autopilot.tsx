
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const autopilotItems = [
  {
    image: 'https://kyondigital.com/wp-content/uploads/2025/09/Frame-1707480018.png',
    title: 'Pode atender clientes automaticamente no WhatsApp, 24/7',
    description: 'responde dúvidas, envia informações e resolve solicitações em segundos.',
  },
  {
    video: 'https://kyondigital.com/wp-content/uploads/2025/09/adb6767d-30f9-43df-a05a-3f69dcef6e09-video.mp4',
    title: 'Aprende continuamente',
    description: 'melhora a cada interação, ficando mais eficiente com o tempo.',
  },
  {
    video: 'https://kyondigital.com/wp-content/uploads/2025/09/Card-3-1-1.mp4',
    title: 'Reduz custos operacionais',
    description: 'elimina tarefas repetitivas e libera sua equipe para o que realmente importa.',
  },
  {
    video: 'https://framerusercontent.com/modules/assets/4569G5GgI0f681v431A7M4d1s~i_GApjzrmpTz36Ld2o8L22fECg87n8mkdg0dI6p-24c.mp4',
    title: 'Resolve problemas',
    description: 'agenda compromissos, abre tickets, envia notificações e atualiza dados.',
  },
];

export default function AutopilotSection() {
  return (
    <section 
      className="bg-transparent py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Seu atendimento, vendas e suporte no piloto automático
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Imagine ter um assistente inteligente, disponível o tempo todo, que:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {autopilotItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl">
              <div className="relative h-48 w-full">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.image!}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6 text-base">{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
