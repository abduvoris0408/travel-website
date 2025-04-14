"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionTitle } from "@/components/ui/section-title"
import { BookingStep } from "./booking-step"
import { TripCard } from "./trip-card"
import { MapPin, CreditCard, Car } from "lucide-react"

export default function BookingSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <MapPin className="h-6 w-6 text-foreground" />,
      title: t("chooseDestination"),
      description: t("chooseDestinationDesc"),
      bgColor: "bg-yellow",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-foreground" />,
      title: t("makePayment"),
      description: t("makePaymentDesc"),
      bgColor: "bg-accent",
    },
    {
      icon: <Car className="h-6 w-6 text-foreground" />,
      title: t("reachAirport"),
      description: t("reachAirportDesc"),
      bgColor: "bg-teal",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/10 dark:to-blue-800/5 rounded-l-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <SectionTitle
              subtitle={t("easyAndFast")}
              title={
                <>
                  {t("bookYourNextTrip")} <br /> {t("in3EasySteps")}
                </>
              }
              center={false}
            />

            <div className="space-y-8 mt-10">
              {steps.map((step, index) => (
                <BookingStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  bgColor={step.bgColor}
                />
              ))}
            </div>
          </div>

          {/* Right side - Trip card */}
          <div className="flex justify-center">
            <TripCard
              title={t("tripToGreece")}
              dateText={t("june")}
              byText={t("by")}
              organizer="Robbin jo"
              peopleCount={24}
              peopleText={t("peopleGoing")}
              ongoingText={t("ongoing")}
              tripToText={t("tripToRome")}
              completedText={t("completed")}
              progressPercent={40}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
