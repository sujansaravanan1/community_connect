'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, CheckCircle, AlertCircle, Upload, Mail, Phone, MapPin } from 'lucide-react'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const categories = [
  'Education',
  'Health & Wellness',
  'Career & Jobs',
  'Volunteering',
  'Community Projects',
  'Food & Nutrition',
  'Housing & Shelter',
  'Legal Services',
  'Mental Health',
  'Youth Programs',
  'Senior Services',
  'Other',
]

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    category: '',
    website: '',
    description: '',
    address: '',
    hours: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <>
        <HeroDemo 
          staticTitle="Thank You!"
          subtitle="Your resource submission has been received. Our team will review it within 2-3 business days and add it to the directory."
          primaryHref="/"
          primaryText="Return Home"
          secondaryHref="/resources"
          secondaryText="Browse Resources"
        />
      </>
    )
  }

  return (
    <>
      <HeroDemo 
        badge="Community Driven"
        staticTitle="Submit a Resource"
        subtitle="Know of a program that helped you or someone you know? Share it with our community so others can benefit too."
      />

      {/* Form Section */}
      <section className="py-24 bg-[var(--section-bg)]">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[var(--radius-lg)] border border-green-wash shadow-card p-8 md:p-10"
          >
            {/* Info Banner */}
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-green-mid flex-shrink-0 mt-0.5" />
              <div className="font-outfit text-sm text-[var(--text-body)]">
                <strong className="text-[var(--text-dark)]">All submissions are reviewed</strong> by our team within 2-3 business days to ensure quality and accuracy before being added to the directory.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Resource Name */}
              <div>
                <label htmlFor="name" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                  Resource Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Bothell Food Bank"
                  className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                  Organization / Provider Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g., Bothell Community Services"
                  className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors bg-white"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the resource, who it's for, and what services it provides..."
                  className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors resize-none"
                />
              </div>

              {/* Contact Info Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@organization.org"
                      className="w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-light" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-4 h-4 text-green-light" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Bothell, WA 98011"
                    className="w-full pl-12 pr-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                  />
                </div>
              </div>

              {/* Hours & Website Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hours" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                    Hours of Operation
                  </label>
                  <input
                    type="text"
                    id="hours"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    placeholder="Mon-Fri 9am-5pm"
                    className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block font-outfit text-sm font-semibold text-[var(--text-dark)] mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://organization.org"
                    className="w-full px-5 py-3 rounded-[var(--radius-md)] border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-mid to-green-pale text-white font-outfit font-semibold px-8 py-4 rounded-[var(--radius-md)] flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-green-mid/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Submit Resource
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

