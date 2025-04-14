import Navbar from '@/components/navbar'
import BookingSection from '@/components/sections/booking/booking-section'
import DestinationsSection from '@/components/sections/destinations/destinations-section'
import FooterSection from '@/components/sections/footer/footer-section'
import HeroSection from '@/components/sections/hero/hero-section'
import ServicesSection from '@/components/sections/services/services-section'
import SubscriptionSection from '@/components/sections/subscription/subscription-section'
import TestimonialsSection from '@/components/sections/testimonials/testimonials-section'

export default function Home() {
	return (
		<main className='container w-11/12 mx-auto bg-background text-foreground'>
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<DestinationsSection />
			<BookingSection />
			<TestimonialsSection />
			<SubscriptionSection />
			<FooterSection />
		</main>
	)
}
