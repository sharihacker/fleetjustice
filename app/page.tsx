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

    // 1. LOAD NATIVE BANNER
    const nativeScript = document.createElement('script');
    nativeScript.src = "https://pl29101361.profitablecpmratenetwork.com/4d1cb6653e89bec186da660bb20185fd/invoke.js";
    nativeScript.async = true;
    nativeScript.setAttribute('data-cfasync', 'false');
    document.body.appendChild(nativeScript);

    // 2. LOAD 468x60 BANNER (Defining Options for it)
    (window as any).atOptions468 = {
      'key': 'f11bba5f756a486e982ed51d36bdf5c4',
      'format': 'iframe',
      'height': 60,
      'width': 468,
      'params': {}
    };
    const banner468 = document.createElement('script');
    banner468.src = "https://www.highperformanceformat.com/f11bba5f756a486e982ed51d36bdf5c4/invoke.js";
    banner468.async = true;
    document.body.appendChild(banner468);

    // 3. LOAD 728x90 BANNER (Defining Options for it)
    (window as any).atOptions = {
      'key': 'd65587f8ab81f4df3128c4aca110ca61',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };
    const banner728 = document.createElement('script');
    banner728.src = "https://www.highperformanceformat.com/d65587f8ab81f4df3128c4aca110ca61/invoke.js";
    banner728.async = true;
    document.body.appendChild(banner728);

    return () => {
      if (document.body.contains(nativeScript)) document.body.removeChild(nativeScript);
      if (document.body.contains(banner468)) document.body.removeChild(banner468);
      if (document.body.contains(banner728)) document.body.removeChild(banner728);
    };
  }, []);

  return (
    <div className="bg-slate-950">
      
      {/* AD: 468x60 TOP BANNER */}
      <div className="w-full bg-slate-900 py-2 flex justify-center border-b border-slate-800">
        <div id="atContainer-f11bba5f756a486e982ed51d36bdf5c4"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* ... (Hero Content) ... */}
      </section>

      {/* COVERAGE SECTION */}
      <section className="py-20 bg-slate-900">
        {/* ... (Coverage Cards) ... */}
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
        {/* ... (Settlements Mapping) ... */}
      </section>

      {/* AD: 728x90 BOTTOM LEADERBOARD */}
      <section className="py-12 bg-slate-900 flex justify-center border-y border-slate-800">
         <div id="atContainer-d65587f8ab81f4df3128c4aca110ca61">
           {/* Adsterra script will inject the iframe here */}
         </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
         {/* ... (CTA Content) ... */}
      </section>
    </div>
  );
}
