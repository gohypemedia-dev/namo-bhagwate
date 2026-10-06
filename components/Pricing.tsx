"use client"

import React from "react"
import { CheckCircle2, Sparkles, Shield, ArrowRight, Award } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function Pricing() {
  const scrollToForm = () => {
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4F0] border border-[#075B45]/20 text-[#075B45] font-bold text-xs sm:text-sm uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#E97824]" />
            <span>TRANSPARENT MEMBERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            Invest in <span className="text-[#075B45]">Your Health</span>
          </h2>
          <p className="text-base sm:text-lg text-[#17352D]/75 font-medium leading-relaxed">
            All-inclusive holistic fitness & wellness package tailored for women.
          </p>
        </div>

        {/* Single Highlighted Premium Membership Card */}
        <div className="max-w-[1240px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#075B45] to-[#17352D] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border-4 border-[#D8AC4B]/50 transform hover:-translate-y-1 transition-transform duration-300">
            
            {/* Top Ribbon Badge */}
            <div className="absolute top-0 right-0 bg-[#E97824] text-white text-xs font-black px-6 py-2 rounded-bl-2xl uppercase tracking-wider shadow-md">
              Most Popular Plan
            </div>

            <div className="space-y-5 lg:space-y-6">
              {/* Header Info */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#F6E8C8] font-bold">
                  COMPLETE WELLNESS PACKAGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Monthly Membership
                </h3>
              </div>

              {/* Price Display */}
              <div className="p-4 sm:p-5 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#F6E8C8]">
                      {SITE_CONFIG.pricing.monthlyFeeDisplay}
                    </span>
                    <span className="text-sm font-semibold text-white/80">
                      / {SITE_CONFIG.pricing.period}
                    </span>
                  </div>
                  <p className="text-xs text-white/80 font-medium mt-0.5">
                    {SITE_CONFIG.pricing.frequency} • {SITE_CONFIG.pricing.batchChoice}
                  </p>
                </div>

                <div className="bg-[#D8AC4B] text-[#17352D] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                  Full Guidance
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <p className="text-xs uppercase font-extrabold text-[#F6E8C8] tracking-widest">
                  WHAT IS INCLUDED IN YOUR MEMBERSHIP:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {SITE_CONFIG.pricing.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E97824] text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-white/95">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E97824] hover:bg-[#D46615] text-white font-bold text-base py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform active:scale-95 group"
                >
                  <span>JOIN THE WELLNESS PROGRAM</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-white/70 pt-0">
                <Shield className="w-4 h-4 text-[#D8AC4B]" />
                <span>Namo Bhagwate Vasudevaya Trust Certified Center</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
