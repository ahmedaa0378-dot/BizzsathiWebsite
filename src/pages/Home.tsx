import React, { useState } from 'react';
import { ChevronDown, BarChart3, FileText, Package, Mic, MessageCircle, Smartphone, Star, UserPlus, Store, Rocket, Check } from 'lucide-react';
import useInView from '../hooks/useInView';

// Animated section component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

// Section 1: Hero
function HeroSection() {
  return (
    <section className="relative min-h-screen hero-bg flex items-center pt-20 pb-20 lg:py-0">
      <div className="absolute top-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8ee44]/40 to-transparent z-40" />
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <AnimatedSection>
            <h1 className="text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Manage Your Business <br />
              with <span className="text-accent-bright">AI</span>
            </h1>
            <p className="text-lg text-zinc-400 mt-6 max-w-lg leading-relaxed">
              Voice-powered accounting, GST invoicing, inventory management, and AI insights — built for India's 63 million MSMEs.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.bizzsathi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block text-center"
              >
                Start Free Trial →
              </a>
              <a href="/features" className="btn-outline inline-block text-center">
                See Features
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-zinc-600 mt-6">
              7-day free trial • No credit card required • Made in India 🇮🇳
            </p>
          </AnimatedSection>

          {/* Right Side - Phone Mockup */}
          <AnimatedSection className="hidden lg:flex justify-center">
            <div className="w-80 h-[500px] rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center relative overflow-hidden shadow-[0_0_120px_rgba(200,238,68,0.2)]">
              <div className="text-center">
                <p className="text-zinc-400 font-medium">BizzSathi Dashboard</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Section 2: Social Proof
function SocialProofSection() {
  const stats = [
    { label: '500+ Businesses', value: '500+' },
    { label: '₹10Cr+ Tracked', value: '₹10Cr+' },
    { label: '50,000+ Invoices', value: '50K+' },
    { label: '4.8★ Rating', value: '4.8★' },
  ];

  return (
    <section className="py-16 section-bg-alt border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm text-zinc-500">Trusted by MSMEs across India</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card px-6 py-3 text-center">
                <p className="text-sm font-semibold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Section 3: Key Features
function KeyFeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      color: 'accent',
      title: 'Smart Dashboard',
      desc: 'Real-time income, expense, and profit tracking with period comparisons',
    },
    {
      icon: FileText,
      color: 'accent',
      title: 'GST Invoicing',
      desc: 'Professional invoices with automatic CGST/SGST/IGST calculation and PDF export',
    },
    {
      icon: Package,
      color: 'accent',
      title: 'Inventory Management',
      desc: 'Track stock levels, get low-stock alerts, manage products effortlessly',
    },
    {
      icon: Mic,
      color: 'accent',
      title: 'Voice AI',
      desc: 'Speak in Hindi or English to log transactions, create invoices, check reports',
    },
    {
      icon: MessageCircle,
      color: 'accent',
      title: 'AI Chatbot',
      desc: 'Ask questions, get business insights, take actions through natural conversation',
    },
    {
      icon: Smartphone,
      color: 'accent',
      title: 'WhatsApp Integration',
      desc: 'Daily summaries, payment reminders, and notifications on WhatsApp',
    },
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Everything your business needs</h2>
          <p className="text-zinc-400 text-center mt-3">From daily accounting to AI-powered insights</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={idx}>
                <div className="glass-card p-8 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#c8ee44]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[#c8ee44]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mt-4">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2">{feature.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Section 4: AI Powered
function AIPoweredSection() {
  return (
    <section className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">AI that understands your business ✨</h2>
          <p className="text-zinc-400 text-center mt-3">Not just another accounting app — BizzSathi thinks with you</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Feature Blocks */}
          <div>
            <AnimatedSection className="border-l-2 border-accent-bright pl-4 mb-8">
              <p className="font-bold text-white">Voice-First Design</p>
              <p className="text-sm text-zinc-400 mt-1">
                Say 'sale 500 cash' and it's logged. No typing needed. Works in Hindi, Telugu, Tamil, Gujarati.
              </p>
            </AnimatedSection>

            <AnimatedSection className="border-l-2 border-accent-bright pl-4 mb-8">
              <p className="font-bold text-white">Smart Chatbot</p>
              <p className="text-sm text-zinc-400 mt-1">
                Ask 'aaj ka profit?' and get instant answers from your real business data.
              </p>
            </AnimatedSection>

            <AnimatedSection className="border-l-2 border-accent-bright pl-4">
              <p className="font-bold text-white">AI Insights</p>
              <p className="text-sm text-zinc-400 mt-1">
                Get alerts like 'Transport costs up 35%' and 'Stock khatam ho gaya' automatically.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Chat UI */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6 max-w-sm mx-auto lg:mx-0">
              {/* User Message */}
              <div className="flex justify-end mb-4">
                <div className="bg-accent-bright text-black rounded-2xl rounded-tr-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm">sale 500</p>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex justify-start mb-4">
                <div className="glass-card px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-white">Rs 500 sale log karoon? Cash mein?</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end mb-4">
                <div className="bg-accent-bright text-black rounded-2xl rounded-tr-md px-4 py-2 max-w-[80%]">
                  <p className="text-sm">haan</p>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex justify-start">
                <div className="glass-card px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-white">✓ Rs 500 income logged! Aaj ka total: ₹2,500</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Section 5: How It Works
function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      desc: 'Create your account with phone or email. No paperwork.',
    },
    {
      icon: Store,
      title: 'Set Up Business',
      desc: 'Enter business name, type, and location. We customize everything.',
    },
    {
      icon: Rocket,
      title: 'Start Managing',
      desc: 'Log sales, create invoices, track stock. Your AI assistant is ready.',
    },
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Get started in 2 minutes</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[8.33%] right-[8.33%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={idx} className="text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent-bright text-black font-bold text-lg flex items-center justify-center mx-auto">
                  {idx + 1}
                </div>
                <Icon className="text-accent-bright mt-4 mx-auto" size={24} />
                <h3 className="font-bold text-white text-lg mt-3">{step.title}</h3>
                <p className="text-sm text-slate-300 mt-2 max-w-[250px] mx-auto">{step.desc}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Section 6: Pricing
function PricingSection() {
  return (
    <section className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-white text-center">Simple, transparent pricing</h2>
          <p className="text-zinc-400 text-center mt-3">Start free, upgrade when you grow</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Free Card */}
          <AnimatedSection>
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
              <p className="text-xl font-bold text-white">Free</p>
              <p className="text-4xl font-extrabold text-white mt-2">
                ₹0<span className="text-sm text-zinc-500">/month</span>
              </p>
              <div className="border-t border-white/10 my-6" />
              <ul className="space-y-3 text-sm text-zinc-300 flex-grow">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> 50 transactions/month
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> 10 invoices
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> 25 contacts
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> 20 products
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> Basic reports
                </li>
              </ul>
              <a href="https://app.bizzsathi.com" target="_blank" rel="noopener noreferrer" className="btn-outline w-full mt-6 text-center">
                Get Started
              </a>
            </div>
          </AnimatedSection>

          {/* Pro Card */}
          <AnimatedSection>
            <div className="glass-card p-8 rounded-2xl border-accent-bright/30 ring-1 ring-accent-bright/20 scale-105 h-full flex flex-col relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-accent-bright text-black text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <p className="text-xl font-bold text-white">Pro</p>
              <p className="text-4xl font-extrabold text-accent-bright mt-2">
                ₹499<span className="text-sm text-zinc-500">/month</span>
              </p>
              <div className="border-t border-white/10 my-6" />
              <ul className="space-y-3 text-sm text-zinc-300 flex-grow">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-accent-bright" /> Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-accent-bright" /> Unlimited transactions
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-accent-bright" /> Unlimited invoices
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-accent-bright" /> All 8 reports
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-accent-bright" /> AI chatbot & Voice
                </li>
              </ul>
              <a href="https://app.bizzsathi.com" target="_blank" rel="noopener noreferrer" className="btn-cta w-full mt-6 text-center">
                Start Free Trial
              </a>
            </div>
          </AnimatedSection>

          {/* Business Card */}
          <AnimatedSection>
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
              <p className="text-xl font-bold text-white">Business</p>
              <p className="text-4xl font-extrabold text-white mt-2">
                ₹999<span className="text-sm text-zinc-500">/month</span>
              </p>
              <div className="border-t border-white/10 my-6" />
              <ul className="space-y-3 text-sm text-zinc-300 flex-grow">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> Marketing Suite
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> Distributor Discovery
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> 5 team members
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-zinc-500" /> Priority support
                </li>
              </ul>
              <a href="https://app.bizzsathi.com" target="_blank" rel="noopener noreferrer" className="btn-outline w-full mt-6 text-center">
                Start Free Trial
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Section 7: Testimonials
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "BizzSathi ne mera kaam aasan kar diya. Pehle notebook mein likhta tha, ab sab phone se.",
      name: 'Rajesh Kumar',
      business: 'Kumar General Store, Jaipur',
    },
    {
      quote: 'Voice feature is amazing! I just say "sale 500" and it\'s done. No typing for a busy shop owner.',
      name: 'Priya Sharma',
      business: 'Sharma Textiles, Surat',
    },
    {
      quote: 'GST invoice feature saved me from hiring a CA for basic invoicing. Very easy to use.',
      name: 'Mohammed Farhan',
      business: 'Farhan Electronics, Hyderabad',
    },
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Loved by business owners</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <AnimatedSection key={idx}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex gap-1">                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4 italic leading-relaxed flex-grow">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-300">{testimonial.business}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 8: FAQ
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is BizzSathi?',
      a: 'AI-powered business management app for Indian MSMEs. Track income/expenses, create GST invoices, manage inventory, get AI insights — all from your phone.',
    },
    {
      q: 'Is BizzSathi free?',
      a: 'Yes! Free plan has 50 tx/month, 10 invoices. All new users get 7-day free Pro trial. No credit card needed.',
    },
    {
      q: 'Does it work in Hindi?',
      a: 'Yes! Supports English, Hindi, Telugu, Tamil, Gujarati. Voice and chatbot understand Hindi/Hinglish naturally.',
    },
    {
      q: 'Is my data safe?',
      a: 'Stored securely on servers in India (Mumbai) with encryption. Each user sees only their own data. We never sell your information.',
    },
    {
      q: 'Can I create GST invoices?',
      a: 'Yes. Auto-calculates CGST/SGST/IGST. Download as PDF, share via WhatsApp.',
    },
    {
      q: 'Does it work offline?',
      a: 'Works best with internet. Offline mode coming soon. Very fast on slow connections.',
    },
    {
      q: 'How is it different from Khatabook/Vyapar?',
      a: 'Voice-first, AI-powered. Speak to manage business. AI chatbot answers from real data. Marketing tools and distributor discovery others don\'t have.',
    },
    {
      q: 'How do I get support?',
      a: 'In-app Help & Support with ticket system, AI chatbot, WhatsApp support.',
    },
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-white text-center">Frequently asked questions</h2>
        </AnimatedSection>

        <div>
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx}>
              <div className="glass-card mb-3">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-4 text-white font-semibold"
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIdx === idx && (
                  <div className="px-4 pb-4 text-sm text-zinc-400">
                    {faq.a}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 8.5: Download App
function DownloadAppSection() {
  return (
    <section id="download" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-white">Install BizzSathi on your phone</h2>
          <p className="text-zinc-400 mt-3">No Play Store needed. Install directly from your browser in 10 seconds.</p>

          <div className="mt-12 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Android */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">🤖 Android</h3>
                <ol className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-accent-bright font-bold mr-2">1.</span>Open app.bizzsathi.com in Chrome</li>
                  <li><span className="text-accent-bright font-bold mr-2">2.</span>Tap ⋮ menu → "Install app"</li>
                  <li><span className="text-accent-bright font-bold mr-2">3.</span>Tap Install — done!</li>
                </ol>
                <a href="https://app.bizzsathi.com" target="_blank" rel="noopener noreferrer" className="btn-cta inline-block mt-6">Open BizzSathi →</a>
              </div>

              {/* iPhone */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4"> IOS/iPhone</h3>
                <ol className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-accent-bright font-bold mr-2">1.</span>Open app.bizzsathi.com in Safari</li>
                  <li><span className="text-accent-bright font-bold mr-2">2.</span>Tap Share icon → "Add to Home Screen"</li>
                  <li><span className="text-accent-bright font-bold mr-2">3.</span>Tap Add — done!</li>
                </ol>
                <a href="https://app.bizzsathi.com" target="_blank" rel="noopener noreferrer" className="btn-cta inline-block mt-6">Open BizzSathi →</a>
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-600 mt-6">Works offline • Updates automatically • No storage wasted</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Section 9: Final CTA
function FinalCTASection() {
  return (
    <section className="py-20 bg-[#050505] radial-glow">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-white">Ready to grow your business?</h2>
          <p className="text-zinc-400 text-center mt-4">
            Join thousands of Indian business owners managing smarter with AI.
          </p>

          <a
            href="https://app.bizzsathi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block px-10 py-4 text-lg font-bold mt-8"
          >
            Start Your Free Trial →
          </a>

          <p className="text-sm text-zinc-600 mt-4">Free forever plan available • No credit card needed</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <KeyFeaturesSection />
      <AIPoweredSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <DownloadAppSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
