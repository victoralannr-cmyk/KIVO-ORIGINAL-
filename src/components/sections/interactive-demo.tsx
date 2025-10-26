
'use client';

import { useState } from 'react';
import { simulateAIAgentChat } from '@/ai/flows/simulate-ai-agent-chat';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export default function InteractiveDemoSection() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Como posso te ajudar a entender o potencial da nossa IA?', sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const aiAvatar = PlaceHolderImages.find((img) => img.id === 'ai-avatar');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { response } = await simulateAIAgentChat({ message: input });
      const aiMessage: Message = { text: response, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        text: 'Desculpe, não consegui processar sua mensagem. Tente novamente.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Error simulating chat:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demonstracao" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
            Demonstração Interativa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Converse com nosso mini agente de IA e veja um exemplo do que ele pode fazer.
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="border-border/20 bg-background/50 shadow-lg shadow-primary/10">
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] p-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-start gap-3',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.sender === 'ai' && (
                        <Avatar className="h-8 w-8">
                           {aiAvatar && <AvatarImage src={aiAvatar.imageUrl} />}
                          <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'max-w-xs rounded-lg px-4 py-2 text-sm md:max-w-md',
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {message.text}
                      </div>
                       {message.sender === 'user' && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-8 w-8">
                           {aiAvatar && <AvatarImage src={aiAvatar.imageUrl} />}
                           <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                        </Avatar>
                        <div className="max-w-xs rounded-lg px-4 py-2 text-sm bg-muted text-muted-foreground">
                            <span className="animate-pulse">...</span>
                        </div>
                     </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t border-border/20 p-4">
              <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
