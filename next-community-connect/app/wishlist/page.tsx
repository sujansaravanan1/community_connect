'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import { HeroDemo } from '@/components/ui/animated-hero-demo'
import { Heart, Users, TrendingUp, X, Check, ChevronRight, Sparkles } from 'lucide-react'

type Cause = {
  id: string
  title: string
  tagline: string
  description: string
  category: string
  goal: number
  raised: number
  supporters: number
  color: string
  colorDark: string
  colorLight: string
  emoji: string
}

const causes: Cause[] = [
  {
    id: 'food-bank',
    title: 'Bothell Food Bank',
    tagline: 'Every $25 feeds a family for a week',
    description: 'Emergency food assistance for 250 families every week. Fresh produce, canned goods, and essential staples distributed with dignity.',
    category: 'Hunger Relief',
    goal: 5000,
    raised: 3200,
    supporters: 87,
    color: '#E85D26',
    colorDark: '#C04820',
    colorLight: '#FEF3EE',
    emoji: '🥫',
  },
  {
    id: 'youth',
    title: 'Youth Mentorship',
    tagline: '$100 funds one mentor for a month',
    description: 'After-school programs connecting 200 at-risk youth with professional mentors, tutors, and skill-building workshops.',
    category: 'Youth Programs',
    goal: 12000,
    raised: 8900,
    supporters: 156,
    color: '#085D8A',
    colorDark: '#044069',
    colorLight: '#EBF7FF',
    emoji: '📚',
  },
  {
    id: 'seniors',
    title: 'Senior Companions',
    tagline: '$30 delivers meals + companionship',
    description: '150 isolated seniors receive weekly home visits, warm meals, and the human connection that makes all the difference.',
    category: 'Senior Care',
    goal: 4000,
    raised: 2700,
    supporters: 62,
    color: '#6B3FA0',
    colorDark: '#52308A',
    colorLight: '#F5F0FF',
    emoji: '🤝',
  },
  {
    id: 'parks',
    title: 'Park Restoration',
    tagline: '$200 funds new playground equipment',
    description: 'Revitalizing Bothell Landing Park with new play structures, accessibility ramps, and green spaces for every family.',
    category: 'Parks & Rec',
    goal: 15000,
    raised: 9800,
    supporters: 203,
    color: '#1A7A4A',
    colorDark: '#155F3A',
    colorLight: '#EDFAF4',
    emoji: '🌳',
  },
  {
    id: 'homeless',
    title: 'Homeless Aid Fund',
    tagline: '$75 provides 3 nights housing + meals',
    description: 'Emergency shelter beds, hot meals, and case management services for 80 unhoused community members each month.',
    category: 'Housing Support',
    goal: 10000,
    raised: 6700,
    supporters: 98,
    color: '#B83A6A',
    colorDark: '#963058',
    colorLight: '#FDF0F5',
    emoji: '🏠',
  },
  {
    id: 'pets',
    title: 'PAWS Pet Shelter',
    tagline: '$50 vaccinates & feeds one dog',
    description: 'Emergency veterinary care, vaccinations, and loving temporary homes for 150 rescued animals awaiting adoption.',
    category: 'Animal Rescue',
    goal: 8000,
    raised: 5200,
    supporters: 124,
    color: '#2499D6',
    colorDark: '#1A80B8',
    colorLight: '#EBF7FF',
    emoji: '🐾',
  },
]

const PRESET_AMOUNTS = [10, 25, 50, 100]

function AnimatedNumber({ value }: { value: number }) {
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, v => Math.round(v).toLocaleString())
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
    const unsub = rounded.on('change', v => setDisplay(v))
    return () => { controls.stop(); unsub() }
  }, [value])

  return <span>{display}</span>
}

function ProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div className="relative h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </div>
  )
}

