"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { MoveRight } from "lucide-react"

type Destination = {
  image: string
  name: string
  location: string
  price: string
  days: number
}

export default function TopDestinations() {
  const { t } = useLanguage()

  const destinations: Destination[] = [
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Rome",
      location: "Italy",
      price: "$5.42k",
      days: 10,
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "London",
      location: "UK",
      price: "$4.2k",
      days: 12,
    },
    {
      image: "/placeholder.svg?height=400&width=300",
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
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase mb-2">{t("topSelling")}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t("topDestinations")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {destination.name}
                      {destination.location && <span>, {destination.location}</span>}
                    </h3>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">{destination.price}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MoveRight className="h-4 w-4 mr-2" />
                  <span>
                    {destination.days} {t("daysTrip")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
