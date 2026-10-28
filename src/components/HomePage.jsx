import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  <span className="text-amber-700 text-sm font-semibold leading-normal">Home</span>
                  <Link
                    to="/Services"
                    onClick={() => handleNavClick('/Services')}
                    className="text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                  >
                    Services
                  </Link>
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
                <button
                  onClick={toggleMobileMenu}
                  className="text-stone-900 p-2"
                >
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
                    <div className="px-2 py-3">
                      <span className="text-amber-700 text-sm font-semibold leading-normal block">Home</span>
                    </div>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="block px-2 py-3 text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors border-t border-stone-100"
                    >
                      Services
                    </Link>
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
            <section className="px-4 sm:px-10 lg:px-20 py-5">
              <div
                className="min-h-[70vh] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-6 pb-12 sm:px-12"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(28, 25, 23, 0.15) 0%, rgba(28, 25, 23, 0.75) 100%), url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop")',
                }}
              >
                <div className="flex flex-col gap-3 text-left max-w-3xl">
                  <span className="text-amber-300 text-xs font-semibold tracking-[0.3em] uppercase">Private · In-Home · Seven Days</span>
                  <h1 className="text-stone-50 text-4xl font-serif font-semibold leading-tight tracking-[-0.02em] sm:text-6xl">
                    Your Body, Rebuilt in Seven Days
                  </h1>
                  <h2 className="text-stone-200 text-base font-light leading-relaxed sm:text-lg max-w-xl">
                    An elite in-home training and somatic recovery retreat. Bespoke functional training, assisted stretching, guided breathwork, and sports massage — delivered to your door, daily.
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex flex-col sm:flex-row">
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-amber-700 text-stone-50 text-sm font-semibold leading-normal tracking-[0.015em] sm:text-base hover:bg-amber-600 transition-all"
                  >
                    <span className="truncate">Reserve Your 7-Day Retreat — $4,900</span>
                  </Link>
                  <Link
                    to="/Services"
                    onClick={() => handleNavClick('/Services')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-stone-50/10 border border-stone-50/40 text-stone-50 text-sm font-semibold leading-normal tracking-[0.015em] sm:text-base hover:bg-stone-50/20 transition-all backdrop-blur-sm"
                  >
                    <span className="truncate">Explore the Menu</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Trust Bar */}
            <section className="px-4 sm:px-10 lg:px-20 py-6">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs font-medium tracking-[0.15em] uppercase text-stone-500">
                <span>Billed $700 / Day via Goldie</span>
                <span className="text-stone-300 hidden sm:inline">·</span>
                <span>Fully Private & Discreet</span>
                <span className="text-stone-300 hidden sm:inline">·</span>
                <span>Home · Villa · Yacht</span>
              </div>
            </section>

            {/* Flagship Offer Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">The Signature Experience</span>
                    <h2 className="mt-3 text-stone-900 text-3xl sm:text-4xl font-serif font-semibold leading-tight tracking-[-0.02em]">
                      The VIP In-Home Training & Recovery Retreat
                    </h2>
                    <p className="mt-5 text-stone-600 text-lg font-light leading-relaxed">
                      Seven consecutive days. A rigorous two-hour daily block combining bespoke functional training, assisted stretching, guided breathwork, and sports massage therapy — all in the comfort and privacy of your own space.
                    </p>
                    <p className="mt-4 text-stone-600 text-lg font-light leading-relaxed">
                      You set the pace. We bring the expertise. Your card is charged $700 each morning or evening upon completion of that day's session — steady, transparent, effortless.
                    </p>
                    <div className="mt-8 flex items-baseline gap-3">
                      <span className="text-5xl font-serif font-semibold text-stone-900">$4,900</span>
                      <span className="text-stone-500 text-base font-medium">/ 7-day package</span>
                    </div>
                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="mt-8 inline-flex items-center justify-center rounded-full h-12 px-6 bg-stone-900 text-stone-50 text-sm font-semibold tracking-[0.015em] hover:bg-amber-700 transition-all"
                    >
                      Book Your Retreat
                    </Link>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
                        alt="Private in-home training session"
                        className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-amber-700 text-stone-50 rounded-xl px-6 py-4 shadow-lg">
                        <div className="text-2xl font-serif font-semibold">2 Hours</div>
                        <div className="text-xs tracking-[0.2em] uppercase">Daily Block</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Daily Ritual / What's Included */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-stone-100">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-stone-900 text-center text-3xl sm:text-4xl font-serif font-semibold leading-tight tracking-[-0.02em]">
                  Inside Your Daily Two-Hour Block
                </h2>
                <p className="mt-4 text-center text-stone-600 text-base font-light max-w-2xl mx-auto">
                  Four disciplines, woven into one seamless session designed to train, restore, and reset your nervous system.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div className="flex flex-col gap-4 rounded-2xl bg-stone-50 border border-stone-200 p-7 hover:shadow-lg transition-shadow">
                    <div className="size-12 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                      <span className="material-symbols-outlined">fitness_center</span>
                    </div>
                    <h3 className="text-stone-900 text-lg font-semibold">Functional Training</h3>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      Bespoke movement patterns built around your body, goals, and environment — no gym required.
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col gap-4 rounded-2xl bg-stone-50 border border-stone-200 p-7 hover:shadow-lg transition-shadow">
                    <div className="size-12 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                      <span className="material-symbols-outlined">self_improvement</span>
                    </div>
                    <h3 className="text-stone-900 text-lg font-semibold">Assisted Stretching</h3>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      Partner-assisted stretching to restore range of motion and release long-held tension.
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col gap-4 rounded-2xl bg-stone-50 border border-stone-200 p-7 hover:shadow-lg transition-shadow">
                    <div className="size-12 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                      <span className="material-symbols-outlined">air</span>
                    </div>
                    <h3 className="text-stone-900 text-lg font-semibold">Guided Breathwork</h3>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      Nervous-system regulation through breath mechanics — the foundation of deep recovery.
                    </p>
                  </div>
                  {/* Card 4 */}
                  <div className="flex flex-col gap-4 rounded-2xl bg-stone-50 border border-stone-200 p-7 hover:shadow-lg transition-shadow">
                    <div className="size-12 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                      <span className="material-symbols-outlined">spa</span>
                    </div>
                    <h3 className="text-stone-900 text-lg font-semibold">Sports Massage</h3>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      Targeted deep-tissue therapy to flush the system and accelerate adaptation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Packs Preview */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center">
                  <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">Curated Packs</span>
                  <h2 className="mt-3 text-stone-900 text-3xl sm:text-4xl font-serif font-semibold leading-tight tracking-[-0.02em]">
                    Three Services. One Focused Outcome.
                  </h2>
                  <p className="mt-4 text-stone-600 text-base font-light max-w-2xl mx-auto">
                    Each pack bundles three complementary services for a complete, targeted result — all for $500.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pack 1 */}
                  <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl transition-shadow">
                    <div>
                      <h3 className="text-stone-900 text-xl font-serif font-semibold leading-tight">Full-Body Rebuild Pack</h3>
                      <p className="mt-3 flex items-baseline gap-2 text-stone-900">
                        <span className="text-4xl font-serif font-semibold">$500</span>
                        <span className="text-sm font-medium text-stone-500">/ pack</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Functional Strength Training
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Assisted Stretching
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Myofascial Release
                      </div>
                    </div>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="mt-auto text-amber-700 text-sm font-semibold hover:text-amber-800 transition-colors"
                    >
                      View details →
                    </Link>
                  </div>

                  {/* Pack 2 - Featured */}
                  <div className="flex flex-col gap-5 rounded-2xl border border-amber-700 bg-stone-50 p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-amber-700 text-stone-50 text-xs font-semibold px-3 py-1 rounded-bl-lg tracking-[0.15em] uppercase">Most Loved</div>
                    <div>
                      <h3 className="text-stone-900 text-xl font-serif font-semibold leading-tight">Deep Recovery Pack</h3>
                      <p className="mt-3 flex items-baseline gap-2 text-stone-900">
                        <span className="text-4xl font-serif font-semibold">$500</span>
                        <span className="text-sm font-medium text-stone-500">/ pack</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Sports Massage Therapy
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Foam Rolling & Trigger Point Work
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Recovery Compression Session
                      </div>
                    </div>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="mt-auto text-amber-700 text-sm font-semibold hover:text-amber-800 transition-colors"
                    >
                      View details →
                    </Link>
                  </div>

                  {/* Pack 3 */}
                  <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl transition-shadow">
                    <div>
                      <h3 className="text-stone-900 text-xl font-serif font-semibold leading-tight">Stress-Proof Pack</h3>
                      <p className="mt-3 flex items-baseline gap-2 text-stone-900">
                        <span className="text-4xl font-serif font-semibold">$500</span>
                        <span className="text-sm font-medium text-stone-500">/ pack</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Breathwork & Nervous System Reset
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Guided Meditation
                      </div>
                      <div className="text-sm font-light flex gap-3 items-center text-stone-700">
                        <span className="material-symbols-outlined text-amber-700 text-lg">check_circle</span> Restorative Yoga Flow
                      </div>
                    </div>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="mt-auto text-amber-700 text-sm font-semibold hover:text-amber-800 transition-colors"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-stone-100">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-stone-900 text-center text-3xl sm:text-4xl font-serif font-semibold leading-tight tracking-[-0.02em]">
                  Quiet Results, Loud Transformations
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-6 rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-amber-700/10 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-700">person</span>
                      </div>
                      <div>
                        <h3 className="text-stone-900 font-semibold text-lg">Marcus T.</h3>
                        <p className="text-stone-500 text-sm">CEO · 7-Day Retreat Client</p>
                      </div>
                    </div>
                    <div className="text-stone-600 text-base font-light leading-relaxed">
                      "I flew in for a work trip and booked the retreat on a whim. Seven days later, I was sleeping better, moving better, and had lost the knot in my lower back I'd carried for two years. Worth every dollar."
                    </div>
                    <div className="flex items-center gap-1 text-amber-700">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 2 - Featured */}
                  <div className="flex flex-col gap-6 rounded-2xl border border-amber-700 bg-stone-50 p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-amber-700 text-stone-50 text-xs font-semibold px-3 py-1 rounded-bl-lg tracking-[0.15em] uppercase">Featured</div>
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-amber-700/10 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-700">person</span>
                      </div>
                      <div>
                        <h3 className="text-stone-900 font-semibold text-lg">Elena R.</h3>
                        <p className="text-stone-500 text-sm">Athlete · Yacht Retreat</p>
                      </div>
                    </div>
                    <div className="text-stone-600 text-base font-light leading-relaxed">
                      "Training on a yacht between islands sounds indulgent — and it was — but it was also the most disciplined week of my life. The breathwork alone changed how I handle pressure on the course."
                    </div>
                    <div className="flex items-center gap-1 text-amber-700">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-6 rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-amber-700/10 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-700">person</span>
                      </div>
                      <div>
                        <h3 className="text-stone-900 font-semibold text-lg">The Hartmanns</h3>
                        <p className="text-stone-500 text-sm">Couple · Home Retreat</p>
                      </div>
                    </div>
                    <div className="text-stone-600 text-base font-light leading-relaxed">
                      "We booked the retreat at home after our second child. The flexibility of training in our own living room, with the massage and stretching built in, was the reset we didn't know we needed."
                    </div>
                    <div className="flex items-center gap-1 text-amber-700">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star_half</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-14 pt-10 border-t border-stone-300">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-serif font-semibold text-amber-700">100%</div>
                      <div className="text-stone-600 text-sm mt-2 tracking-wide">Private & In-Home</div>
                    </div>
                    <div>
                      <div className="text-4xl font-serif font-semibold text-amber-700">7</div>
                      <div className="text-stone-600 text-sm mt-2 tracking-wide">Consecutive Days</div>
                    </div>
                    <div>
                      <div className="text-4xl font-serif font-semibold text-amber-700">4.9</div>
                      <div className="text-stone-600 text-sm mt-2 tracking-wide">Client Rating</div>
                    </div>
                    <div>
                      <div className="text-4xl font-serif font-semibold text-amber-700">$700</div>
                      <div className="text-stone-600 text-sm mt-2 tracking-wide">Daily, via Goldie</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Framework Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-7xl mx-auto flex flex-col gap-14">
                <div className="text-center">
                  <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">The Robenhorst Method</span>
                  <h2 className="mt-3 text-stone-900 text-3xl sm:text-4xl font-serif font-semibold leading-tight tracking-[-0.02em]">
                    How Seven Days Rewire the Body
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-300"></div>
                    <div className="space-y-12">
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-700 text-stone-50 ring-8 ring-stone-50">
                          <span className="material-symbols-outlined text-base">checklist</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-amber-700 font-serif">Assessment & Foundation</h3>
                          <p className="font-medium text-stone-900">Day 0 — We Start With Understanding</p>
                          <p className="text-sm font-light text-stone-600 mt-1">Movement screen, goal alignment, and lifestyle assessment before the retreat begins.</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-700 text-stone-50 ring-8 ring-stone-50">
                          <span className="material-symbols-outlined text-base">map</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-amber-700 font-serif">Personal Blueprint</h3>
                          <p className="font-medium text-stone-900">Day 1 — Your Custom Roadmap</p>
                          <p className="text-sm font-light text-stone-600 mt-1">A tailored daily block built around your body, environment, and objectives.</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-700 text-stone-50 ring-8 ring-stone-50">
                          <span className="material-symbols-outlined text-base">groups</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-amber-700 font-serif">Guided Implementation</h3>
                          <p className="font-medium text-stone-900">Days 2–6 — Expert-Led Execution</p>
                          <p className="text-sm font-light text-stone-600 mt-1">Two hours daily of coached training, stretching, breathwork, and massage.</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-700 text-stone-50 ring-8 ring-stone-50">
                          <span className="material-symbols-outlined text-base">monitoring</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-amber-700 font-serif">Progress Tracking</h3>
                          <p className="font-medium text-stone-900">Daily — Measurable Milestones</p>
                          <p className="text-sm font-light text-stone-600 mt-1">Check-ins, adjustments, and celebration of wins as the week unfolds.</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-700 text-stone-50 ring-8 ring-stone-50">
                          <span className="material-symbols-outlined text-base">autorenew</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-amber-700 font-serif">Lifelong Habits</h3>
                          <p className="font-medium text-stone-900">Day 7 — Sustainable Transformation</p>
                          <p className="text-sm font-light text-stone-600 mt-1">A written protocol to carry the retreat's gains into the rest of your year.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-serif font-semibold text-stone-900 tracking-tight">Why the Retreat Works When Other Approaches Fail</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-amber-700/10 text-amber-700">
                          <span className="material-symbols-outlined">science</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-stone-900">Somatic Science</h4>
                          <p className="text-sm font-light text-stone-600 mt-1">Every session follows exercise physiology and nervous-system principles proven to deliver results safely.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-amber-700/10 text-amber-700">
                          <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-stone-900">Immersive, Not Incremental</h4>
                          <p className="text-sm font-light text-stone-600 mt-1">Seven consecutive days of focused attention creates change that months of scattered sessions cannot.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-amber-700/10 text-amber-700">
                          <span className="material-symbols-outlined">handshake</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-stone-900">Total Privacy</h4>
                          <p className="text-sm font-light text-stone-600 mt-1">No gym, no audience, no commute — just you, your space, and an expert entirely focused on your body.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-stone-200 pt-12 flex flex-col items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold tracking-[0.15em] uppercase text-stone-500">
                    <span>Elite Private Coaching</span>
                    <span className="text-stone-300 hidden sm:inline">·</span>
                    <span>Somatic Recovery Specialist</span>
                    <span className="text-stone-300 hidden sm:inline">·</span>
                    <span>Goldie-Powered Billing</span>
                  </div>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-stone-900 text-stone-50 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Request Your Retreat Dates</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-stone-900">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-stone-50">Seven Days. One Transformation.</h2>
                <p className="mt-4 text-lg font-light leading-8 text-stone-300">Reserve your VIP in-home training and recovery retreat today. Limited dates each month.</p>
                <div className="mt-10">
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-amber-700 text-stone-50 text-base font-semibold leading-normal tracking-[0.015em] mx-auto hover:bg-amber-600 transition-all"
                  >
                    <span className="truncate">Book Your Free Consultation</span>
                  </Link>
                </div>
              </div>
            </section>

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
              <div className="flex justify-center space-x-6">
              </div>
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

export default HomePage;