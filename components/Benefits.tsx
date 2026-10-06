"use client"

import React from "react"
import {
  HeartPulse,
  Brain,
  Zap,
  Apple,
  Scale,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Improves Physical Health",
      desc: "Build muscle tone, enhance cardiovascular fitness, joint flexibility, and bodily posture.",
      icon: HeartPulse,
      color: "text-red-500 bg-red-50",
    },
    {
      title: "Reduces Stress & Anxiety",
      desc: "Calm your mind with therapeutic meditation, deep breathing, and restorative relaxation.",
      icon: Brain,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Increases Energy & Stamina",
      desc: "Recharge your daily vitality, boost endurance, and combat chronic fatigue.",
      icon: Zap,
      color: "text-[#E97824] bg-orange-50",
    },
    {
      title: "Guidance by Dietitians",
      desc: "Receive expert nutrition advice, dietary corrections, and wholesome Sattvic meal guidance.",
      icon: Apple,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Weight Management",
      desc: "Achieve healthy, sustainable weight loss and body transformation through active movement.",
      icon: Scale,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Hormonal Balance",
      desc: "Support endocrine health, PMS relief, thyroid balance, and natural metabolic harmony.",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Supportive Women Community",
      desc: "Connect with like-minded women in a safe, encouraging, and peaceful environment.",
      icon: Users,
      color: "text-purple-600 bg-purple-50",
    },
  ]

  return (
    <section id="benefits" className="py-12 md:py-16 bg-[#FFFDF7] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F6E8C8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D8AC4B]/40 text-[#075B45] font-bold text-xs sm:text-sm tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#E97824]" />
            <span>TRANSFORMATIVE REASONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            More Than Fitness. <br />
            <span className="text-[#075B45]">Complete Wellness.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#17352D]/75 font-medium leading-relaxed">
            Our multi-dimensional approach ensures every aspect of your physical health, mental peace, and daily lifestyle thrives.
          </p>
        </div>

        {/* Benefits Grid - 7 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const IconComp = item.icon
            return (
              <div
                key={index}
                className={`wellness-card p-6 rounded-3xl bg-white border border-[#075B45]/10 flex flex-col justify-between group hover:border-[#075B45]/30 ${
                  index === 6 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#17352D] group-hover:text-[#075B45] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#17352D]/75 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#075B45] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Included in Program</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E97824]" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
