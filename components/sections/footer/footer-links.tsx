import Link from "next/link"

interface FooterLinksProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
