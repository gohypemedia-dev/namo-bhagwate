"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Phone, Sparkles } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Programs", href: "#programs" },
    { name: "Benefits", href: "#benefits" },
    { name: "Timings", href: "#timings" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFDF7]/95 backdrop-blur-md shadow-md py-3 border-b border-[#075B45]/10"
          : "bg-[#FFFDF7]/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D8AC4B] shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo_icon.jpg"
                alt={SITE_CONFIG.trustName}
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#075B45] group-hover:text-[#E97824] transition-colors">
              {SITE_CONFIG.trustName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-[#17352D] hover:text-[#E97824] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E97824] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#application-form"
              onClick={(e) => handleNavClick(e, "#application-form")}
              className="inline-flex items-center justify-center bg-[#E97824] hover:bg-[#D46615] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#EBF4F0] text-[#075B45] hover:bg-[#075B45] hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-[#075B45]/10 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fade-up">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-base font-semibold text-[#17352D] hover:text-[#075B45] hover:bg-[#EBF4F0] px-4 py-3 rounded-xl transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#D8AC4B]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-200/60 flex flex-col gap-2">
            <a
              href="#application-form"
              onClick={(e) => handleNavClick(e, "#application-form")}
              className="flex items-center justify-center gap-2 bg-[#E97824] text-white font-bold text-center py-3.5 rounded-xl shadow-md active:scale-95 transition-all text-base"
            >
              <Sparkles className="w-5 h-5" />
              Join Wellness Program
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
