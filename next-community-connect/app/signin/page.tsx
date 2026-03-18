'use client'

import { useState, Suspense } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const JUDGE_EMAIL = 'judges@tsa.com'
const JUDGE_PASSWORD = 'judges!'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    signIn(email, password)
    router.push(redirect)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    signIn(email, password)
    router.push(redirect)
  }

  const handleJudgeAutoFill = () => {
    setEmail(JUDGE_EMAIL)
    setPassword(JUDGE_PASSWORD)
  }

  const inputClass = "w-full px-4 py-3.5 rounded-lg font-outfit text-sm outline-none transition-all"

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#044069' }}>
      {/* Left column */}
      <div className="flex-1 flex flex-col justify-center px-12 lg:px-20 py-16">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 mb-16">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="14" cy="14" r="12.5" stroke="#56BBF0" strokeWidth="1.5"/>
            <circle cx="14" cy="14" r="3" fill="#56BBF0"/>
            <circle cx="14" cy="5.5" r="2" fill="#90D4F7"/>
            <circle cx="21.5" cy="18.5" r="2" fill="#90D4F7"/>
            <circle cx="6.5" cy="18.5" r="2" fill="#90D4F7"/>
            <line x1="14" y1="11" x2="14" y2="7.5" stroke="#90D4F7" strokeWidth="1.3" strokeLinecap="round"/>
            <line x1="16.5" y1="15.5" x2="19.5" y2="17" stroke="#90D4F7" strokeWidth="1.3" strokeLinecap="round"/>
            <line x1="11.5" y1="15.5" x2="8.5" y2="17" stroke="#90D4F7" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span className="font-syne text-base font-light text-white">
            Community<strong className="font-bold">Connect</strong>
          </span>
        </Link>

        <h1 className="font-syne text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Community Connect
        </h1>
        <p className="font-outfit text-base leading-relaxed mb-12 max-w-md" style={{ color: 'rgba(198,235,255,0.7)' }}>
          Sign in to submit resources, make donations to local causes, and fully explore the platform built for Bothell residents.
        </p>

        {/* Judge credentials box */}
        <div
          className="rounded-xl p-6 max-w-md cursor-pointer transition-colors"
          style={{ border: '1px solid rgba(86,187,240,0.5)', backgroundColor: 'rgba(36,153,214,0.15)' }}
          onClick={handleJudgeAutoFill}
        >
          <p className="font-syne text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#90D4F7' }}>
            For TSA Judges
          </p>
          <p className="font-outfit text-sm mb-4" style={{ color: 'rgba(198,235,255,0.7)' }}>
            Please use the following test account (click box to auto-fill):
          </p>
          <p className="font-outfit text-sm mb-1">
            <span style={{ color: 'rgba(198,235,255,0.55)' }}>Email: </span>
            <span style={{ color: '#56BBF0' }}>{JUDGE_EMAIL}</span>
          </p>
          <p className="font-outfit text-sm mb-4">
            <span style={{ color: 'rgba(198,235,255,0.55)' }}>Password: </span>
            <span style={{ color: '#56BBF0' }}>{JUDGE_PASSWORD}</span>
          </p>
          <div className="border-t pt-4" style={{ borderColor: 'rgba(86,187,240,0.25)' }}>
            <p className="font-outfit text-xs" style={{ color: 'rgba(198,235,255,0.4)' }}>
              Judges are also welcome to create their own accounts using the Sign Up button to experience the full workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="w-full max-w-sm lg:max-w-md flex flex-col justify-center px-10 lg:px-14 py-16" style={{ borderLeft: '1px solid rgba(86,187,240,0.2)', backgroundColor: 'rgba(2,39,71,0.5)' }}>
        <div className="space-y-5">
          <div>
            <label className="block font-outfit text-sm mb-2" style={{ color: 'rgba(198,235,255,0.7)' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={inputClass}
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(86,187,240,0.3)' }}
            />
          </div>

          <div>
            <label className="block font-outfit text-sm mb-2" style={{ color: 'rgba(198,235,255,0.7)' }}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`${inputClass} pr-11`}
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(86,187,240,0.3)' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: 'rgba(198,235,255,0.6)' }}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="flex-1 py-3.5 rounded-lg font-outfit font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #085D8A 0%, #2499D6 100%)', color: 'white' }}
            >
              {loading ? '...' : 'Sign Up'}
            </button>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="flex-1 py-3.5 rounded-lg font-outfit font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(86,187,240,0.35)' }}
            >
              {loading ? '...' : 'Login'}
            </button>
          </div>
        </div>

        <p className="mt-10 font-outfit text-xs text-center" style={{ color: 'rgba(198,235,255,0.3)' }}>
          <Link href="/" className="hover:text-white transition-colors">Back to home</Link>
        </p>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  )
}
