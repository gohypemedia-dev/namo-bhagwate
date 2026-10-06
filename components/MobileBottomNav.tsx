"use client"

import React from "react"
import { Phone, MessageSquare, Send } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function MobileBottomNav() {
  const scrollToForm = () => {
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappDefaultMessage
  )}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#075B45]/15 p-2 md:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EBF4F0] text-[#075B45] font-bold text-xs active:bg-[#075B45] active:text-white transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-bold text-xs active:bg-[#20bd5a] transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 fill-current" />
          <span>WHATSAPP</span>
        </a>

        {/* Apply Now Button */}
        <button
          onClick={scrollToForm}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#E97824] text-white font-black text-xs active:bg-[#D46615] transition-colors shadow-sm"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>APPLY NOW</span>
        </button>
      </div>
    </div>
  )
}
