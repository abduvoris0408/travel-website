import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-28 h-28 bg-cream dark:bg-accent/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
