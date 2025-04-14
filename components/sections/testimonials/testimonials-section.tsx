"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SectionTitle } from "@/components/ui/section-title"
import { TestimonialCard } from "./testimonial-card"

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: t("testimonial1Quote"),
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: t("testimonial2Quote"),
      name: "Chris Thomas",
      location: "CEO of Red Button",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: t("testimonial3Quote"),
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="w-full py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle={t("testimonials")} title={t("whatPeopleSay")} center={false} />

            <div className="flex mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <TestimonialCard
              quote={testimonials[activeIndex].quote}
              name={testimonials[activeIndex].name}
              location={testimonials[activeIndex].location}
              image={testimonials[activeIndex].image}
              onNext={handleNext}
              onPrev={handlePrev}
            />

            {/* Preview of next testimonial */}
            <div className="absolute -bottom-10 left-8 right-8 bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[(activeIndex + 1) % testimonials.length].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[(activeIndex + 1) % testimonials.length].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
