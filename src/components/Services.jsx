import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('packs'); // 'packs' | 'individual'

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ---- DATA ----
  const packs = [
    {
      name: 'Foundation Reset Pack',
      icon: 'checklist',
      services: ['Functional Movement Screen', 'Postural Alignment Assessment', 'Personalised Training Blueprint'],
      description: 'Start from the ground up. Identify imbalances, map your posture, and leave with a written roadmap built entirely around your body.',
    },
    {
      name: 'Full-Body Rebuild Pack',
      icon: 'fitness_center',
      services: ['Functional Strength Training', 'Assisted Stretching', 'Myofascial Release'],
      description: 'A complete head-to-toe reset for clients who feel stiff, restricted, or out of sync with their body.',
    },
    {
      name: 'Breath & Balance Pack',
      icon: 'air',
      services: ['Guided Breathwork Session', 'Mobility Flow Training', 'Somatic Grounding Practice'],
      description: 'Calm the nervous system and reclaim control. Built for high-stress professionals running on empty.',
    },
    {
      name: 'Deep Recovery Pack',
      icon: 'spa',
      services: ['Sports Massage Therapy', 'Foam Rolling & Trigger Point Work', 'Recovery Compression Session'],
      description: 'Recovery treated as seriously as training. The go-to pack after intense training blocks or long travel.',
      featured: true,
    },
    {
      name: 'Mobility Mastery Pack',
      icon: 'self_improvement',
      services: ['Joint Mobility Drills', 'Dynamic Stretching Routine', 'Movement Pattern Correction'],
      description: 'Move freely, forever. Ideal for athletes, desk workers, and anyone who feels stuck in their own body.',
    },
    {
      name: 'Core & Stability Pack',
      icon: 'accessibility_new',
      services: ['Anti-Rotation Core Training', 'Balance & Proprioception Work', 'Pelvic Floor Activation'],
      description: 'Build a foundation that holds under pressure. Especially valuable for postpartum clients and runners.',
    },
    {
      name: 'Athletic Performance Pack',
      icon: 'bolt',
      services: ['Plyometric Conditioning', 'Speed & Agility Drills', 'Explosive Power Training'],
      description: 'For those who train to compete. Perfect for recreational athletes and weekend warriors.',
    },
    {
      name: 'Stress-Proof Pack',
      icon: 'psychiatry',
      services: ['Breathwork & Nervous System Reset', 'Guided Meditation', 'Restorative Yoga Flow'],
      description: 'Engineered for the chronically stressed. The antidote to burnout, poor sleep, and constant screen time.',
    },
    {
      name: 'Posture Perfect Pack',
      icon: 'chair',
      services: ['Desk-Worker Posture Correction', 'Upper Back & Shoulder Release', 'Ergonomic Movement Coaching'],
      description: 'Undo the damage of modern life. A must for office professionals and remote workers.',
    },
    {
      name: 'Injury-Proof Pack',
      icon: 'health_and_safety',
      services: ['Prehab Strengthening', 'Corrective Exercise Programming', 'Joint Stability Training'],
      description: 'Train hard without breaking down. Ideal for athletes with a history of setbacks.',
    },
    {
      name: 'Sleep & Restore Pack',
      icon: 'bedtime',
      services: ['Evening Wind-Down Routine', 'Deep Tissue Recovery Work', 'Sleep Hygiene Coaching'],
      description: 'Rebuild your relationship with rest. For anyone who wakes up tired.',
    },
    {
      name: 'Endurance Builder Pack',
      icon: 'directions_run',
      services: ['Zone-2 Conditioning', 'Tempo Interval Training', 'Recovery & Pacing Strategy'],
      description: 'Go longer, stronger. Built for runners, cyclists, and anyone training for an endurance event.',
    },
    {
      name: 'Lean & Strong Pack',
      icon: 'trending_up',
      services: ['Metabolic Resistance Training', 'Hypertrophy-Focused Lifting', 'Body Composition Tracking'],
      description: 'Body composition, done properly. For clients who want to look and feel their best.',
    },
    {
      name: 'Mind-Body Connection Pack',
      icon: 'self_improvement',
      services: ['Mindful Movement Practice', 'Breath-Led Stretching', 'Body Awareness Coaching'],
      description: 'Where movement meets awareness. Ideal for anyone seeking a deeper relationship with fitness.',
    },
    {
      name: 'Total Transformation Pack',
      icon: 'auto_awesome',
      services: ['Full-Body Functional Circuit', 'Assisted Stretch & Massage Combo', 'Goal-Setting & Progress Review'],
      description: 'The complete experience in three sessions. The best entry point for the full Robenhorst experience.',
    },
  ];

  const individualServices = {
    50: [
      { name: 'Guided Breathwork Session', duration: '30 min', description: 'Nervous system down-regulation and breath mechanics coaching.' },
      { name: 'Assisted Stretch Session', duration: '30 min', description: 'Partner-assisted full-body stretching for range of motion.' },
      { name: 'Recovery Consultation', duration: '30 min', description: 'Assessment of recovery needs and personalised plan.' },
    ],
    100: [
      { name: 'Sports Massage Therapy', duration: '60 min', description: 'Targeted deep-tissue massage for athletic recovery.' },
      { name: 'Mobility & Movement Session', duration: '60 min', description: 'Joint mobility drills and movement pattern correction.' },
      { name: 'Functional Training Session', duration: '60 min', description: 'One-on-one bespoke functional strength workout.' },
    ],
    150: [
      { name: 'Full Recovery Block', duration: '90 min', description: 'Stretch + massage + breathwork in one continuous session.' },
      { name: 'Strength & Conditioning Session', duration: '90 min', description: 'Extended functional training with progressive overload.' },
      { name: 'Somatic Reset Session', duration: '90 min', description: 'Guided somatic movement, breathwork, and grounding practice.' },
    ],
    200: [
      { name: 'In-Home Training + Recovery Combo', duration: '2 hr', description: 'Training block plus assisted stretch and massage.' },
      { name: 'Full Body Assessment & Blueprint', duration: '2 hr', description: 'Movement screen, posture analysis, and written programme.' },
      { name: 'Deep Tissue + Mobility Intensive', duration: '2 hr', description: 'Extended massage therapy paired with mobility coaching.' },
    ],
    250: [
      { name: 'Half-Day Wellness Retreat', duration: '4 hr', description: 'Training, recovery, breathwork, and massage in one visit.' },
      { name: 'Couples Training & Recovery Session', duration: '2 hr', description: 'Two-person functional training plus assisted stretching.' },
      { name: 'Performance Testing & Recovery Day', duration: '2 hr', description: 'Fitness testing, recovery protocol, and full progress report.' },
    ],
  };

  return (
    <div className="bg-stone-50 font-display text-stone-900">
      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-stone-200 px-4 sm:px-10 lg:px-20 py-4">
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="size-9 text-amber-700">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M24 14L34 19V29L24 34L14 29V19L24 14Z" fill="currentColor" opacity="0.35" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-none">
                    <h2 className="text-stone-900 text-lg font-semibold tracking-[-0.015em] font-serif">Robenhorst</h2>
                    <span className="text-amber-700 text-[10px] font-medium tracking-[0.25em] uppercase">Elite Wellness</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link
                    to="/HomePage"
                    onClick={() => handleNavClick('/HomePage')}
                    className="text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-amber-700 text-sm font-semibold leading-normal">Services</span>
                  <Link
                    to="/AboutMe"
                    onClick={() => handleNavClick('/AboutMe')}
                    className="text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                  >
                    About
                  </Link>
                </div>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-stone-900 text-stone-50 text-sm font-semibold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all"
                >
                  <span className="truncate">Book a Retreat</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button onClick={toggleMobileMenu} className="text-stone-900 p-2">
                  <span className="material-symbols-outlined">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-stone-50 border-b border-stone-200 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  <div className="space-y-3">
                    <Link
                      to="/HomePage"
                      onClick={() => handleNavClick('/HomePage')}
                      className="block px-2 py-3 text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                    >
                      Home
                    </Link>
                    <div className="px-2 py-3 border-t border-stone-100">
                      <span className="text-amber-700 text-sm font-semibold leading-normal">Services</span>
                    </div>
                    <Link
                      to="/AboutMe"
                      onClick={() => handleNavClick('/AboutMe')}
                      className="block px-2 py-3 text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors border-t border-stone-100"
                    >
                      About
                    </Link>
                  </div>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-stone-900 text-stone-50 text-sm font-semibold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all mt-4"
                  >
                    <span className="truncate">Book a Retreat</span>
                  </Link>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-4xl">
                <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">The Menu</span>
                <h1 className="mt-3 text-4xl md:text-5xl font-serif font-semibold text-stone-900 mb-4 tracking-[-0.02em]">Our Services</h1>
                <p className="text-stone-600 text-lg font-light max-w-2xl">
                  Curated packs, individual sessions, and the flagship seven-day retreat — all designed to train, restore, and reset the body on your terms.
                </p>
              </div>
            </div>

            {/* Flagship Banner */}
            <div className="px-4 sm:px-10 lg:px-20 pb-12">
              <div className="rounded-2xl bg-stone-900 text-stone-50 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase">Flagship Experience</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-semibold">VIP In-Home Training & Recovery Retreat</h2>
                  <p className="mt-2 text-stone-300 font-light max-w-2xl">Seven consecutive days. A two-hour daily block of training, stretching, breathwork, and massage. Billed $700/day via Goldie.</p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-semibold text-amber-400">$4,900</span>
                    <span className="text-stone-400 text-sm">/ 7 days</span>
                  </div>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="inline-flex items-center justify-center rounded-full h-11 px-6 bg-amber-700 text-stone-50 text-sm font-semibold hover:bg-amber-600 transition-all"
                  >
                    Reserve Your Dates
                  </Link>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-4 sm:px-10 lg:px-20">
              <div className="flex gap-2 border-b border-stone-200">
                <button
                  onClick={() => setActiveTab('packs')}
                  className={`px-4 sm:px-6 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === 'packs'
                      ? 'border-amber-700 text-amber-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Service Packs ($500)
                </button>
                <button
                  onClick={() => setActiveTab('individual')}
                  className={`px-4 sm:px-6 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === 'individual'
                      ? 'border-amber-700 text-amber-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Individual Services
                </button>
              </div>
            </div>

            {/* ---- PACKS TAB ---- */}
            {activeTab === 'packs' && (
              <div className="px-4 sm:px-10 lg:px-20 py-12">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900">Three Services. One Focused Outcome.</h2>
                  <p className="mt-2 text-stone-600 font-light">Each pack bundles three complementary services for a complete, targeted result — all for $500.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {packs.map((pack, index) => (
                    <div
                      key={index}
                      className={`flex flex-col gap-4 rounded-2xl p-7 transition-shadow relative overflow-hidden ${
                        pack.featured
                          ? 'border-2 border-amber-700 bg-stone-50 shadow-xl'
                          : 'border border-stone-200 bg-stone-50 hover:shadow-xl'
                      }`}
                    >
                      {pack.featured && (
                        <div className="absolute top-0 right-0 bg-amber-700 text-stone-50 text-xs font-semibold px-3 py-1 rounded-bl-lg tracking-[0.15em] uppercase">
                          Most Loved
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 size-11 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                          <span className="material-symbols-outlined">{pack.icon}</span>
                        </div>
                        <h3 className="text-stone-900 text-lg font-serif font-semibold leading-tight">{pack.name}</h3>
                      </div>
                      <p className="flex items-baseline gap-2 text-stone-900">
                        <span className="text-3xl font-serif font-semibold">$500</span>
                        <span className="text-sm font-medium text-stone-500">/ pack</span>
                      </p>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">{pack.description}</p>
                      <div className="flex flex-col gap-2 border-t border-stone-200 pt-4">
                        {pack.services.map((service, i) => (
                          <div key={i} className="text-sm font-light flex gap-2 items-start text-stone-700">
                            <span className="material-symbols-outlined text-amber-700 text-base mt-0.5">check_circle</span>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/Contact"
                        onClick={() => handleNavClick('/Contact')}
                        className="mt-auto text-amber-700 text-sm font-semibold hover:text-amber-800 transition-colors"
                      >
                        Book this pack →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---- INDIVIDUAL TAB ---- */}
            {activeTab === 'individual' && (
              <div className="px-4 sm:px-10 lg:px-20 py-12">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900">À La Carte Services</h2>
                  <p className="mt-2 text-stone-600 font-light">Individual sessions across five price tiers — from a quick breathwork reset to a half-day wellness retreat.</p>
                </div>
                <div className="space-y-12">
                  {Object.entries(individualServices).map(([price, services]) => (
                    <div key={price}>
                      <div className="flex items-center gap-4 mb-5">
                        <h3 className="text-2xl font-serif font-semibold text-stone-900">${price}</h3>
                        <div className="flex-1 h-px bg-stone-200"></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:shadow-xl transition-shadow"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-stone-900 text-base font-semibold leading-tight">{service.name}</h4>
                              <span className="text-xs font-medium text-amber-700 whitespace-nowrap">{service.duration}</span>
                            </div>
                            <p className="text-stone-600 text-sm font-light leading-relaxed">{service.description}</p>
                            <div className="mt-auto flex items-center justify-between pt-2">
                              <span className="text-lg font-serif font-semibold text-stone-900">${price}</span>
                              <Link
                                to="/Contact"
                                onClick={() => handleNavClick('/Contact')}
                                className="text-amber-700 text-sm font-semibold hover:text-amber-800 transition-colors"
                              >
                                Book →
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-20 bg-stone-900 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-5">Not Sure Where to Start?</h2>
                <p className="text-stone-300 text-lg font-light mb-8">
                  Book a free consultation and we'll build the right combination of packs, sessions, or a full retreat for your body and schedule.
                </p>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="inline-flex items-center justify-center rounded-full h-12 px-6 bg-amber-700 text-stone-50 text-base font-semibold tracking-[0.015em] hover:bg-amber-600 transition-all"
                >
                  Book Your Consultation
                </Link>
              </div>
            </div>

            {/* Contact Details Section */}
            <section className="bg-stone-100 border-t border-stone-200">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-serif font-semibold text-stone-900">Contact Robenhorst</h3>
                    <div className="mt-4 space-y-2 text-stone-600 font-light">
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-700">email</span>
                        <span>hello@robenhorstelitewellness.com</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-700">phone</span>
                        <span>(316) 910 8707</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-700">location_on</span>
                        <span>Serving private residences, villas & yachts<br />Tallahassee, FL & beyond</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-serif font-semibold text-stone-900">Booking Hours</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-stone-600 font-light">
                      <p><strong className="font-medium text-stone-900">Monday - Thursday:</strong> 6:00 AM - 8:00 PM</p>
                      <p><strong className="font-medium text-stone-900">Friday:</strong> 6:00 AM - 6:00 PM</p>
                      <p><strong className="font-medium text-stone-900">Saturday:</strong> 8:00 AM - 2:00 PM</p>
                      <p><strong className="font-medium text-stone-900">Sunday:</strong> By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-stone-100 text-stone-600">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex justify-center space-x-6"></div>
              <div className="mt-2 flex justify-center space-x-6 text-sm">
                <Link
                  to="/AboutMe"
                  onClick={() => handleNavClick('/AboutMe')}
                  className="hover:text-amber-700 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="hover:text-amber-700 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <p className="mt-8 text-center text-xs leading-5">© 2025 Robenhorst Elite Wellness. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default Services;