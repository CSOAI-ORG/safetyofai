import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <CheckCircle className="w-16 h-16 text-safety-500 mx-auto mb-6" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Thank you for subscribing!
      </h1>
      <p className="text-muted-foreground mb-8">
        Your payment was successful. You now have access to your new plan.
        Check your email for a confirmation receipt.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-semibold gradient-brand text-white hover:opacity-90 transition-opacity"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/pricing"
          className="px-6 py-3 rounded-xl font-semibold border border-border hover:border-brand-500/30 transition-colors"
        >
          View Plans
        </Link>
      </div>
    </div>
  );
}
