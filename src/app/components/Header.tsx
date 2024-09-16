import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Gov AI Interface
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}