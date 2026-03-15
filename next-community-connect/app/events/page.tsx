'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const events = [
  {
    id: 'cleanup',
    title: 'Community Cleanup Drive',
    date: 'November 10, 2025',
    time: '10:00 AM — 1:00 PM',
    location: 'Bothell Landing Park, South Entrance',
    audience: 'All ages, families welcome',
    category: 'volunteer',
    description: "Join us for a community-wide cleanup event. We'll provide gloves, bags, and light refreshments. Meet at the south entrance of Bothell Landing Park.",
    day: 10,
    month: 'Nov',
  },
  {
    id: 'stem',
    title: 'STEM Mentorship Workshop',
    date: 'November 22, 2025',
    time: '4:00 PM — 6:30 PM',
    location: 'Bothell Regional Library, Room 2B',
    audience: 'Students ages 12 and up',
    category: 'education',
    description: 'A workshop for students interested in STEM careers, featuring guest speakers from local universities and hands-on breakout sessions.',
    day: 22,
    month: 'Nov',
  },
  {
    id: 'food',
    title: 'Holiday Food Drive',
    date: 'December 5, 2025',
    time: '9:00 AM — 4:00 PM',
    location: 'Bothell Community Center, Main Hall',
    audience: 'All community members',
    category: 'donation',
    description: 'Help us collect non-perishable food items for families in need this holiday season. Suggested donations: canned vegetables, rice, pasta.',
    day: 5,
    month: 'Dec',
  },
  {
    id: 'clothing',
    title: 'Winter Clothing Donation',
    date: 'December 19, 2025',
    time: '10:00 AM — 3:00 PM',
    location: 'Bothell City Hall, Front Lobby',
    audience: 'All ages',
    category: 'donation',
    description: 'Donate warm coats, hats, gloves, scarves, and blankets. All items will be checked for quality and distributed to local shelters.',
    day: 19,
    month: 'Dec',
  },
]

const locations = [
  { name: 'Bothell Landing Park', address: 'South Entrance\nNov 10 — Cleanup Drive', icon: '🌳' },
  { name: 'Bothell Regional Library', address: 'Room 2B, Main Branch\nNov 22 — STEM Workshop', icon: '📚' },
  { name: 'Bothell Community Center', address: 'Main Hall\nDec 5 — Food Drive', icon: '🏢' },
  { name: 'Bothell City Hall', address: 'Front Lobby\nDec 19 — Clothing Drive', icon: '🏛️' },
]

