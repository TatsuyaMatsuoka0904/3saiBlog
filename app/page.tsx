// 全体のレイアウト
import Image from 'next/image'
import { Collect, Hero, } from '@/components'
import localFont from 'next/font/local'


// fonts 採用は２
const myFont1 = localFont({
  src: "../public/fonts/YujiBoku-Regular.ttf",
  display: 'swap',
})

const myFont2 = localFont({
  src: "../public/fonts/YujiSyuku-Regular.ttf",
  display: 'swap',
})

export default async function Home() {

  return (
    <main className="overflow-hidden">
      <div className={myFont2.className}>
      <Hero />

      {/* 以下は記事の一覧とフッター */}
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            記事一覧
          </h1>
          <p>
          Explore pottery you like
          </p>
        </div>

        {/* tagからの検索は削除 */}
        <div className="home__collect">
          <Collect />
        </div>
      </div>
      </div>
    </main>
  )
}
