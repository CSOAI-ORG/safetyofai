import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function riskColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'safe': return 'text-threat-low';
    case 'low': return 'text-threat-low';
    case 'medium': return 'text-threat-medium';
    case 'high': return 'text-threat-high';
    case 'critical': return 'text-threat-critical';
    default: return 'text-muted-foreground';
  }
}

export function riskBg(level: string): string {
  switch (level.toLowerCase()) {
    case 'safe': return 'bg-emerald-500/10 border-emerald-500/20';
    case 'low': return 'bg-emerald-500/10 border-emerald-500/20';
    case 'medium': return 'bg-amber-500/10 border-amber-500/20';
    case 'high': return 'bg-red-500/10 border-red-500/20';
    case 'critical': return 'bg-violet-500/10 border-violet-500/20';
    default: return 'bg-muted border-border';
  }
}

export function consensusLabel(score: number): string {
  if (score >= 90) return 'Strong Consensus';
  if (score >= 70) return 'Majority Agreement';
  if (score >= 50) return 'Mixed Signals';
  return 'Low Agreement';
}
