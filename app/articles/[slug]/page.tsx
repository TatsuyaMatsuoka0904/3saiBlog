import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Metadata } from 'next'
import type { Article } from '@/types/index'
import Image from 'next/image'

// 記事詳細ページ
type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}



export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return

  // 投稿記事のHTML
  return (

    <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
      <div className="relative flex-col items-start m-auto align-middle">
        <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
          <div className="relative items-center gap-12 m-auto lg:inline-flex">
            <div className="max-w-xl text-center lg:text-left">
                <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-300">{article.title}</p>
                <div  className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500" dangerouslySetInnerHTML={{ __html: article.body }} />
            </div>
          </div>
          <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
            <Image  width={400}  height={500} src={article.meta?.ogImage.src} alt="hero" className=" object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

