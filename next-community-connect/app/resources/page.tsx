'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronDown, ArrowUp, MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

const resources = [
  { title: 'Scholarship Discovery Program', category: 'Education', icon: 'fa-graduation-cap', description: 'Find and apply for local and national scholarships. Free guidance on application essays, financial aid, and deadline tracking for college-bound students.', phone: '(555) 234-5678', email: 'scholarships@communityconnect.org', hours: 'Mon–Fri 9AM–6PM, Sat 10AM–2PM', location: 'Bothell Community Center, 9919 NE 180th St' },
  { title: 'After-School Tutoring Network', category: 'Education', icon: 'fa-book-reader', description: 'Free K–12 tutoring in math, science, reading, and writing. Volunteer tutors available weekdays 3–6PM at multiple community centers.', phone: '(555) 234-5679', email: 'tutoring@communityconnect.org', hours: 'Mon–Fri 3PM–6PM', location: 'Various Bothell sites — call for location' },
  { title: 'Youth Career Internship Portal', category: 'Career', icon: 'fa-briefcase', description: 'Connect high school and college students with paid internships at local businesses. Earn real-world experience and college credit while building your resume.', phone: '(555) 345-6789', email: 'internships@communityconnect.org', hours: 'Mon–Fri 9AM–5PM', location: 'Bothell Workforce Dev. Center, 18411 NE Woodinville-Duvall Rd' },
  { title: 'Job Search Workshop Series', category: 'Career', icon: 'fa-search-dollar', description: 'Monthly workshops covering resume building, interview techniques, LinkedIn, and networking. Free and open to all community members.', phone: '(555) 345-6790', email: 'workshops@communityconnect.org', hours: '2nd & 4th Tuesday 6PM–8PM', location: 'Bothell Regional Library, 18215 98th Ave NE' },
  { title: 'Community Health Clinic', category: 'Health', icon: 'fa-medkit', description: 'Affordable medical and dental services with sliding-scale fees. Walk-in hours Monday–Friday 9AM–5PM. No insurance required, multilingual staff.', phone: '(555) 456-7890', email: 'clinic@healthcenter.org', hours: 'Mon–Fri 9AM–5PM, Walk-ins welcome', location: 'EvergreenHealth Bothell, 10010 NE 195th St' },
  { title: 'Mental Wellness Support Line', category: 'Health', icon: 'fa-phone-volume', description: '24/7 confidential crisis support and counseling. Connect with trained professionals for mental health support, stress management, and emotional guidance.', phone: '(555) 911-HELP', email: 'support@mentalhealthline.org', hours: '24/7 — Call anytime', location: 'Confidential — phone & online support' },
  { title: 'Neighborhood Cleanup Initiative', category: 'Volunteering', icon: 'fa-hands-helping', description: 'Join monthly community cleanups in local parks. Tools and supplies provided. Volunteers of all ages welcome to help beautify our community.', phone: '(555) 567-8901', email: 'cleanup@communityconnect.org', hours: '1st Saturday monthly 9AM–12PM', location: 'Bothell Landing Park, 9919 NE 180th St' },
  { title: 'Senior Companion Program', category: 'Volunteering', icon: 'fa-user-friends', description: 'Match with local seniors for weekly visits, companionship, and light assistance. Training provided. Make a meaningful difference through friendship.', phone: '(555) 567-8902', email: 'companions@seniorcare.org', hours: 'Flexible — match your schedule', location: 'Training at Senior Center, 234 Elder St' },
  { title: 'Community Garden Collective', category: 'Community Projects', icon: 'fa-seedling', description: 'Rent a plot and grow your own vegetables. Workshops on sustainable gardening, composting, and organic growing. Tools shared, water included.', phone: '(555) 678-9012', email: 'garden@greengrow.org', hours: 'Open daily dawn to dusk', location: 'Community Garden, Corner of 5th & Maple' },
  { title: 'Little Free Library Network', category: 'Community Projects', icon: 'fa-book', description: 'Build and maintain Little Free Libraries in neighborhoods. Free books for all ages, woodworking workshops, and library setup support.', phone: '(555) 678-9013', email: 'books@littlefreelibrary.org', hours: 'Workshop 2nd Sat 10AM–2PM', location: 'Bothell Makerspace, 10810 NE 195th St' },
  { title: 'Monthly Town Hall Meetings', category: 'Events', icon: 'fa-comments', description: 'Monthly forums to discuss community issues, meet local leaders, and voice your concerns. First Thursday of every month, 7PM at City Hall.', phone: '(555) 789-0123', email: 'townhall@citygovernment.gov', hours: '1st Thursday monthly 7PM–9PM', location: 'City Hall Council Chambers, 100 Civic Plaza' },
  { title: 'Community Resource Fair', category: 'Events', icon: 'fa-calendar-alt', description: 'Annual event connecting residents with local services, nonprofits, health providers, and educational resources. Free health screenings, food, and kids activities.', phone: '(555) 789-0124', email: 'fair@communityconnect.org', hours: 'Annual — 3rd Sat in Sept 10AM–4PM', location: 'Central Park Main Field' },
  { title: 'Financial Literacy Workshops', category: 'Career', icon: 'fa-dollar-sign', description: 'Learn budgeting, saving, investing, and credit management. Free evening workshops in English and Spanish. Materials provided.', phone: '(555) 890-1234', email: 'finance@moneywise.org', hours: 'Wednesdays 6PM–8PM', location: 'Credit Union Community Room, 890 Bank St' },
  { title: 'Youth Mentorship Network', category: 'Education', icon: 'fa-child', description: 'Pair young people ages 12–18 with vetted adult mentors for guidance, academic support, and personal development. Background checks required. Open year-round.', phone: '(555) 901-2345', email: 'mentors@youthprogram.org', hours: 'Match meetings flexible', location: 'Youth Services Office, 345 Hope Blvd' },
  { title: 'Fitness in the Park', category: 'Health', icon: 'fa-heartbeat', description: 'Free outdoor fitness classes every weekend! Yoga, Zumba, bootcamp, and tai chi for all fitness levels. Bring a mat and water bottle.', phone: '(555) 012-3456', email: 'fitness@parksprogram.org', hours: 'Sat–Sun 8AM, 10AM, 4PM', location: 'Riverside Park Pavilion' },
]

