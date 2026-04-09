'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, TrendingUp, CircleCheck as CheckCircle, DollarSign, Clock, Award, FileCheck, Truck, TriangleAlert as AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

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

    // 1. LOAD NATIVE BANNER SCRIPT
    const nativeScript = document.createElement('script');
    nativeScript.src = "https://pl29101361.profitablecpmratenetwork.com/4d1cb6653e89bec186da660bb20185fd/invoke.js";
    nativeScript.async = true;
    nativeScript.setAttribute('data-cfasync', 'false');
    document.body.appendChild(nativeScript);

    // 2. LOAD 468x60 BANNER SCRIPT & OPTIONS
    // We define the options on the window object so the external script can find them
    (window as any).atOptions = {
      'key': 'f11bba5f756a486e982ed51d36bdf5c4',
      'format': 'iframe',
      'height': 60,
      'width': 468,
      'params': {}
    };

    const bannerScript = document.createElement('script');
    bannerScript.src = "https://www.highperformanceformat.com/f11bba5f756a486e982ed51d36bdf5c4/invoke.js";
    bannerScript.async = true;
    document.body.appendChild(bannerScript);

    return () => {
      if (document.body.contains(nativeScript)) document.body.removeChild(nativeScript);
      if (document.body.contains(bannerScript)) document.body.removeChild(bannerScript);
    };
  }, []);

  return (
    <div className="bg-slate-950">
      
      {/* 468x60 TOP BANNER AD PLACEMENT */}
      <div className="w-full bg-slate-900 py-2 flex justify-center border-b border-slate-800">
        <div id="atContainer-f11bba5f756a486e982ed51d36bdf5c4">
           {/* The script will inject the iframe here */}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 overflow-hidden">
        <a href={MONEY_LINK} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-default">
            <span className="sr-only">Click for details</span>
        </a>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        {/* ... (rest of hero content) ... */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="z-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Protect Your Fleet. <span className="text-amber-500">Secure Your Future.</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-amber-500 text-slate-900 font-bold px-8 py-6">Get a Free Quote</Button>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="py-20 bg-slate-900">
        {/* ... (Your coverage cards) ... */}
      </section>

      {/* NATIVE BANNER AD SECTION */}
      <section className="py-10 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
             <p className="text-xs text-slate-500 mb-4 tracking-widest uppercase">Sponsored Content</p>
             <div id="container-4d1cb6653e89bec186da660bb20185fd" className="w-full min-h-[250px]"></div>
        </div>
      </section>

      {/* SETTLEMENTS SECTION */}
      <section className="py-20 bg-slate-950">
        {/* ... (Your settlements map) ... */}
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
         {/* ... (CTA Buttons) ... */}
      </section>
    </div>
  );
}
