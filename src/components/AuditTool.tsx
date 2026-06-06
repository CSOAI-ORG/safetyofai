'use client';

import { useState } from 'react';
import { runSafetyAudit, detectBias, generateXAIReport } from '@/lib/csoai';
import { ClipboardCheck, AlertTriangle, Brain, Loader2 } from 'lucide-react';

type AuditMode = 'compliance' | 'bias' | 'explainability';

export default function AuditTool() {
  const [mode, setMode] = useState<AuditMode>('compliance');
  const [modelId, setModelId] = useState('');
  const [framework, setFramework] = useState('eu-ai-act');
  const [dataset, setDataset] = useState('');
  const [inputData, setInputData] = useState('{}');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const runAudit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      let res;
      if (mode === 'compliance') {
        res = await runSafetyAudit(modelId, framework);
      } else if (mode === 'bias') {
        res = await detectBias(modelId, dataset);
      } else {
        res = await generateXAIReport(modelId, JSON.parse(inputData));
      }
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Audit failed');
    } finally {
      setLoading(false);
    }
  };

  const modes: { key: AuditMode; label: string; icon: any; desc: string }[] = [
    { key: 'compliance', label: 'Compliance Audit', icon: ClipboardCheck, desc: 'EU AI Act, ISO 42001, NIST' },
    { key: 'bias', label: 'Bias Detection', icon: AlertTriangle, desc: 'Demographic fairness analysis' },
    { key: 'explainability', label: 'XAI Report', icon: Brain, desc: 'SHAP / LIME explanations' },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <ClipboardCheck className="w-5 h-5 text-brand-400" />
        <h3 className="font-semibold text-sm">AI Safety Auditor</h3>
        <span className="text-[10px] bg-brand-400/10 text-brand-300 px-2 py-0.5 rounded-full font-mono">
          MCP
        </span>
      </div>

      <div className="flex gap-2">
        {modes.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
              mode === key
                ? 'border-brand-400 bg-brand-400/10 text-brand-300'
                : 'border-border bg-background text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Model ID</label>
          <input
            type="text"
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
            placeholder="e.g. gpt-4, claude-3, custom-model-v2"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-400"
          />
        </div>

        {mode === 'compliance' && (
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Framework</label>
            <select
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-400"
            >
              <option value="eu-ai-act">EU AI Act</option>
              <option value="iso-42001">ISO 42001</option>
              <option value="nist-ai-rmf">NIST AI RMF</option>
              <option value="dora">DORA</option>
              <option value="nis2">NIS2</option>
            </select>
          </div>
        )}

        {mode === 'bias' && (
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Dataset Sample (JSON)</label>
            <textarea
              value={dataset}
              onChange={(e) => setDataset(e.target.value)}
              placeholder='[{"input": "...", "output": "...", "protected": {"gender": "F"}}]'
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:ring-1 focus:ring-brand-400"
            />
          </div>
        )}

        {mode === 'explainability' && (
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Input Data (JSON)</label>
            <textarea
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder='{"age": 34, "income": 55000, "loan_amount": 200000}'
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:ring-1 focus:ring-brand-400"
            />
          </div>
        )}

        <button
          onClick={runAudit}
          disabled={loading || !modelId}
          className="w-full flex items-center justify-center gap-2 rounded-lg gradient-brand px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ClipboardCheck className="w-4 h-4" />}
          {loading ? 'Running Audit...' : 'Run Audit'}
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-400">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-lg border border-border bg-muted/30 p-3">
          <div className="text-xs font-medium text-muted-foreground mb-1">Result</div>
          <pre className="text-[11px] font-mono text-foreground overflow-auto max-h-60">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
