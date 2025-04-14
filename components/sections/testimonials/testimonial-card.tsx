'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
	quote: string
	name: string
	location: string
	image: string
	onNext: () => void
	onPrev: () => void
}

export function TestimonialCard({
	quote,
	name,
	location,
	image,
	onNext,
	onPrev,
}: TestimonialCardProps) {
	return (
		<div className='bg-card rounded-2xl shadow-lg p-8 relative'>
			<div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
				<div className='relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
					<Image
						src={'/testimonial.png'}
						alt={name}
						fill
						className='object-cover'
					/>
				</div>

				<div className='space-y-4 flex-1'>
					<p className='text-foreground italic'>"{quote}"</p>

					<div>
						<h4 className='text-xl font-semibold text-foreground'>
							{name}
						</h4>
						<p className='text-muted-foreground'>{location}</p>
					</div>
				</div>
			</div>

			<div className='absolute right-6 bottom-6 flex flex-col gap-2'>
				<button
					onClick={onPrev}
					className='p-1 rounded-full hover:bg-muted transition-colors'
					aria-label='Previous testimonial'
				>
					<ChevronUp className='h-5 w-5 text-foreground' />
				</button>
				<button
					onClick={onNext}
					className='p-1 rounded-full hover:bg-muted transition-colors'
					aria-label='Next testimonial'
				>
					<ChevronDown className='h-5 w-5 text-foreground' />
				</button>
			</div>
		</div>
	)
}