function DonationModal({ cause, onClose, onDonate }: {
  cause: Cause
  onClose: () => void
  onDonate: (amount: number) => void
}) {
  const [amount, setAmount] = useState(25)
  const [custom, setCustom] = useState('')
  const [step, setStep] = useState<'amount' | 'success'>('amount')
  const finalAmount = custom ? Number(custom) : amount

  const handleDonate = () => {
    if (finalAmount > 0) {
      onDonate(finalAmount)
      setStep('success')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(1,22,41,0.7)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: '0 40px 100px rgba(2,39,71,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {step === 'amount' ? (
            <motion.div key="amount" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="relative px-8 pt-8 pb-6" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-slate-100"
                >
                  <X size={16} style={{ color: '#94a3b8' }} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: cause.colorLight }}>
                    {cause.emoji}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: cause.color, marginBottom: '4px' }}>
                      {cause.category}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '20px', fontWeight: 600, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-0.3px' }}>
                      {cause.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '24px' }}>
                  {cause.description}
                </p>

                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', marginBottom: '12px' }}>
                  Select Amount
                </p>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {PRESET_AMOUNTS.map(a => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustom('') }}
                      className="py-3 rounded-xl text-sm transition-all"
                      style={{
                        fontFamily: 'var(--font-space)',
                        fontWeight: 600,
                        fontSize: '14px',
                        backgroundColor: amount === a && !custom ? cause.color : '#F8FAFC',
                        color: amount === a && !custom ? 'white' : '#334155',
                        border: `1.5px solid ${amount === a && !custom ? cause.color : '#E2E8F0'}`,
                        transform: amount === a && !custom ? 'scale(1.03)' : 'scale(1)',
                      }}
                    >
                      ${a}
                    </button>
                  ))}
                </div>

                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    style={{ fontFamily: 'var(--font-space)', fontWeight: 600 }}>$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setAmount(0) }}
                    className="w-full pl-8 pr-4 py-3 rounded-xl text-sm transition-all outline-none"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      border: `1.5px solid ${custom ? cause.color : '#E2E8F0'}`,
                      backgroundColor: custom ? cause.colorLight : '#F8FAFC',
                      color: '#0F172A',
                      fontWeight: 500,
                    }}
                    min={1}
                  />
                </div>

                <div className="rounded-2xl p-4 mb-6" style={{ backgroundColor: cause.colorLight }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: cause.colorDark, lineHeight: 1.6 }}>
                    💡 {cause.tagline}
                  </p>
                </div>

                <button
                  onClick={handleDonate}
                  disabled={finalAmount <= 0}
                  className="w-full py-4 rounded-2xl text-white transition-all flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    backgroundColor: finalAmount > 0 ? cause.color : '#CBD5E1',
                    boxShadow: finalAmount > 0 ? `0 8px 24px ${cause.color}40` : 'none',
                    cursor: finalAmount > 0 ? 'pointer' : 'not-allowed',
                  }}
                >
                  <Heart size={16} fill="white" />
                  Donate ${finalAmount > 0 ? finalAmount.toLocaleString() : '—'}
                  <ChevronRight size={16} />
                </button>

                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#94a3b8', textAlign: 'center', marginTop: '12px' }}>
                  🔒 Secure checkout · Stripe integration coming soon
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-8 py-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: cause.colorLight }}
              >
                <Check size={36} style={{ color: cause.color }} strokeWidth={2.5} />
              </motion.div>
              <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.3px' }}>
                Thank you! 🎉
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#64748b', lineHeight: 1.7, marginBottom: '8px' }}>
                Your <strong style={{ color: cause.color }}>${finalAmount}</strong> donation to <strong>{cause.title}</strong> makes a real difference.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#94a3b8', marginBottom: '32px' }}>
                {cause.tagline}
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-2xl transition-all"
                style={{ fontFamily: 'var(--font-space)', fontSize: '14px', fontWeight: 600, backgroundColor: cause.colorLight, color: cause.color }}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function DonatePage() {
  const [donations, setDonations] = useState<Record<string, number>>({})
  const [selected, setSelected] = useState<Cause | null>(null)

  const totalRaised = causes.reduce((sum, c) => sum + c.raised + (donations[c.id] || 0), 0)
  const totalSupporters = causes.reduce((sum, c) => sum + c.supporters, 0)
  const totalGoal = causes.reduce((sum, c) => sum + c.goal, 0)
  const overallPercent = Math.round((totalRaised / totalGoal) * 100)

  const handleDonate = (amount: number) => {
    if (!selected) return
    setDonations(prev => ({ ...prev, [selected.id]: (prev[selected.id] || 0) + amount }))
  }

  return (
    <>
      <HeroDemo
        badge="Every Dollar Stays Local"
        staticTitle="Support Our Community"
        subtitle="Choose a cause below and make a direct impact for families, youth, and neighbors right here in Bothell."
      />

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #F1F5F9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-slate-100">
            {[
              {
                value: totalRaised,
                prefix: '$',
                label: 'Total Raised',
                sub: `across ${causes.length} active causes`,
                icon: <TrendingUp size={18} />,
                color: '#085D8A',
              },
              {
                value: totalSupporters + Object.values(donations).filter(v => v > 0).length,
                prefix: '',
                label: 'Community Donors',
                sub: 'and growing every day',
                icon: <Users size={18} />,
                color: '#1A7A4A',
              },
              {
                value: overallPercent,
                prefix: '',
                suffix: '%',
                label: 'Overall Goal Progress',
                sub: `$${totalGoal.toLocaleString()} total target`,
                icon: <Heart size={18} />,
                color: '#B83A6A',
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-8 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${stat.color}12`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: '32px', fontWeight: 600, color: '#0F172A', lineHeight: 1, letterSpacing: '-1px' }}>
                    {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix ?? ''}
                  </div>
                  <div style={{ fontFamily: 'var(--font-space)', fontSize: '14px', fontWeight: 600, color: stat.color, marginTop: '4px', letterSpacing: '-0.2px' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAUSE CARDS ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} style={{ color: '#085D8A' }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#085D8A' }}>
                Active Causes
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, color: '#0F172A', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
                Choose Where<br />to Give.
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: '#64748b', maxWidth: '260px', lineHeight: 1.7 }} className="lg:text-right">
                100% of donations go directly to local organizations. No platform fees.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {causes.map((cause, i) => {
              const raised = cause.raised + (donations[cause.id] || 0)
              const percent = Math.min(100, (raised / cause.goal) * 100)
              const userDonated = (donations[cause.id] || 0) > 0

              return (
                <motion.div
                  key={cause.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  onClick={() => setSelected(cause)}
                  className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    border: userDonated ? `1.5px solid ${cause.color}` : '1.5px solid #F1F5F9',
                    boxShadow: userDonated ? `0 4px 24px ${cause.color}20` : '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 16px 40px ${cause.color}22`,
                    borderColor: cause.color,
                  }}
                >
                  {userDonated && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: cause.color }}>
                      <Check size={10} color="white" strokeWidth={3} />
                      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, color: 'white' }}>
                        Donated
                      </span>
                    </div>
                  )}

                  {/* Top progress strip */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: `${cause.color}18` }}>
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: cause.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.07 }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ backgroundColor: cause.colorLight }}>
                        {cause.emoji}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: cause.color,
                        backgroundColor: cause.colorLight,
                        padding: '4px 10px',
                        borderRadius: '999px',
                      }}>
                        {cause.category}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '18px', fontWeight: 600, color: '#0F172A', lineHeight: 1.25, marginBottom: '6px', letterSpacing: '-0.2px' }}>
                      {cause.title}
                    </h3>

                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: cause.color, marginBottom: '10px', lineHeight: 1.5 }}>
                      {cause.tagline}
                    </p>

                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>
                      {cause.description}
                    </p>

                    <div className="mb-5">
                      <div className="flex justify-between items-baseline mb-2">
                        <span style={{ fontFamily: 'var(--font-space)', fontSize: '20px', fontWeight: 600, color: '#0F172A', letterSpacing: '-0.5px' }}>
                          ${raised.toLocaleString()}
                        </span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#94a3b8' }}>
                          of ${cause.goal.toLocaleString()}
                        </span>
                      </div>
                      <ProgressBar percent={percent} color={cause.color} />
                      <div className="flex justify-between items-center mt-2">
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#94a3b8' }}>
                          {cause.supporters + (donations[cause.id] ? 1 : 0)} supporters
                        </span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: cause.color }}>
                          {percent.toFixed(0)}%
                        </span>
                      </div>
                    </div>

                    <button
                      className="w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                      style={{
                        fontFamily: 'var(--font-space)',
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '-0.1px',
                        backgroundColor: cause.colorLight,
                        color: cause.color,
                        border: `1.5px solid ${cause.color}20`,
                      }}
                    >
                      <Heart size={13} />
                      Donate to {cause.title.split(' ')[0]}
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#94a3b8' }}
          >
            🔒 Stripe payment integration coming soon · All donations tracked locally for now
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <DonationModal
            cause={selected}
            onClose={() => setSelected(null)}
            onDonate={handleDonate}
          />
        )}
      </AnimatePresence>
    </>
  )
}