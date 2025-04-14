import type { ReactNode } from "react"

interface BookingStepProps {
  icon: ReactNode
  title: string
  description: string
  bgColor: string
}

export function BookingStep({ icon, title, description, bgColor }: BookingStepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className={`${bgColor} p-4 rounded-2xl flex items-center justify-center min-w-[60px] h-[60px]`}>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