const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'Education', label: 'Education' },
  { id: 'Career', label: 'Career' },
  { id: 'Health', label: 'Health' },
  { id: 'Volunteering', label: 'Volunteering' },
  { id: 'Community Projects', label: 'Community' },
  { id: 'Events', label: 'Events' },
]

const categoryColors: Record<string, string> = {
  Education: 'from-[#1a3d6b] to-[#2d6b9a]',
  Career: 'from-[#4a1a6b] to-[#7a2d9a]',
  Health: 'from-[#1a4d3a] to-[#2d8c60]',
  Volunteering: 'from-[#4a6741] to-[#91b08a]',
  'Community Projects': 'from-[#6b3a1a] to-[#9a6b2d]',
  Events: 'from-[#1a4a6b] to-[#2d7a9a]',
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filtered = resources
    .filter(r => activeCategory === 'all' || r.category === activeCategory)
    .filter(r => {
      const q = searchQuery.toLowerCase()
      return r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)
    })
    .sort((a, b) => {
      if (sortBy === 'az') return a.title.localeCompare(b.title)
      if (sortBy === 'za') return b.title.localeCompare(a.title)
      if (sortBy === 'category') return a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
      return 0
    })

  return (
    <>
      <HeroDemo 
        badge="500+ Resources Listed"
        staticTitle="Community Resource Hub"
        subtitle="Find non-profits, support services, health programs, and opportunities — all verified, all free to access."
      /> 

      {/* Directory Section */}
      <section className="py-24 bg-white" id="directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-green-wash rounded-[var(--radius-lg)] p-7 mb-10 shadow-card">
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by name, description, or category…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 rounded-full bg-green-mist border-2 border-green-wash font-outfit text-sm outline-none focus:border-green-light transition-colors"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-green-light" size={16} />
              </div>
              <div className="flex items-center gap-2.5">
                <label className="font-outfit text-sm font-medium text-[var(--text-muted)]">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 rounded-full border-2 border-green-wash font-outfit text-sm cursor-pointer focus:border-green-light outline-none"
                >
                  <option value="default">Default</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                  <option value="category">By Category</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-accent-gold to-accent-gold-light text-[var(--text-dark)] shadow-lg'
                      : 'bg-white border border-green-wash text-[var(--text-muted)] hover:border-green-light hover:text-green-mid'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <div className="flex justify-between items-center mb-6">
            <p className="font-outfit text-sm text-[var(--text-muted)]">Showing <strong className="text-green-mid">{filtered.length}</strong> of {resources.length} resources</p>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <Search size={56} className="text-green-wash mx-auto mb-5" />
              <h3 className="font-space text-2xl font-bold text-[var(--text-dark)] mb-2">No resources found</h3>
              <p className="font-outfit text-[var(--text-muted)]">Try a different keyword or category filter.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((resource, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                  className="bg-white rounded-[var(--radius-md)] border border-green-wash overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(74,103,65,0.12)] relative group"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[resource.category]} scale-x-0 origin-left transition-transform duration-350 group-hover:scale-x-100`} />

                  {/* Header */}
                  <div className={`h-36 bg-gradient-to-br ${categoryColors[resource.category]} flex items-center justify-center relative`}>
                    <span className="text-white/25 text-7xl">●</span>
                    <span className="absolute bottom-3 left-3 bg-white/90 text-green-mid text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{resource.category}</span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-space text-lg font-bold text-[var(--text-dark)] mb-2 leading-tight">{resource.title}</h3>
                    <p className="font-outfit text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">{resource.description}</p>

                    {/* Expandable details */}
                    <div className={`overflow-hidden transition-all duration-400 ${expandedCard === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-green-mist border border-green-wash rounded-lg p-3.5 mb-3">
                        <div className="flex flex-col gap-2.5 text-xs">
                          <span className="flex items-start gap-2"><MapPin size={12} className="text-green-light mt-0.5 flex-shrink-0" /><span><strong>Location:</strong> {resource.location}</span></span>
                          <span className="flex items-start gap-2"><Phone size={12} className="text-green-light mt-0.5 flex-shrink-0" /><span><strong>Phone:</strong> {resource.phone}</span></span>
                          <span className="flex items-start gap-2"><Clock size={12} className="text-green-light mt-0.5 flex-shrink-0" /><span><strong>Hours:</strong> {resource.hours}</span></span>
                          <span className="flex items-start gap-2"><Mail size={12} className="text-green-light mt-0.5 flex-shrink-0" /><span><strong>Email:</strong> {resource.email}</span></span>
                        </div>
                      </div>
                    </div>

                    {/* Toggle */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                      className="flex items-center justify-between w-full pt-3 border-t border-green-wash bg-none border-l-0 border-r-0 border-b-0 cursor-pointer font-outfit text-sm font-semibold text-green-mid hover:text-green-deep transition-colors"
                    >
                      <span>{expandedCard === i ? 'Hide Details' : 'View Details'}</span>
                      <span className={`w-6 h-6 rounded-full bg-green-mist border border-green-wash flex items-center justify-center transition-transform ${expandedCard === i ? 'rotate-180' : ''}`}>
                        <ChevronDown size={12} />
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-accent-teal to-accent-teal-light text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 z-50 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ArrowUp size={18} />
      </button>
    </>
  )
}

