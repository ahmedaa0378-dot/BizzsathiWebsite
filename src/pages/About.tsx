import React from 'react';
import { Puzzle, Shield, Brain, Heart } from 'lucide-react';
import useInView from '../hooks/useInView';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function About() {
  const values = [
    {
      icon: Puzzle,
      title: 'Simple',
      desc: 'Intuitive design that business owners love',
    },
    {
      icon: Shield,
      title: 'Secure',
      desc: 'Enterprise-grade security for your data',
    },
    {
      icon: Brain,
      title: 'Smart',
      desc: 'AI-powered insights for better decisions',
    },
    {
      icon: Heart,
      title: 'Supportive',
      desc: 'Always here to help you grow',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#050505] pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Built for India's businesses
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xl text-slate-300 leading-relaxed">
              We believe every small business in India deserves access to powerful, AI-driven tools. BizzSathi puts enterprise-grade business management in the hands of every kirana store owner, manufacturer, and service provider.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              63 million MSMEs in India <br />
              still run on paper notebooks. <br />
              They deserve better.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '63M+', label: 'MSMEs in India' },
              { number: '95%', label: "Don't use software" },
              { number: '₹50L Cr+', label: 'MSME GDP contribution' },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} className="text-center glass-card p-8">
                <p className="text-4xl font-extrabold text-accent-bright">{stat.number}</p>
                <p className="text-zinc-400 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Values</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-black" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{value.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{value.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Made in India */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection className="glass-card p-12">
            <h2 className="text-3xl font-bold text-white">
              Proudly built in India, for India 🇮🇳
            </h2>
            <p className="text-zinc-400 mt-6">
              Data stored in Mumbai servers • Compliant with Indian data protection laws
            </p>
            <a
              href="https://app.bizzsathi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block px-10 py-4 text-lg font-bold mt-8"
            >
              Join us today →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-[#050505] radial-glow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">
              Help us reach the next million MSMEs
            </h2>
            <p className="text-zinc-400 mt-4">
              Together, we're building the future of Indian business management
            </p>
            <a href="/contact" className="btn-cta inline-block px-10 py-4 text-lg font-bold mt-8">
              Get in Touch →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
