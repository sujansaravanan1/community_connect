'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronDown, ArrowUp, MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react'
import { HeroDemo } from '@/components/ui/animated-hero-demo'
import { ZoomParallax } from '@/components/ZoomParallax'

const communityImages = [
  { src: '/img/optimized/heartwithhands6.jpg', alt: 'Hands forming heart community symbol' },
  { src: '/img/optimized/garden2.jpg', alt: 'Neighborhood garden space' },
  { src: '/img/optimized/library3.jpg', alt: 'Local library community area' },
  { src: '/img/optimized/cleanup4.jpg', alt: 'Neighborhood cleanup volunteers' },
  { src: '/img/optimized/foodpantry5.jpg', alt: 'Community food pantry shelves' },
  { src: '/img/optimized/playground1.jpg', alt: 'Community playground gathering' },
  { src: '/img/optimized/community7.jpg', alt: 'General community gathering' },
]

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
  Education: 'from-sky-500 to-sky-400',
  Career: 'from-sky-500 to-sky-400',
  Health: 'from-sky-500 to-sky-400',
  Volunteering: 'from-sky-500 to-sky-400',
  'Community Projects': 'from-sky-500 to-sky-400',
  Events: 'from-sky-500 to-sky-400',
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
      if (sortBy === 'za') return b.title.localeCompare(b.title)
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

      <ZoomParallax images={communityImages} />

      {/* Directory Section */}
      <section className="py-24 glass-bg backdrop-blur" id="directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-bg-md rounded-3xl p-8 lg:p-10 mb-12 border border-sky-200/50 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by name, description, or category…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-sky-200 font-dm-sans text-sm outline-none focus:border-sky-400 transition-all shadow-sm focus:shadow-md"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-500" size={18} />
              </div>
              <div className="flex items-center gap-3">
                <label className="font-dm-sans text-sm font-semibold text-sky-700">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-sky-200 bg-white/70 backdrop-blur-sm font-dm-sans text-sm cursor-pointer focus:border-sky-400 outline-none shadow-sm"
                >
                  <option value="default">Default</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                  <option value="category">By Category</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all backdrop-blur-sm shadow-md ${
                    activeCategory === cat.id
                      ? 'bg-sky-500 text-white shadow-sky-500/25 border border-sky-400'
                      : 'bg-white/70 border border-sky-200 text-sky-700 hover:bg-sky-50 hover:border-sky-300 hover:shadow-lg'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <div className="flex justify-between items-center mb-8">
            <p className="font-dm-sans text-base font-semibold text-sky-800">Showing <strong>{filtered.length}</strong> of {resources.length} resources</p>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
              <Search size={64} className="text-sky-300 mx-auto mb-6" />
              <h3 className="font-syne text-3xl font-bold text-sky-900 mb-3">No resources found</h3>
              <p className="font-dm-sans text-lg text-sky-600 max-w-md mx-auto">Try a different keyword or category filter.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((resource, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.1 }}
                  className="group glass-bg-md rounded-3xl border border-sky-200/50 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-sky-300 bg-white/60 backdrop-blur-xl"
                >
                  {/* Category accent */}
                  <div className="h-2 bg-gradient-to-r from-sky-400 to-sky-500 group-hover:opacity-100 opacity-80 transition-opacity" />
                  
                  {/* Header */}
                  <div className="h-48 bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center relative p-6">
                    <span className="text-sky-300/30 text-8xl">●</span>
                    <span className="absolute top-4 left-4 bg-sky-500/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl backdrop-blur-sm shadow-lg">
                      {resource.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <h3 className="font-syne text-2xl font-bold text-sky-900 mb-3 leading-tight group-hover:text-sky-800 transition-colors">{resource.title}</h3>
                    <p className="font-dm-sans text-base text-sky-700 leading-relaxed mb-6 line-clamp-3">{resource.description}</p>

                    {/* Expandable details */}
                    <div className={`overflow-hidden transition-all duration-500 ${expandedCard === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-sky-50/50 border border-sky-200/50 rounded-2xl p-6 mb-4 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-start gap-3">
                            <MapPin size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sky-800 mb-1">Location</div>
                              <div className="text-sky-700">{resource.location}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sky-800 mb-1">Phone</div>
                              <div className="text-sky-700">{resource.phone}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sky-800 mb-1">Hours</div>
                              <div className="text-sky-700">{resource.hours}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail size={16} className="text-sky-500 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sky-800 mb-1">Email</div>
                              <div className="text-sky-700 break-all">{resource.email}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Toggle */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                      className="flex items-center justify-between w-full pt-4 border-t border-sky-200/50 bg-none cursor-pointer font-dm-sans text-base font-semibold text-sky-700 hover:text-sky-900 transition-all group-hover:scale-[1.02]"
                    >
                      <span>{expandedCard === i ? 'Hide Details' : 'View Full Details'}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${expandedCard === i ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Top */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showBackToTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-8 right-8 w-14 h-14 rounded-3xl bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 z-50 hover:-translate-y-1 active:scale-95"
      >
        <ArrowUp size={20} />
      </motion.button>
    </>
  )
}

