"use client"

import React from "react"
import Image from "next/image"
import { Check, ArrowRight, Activity, Heart, Sun } from "lucide-react"

export interface ProgramsProps {
  onSelectProgram?: (programName: string) => void
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const programs = [
    {
      id: "yoga",
      title: "YOGA",
      tagline: "STRENGTH • FLEXIBILITY • BALANCE",
      image: "/images/program_yoga.jpg",
      icon: Sun,
      badgeColor: "bg-[#075B45] text-white",
      highlights: [
        "Better Flexibility & Posture",
        "Stronger Body & Core Stability",
        "Inner Balance & Spiritual Harmony",
      ],
      description:
        "Classic posture flows and gentle stretching engineered to tone muscles, enhance spinal mobility, and release deep tension.",
    },
    {
      id: "aerobics",
      title: "AEROBICS",
      tagline: "STAY ACTIVE • STAY FIT",
      image: "/images/program_aerobics.jpg",
      icon: Activity,
      badgeColor: "bg-[#E97824] text-white",
      highlights: [
        "Burn Calories Efficiently",
        "Improve Cardio Stamina",
        "Stay Energized All Day",
      ],
      description:
        "High-energy aerobic rhythmic movement sessions tailored for women to boost cardiovascular health and metabolism.",
    },
    {
      id: "meditation",
      title: "MEDITATION",
      tagline: "PEACEFUL MIND • POSITIVE ENERGY",
      image: "/images/program_meditation.jpg",
      icon: Heart,
      badgeColor: "bg-[#D8AC4B] text-[#17352D]",
      highlights: [
        "Stress-Free Mind & Clarity",
        "Emotional Balance & Resilience",
        "Positive Thinking & Deep Calm",
      ],
      description:
        "Guided mindfulness practices, Pranayama breathwork, and deep relaxation techniques to conquer anxiety and mental fatigue.",
    },
  ]

  const handleProgramClick = (programTitle: string) => {
    if (onSelectProgram) {
      onSelectProgram(programTitle)
    }
    const element = document.querySelector("#application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#EBF4F0] border border-[#075B45]/20 text-[#075B45] font-bold text-xs sm:text-sm tracking-widest uppercase">
            HOLISTIC OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight">
            Find Your Perfect <span className="text-[#075B45]">Wellness Program</span>
          </h2>
          <p className="text-base sm:text-lg text-[#17352D]/75 font-medium leading-relaxed">
            Choose a program designed to strengthen your body, calm your mind and improve your everyday well-being.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const IconComponent = prog.icon
            return (
              <div
                key={prog.id}
                className="wellness-card rounded-3xl overflow-hidden flex flex-col justify-between border border-[#075B45]/15 bg-white group hover:border-[#D8AC4B]"
              >
                <div>
                  {/* Card Image Wrapper */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={prog.image}
                      alt={`${prog.title} Program at Namo Bhagwate Vasudevaya Trust`}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Top Tagline Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${prog.badgeColor} shadow-md`}>
                        {prog.title}
                      </span>
                    </div>

                    {/* Overlay Icon */}
                    <div className="absolute bottom-3 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#075B45] shadow-md">
                      <IconComponent className="w-5 h-5 text-[#075B45]" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#E97824]">
                        {prog.tagline}
                      </p>
                      <h3 className="text-2xl font-bold text-[#17352D] group-hover:text-[#075B45] transition-colors">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#17352D]/80 font-medium leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 pt-2 border-t border-gray-100">
                      {prog.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#17352D]">
                          <div className="w-5 h-5 rounded-full bg-[#EBF4F0] text-[#075B45] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleProgramClick(prog.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#075B45] hover:bg-[#E97824] text-white font-bold text-sm py-3.5 px-5 rounded-2xl shadow-sm hover:shadow-md transition-all group/btn"
                  >
                    <span>Explore {prog.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
