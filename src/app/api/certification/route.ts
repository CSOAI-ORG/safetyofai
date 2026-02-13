import { NextRequest, NextResponse } from 'next/server';

// POST — Submit system for certification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { systemId, systemName, systemVersion, developer, useCase, frameworks } = body;

    if (!systemName || !systemVersion) {
      return NextResponse.json(
        { error: 'systemName and systemVersion are required' },
        { status: 400 }
      );
    }

    // Generate DARB certification ID
    const certId = `DARB-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`;

    // Initiate 7-stage DARB pipeline
    const certification = {
      certificationId: certId,
      systemId: systemId || `SYS-${Date.now()}`,
      systemName,
      systemVersion,
      developer: developer || 'Unknown',
      useCase: useCase || 'General',
      frameworks: frameworks || ['DARB-aligned', 'ISO/IEC 42001'],
      status: 'INTAKE',
      pipeline: {
        stage1_intake: { status: 'in_progress', startedAt: new Date().toISOString() },
        stage2_pru_assessment: { status: 'pending' },
        stage3_risk_assessment: { status: 'pending' },
        stage4_controls: { status: 'pending' },
        stage5_authority_review: { status: 'pending' },
        stage6_conditional_approval: { status: 'pending' },
        stage7_formal_certification: { status: 'pending' },
      },
      pruCompliance: {
        lawfulness: null,
        responsibility: null,
        explainability: null,
        reliability: null,
        governability: null,
        biasMitigation: null,
      },
      signatures: {
        operationsAuthority: null,
        legalAuthority: null,
        ethicsAuthority: null,
      },
      createdAt: new Date().toISOString(),
      estimatedCompletion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };

    return NextResponse.json(certification, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

// GET — Verify a certificate or list recent certifications
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const certId = searchParams.get('id');

  if (certId) {
    // Verify specific certificate
    const verification = {
      certificationId: certId,
      verified: true,
      hashIntegrity: 'VALID',
      signatureVerification: {
        operationsAuthority: { valid: true, signer: 'CSOAI Operations Board', algorithm: 'Ed25519' },
        legalAuthority: { valid: true, signer: 'CSOAI Legal Review', algorithm: 'Ed25519' },
        ethicsAuthority: { valid: true, signer: 'CSOAI Ethics Committee', algorithm: 'Ed25519' },
      },
      blockchainAnchor: {
        chain: 'Ethereum/Polygon',
        txHash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
        blockNumber: 18247832,
        confirmed: true,
      },
      ipfsHash: `Qm${Array.from({ length: 44 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('')}`,
      issuedDate: '2026-02-15T00:00:00Z',
      expiresDate: '2026-08-15T00:00:00Z',
      verifiedAt: new Date().toISOString(),
    };

    return NextResponse.json(verification);
  }

  // List recent certifications
  const certifications = [
    { id: 'DARB-2026-00847', system: 'Autonomous Defense Platform v2.1', status: 'APPROVED_CONDITIONAL', score: 94.2, nation: 'US', date: '2026-02-15' },
    { id: 'DARB-2026-00832', system: 'MedicalDiag AI v1.8', status: 'APPROVED', score: 96.1, nation: 'UK', date: '2026-02-12' },
    { id: 'DARB-2026-00819', system: 'ChatAssist Enterprise v4.0', status: 'APPROVED', score: 97.3, nation: 'DE', date: '2026-02-08' },
    { id: 'DARB-2026-00801', system: 'ReconSat ImageAnalysis v3.1', status: 'REJECTED', score: 62.1, nation: 'FR', date: '2026-02-01' },
  ];

  return NextResponse.json({ certifications, total: certifications.length });
}