const categoryColors: Record<string, string> = {
  volunteer: 'bg-gradient-to-r from-green-mid to-green-pale',
  education: 'bg-gradient-to-r from-blue-600 to-blue-400',
  donation: 'bg-gradient-to-r from-orange-600 to-orange-400',
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(e => e.category === activeFilter)

  return (
    <>
      <HeroDemo 
        badge="Always Something Happening"
        staticTitle="Upcoming Events"
        subtitle="Stay connected with what&#x27;s happening in our community. From cleanups to workshops — there&#x27;s a place for everyone."
      />

      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="section-eyebrow">What's Coming Up</span>
            <h2 className="section-heading">Mark Your Calendar</h2>
            <p className="section-subtext">All events are free and open to the public unless otherwise noted. Click any event to see full details and get directions.</p>
          </motion.div>

          {/* Featured Event */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-deep to-green-mid rounded-[var(--radius-lg)] overflow-hidden mb-10 grid lg:grid-cols-2 border border-green-pale/20"
          >
            <div className="h-64 lg:h-auto bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center text-[100px] relative overflow-hidden">
              <span>🍂</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-deep/60" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 bg-green-pale/20 border border-green-pale/30 rounded-full px-3 py-1 text-xs font-bold text-green-pale uppercase tracking-wider w-fit mb-4">
                <span>⭐</span> Next Up
              </div>
              <h3 className="font-space text-2xl lg:text-3xl font-bold text-white mb-3">Community Cleanup Drive</h3>
              <p className="font-outfit text-white/70 mb-6">Join neighbors, volunteers, and local organizations for a city-wide cleanup. We'll provide all supplies — just bring your energy and enthusiasm!</p>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/80">
                <span className="flex items-center gap-2">📅 November 10, 2025</span>
                <span className="flex items-center gap-2">🕐 10:00 AM — 1:00 PM</span>
                <span className="flex items-center gap-2">📍 Bothell Landing Park</span>
                <span className="flex items-center gap-2">👥 All Ages Welcome</span>
              </div>
              <button 
                onClick={() => setSelectedEvent(events[0])}
                className="btn-primary px-6 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center gap-2 w-fit"
              >
                <span>View Details & Directions</span>
              </button>
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-7">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-[var(--radius-lg)] border border-green-wash overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-card border-green-light card-glow"
              >
                {/* Image area */}
                <div className="h-48 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[event.category]} flex items-center justify-center text-[72px]`}>
                    {event.category === 'volunteer' && '🍂'}
                    {event.category === 'education' && '💻'}
                    {event.category === 'donation' && '🍽️'}
                  </div>
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-[10px] p-2 text-center shadow-md min-w-[56px]">
                    <div className="font-space font-bold text-xl text-green-mid leading-none">{event.day}</div>
                    <div className="font-outfit text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">{event.month}</div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-green-mid/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3 className="font-space font-bold text-xl text-[var(--text-dark)] mb-2.5">{event.title}</h3>
                  <p className="font-outfit text-sm text-[var(--text-muted)] leading-relaxed mb-5">{event.description}</p>
                  <div className="flex flex-col gap-2 mb-5 text-sm text-[var(--text-body)]">
                    <div className="flex items-center gap-2">
                      <span className="w-4 text-green-light">🕐</span> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 text-green-light">📍</span> {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 text-green-light">✉️</span> events@communityconnect.org
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-green-wash">
                    <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-green-pale">👶</span> {event.audience}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-green-mid">
                      Details <span>→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[var(--section-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-eyebrow">Find Us</span>
            <h2 className="section-heading">Event Locations</h2>
            <p className="section-subtext mx-auto">All events take place at accessible community spaces. Click a location below to get directions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[var(--radius-lg)] overflow-hidden border border-green-wash shadow-card"
          >
            {/* Map placeholder */}
            <div className="h-[420px] bg-gradient-to-br from-green-mist to-green-wash flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="font-outfit text-[var(--text-muted)]">Google Maps integration</p>
              </div>
            </div>
            {/* Location items */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-wash border-t border-green-wash">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="p-5 hover:bg-green-mist cursor-pointer transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-mid to-green-pale flex items-center justify-center text-white mb-2.5 text-lg">
                    {loc.icon}
                  </div>
                  <div className="font-space font-semibold text-sm text-[var(--text-dark)] mb-1">{loc.name}</div>
                  <div className="font-outfit text-xs text-[var(--text-muted)] whitespace-pre-line">{loc.address}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-[rgba(15,26,14,0.7)] backdrop-blur-sm z-50 flex items-center justify-center p-5"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[var(--radius-lg)] w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-52 relative ${categoryColors[selectedEvent.category]} flex items-center justify-center text-[80px]`}>
              {selectedEvent.category === 'volunteer' && '🍂'}
              {selectedEvent.category === 'education' && '💻'}
              {selectedEvent.category === 'donation' && '🍽️'}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[var(--text-dark)] hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="font-space text-2xl font-bold text-[var(--text-dark)] mb-4">{selectedEvent.title}</h2>
              <p className="font-outfit text-[var(--text-muted)] mb-6">{selectedEvent.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5">
                  <span className="text-green-light">📅</span>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Date</div>
                    <div className="font-outfit text-sm font-semibold text-[var(--text-dark)]">{selectedEvent.date}</div>
                  </div>
                </div>
                <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5">
                  <span className="text-green-light">🕐</span>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Time</div>
                    <div className="font-outfit text-sm font-semibold text-[var(--text-dark)]">{selectedEvent.time}</div>
                  </div>
                </div>
                <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5">
                  <span className="text-green-light">📍</span>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Location</div>
                    <div className="font-outfit text-sm font-semibold text-[var(--text-dark)]">{selectedEvent.location}</div>
                  </div>
                </div>
                <div className="bg-green-mist border border-green-wash rounded-[var(--radius-md)] p-3.5 flex items-start gap-2.5">
                  <span className="text-green-light">👥</span>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Who</div>
                    <div className="font-outfit text-sm font-semibold text-[var(--text-dark)]">{selectedEvent.audience}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="flex-1 bg-gradient-to-r from-green-mid to-green-pale text-white px-5 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                  📍 Get Directions
                </button>
                <button className="bg-white border border-green-wash text-green-mid px-5 py-3 rounded-xl font-outfit font-semibold text-sm flex items-center justify-center gap-2 hover:bg-green-mist transition-colors">
                  ✕ Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

