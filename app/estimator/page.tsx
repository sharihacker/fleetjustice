'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Truck, Package, MapPin, Award, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function EstimatorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicle_type: '',
    cargo_type: '',
    annual_miles: '',
    years_experience: '',
    email: ''
  });
  const [estimate, setEstimate] = useState<{
    range: string;
    factors: string[];
  } | null>(null);

  const calculateEstimate = () => {
    const miles = parseInt(formData.annual_miles);
    const experience = parseInt(formData.years_experience);

    let baseRate = 8000;
    const factors: string[] = [];

    if (formData.vehicle_type === 'semi-truck') {
      baseRate += 2000;
      factors.push('Class 8 Commercial Vehicle');
    } else if (formData.vehicle_type === 'box-truck') {
      baseRate += 500;
      factors.push('Medium Duty Commercial Vehicle');
    }

    if (formData.cargo_type === 'hazmat') {
      baseRate += 5000;
      factors.push('Hazardous Materials Premium');
    } else if (formData.cargo_type === 'refrigerated') {
      baseRate += 1500;
      factors.push('Specialized Refrigerated Equipment');
    } else if (formData.cargo_type === 'general') {
      factors.push('Standard General Freight');
    }

    if (miles > 100000) {
      baseRate += 3000;
      factors.push('High Annual Mileage');
    } else if (miles < 50000) {
      baseRate -= 1000;
      factors.push('Low Annual Mileage Discount');
    }

    if (experience >= 10) {
      baseRate -= 1500;
      factors.push('Experienced Operator Discount');
    } else if (experience < 2) {
      baseRate += 2000;
      factors.push('New Operator Premium');
    }

    const lowEnd = Math.round(baseRate * 0.85);
    const highEnd = Math.round(baseRate * 1.15);

    const estimateData = {
      range: `$${lowEnd.toLocaleString()} - $${highEnd.toLocaleString()}`,
      factors
    };

    setEstimate(estimateData);

    if (formData.email) {
      supabase.from('insurance_estimates').insert([
        {
          email: formData.email,
          vehicle_type: formData.vehicle_type,
          cargo_type: formData.cargo_type,
          annual_miles: parseInt(formData.annual_miles),
          years_experience: parseInt(formData.years_experience),
          estimated_premium_range: estimateData.range,
          risk_factors: factors
        }
      ]);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      calculateEstimate();
      setStep(6);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <Calculator className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trucking Insurance Estimator
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get an instant estimate of your commercial trucking insurance premiums in just 5 simple steps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {step < 6 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400">Step {step} of 5</span>
              <span className="text-amber-500 font-semibold">{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <Truck className="h-12 w-12 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">What type of vehicle do you operate?</h2>
                <div className="space-y-3">
                  {[
                    { value: 'semi-truck', label: 'Class 8 Semi-Truck / Tractor-Trailer' },
                    { value: 'box-truck', label: 'Box Truck / Straight Truck' },
                    { value: 'van', label: 'Cargo Van / Sprinter' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFormData({ ...formData, vehicle_type: option.value });
                        setTimeout(handleNext, 200);
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        formData.vehicle_type === option.value
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-white font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <Package className="h-12 w-12 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">What type of cargo do you haul?</h2>
                <div className="space-y-3">
                  {[
                    { value: 'general', label: 'General Freight (Dry Goods, Non-Hazmat)' },
                    { value: 'refrigerated', label: 'Refrigerated / Temperature Controlled' },
                    { value: 'hazmat', label: 'Hazardous Materials' },
                    { value: 'specialized', label: 'Specialized (Heavy Equipment, Oversized)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFormData({ ...formData, cargo_type: option.value });
                        setTimeout(handleNext, 200);
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        formData.cargo_type === option.value
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-white font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">How many miles do you drive annually?</h2>
                <div className="space-y-3">
                  {[
                    { value: '25000', label: 'Under 25,000 miles (Local/Regional)' },
                    { value: '50000', label: '25,000 - 75,000 miles (Regional)' },
                    { value: '100000', label: '75,000 - 125,000 miles (Long Haul)' },
                    { value: '150000', label: 'Over 125,000 miles (Heavy Long Haul)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFormData({ ...formData, annual_miles: option.value });
                        setTimeout(handleNext, 200);
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        formData.annual_miles === option.value
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-white font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">How many years of commercial driving experience?</h2>
                <div className="space-y-3">
                  {[
                    { value: '1', label: 'Less than 2 years' },
                    { value: '3', label: '2-5 years' },
                    { value: '7', label: '5-10 years' },
                    { value: '12', label: 'Over 10 years' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFormData({ ...formData, years_experience: option.value });
                        setTimeout(handleNext, 200);
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        formData.years_experience === option.value
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-white font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 5 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Get your estimate (Optional)</h2>
                <p className="text-slate-300 mb-6">
                  Enter your email to receive a detailed quote and personalized recommendations.
                </p>
                <input
                  type="email"
                  placeholder="your.email@example.com (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 text-white mb-4"
                />
                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold"
                >
                  Calculate My Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-slate-400 mt-4 text-center">
                  Skip email to see your estimate without saving results.
                </p>
              </CardContent>
            </Card>
          )}

          {step === 6 && estimate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-amber-500 to-amber-600 border-0">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-slate-900 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Estimated Annual Premium</h2>
                  <p className="text-5xl font-bold text-slate-900 mb-6">{estimate.range}</p>
                  <p className="text-slate-800 mb-6">
                    This estimate is based on the information you provided. Actual rates may vary based on additional factors.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 mt-6">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Factors Affecting Your Rate:</h3>
                  <ul className="space-y-2">
                    {estimate.factors.map((factor, index) => (
                      <li key={index} className="flex items-start text-slate-300">
                        <CheckCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 mt-6">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                  <p className="text-slate-300 mb-6">
                    Ready to get an accurate quote with our expert team? We'll review your specific situation and find the best coverage at the most competitive rates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold">
                        Get Personalized Quote
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        setStep(1);
                        setEstimate(null);
                        setFormData({
                          vehicle_type: '',
                          cargo_type: '',
                          annual_miles: '',
                          years_experience: '',
                          email: ''
                        });
                      }}
                      variant="outline"
                      className="flex-1 border-slate-700 text-white hover:bg-slate-700"
                    >
                      Start Over
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
