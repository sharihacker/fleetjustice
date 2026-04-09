'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, TrendingUp, CircleCheck as CheckCircle, DollarSign, Clock, Award, FileCheck, Truck, TriangleAlert as AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

// YOUR ADSTERRA SMARTLINK
const MONEY_LINK = "https://www.profitablecpmratenetwork.com/xj9nkdhax2?key=1498c43418722084f866d64a7fb4363d";

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
    // 1. FETCH SETTLEMENTS
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

    // 2. LOAD NATIVE BANNER SCRIPT DYNAMICALLY
    const script = document.createElement('script');
    script.src = "https://pl29101361.profitablecpmratenetwork.com/4d1cb6653e89bec186da660bb20185fd/invoke.js";
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* GHOST OVERLAY */}
        <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-default">
            <span className="sr-only">Click for details</span>
        </a>
        
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="z-20">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-semibold text-amber-500">Rated #1 in Commercial Trucking</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Protect Your Fleet.
                <span className="block text-amber-500">Secure Your Future.</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Professional commercial trucking insurance and legal recovery services. From hazmat liability to 18-wheeler accident claims, we've got your back on every mile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg px-8 py-6 w-full">
                    Get a Free Quote
                  </Button>
                </a>
                <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-2 border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-6 w-full">
                    Consult an Expert
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-8 mt-10 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>DOT Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>Nationwide Coverage</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block z-20"
            >
              <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl cursor-pointer">
                    <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 rounded-xl p-6">
                        <DollarSign className="h-8 w-8 text-amber-500 mb-3" />
                        <p className="text-3xl font-bold text-white mb-1">$47M+</p>
                        <p className="text-sm text-slate-400">Recovered in Claims</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                        <Truck className="h-8 w-8 text-blue-400 mb-3" />
                        <p className="text-3xl font-bold text-white mb-1">15K+</p>
                        <p className="text-sm text-slate-400">Fleets Protected</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 rounded-xl p-6">
                        <Clock className="h-8 w-8 text-green-400 mb-3" />
                        <p className="text-3xl font-bold text-white mb-1">24/7</p>
                        <p className="text-sm text-slate-400">Claims Support</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 rounded-xl p-6">
                        <Award className="h-8 w-8 text-purple-400 mb-3" />
                        <p className="text-3xl font-bold text-white mb-1">98%</p>
                        <p className="text-sm text-slate-400">Success Rate</p>
                    </div>
                    </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Types of Coverage We Provide</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive insurance solutions tailored for your trucking operation.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: AlertTriangle, title: 'Hazmat Liability', description: 'Specialized coverage for hazardous materials transport.', color: 'from-red-500 to-orange-500' },
              { icon: Truck, title: 'Fleet Insurance', description: 'Complete protection for multi-vehicle operations.', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Owner-Operator', description: 'Affordable coverage for independent operators.', color: 'from-amber-500 to-yellow-500' }
            ].map((coverage, index) => (
              <motion.div key={coverage.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                  <Card className="bg-slate-800 border-slate-700 hover:border-amber-500/50 transition-all duration-300 h-full group cursor-pointer">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${coverage.color} mb-6 group-hover:scale-110 transition-transform`}>
                        <coverage.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{coverage.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{coverage.description}</p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIVE BANNER AD SECTION */}
      <section className="py-10 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
             <p className="text-xs text-slate-500 mb-4 tracking-widest uppercase">Sponsored Content</p>
             {/* THE NATIVE BANNER CONTAINER */}
             <div id="container-4d1cb6653e89bec186da660bb20185fd" className="w-full min-h-[250px]"></div>
          </div>
        </div>
      </section>

      {/* SETTLEMENTS SECTION */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Settlements</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Real results for real clients.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {settlements.map((settlement, index) => (
              <motion.div key={settlement.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all cursor-pointer">
                    <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-sm text-amber-500 font-semibold mb-2">{settlement.case_type}</p>
                            <p className="text-3xl font-bold text-white">${(settlement.settlement_amount / 1000000).toFixed(2)}M</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-slate-400">Resolved in</p>
                            <p className="text-xl font-semibold text-white">{settlement.resolution_time_days} days</p>
                        </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{settlement.case_description}</p>
                    </CardContent>
                    </Card>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900">
                View All Case Results
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, title: 'DOT Compliance', description: 'Full regulatory support' },
              { icon: Shield, title: 'FMCSA Certified', description: 'Industry-approved coverage' },
              { icon: Scale, title: 'Legal Defense', description: '24/7 legal support team' },
              { icon: TrendingUp, title: 'Claims Success', description: '98% approval rate' }
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                    <Card className="bg-slate-800 border-slate-700 text-center h-full cursor-pointer hover:border-amber-500/50 transition-all">
                    <CardContent className="p-6">
                        <item.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                    </CardContent>
                    </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Protect Your Fleet?</h2>
            <p className="text-xl text-slate-800 mb-8">Get a free quote in minutes. No obligations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-6 w-full">
                  Get Free Quote
                </Button>
              </a>
              <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-lg px-8 py-6 w-full">
                  Try Insurance Estimator
                </Button>
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}
