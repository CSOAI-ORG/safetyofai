import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  source: z
    .enum(['homepage', 'blog', 'scanner', 'checklist', 'pricing'])
    .default('homepage'),
  framework: z
    .enum(['eu-ai-act', 'dora', 'nis2', 'iso-42001', 'gdpr'])
    .optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
