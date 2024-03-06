//  メインヴィジュアル　

// "use client"
import Image from 'next/image'

const Hero = () => {


  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">

        {/* メインタイトル */}
        <h1 className="hero__title">
          三彩家
        </h1>

        {/* サブタイトル */}
        <p className="hero__subtitle">
        唐の貴族文化<br />
        風俗や文化を伝える写実的な描写と、複数の色彩を使って器面を装飾した陶器<br/>
        そのデジタル書庫
        </p>

      </div>
      {/* 画像の表示部分　定期的に変えたいそうなのでランダムで表示される画像の実装も考える */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src='/AI1.png' alt='hero' fill className='object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default Hero