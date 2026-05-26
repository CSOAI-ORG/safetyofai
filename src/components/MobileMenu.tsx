'use client';

import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { href: '/dashboard', label: 'Free Scanner' },
  { href: '#features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/vs-vanta', label: 'vs Vanta' },
  { href: '/vs-drata', label: 'vs Drata' },
  { href: '/status', label: 'Status' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="lg:hidden p-2 text-muted-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-border bg-card p-4 space-y-3 lg:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-muted-foreground hover:text-foreground py-1" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/dashboard" className="block px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white text-center hover:opacity-90" onClick={() => setIsOpen(false)}>
            Start Free Scan
          </a>
        </div>
      )}
    </>
  );
}