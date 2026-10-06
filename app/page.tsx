"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Programs from "@/components/Programs"
import Benefits from "@/components/Benefits"
import AboutWellness from "@/components/AboutWellness"
import ClassTimings from "@/components/ClassTimings"
import Pricing from "@/components/Pricing"
import TrainerProfile from "@/components/TrainerProfile"
import ApplicationForm from "@/components/ApplicationForm"
import LocationSection from "@/components/LocationSection"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import MobileBottomNav from "@/components/MobileBottomNav"

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<string>("Complete Wellness Program")
  const [selectedBatch, setSelectedBatch] = useState<string>("7:00 AM – 8:00 AM")

  const handleSelectProgram = (program: string) => {
    setSelectedProgram(program)
  }

  const handleSelectBatch = (batchTime: string) => {
    setSelectedBatch(batchTime)
  }

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#17352D] font-sans relative selection:bg-[#F6E8C8] selection:text-[#075B45]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Programs Section */}
      <Programs onSelectProgram={handleSelectProgram} />

      {/* Benefits Section */}
      <Benefits />

      {/* About Wellness Section */}
      <AboutWellness />

      {/* Class Timings Section */}
      <ClassTimings onSelectBatch={handleSelectBatch} />

      {/* Pricing Section */}
      <Pricing />

      {/* Trainer Section */}
      <TrainerProfile />

      {/* Application Form Section */}
      <ApplicationForm
        selectedProgram={selectedProgram}
        selectedBatch={selectedBatch}
      />

      {/* Location & Map Section */}
      <LocationSection />

      {/* Final Call to Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomNav />
    </main>
  )
}
