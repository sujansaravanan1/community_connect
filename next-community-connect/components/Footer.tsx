'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const footerLinks = {
  explore: [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Upcoming Events' },
    { href: '/resources', label: 'Resource Hub' },
    { href: '/submit', label: 'Submit a Resource' },
    { href: '/about', label: 'About Us' },
  ],
  categories: [
    { href: '/resources?cat=Education', label: 'Education' },
    { href: '/resources?cat=Health', label: 'Health & Wellness' },
    { href: '/resources?cat=Career', label: 'Career & Jobs' },
    { href: '/resources?cat=Volunteering', label: 'Volunteering' },
    { href: '/resources?cat=Community Projects', label: 'Community Projects' },
  ],
}

const socialIcons = [
  { name: 'Facebook', icon: 'f' },
  { name: 'Instagram', icon: 'ig' },
  { name: 'Twitter', icon: 'X' },
  { name: 'LinkedIn', icon: 'in' },
]

const partners = [
  { icon: '🤝', label: 'United Way' },
  { icon: '🎓', label: 'Local Schools' },
  { icon: '💚', label: 'Health District' },
  { icon: '🌿', label: 'Parks Dept.' },
  { icon: '🍽️', label: 'Food Bank' },
]

export function Footer() {
  return (
    <footer className="relative bg-sky-900 text-white/75">
      <div className="leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#011629"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 glass-bg-dark backdrop-blur-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="14" cy="14" r="12.5" stroke="#2499D6" strokeWidth="1.5"/>
                <circle cx="14" cy="14" r="3" fill="#2499D6"/>
                <circle cx="14" cy="5.5" r="2" fill="#56BBF0"/>
                <circle cx="21.5" cy="18.5" r="2" fill="#56BBF0"/>
                <circle cx="6.5" cy="18.5" r="2" fill="#56BBF0"/>
                <line x1="14" y1="11" x2="14" y2="7.5" stroke="#56BBF0" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="16.5" y1="15.5" x2="19.5" y2="17" stroke="#56BBF0" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="11.5" y1="15.5" x2="8.5" y2="17" stroke="#56BBF0" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="font-syne text-base font-light">
                Community<strong className="font-bold">Connect</strong>
              </span>
            </Link>
            <p className="font-dm-sans text-sm leading-relaxed text-white/90 mb-5 max-w-[280px]">
              Building stronger communities through collaboration, service, and shared resources.
            </p>
            <div className="flex gap-2.5">
              {socialIcons.map((social, i) => (
                <a key={i} href="#" aria-label={social.name} className="w-9 h-9 rounded-full glass-bg border border-white/20 flex items-center justify-center text-white/80 text-xs font-bold hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all hover:-translate-y-0.5 backdrop-blur-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syne text-xs font-bold text-sky-300 uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="font-dm-sans text-sm text-white/90 hover:text-white flex items-center gap-2 group">
                    <span className="text-[9px] text-sky-300 group-hover:translate-x-1 transition-transform">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne text-xs font-bold text-sky-300 uppercase tracking-widest mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="font-dm-sans text-sm text-white/90 hover:text-white flex items-center gap-2 group">
                    <span className="text-[9px] text-sky-300 group-hover:translate-x-1 transition-transform">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne text-xs font-bold text-sky-300 uppercase tracking-widest mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="font-dm-sans text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:communityconnect@gmail.com" className="font-dm-sans text-sm text-white/95 hover:text-white transition-colors">communityconnect@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="font-dm-sans text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+11234567890" className="font-dm-sans text-sm text-white/95 hover:text-white transition-colors">(123) 456 7890</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="font-dm-sans text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-0.5">Location</p>
                  <span className="font-dm-sans text-sm text-white/90">Bothell, Washington 98011</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="font-dm-sans text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-0.5">Hours</p>
                  <span className="font-dm-sans text-sm text-white/90">Mon–Fri, 9am – 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-b border-white/10 flex flex-wrap items-center gap-5">
          <span className="font-syne text-[11px] font-bold text-white/60 uppercase tracking-widest whitespace-nowrap">Trusted Community Partners</span>
          <div className="flex flex-wrap gap-2.5">
            {partners.map((partner, i) => (
              <span key={i} className="glass-bg border border-white/20 rounded-full px-3.5 py-1.5 font-dm-sans text-xs text-white/95 flex items-center gap-1.5 hover:border-sky-400 hover:text-white hover:bg-sky-400/10 transition-all cursor-default backdrop-blur-sm">
                <span>{partner.icon}</span>
                {partner.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-5 text-center">
          <p className="font-dm-sans text-sm text-white/80 mb-1.5">
            © 2025 CommunityConnect — Built with <span className="text-sky-300 text-xs">♥</span> for TSA Webmaster
            &nbsp;|&nbsp; <Link href="/copyright" className="text-white/95 hover:text-white transition-colors">Reference Page</Link>
          </p>
          <p className="font-dm-sans text-[11px] text-white/60">
            This website was created for educational purposes as part of the TSA Webmaster competition.
          </p>
        </div>
      </div>
    </footer>
  )
}

