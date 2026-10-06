"use client"

import React from "react"
import Image from "next/image"
import { CheckCircle2, Calendar, Award, Sparkles, HeartPulse, ShieldCheck } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const trustPoints = [
    "Expert Wellness Guidance",
    "Flexible Batches",
    "Diet & Nutrition Support",
    "Supportive Women Community",
  ]

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FFFDF7]">
      {/* Decorative Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#075B45]/5 via-[#D8AC4B]/10 to-[#E97824]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#F6E8C8]/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Small badge */}
            <div className="inline-flex items-center bg-[#FAF3E0] border border-[#D8AC4B]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest text-[#075B45] shadow-xs">
              <span>YOGA • FITNESS • WELLNESS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17352D] leading-[1.15]">
              A <span className="text-[#075B45] relative inline-block">
                Healthier
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#F6E8C8] -z-10 rounded-full" />
              </span>,{" "}
              <span className="text-[#E97824]">Happier You</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#17352D]/80 font-medium leading-relaxed max-w-2xl">
              Transform your body, mind and lifestyle with expert-guided Yoga, Aerobics, Meditation and holistic wellness programs designed exclusively for women.
            </p>

            {/* Trainer Banner Badge */}
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-3.5 pr-6 rounded-2xl border border-[#075B45]/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E97824] shrink-0 shadow-sm">
                <Image
                  src="/images/trainer_anu.jpg"
                  alt={SITE_CONFIG.trainerName}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base text-[#17352D]">
                    {SITE_CONFIG.trainerName}
                  </h3>
                  <Award className="w-4 h-4 text-[#D8AC4B]" />
                </div>
                <p className="text-xs font-semibold text-[#075B45] tracking-wide">
                  {SITE_CONFIG.trainerTitle}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => scrollToSection("#application-form")}
                className="inline-flex items-center justify-center bg-[#E97824] hover:bg-[#D46615] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center animate-pulse-glow"
              >
                JOIN NOW
              </button>

              <button
                onClick={() => scrollToSection("#timings")}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EBF4F0] text-[#075B45] font-bold text-base px-7 py-4 rounded-full border-2 border-[#075B45] transition-all hover:shadow-md text-center"
              >
                <Calendar className="w-5 h-5 text-[#075B45]" />
                VIEW CLASS TIMINGS
              </button>
            </div>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#075B45]/10 w-full">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#075B45] shrink-0" />
                  <span className="text-sm font-semibold text-[#17352D]/90">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Decorative Card Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Gold & Cream Accent Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#D8AC4B]/40 via-[#F6E8C8]/60 to-[#075B45]/30 rounded-3xl blur-md transform -rotate-1" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative h-[360px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden">
                  <Image
                    src="/images/hero_trainer.jpg"
                    alt="Anu Kaushik Yoga & Wellness Trainer leading class"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gentle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17352D]/80 via-transparent to-transparent" />
                </div>

                {/* Overlaid Banner at Bottom of Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-[#075B45]/95 to-[#075B45]/75 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F6E8C8] font-bold">
                        Certified Lead Trainer
                      </p>
                      <h4 className="text-lg font-bold text-white">
                        Anu Kaushik
                      </h4>
                      <p className="text-xs text-white/90">
                        Yoga, Aerobics & Holistic Fitness
                      </p>
                    </div>
                    <div className="bg-[#E97824] text-white p-3 rounded-full shadow-md">
                      <HeartPulse className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#075B45] shadow-md border border-[#075B45]/15 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E97824]" />
                  <span>Namo Bhagwate Vasudevaya Trust</span>
                </div>
              </div>

              {/* Floating Statistic Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white px-5 py-4 rounded-2xl shadow-xl border border-[#075B45]/10 animate-float hidden sm:flex flex-col justify-center">
                <p className="text-xl font-extrabold text-[#075B45] leading-none">100%</p>
                <p className="text-xs font-bold text-[#17352D]/70 mt-1">Dedicated Women Batches</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
