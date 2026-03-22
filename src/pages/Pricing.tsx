import React, { useState } from 'react';
import { Check, X, ChevronDown } from 'lucide-react';
import useInView from '../hooks/useInView';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingCards = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      features: [
        '50 transactions/month',
        '10 invoices',
        '25 contacts',
        '20 products',
        'Basic reports',
        '10 voice commands/day',
      ],
      cta: 'Get Started',
      variant: 'outline' as const,
    },
    {
      name: 'Pro',
      price: '₹499',
      period: '/month',
      popular: true,
      features: [
        'Everything in Free',
        'Unlimited transactions',
        'Unlimited invoices',
        'Unlimited contacts & products',
        'All 8 reports',
        'Unlimited voice & chat AI',
        'AI insights',
        'WhatsApp notifications',
        '2 team members',
      ],
      cta: 'Start Free Trial',
      variant: 'primary' as const,
    },
    {
      name: 'Business',
      price: '₹999',
      period: '/month',
      features: [
        'Everything in Pro',
        'Marketing Suite & Banner Designer',
        'Distributor Discovery',
        '5 team members',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      variant: 'outline' as const,
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Transactions',
      features: [
        { free: '50/month', pro: 'Unlimited', business: 'Unlimited' },
      ],
    },
    {
      category: 'Invoicing',
      features: [
        { free: '10/month', pro: 'Unlimited', business: 'Unlimited' },
        { free: true, pro: true, business: true },
      ],
    },
    {
      category: 'Inventory',
      features: [
        { free: '20 products', pro: 'Unlimited', business: 'Unlimited' },
        { free: false, pro: true, business: true },
      ],
    },
    {
      category: 'AI Features',
      features: [
        { free: 'Limited', pro: 'Full', business: 'Full' },
        { free: false, pro: true, business: true },
      ],
    },
    {
      category: 'Marketing',
      features: [
        { free: false, pro: false, business: true },
      ],
    },
    {
      category: 'Team Members',
      features: [
        { free: '1', pro: '2', business: '5' },
      ],
    },
    {
      category: 'Support',
      features: [
        { free: 'Community', pro: 'Email', business: 'Priority+Phone' },
      ],
    },
  ];

  const faqItems = [
    {
      q: 'Can I switch plans?',
      a: 'Yes, upgrade or downgrade anytime. Changes take effect from the next billing cycle.',
    },
    {
      q: 'What happens after the trial?',
      a: 'Your account automatically moves to the Free tier. No charges. Upgrade anytime to Pro or Business.',
    },
    {
      q: 'How does billing work?',
      a: 'Monthly billing via Razorpay. Accept UPI, Card, and Net Banking. Auto-renews each month.',
    },
    {
      q: 'What\'s your refund policy?',
      a: 'Contact us within 7 days of payment for a full refund. No questions asked.',
    },
    {
      q: 'Do you offer annual plans?',
      a: 'Coming soon with 20% discount on annual billing. Sign up for updates.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 section-bg pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Choose your plan
            </h1>
            <p className="text-xl text-zinc-400">
              Start free, upgrade when you grow
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-20">
            {pricingCards.map((card, idx) => (
              <AnimatedSection key={idx}>
                <div className={`rounded-2xl p-8 h-full flex flex-col relative ${
                  card.variant === 'primary'
                    ? 'glass-card border-accent-bright/30 ring-1 ring-accent-bright/20 scale-105'
                    : 'glass-card'
                }`}>
                  {card.popular && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-accent-bright text-black text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <p className="text-xl font-bold text-white">{card.name}</p>
                  <p className="text-4xl font-extrabold mt-2 flex items-baseline">
                    {card.variant === 'primary' ? (
                      <span className="text-accent-bright">{card.price}</span>
                    ) : (
                      <span className="text-white">{card.price}</span>
                    )}
                    <span className="text-sm text-zinc-500 ml-2">{card.period}</span>
                  </p>
                  <div className="border-t border-white/10 my-6" />
                  <ul className="space-y-3 text-sm text-zinc-300 flex-grow mb-6">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={16} className={card.variant === 'primary' ? 'text-accent-bright' : 'text-zinc-500'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://app.bizzsathi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 rounded-xl font-bold transition-all ${
                      card.variant === 'primary'
                        ? 'btn-cta'
                        : 'btn-outline'
                    }`}
                  >
                    {card.cta}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Comparison Table */}
          <AnimatedSection className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-bold text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Free</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((group, idx) => (
                  <React.Fragment key={idx}>
                    <tr className={idx % 2 === 0 ? 'bg-white/5' : ''}>
                      <td colSpan={4} className="py-3 px-4 font-bold text-white">
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature, f_idx) => (
                      <tr key={f_idx} className={idx % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="py-3 px-4 text-zinc-400" />
                        <td className="py-3 px-4 text-center">
                          {typeof feature.free === 'boolean' ? (
                            feature.free ? (
                              <Check size={16} className="mx-auto text-accent-bright" />
                            ) : (
                              <X size={16} className="mx-auto text-zinc-600" />
                            )
                          ) : (
                            <span className="text-zinc-300">{feature.free}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check size={16} className="mx-auto text-accent-bright" />
                            ) : (
                              <X size={16} className="mx-auto text-zinc-600" />
                            )
                          ) : (
                            <span className="text-zinc-300">{feature.pro}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check size={16} className="mx-auto text-accent-bright" />
                            ) : (
                              <X size={16} className="mx-auto text-zinc-600" />
                            )
                          ) : (
                            <span className="text-zinc-300">{feature.business}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Pricing FAQ</h2>
          </AnimatedSection>

          <div>
            {faqItems.map((item, idx) => (
              <AnimatedSection key={idx}>
                <div className="glass-card mb-3">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-4 text-white font-semibold"
                  >
                    {item.q}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFAQ === idx && (
                    <div className="px-4 pb-4 text-sm text-zinc-400">
                      {item.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 section-bg radial-glow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">Ready to start?</h2>
            <p className="text-zinc-400 text-center mt-4">
              Try BizzSathi free for 7 days. No credit card required.
            </p>
            <a
              href="https://app.bizzsathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block px-10 py-4 text-lg font-bold mt-8"
            >
              Start Free Trial →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
