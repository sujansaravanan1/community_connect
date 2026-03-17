'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const workLog = [
  {
    date: 'Nov 2024',
    phase: 'Planning',
    color: '#085D8A',
    tasks: [
      'Reviewed TSA Webmaster rulebook and rubric criteria',
      'Researched the annual theme and brainstormed how to address it through a community resource site',
      'Decided on Bothell, WA as the fictional community setting',
      'Outlined site structure: Home, Events, Resources, Donate, Submit, About',
      'Assigned roles: design lead, development lead, content lead, QA',
    ],
  },
  {
    date: 'Dec 2024',
    phase: 'Design',
    color: '#044069',
    tasks: [
      'Created wireframes and mockups for all major pages',
      'Chose color palette: deep navy (#022747) and sky blue (#2499D6) with white backgrounds',
      'Selected typography system: Plus Jakarta Sans (headings), Nunito (body), DM Sans (UI)',
      'Designed logo — network graph SVG representing community nodes',
      'Finalized responsive layout grid (12-column bento for events, 3-column for resources)',
    ],
  },
  {
    date: 'Jan 2025',
    phase: 'Development — Core',
    color: '#2499D6',
    tasks: [
      'Initialized Next.js 15 project with TypeScript, Tailwind CSS, and App Router',
      'Built Navbar with scroll-triggered glassmorphism effect and mobile hamburger menu',
      'Built Footer with four-column layout, partner badges, and social links',
      'Created Hero component with animated gradient text and framer-motion entrance',
      'Built AudienceBadges, MissionTicker (ticker scroll), and AboutSection components',
      'Built Services grid, Spotlights bento, Testimonials carousel, and Founders section',
    ],
  },
  {
    date: 'Feb 2025',
    phase: 'Development — Feature Pages',
    color: '#085D8A',
    tasks: [
      'Built Events page: bento grid layout, PinnedCalendar component with hover tooltips',
      'Added EventMap component using Leaflet.js with vanilla dynamic import to avoid SSR errors',
      'Fixed Leaflet hydration bug — added mounting guard and leaflet.css import',
      'Built Resources page: searchable, filterable, sortable directory of 15 community resources',
      'Added expandable detail cards with phone, email, hours, and Google Maps location links',
      'Built Donations page (/wishlist): horizontal scroll causes, sticky donation panel, localStorage tracking',
      'Built Submit Resource form with category selection and validation',
      'Built About page with team section and mission statement',
      'Built Settings/Accessibility page with dark mode, high contrast, font size, color filters, zoom',
    ],
  },
  {
    date: 'Mar 2025',
    phase: 'Development — Polish',
    color: '#044069',
    tasks: [
      'Added Google Calendar integration to all events (Add to Calendar buttons)',
      'Added Google Maps deep links to all event locations and resource locations',
      'Expanded events to 8 total with "See All Events" toggle',
      'Built copyright checklist page with TSA Student Copyright Verification form',
      'Built work log page (this page)',
      'Implemented Settings context with localStorage persistence across all pages',
      'Improved dark mode — added dark variants to all major components',
      'Fixed all broken resource links and verified all internal navigation routes',
      'Added settings gear icon to Navbar for accessibility discoverability',
      'Added copyright and work log links to footer navigation',
    ],
  },
  {
    date: 'Mar 2025',
    phase: 'Testing & Submission',
    color: '#2499D6',
    tasks: [
      'Tested on Chrome, Firefox, Safari, and Edge',
      'Tested on mobile (iPhone, Android) and tablet breakpoints',
      'Verified all nav links, footer links, and page routes',
      'Ran Lighthouse accessibility audit — addressed contrast and aria-label issues',
      'Reviewed rubric checklist: theme, challenge, content, layout, graphics, function, spelling',
      'Final proofreading of all copy for spelling and grammar',
      'Deployed to Vercel with custom domain',
      'Submitted URL and documentation to TSA',
    ],
  },
]

const teamMembers = [
  { name: 'Anay Arya', role: 'Design Lead' },
  { name: 'Advaith Koushik', role: 'Development Lead' },
  { name: 'Satwik Mannepalli', role: 'Backend & Data' },
  { name: 'Saatvik Patel', role: 'Frontend Dev' },
  { name: 'Sujan Saravanan', role: 'Content & QA' },
  { name: 'Nishad Satghare', role: 'Accessibility & Testing' },
]

export default function WorkLogPage() {
  return (
    <>
      <HeroDemo
        badge="TSA Webmaster — Required Documentation"
        staticTitle="Work Log"
        subtitle="A complete record of the development process, task breakdown, and team contributions for Community Connect."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          {/* Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="section-heading mb-6">Team Members</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '13px', color: '#022747' }}>{member.name}</p>
                  <p style={{ fontFamily: 'var(--font-space)', fontSize: '11px', color: '#085D8A' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="section-heading mb-8">Development Timeline</h2>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-sky-200" />

              <div className="space-y-10">
                {workLog.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-6"
                  >
                    {/* dot */}
                    <div className="w-10 h-10 rounded-full border-4 border-white shadow-md flex-shrink-0 flex items-center justify-center z-10" style={{ backgroundColor: entry.color }}>
                      <span style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', fontWeight: 800, color: 'white' }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    <div className="flex-1 bg-sky-50 border border-sky-200 rounded-2xl p-6 -mt-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span style={{ fontFamily: 'var(--font-space)', fontSize: '11px', fontWeight: 700, color: entry.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          {entry.date}
                        </span>
                        <span className="px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: entry.color, fontFamily: 'var(--font-syne)' }}>
                          {entry.phase}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {entry.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2" style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#044069', lineHeight: 1.6 }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hours summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="section-heading mb-6">Time Investment Summary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Planning', hours: '~8 hrs' },
                { label: 'Design', hours: '~12 hrs' },
                { label: 'Development', hours: '~60 hrs' },
                { label: 'Testing', hours: '~10 hrs' },
              ].map(({ label, hours }) => (
                <div key={label} className="bg-sky-600 rounded-2xl p-5 text-center">
                  <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '22px', color: 'white' }}>{hours}</p>
                  <p style={{ fontFamily: 'var(--font-space)', fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-sky-800 to-sky-600 rounded-2xl p-8 text-center">
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '12px' }}>View Copyright Documentation</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/copyright" className="bg-white text-sky-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-sky-50 transition-all" style={{ fontFamily: 'var(--font-syne)' }}>
                  Copyright Checklist
                </Link>
                <Link href="/" className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-all" style={{ fontFamily: 'var(--font-syne)' }}>
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
