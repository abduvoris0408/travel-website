"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "uz"

type Translations = {
  [key: string]: {
    en: string
    uz: string
  }
}

const translations: Translations = {
  destinations: {
    en: "Destinations",
    uz: "Yo'nalishlar",
  },
  hotels: {
    en: "Hotels",
    uz: "Mehmonxonalar",
  },
  flights: {
    en: "Flights",
    uz: "Parvozlar",
  },
  bookings: {
    en: "Bookings",
    uz: "Bron qilish",
  },
  login: {
    en: "Login",
    uz: "Kirish",
  },
  signup: {
    en: "Sign up",
    uz: "Ro'yxatdan o'tish",
  },
  bestDestinations: {
    en: "BEST DESTINATIONS AROUND THE WORLD",
    uz: "DUNYODAGI ENG YAXSHI YO'NALISHLAR",
  },
  travelEnjoy: {
    en: "Travel, enjoy",
    uz: "Sayohat qiling, rohatlaning",
  },
  andLive: {
    en: "and live a new",
    uz: "va yangi hayot",
  },
  fullLife: {
    en: "and full life",
    uz: "to'liq hayot kechiring",
  },
  description: {
    en: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
    uz: "Wicket uzoqroq hayratda qoldiradigan barton nafsoniyatini o'zida qiladi. Sportchilarga afzal ko'riladi, u tinglab berdi. Park darvozasi ular g'arbni qattiq sotadilar.",
  },
  findMore: {
    en: "Find out more",
    uz: "Ko'proq ma'lumot",
  },
  playDemo: {
    en: "Play Demo",
    uz: "Namoyishni o'ynash",
  },
  // Services section translations
  category: {
    en: "CATEGORY",
    uz: "KATEGORIYA",
  },
  weOfferBestServices: {
    en: "We Offer Best Services",
    uz: "Biz eng yaxshi xizmatlarni taklif qilamiz",
  },
  calculatedWeather: {
    en: "Calculated Weather",
    uz: "Hisoblangan ob-havo",
  },
  weatherDescription: {
    en: "Built Wicket longer admire do barton vanity itself do in it.",
    uz: "Wicket uzoqroq hayratda qoldiradigan barton nafsoniyatini o'zida qiladi.",
  },
  bestFlights: {
    en: "Best Flights",
    uz: "Eng yaxshi parvozlar",
  },
  flightsDescription: {
    en: "Engrossed listening. Park gate sell they west hard for the.",
    uz: "Tinglab berdi. Park darvozasi ular g'arbni qattiq sotadilar.",
  },
  localEvents: {
    en: "Local Events",
    uz: "Mahalliy tadbirlar",
  },
  eventsDescription: {
    en: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    uz: "Barton nafsoniyatini o'zida qiladi. Erkaklarga afzal ko'riladi, u tinglab berdi.",
  },
  customization: {
    en: "Customization",
    uz: "Moslashuvchanlik",
  },
  customizationDescription: {
    en: "We deliver outsourced aviation services for military customers",
    uz: "Biz harbiy mijozlar uchun tashqi aviatsiya xizmatlarini yetkazib beramiz",
  },
  // Top destinations section translations
  topSelling: {
    en: "Top Selling",
    uz: "Eng ko'p sotiladigan",
  },
  topDestinations: {
    en: "Top Destinations",
    uz: "Eng yaxshi yo'nalishlar",
  },
  daysTrip: {
    en: "Days Trip",
    uz: "Kunlik sayohat",
  },
  // Booking steps section translations
  easyAndFast: {
    en: "Easy and Fast",
    uz: "Oson va tez",
  },
  bookYourNextTrip: {
    en: "Book Your Next Trip",
    uz: "Keyingi sayohatingizni band qiling",
  },
  in3EasySteps: {
    en: "In 3 Easy Steps",
    uz: "3 ta oson bosqichda",
  },
  chooseDestination: {
    en: "Choose Destination",
    uz: "Yo'nalishni tanlang",
  },
  chooseDestinationDesc: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  makePayment: {
    en: "Make Payment",
    uz: "To'lovni amalga oshiring",
  },
  makePaymentDesc: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  reachAirport: {
    en: "Reach Airport on Selected Date",
    uz: "Tanlangan sanada aeroportga yeting",
  },
  reachAirportDesc: {
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  tripToGreece: {
    en: "Trip To Greece",
    uz: "Gretsiyaga sayohat",
  },
  june: {
    en: "June",
    uz: "Iyun",
  },
  by: {
    en: "by",
    uz: "tomonidan",
  },
  peopleGoing: {
    en: "people going",
    uz: "kishi bormoqda",
  },
  ongoing: {
    en: "Ongoing",
    uz: "Davom etmoqda",
  },
  tripToRome: {
    en: "Trip to Rome",
    uz: "Rimga sayohat",
  },
  completed: {
    en: "completed",
    uz: "bajarildi",
  },
  // Testimonials section translations
  testimonials: {
    en: "TESTIMONIALS",
    uz: "SHARHLAR",
  },
  whatPeopleSay: {
    en: "What People Say About Us.",
    uz: "Odamlar biz haqimizda nima deyishadi.",
  },
  testimonial1Quote: {
    en: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    uz: "Windows-da gaplashayotgan bo'yalgan yaylov, ammo uning ekspress partiyalari foydalanadi. Albatta, u keyingi bilganidek, o'sha oxirgi. Ishonilgan yoki chetga chiqarilmagan.",
  },
  testimonial2Quote: {
    en: "The service was excellent. Our trip to London was perfectly organized and the guide was very knowledgeable.",
    uz: "Xizmat ajoyib edi. Londonga sayohatimiz mukammal tashkil etilgan va qo'llanma juda bilimli edi.",
  },
  testimonial3Quote: {
    en: "I've traveled with many companies, but this one stands out. The attention to detail and customer service is unmatched.",
    uz: "Men ko'plab kompaniyalar bilan sayohat qilganman, lekin bu ajralib turadi. Tafsilotlarga e'tibor va mijozlarga xizmat ko'rsatish tengsizdir.",
  },
  // Subscription section translations
  subscribeTitle: {
    en: "Subscribe to get information, latest news and other interesting offers about Travello",
    uz: "Travello haqida ma'lumot, so'nggi yangiliklar va boshqa qiziqarli takliflar olish uchun obuna bo'ling",
  },
  yourEmail: {
    en: "Your email",
    uz: "Elektron pochtangiz",
  },
  subscribe: {
    en: "Subscribe",
    uz: "Obuna bo'lish",
  },
  invalidEmail: {
    en: "Please enter a valid email address",
    uz: "Iltimos, to'g'ri elektron pochta manzilini kiriting",
  },
  subscribeSuccess: {
    en: "Thank you for subscribing!",
    uz: "Obuna bo'lganingiz uchun rahmat!",
  },
  // Footer translations
  footerTagline: {
    en: "Book your trip in minute, get full Control for much longer.",
    uz: "Sayohatingizni bir daqiqada band qiling, uzoqroq vaqt davomida to'liq nazoratga ega bo'ling.",
  },
  company: {
    en: "Company",
    uz: "Kompaniya",
  },
  about: {
    en: "About",
    uz: "Haqida",
  },
  careers: {
    en: "Careers",
    uz: "Karyera",
  },
  mobile: {
    en: "Mobile",
    uz: "Mobil",
  },
  contact: {
    en: "Contact",
    uz: "Aloqa",
  },
  helpFaq: {
    en: "Help/FAQ",
    uz: "Yordam/FAQ",
  },
  press: {
    en: "Press",
    uz: "Matbuot",
  },
  affiliates: {
    en: "Affiliates",
    uz: "Hamkorlar",
  },
  more: {
    en: "More",
    uz: "Ko'proq",
  },
  airlineFees: {
    en: "Airlinefees",
    uz: "Aviakompaniya to'lovlari",
  },
  airline: {
    en: "Airline",
    uz: "Aviakompaniya",
  },
  lowFareTips: {
    en: "Low fare tips",
    uz: "Arzon narx maslahatlari",
  },
  discoverOurApp: {
    en: "Discover our app",
    uz: "Ilovamizni kashf eting",
  },
  allRightsReserved: {
    en: "All rights reserved@travello.co",
    uz: "Barcha huquqlar himoyalangan@travello.co",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
