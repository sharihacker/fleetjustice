'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Scale, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2.5 rounded-lg group-hover:from-amber-400 group-hover:to-amber-500 transition-all">
              <Scale className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Fleet<span className="text-amber-500">Justice</span>
              </span>
              <p className="text-xs text-slate-400 -mt-0.5">Commercial Trucking Experts</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/insurance/hazmat-liability">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Insurance
              </Button>
            </Link>
            <Link href="/legal/18-wheeler-accident-recovery">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Legal Services
              </Button>
            </Link>
            <Link href="/estimator">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Get Estimate
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                About Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Contact
              </Button>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:1-800-FLEET-LAW" className="flex items-center text-sm text-slate-300 hover:text-amber-500 transition-colors">
              <Phone className="h-4 w-4 mr-1.5" />
              <span className="font-semibold">1-800-FLEET-LAW</span>
            </a>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-6 space-y-3">
            <Link
              href="/insurance/hazmat-liability"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insurance
            </Link>
            <Link
              href="/legal/18-wheeler-accident-recovery"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Legal Services
            </Link>
            <Link
              href="/estimator"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Estimate
            </Link>
            <Link
              href="/about"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <a
                href="tel:1-800-FLEET-LAW"
                className="flex items-center text-sm text-slate-300 hover:text-amber-500"
              >
                <Phone className="h-4 w-4 mr-2" />
                1-800-FLEET-LAW
              </a>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
