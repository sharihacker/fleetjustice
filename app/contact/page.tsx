'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { toast, Toaster } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    dot_number: '',
    fleet_size: '',
    coverage_type: 'general',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('quote_requests').insert([
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company_name || null,
          dot_number: formData.dot_number || null,
          fleet_size: parseInt(formData.fleet_size) || 1,
          coverage_type: formData.coverage_type,
          notes: formData.message || null,
          status: 'new'
        }
      ]);

      if (error) throw error;

      toast.success('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company_name: '',
        dot_number: '',
        fleet_size: '',
        coverage_type: 'general',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to submit request. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950">
      <Toaster richColors position="top-center" />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact FleetJustice
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a free quote or consultation. We're available 24/7 for emergency support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              title: '24/7 Phone Support',
              content: '1-800-FLEET-LAW',
              link: 'tel:1-800-FLEET-LAW'
            },
            {
              icon: Mail,
              title: 'Email Us',
              content: 'info@fleetjustice.com',
              link: 'mailto:info@fleetjustice.com'
            },
            {
              icon: MapPin,
              title: 'Headquarters',
              content: 'Nationwide Service',
              link: null
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-slate-300 hover:text-amber-500 transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-slate-300">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Quote</h2>
            <p className="text-slate-300 mb-6">
              Fill out the form below and our team will contact you within 24 hours with a competitive quote tailored to your fleet's needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dot_number" className="block text-sm font-medium text-slate-300 mb-2">
                    DOT Number
                  </label>
                  <Input
                    id="dot_number"
                    value={formData.dot_number}
                    onChange={(e) => setFormData({ ...formData, dot_number: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label htmlFor="fleet_size" className="block text-sm font-medium text-slate-300 mb-2">
                    Fleet Size *
                  </label>
                  <Input
                    id="fleet_size"
                    type="number"
                    min="1"
                    required
                    value={formData.fleet_size}
                    onChange={(e) => setFormData({ ...formData, fleet_size: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Number of vehicles"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="coverage_type" className="block text-sm font-medium text-slate-300 mb-2">
                  Coverage Type *
                </label>
                <select
                  id="coverage_type"
                  required
                  value={formData.coverage_type}
                  onChange={(e) => setFormData({ ...formData, coverage_type: e.target.value })}
                  className="w-full h-10 px-3 rounded-md bg-slate-800 border border-slate-700 text-white"
                >
                  <option value="general">General Liability</option>
                  <option value="hazmat">Hazmat Liability</option>
                  <option value="cargo">Cargo Insurance</option>
                  <option value="new-authority">New Authority</option>
                  <option value="fleet">Fleet Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold"
              >
                {loading ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </>
                )}
              </Button>

              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-6">Business Hours</h2>
            <Card className="bg-slate-800 border-slate-700 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Clock className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Regular Hours</h3>
                    <div className="space-y-1 text-slate-300">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                  <p className="text-slate-300">
                    24/7 emergency claims support available for active clients. Call our main line anytime for urgent matters.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Why Choose FleetJustice?</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Same-day quotes for qualified carriers</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Specialized commercial trucking expertise</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Competitive rates with comprehensive coverage</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>24/7 claims support and legal consultation</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>No-fee legal consultations for accident cases</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
