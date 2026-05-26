import { ImageResponse } from 'next/og';

export const alt = 'SafetyOf.AI — EU AI Act Compliance Platform';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #001429 50%, #0a1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8cff" stroke-width="2.5">
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 700, color: '#e2e8f0' }}>SafetyOf.AI</span>
        </div>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#f8fafc',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Prove Your AI Is Safe
        </h1>
        <p
          style={{
            fontSize: 24,
            color: '#94a3b8',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          EU AI Act &bull; DORA &bull; NIS2 &bull; ISO 42001 &bull; GDPR
        </p>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 32,
            fontSize: 20,
            color: '#64748b',
          }}
        >
          <span>273+ MCP Servers</span>
          <span>48h Audit Turnaround</span>
          <span>25 .ai Domains</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
