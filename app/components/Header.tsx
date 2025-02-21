'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Garde Auto Tontouta
          </Link>

          {/* Bouton hamburger pour mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu pour desktop */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="text-gray-600 hover:text-blue-600 transition-colors">
                A propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/conditions" className="text-gray-600 hover:text-blue-600 transition-colors">
                Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 space-y-4">
            <li>
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/a-propos" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/conditions" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conditions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}