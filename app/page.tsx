'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, TrendingUp, CircleCheck as CheckCircle, DollarSign, Clock, Award, FileCheck, Truck, TriangleAlert as AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

interface Settlement {
  id: string;
  case_type: string;
  settlement_amount: number;
  case_description: string;
  resolution_time_days: number;
}

export default function Home() {
  const [settlements, setSettlements] = useState<Settlement[]>([]);

  useEffect(() => {
    async function fetchSettlements() {
      const { data } = await supabase
        .from('settlements')
        .select('*')
        .eq('is_published', true)
        .order('display_order')
        .limit(4);
      if (data) setSettlements(data);
    }
    fetchSettlements();
  }, []);

  return (
    <div className="bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Protect Your <span className="text-amber-500">Fleet.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                Elite insurance and legal recovery for the trucking industry. Don't let a single accident stall your momentum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold w-full h-14 text-lg">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 w-full h-14 text-lg">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">24/7 Accident Recovery</h3>
                    <p className="text-sm text-slate-400">Immediate legal support nationwide.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: `${85 - i * 10}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SETTLEMENTS GRID */}
      <section className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Proven Results</h2>
            <Link href="/results" className="text-amber-500 hover:underline flex items-center">
              View All Settlements <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {settlements.map((s) => (
              <Card key={s.id} className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <p className="text-amber-500 font-mono text-sm mb-2">{s.case_type}</p>
                  <p className="text-2xl font-bold text-white mb-4">${(s.settlement_amount / 1000).toLocaleString()}k+</p>
                  <p className="text-sm text-slate-400 line-clamp-2">{s.case_description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-black text-slate-950 mb-8 uppercase italic">Ready to scale?</h2>
          <Link href="/insurance">
            <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-900 px-12 py-8 rounded-none text-xl font-bold">
              START YOUR QUOTE NOW
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
