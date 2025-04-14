import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Travello - Travel Website',
	description: 'Discover the best destinations around the world',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<LanguageProvider>
						<div className='flex flex-col '>
							<div className='flex-grow'>{children}</div>
						</div>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

import './globals.css'
