export const SITE_CONFIG = {
  trustName: "Namo Bhagwate Vasudevaya Trust",
  tagline: "Bhakti | Seva | Sanskar | Samarpan | Manav Kalyan",
  programTitle: "Yoga & Wellness Program",
  trainerName: "Anu Kaushik",
  trainerTitle: "Yoga & Wellness Trainer",

  // Pricing Configuration (Editable from here)
  pricing: {
    monthlyFeeDisplay: "₹25,000",
    period: "Per Month",
    frequency: "4 Classes per Month",
    batchChoice: "4 Batches to Choose From",
    features: [
      "Yoga Sessions (Flexibility & Posture)",
      "Aerobics Sessions (Fat Loss & Stamina)",
      "Meditation & Stress Management",
      "Health Guidance & BP Tracking",
      "Personalised Nutrition & Diet Plans",
      "Supportive Women Community Group",
    ],
  },

  // Contact Details (Editable from here)
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneCallable: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappRawNumber: "919876543210", // No + or spaces for WhatsApp API link
    email: "wellness@namobhagwatetrust.org",
    whatsappDefaultMessage:
      "Hello, I am interested in the Yoga & Wellness Program. Please share more details.",
  },

  // Address
  location: {
    building: "P6/10, Fourth Floor",
    trustName: "Namo Bhagwate Vasudevaya Trust",
    area: "DLF Phase 2",
    city: "Gurgaon, Haryana",
    pincode: "122002",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=DLF+Phase+2+Gurgaon+P6%2F10",
    embedMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.988168577038!2d77.07923769999999!3d28.487968500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191632f0592b%3A0x6b8764cf6e66e60b!2sDLF%20Phase%202%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },

  // Batches
  batches: [
    {
      id: "batch-1",
      name: "BATCH 1",
      time: "7:00 AM – 8:00 AM",
      period: "Morning",
      recommendedFor: "Early Birds & Working Women",
    },
    {
      id: "batch-2",
      name: "BATCH 2",
      time: "9:00 AM – 10:00 AM",
      period: "Mid-Morning",
      recommendedFor: "Homemakers & Post-Breakfast Routine",
    },
    {
      id: "batch-3",
      name: "BATCH 3",
      time: "4:00 PM – 5:00 PM",
      period: "Evening",
      recommendedFor: "Tea-time Fitness & De-stress",
    },
    {
      id: "batch-4",
      name: "BATCH 4",
      time: "5:30 PM – 6:30 PM",
      period: "Late Evening",
      recommendedFor: "Post-Work Routine & Relaxation",
    },
  ],

  // Form Backend API Function (Ready for backend/Google Sheets/CRM integration)
  async submitApplicationForm(formData: Record<string, any>) {
    console.log("Submitting wellness program application:", formData);

    // Simulated API call delay for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Example integration code ready for webhook / API:
    /*
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return response.ok;
    */

    return {
      success: true,
      message:
        "Thank You! Your application has been received. Our wellness team will contact you shortly.",
    };
  },
}
