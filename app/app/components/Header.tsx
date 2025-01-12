import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          LA Wildfire Relief
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
          <li><Link href="#about" className="text-gray-600 hover:text-primary">About</Link></li>
          <li><Link href="#donate" className="text-gray-600 hover:text-primary">Donate</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
