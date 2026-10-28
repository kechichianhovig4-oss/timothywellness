import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    'full-name': '',
    'email': '',
    'phone-number': '',
    'service-tier': 'VIP 7-Day Retreat ($4,900)',
    'interest': [],
    'preferred-time': 'Mornings',
    'location-type': 'Private Residence',
    'goals': '',
    'injuries': '',
    'how-found': 'Google'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  React.useEffect(() => {
    emailjs.init("FvpMZznqtxDjK8WXR");
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.interest, value]
        : formData.interest.filter(item => item !== value);
      setFormData({ ...formData, 'interest': updatedInterests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    if (!formData['full-name'] || !formData.email) {
      setMessageType('error');
      setSubmitMessage('Please fill in all required fields (Name and Email).');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: 'hello@robenhorstelitewellness.com',
        from_name: formData['full-name'],
        from_email: formData.email,
        phone: formData['phone-number'] || 'Not provided',
        service_tier: formData['service-tier'],
        interests: formData.interest.join(', ') || 'Not specified',
        preferred_time: formData['preferred-time'],
        location_type: formData['location-type'],
        goals: formData.goals || 'Not specified',
        injuries: formData.injuries || 'None',
        how_found: formData['how-found'],
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const response = await emailjs.send(
        'service_d8vjnve',
        'template_maj7w8p',
        templateParams
      );

      if (response.status === 200) {
        setMessageType('success');
        setSubmitMessage('Thank you! Your request has been sent to Timothy. He will get back to you within 24 hours to confirm your retreat dates.');
        setFormData({
          'full-name': '',
          'email': '',
          'phone-number': '',
          'service-tier': 'VIP 7-Day Retreat ($4,900)',
          'interest': [],
          'preferred-time': 'Mornings',
          'location-type': 'Private Residence',
          'goals': '',
          'injuries': '',
          'how-found': 'Google'
        });
        setTimeout(() => {
          setSubmitMessage('');
          setMessageType('');
        }, 6000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessageType('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact Timothy directly at (210) 825-3384.');
    } finally {
      setIsSubmitting(false);
    }
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
            <section className="px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-amber-700 text-xs font-semibold tracking-[0.3em] uppercase">Let's Begin</span>
                  <h1 className="mt-3 text-stone-900 text-4xl sm:text-5xl font-serif font-semibold leading-tight tracking-[-0.02em]">Request Your Retreat</h1>
                  <p className="mt-4 max-w-2xl mx-auto text-stone-600 text-lg font-light leading-relaxed">
                    Tell us a little about yourself and your goals. We'll respond within 24 hours to confirm your dates and design your personalised week.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left Column: What happens next */}
                  <div className="space-y-8">
                    <h2 className="text-stone-900 text-2xl sm:text-3xl font-serif font-semibold leading-tight tracking-[-0.02em]">Your Journey Starts Here: A Clear, Step-by-Step Process</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-[40px_1fr] gap-x-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-700/10 text-amber-700">
                            <span className="material-symbols-outlined">calendar_month</span>
                          </div>
                          <div className="w-[2px] bg-stone-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-stone-900 text-base font-medium leading-normal">Discovery Call</p>
                          <p className="text-stone-600 text-base font-light leading-normal">A 20-minute online consultation to understand your goals, space, and schedule.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-700/10 text-amber-700">
                            <span className="material-symbols-outlined">checklist</span>
                          </div>
                          <div className="w-[2px] bg-stone-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-stone-900 text-base font-medium leading-normal">Personalised Assessment</p>
                          <p className="text-stone-600 text-base font-light leading-normal">Movement screen and lifestyle review to shape your seven-day blueprint.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-700/10 text-amber-700">
                            <span className="material-symbols-outlined">map</span>
                          </div>
                          <div className="w-[2px] bg-stone-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-stone-900 text-base font-medium leading-normal">Custom Retreat Plan</p>
                          <p className="text-stone-600 text-base font-light leading-normal">A written proposal covering training, recovery, breathwork, and massage for each day.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-700/10 text-amber-700">
                            <span className="material-symbols-outlined">credit_card</span>
                          </div>
                          <div className="w-[2px] bg-stone-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-stone-900 text-base font-medium leading-normal">Secure Booking with Goldie</p>
                          <p className="text-stone-600 text-base font-light leading-normal">Card-on-file setup and confirmation of your 7-day appointment block.</p>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-700/10 text-amber-700">
                            <span className="material-symbols-outlined">flag</span>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                          <p className="text-stone-900 text-base font-medium leading-normal">Day 1 — Training Begins</p>
                          <p className="text-stone-600 text-base font-light leading-normal">Timothy arrives at your door. Two hours later, the transformation has begun.</p>
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact Info Box */}
                    <div className="rounded-2xl bg-stone-100 p-6 border border-stone-200">
                      <h3 className="text-stone-900 text-lg font-serif font-semibold mb-3">Prefer to Speak Directly?</h3>
                      <div className="space-y-2 text-stone-600 font-light">
                        <p className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-amber-700">phone</span>
                          <a href="tel:+12108253384" className="hover:text-amber-700 transition-colors">(210) 825-3384</a>
                        </p>
                        <p className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-amber-700">email</span>
                          <span>hello@robenhorstelitewellness.com</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="bg-stone-50 p-8 rounded-2xl shadow-lg border border-stone-200">
                    <h2 className="text-stone-900 text-2xl sm:text-3xl font-serif font-semibold leading-tight tracking-[-0.02em] mb-6">Ready to Take the First Step?</h2>

                    {/* Success/Error Message */}
                    {submitMessage && (
                      <div className={`mb-6 p-4 rounded-xl ${messageType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        <div className="flex items-start">
                          <span className="material-symbols-outlined mr-3 mt-0.5">
                            {messageType === 'success' ? 'check_circle' : 'error'}
                          </span>
                          <span>{submitMessage}</span>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-stone-700" htmlFor="full-name">Full Name *</label>
                          <input
                            className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                            id="full-name"
                            name="full-name"
                            required
                            type="text"
                            value={formData['full-name']}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700" htmlFor="email">Email Address *</label>
                          <input
                            className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="phone-number">Phone Number (Optional)</label>
                        <input
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="phone-number"
                          name="phone-number"
                          type="tel"
                          value={formData['phone-number']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="service-tier">What are you interested in?</label>
                        <select
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="service-tier"
                          name="service-tier"
                          value={formData['service-tier']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>VIP 7-Day Retreat ($4,900)</option>
                          <option>Service Pack ($500)</option>
                          <option>Individual Session ($50–$250)</option>
                          <option>Not sure yet — help me choose</option>
                        </select>
                      </div>

                      <fieldset>
                        <legend className="text-sm font-medium text-stone-700">Which packs or services interest you? (Select all that apply)</legend>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Deep Recovery Pack',
                            'Full-Body Rebuild Pack',
                            'Stress-Proof Pack',
                            'Mobility Mastery Pack',
                            'Athletic Performance Pack',
                            'Not sure yet'
                          ].map((interest, index) => {
                            const value = interest.replace(/\s+/g, '-').toLowerCase();
                            return (
                              <div className="flex items-center" key={index}>
                                <input
                                  className="h-4 w-4 rounded border-stone-300 text-amber-700 focus:ring-amber-700"
                                  id={`interest-${value}`}
                                  name="interest[]"
                                  type="checkbox"
                                  value={interest}
                                  checked={formData.interest.includes(interest)}
                                  onChange={handleInputChange}
                                  disabled={isSubmitting}
                                />
                                <label className="ml-3 text-sm font-light text-stone-600" htmlFor={`interest-${value}`}>{interest}</label>
                              </div>
                            );
                          })}
                        </div>
                      </fieldset>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="preferred-time">Preferred session time</label>
                        <select
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="preferred-time"
                          name="preferred-time"
                          value={formData['preferred-time']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Mornings</option>
                          <option>Afternoons</option>
                          <option>Evenings</option>
                          <option>Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="location-type">Where will the retreat take place?</label>
                        <select
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="location-type"
                          name="location-type"
                          value={formData['location-type']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Private Residence</option>
                          <option>Vacation Rental</option>
                          <option>Yacht</option>
                          <option>Hotel Suite</option>
                          <option>Other / To be discussed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="goals">Tell me about your main goals:</label>
                        <textarea
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="goals"
                          name="goals"
                          rows="3"
                          value={formData.goals}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Recovery from injury, weight loss, mobility, stress reset, event prep..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="injuries">Any injuries or health considerations I should know about? (Optional)</label>
                        <textarea
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="injuries"
                          name="injuries"
                          rows="2"
                          value={formData.injuries}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Knee injury, back pain, asthma..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700" htmlFor="how-found">How did you hear about Robenhorst Elite Wellness?</label>
                        <select
                          className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
                          id="how-found"
                          name="how-found"
                          value={formData['how-found']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Google</option>
                          <option>Social Media</option>
                          <option>Referral</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <button
                          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-semibold text-stone-50 bg-stone-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                              Sending...
                            </>
                          ) : (
                            'Request Your Retreat'
                          )}
                        </button>
                        <p className="mt-2 text-xs text-stone-500 text-center font-light">
                          Your message goes directly to Timothy. Or call (210) 825-3384.
                        </p>
                      </div>
                    </form>
                  </div>
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
                        <a href="tel:+12108253384" className="hover:text-amber-700 transition-colors">(210) 825-3384</a>
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
                    <div className="mt-6">
                      <p className="text-sm text-stone-600 font-light">
                        <strong className="font-medium text-stone-900">Note:</strong> All form submissions go directly to Timothy's inbox. You should receive a response within 24 hours. Retreat bookings are confirmed once your Goldie card-on-file is set up.
                      </p>
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

export default Contact;