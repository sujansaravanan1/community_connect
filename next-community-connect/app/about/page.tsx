'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const timeline = [
  {
    year: '2019',
    title: 'The Idea Takes Root',
    description: 'Aisha and Marcus meet at a Bothell hackathon and sketch out the first version of Community Connect on a napkin. The goal is simple: one searchable list of every resource in town.',
    icon: 'lightbulb',
  },
  {
    year: '2020',
    title: 'Launch & First 50 Resources',
    description: 'The platform goes live with 50 hand-researched Bothell-area resources. During the pandemic, traffic spikes as residents search for food assistance and health support.',
    icon: 'laptop',
  },
  {
    year: '2021',
    title: 'Lucia & Theo Join the Team',
    description: 'Lucia lands our first formal nonprofit partnerships. Theo begins representing Community Connect at community meetings and city events.',
    icon: 'handshake',
  },
  {
    year: '2022',
    title: '100+ Resources & First Events',
    description: 'The directory grows past 100 verified resources. We host our first Community Resource Fair, bringing together 30+ organizations and 800+ attendees.',
    icon: 'star',
  },
  {
    year: '2023',
    title: 'Volunteer Network Expands',
    description: 'Over 400 community volunteers sign up to help verify listings, run workshops, and support events. The platform becomes genuinely community-run.',
    icon: 'users',
  },
  {
    year: '2024',
    title: '500+ Resources & 48 Partners',
    description: 'We hit 500 verified resources and 48 organizational partners. The platform now sees 12,000+ monthly visitors.',
    icon: 'rocket',
  },
]

const partners = [
  'United Way',
  'Local School District',
  'County Health District',
  'Parks & Recreation Dept.',
  'Regional Food Bank',
  'Housing Authority',
  'Youth Services Bureau',
  'Workforce Development',
  'Public Library System',
  'Community Clinic Network',
]

