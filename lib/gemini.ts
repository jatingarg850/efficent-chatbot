import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiResponse } from './types';

// Pricing per 1M tokens (as of 2024)
const PRICING = {
  promptTokens: 0.075, // $0.075 per 1M input tokens for gemini-2.5-flash
  completionTokens: 0.3, // $0.3 per 1M output tokens for gemini-2.5-flash
};

export function calculateCost(promptTokens: number, completionTokens: number): number {
  const promptCost = (promptTokens / 1_000_000) * PRICING.promptTokens;
  const completionCost = (completionTokens / 1_000_000) * PRICING.completionTokens;
  return promptCost + completionCost;
}

export function formatCost(cost: number): string {
  return `$${cost.toFixed(6)}`;
}
