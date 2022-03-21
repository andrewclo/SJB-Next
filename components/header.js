import Link from 'next/link'

export default function Header() {
  return (
    <div className=" mb-20 mt-8 flex justify-between items-center">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Sarah Burke Foundation</a>
        </Link>
        .
      </h2>
      <nav>
        <Link href="/about">
          <a className="hover:underline mr-8">About</a>
        </Link>
        <Link href="/scholarship">
          <a className="hover:underline mr-8">Scholarship</a>
        </Link>
          <Link href="/contact">
          <a className="hover:underline mr-8">Contact</a>
        </Link>
      </nav>
    </div>
  )
}