const iconMap: Record<string, string> = {
  lightbulb: '💡',
  laptop: '💻',
  handshake: '🤝',
  star: '⭐',
  users: '👥',
  rocket: '🚀',
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target])

  return <span>{count.toLocaleString()}+</span>
}

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroDemo 
        badge="Our Story"
        staticTitle="Built by the Community,<br />for the Community"
        subtitle="Community Connect started with one simple belief: everyone deserves to know what support exists in the Bothell area. We built that place."
        stats={[
          {value: '2019', label: 'Founded'},
          {value: '500+', label: 'Resources'},
          {value: '48', label: 'Partners'}
        ]}
      />

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-gradient-to-br from-green-deep to-green-light flex items-center justify-center text-[100px] text-white/15 relative overflow-hidden">
                <span>🌿</span>
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent" />
              </div>
              {/* Floating cards */}
              <div className="absolute bottom-7 right-[-20px] bg-white rounded-[var(--radius-md)] p-4 shadow-lg flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-mid to-green-pale flex items-center justify-center text-white">
                  <span>👥</span>
                </div>
                <div>
                  <div className="font-space font-bold text-lg text-[var(--text-dark)]">1,200+</div>
                  <div className="font-outfit text-xs text-[var(--text-muted)]">Bothell Volunteers</div>
                </div>
              </div>
              <div className="absolute top-7 left-[-20px] bg-white rounded-[var(--radius-md)] p-4 shadow-lg flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-white">
                  <span>🛡️</span>
                </div>
                <div>
                  <div className="font-space font-bold text-lg text-[var(--text-dark)]">Bothell, WA</div>
                  <div className="font-outfit text-xs text-[var(--text-muted)]">Est. 2019</div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-heading mb-4">Connecting people to the help they need</h2>

              <p className="font-outfit text-base text-[var(--text-body)] leading-relaxed mb-4">
                Community Connect is a free, volunteer-powered platform that makes it easy to find, share, and promote local services, programs, and organizations that uplift residents of all backgrounds.
              </p>

              <p className="font-outfit text-base text-[var(--text-body)] leading-relaxed mb-6">
                We saw firsthand how many people didn't know about the resources right here in Bothell — food banks, free tutoring, mental health support, and volunteer programs — simply because there was no single place to look. We built that place.
              </p>

              <div className="border-l-4 border-green-pale bg-green-mist rounded-r-[var(--radius-md)] p-5 mb-6">
                <p className="mission-quote-text m-0">"No one should fall through the cracks just because they didn't know where to look. That's why Community Connect exists."</p>
              </div>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '❤️', title: 'Inclusive', desc: 'Resources for every age, background, and need.' },
                  { icon: '🛡️', title: 'Trusted', desc: 'Every resource is reviewed before listing.' },
                  { icon: '👥', title: 'Community-Led', desc: 'Built by volunteers, sustained by neighbors.' },
                  { icon: '⚡', title: 'Impactful', desc: 'Thousands connected to support every month.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-green-mist border border-green-wash rounded-[var(--radius-md)] hover:border-green-light transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-space font-bold text-sm text-[var(--text-dark)]">{item.title}</div>
                      <div className="font-outfit text-xs text-[var(--text-muted)]">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-green-deep via-green-mid to-accent-teal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(145,176,138,0.15)_0%,transparent_55%),radial-gradient(ellipse_at_80%_50%,rgba(45,74,40,0.4)_0%,transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { value: 500, label: 'Resources Listed' },
              { value: 1200, label: 'Active Volunteers' },
              { value: 320, label: 'Events Organized' },
              { value: 48, label: 'Partner Organizations' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-12 px-6"
              >
                <div className="font-space text-4xl lg:text-5xl font-bold text-white mb-2 golden-stat">
                  {isVisible && <AnimatedCounter target={item.value} />}
                </div>
                <div className="font-outfit text-sm font-medium text-white/65">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--section-bg)]" id="story">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-heading">How We Got Here</h2>
            <p className="section-subtext mx-auto">From a weekend project to a Bothell institution — here's the story of Community Connect.</p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-wash via-green-pale to-green-wash -translate-x-1/2 hidden lg:block" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:order-2'} lg:direction-ltr`}>
                  <div className="bg-white border border-green-wash rounded-[var(--radius-md)] p-5 hover:border-green-light hover:shadow-card transition-all">
                    <h3 className="font-space font-bold text-base text-[var(--text-dark)] mb-2">{item.title}</h3>
                    <p className="font-outfit text-sm text-[var(--text-muted)] leading-relaxed m-0">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:direction-ltr">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-mid to-accent-teal border-4 border-white shadow-md flex items-center justify-center text-xl mb-2">
                    {iconMap[item.icon]}
                  </div>
                  <div className="font-space text-sm font-bold text-accent-gold">{item.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-eyebrow">Our Partners</span>
            <h2 className="section-heading">Organizations We Work With</h2>
            <p className="section-subtext mx-auto">Community Connect is proud to partner with these local organizations who share our commitment to accessible, equitable community support.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {partners.map((partner, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white border border-green-wash rounded-full px-5 py-3 font-outfit text-sm font-medium text-[var(--text-body)] hover:border-green-light hover:text-green-mid hover:-translate-y-1 hover:shadow-card transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-green-light" />
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--section-bg)]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-deep to-green-mid rounded-[var(--radius-lg)] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(145,176,138,0.2)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="font-space text-3xl font-bold text-white mb-4">Ready to Get Involved?</h2>
              <p className="font-outfit text-base text-white/75 max-w-md mx-auto mb-8">
                Browse our full directory of community resources, submit a resource you know about, or come to an upcoming event.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/resources" className="btn-primary px-6 py-3 rounded-xl font-outfit font-semibold flex items-center gap-2">
                  Browse Resources
                </Link>
                <Link href="/events" className="btn-outline px-6 py-3 rounded-xl font-outfit font-semibold flex items-center gap-2">
                  Upcoming Events
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

