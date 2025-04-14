import type { ReactNode } from "react"

interface SectionTitleProps {
  subtitle: string
  title: string | ReactNode
  center?: boolean
  className?: string
}

export function SectionTitle({ subtitle, title, center = true, className = "" }: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-16 ${className}`}>
      <p className="text-sm font-medium text-muted-foreground uppercase mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
    </div>
  )
}
