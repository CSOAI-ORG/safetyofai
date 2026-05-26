'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{maxWidth: '600px', margin: '100px auto', padding: '0 20px', textAlign: 'center', background: '#0a0b0e', color: '#e8eaed'}}>
        <h2 style={{fontSize: '24px', marginBottom: '16px'}}>Something went wrong</h2>
        <p style={{color: '#8b8fa3', marginBottom: '24px'}}>An unexpected error occurred. Please refresh the page.</p>
        <button onClick={reset} style={{padding: '12px 24px', background: '#d97706', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>
          Refresh
        </button>
      </body>
    </html>
  );
}