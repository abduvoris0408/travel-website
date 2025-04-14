import Image from "next/image"
import { Leaf, Map, Send, Building2, Heart } from "lucide-react"

interface TripCardProps {
  title: string
  dateText: string
  byText: string
  organizer: string
  peopleCount: number
  peopleText: string
  ongoingText: string
  tripToText: string
  completedText: string
  progressPercent: number
}

export function TripCard({
  title,
  dateText,
  byText,
  organizer,
  peopleCount,
  peopleText,
  ongoingText,
  tripToText,
  completedText,
  progressPercent,
}: TripCardProps) {
  return (
    <div className="relative max-w-md w-full">
      {/* Main trip card */}
      <div className="bg-card rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src="/boking.png" alt="Greece" fill className="object-cover" />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">
            14-29 {dateText} | {byText} {organizer}...
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
              <span className="text-muted-foreground">
                {peopleCount} {peopleText}
              </span>
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
            <Image src="/boking1.png" alt="Rome" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{ongoingText}</p>
            <p className="text-sm font-medium text-foreground">{tripToText}</p>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-accent font-medium">{progressPercent}%</span>
            <span className="text-muted-foreground">{completedText}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div className="bg-accent h-1.5 rounded-full" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
