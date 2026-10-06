"use client"

import React from "react"
import Image from "next/image"
import { Award, Sparkles, Heart, CheckCircle2 } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function TrainerProfile() {
  const scrollToForm = () => {
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="trainer" className="py-12 md:py-16 bg-[#FFFDF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D8AC4B]/40 text-[#075B45] font-bold text-xs sm:text-sm uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#E97824]" />
            <span>EXPERT INSTRUCTOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            Meet Your <span className="text-[#075B45]">Wellness Trainer</span>
          </h2>
        </div>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#075B45]/15 wellness-shadow-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Trainer Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-[#F6E8C8] shadow-xl group">
                <Image
                  src="/images/trainer_anu.jpg"
                  alt={`${SITE_CONFIG.trainerName} - ${SITE_CONFIG.trainerTitle}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075B45]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#F6E8C8] font-bold">
                    Lead Wellness Faculty
                  </span>
                  <h4 className="text-xl font-bold">{SITE_CONFIG.trainerName}</h4>
                </div>
              </div>
            </div>

            {/* Trainer Bio & Philosophy */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div>
                <div className="inline-block text-xs font-bold text-[#E97824] uppercase tracking-wider mb-1">
                  <span>Namo Bhagwate Vasudevaya Trust</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#17352D]">
                  {SITE_CONFIG.trainerName}
                </h3>
                <p className="text-base font-bold text-[#075B45] mt-0.5">
                  {SITE_CONFIG.trainerTitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#17352D]/85 font-medium leading-relaxed italic border-l-4 border-[#E97824] pl-4 py-1">
                “Helping women build healthier, stronger and more balanced lifestyles through movement, mindfulness and holistic wellness practices.”
              </p>

              {/* Core Pillars */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-extrabold uppercase text-[#075B45] tracking-widest">
                  SPECIALISATION & FOCUS AREAS:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#17352D]">
                    <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                    <span>Yoga & Postural Alignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#17352D]">
                    <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                    <span>Aerobics & Cardiovascular Fit</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#17352D]">
                    <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                    <span>Mindfulness & Meditation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#17352D]">
                    <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                    <span>Women Holistic Nutrition</span>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 bg-[#075B45] hover:bg-[#E97824] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <Heart className="w-4 h-4 text-[#F6E8C8]" />
                  <span>Start Guided Training With Anu Kaushik</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
