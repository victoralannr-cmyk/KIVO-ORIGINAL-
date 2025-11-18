
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from '../common/scroll-reveal';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full rounded-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Enviar'}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Sucesso!',
          description: state.message,
        });
      } else if (state.errors) {
        toast({
          variant: 'destructive',
          title: 'Erro de Validação',
          description: state.message,
        });
      } else {
         toast({
          variant: 'destructive',
          title: 'Erro no Envio',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section 
      id="agendar" 
      className="relative bg-transparent py-12 md:py-24 overflow-hidden"
    >
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute top-0 -left-20 w-1/2 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '60s' }}
          />
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <div className="space-y-4 text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  Preencha com seus dados para começar
              </h2>
              <p className="text-muted-foreground md:text-lg">
                  Nosso time entrará em contato para fazer uma demonstração gratuita.
              </p>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <Card className="w-full max-w-lg mx-auto bg-card/80 backdrop-blur-sm border-border/20 shadow-lg rounded-2xl">
            <form action={formAction}>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Input id="name" name="name" placeholder="Seu nome" required className="bg-input rounded-full"/>
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
                </div>
                <div className="space-y-2">
                  <Input id="email" name="email" type="email" placeholder="Seu melhor e-mail" required className="bg-input rounded-full"/>
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
                </div>
                <div className="space-y-2">
                  <Input id="whatsapp" name="whatsapp" placeholder="WhatsApp" required className="bg-input rounded-full"/>
                </div>
                <div className="spacey-2">
                  <Input id="company" name="company" placeholder="Qual é o nome da sua empresa?" required className="bg-input rounded-full"/>
                </div>
                <div className="space-y-2">
                  <Input id="segment" name="segment" placeholder="Qual o segmento da sua empresa?" required className="bg-input rounded-full"/>
                </div>
                <div className="space-y-2">
                  <select name="revenue" id="revenue" className="w-full h-10 rounded-full border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-muted-foreground" required>
                      <option value="" disabled selected>Qual é o seu faturamento mensal atual?</option>
                      <option value="Até R$ 20.000">Até R$ 20.000</option>
                      <option value="de R$ 20.000 a R$ 40.000">de R$ 20.000 a R$ 40.000</option>
                      <option value="de R$ 41.000 a R$ 60.000">de R$ 41.000 a R$ 60.000</option>
                      <option value="de R$ 61.000 a R$ 100.000">de R$ 61.000 a R$ 100.000</option>
                      <option value="de R$ 100.000 a R$ 500.000">de R$ 100.000 a R$ 500.000</option>
                      <option value="de R$ 500.000 a R$ 1.000.000">de R$ 500.000 a R$ 1.000.000</option>
                      <option value="Mais de R$ 1.000.000 por mês">Mais de R$ 1.000.000 por mês</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

    