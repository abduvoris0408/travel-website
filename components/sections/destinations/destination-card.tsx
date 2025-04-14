import Image from "next/image"
import { MoveRight } from "lucide-react"

interface DestinationCardProps {
  image: string
  name: string
  location?: string
  price: string
  days: number
  daysText: string
}

export function DestinationCard({ image, name, location, price, days, daysText }: DestinationCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {name}
              {location && <span>, {location}</span>}
            </h3>
          </div>
          <div>
            <span className="text-lg font-bold text-foreground">{price}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MoveRight className="h-4 w-4 mr-2" />
          <span>
            {days} {daysText}
          </span>
        </div>
      </div>
    </div>
  )
}
