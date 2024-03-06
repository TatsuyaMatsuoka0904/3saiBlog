import Link from 'next/link'
import Image from 'next/image'

// Header、Navbarの部分

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4'>
          <Link href="/" className='flex justify-center items-center'>
            {/* Navのヘッダー画像　仮置きだがそのままでよい */}
            <Image
              src="/icon3sai.png"
              alt='NavIcon'
              width={70}
              height={90}
              className='object-contain'
            />
          </Link>
        </nav>
    </header>
  )
}

export default Navbar