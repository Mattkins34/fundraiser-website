import Header from './components/Header'
import Hero from './components/Hero'
import ProgressBar from './components/ProgressBar'
import DonationForm from './components/DonationForm'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProgressBar current={2500000} goal={20000000} />
        <div className="container mx-auto px-4 py-8 md:flex md:space-x-8">
          <div className="md:w-1/2">
            <DonationForm />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <InfoSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
