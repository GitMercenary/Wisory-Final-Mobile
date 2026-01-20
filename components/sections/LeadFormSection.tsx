'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  headcount: string;
}

interface LeadFormSectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  successMessage?: string;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  headline = 'Get Instant Access',
  subheadline = 'Fill in your details below and we\'ll send the guide directly to your inbox.',
  buttonText = 'Send Me the Guide',
  successMessage = 'Check your inbox! The guide is on its way.',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    headcount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.headcount) {
      newErrors.headcount = 'Please select planned headcount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    console.log('Lead Form Submission:', formData);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="lead-form" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
              {headline}
            </h2>
            <p className="text-grey text-base md:text-lg">
              {subheadline}
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="bg-[#F5F1E8] rounded-[32px] p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black mb-3">
                  Success!
                </h3>
                <p className="text-grey">{successMessage}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.name ? 'border-red-500' : 'border-grey/30'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Company Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.email ? 'border-red-500' : 'border-grey/30'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-grey/30'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Headcount Dropdown */}
                <div>
                  <label
                    htmlFor="headcount"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Planned Headcount *
                  </label>
                  <select
                    id="headcount"
                    name="headcount"
                    value={formData.headcount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.headcount ? 'border-red-500' : 'border-grey/30'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all appearance-none cursor-pointer`}
                  >
                    <option value="">Select headcount range</option>
                    <option value="<50">Less than 50</option>
                    <option value="50-200">50 - 200</option>
                    <option value="200+">200+</option>
                  </select>
                  {errors.headcount && (
                    <p className="mt-1 text-sm text-red-500">{errors.headcount}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {buttonText}
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-center text-xs text-grey mt-4">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  . We respect your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
