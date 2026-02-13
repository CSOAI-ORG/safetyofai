'use client';

import { useState } from 'react';

const certificationStages = [
  { id: 1, name: 'Intake & Characterization', status: 'complete', icon: '📋' },
  { id: 2, name: 'PRU Compliance Assessment', status: 'complete', icon: '✅' },
  { id: 3, name: 'Risk Assessment', status: 'active', icon: '⚠️' },
  { id: 4, name: 'Controls & Mitigation', status: 'pending', icon: '🛡️' },
  { id: 5, name: 'Decision Authority Review', status: 'pending', icon: '👥' },
  { id: 6, name: 'Conditional Approval', status: 'pending', icon: '📝' },
  { id: 7, name: 'Formal Certification', status: 'pending', icon: '🏅' },
];

const pruPrinciples = [
  { name: 'Lawfulness', score: 95, status: 'VERIFIED', color: 'safety' },
  { name: 'Responsibility & Accountability', score: 92, status: 'VERIFIED', color: 'safety' },
  { name: 'Explainability & Traceability', score: 88, status: 'VERIFIED', color: 'safety' },
  { name: 'Reliability', score: 85, status: 'CONDITIONAL', color: 'yellow' },
  { name: 'Governability', score: 91, status: 'VERIFIED', color: 'safety' },
  { name: 'Bias Mitigation', score: 89, status: 'VERIFIED', color: 'safety' },
];

const certificates = [
  { id: 'DARB-2026-00847', system: 'Autonomous Defense Platform v2.1', status: 'APPROVED (CONDITIONAL)', validUntil: '2026-08-15', signers: 3 },
  { id: 'DARB-2026-00832', system: 'MedicalDiag AI v1.8', status: 'APPROVED', validUntil: '2026-09-01', signers: 3 },
  { id: 'DARB-2026-00819', system: 'ChatAssist Enterprise v4.0', status: 'APPROVED', validUntil: '2026-07-20', signers: 3 },
  { id: 'DARB-2026-00801', system: 'ReconSat ImageAnalysis v3.1', status: 'REJECTED', validUntil: '—', signers: 0 },
];

export default function CertificationPage() {
  const [verifyId, setVerifyId] = useState('');
  const [tab, setTab] = useState<'pipeline' | 'verify' | 'issued'>('pipeline');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🏅</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">POAI Certification</h1>
              <p className="text-muted-foreground">Proof of AI — DARB Responsible AI Certification Standard</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Immutable assessment records with cryptographic proof chains. Multi-signature verification
            from Military, Legal, and Ethics authorities. Ed25519 signed, IPFS-stored, blockchain-anchored.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-muted/30 rounded-lg p-1 w-fit">
          {(['pipeline', 'verify', 'issued'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-colors ${
                tab === t ? 'bg-brand-500 text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t === 'pipeline' ? 'Certification Pipeline' : t === 'verify' ? 'Verify Certificate' : 'Issued Certificates'}
            </button>
          ))}
        </div>

        {tab === 'pipeline' && (
          <div>
            {/* DARB 7-Stage Pipeline */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">DARB Certification Pipeline</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-4">
                  {certificationStages.map((stage) => (
                    <div key={stage.id} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                        stage.status === 'complete' ? 'bg-safety-500/20' :
                        stage.status === 'active' ? 'bg-brand-500/20 ring-2 ring-brand-500' :
                        'bg-muted/30'
                      }`}>
                        {stage.status === 'complete' ? '✓' : stage.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          stage.status === 'active' ? 'text-brand-400' :
                          stage.status === 'complete' ? 'text-safety-400' :
                          'text-muted-foreground'
                        }`}>
                          Stage {stage.id}: {stage.name}
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        stage.status === 'complete' ? 'bg-safety-500/20 text-safety-400' :
                        stage.status === 'active' ? 'bg-brand-500/20 text-brand-400' :
                        'bg-muted/30 text-muted-foreground'
                      }`}>
                        {stage.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NATO PRU Compliance */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">NATO Principles of Responsible Use (PRU)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pruPrinciples.map((p) => (
                  <div key={p.name} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-sm">{p.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full bg-${p.color}-500/20 text-${p.color}-400`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full bg-${p.color}-500`}
                        style={{ width: `${p.score}%` }}
                      />
                    </div>
                    <div className="text-right text-sm font-medium text-foreground">{p.score}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-Signature Requirements */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Multi-Signature Approval Required</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { role: 'Military Operations Authority', entity: 'NATO Command', status: 'Awaiting', algo: 'Ed25519' },
                  { role: 'Legal Authority', entity: 'NATO Legal Advisor', status: 'Awaiting', algo: 'Ed25519' },
                  { role: 'Ethics Authority', entity: 'NATO Ethics Committee', status: 'Awaiting', algo: 'Ed25519' },
                ].map((sig) => (
                  <div key={sig.role} className="bg-card border border-border rounded-xl p-5">
                    <div className="text-sm font-semibold mb-1">{sig.role}</div>
                    <div className="text-xs text-muted-foreground mb-3">{sig.entity}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">{sig.status}</span>
                      <span className="text-xs text-muted-foreground font-mono">{sig.algo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'verify' && (
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Verify a Certificate</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Enter a DARB certificate ID to verify its authenticity. Checks cryptographic signatures,
              hash integrity, and blockchain anchor.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <label className="block text-sm font-medium mb-2">Certificate ID</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={verifyId}
                  onChange={(e) => setVerifyId(e.target.value)}
                  placeholder="DARB-2026-00847"
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button className="px-6 py-2.5 gradient-brand text-white text-sm rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Verify
                </button>
              </div>
              <div className="mt-4 text-xs text-muted-foreground space-y-1">
                <div>Verification checks: Hash integrity → Signature validation → Blockchain anchor → Expiry check</div>
                <div>Storage: IPFS content-addressed + Ethereum/Polygon smart contract</div>
              </div>
            </div>
          </div>
        )}

        {tab === 'issued' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Issued Certificates</h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-3 font-medium text-muted-foreground">Certificate ID</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">System</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Valid Until</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Signers</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((c) => (
                    <tr key={c.id} className="border-t border-border hover:bg-muted/10">
                      <td className="p-3 font-mono text-xs text-brand-400">{c.id}</td>
                      <td className="p-3 font-medium">{c.system}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          c.status.includes('APPROVED') ? 'bg-safety-500/20 text-safety-400' :
                          'bg-threat-500/20 text-threat-400'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="p-3 text-muted-foreground">{c.validUntil}</td>
                      <td className="p-3">{c.signers}/3</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
