"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, MessageSquare, Heart } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#17352D] text-white pt-16 pb-24 md:pb-12 border-t border-[#075B45]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D8AC4B] shadow-md bg-white shrink-0">
                <Image
                  src="/images/logo_icon.jpg"
                  alt={SITE_CONFIG.trustName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight">
                  {SITE_CONFIG.trustName}
                </h3>
                <p className="text-xs text-[#F6E8C8] font-semibold tracking-wide">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/75 font-medium leading-relaxed max-w-md">
              Dedicated to promoting physical health, mental calm and holistic wellness for women through Yoga, Aerobics, Meditation and Sattvic lifestyle guidance.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-[#F6E8C8] bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
              <Heart className="w-4 h-4 text-[#E97824]" />
              <span>Women Wellness & Community Center</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#D8AC4B]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-white/80">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="hover:text-[#E97824] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")} className="hover:text-[#E97824] transition-colors">
                  Programs (Yoga, Aerobics, Meditation)
                </a>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => handleNavClick(e, "#benefits")} className="hover:text-[#E97824] transition-colors">
                  Wellness Benefits
                </a>
              </li>
              <li>
                <a href="#timings" onClick={(e) => handleNavClick(e, "#timings")} className="hover:text-[#E97824] transition-colors">
                  Class Timings & Batches
                </a>
              </li>
              <li>
                <a href="#application-form" onClick={(e) => handleNavClick(e, "#application-form")} className="hover:text-[#E97824] transition-colors">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-[#E97824] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Centre Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#D8AC4B]">
              Centre Address
            </h4>
            
            <div className="space-y-3 text-sm text-white/80 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E97824] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.location.building}<br />
                  {SITE_CONFIG.location.trustName}<br />
                  {SITE_CONFIG.location.area}, {SITE_CONFIG.location.city}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D8AC4B] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phoneCallable}`} className="hover:text-white transition-colors">
                  Phone: {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappRawNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D8AC4B] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 font-semibold gap-4 text-center sm:text-left">
          <p>© Namo Bhagwate Vasudevaya Trust. All Rights Reserved.</p>
          <p>Yoga • Aerobics • Meditation • Nutrition Guidance</p>
        </div>
      </div>
    </footer>
  )
}
