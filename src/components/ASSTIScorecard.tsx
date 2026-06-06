'use client';

import { useState } from 'react';
import { csoai } from '@/lib/csoai';
import { Shield, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

interface ASSTIResult {
  assti_score: number;
  assti_score_out_of_10: number;
  grade: string;
  label: string;
  dimensions: {
    intent_disclosure: number;
    uncertainty_calibration: number;
    limitation_awareness: number;
    traceability: number;
  };
}

const DIMENSIONS = [
  { key: 'intent_disclosure', label: 'Intent Disclosure', desc: 'Does the system declare its objective?' },
  { key: 'uncertainty_calibration', label: 'Uncertainty Calibration', desc: 'Does it report confidence accurately?' },
  { key: 'limitation_awareness', label: 'Limitation Awareness', desc: 'Does it know and disclose its boundaries?' },
  { key: 'traceability', label: 'Traceability', desc: 'Is its reasoning chain inspectable?' },
];

export default function ASSTIScorecard() {
  const [systemId, setSystemId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ASSTIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runASSTI = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await csoai.tool('safetyofai', 'assti_calculate', {
        system_id: systemId,
        intent_disclosure: { stated_objective: true, objective_documentation_url: true, objective_versioned: false },
        uncertainty_calibration: { reports_confidence: true, confidence_validated: false, calibration_curve_available: false },
        limitation_awareness: { known_limitations_listed: true, failure_modes_documented: true, out_of_scope_handling: false },
        traceability: { reasoning_logged: true, logs_auditable: false, chain_of_thought_exposed: true },
      });
      setResult(res as ASSTIResult);
    } catch (err: any) {
      setError(err.message || 'ASSTI calculation failed');
    } finally {
      setLoading(false);
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-emerald-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-amber-400';
      case 'D': return 'text-orange-400';
      default: return 'text-red-400';
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-brand-400" />
        <h3 className="font-semibold text-sm">ASSTI Scorecard</h3>
        <span className="text-[10px] bg-brand-400/10 text-brand-300 px-2 py-0.5 rounded-full font-mono">
          MCP
        </span>
      </div>

      <p className="text-xs text-muted-foreground">
        AI Self-State Transparency Index — a public, auditable score measuring how transparently
        an AI system reports its intent, uncertainty, limitations, and reasoning.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={systemId}
          onChange={(e) => setSystemId(e.target.value)}
          placeholder="System ID (e.g., gpt-4, claude-3, my-model-v2)"
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-400"
        />
        <button
          onClick={runASSTI}
          disabled={loading || !systemId}
          className="flex items-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? <BarChart3 className="w-4 h-4 animate-spin" /> : <BarChart3 className="w-4 h-4" />}
          Score
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
            <div>
              <div className="text-xs text-muted-foreground">ASSTI Score</div>
              <div className="text-2xl font-bold">{result.assti_score_out_of_10}<span className="text-sm text-muted-foreground">/10</span></div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getGradeColor(result.grade)}`}>{result.grade}</div>
              <div className="text-xs text-muted-foreground">{result.label}</div>
            </div>
          </div>

          <div className="space-y-2">
            {DIMENSIONS.map(({ key, label, desc }) => {
              const score = result.dimensions[key as keyof typeof result.dimensions] || 0;
              return (
                <div key={key} className="flex items-center gap-3">
                  <CheckCircle className={`w-4 h-4 ${score >= 0.7 ? 'text-emerald-400' : score >= 0.4 ? 'text-amber-400' : 'text-red-400'}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium">{label}</span>
                      <span className="font-mono">{(score * 100).toFixed(0)}%</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{desc}</div>
                    <div className="h-1.5 bg-muted rounded-full mt-1">
                      <div
                        className={`h-full rounded-full ${score >= 0.7 ? 'bg-emerald-400' : score >= 0.4 ? 'bg-amber-400' : 'bg-red-400'}`}
                        style={{ width: `${score * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-[10px] text-muted-foreground font-mono">
            Formula: ASSTI = (I + U + L + T) / 4 · Verifiable · Public
          </div>
        </div>
      )}
    </div>
  );
}
