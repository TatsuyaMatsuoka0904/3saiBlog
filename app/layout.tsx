import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })


/// メタタイトルなどを変更できる
export const metadata: Metadata = {
  title: '三彩家',
  description: '唐三彩のライブラリ兼商品紹介',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className='relative'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
