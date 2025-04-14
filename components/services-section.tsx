"use client"

import { useLanguage } from "./language-provider"
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
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase mb-2">{t("category")}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t("weOfferBestServices")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 bg-cream dark:bg-accent/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
