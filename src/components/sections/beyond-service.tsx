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
      className="sky-background"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                <span style={{fontFamily: "'Playfair Display', serif"}}>Muito além do atendimento</span>
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
