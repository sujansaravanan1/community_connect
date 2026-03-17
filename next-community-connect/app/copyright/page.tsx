'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const checklistItems = [
  { id: 1, item: 'All text content was written originally by team members', cleared: true },
  { id: 2, item: 'Google Fonts (Plus Jakarta Sans, Nunito, DM Sans) — free for commercial/educational use under Open Font License', cleared: true },
  { id: 3, item: 'Lucide Icons — MIT License, free for all uses', cleared: true },
  { id: 4, item: 'Framer Motion — MIT License, free for all uses', cleared: true },
  { id: 5, item: 'Next.js / React / Tailwind CSS — MIT License, free for all uses', cleared: true },
  { id: 6, item: 'Leaflet.js — BSD 2-Clause License, free for all uses', cleared: true },
  { id: 7, item: 'OpenStreetMap tiles — ODbL License, attribution provided on map', cleared: true },
  { id: 8, item: 'All community organization names and data are fictional, created for competition', cleared: true },
  { id: 9, item: 'No images from third-party sources are used without license verification', cleared: true },
  { id: 10, item: 'No copyrighted logos, trademarks, or branded content are reproduced', cleared: true },
]

const teamMembers = [
  { name: 'Anay Arya', id: '21557059', memberId: '1099158' },
  { name: 'Advaith Koushik', id: '21557037', memberId: '1099183' },
  { name: 'Satwik Mannepalli', id: '21557184', memberId: '1099165' },
  { name: 'Saatvik Patel', id: '21557219', memberId: '1208114' },
  { name: 'Sujan Saravanan', id: '21557088', memberId: '1099192' },
  { name: 'Nishad Satghare', id: '21557099', memberId: '1099162' },
]

