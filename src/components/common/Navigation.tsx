import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: '📲 Install App', path: '#download' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 flex-shrink-0">
          <span className="text-[22px] font-extrabold tracking-tight">Bizz<span className="text-[#c8ee44]">Sathi</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.label === '📲 Install App') {
              return (
                <a
                  key={item.path}
                  href={location.pathname === '/' ? '#download' : 'https://app.bizzsathi.com'}
                  target={location.pathname === '/' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium transition-colors text-zinc-400 hover:text-white"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium transition-colors"
              >
                <span className={`${isActive(item.path) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                  {item.label}
                </span>
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c8ee44]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href="https://app.bizzsathi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Start Free Trial →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 pb-20">
          {navItems.map((item) => {
            if (item.label === '📲 Install App') {
              return (
                <a
                  key={item.path}
                  href={location.pathname === '/' ? '#download' : 'https://app.bizzsathi.com'}
                  target={location.pathname === '/' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium transition-colors text-zinc-400"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.path) ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://app.bizzsathi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Start Free Trial →
          </a>
        </div>
      )}
    </nav>
  );
}
