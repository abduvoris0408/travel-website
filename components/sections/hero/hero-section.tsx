'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
	const { t } = useLanguage()

	return (
		<section className='w-full py-10'>
			<div className='container mx-auto px-4 pt-10 pb-20 flex flex-col lg:flex-row items-center'>
				<div className='lg:w-1/2 space-y-6'>
					<p className='text-accent font-medium'>
						{t('bestDestinations')}
					</p>

					<div className='space-y-2'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground'>
							{t('travelEnjoy')}
						</h1>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground'>
							{t('andLive')}
						</h1>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground'>
							{t('fullLife')}
						</h1>
					</div>

					<p className='text-muted-foreground max-w-lg'>
						{t('description')}
					</p>

					<div className='flex items-center space-x-6 pt-4'>
						<Button className='bg-yellow text-black hover:bg-yellow/90'>
							{t('findMore')}
						</Button>

						<div className='flex items-center space-x-3'>
							<div className='w-12 h-12 rounded-full bg-red-500 flex items-center justify-center'>
								<Play className='text-accent h-5 w-5 ml-1' />
							</div>
							<span className='text-muted-foreground'>
								{t('playDemo')}
							</span>
						</div>
					</div>
				</div>

				<div className='lg:w-1/2 mt-16 lg:mt-0 relative'>
					<div className='relative z-10'>
						<Image
							src='/header.png'
							alt='Traveler with backpack'
							width={500}
							height={600}
							className='object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
