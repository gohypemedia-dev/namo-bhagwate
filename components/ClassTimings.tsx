"use client"

import React from "react"
import { Clock, Calendar, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export interface ClassTimingsProps {
  onSelectBatch?: (batchTime: string) => void
}

export default function ClassTimings({ onSelectBatch }: ClassTimingsProps) {
  const handleBatchReserve = (batchTime: string) => {
    if (onSelectBatch) {
      onSelectBatch(batchTime)
    }
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="timings" className="py-12 md:py-16 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#075B45]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D8AC4B]/40 text-[#075B45] font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Clock className="w-4 h-4 text-[#E97824]" />
            <span>FLEXIBLE SCHEDULES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            Choose a Batch That <span className="text-[#075B45]">Fits Your Lifestyle</span>
          </h2>

          <div className="inline-flex items-center gap-2 bg-[#075B45] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F6E8C8]" />
            <span>1 Hour Each Session</span>
          </div>
        </div>

        {/* 4 Batch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONFIG.batches.map((batch, idx) => (
            <div
              key={batch.id}
              className="wellness-card p-6 rounded-3xl bg-white border-2 border-[#075B45]/15 flex flex-col justify-between group hover:border-[#E97824] transition-all"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EBF4F0] text-[#075B45] uppercase tracking-wider">
                    {batch.name}
                  </span>
                  <span className="text-[11px] font-semibold text-[#17352D]/60 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {batch.period}
                  </span>
                </div>

                {/* Clock Icon & Time */}
                <div className="space-y-2 pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF3E0] text-[#E97824] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#17352D] group-hover:text-[#075B45] transition-colors pt-1">
                    {batch.time}
                  </h3>

                  <p className="text-xs text-[#17352D]/75 font-medium leading-normal">
                    {batch.recommendedFor}
                  </p>
                </div>
              </div>

              {/* Reserve Button for specific batch */}
              <div className="pt-6 border-t border-gray-100 mt-4">
                <button
                  onClick={() => handleBatchReserve(batch.time)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#EBF4F0] hover:bg-[#E97824] text-[#075B45] hover:text-white font-bold text-xs py-3 px-4 rounded-xl transition-all group/btn"
                >
                  <span>Select Batch {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Underneath */}
        <div className="text-center">
          <button
            onClick={() => handleBatchReserve(SITE_CONFIG.batches[0].time)}
            className="inline-flex items-center justify-center gap-2 bg-[#E97824] hover:bg-[#D46615] text-white font-bold text-base px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5" />
            RESERVE YOUR BATCH NOW
          </button>
        </div>

      </div>
    </section>
  )
}
