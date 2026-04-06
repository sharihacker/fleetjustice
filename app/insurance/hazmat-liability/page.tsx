'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TriangleAlert as AlertTriangle, Shield, CircleCheck as CheckCircle, FileText, Phone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AdSlot } from '@/components/AdSlot';

export default function HazmatLiabilityPage() {
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
              <span>Hazmat Liability</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hazmat Liability Insurance for Commercial Trucking
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive coverage for hazardous materials transport. DOT-compliant protection that keeps your fleet moving safely and legally.
            </p>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={1} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <motion.div {...fadeInUp}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Transporting hazardous materials requires specialized insurance coverage that goes far beyond standard commercial trucking policies. At FleetJustice, we understand the unique risks and regulatory requirements involved in hazmat transportation, and we've designed comprehensive insurance solutions that protect your business at every mile.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              The commercial trucking industry faces constant regulatory scrutiny, especially when it comes to hazardous materials. A single incident can result in catastrophic financial losses, environmental damage, and severe legal consequences. That's why proper hazmat liability insurance isn't just recommended—it's essential for your business survival.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our hazmat liability policies are specifically designed to meet and exceed Department of Transportation (DOT) and Federal Motor Carrier Safety Administration (FMCSA) requirements. We work exclusively with carriers who understand the commercial trucking sector, ensuring you get coverage that actually protects you when you need it most.
            </p>
          </motion.div>

          <AdSlot slot={2} />

          <motion.div {...fadeInUp} className="my-12">
            <h2 className="text-3xl font-bold text-white mb-6">What's Covered Under Hazmat Liability Insurance?</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hazmat liability insurance provides comprehensive protection for your commercial trucking operation when transporting dangerous goods. Understanding what's covered helps you make informed decisions about your fleet's protection:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: 'Environmental Cleanup',
                  description: 'Coverage for spill cleanup, containment, and environmental remediation costs that can easily exceed $1M.'
                },
                {
                  title: 'Third-Party Liability',
                  description: 'Protection against claims from individuals or businesses affected by hazmat incidents involving your fleet.'
                },
                {
                  title: 'Regulatory Fines',
                  description: 'Financial protection against DOT and EPA penalties that can cripple a trucking business overnight.'
                },
                {
                  title: 'Legal Defense',
                  description: '24/7 access to specialized attorneys who understand commercial trucking and hazmat regulations.'
                }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-amber-500 mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <AdSlot slot={3} className="float-right ml-8 mb-6 max-w-md" />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">DOT Compliance Made Simple</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Navigating DOT requirements for hazmat transport can feel overwhelming. Our team specializes in ensuring your coverage meets all federal and state requirements. We provide comprehensive compliance support including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-slate-300">
                <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>Verification of proper hazmat endorsements and certifications for all drivers</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>Regular policy reviews to ensure continued compliance with evolving regulations</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>Direct coordination with DOT officials during audits and inspections</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>Emergency response planning and 24/7 incident support hotline</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-slate-800 border border-slate-700 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-white mb-4">Real-World Protection</h3>
            <p className="text-slate-300 text-lg mb-4">
              In 2023, a FleetJustice client transporting industrial chemicals experienced a highway accident that resulted in a minor spill. Thanks to their comprehensive hazmat liability coverage, we immediately deployed our emergency response team and handled:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$340,000 in environmental cleanup costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$125,000 in third-party property damage claims</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$85,000 in regulatory fines and legal fees</span>
              </li>
            </ul>
            <p className="text-amber-500 font-semibold mt-4">
              Total coverage provided: $550,000 with zero out-of-pocket costs to the carrier.
            </p>
          </motion.div>

          <AdSlot slot={4} />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose FleetJustice for Hazmat Coverage?</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With over a decade of experience in commercial trucking insurance, FleetJustice has built a reputation for providing superior hazmat liability coverage. Our clients choose us because we understand that your business can't afford downtime or coverage gaps.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We offer same-day quotes for qualified carriers and can often provide coverage that starts within 24-48 hours. Our team includes former DOT compliance officers and commercial trucking operators who understand your challenges because they've lived them.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Every policy comes with our 24/7 claims support hotline. When an incident occurs, you need immediate assistance—not a voicemail system. Our dedicated claims team is standing by around the clock to provide the support your fleet needs.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="my-12">
            <h2 className="text-3xl font-bold text-white mb-6">Coverage Limits and Premium Factors</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hazmat liability insurance premiums are calculated based on several key factors specific to your operation. Understanding these elements helps you make informed decisions about coverage levels and cost management:
            </p>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Typical Coverage Ranges:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Minimum Required Coverage</span>
                  <span className="font-semibold text-amber-500">$1,000,000</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Standard Fleet Coverage</span>
                  <span className="font-semibold text-amber-500">$2,000,000</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>High-Risk Materials</span>
                  <span className="font-semibold text-amber-500">$5,000,000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Specialized Hazmat Operations</span>
                  <span className="font-semibold text-amber-500">$10,000,000+</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Premium calculations consider your fleet size, types of hazardous materials transported, driver experience and safety records, geographic operating radius, and claims history. Our team works to identify all available discounts while ensuring you maintain comprehensive protection.
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
              Get Your Hazmat Liability Quote Today
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              Protect your fleet with industry-leading hazmat coverage. Get a free, no-obligation quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  Request Free Quote
                </Button>
              </Link>
              <a href="tel:1-800-FLEET-LAW">
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-FLEET-LAW
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={5} />
    </article>
  );
}
