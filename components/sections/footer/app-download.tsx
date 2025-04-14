"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function AppDownload() {
  const { t } = useLanguage()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{t("discoverOurApp")}</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="#" aria-label="Download on Google Play">
          <Image
            src="/placeholder.svg?height=40&width=135"
            alt="Google Play"
            width={135}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <Link href="#" aria-label="Download on App Store">
          <Image
            src="/placeholder.svg?height=40&width=135"
            alt="App Store"
            width={135}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </div>
  )
}
