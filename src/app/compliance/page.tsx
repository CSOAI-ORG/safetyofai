'use client';

import { useState } from 'react';
import { Shield, Scan, CheckCircle2, AlertTriangle, FileText, Download, Loader2 } from 'lucide-react';
import { GOVERNANCE_MCP_STACK } from '@/lib/mcp/governance-stack';

type ScanResult = {
  overallScore: number;
  criticalIssues: number;
  mcpsUsed: string[];
  status: 'idle' | 'scanning' | 'complete';
};

export default function ComplianceCheckerPage() {
  const [selectedRegulations, setSelectedRegulations] = useState<string[]>(['EU AI Act', 'NIST AI RMF', 'GDPR']);
  const [scanType, setScanType] = useState<'model' | 'data' | 'system'>('model');
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const regulations = ['EU AI Act', 'NIST AI RMF', 'GDPR', 'DORA', 'PCI DSS', 'SOC 2'];

  const handleScan = async () => {
    setIsScanning(true);
    setResult(null);

    // Simulate A2A-coordinated scan across MCP agents
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setResult({
      overallScore: 82,
      criticalIssues: 2,
      mcpsUsed: ['owasp-agentic-mcp', 'meok-watermark-attest-mcp', 'risk-assessment-ai-mcp', 'regulatory-webhook-mcp'],
      status: 'complete',
    });
    setIsScanning(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Compliance Checker</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          AI Compliance <span className="text-brand-400">Scan</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Powered by A2A agent coordination across {GOVERNANCE_MCP_STACK.length} MCP tools.
          Get audit-ready reports in seconds.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-xl bg-card border border-border p-6">
            <h3 className="font-semibold mb-4">Scan Configuration</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Input Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['model', 'data', 'system'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setScanType(type)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${
                        scanType === type
                          ? 'bg-brand-500 text-white'
                          : 'bg-background border border-border hover:border-brand-500/30'
                      }`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Regulations</label>
                <div className="space-y-2">
                  {regulations.map((reg) => (
                    <label key={reg} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRegulations.includes(reg)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRegulations([...selectedRegulations, reg]);
                          } else {
                            setSelectedRegulations(selectedRegulations.filter((r) => r !== reg));
                          }
                        }}
                        className="rounded border-border bg-background text-brand-500 focus:ring-brand-500"
                      />
                      <span className="text-sm">{reg}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full py-3 rounded-xl gradient-brand text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                {isScanning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Scan className="w-4 h-4" />}
                {isScanning ? 'Scanning via A2A...' : 'Run Compliance Scan'}
              </button>
            </div>
          </div>

          {/* Active MCPs */}
          <div className="rounded-xl bg-card border border-border p-6">
            <h3 className="font-semibold mb-4">A2A Agent Stack</h3>
            <div className="space-y-2">
              {GOVERNANCE_MCP_STACK.slice(0, 6).map((tool) => (
                <div key={tool.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-xs font-mono text-brand-300">{tool.name.replace('-mcp', '')}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-safety-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          {!result && !isScanning && (
            <div className="rounded-xl bg-card border border-border p-12 text-center">
              <Shield className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ready to Scan</h3>
                <p className="text-sm text-muted-foreground">
                  Configure your scan and click &quot;Run Compliance Scan&quot; to start A2A-coordinated assessment.
                </p>
            </div>
          )}

          {isScanning && (
            <div className="rounded-xl bg-card border border-border p-12 text-center">
              <Loader2 className="w-16 h-16 text-brand-400 animate-spin mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">A2A Agents Working...</h3>
              <p className="text-sm text-muted-foreground">
                Coordinating across risk-assessment, security-scan, and compliance agents...
              </p>
              <div className="mt-6 space-y-2 max-w-sm mx-auto text-left">
                {['risk-assessment-agent', 'security-scan-agent', 'compliance-agent'].map((agent, i) => (
                  <div key={agent} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${i < 2 ? 'bg-safety-500' : 'bg-brand-500'}`} />
                    {agent} — {i < 2 ? 'Scanning...' : 'Waiting...'}
                  </div>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              {/* Score Card */}
              <div className="rounded-xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Compliance Score</h3>
                  <span className="text-3xl font-bold text-brand-400">{result.overallScore}/100</span>
                </div>
                <div className="w-full bg-background rounded-full h-3 mb-4">
                  <div
                    className="h-3 rounded-full gradient-brand"
                    style={{ width: `${result.overallScore}%` }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertTriangle className="w-4 h-4" />
                  {result.criticalIssues} critical issues found
                </div>
              </div>

              {/* MCP Tools Used */}
              <div className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-semibold mb-4">MCP Tools Used</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {result.mcpsUsed.map((mcp) => (
                    <div key={mcp} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                      <CheckCircle2 className="w-4 h-4 text-safety-500" />
                      <span className="text-xs font-mono">{mcp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors">
                  <FileText className="w-4 h-4" />
                  Generate Audit Report
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border font-semibold hover:border-brand-500/30 transition-colors">
                  <Download className="w-4 h-4" />
                  Export Evidence
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
