'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, CircleCheck as CheckCircle, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AdSlot } from '@/components/AdSlot';

export default function NewAuthorityQuotesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <article className="bg-slate-950">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="flex items-center space-x-2 text-amber-500 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Insurance</span>
              <span>/</span>
              <span>New Authority</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              New Authority Insurance Quotes for Owner-Operators
            </h1>
            <p className="text-xl text-slate-300">
              Fast, affordable insurance for new motor carriers. Get your DOT authority up and running with same-day coverage approval.
            </p>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={1} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <motion.div {...fadeInUp}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Starting your own trucking company is an exciting venture, but navigating the insurance requirements for new authority can feel overwhelming. At FleetJustice, we specialize in helping owner-operators and new motor carriers get the coverage they need to launch their business quickly and affordably.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Whether you're an experienced driver striking out on your own or launching your first commercial trucking operation, obtaining proper insurance is a critical step in getting your DOT authority approved. The Federal Motor Carrier Safety Administration (FMCSA) requires proof of insurance before granting operating authority, and we make that process simple.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our new authority insurance program is specifically designed for carriers with limited operating history. We work with specialized underwriters who understand that new doesn't mean risky—it means opportunity. Get competitive rates without the punishing premiums often quoted to new authorities.
            </p>
          </motion.div>

          <AdSlot slot={2} />

          <motion.div {...fadeInUp} className="my-12">
            <h2 className="text-3xl font-bold text-white mb-6">What Insurance Do You Need for New Authority?</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              FMCSA requires specific insurance coverage before you can begin operating under your new authority. Understanding these requirements ensures you can start hauling as quickly as possible:
            </p>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Minimum Required Coverage:</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">General Freight: </span>
                    $750,000 minimum liability coverage for non-hazmat freight
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Hazmat Transport: </span>
                    $1,000,000 minimum for carriers transporting hazardous materials
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Cargo Insurance: </span>
                    $100,000 minimum (often required by brokers and shippers)
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Physical Damage: </span>
                    Required by lenders if you're financing your equipment
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              FleetJustice provides comprehensive package policies that include all required coverages, often at lower rates than purchasing individual policies. We file your BMC-91 or BMC-34 forms directly with FMCSA, expediting your authority approval.
            </p>
          </motion.div>

          <AdSlot slot={3} className="float-right ml-8 mb-6 max-w-md" />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Fast Approval Process for New Carriers</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Time is money in the trucking industry. Every day without coverage is a day you're not generating revenue. Our streamlined approval process gets new authorities on the road faster than traditional insurance companies:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              {[
                {
                  icon: FileText,
                  title: 'Apply Online',
                  description: 'Complete our simple online application in 10 minutes or less.',
                  time: 'Day 1'
                },
                {
                  icon: Clock,
                  title: 'Get Your Quote',
                  description: 'Receive competitive quotes from multiple carriers within hours.',
                  time: 'Day 1-2'
                },
                {
                  icon: Shield,
                  title: 'Start Operating',
                  description: 'Coverage issued and filed with FMCSA same day.',
                  time: 'Day 2-3'
                }
              ].map((step, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 mb-4">
                      <step.icon className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="text-xs font-semibold text-amber-500 mb-2">{step.time}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Most new authority applications are approved within 48-72 hours. In urgent situations, we can often provide same-day coverage with expedited FMCSA filing. No waiting weeks for underwriting decisions—get back to growing your business.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Award className="h-8 w-8 text-amber-500 mr-3" />
              Success Story: From Application to Authority in 3 Days
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              Marcus, a 15-year veteran driver, decided to launch his own authority after years of leasing. He contacted FleetJustice on Monday morning with zero insurance in place. Our team:
            </p>
            <ul className="space-y-2 text-slate-300 mb-4">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Completed his application and underwriting review by Monday afternoon</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Secured competitive quotes from three carriers by Tuesday morning</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Filed his BMC-91 with FMCSA and issued coverage Tuesday evening</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>Marcus was hauling his first load under his own authority Thursday morning</span>
              </li>
            </ul>
            <p className="text-amber-500 font-semibold">
              Total premium: $9,850 annually for $1M liability + $100K cargo coverage
            </p>
          </motion.div>

          <AdSlot slot={4} />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Special Considerations for New Motor Carriers</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              New authority carriers face unique challenges in the insurance marketplace. Many traditional carriers are hesitant to insure operators without established safety records or operating history. FleetJustice specializes in working with carriers in your exact situation.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our underwriters evaluate your driver experience, not just your business history. If you have a clean CDL record and verifiable driving experience, you may qualify for better rates than new carriers with less experienced operators.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">What Affects Your New Authority Insurance Rates?</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Driver Experience: </span>
                  More years behind the wheel typically means better rates. Expect discounts with 5+ years of verifiable experience.
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Safety Record: </span>
                  Clean driving records with no at-fault accidents in the past 3 years can save 15-20% on premiums.
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Operating Radius: </span>
                  Local and regional carriers often pay less than long-haul operators due to reduced risk exposure.
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Type of Freight: </span>
                  General freight carriers pay less than specialized or hazmat operations.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Beyond Basic Coverage: Building Your Safety Program</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Getting your initial authority insurance is just the beginning. The most successful owner-operators treat safety as a business investment, not just a regulatory requirement. FleetJustice provides ongoing support to help you build a safety program that reduces claims and lowers premiums over time.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We offer free consultations on implementing driver safety programs, maintaining DOT compliance, and preparing for insurance audits. Many of our new authority clients see premium reductions of 20-30% after their first year by demonstrating commitment to safety.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Your first year as a new authority is critical. Partner with an insurance provider who's invested in your long-term success, not just collecting premiums. FleetJustice has helped over 3,000 owner-operators launch successful trucking businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Get Your Authority?
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              Join thousands of successful owner-operators who started with FleetJustice. Get your quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  Get New Authority Quote
                </Button>
              </Link>
              <Link href="/estimator">
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
                  Try Insurance Calculator
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={5} />
    </article>
  );
}
