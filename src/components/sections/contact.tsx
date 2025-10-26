
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Enviar Mensagem'}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

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
    <section id="agendar" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow-primary">
            Agende uma demonstração
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Pronto para ver como nossa IA pode revolucionar sua empresa? Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-lg border-border/20 bg-card shadow-lg shadow-primary/10">
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Fale Conosco</CardTitle>
              <CardDescription>Deixe sua mensagem e retornaremos em breve.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" placeholder="Seu nome completo" required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                 {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" name="message" placeholder="Como podemos te ajudar?" required />
                 {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
