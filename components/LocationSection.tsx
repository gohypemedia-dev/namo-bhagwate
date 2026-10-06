"use client"

import React from "react"
import { MapPin, Navigation, Building2, Phone, Mail, Sparkles } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function LocationSection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4F0] border border-[#075B45]/20 text-[#075B45] font-bold text-xs sm:text-sm uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-[#E97824]" />
            <span>CENTRE LOCATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            Visit <span className="text-[#075B45]">Our Centre</span>
          </h2>
          <p className="text-base sm:text-lg text-[#17352D]/75 font-medium leading-relaxed">
            Conveniently located in DLF Phase 2, Gurgaon with serene studio ambiance.
          </p>
        </div>

        {/* Location Grid: Details Left & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Card */}
          <div className="lg:col-span-5 bg-[#FFFDF7] p-8 sm:p-10 rounded-3xl border border-[#075B45]/15 wellness-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#075B45] text-[#F6E8C8] flex items-center justify-center shadow-md shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-extrabold tracking-widest text-[#E97824]">
                    HEADQUARTERS & STUDIO
                  </p>
                  <h3 className="text-xl font-bold text-[#17352D]">
                    {SITE_CONFIG.location.trustName}
                  </h3>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-2 text-[#17352D] border-l-4 border-[#075B45] pl-4 py-1">
                <p className="font-extrabold text-lg">
                  {SITE_CONFIG.location.building}
                </p>
                <p className="font-bold text-base text-[#075B45]">
                  {SITE_CONFIG.location.trustName}
                </p>
                <p className="font-semibold text-sm text-[#17352D]/80">
                  {SITE_CONFIG.location.area}, {SITE_CONFIG.location.city}
                </p>
              </div>

              {/* Quick Contact Specs */}
              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3 font-semibold text-[#17352D]">
                  <Phone className="w-4 h-4 text-[#075B45] shrink-0" />
                  <span>Call: {SITE_CONFIG.contact.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-3 font-semibold text-[#17352D]">
                  <Mail className="w-4 h-4 text-[#075B45] shrink-0" />
                  <span>Email: {SITE_CONFIG.contact.email}</span>
                </div>
              </div>

            </div>

            {/* Get Directions Button */}
            <div className="pt-4 border-t border-[#075B45]/10">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#075B45] hover:bg-[#E97824] text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-md transition-all group"
              >
                <Navigation className="w-4 h-4 text-[#F6E8C8] group-hover:rotate-45 transition-transform" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 min-h-[380px] rounded-3xl overflow-hidden border border-[#075B45]/15 wellness-shadow bg-gray-100 relative">
            <iframe
              title="Namo Bhagwate Vasudevaya Trust DLF Phase 2 Gurgaon Location Map"
              src={SITE_CONFIG.location.embedMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-[#075B45] shadow-md border border-[#075B45]/15 flex items-center gap-2 pointer-events-none">
              <Sparkles className="w-4 h-4 text-[#E97824]" />
              <span>DLF Phase 2 • Gurgaon Centre</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
