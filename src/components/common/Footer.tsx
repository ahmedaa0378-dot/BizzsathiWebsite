import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[22px] font-extrabold tracking-tight">Bizz<span className="text-[#c8ee44]">Sathi</span></span>
            </div>
            <p className="text-zinc-400 text-sm">Your AI Business Partner</p>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-zinc-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zinc-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://app.bizzsathi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-zinc-400">Blog (coming soon)</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://app.bizzsathi.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://app.bizzsathi.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          <p>© {currentYear} BizzSathi. All rights reserved. • Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
