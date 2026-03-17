'use client'

import { useSettings } from '@/context/SettingsContext'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Maximize2, Minimize2, Hash, Volume2, VolumeX, Droplets, Palette, MousePointer2, Ruler, ZoomIn, ZoomOut, Sun, Moon, Contrast, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroDemo } from '@/components/ui/animated-hero-demo'

// Font size options
const fontSizes = [
  { value: 'small', label: 'Small', icon: Minimize2 },
  { value: 'medium', label: 'Medium', icon: Minimize2 },
  { value: 'large', label: 'Large', icon: Maximize2 },
  { value: 'xlarge', label: 'X-Large', icon: Maximize2 },
]

export default function SettingsPage() {
  const { settings, dispatch } = useSettings()

  const toggle = (type: any) => dispatch({ type })
  const setFontSize = (size: string) => dispatch({ type: 'SET_FONT_SIZE', payload: size as any })
  const setGrayscale = (value: number) => dispatch({ type: 'SET_GRAYSCALE', payload: value })
  const setZoom = (value: number) => dispatch({ type: 'SET_ZOOM', payload: value })

  const resetAll = () => {
    // Simple reset to initial (could dispatch multiple)
    window.localStorage.removeItem('community-connect-settings')
    window.location.reload()
  }

  return (
    <>
      <HeroDemo
        badge="Inclusive Design"
        staticTitle="Accessibility Settings"
        subtitle="Customize your experience for comfort and clarity. All changes save automatically and apply site-wide."
        backgroundImage="/img/page-5.jpg"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen py-24 px-4 max-w-4xl mx-auto"
      >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Display & Theme */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-bg p-8 rounded-2xl"
        >
          <h2 className="font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900">
            <Sun className="w-7 h-7" /> Display & Theme
          </h2>
          <div className="space-y-4">
            <Button
              variant={settings.dark ? "default" : "outline"}
              onClick={() => toggle('TOGGLE_DARK')}
              className="w-full justify-start h-14 px-4 text-left font-semibold"
            >
              <Moon className={`w-5 h-5 mr-3 ${settings.dark ? 'text-white' : ''}`} />
              Dark Mode
            </Button>
            <Button
              variant={settings.highContrast ? "default" : "outline"}
              onClick={() => toggle('TOGGLE_HIGH_CONTRAST')}
              className="w-full justify-start h-14 px-4 text-left font-semibold"
            >
              <Contrast className={`w-5 h-5 mr-3 ${settings.highContrast ? 'text-white' : ''}`} />
              High Contrast
            </Button>
            <Button
              variant={settings.largeCursor ? "default" : "outline"}
              onClick={() => toggle('TOGGLE_LARGE_CURSOR')}
              className="w-full justify-start h-14 px-4 text-left font-semibold"
            >
              <MousePointer2 className={`w-5 h-5 mr-3 ${settings.largeCursor ? 'text-white' : ''}`} />
              Large Cursor
            </Button>
          </div>
        </motion.section>

        {/* Text & Reading */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-bg p-8 rounded-2xl"
        >
          <h2 className="font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900">
            <Ruler className="w-7 h-7" /> Text & Reading
          </h2>
          <div className="space-y-4">
            <div>
              <label className="font-semibold mb-3 block text-sky-900">Font Size</label>
              <div className="grid grid-cols-2 gap-2">
                {fontSizes.map(({ value, label, icon: Icon }) => (
                  <Button
                    key={value}
                    variant={settings.fontSize === value ? "default" : "outline"}
                    onClick={() => setFontSize(value)}
                    className="h-12 px-3 justify-start"
                  >
                    <Icon className={`w-4 h-4 mr-2 flex-shrink-0 ${settings.fontSize === value ? 'text-white' : ''}`} />
                    {label}
                  </Button>
                ))}
              </div>
            </div>
            <Button
              variant={settings.readingGuide ? "default" : "outline"}
              onClick={() => toggle('TOGGLE_READING_GUIDE')}
              className="w-full justify-start h-14 px-4 text-left font-semibold"
            >
              <Ruler className={`w-5 h-5 mr-3 ${settings.readingGuide ? 'text-white' : ''}`} />
              Reading Guide
            </Button>
            <Button
              variant={settings.textToSpeech ? "default" : "outline"}
              onClick={() => toggle('TOGGLE_TEXT_TO_SPEECH')}
              className="w-full justify-start h-14 px-4 text-left font-semibold"
            >
              <Volume2 className={`w-5 h-5 mr-3 ${settings.textToSpeech ? 'text-white' : ''}`} />
              Text-to-Speech
            </Button>
          </div>
        </motion.section>

        {/* Color Filters */}
        <motion.section className="glass-bg p-8 rounded-2xl lg:col-span-2">
          <h2 className="font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900">
            <Droplets className="w-7 h-7" /> Color Filters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Button
                variant={settings.colorBlind ? "default" : "outline"}
                onClick={() => toggle('TOGGLE_COLOR_BLIND')}
                className="w-full mb-4 justify-start h-14 px-4 text-left font-semibold"
              >
                <Palette className={`w-5 h-5 mr-3 ${settings.colorBlind ? 'text-white' : ''}`} />
                Color Blind Mode
              </Button>
              <Button
                variant={settings.invertColors ? "default" : "outline"}
                onClick={() => toggle('TOGGLE_INVERT_COLORS')}
                className="w-full mb-4 justify-start h-14 px-4 text-left font-semibold"
              >
                <EyeOff className={`w-5 h-5 mr-3 ${settings.invertColors ? 'text-white' : ''}`} />
                Invert Colors
              </Button>
              <Button
                variant={settings.sepia ? "default" : "outline"}
                onClick={() => toggle('TOGGLE_SEPIA')}
                className="w-full justify-start h-14 px-4 text-left font-semibold"
              >
                <Palette className={`w-5 h-5 mr-3 opacity-70 ${settings.sepia ? 'text-white' : ''}`} />
                Sepia Tone
              </Button>
            </div>
            <div>
              <label className="font-semibold mb-4 block text-sky-900 flex items-center gap-2">
                Grayscale Intensity
                <span className="text-sm font-normal text-sky-600">({settings.grayscale}%)</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.grayscale}
                onChange={(e) => setGrayscale(Number(e.target.value))}
                className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>
          </div>
        </motion.section>

        {/* Motion & Zoom */}
        <motion.section className="glass-bg p-8 rounded-2xl lg:col-span-2">
          <h2 className="font-syne text-2xl font-bold mb-8 flex items-center gap-3 text-sky-900">
            <ZoomIn className="w-7 h-7" /> Motion & Zoom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <Button
                variant={settings.reducedMotion ? "default" : "outline"}
                onClick={() => toggle('TOGGLE_REDUCED_MOTION')}
                className="w-full justify-start h-14 px-4 text-left font-semibold"
              >
                <Hash className={`w-5 h-5 mr-3 ${settings.reducedMotion ? 'text-white' : ''}`} />
                Reduced Motion
              </Button>
            </div>
            <div className="space-y-4">
              <label className="font-semibold mb-2 block text-sky-900 flex items-center gap-2">
                Page Zoom
                <span className="text-sm font-normal text-sky-600">({settings.zoom}%)</span>
              </label>
              <input
                type="range"
                min="100"
                max="200"
                step="10"
                value={settings.zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="text-xs text-sky-500 text-center font-mono">{settings.zoom}%</div>
            </div>
          </div>
        </motion.section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center"
      >
        <Button
          onClick={resetAll}
          variant="outline"
          size="lg"
          className="px-8 font-semibold text-sky-600 border-sky-300 hover:bg-sky-50"
        >
          Reset All to Defaults
        </Button>
        <p className="mt-3 text-sm text-sky-500 font-medium">
          Settings saved automatically ✨
        </p>
      </motion.div>
    </motion.div>
    </>
  )
}

