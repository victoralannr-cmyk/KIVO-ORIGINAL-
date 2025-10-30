
import Image from 'next/image';

const items = [
    {
        image: 'https://kyondigital.com/wp-content/uploads/2025/08/001.png',
        text: 'Automatizam processos internos',
    },
    {
        image: 'https://kyondigital.com/wp-content/uploads/2025/08/002.png',
        text: 'Geram e enviam planilhas automaticamente',
    },
    {
        image: 'https://kyondigital.com/wp-content/uploads/2025/08/003.png',
        text: 'Organizam informações em tempo real',
    },
]

export default function BeyondServiceSection() {
  return (
    <section 
      className="relative bg-card py-12 md:py-24 lg:py-32 bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/rpsT480S/6167b44b090043d5151bacce172725d9.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-primary">
                Muito além do atendimento
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                Na Kivo, nossos agentes de IA não se limitam a responder clientes. Eles atuam como assistentes digitais completos, capazes de automatizar tarefas e organizar processos que antes tomavam horas da sua equipe.
            </p>
            <p className="mt-8 font-headline text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">
                O que eles também fazem:
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <Image src={item.image} alt={item.text} width={150} height={150}/>
                        <p className="text-lg font-medium text-foreground">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
