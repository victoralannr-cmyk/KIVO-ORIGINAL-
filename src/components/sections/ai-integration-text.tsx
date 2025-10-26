
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  customizeAIAgentIntegrationText,
  CustomizeAIAgentIntegrationTextInput,
} from '@/ai/flows/customize-ai-agent-integration-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const FormSchema = z.object({
  useCase: z.string().min(10, 'Por favor, descreva o caso de uso com mais detalhes.'),
  currentEvents: z.string().optional(),
});

export default function AiIntegrationTextSection() {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { useCase: '', currentEvents: '' },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    setIsLoading(true);
    setGeneratedText('');
    try {
      const result = await customizeAIAgentIntegrationText(data as CustomizeAIAgentIntegrationTextInput);
      setGeneratedText(result.customizedText);
    } catch (error) {
      console.error('Failed to generate text:', error);
      toast({
        variant: 'destructive',
        title: 'Erro na Geração',
        description: 'Não foi possível gerar o texto. Por favor, tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow-primary">
            Gerador de Texto para Integração de IA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Use nossa IA para criar um texto personalizado sobre como um agente de IA pode beneficiar sua empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border-border/20 bg-card">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Personalize seu Texto</CardTitle>
                  <CardDescription>
                    Preencha os campos abaixo para que nossa IA crie um texto sob medida.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="useCase"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Caso de Uso Específico</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ex: Automatizar o suporte ao cliente para uma loja de e-commerce de moda." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currentEvents"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Eventos Atuais ou Contexto (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Próximo lançamento da coleção de inverno." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Gerar Texto'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <Card className="border-border/20 bg-card">
            <CardHeader>
              <CardTitle>Texto Gerado</CardTitle>
              <CardDescription>O texto personalizado pela IA aparecerá aqui.</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px] whitespace-pre-wrap rounded-md bg-muted p-4 text-sm text-muted-foreground">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                generatedText || 'Aguardando geração...'
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
