'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About FleetJustice
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Over a decade of expertise in commercial trucking insurance and legal recovery services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Award, value: '$47M+', label: 'Recovered in Claims' },
            { icon: Users, value: '15,000+', label: 'Fleets Protected' },
            { icon: TrendingUp, value: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 text-center">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Founded in 2015, FleetJustice emerged from a simple observation: commercial trucking companies and owner-operators were underserved by traditional insurance providers and legal firms. General practitioners lacked the specialized knowledge required to navigate the complex world of DOT regulations, FMCSA compliance, and commercial transportation law.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our founders—former truck drivers, insurance underwriters, and transportation attorneys—combined their expertise to create a firm that truly understands the trucking industry. We've walked in your shoes, experienced the challenges you face daily, and built our practice around solving the real problems that impact your bottom line.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Today, FleetJustice serves as a trusted partner to thousands of commercial carriers across all 50 states. From single owner-operators launching new authorities to established fleets with hundreds of power units, we provide the specialized insurance and legal services that keep America's trucking industry moving.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: 'Commercial Insurance Specialists',
                  description: 'Comprehensive coverage solutions for hazmat liability, fleet insurance, cargo protection, and new authority quotes.'
                },
                {
                  icon: Clock,
                  title: 'Legal Recovery Experts',
                  description: '18-wheeler accident claims, cargo damage recovery, liability defense, and DOT compliance representation.'
                },
                {
                  icon: MapPin,
                  title: 'Nationwide Coverage',
                  description: 'Licensed to serve commercial carriers in all 50 states with 24/7 emergency claims support and legal consultation.'
                },
                {
                  icon: Award,
                  title: 'Industry Recognition',
                  description: 'Top-rated by commercial trucking associations and consistently recognized for excellence in transportation law.'
                }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-amber-500 mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At FleetJustice, we understand that your trucking business operates on thin margins. Every day off the road, every insurance claim dispute, and every regulatory compliance issue directly impacts your profitability and ability to support your family.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              That's why we're committed to providing responsive, knowledgeable service that treats your business with the respect it deserves. When you call FleetJustice, you speak with experienced professionals who understand commercial trucking—not generic customer service representatives reading from scripts.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We offer same-day quotes for insurance coverage, free initial consultations for legal matters, and 24/7 emergency support when accidents occur. Our goal isn't just to sell you a policy or take your case—it's to become your long-term partner in managing risk and protecting your livelihood.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Why Trucking Companies Choose Us</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-slate-300">
                <span className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm mr-3 mt-1 flex-shrink-0">✓</span>
                <span className="text-lg">Deep industry expertise from professionals who've worked in commercial trucking</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm mr-3 mt-1 flex-shrink-0">✓</span>
                <span className="text-lg">Comprehensive understanding of DOT regulations and FMCSA compliance requirements</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm mr-3 mt-1 flex-shrink-0">✓</span>
                <span className="text-lg">Proven track record with over $47 million recovered for clients in accident claims</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm mr-3 mt-1 flex-shrink-0">✓</span>
                <span className="text-lg">24/7 emergency support because trucking doesn't stop at 5 PM</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-sm mr-3 mt-1 flex-shrink-0">✓</span>
                <span className="text-lg">No-fee consultations and competitive rates that respect your operating budget</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Promise</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              When you partner with FleetJustice, you're not just another policy number or case file. You're a valued member of the commercial trucking community, and we're committed to protecting your interests with the same dedication you bring to every mile you drive.
            </p>
            <p className="text-amber-500 font-semibold text-lg">
              Your success is our success. Your protection is our priority.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
