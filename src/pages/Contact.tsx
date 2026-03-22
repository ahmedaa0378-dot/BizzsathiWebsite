import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import useInView from '../hooks/useInView';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#050505] pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Get in touch
            </h1>
            <p className="text-xl text-zinc-400">
              We'd love to hear from you
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="glass-card p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-bright transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-bright transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-bright transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-bright transition-colors"
                    >
                      <option value="General" className="bg-[#050505]">General Inquiry</option>
                      <option value="Sales" className="bg-[#050505]">Sales</option>
                      <option value="Support" className="bg-[#050505]">Support</option>
                      <option value="Partnership" className="bg-[#050505]">Partnership</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-bright transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button type="submit" className="btn-cta w-full">
                    Send Message
                  </button>
                  <p className="text-sm text-zinc-400 text-center">
                    We'll respond within 24-48 hours
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email Card */}
              <AnimatedSection>
                <div className="glass-card p-8 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-bright/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent-bright" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:support@bizzsathi.com" 
                        className="text-accent-bright hover:text-accent-dark transition-colors"
                      >
                        support@bizzsathi.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* WhatsApp Card */}
              <AnimatedSection>
                <div className="glass-card p-8 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-bright/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-accent-bright" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919999999999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-bright hover:text-accent-dark transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* App Support Card */}
              <AnimatedSection>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="font-bold text-white text-lg mb-3">In-App Support</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    For app-related issues, visit Help & Support inside the app → More → Help & Support
                  </p>
                  <a 
                    href="https://app.bizzsathi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-bright hover:text-accent-dark transition-colors font-semibold text-sm"
                  >
                    Open App →
                  </a>
                </div>
              </AnimatedSection>

              {/* Office Hours */}
              <AnimatedSection>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="font-bold text-white text-lg mb-3">Office Hours</h3>
                  <p className="text-zinc-400 text-sm">
                    Monday - Friday: 9 AM - 6 PM IST<br />
                    Saturday & Sunday: Email only
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#050505] radial-glow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">
              Still have questions?
            </h2>
            <p className="text-zinc-400 mt-4">
              Visit our FAQ section or try BizzSathi free to see it in action
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
