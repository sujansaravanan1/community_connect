'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroDemo } from '@/components/ui/animated-hero-demo'
import EventMap from '@/components/EventMap'

const events = [
  {
    id: 'cleanup',
    title: 'Community Cleanup Drive',
date: 'April 28, 2025',
    time: '10:00 AM — 1:00 PM',
    location: 'Bothell Landing Park',
    audience: 'All ages welcome',
    category: 'Volunteer',
    description: "Join neighbors for a city-wide cleanup. We'll provide gloves, bags, and light refreshments. Meet at the south entrance.",
day: '28',
    month: 'APR',
    emoji: '🍂',
    color: '#085D8A',
    colorLight: '#EBF7FF',
    colorMid: '#C6EBFF',
  },
  {
    id: 'stem',
    title: 'STEM Mentorship Workshop',
date: 'May 5, 2025',
    time: '4:00 PM — 6:30 PM',
    location: 'Bothell Regional Library',
    audience: 'Students 12+',
    category: 'Education',
    description: 'Guest speakers from local universities and hands-on breakout sessions for aspiring STEM students.',
day: '05',
    month: 'MAY',
    emoji: '💻',
    color: '#044069',
    colorLight: '#EBF7FF',
    colorMid: '#90D4F7',
  },
  {
    id: 'food',
    title: 'Holiday Food Drive',
date: 'May 12, 2025',
    time: '9:00 AM — 4:00 PM',
    location: 'Bothell Community Center',
    audience: 'All community members',
    category: 'Donation',
    description: 'Help collect non-perishable food items for families in need. Suggested: canned goods, rice, pasta.',
day: '12',
    month: 'MAY',
    emoji: '🥫',
    color: '#2499D6',
    colorLight: '#EBF7FF',
    colorMid: '#C6EBFF',
  },
  {
    id: 'clothing',
    title: 'Winter Clothing Donation',
date: 'May 20, 2025',
    time: '10:00 AM — 3:00 PM',
    location: 'Bothell City Hall',
    audience: 'All ages',
    category: 'Donation',
    description: 'Donate warm coats, hats, gloves, and blankets. All items distributed to local shelters.',
day: '20',
    month: 'MAY',
    emoji: '🧥',
    color: '#022747',
    colorLight: '#EBF7FF',
    colorMid: '#90D4F7',
  },
]

type EventType = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  audience: string;
  category: string;
  description: string;
  day: string;
  month: string;
  emoji: string;
  color: string;
  colorLight: string;
  colorMid: string;
}

export type { EventType }


