import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href="#"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Link>
    </div>
  )
}
