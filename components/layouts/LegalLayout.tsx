'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/common/Navbar';
import { ChevronDown, FileText, Shield, Cookie, Building2 } from 'lucide-react';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

const legalNavItems = [
  {
    name: 'Privacy Policy',
    href: '/legal/privacy-policy',
    icon: Shield,
  },
  {
    name: 'Terms of Use',
    href: '/legal/terms-of-use',
    icon: FileText,
  },
  {
    name: 'Cookie Policy',
    href: '/legal/cookie-policy',
    icon: Cookie,
  },
  {
    name: 'Corporate Disclosure',
    href: '/legal/disclosure',
    icon: Building2,
  },
];

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  children,
  title,
  lastUpdated,
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPage = legalNavItems.find((item) => item.href === pathname);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-[#F5F1E8] pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Legal & Compliance
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-grey mt-4 text-sm">
                Last updated: {lastUpdated}
              </p>
            )}
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Mobile Navigation Dropdown */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between bg-[#F5F1E8] px-4 py-3 rounded-xl text-black font-medium"
            >
              <span className="flex items-center gap-2">
                {currentPage && <currentPage.icon className="w-5 h-5 text-primary" />}
                {currentPage?.name || 'Navigate'}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 bg-white border border-grey/20 rounded-xl shadow-lg overflow-hidden"
              >
                {legalNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'text-grey hover:bg-grey/5 hover:text-black'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <nav className="bg-[#F5F1E8] rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-grey uppercase tracking-wider mb-4">
                  Legal Documents
                </h3>
                <ul className="space-y-1">
                  {legalNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-primary text-white shadow-md'
                              : 'text-grey hover:bg-white hover:text-black hover:shadow-sm'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Help Card */}
              <div className="mt-6 bg-black rounded-2xl p-6 text-white">
                <h4 className="font-heading font-bold mb-2">Need Help?</h4>
                <p className="text-white/70 text-sm mb-4">
                  If you have questions about our policies, please contact us.
                </p>
                <a
                  href="mailto:legal@wisoryglobal.com"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  legal@wisoryglobal.com
                </a>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <motion.article
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-black prose-headings:font-bold prose-p:text-grey prose-p:leading-relaxed prose-li:text-grey prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-black">
              {children}
            </div>
          </motion.article>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#F5F1E8] py-8 mt-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-grey">
            <p>&copy; {new Date().getFullYear()} Wisory Global. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {legalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
