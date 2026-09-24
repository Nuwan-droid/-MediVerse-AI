"use client";

import Link from "next/link";
import { Search, ChevronDown, Menu, X, HeartPulse } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Health Library", href: "/articles" },
    { label: "Tools", href: "#" },
    { label: "AI Assistant", href: "#" },
    { label: "Doctors", href: "#" },
    { label: "Health Goals", href: "#" },
    { label: "News", href: "/news" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="leading-tight">
              <div className="text-[18px] font-extrabold text-blue-950">
                Good for <span className="text-teal-500">Health</span>
              </div>
              <div className="text-[9px] text-slate-400">
                Better Health, A Brighter You.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[12px] font-semibold transition-colors ${
                  link.label === "Home"
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.label}

                {link.label === "Home" && (
                  <span className="absolute -bottom-[24px] left-0 right-0 h-[2px] bg-blue-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* More */}
            <button className="flex items-center gap-1 text-[12px] font-semibold text-slate-700 hover:text-blue-600">
              More
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">

            {/* Search */}
            <button
              aria-label="Search"
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-100"
            >
              <Search className="w-[18px] h-[18px] text-blue-950" />
            </button>

            {/* Sign In */}
            <button className="hidden sm:flex h-9 px-4 rounded-full border border-blue-100 text-blue-600 text-[11px] font-semibold items-center justify-center hover:bg-blue-50">
              Sign In
            </button>

            {/* Get Started */}
            <button className="hidden sm:flex h-9 px-5 rounded-full bg-blue-600 text-white text-[11px] font-semibold items-center justify-center hover:bg-blue-700">
              Get Started
            </button>

            {/* Mobile menu */}
            <button
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-2 px-4 pt-3">
                <button className="flex-1 h-10 rounded-full border border-blue-100 text-blue-600 text-sm font-semibold">
                  Sign In
                </button>

                <button className="flex-1 h-10 rounded-full bg-blue-600 text-white text-sm font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}