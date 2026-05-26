'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{maxWidth: '600px', margin: '100px auto', padding: '0 20px', textAlign: 'center'}}>
      <h2 style={{fontSize: '24px', marginBottom: '16px'}}>Something went wrong</h2>
      <p style={{color: '#888', marginBottom: '24px'}}>We encountered an unexpected error. Please try again.</p>
      <button onClick={reset} style={{padding: '12px 24px', background: '#d97706', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>
        Try again
      </button>
    </div>
  );
}