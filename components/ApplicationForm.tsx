"use client"

import React, { useState, useEffect } from "react"
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Loader2,
  Calendar,
  User,
  Mail,
  Heart,
} from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export interface ApplicationFormProps {
  selectedProgram?: string
  selectedBatch?: string
}

export default function ApplicationForm({
  selectedProgram = "",
  selectedBatch = "",
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    whatsappNumber: "",
    age: "",
    email: "",
    program: selectedProgram || "Complete Wellness Program",
    preferredBatch: selectedBatch || SITE_CONFIG.batches[0].time,
    primaryGoal: "General Wellness",
    healthConcerns: "",
    contactMethod: "WhatsApp",
    agreeTerms: true,
  })

  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }))
    }
  }, [selectedProgram])

  useEffect(() => {
    if (selectedBatch) {
      setFormData((prev) => ({ ...prev, preferredBatch: selectedBatch }))
    }
  }, [selectedBatch])

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({ ...prev, [name]: val }))
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required."
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required."
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number."
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.program) {
      newErrors.program = "Please select a program."
    }

    if (!formData.preferredBatch) {
      newErrors.preferredBatch = "Please select a batch."
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to be contacted to submit."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await SITE_CONFIG.submitApplicationForm(formData)
      if (response.success) {
        setIsSubmitted(true)
        setSubmissionMessage(response.message)
      }
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ form: "Failed to submit application. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: "",
      mobileNumber: "",
      whatsappNumber: "",
      age: "",
      email: "",
      program: "Complete Wellness Program",
      preferredBatch: SITE_CONFIG.batches[0].time,
      primaryGoal: "General Wellness",
      healthConcerns: "",
      contactMethod: "WhatsApp",
      agreeTerms: true,
    })
  }

  return (
    <section
      id="application-form"
      className="py-12 md:py-16 bg-gradient-to-b from-white via-[#FFFDF7] to-[#FAF3E0]/30 relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#075B45]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E97824]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FAF3E0] border border-[#D8AC4B]/40 text-[#075B45] font-bold text-xs sm:text-sm uppercase tracking-widest">
              <span>LIMITED SEATS PER BATCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17352D] tracking-tight leading-tight">
              Ready to Start Your <br />
              <span className="text-[#075B45]">Wellness Journey?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#17352D]/80 font-medium leading-relaxed">
              Take the first step towards a healthier, happier and more balanced lifestyle. Submit your details below to reserve your batch.
            </p>

            {/* Helpline Info Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#075B45]/15 wellness-shadow space-y-4">
              <h4 className="font-bold text-base text-[#075B45] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E97824]" />
                Direct Admissions & Enquiries
              </h4>

              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#EBF4F0] text-[#075B45] hover:bg-[#075B45] hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase opacity-80">Call Admissions</p>
                    <p className="font-bold text-base">{SITE_CONFIG.contact.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 text-[#075B45] hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 group-hover:text-white" />
                  <div>
                    <p className="text-xs font-semibold uppercase opacity-80">WhatsApp Enquiry</p>
                    <p className="font-bold text-base">{SITE_CONFIG.contact.whatsappDisplay}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2 text-xs text-[#17352D]/70 font-semibold">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                Strictly confidential information
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#075B45]" />
                Same-day response from our wellness coordinator
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM CARD */}
          <div className="lg:col-span-7">
            <div className="wellness-shadow-lg rounded-3xl bg-white border border-[#075B45]/15 p-6 sm:p-10 relative">
              
              {isSubmitted ? (
                /* SUCCESS CONFIRMATION BOX */
                <div className="text-center py-12 px-4 space-y-6 animate-fade-up">
                  <div className="w-20 h-20 rounded-full bg-[#EBF4F0] text-[#075B45] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10 text-[#075B45]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17352D]">
                    Application Received!
                  </h3>

                  <p className="text-base text-[#17352D]/80 font-medium max-w-md mx-auto">
                    {submissionMessage}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF3E0] border border-[#D8AC4B]/40 max-w-md mx-auto text-left text-xs space-y-1 text-[#17352D]">
                    <p className="font-bold text-[#075B45]">Selected Program: {formData.program}</p>
                    <p className="font-semibold">Preferred Batch: {formData.preferredBatch}</p>
                    <p className="font-semibold">Applicant: {formData.fullName} ({formData.mobileNumber})</p>
                  </div>

                  <div>
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center gap-2 bg-[#075B45] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#E97824] transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                /* APPLICATION FORM */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="space-y-1 pb-2 border-b border-gray-100">
                    <h3 className="text-2xl font-black text-[#17352D]">
                      Apply for the Wellness Program
                    </h3>
                    <p className="text-xs font-semibold text-[#17352D]/70">
                      Please complete all required fields (*) to lock in your preferred batch.
                    </p>
                  </div>

                  {errors.form && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#075B45]" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Sunita Sharma"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.fullName ? "border-red-500 bg-red-50/50" : "border-[#E2EADF]"
                          } focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] font-bold text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1">
                      <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#075B45]" />
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.mobileNumber ? "border-red-500 bg-red-50/50" : "border-[#E2EADF]"
                          } focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none`}
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="text-[11px] font-bold text-red-500">{errors.mobileNumber}</p>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div className="space-y-1">
                      <label htmlFor="whatsappNumber" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-[#25D366]" />
                        <input
                          type="tel"
                          id="whatsappNumber"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          placeholder="Same as mobile or different"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Age */}
                    <div className="space-y-1">
                      <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="14"
                        max="90"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 34"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#075B45]" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.name@example.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            errors.email ? "border-red-500 bg-red-50/50" : "border-[#E2EADF]"
                          } focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] font-bold text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Select Program */}
                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Select Program <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none bg-white"
                      >
                        <option value="Yoga">Yoga</option>
                        <option value="Aerobics">Aerobics</option>
                        <option value="Meditation">Meditation</option>
                        <option value="Complete Wellness Program">Complete Wellness Program (Recommended)</option>
                      </select>
                    </div>

                    {/* Preferred Batch */}
                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="preferredBatch" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Preferred Batch <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredBatch"
                        name="preferredBatch"
                        value={formData.preferredBatch}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none bg-white"
                      >
                        {SITE_CONFIG.batches.map((batch) => (
                          <option key={batch.id} value={batch.time}>
                            {batch.name}: {batch.time} ({batch.period})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Primary Goal */}
                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="primaryGoal" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Primary Goal <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="primaryGoal"
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-semibold text-[#17352D] transition-all outline-none bg-white"
                      >
                        <option value="Weight Management">Weight Management</option>
                        <option value="Fitness & Stamina">Fitness & Stamina</option>
                        <option value="Stress Reduction">Stress Reduction</option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="Hormonal Wellness">Hormonal Wellness</option>
                        <option value="General Wellness">General Wellness</option>
                      </select>
                    </div>

                    {/* Health Concerns */}
                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="healthConcerns" className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Health Concerns
                      </label>
                      <textarea
                        id="healthConcerns"
                        name="healthConcerns"
                        rows={3}
                        value={formData.healthConcerns}
                        onChange={handleChange}
                        placeholder="Tell us about any health concerns, back pain, or special requirements…"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EADF] focus:border-[#075B45] focus:ring-2 focus:ring-[#075B45]/20 text-sm font-medium text-[#17352D] transition-all outline-none"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-2 sm:col-span-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#17352D]">
                        Preferred Contact Method
                      </span>
                      <div className="flex items-center gap-6">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-bold text-[#17352D]">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="Call"
                            checked={formData.contactMethod === "Call"}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#075B45] focus:ring-[#075B45]"
                          />
                          <span>Call</span>
                        </label>

                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-bold text-[#17352D]">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="WhatsApp"
                            checked={formData.contactMethod === "WhatsApp"}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#075B45] focus:ring-[#075B45]"
                          />
                          <span>WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="sm:col-span-2 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#075B45] focus:ring-[#075B45] rounded mt-0.5"
                        />
                        <span className="text-xs font-semibold text-[#17352D]/80 leading-snug">
                          I agree to be contacted by Namo Bhagwate Vasudevaya Trust regarding the wellness program details and batch slot confirmation. <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="text-[11px] font-bold text-red-500 mt-1">{errors.agreeTerms}</p>
                      )}
                    </div>
                  </div>

                  {/* Main Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E97824] hover:bg-[#D46615] text-white font-black text-base py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SUBMITTING APPLICATION...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>SUBMIT APPLICATION</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
