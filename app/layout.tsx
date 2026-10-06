import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yoga, Aerobics & Wellness Program in Gurgaon | Namo Bhagwate Vasudevaya Trust",
  description:
    "Join Yoga, Aerobics and Meditation wellness sessions at Namo Bhagwate Vasudevaya Trust, DLF Phase 2, Gurgaon. Flexible batches, nutrition guidance and complete wellness support designed for women.",
  keywords: [
    "Yoga in Gurgaon",
    "Aerobics for Women Gurgaon",
    "Meditation Classes DLF Phase 2",
    "Namo Bhagwate Vasudevaya Trust",
    "Women Wellness Program Gurgaon",
    "Anu Kaushik Yoga Trainer",
    "Diet and Nutrition Gurgaon",
    "Yoga Center DLF Phase 2",
  ],
  authors: [{ name: "Namo Bhagwate Vasudevaya Trust" }],
  openGraph: {
    title: "Yoga, Aerobics & Wellness Program | Namo Bhagwate Vasudevaya Trust Gurgaon",
    description:
      "Transform your physical & mental health with expert Yoga, Aerobics, Meditation and Holistic Nutrition guidance at DLF Phase 2, Gurgaon.",
    url: "https://namobhagwatewellness.org",
    siteName: "Namo Bhagwate Vasudevaya Trust",
    images: [
      {
        url: "/images/poster_full.jpg",
        width: 1200,
        height: 630,
        alt: "Namo Bhagwate Vasudevaya Trust Yoga & Wellness Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Namo Bhagwate Vasudevaya Trust – Yoga & Wellness Program",
    "image": "https://namobhagwatewellness.org/images/poster_full.jpg",
    "@id": "https://namobhagwatewellness.org",
    "url": "https://namobhagwatewellness.org",
    "telephone": "+91 99999 99999",
    "priceRange": "₹25000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P6/10, Fourth Floor, DLF Phase 2",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4879,
      "longitude": 77.0877
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:30"
    },
    "description": "Premium Yoga, Aerobics, Meditation and Holistic Health Guidance for Women by Namo Bhagwate Vasudevaya Trust in DLF Phase 2 Gurgaon."
  }

  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#FFFDF7] text-[#17352D] selection:bg-[#F6E8C8] selection:text-[#075B45]">
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
