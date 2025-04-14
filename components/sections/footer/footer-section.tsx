'use client'

import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { FooterLinks } from './footer-links'
import { SocialIcons } from './social-icons'

export default function FooterSection() {
	const { t } = useLanguage()

	const companyLinks = [
		{ label: t('about'), href: '#' },
		{ label: t('careers'), href: '#' },
		{ label: t('mobile'), href: '#' },
	]

	const contactLinks = [
		{ label: t('helpFaq'), href: '#' },
		{ label: t('press'), href: '#' },
		{ label: t('affiliates'), href: '#' },
	]

	const moreLinks = [
		{ label: t('airlineFees'), href: '#' },
		{ label: t('airline'), href: '#' },
		{ label: t('lowFareTips'), href: '#' },
	]

	return (
		<footer className='w-full py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
					{/* Logo and tagline */}
					<div className='space-y-4'>
						<Link href='/' className='inline-block'>
							<h2 className='text-2xl font-bold text-foreground'>
								Travello
								<span className='text-yellow text-opacity-50'>
									.
								</span>
							</h2>
						</Link>
						<p className='text-muted-foreground max-w-xs'>
							{t('footerTagline')}
						</p>
					</div>

					{/* Company links */}
					<FooterLinks title={t('company')} links={companyLinks} />

					{/* Contact links */}
					<FooterLinks title={t('contact')} links={contactLinks} />

					{/* More links */}
					<div className='space-y-8'>
						<FooterLinks title={t('more')} links={moreLinks} />
						<SocialIcons />
					</div>
				</div>

				{/* App download section */}
				<div className='mt-16'>
					<p className='text-sm text-center text-muted-foreground'>
						{t('allRightsReserved')}
					</p>
				</div>
			</div>
		</footer>
	)
}
