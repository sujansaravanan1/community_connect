'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

export default function CopyrightPage() {
  return (
    <>
      <HeroDemo 
        badge="Reference Page"
        staticTitle="Copyright &amp; References"
        subtitle="Documentation of sources, credits, and legal information for the Community Connect project."
      />

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">Project Information</h2>
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-outfit text-sm text-[var(--text-muted)] mb-1">Project Name</p>
                  <p className="font-space font-semibold text-[var(--text-dark)]">Community Connect</p>
                </div>
                <div>
                  <p className="font-outfit text-sm text-[var(--text-muted)] mb-1">Competition</p>
                  <p className="font-space font-semibold text-[var(--text-dark)]">TSA Webmaster</p>
                </div>
                <div>
                  <p className="font-outfit text-sm text-[var(--text-muted)] mb-1">Technology Stack</p>
                  <p className="font-space font-semibold text-[var(--text-dark)]">Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion</p>
                </div>
                <div>
                  <p className="font-outfit text-sm text-[var(--text-muted)] mb-1">Location</p>
                  <p className="font-space font-semibold text-[var(--text-dark)]">Bothell, Washington</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Framework Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">Framework Statement</h2>
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-6">
              <p className="font-outfit text-[var(--text-body)] leading-relaxed">
                This website was created using <strong>Next.js 14</strong> with the App Router architecture. It is a custom-built web application using modern web technologies including React 18, TypeScript, Tailwind CSS for styling, and Framer Motion for animations. The site is fully responsive and optimized for accessibility.
              </p>
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">Sources & Credits</h2>
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-wash">
                    <th className="text-left px-6 py-4 font-space text-sm font-semibold text-[var(--text-dark)]">Resource</th>
                    <th className="text-left px-6 py-4 font-space text-sm font-semibold text-[var(--text-dark)]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-wash">
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-body)]">Google Fonts (Space Grotesk, Outfit)</td>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-muted)]">fonts.google.com</td>
                  </tr>
                  <tr className="border-b border-green-wash">
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-body)]">Lucide Icons</td>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-muted)]">lucide.dev</td>
                  </tr>
                  <tr className="border-b border-green-wash">
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-body)]">Framer Motion</td>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-muted)]">framer.com/motion</td>
                  </tr>
                  <tr className="border-b border-green-wash">
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-body)]">Community Data (Placeholder)</td>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-muted)]">Fictional for competition</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-body)]">Bothell, WA Location</td>
                    <td className="px-6 py-4 font-outfit text-sm text-[var(--text-muted)]">City of Bothell Official Site</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Accessibility Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">Accessibility</h2>
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-6">
              <p className="font-outfit text-[var(--text-body)] leading-relaxed mb-4">
                Community Connect is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
              </p>
              <ul className="list-disc list-inside font-outfit text-sm text-[var(--text-body)] space-y-2">
                <li>WCAG 2.1 Level AA compliant</li>
                <li>Keyboard navigable interface</li>
                <li>Screen reader compatible</li>
                <li>Responsive design for all devices</li>
                <li>High contrast color options</li>
              </ul>
            </div>
          </motion.div>

          {/* Privacy & Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">Privacy & Terms</h2>
            <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-6">
              <p className="font-outfit text-[var(--text-body)] leading-relaxed mb-4">
                This website was created for educational purposes as part of the TSA Webmaster competition. All content, including organization names, descriptions, and contact information, is fictional and for demonstration purposes only.
              </p>
              <p className="font-outfit text-[var(--text-body)] leading-relaxed">
                No actual user data is collected, stored, or processed by this website.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-deep to-green-mid rounded-[var(--radius-lg)] p-8 text-center">
              <h3 className="font-space text-2xl font-bold text-white mb-3">Questions?</h3>
              <p className="font-outfit text-white/75 mb-6 max-w-md mx-auto">
                If you have any questions about this project or need more information, feel free to reach out.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/resources" className="btn-primary px-6 py-3 rounded-xl font-outfit font-semibold">
                  Browse Resources
                </Link>
                <Link href="/about" className="btn-outline px-6 py-3 rounded-xl font-outfit font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

