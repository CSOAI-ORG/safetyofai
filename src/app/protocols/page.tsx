import type { Metadata } from 'next';
import ProtocolStatus from '@/components/ProtocolStatus';
import AuditTool from '@/components/AuditTool';
import ASSTIScorecard from '@/components/ASSTIScorecard';

export const metadata: Metadata = {
  title: 'Protocols — SafetyOf.AI',
  description: 'Live protocol integration: MCP, A2A, ACP, libp2p, ABCI, and unified API.',
};

export default function ProtocolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Protocol Nexus</h1>
        <p className="text-muted-foreground max-w-2xl">
          SafetyOf.AI is powered by the CSOAI Protocol Nexus — the world&apos;s first
          Regulatory Geospatial Intelligence (RegGeoInt) layer. Every AI regulation
          is a map of where rules apply. We built the map. MCP for tool execution,
          A2A for agent delegation, ACP for real-time messaging, libp2p for P2P,
          ABCI for on-chain trust, SIGIL for compact agent comms, and ASSTI for
          transparency scoring.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-4">Protocol Health</h2>
        <ProtocolStatus />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">AI Safety Auditor</h2>
            <AuditTool />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">ASSTI Transparency</h2>
            <ASSTIScorecard />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold mb-3">Integration Stack</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">SDK</dt>
                <dd className="font-mono text-xs">@meok-labs/ai-sdk v0.1.0</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">MCP Server</dt>
                <dd className="font-mono text-xs">meok-ai/mcp/server.py</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">A2A Agent</dt>
                <dd className="font-mono text-xs">Safety Auditor Agent v1.0</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">ABCI Chain</dt>
                <dd className="font-mono text-xs">CometBFT Trust Registry</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">libp2p</dt>
                <dd className="font-mono text-xs">WebRTC + WebSocket transports</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">SIGIL</dt>
                <dd className="font-mono text-xs">SIGIL v0.1.0 — compact agent DSL</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">ASSTI</dt>
                <dd className="font-mono text-xs">Transparency Index [0,1]</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold mb-3">Coverage Matrix</h3>
            <div className="space-y-2">
              {[
                ['MCP', '6 safety + 3 ASSTI + 3 AIBOM + 3 Shield + 3 Audit tools', true],
                ['A2A', 'Agent card + 8 skills', true],
                ['ACP', 'WebSocket + SIGIL decode', true],
                ['libp2p', 'Browser P2P client', true],
                ['ABCI', 'Trust registry queries', true],
                ['SIGIL', 'Encode / parse / gloss', true],
                ['ASSTI', 'Transparency scoring', true],
                ['AIBOM', 'EuConform-compatible export', true],
                ['Shield', '12-layer deterministic security', true],
                ['Audit', 'Nobulex Ed25519 receipts', true],
                ['RegGeoInt', '8 jurisdictions mapped', true],
                ['API/SDK', 'Typed REST client', true],
              ].map(([protocol, feature, done]) => (
                <div key={protocol as string} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{protocol as string}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{feature as string}</span>
                    <span className={`w-2 h-2 rounded-full ${done ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
