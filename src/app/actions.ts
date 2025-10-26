
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um endereço de e-mail válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro: Por favor, verifique os campos do formulário.',
      success: false,
    };
  }

  try {
    // Here you would typically save to a database like Firebase Firestore.
    // For this simulation, we'll just log the data.
    console.log('Contact form submitted:');
    console.log('Name:', validatedFields.data.name);
    console.log('Email:', validatedFields.data.email);
    console.log('Message:', validatedFields.data.message);
    
    return {
      message: 'Mensagem enviada com sucesso!',
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
      success: false,
    };
  }
}
