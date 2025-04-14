"use client"

import { useLanguage } from "@/components/language-provider"
import { Send } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function SubscriptionSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setIsError(true)
      return
    }

    // In a real app, you would send this to your API
    console.log("Subscribing email:", email)
    setIsSubscribed(true)
    setIsError(false)
    setEmail("")
  }

  return (
    <section className="w-full py-16 md:py-24 relative">
      {/* Background with light purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/5 -z-10"></div>

      {/* Decorative circles */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <svg
          className="absolute left-0 top-0 w-[600px] h-[600px] opacity-40 text-purple-300 dark:text-purple-600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" fill="none" />
        </svg>
      </div>

      {/* Decorative plus signs */}
      <div className="absolute top-4 right-4 text-blue-500 dark:text-blue-400 opacity-20">+</div>
      <div className="absolute bottom-12 right-12 text-blue-500 dark:text-blue-400 opacity-20">+</div>
      <div className="absolute bottom-8 left-1/4 text-blue-500 dark:text-blue-400 opacity-20">+</div>
      <div className="absolute top-1/2 right-1/4 text-blue-500 dark:text-blue-400 opacity-20">+</div>

      {/* Send icon circle */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
        <Send className="h-7 w-7 text-white" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">{t("subscribeTitle")}</h2>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-0 mt-8">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setIsError(false)
                }}
                className={`pl-10 pr-4 py-4 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  isError ? "border-red-500 focus:ring-red-500" : ""
                }`}
                placeholder={t("yourEmail")}
              />
              {isError && <p className="text-red-500 text-sm mt-1">{t("invalidEmail")}</p>}
            </div>
            <button
              type="submit"
              className="md:ml-4 bg-accent hover:bg-accent/90 text-white font-medium py-4 px-8 rounded-lg transition-colors shadow-md"
            >
              {t("subscribe")}
            </button>
          </form>

          {isSubscribed && <div className="mt-4 text-green-600 dark:text-green-400">{t("subscribeSuccess")}</div>}
        </div>
      </div>
    </section>
  )
}
