"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionTitle } from "@/components/ui/section-title"
import { DestinationCard } from "./destination-card"

export default function DestinationsSection() {
  const { t } = useLanguage()

  const destinations = [
    {
      image: "/destination1.png",
      name: "Rome",
      location: "Italy",
      price: "$5.42k",
      days: 10,
    },
    {
      image: "/destination2.png",
      name: "London",
      location: "UK",
      price: "$4.2k",
      days: 12,
    },
    {
      image: "/destination3.png",
      name: "Full Europe",
      location: "",
      price: "$15k",
      days: 28,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Decorative curved line */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[300px] pointer-events-none">
        <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M299 1C156.5 27.5 -89.5 149.5 63.5 307C216.5 464.5 299 599 299 599"
            stroke="currentColor"
            className="text-muted-foreground"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle={t("topSelling")} title={t("topDestinations")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              name={destination.name}
              location={destination.location}
              price={destination.price}
              days={destination.days}
              daysText={t("daysTrip")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
