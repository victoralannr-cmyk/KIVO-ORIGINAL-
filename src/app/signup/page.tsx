'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import Aurora from '@/components/common/aurora';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
        toast({
            variant: "destructive",
            title: "Senha muito curta",
            description: "A senha deve ter pelo menos 6 caracteres.",
        });
        setIsLoading(false);
        return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        company,
        phone,
        createdAt: new Date(),
      });

      // Initialize module progress
      await setDoc(doc(db, 'userProgress', user.uid), {
        completedModules: []
      });

      toast({
        title: 'Cadastro realizado com sucesso!',
        description: 'Você será redirecionado para o painel.',
      });

      router.push('/dashboard');
    } catch (error: any) {
      let errorMessage = 'Ocorreu um erro ao criar a conta.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este e-mail já está em uso.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'O formato do e-mail é inválido.';
      }
      toast({
        variant: 'destructive',
        title: 'Erro no cadastro',
        description: errorMessage,
      });
      console.error('Erro no cadastro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden">
      <Aurora colorStops={['#1A237E', '#4285F4', '#1A237E']} amplitude={0.2} blend={1.0} />
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-card/50 backdrop-blur-lg rounded-2xl border border-border/20 shadow-2xl my-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Crie sua conta</h1>
          <p className="text-muted-foreground">Comece sua jornada conosco hoje.</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu nome</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-background/80" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu melhor e-mail</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-background/80" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha (mínimo 6 caracteres)</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-background/80" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Nome da Empresa</Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required className="bg-background/80" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="phone">Telefone (WhatsApp)</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="bg-background/80" />
          </div>
          <Button type="submit" className="w-full button-wavy-gradient" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Criar Conta'}
          </Button>
        </form>
         <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{' '}
          <Link href="/login" className="font-semibold text-accent hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
