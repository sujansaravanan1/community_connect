'use client'

import Link from 'next/link'
import { motion, useAnimate } from 'framer-motion'
import { FiSearch, FiCalendar, FiHeart, FiPlusCircle, FiBarChart, FiMapPin, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: <FiSearch size={24} />,
    title: "Resource Directory",
    description: "Search and filter hundreds of verified local resources by category, location, and availability. Find exactly what you or someone you know needs.",
    href: '/resources',
  },
  {
    icon: <FiCalendar size={24} />,
    title: 'Community Events',
    description: "Discover upcoming cleanups, food drives, workshops, and neighborhood events. Join in person or find out how to organize your own.",
    href: '/events',
  },
  {
    icon: <FiHeart size={24} />,
    title: 'Volunteer Matching',
    description: "Tell us your skills and availability, and we'll connect you with organizations that need exactly what you can offer.",
    href: '/resources',
  },
  {
    icon: <FiPlusCircle size={24} />,
    title: 'Submit a Resource',
    description: "Know of a program that helped you or someone in your community? Add it so others can benefit too. All submissions reviewed by our team.",
    href: '/submit',
  },
  {
    icon: <FiBarChart size={24} />,
    title: 'Impact Tracking',
    description: "See the real-world difference our community is making — volunteer hours logged, families helped, and events organized, all visualized.",
    href: '/impact',
  },
  {
    icon: <FiMapPin size={24} />,
    title: 'Interactive Map',
    description: "Find resources near you using our integrated Google Maps feature. Get directions, hours, and contact info at a glance.",
    href: '/resources',
  },
]

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)"
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)"
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)"
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)"

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
}

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [scope, animate] = useAnimate()

  const getNearestSide = (e: React.MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect()
    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" as const }
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" as const }
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" as const }
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" as const }
    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort((a, b) => a.proximity - b.proximity)
    return sortedProximity[0].side
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e)
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] })
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e)
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] })
  }

  return (
    <Link
      href={service.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative block h-48 p-6 border-b border-r border-sky-200 dark:border-sky-700 bg-glass-bg-md dark:bg-glass-bg-dark hover:bg-sky-50/50 dark:hover:bg-sky-900/50 transition-all backdrop-blur"
    >
      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-300 flex items-center justify-center text-white">
          {service.icon}
        </div>
        <div>
          <h3 className="font-syne text-lg font-semibold text-sky-900 dark:text-white mb-1">{service.title}</h3>
          <p className="font-dm-sans text-xs text-sky-600 dark:text-sky-300 line-clamp-2">{service.description}</p>
        </div>
      </div>
      
      {/* Hover overlay with flip effect */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 flex flex-col items-center justify-center p-6 text-white backdrop-blur-sm"
      >
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
          {service.icon}
        </div>
        <h3 className="font-syne text-lg font-semibold text-white text-center mb-2">{service.title}</h3>
        <span className="inline-flex items-center gap-1 font-dm-sans text-sm font-medium text-white/90">
          Learn More <FiArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-heading">Everything your community needs, in one place.</h2>
          <p className="section-subtext mx-auto">From finding volunteers to discovering local programs, our platform simplifies community engagement for everyone.</p>
        </motion.div>

        {/* ClipPath Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-sky-200 dark:border-sky-700 rounded-3xl overflow-hidden backdrop-blur-sm shadow-glass">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

