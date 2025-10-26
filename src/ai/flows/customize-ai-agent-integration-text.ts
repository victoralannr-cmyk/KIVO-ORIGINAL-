'use server';
/**
 * @fileOverview A flow that customizes the AI agent integration text based on use-case and current events.
 *
 * - customizeAIAgentIntegrationText - A function that customizes the AI agent integration text.
 * - CustomizeAIAgentIntegrationTextInput - The input type for the customizeAIAgentIntegrationText function.
 * - CustomizeAIAgentIntegrationTextOutput - The return type for the customizeAIAgentIntegrationText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeAIAgentIntegrationTextInputSchema = z.object({
  useCase: z.string().describe('The specific use case for AI agent integration.'),
  currentEvents: z.string().describe('Relevant current events that might affect the integration.'),
});
export type CustomizeAIAgentIntegrationTextInput = z.infer<typeof CustomizeAIAgentIntegrationTextInputSchema>;

const CustomizeAIAgentIntegrationTextOutputSchema = z.object({
  customizedText: z.string().describe('The customized text about integrating AI into a company.'),
});
export type CustomizeAIAgentIntegrationTextOutput = z.infer<typeof CustomizeAIAgentIntegrationTextOutputSchema>;

export async function customizeAIAgentIntegrationText(input: CustomizeAIAgentIntegrationTextInput): Promise<CustomizeAIAgentIntegrationTextOutput> {
  return customizeAIAgentIntegrationTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeAIAgentIntegrationTextPrompt',
  input: {schema: CustomizeAIAgentIntegrationTextInputSchema},
  output: {schema: CustomizeAIAgentIntegrationTextOutputSchema},
  prompt: `You are an expert AI assistant specializing in crafting compelling text about integrating AI agents into companies.

  Based on the provided use case and current events, create informative and engaging text that highlights the benefits of AI integration.

  Use Case: {{{useCase}}}
Current Events: {{{currentEvents}}}

  Customized Text:`, // Changed from Integration Text to Customized Text to follow output schema
});

const customizeAIAgentIntegrationTextFlow = ai.defineFlow(
  {
    name: 'customizeAIAgentIntegrationTextFlow',
    inputSchema: CustomizeAIAgentIntegrationTextInputSchema,
    outputSchema: CustomizeAIAgentIntegrationTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
