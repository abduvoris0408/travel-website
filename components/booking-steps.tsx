"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { MapPin, CreditCard, Car, Leaf, Map, Send, Building2, Heart } from "lucide-react"

export default function BookingSteps() {
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
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">{t("easyAndFast")}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {t("bookYourNextTrip")} <br /> {t("in3EasySteps")}
              </h2>
            </div>

            <div className="space-y-8 mt-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div
                    className={`${step.bgColor} p-4 rounded-2xl flex items-center justify-center min-w-[60px] h-[60px]`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Trip card */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              {/* Main trip card */}
              <div className="bg-card rounded-3xl shadow-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Greece" fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{t("tripToGreece")}</h3>
                  <p className="text-muted-foreground">
                    14-29 {t("june")} | {t("by")} Robbin jo...
                  </p>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Map className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Send className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">24 {t("peopleGoing")}</span>
                    </div>
                    <button className="text-accent hover:text-accent/80 transition-colors">
                      <Heart className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ongoing trip badge */}
              <div className="absolute -bottom-6 right-8 bg-card rounded-2xl shadow-lg p-4 w-48">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Rome" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("ongoing")}</p>
                    <p className="text-sm font-medium text-foreground">{t("tripToRome")}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-accent font-medium">40%</span>
                    <span className="text-muted-foreground">{t("completed")}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-accent h-1.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
