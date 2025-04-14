"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 pt-10 pb-20 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 space-y-6">
        <p className="text-accent font-medium">{t("bestDestinations")}</p>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{t("travelEnjoy")}</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{t("andLive")}</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{t("fullLife")}</h1>
        </div>

        <p className="text-muted-foreground max-w-lg">{t("description")}</p>

        <div className="flex items-center space-x-6 pt-4">
          <Button className="bg-yellow text-black hover:bg-yellow/90">{t("findMore")}</Button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Play className="text-accent h-5 w-5 ml-1" />
            </div>
            <span className="text-muted-foreground">{t("playDemo")}</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-cream rounded-bl-[30%] rounded-tl-[10%] rounded-tr-[10%] -z-10"></div>
        <div className="relative z-10">
          <Image
            src="/placeholder.svg?height=500&width=400"
            alt="Traveler with backpack"
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="absolute -top-10 right-20">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Airplane icon"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-10">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Airplane icon"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
