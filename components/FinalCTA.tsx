"use client"

import React from "react"
import { Send, MessageSquare, Sparkles, Heart } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function FinalCTA() {
  const scrollToForm = () => {
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#075B45] via-[#054836] to-[#17352D] text-white relative overflow-hidden">
      {/* Soft Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8AC4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E97824]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F6E8C8] text-xs sm:text-sm font-bold uppercase tracking-widest mx-auto">
          <span>TRANSFORM YOUR LIFE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Your Healthier Life <br className="hidden sm:inline" />
          <span className="text-[#F6E8C8]">Starts Today</span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Join our supportive wellness community and take your first step towards better health, fitness and inner balance.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E97824] hover:bg-[#D46615] text-white font-black text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-5 h-5" />
            <span>APPLY NOW</span>
          </button>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-8 py-4 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Tagline */}
        <p className="text-xs text-white/70 font-semibold tracking-wide pt-4">
          Namo Bhagwate Vasudevaya Trust • Gurgaon Centre
        </p>

      </div>
    </section>
  )
}
