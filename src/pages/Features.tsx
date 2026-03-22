import { BarChart3, FileText, Package, Mic, Megaphone, Users, Check } from 'lucide-react';
import useInView from '../hooks/useInView';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

function FeatureGroup({
  icon: Icon,
  title,
  description,
  features,
  isAlternate,
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  isAlternate: boolean;
}) {
  const bgClass = isAlternate ? 'section-bg' : 'section-bg-alt';
  const textClass = 'text-white';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isAlternate ? '' : ''}`}>
          {/* Text Side */}
          <AnimatedSection className={isAlternate ? '' : 'lg:order-2'}>
            <div className="flex items-center gap-3 mb-4">
              <Icon className="text-accent-bright" size={32} />
              <h2 className={`text-3xl font-bold ${textClass}`}>{title}</h2>
            </div>
            <p className="text-zinc-300" >
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300">
                  <Check size={20} className="flex-shrink-0 mt-0.5 text-accent-bright" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Mockup Side */}
          <AnimatedSection className={isAlternate ? '' : 'lg:order-1'}>
            <div className="w-full h-80 glass-card flex items-center justify-center">
              <p className="text-zinc-400">Feature Preview</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 section-bg pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Powerful features for every business
            </h1>
            <p className="text-xl text-zinc-400">
              17 modules designed for Indian MSMEs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Groups */}
      <FeatureGroup
        icon={BarChart3}
        title="Financial Management"
        description="Complete financial overview at your fingertips with real-time tracking and insights."
        features={[
          'Real-time dashboard with income/expense summary',
          'Income & expense tracking with custom categories',
          'Cash in hand calculation',
          'Multiple payment methods (Cash/UPI/Card/Bank)',
          'Multi-period comparison and analysis',
        ]}
        isAlternate={false}
      />

      <FeatureGroup
        icon={FileText}
        title="Invoicing & GST"
        description="Professional invoicing with automatic GST calculations for all business types."
        features={[
          'Create all document types (Invoice/Quote/Receipt)',
          'Automatic GST calculation (CGST/SGST/IGST)',
          '3 professional invoice templates',
          'PDF generation and direct download',
          'WhatsApp sharing integration',
          'UPI QR code on invoices',
          'HSN/SAC code support',
        ]}
        isAlternate={true}
      />

      <FeatureGroup
        icon={Package}
        title="Inventory & Stock"
        description="Effortless inventory management with automatic alerts and real-time tracking."
        features={[
          'Complete product catalog management',
          'Stock adjustments (in/out/set)',
          'Automatic low stock alerts',
          'Buy and sell price tracking',
          'Multiple unit management (kg/pcs/ltr)',
        ]}
        isAlternate={false}
      />

      <FeatureGroup
        icon={Mic}
        title="AI & Voice"
        description="Revolutionary voice-powered business management in multiple Indian languages."
        features={[
          'Voice AI in 5 languages (Hindi, English, Telugu, Tamil, Gujarati)',
          'Natural command understanding ("sale 500 cash")',
          'AI chatbot with real business data access',
          'Automated business insights and alerts',
          'Festival and season suggestions',
        ]}
        isAlternate={true}
      />

      <FeatureGroup
        icon={Megaphone}
        title="Marketing & Growth"
        description="Built-in marketing tools to grow your reach and discover new opportunities."
        features={[
          'AI-powered caption generator',
          '5 ready-to-use banner templates',
          'Social media content sharing',
          'Festival calendar and notifications',
          'Distributor discovery with GPS integration',
        ]}
        isAlternate={false}
      />

      <FeatureGroup
        icon={Users}
        title="Team & Reports"
        description="Collaborate with your team and access comprehensive business analytics."
        features={[
          '4 role management (Owner/Manager/Staff/Accountant)',
          '8 comprehensive business reports',
          'PDF and Excel export options',
          'CSV data export for analysis',
          'Multi-language support',
        ]}
        isAlternate={true}
      />

      {/* CTA */}
      <section className="py-20 bg-[#050505] radial-glow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">Experience the power of AI-driven business management</h2>
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
