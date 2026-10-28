import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function About() {
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
                  <Link
                    to="/HomePage"
                    onClick={() => handleNavClick('/HomePage')}
                    className="text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Services"
                    onClick={() => handleNavClick('/Services')}
                    className="text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors"
                  >
                    Services
                  </Link>
                  <span className="text-amber-700 text-sm font-semibold leading-normal">About</span>
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
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="block px-2 py-3 text-stone-700 text-sm font-medium leading-normal hover:text-amber-700 transition-colors border-t border-stone-100"
                    >
                      Services
                    </Link>
                    <div className="px-2 py-3 border-t border-stone-100">
                      <span className="text-amber-700 text-sm font-semibold leading-normal">About</span>
                    </div>
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
            {/* Hero Section with Background Image */}
            <section className="relative px-4 sm:px-10 lg:px-20 py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                  alt="Timothy Robenhorst, founder of Robenhorst Elite Wellness"
                  className="w-full h-full object-cover object-top"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">The Founder</span>
                <h1 className="mt-3 text-stone-900 text-4xl md:text-6xl font-serif font-semibold leading-tight tracking-[-0.02em] mb-4">Timothy Robenhorst</h1>
                <p className="text-stone-600 text-xl md:text-2xl font-light">Founder & Elite Wellness Specialist</p>
              </div>
            </section>

            {/* Content Section - Two Column Layout */}
            <section className="px-4 sm:px-10 lg:px-20 py-12 -mt-20 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="bg-stone-50 rounded-2xl shadow-lg p-8 border border-stone-200">
                  <div className="space-y-8">
                    {/* The Athlete's Foundation - Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12">
                      {/* Image Column */}
                      <div className="lg:w-2/5">
                        <div className="sticky top-24">
                          <img
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                            alt="Timothy Robenhorst - Founder"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                          />
                          {/* Introduction */}
                          <div className="mt-8 p-6 bg-stone-100 rounded-2xl">
                            <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3">Hello, I'm Timothy</h3>
                            <p className="text-stone-600 font-light leading-relaxed">
                              My life has been shaped by high-performance environments. As a former professional athlete, I learned what it takes to push a body to its absolute limits — and, most importantly, how to train it to recover, adapt, and come back stronger.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Text Column */}
                      <div className="lg:w-3/5">
                        <div>
                          <h2 className="text-stone-900 text-2xl font-serif font-semibold border-b border-stone-200 pb-3 mb-6">The Athlete's Foundation</h2>
                          <p className="text-stone-600 text-lg font-light leading-relaxed mb-6">
                            In the beginning, there was a field, a ball, and a dream. I didn't know it then, but every sprint, every drill, every moment of pushing past 'I can't' was building more than muscle — it was building a philosophy. Sport taught me that discipline isn't restriction; it's the framework for freedom. That lesson became my north star.
                          </p>

                          {/* Quote Card */}
                          <div className="my-8 p-6 border-l-4 border-amber-700 bg-amber-50 rounded-r-2xl">
                            <p className="text-xl font-serif font-medium italic text-stone-900 leading-snug">
                              "I don't just train bodies — I translate elite performance into everyday transformation."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* The Transition */}
                    <div className="mt-16 pt-8 border-t border-stone-200">
                      <h2 className="text-stone-900 text-2xl font-serif font-semibold border-b border-stone-200 pb-3 mb-6">The Transition</h2>
                      <p className="text-stone-600 text-lg font-light leading-relaxed">
                        When the final whistle blew on my playing days, I faced the question every athlete dreads: 'What now?' But here's what they don't tell you: the field was just the beginning. I realized my real purpose wasn't in the plays I memorized, but in the principles I lived by. The same focus that helped me read the game could help others overcome their own obstacles. The resilience that carried me through fourth quarters could empower someone through their first month of change.
                      </p>
                    </div>

                    {/* The Founder's Mission */}
                    <div className="mt-12">
                      <h2 className="text-stone-900 text-2xl font-serif font-semibold border-b border-stone-200 pb-3 mb-4">The Founder's Mission</h2>
                      <p className="text-stone-600 text-lg font-light leading-relaxed">
                        That's when Robenhorst Elite Wellness was born — not as a business plan, but as a translation. How do you take elite performance principles and make them accessible? How do you translate pro-level intensity into sustainable, everyday progress? The answer was simple: meet people where they are, but never leave them there. And if they can't come to a gym — bring the gym to them.
                      </p>
                    </div>

                    {/* Why the Retreat */}
                    <div className="mt-12">
                      <h2 className="text-stone-900 text-2xl font-serif font-semibold border-b border-stone-200 pb-3 mb-4">Why the Seven-Day Retreat</h2>
                      <p className="text-stone-600 text-lg font-light leading-relaxed">
                        I built the VIP In-Home Training & Recovery Retreat because I saw the same pattern in nearly every client: small, scattered sessions weren't enough to break through. What actually rewires the body is immersion — seven consecutive days of focused attention, where training, stretching, breathwork, and massage all compound on each other. You don't need a gym. You need a week, a coach, and your own front door.
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="mt-12">
                      <h2 className="text-stone-900 text-2xl font-serif font-semibold border-b border-stone-200 pb-3 mb-4">My Philosophy</h2>
                      <p className="text-stone-600 text-lg font-light leading-relaxed">
                        Every client who books a retreat gets more than a workout plan. They get a partner in their journey — someone who understands that true transformation happens when we build on strengths, work through limitations, and celebrate every step forward. Whether you're a CEO with a demanding schedule, an athlete in season, or a parent reclaiming their body, my approach remains the same: listen first, coach second, and always lead with empathy.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="mt-12 bg-stone-100 p-8 rounded-2xl">
                      <h3 className="text-stone-900 text-xl font-serif font-semibold mb-6">Credentials & Experience</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>Certified Personal Trainer & Somatic Specialist</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>Certified Sports Massage Therapist</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>Advanced Breathwork & Recovery Coach</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>10+ Years of Elite Private Coaching</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>Former Professional Athlete</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-700 font-light">
                          <span className="material-symbols-outlined text-amber-700">verified</span>
                          <span>Specialist in In-Home & Retreat Programming</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-stone-900">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-semibold tracking-tight text-stone-50 sm:text-4xl">Ready to Begin Your Transformation?</h2>
                <p className="mt-4 text-lg font-light leading-8 text-stone-300">Book a free consultation with Timothy to discuss your goals and design your personalised retreat.</p>
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
                    <h3 className="text-lg font-serif font-semibold text-stone-900">Contact Timothy</h3>
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

export default About;