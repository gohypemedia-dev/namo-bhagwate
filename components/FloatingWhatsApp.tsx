"use client"

import React, { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(true)

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappDefaultMessage
  )}`

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end group">
      
      {/* Tooltip Prompt */}
      {tooltipOpen && (
        <div className="mb-2 bg-white text-[#17352D] text-xs font-bold px-3.5 py-2.5 rounded-2xl shadow-xl border border-[#075B45]/15 flex items-center gap-2 max-w-xs animate-bounce">
          <span>Need help? Chat with our Wellness Coordinator!</span>
          <button
            onClick={() => setTooltipOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Enquire on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  )
}
