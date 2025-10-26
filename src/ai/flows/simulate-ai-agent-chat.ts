'use server';

/**
 * @fileOverview Simulates an AI agent chat interface.
 *
 * - simulateAIAgentChat - A function that simulates a chat with an AI agent.
 * - SimulateAIAgentChatInput - The input type for the simulateAIAgentChat function.
 * - SimulateAIAgentChatOutput - The return type for the simulateAIAgentChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateAIAgentChatInputSchema = z.object({
  message: z.string().describe('The user message to send to the AI agent.'),
});
export type SimulateAIAgentChatInput = z.infer<typeof SimulateAIAgentChatInputSchema>;

const SimulateAIAgentChatOutputSchema = z.object({
  response: z.string().describe('The AI agent response to the user message.'),
});
export type SimulateAIAgentChatOutput = z.infer<typeof SimulateAIAgentChatOutputSchema>;

export async function simulateAIAgentChat(input: SimulateAIAgentChatInput): Promise<SimulateAIAgentChatOutput> {
  return simulateAIAgentChatFlow(input);
}

const simulateAIAgentChatPrompt = ai.definePrompt({
  name: 'simulateAIAgentChatPrompt',
  input: {schema: SimulateAIAgentChatInputSchema},
  output: {schema: SimulateAIAgentChatOutputSchema},
  prompt: `You are a helpful AI agent that is able to assist users with their queries.
  User message: {{{message}}}`,
});

const simulateAIAgentChatFlow = ai.defineFlow(
  {
    name: 'simulateAIAgentChatFlow',
    inputSchema: SimulateAIAgentChatInputSchema,
    outputSchema: SimulateAIAgentChatOutputSchema,
  },
  async input => {
    const {output} = await simulateAIAgentChatPrompt(input);
    return output!;
  }
);