function PinnedCalendar({ events, onSelect }: { events: EventType[]; onSelect: (event: EventType) => void }) {
  const [currentDay, setCurrentDay] = useState<number | null>(null)

  useEffect(() => {
    const today = new Date()
    setCurrentDay(today.getDate())
  }, [])

  const currentMonth = 'May' // Fixed for consistency
  const pinnedDates = events.map(e => parseInt(e.day))

  const daysInMonth = 31 // May
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const getEventForDay = (day: number) => events.find(e => parseInt(e.day) === day)

  return (
    <div className="grid grid-cols-7 gap-1.5 text-center">
      {/* Day labels */}
      {dayLabels.map(day => (
        <div key={day} className="py-2 font-dm-sans text-xs font-bold uppercase text-slate-500 tracking-wider">
          {day}
        </div>
      ))}
      
      {/* Days grid */}
      {days.map(day => {
        const isPinned = pinnedDates.includes(day)
        const event = getEventForDay(day)
        const isToday = currentDay !== null && day === currentDay
        const dayStr = day.toString().padStart(2, '0')

        return (
          <motion.div
            key={day}
            className={`relative group p-2 rounded-xl cursor-pointer transition-all duration-300 h-14 flex items-center justify-center font-dm-sans font-semibold text-sm ${
              isToday ? 'bg-gradient-to-br from-orange-400/20 to-orange-500/20 border-2 border-orange-300 shadow-md' :
              isPinned ? 'bg-gradient-to-br from-sky-400/30 to-sky-500/30 border-2 border-sky-300 shadow-lg hover:shadow-xl hover:scale-110' :
              'hover:bg-sky-50/50 border border-sky-100 hover:border-sky-200 hover:shadow-md'
            }`}
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => event && onSelect(event)}
          >
            <span className={`font-bold ${isToday ? 'text-orange-600' : isPinned ? 'text-sky-700' : 'text-slate-600'}`}>
              {day}
            </span>
            
            {isPinned && event && (
              <>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 border-2 border-white shadow-sm" />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-sm border border-sky-100/50 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible z-10 overflow-hidden">
                  <div className="p-4 border-b border-sky-100">
                    <span className="inline-block text-xs font-bold uppercase tracking-wide text-sky-700 px-2 py-1 rounded-full bg-sky-100 mb-1">
                      {event.emoji} {event.category}
                    </span>
                    <h4 className="font-syne font-bold text-sky-900 text-sm leading-tight">{event.title}</h4>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2 text-xs text-slate-700">
                    <div><span className="font-bold opacity-80">Time:</span> {event.time}</div>
                    <div><span className="font-bold opacity-80">📍</span> {event.location}</div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

function EventModal({ event, onClose }: { event: EventType; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(2,39,71,0.6)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-lg bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 32px 80px rgba(2,39,71,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-8 pb-6" style={{ backgroundColor: event.color }}>
          <div className="flex items-start justify-between">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full border"
                style={{ color: event.colorMid, borderColor: `${event.colorMid}40`, backgroundColor: 'rgba(255,255,255,0.1)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {event.category}
              </span>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '22px', fontWeight: 800, color: 'white', lineHeight: 1.2, maxWidth: '260px' }}>
                {event.title}
              </h2>
            </div>
            <span className="text-5xl ml-4 flex-shrink-0">{event.emoji}</span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-white/25 transition-all"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600 }}
          >✕</button>
        </div>

        <div className="p-8">
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '24px' }}>
            {event.description}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { label: 'Date', value: event.date },
              { label: 'Time', value: event.time },
              { label: 'Location', value: event.location },
              { label: 'Who', value: event.audience },
            ].map(item => (
              <div key={item.label} className="rounded-xl p-3 border border-slate-100 bg-slate-50">
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, color: '#1e293b' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              className="flex-1 px-4 py-3 rounded-xl text-white transition-all hover:opacity-90"
              style={{ backgroundColor: event.color, fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600 }}
            >
              📍 Get Directions
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: '#64748b' }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function EventsPage() {
  const [selected, setSelected] = useState<EventType | null>(null)

  return (
    <>
      <HeroDemo
        badge="Always Something Happening"
        staticTitle="Upcoming Events"
        subtitle="Stay connected with what's happening in our community. From cleanups to workshops — there's a place for everyone."
      />

      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50/50 to-sky-50/30 border-b border-sky-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#085D8A', display: 'inline-block', marginBottom: '8px' }}>
              Spring Schedule
            </span>
            <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#022747', lineHeight: 1.1 }}>
              Next 3 Events Pinned
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/50 rounded-3xl p-8 lg:p-10 shadow-glass-lg">
              <PinnedCalendar events={events.slice(0, 3)} onSelect={setSelected} />
            </div>
            <div className="backdrop-blur-xl bg-white/80 border border-white/50 rounded-3xl p-8 lg:p-10 shadow-glass-lg h-[340px] lg:h-auto relative overflow-hidden">
              <EventMap events={events} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white" id="events"> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#085D8A', display: 'inline-block', marginBottom: '12px' }}>
              What's Coming Up
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-1">
              <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, color: '#022747', lineHeight: 1, letterSpacing: '-1px' }}>
                Mark Your<br />Calendar.
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 300, color: '#085D8A', maxWidth: '280px', lineHeight: 1.7 }} className="lg:text-right">
                All events are free and open to the public. Click any card for full details.
              </p>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

            {/* Card 1 — tall dark hero, 5 cols 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0 }}
              onClick={() => setSelected(events[0])}
              className="lg:col-span-5 lg:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
              style={{ minHeight: '480px', backgroundColor: events[0].color, boxShadow: '0 4px 24px rgba(4,64,105,0.12)' }}
            >
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1.5 mb-6">
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {events[0].month} {events[0].day}
                  </span>
                </div>
                <span className="text-6xl block mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {events[0].emoji}
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '10px' }}>
                  {events[0].category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '12px', letterSpacing: '-0.5px' }}>
                  {events[0].title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                  {events[0].description}
                </p>
              </div>

              <div className="border-t border-white/10 px-8 py-5 flex flex-col gap-2">
                {[
                  { icon: '🕐', text: events[0].time },
                  { icon: '📍', text: events[0].location },
                  { icon: '👥', text: events[0].audience },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className="text-xs">{item.icon}</span>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.45)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span style={{ color: 'white', fontSize: '12px' }}>→</span>
              </div>
            </motion.div>

            {/* Card 2 — wide light, 7 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              onClick={() => setSelected(events[1])}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer border"
              style={{ minHeight: '220px', backgroundColor: events[1].colorLight, borderColor: '#D4E8F4', boxShadow: '0 2px 12px rgba(4,64,105,0.06)' }}
            >
              <div className="p-7 flex h-full">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 border rounded-full px-3 py-1.5 mb-4"
                    style={{ borderColor: `${events[1].color}25`, backgroundColor: `${events[1].color}08` }}>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: events[1].color }}>
                      {events[1].month} {events[1].day}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: `${events[1].color}70`, display: 'block', marginBottom: '8px' }}>
                    {events[1].category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 800, color: events[1].color, lineHeight: 1.2, marginBottom: '10px', letterSpacing: '-0.3px' }}>
                    {events[1].title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 300, color: `${events[1].color}90`, lineHeight: 1.7, marginBottom: '16px' }}>
                    {events[1].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[events[1].time, events[1].location].map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: `${events[1].color}60` }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="text-5xl ml-6 flex-shrink-0 self-start group-hover:scale-110 transition-transform duration-500">
                  {events[1].emoji}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${events[1].color}, ${events[1].colorMid})` }} />
            </motion.div>

            {/* Card 3 — dark, 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              onClick={() => setSelected(events[2])}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: '220px', backgroundColor: events[2].color, boxShadow: '0 4px 20px rgba(4,64,105,0.15)' }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
                      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}>
                        {events[2].month} {events[2].day}
                      </span>
                    </div>
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{events[2].emoji}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '8px' }}>
                    {events[2].category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '18px', fontWeight: 800, color: 'white', lineHeight: 1.2, letterSpacing: '-0.2px' }}>
                    {events[2].title}
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5 mt-4">
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>🕐 {events[2].time}</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>📍 {events[2].location}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 group-hover:bg-white/25 transition-colors duration-300" />
            </motion.div>

            {/* Card 4 — light, 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              onClick={() => setSelected(events[3])}
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer border"
              style={{ minHeight: '220px', backgroundColor: events[3].colorLight, borderColor: '#D4E8F4', boxShadow: '0 2px 12px rgba(4,64,105,0.06)' }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 origin-left">
                    {events[3].emoji}
                  </div>
                  <div className="inline-flex items-center gap-1.5 border rounded-full px-3 py-1 mb-3"
                    style={{ borderColor: `${events[3].color}25`, backgroundColor: `${events[3].color}08` }}>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: events[3].color }}>
                      {events[3].month} {events[3].day}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: `${events[3].color}60`, display: 'block', marginBottom: '8px' }}>
                    {events[3].category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '16px', fontWeight: 800, color: events[3].color, lineHeight: 1.25, letterSpacing: '-0.2px' }}>
                    {events[3].title}
                  </h3>
                </div>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: `${events[3].color}55` }}>
                  📍 {events[3].location}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${events[3].color}, ${events[3].colorMid})` }} />
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}