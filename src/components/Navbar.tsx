"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // State to track if the mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "Articles", href: "/articles" },
    { label: "News", href: "/news" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm" : "bg-white"}`}>
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              <span className="text-blue-400">M</span>ediVerse AI<span className="text-blue-400 text-3xl leading-[0]">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links — hidden below lg */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-sm font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap hover:text-blue-600 hover:underline hover:underline-offset-4 transition-colors ${link.active ? "text-blue-600" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Search icon — always visible */}
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Search className="h-5 w-5 text-slate-600" />
          </button>

          {/* Sign In + Get Started — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" className="rounded-full px-4 xl:px-6 font-bold bg-transparent border-slate-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm">
              Sign In
            </Button>
            <Button className="rounded-full px-4 xl:px-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white text-sm">
              Get Started
            </Button>
          </div>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-slate-700" /> : <Menu className="h-5 w-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-blue-50 hover:text-blue-600 ${link.active ? "text-blue-600 bg-blue-50" : "text-slate-700"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1 flex flex-col sm:hidden gap-2">
            <Button variant="outline" className="w-full rounded-full font-bold bg-transparent border-slate-200 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="w-full rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
