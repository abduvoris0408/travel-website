"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionTitle } from "@/components/ui/section-title"
import { ServiceCard } from "./service-card"
import { Satellite, Plane, Mic, Settings } from "lucide-react"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Satellite className="h-10 w-10 text-teal" />,
      title: t("calculatedWeather"),
      description: t("weatherDescription"),
    },
    {
      icon: <Plane className="h-10 w-10 text-teal" />,
      title: t("bestFlights"),
      description: t("flightsDescription"),
    },
    {
      icon: <Mic className="h-10 w-10 text-teal" />,
      title: t("localEvents"),
      description: t("eventsDescription"),
    },
    {
      icon: <Settings className="h-10 w-10 text-teal" />,
      title: t("customization"),
      description: t("customizationDescription"),
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-accent opacity-20">+</div>
      <div className="absolute top-12 left-8 text-accent opacity-20">+</div>
      <div className="absolute bottom-12 right-12 text-accent opacity-20">+</div>
      <div className="absolute top-1/2 left-1/2 text-accent opacity-20">+</div>

      {/* Decorative corner shape */}
      <div className="absolute bottom-0 left-0 w-80 h-40">
        <div className="absolute bottom-0 left-0 w-full h-full bg-accent rounded-tr-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle={t("category")} title={t("weOfferBestServices")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