export default function CopyrightPage() {
  return (
    <>
      <HeroDemo
        badge="TSA Webmaster — Required Documentation"
        staticTitle="Copyright &amp; References"
        subtitle="Student Copyright Checklist, work attribution, and all sources used in the Community Connect project."
      />

      <section className="py-24 bg-white dark:bg-sky-950">
        <div className="max-w-4xl mx-auto px-4">

          {/* ── TSA STUDENT COPYRIGHT CHECKLIST ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block bg-sky-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-space)' }}>
                Go / No-Go Item
              </span>
            </div>
            <h2 className="section-heading mb-6">Student Copyright Checklist</h2>
            <div className="rounded-2xl border-2 border-sky-400 bg-sky-50 overflow-hidden">
              <div className="bg-sky-600 px-8 py-5">
                <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px', color: 'white' }}>
                  TSA Webmaster — Student Copyright Verification
                </p>
                <p style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
                  Chapter 1557 · North Creek High School · State Conference 2026
                </p>
              </div>
              <div className="px-8 py-6">
                <p style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: '#044069', marginBottom: '20px', lineHeight: 1.6 }}>
                  We, the undersigned team members, certify that all materials used in the Community Connect website
                  are either original works created by us, properly licensed for educational/competition use,
                  or in the public domain. Each item below has been verified:
                </p>
                <div className="space-y-3 mb-8">
                  {checklistItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-sky-500 border-2 border-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: '#022747', lineHeight: 1.5 }}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Team signatures */}
                <div className="border-t border-sky-200 pt-6">
                  <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '14px', color: '#022747', marginBottom: '16px' }}>
                    Team Members (Digital Signature — submitted electronically):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="bg-white border border-sky-200 rounded-xl px-4 py-3">
                        <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '13px', color: '#022747' }}>{member.name}</p>
                        <p style={{ fontFamily: 'var(--font-space)', fontSize: '11px', color: '#085D8A' }}>
                          Chapter ID: {member.id} · Member ID: {member.memberId}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="section-heading mb-4">Project Information</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Project Name', value: 'Community Connect' },
                  { label: 'Competition', value: 'TSA Webmaster — State Conference 2026' },
                  { label: 'Technology Stack', value: 'Next.js 15, React 18, TypeScript, Tailwind CSS, Framer Motion, Leaflet' },
                  { label: 'Location', value: 'Bothell, Washington' },
                  { label: 'Chapter', value: 'North Creek High School — Chapter 1557' },
                  { label: 'Advisor', value: 'Terri Smith · tsmith3@nsd.org · (425) 408-8800' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ fontFamily: 'var(--font-space)', fontSize: '12px', color: '#085D8A', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                    <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '14px', color: '#022747' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Framework Statement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="section-heading mb-4">Framework Statement</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <p style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: '#044069', lineHeight: 1.8 }}>
                This website was built entirely from scratch using <strong>Next.js 15</strong> with the App Router. No website templates or pre-built themes were used. All components, layouts, and UI elements were custom-coded by team members using React 18, TypeScript, Tailwind CSS for styling, and Framer Motion for animations. The site is fully responsive and optimized for accessibility.
              </p>
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="section-heading mb-4">Sources &amp; Credits</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-sky-200 bg-sky-100">
                    <th className="text-left px-6 py-4" style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 700, color: '#022747' }}>Resource</th>
                    <th className="text-left px-6 py-4" style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 700, color: '#022747' }}>Source / License</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { resource: 'Google Fonts — Plus Jakarta Sans, Nunito, DM Sans', source: 'fonts.google.com — Open Font License (OFL)' },
                    { resource: 'Lucide Icons', source: 'lucide.dev — MIT License' },
                    { resource: 'Framer Motion', source: 'framer.com/motion — MIT License' },
                    { resource: 'Next.js', source: 'nextjs.org — MIT License' },
                    { resource: 'Tailwind CSS', source: 'tailwindcss.com — MIT License' },
                    { resource: 'Leaflet.js (interactive maps)', source: 'leafletjs.com — BSD 2-Clause License' },
                    { resource: 'OpenStreetMap tile data', source: 'openstreetmap.org — ODbL (attribution shown)' },
                    { resource: 'Community Data', source: 'Fictional — created by team for competition' },
                    { resource: 'Bothell, WA geographic data', source: 'City of Bothell Official Site — bothellwa.gov' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-sky-100 last:border-0">
                      <td className="px-6 py-4" style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#044069' }}>{row.resource}</td>
                      <td className="px-6 py-4" style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#085D8A' }}>{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Accessibility */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="section-heading mb-4">Accessibility Statement</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <p style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: '#044069', lineHeight: 1.8, marginBottom: '16px' }}>
                Community Connect is committed to ensuring digital accessibility for people with disabilities. The site includes a full Accessibility Settings panel (available via the ⚙ icon in the navigation bar).
              </p>
              <ul className="space-y-2">
                {['WCAG 2.1 Level AA compliant design', 'Keyboard navigable interface', 'Screen reader compatible markup', 'Responsive design for all devices and screen sizes', 'High contrast mode', 'Dark mode', 'Adjustable font sizes (Small → X-Large)', 'Color blind mode & grayscale filter', 'Reduced motion mode', 'Reading guide overlay', 'Page zoom up to 200%'].map((item) => (
                  <li key={item} className="flex items-center gap-2" style={{ fontFamily: 'var(--font-space)', fontSize: '13px', color: '#044069' }}>
                    <span className="text-sky-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="section-heading mb-4">Privacy &amp; Terms</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <p style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: '#044069', lineHeight: 1.8 }}>
                This website was created for educational purposes as part of the TSA Webmaster competition. All content — including organization names, descriptions, events, and contact information — is fictional and created for demonstration purposes only. No actual user data is collected, stored, or processed.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-sky-800 to-sky-600 rounded-2xl p-8 text-center">
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '12px' }}>See Our Work Log</h3>
              <p style={{ fontFamily: 'var(--font-space)', fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
                View the full development timeline and process documentation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/work-log" className="bg-white text-sky-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-sky-50 transition-all" style={{ fontFamily: 'var(--font-syne)' }}>
                  View Work Log
                </Link>
                <Link href="/resources" className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-all" style={{ fontFamily: 'var(--font-syne)' }}>
                  Browse Resources
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
