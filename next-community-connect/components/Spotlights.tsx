'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const spotlights = [
  {
    title: 'Community Food Bank',
    category: 'Food & Nutrition',
    description: 'Providing nutritious meals and groceries to families in need every week. No income verification required for first visit.',
    location: 'Downtown District',
    hours: 'Mon–Sat 9am–5pm',
    badge: '⭐ Featured',
  },
  {
    title: 'Free Tutoring Center',
    category: 'Education',
    description: 'Volunteer tutors available for K–12 and adult learners in math, reading, and science. Drop-in and appointment options.',
    location: 'Eastside Library',
    hours: 'All Ages',
    badge: '🔥 Popular',
  },
  {
    title: 'Community Health Clinic',
    category: 'Health',
    description: 'Free and sliding-scale medical, dental, and mental health services for uninsured and underinsured residents.',
    location: 'Westpark Ave',
    hours: '(425) 806-6600',
    badge: '🆕 New',
  },
]

const gradients = [
  'from-sky-700 to-sky-500',
  'from-sky-600 to-sky-400',
  'from-sky-800 to-sky-600',
]

export function Spotlights() {
  return (
    <section className="py-24 glass-bg backdrop-blur" id="spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">Featured Resources</span>
          <h2 className="section-heading">Three resources making a difference right now.</h2>
        </motion.div>

        {/* Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {spotlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-bg-md rounded-xl border border-sky-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-lg hover:border-sky-300"
            >
              {/* Image Area */}
              <div className={`h-52 bg-gradient-to-br ${gradients[i]} relative flex items-center justify-center`}>
                <span className="text-white/20 text-7xl">●</span>
                <span className="absolute top-3.5 left-3.5 glass-bg-md text-sky-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
                <span className={`absolute top-3.5 right-3.5 bg-gradient-to-r from-accent-warm to-accent-coral text-[11px] font-bold px-3 py-1 rounded-full text-white shadow-sm`}>
                  {item.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="font-syne text-xl font-semibold text-sky-900 mb-2 leading-tight">{item.title}</h3>
                <p className="font-dm-sans text-sm text-sky-600 leading-relaxed mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-4 font-dm-sans text-xs text-sky-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-sky-500" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-sky-500" />
                    {item.hours}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-400 text-white font-dm-sans text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg hover:shadow-sky-500/30"
          >
            <ArrowRight size={16} /> View All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}

