import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <Image
        src="/placeholder.svg?height=500&width=1000"
        alt="LA Wildfire devastation"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Us Make a Difference</h1>
        <p className="text-xl mb-8">Join our mission to support LA Wildfire victims.</p>
        <a href="#donate" className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition duration-300">
          Donate Now
        </a>
      </div>
    </div>
  )
}
