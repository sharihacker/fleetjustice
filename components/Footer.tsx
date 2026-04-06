import Link from 'next/link';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white">
                Fleet<span className="text-amber-500">Justice</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Professional commercial trucking insurance and legal recovery services. Protecting your fleet since 2015.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Phone className="h-4 w-4" />
              <span>1-800-FLEET-LAW</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Insurance Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/insurance/hazmat-liability" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Hazmat Liability
                </Link>
              </li>
              <li>
                <Link href="/insurance/new-authority-quotes" className="text-slate-400 hover:text-amber-500 transition-colors">
                  New Authority Quotes
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Insurance Estimator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/18-wheeler-accident-recovery" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Accident Recovery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© {currentYear} FleetJustice. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Professional commercial trucking legal and insurance services nationwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
