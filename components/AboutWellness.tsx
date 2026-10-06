"use client"

import React from "react"
import Image from "next/image"
import { Sparkles, Heart, Activity, Apple, Users } from "lucide-react"

export default function AboutWellness() {
  const featureCards = [
    {
      id: "health",
      title: "HEALTH GUIDANCE",
      desc: "Blood Pressure, Weight & Overall Wellness",
      image: "/images/feature_health.jpg",
      icon: Activity,
    },
    {
      id: "diet",
      title: "DIET & NUTRITION",
      desc: "Personalised Diet Plans",
      image: "/images/feature_diet.jpg",
      icon: Apple,
    },
    {
      id: "mental",
      title: "MENTAL WELL-BEING",
      desc: "Counselling & Support",
      image: "/images/feature_mental.jpg",
      icon: Users,
    },
    {
      id: "sattvic",
      title: "SATTVIC & BALANCED DIET",
      desc: "For a Healthier Life",
      image: "/images/feature_sattvic.jpg",
      icon: Heart,
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Content Top/Left & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D8AC4B]/40 text-[#075B45] font-bold text-xs sm:text-sm uppercase tracking-wider">
              <span>HOLISTIC LIVING PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight leading-tight">
              Wellness That Goes <span className="text-[#075B45]">Beyond Exercise</span>
            </h2>

            <p className="text-base sm:text-lg text-[#17352D]/80 font-medium leading-relaxed">
              Our wellness program focuses on your complete physical and mental well-being. Along with Yoga, Aerobics and Meditation, members receive guidance for nutrition, lifestyle improvement, stress management and healthy living.
            </p>

            <div className="p-6 rounded-2xl bg-[#FFFDF7] border-l-4 border-[#075B45] shadow-xs space-y-2">
              <p className="font-bold text-[#075B45] text-base">
                Guided by Namo Bhagwate Vasudevaya Trust
              </p>
              <p className="text-xs sm:text-sm text-[#17352D]/80 italic">
                “Bhakti • Seva • Sanskar • Samarpan • Manav Kalyan — Empowering women through healthy, peaceful and purposeful living.”
              </p>
            </div>
          </div>

          {/* Right Side: 4 Feature Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {featureCards.map((card) => {
                const IconComp = card.icon
                return (
                  <div
                    key={card.id}
                    className="wellness-card p-4 sm:p-5 rounded-2xl bg-white border border-[#075B45]/15 flex flex-col justify-between group hover:border-[#E97824]"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={card.image}
                          alt={`${card.title} at Namo Bhagwate Vasudevaya Trust`}
                          fill
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center text-[#075B45] shadow-xs">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-[#075B45] tracking-wider uppercase mb-1">
                        {card.title}
                      </h3>
                      
                      <p className="text-base font-semibold text-[#17352D]">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#17352D]/70">
                      <span>Interactive Sessions</span>
                      <span className="text-[#E97824]">Included ✓</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
