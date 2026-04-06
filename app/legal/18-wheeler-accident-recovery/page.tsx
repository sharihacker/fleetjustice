'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Shield, CircleAlert as AlertCircle, Phone, DollarSign, Clock, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AdSlot } from '@/components/AdSlot';

export default function AccidentRecoveryPage() {
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
              <span>Legal Services</span>
              <span>/</span>
              <span>18-Wheeler Accident Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              18-Wheeler Accident Legal Recovery Services
            </h1>
            <p className="text-xl text-slate-300">
              Maximum compensation for commercial trucking accidents. Expert legal representation with a proven track record of multi-million dollar settlements.
            </p>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={1} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <motion.div {...fadeInUp}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Commercial trucking accidents are among the most complex and devastating incidents on American highways. When an 18-wheeler is involved in a collision, the results can be catastrophic—resulting in severe injuries, property damage, lost income, and long-term financial hardship. At FleetJustice, our specialized legal team has recovered over $47 million for trucking companies and drivers affected by accidents.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Unlike standard vehicle accidents, 18-wheeler collisions involve multiple parties, complex federal regulations, and often contentious insurance disputes. Whether you're a trucking company facing liability claims or a driver seeking compensation for injuries, you need legal representation that understands the unique challenges of commercial transportation law.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our attorneys specialize exclusively in commercial trucking cases. We understand DOT regulations, Hours of Service rules, cargo liability, and the intricate web of federal and state laws that govern the trucking industry. This expertise translates directly into larger settlements and faster resolutions for our clients.
            </p>
          </motion.div>

          <AdSlot slot={2} />

          <motion.div {...fadeInUp} className="my-12">
            <h2 className="text-3xl font-bold text-white mb-6">Types of 18-Wheeler Accident Cases We Handle</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              FleetJustice provides comprehensive legal representation for all aspects of commercial trucking accidents. Our experience spans the full spectrum of trucking-related legal issues:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: 'Driver Injury Claims',
                  description: 'Securing compensation for injured truck drivers, including medical expenses, lost wages, disability benefits, and pain and suffering.',
                  icon: Shield
                },
                {
                  title: 'Cargo Damage Recovery',
                  description: 'Recovering losses from damaged, destroyed, or stolen cargo, including business interruption and customer relationship damages.',
                  icon: DollarSign
                },
                {
                  title: 'Liability Defense',
                  description: 'Defending trucking companies and drivers against accident claims, including aggressive negotiation and courtroom representation.',
                  icon: Scale
                },
                {
                  title: 'Equipment Failure Cases',
                  description: 'Pursuing claims against manufacturers and maintenance providers when equipment failure causes or contributes to accidents.',
                  icon: AlertCircle
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

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Every case receives individualized attention from our senior attorneys. We don't use cookie-cutter approaches or settle for lowball insurance offers. Your case deserves aggressive, knowledgeable representation that maximizes your recovery.
            </p>
          </motion.div>

          <AdSlot slot={3} className="float-right ml-8 mb-6 max-w-md" />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">The Real Cost of Commercial Trucking Accidents</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Understanding the full financial impact of an 18-wheeler accident is crucial for securing fair compensation. Insurance companies often focus on immediate, visible damages while ignoring long-term consequences that can devastate trucking businesses and drivers' livelihoods.
            </p>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Recoverable Damages in Commercial Trucking Accidents:</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Medical Expenses: </span>
                    Current and future medical treatment, rehabilitation, physical therapy, and ongoing care costs
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Lost Income: </span>
                    Past and future earnings lost due to inability to work, including reduced earning capacity
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Property Damage: </span>
                    Truck repairs or replacement, cargo losses, and damaged equipment
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Business Interruption: </span>
                    Lost contracts, damaged business relationships, and operational downtime
                  </div>
                </li>
                <li className="flex items-start text-slate-300">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-white">Pain and Suffering: </span>
                    Physical pain, emotional distress, loss of enjoyment of life, and permanent disability
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our attorneys work with accident reconstruction experts, medical professionals, and economic analysts to document every dollar of damage. We build comprehensive cases that insurance companies can't easily dismiss or minimize.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-white mb-4">Recent Settlement: $2.4M Recovery</h3>
            <p className="text-slate-300 text-lg mb-4">
              A regional carrier's driver was involved in a multi-vehicle collision on I-40 caused by another motorist's negligence. The trucking company faced:
            </p>
            <ul className="space-y-2 text-slate-300 mb-4">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$875,000 in immediate medical and vehicle replacement costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$320,000 in lost business and contract penalties during driver recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>$1,205,000 in projected future medical care and disability benefits</span>
              </li>
            </ul>
            <p className="text-slate-300 mb-3">
              Initial insurance offer: $650,000
            </p>
            <p className="text-amber-500 font-bold text-xl">
              FleetJustice settlement: $2,400,000 (secured within 127 days)
            </p>
          </motion.div>

          <AdSlot slot={4} />

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Why Commercial Trucking Accidents Require Specialized Legal Expertise</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              General personal injury attorneys often lack the specialized knowledge required for complex commercial trucking cases. These cases involve unique legal considerations that demand expertise in federal transportation law, commercial insurance policies, and industry-specific regulations.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Federal Regulations That Impact Your Case:</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-slate-300">
                <FileCheck className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Hours of Service Compliance: </span>
                  Violations of HOS regulations can dramatically impact liability determinations and settlement values
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <FileCheck className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Vehicle Maintenance Records: </span>
                  FMCSA maintenance requirements and documentation can prove or defend against negligence claims
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <FileCheck className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Driver Qualification Files: </span>
                  Proper vetting and qualification documentation protects carriers from negligent hiring claims
                </div>
              </li>
              <li className="flex items-start text-slate-300">
                <FileCheck className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Cargo Securement Standards: </span>
                  Compliance with FMCSA cargo securement rules impacts liability in load shift accidents
                </div>
              </li>
            </ul>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our attorneys have extensive experience with DOT audits, FMCSA regulations, and commercial insurance policies. We speak the language of the trucking industry and understand the nuances that make or break cases worth millions.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Your Recovery Timeline: What to Expect</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Every accident case is unique, but understanding the general timeline helps set realistic expectations. Commercial trucking accident cases typically follow this progression:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Initial Consultation (Day 1-3)</h4>
                  <p className="text-slate-300">Free case evaluation, evidence preservation, and immediate claim filing with relevant insurance carriers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Investigation Phase (Weeks 1-6)</h4>
                  <p className="text-slate-300">Comprehensive evidence gathering, expert witness retention, and liability analysis.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Demand and Negotiation (Weeks 6-16)</h4>
                  <p className="text-slate-300">Formal demand submission, settlement negotiations, and alternative dispute resolution if needed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Resolution (Weeks 12-24)</h4>
                  <p className="text-slate-300">Settlement agreement or trial verdict, with payment typically within 30-45 days of resolution.</p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              While we work efficiently to resolve cases quickly, we never sacrifice settlement value for speed. Insurance companies know FleetJustice prepares every case for trial, which motivates fair settlement offers without prolonged litigation.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">No Recovery, No Fee Guarantee</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              FleetJustice operates on a contingency fee basis for accident recovery cases. You pay nothing unless we recover compensation for you. This means:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>No upfront legal fees or retainers required</span>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>No out-of-pocket costs for expert witnesses or investigation</span>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>Our fee comes only from your recovery, typically 33-40% depending on case complexity</span>
              </li>
              <li className="flex items-start text-slate-300">
                <DollarSign className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>If we don't win your case, you owe us nothing—guaranteed</span>
              </li>
            </ul>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              This fee structure aligns our interests with yours. We only succeed when you receive fair compensation. It's why we fight aggressively for maximum recovery in every case.
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
              Get Your Free Case Evaluation
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              Time-sensitive evidence disappears quickly. Contact us today for a free consultation with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  Request Free Consultation
                </Button>
              </Link>
              <a href="tel:1-800-FLEET-LAW">
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-FLEET-LAW
                </Button>
              </a>
            </div>
            <p className="text-sm text-slate-800 mt-6">
              Available 24/7 for urgent accident cases. No recovery, no fee guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      <AdSlot slot={5} />
    </article>
  );
}
