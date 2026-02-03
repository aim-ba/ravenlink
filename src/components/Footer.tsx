import { Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid - 3 Columns */}
        <div className="grid grid-cols-3 gap-12">

          {/* LEFT COLUMN - Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/RAVEN_LOGOS/RavenMountains_V1.png"
                alt="Raven Logo"
                className="h-32 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Facilitating meaningful Indigenous engagement and transparent ESG reporting
              for major infrastructure projects.
            </p>
            <p className="text-muted-foreground/70 text-xs">
              Powered by AiM Land and Environment
            </p>
          </div>

          {/* MIDDLE COLUMN - Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/opportunities"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  About Raven
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN - Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:lisah.peterson@aimlandandenviro.ca"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  lisah.peterson@aimlandandenviro.ca
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">AiM Land and Environment</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Indigenous engagement and ESG solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Separator className="mt-8" />

        {/* Bottom Bar */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AiM Land and Environment. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Indigenous Opportunities & Contracting System (Raven)
          </p>
        </div>
      </div>
    </footer>
  );
}
