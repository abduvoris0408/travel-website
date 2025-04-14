'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from './language-provider'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
	const { language, setLanguage, t } = useLanguage()

	return (
		<nav className='w-full py-6 px-4 md:px-10 flex items-center justify-between'>
			<div className='flex items-center space-x-2'>
				<Image width={200} height={300} alt='logo' src={'/logo.svg'} />
			</div>
			<Image
				alt='decor'
				src={'/Decore.png'}
				width={500}
				height={500}
				className='absolute top-0 right-0 -z-10'
			/>

			<div className='hidden md:flex items-center space-x-8'>
				<Link
					href='#'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{t('destinations')}
				</Link>
				<Link
					href='#'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{t('hotels')}
				</Link>
				<Link
					href='#'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{t('flights')}
				</Link>
				<Link
					href='#'
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{t('bookings')}
				</Link>
			</div>

			<div className='flex items-center space-x-4'>
				<Link
					href='#'
					className='text-black hover:text-accent transition-colors'
				>
					{t('login')}
				</Link>
				<Button
					variant='outline'
					className='border-foreground text-black hover:bg-foreground hover:text-background'
				>
					{t('signup')}
				</Button>
				<ThemeToggle />
				<button
					onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
					className='flex items-center space-x-1 text-black'
				>
					<span>{language.toUpperCase()}</span>
					<ChevronDown size={16} />
				</button>
			</div>
		</nav>
	)
}
