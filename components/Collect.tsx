import React from 'react'
import { getArticles } from '@/lib/newt'
import Link from 'next/link'
import Image from 'next/image'

// 記事一覧ページ　投稿ページにあってもよいかも

export default async function Collect() {
    const articles = await getArticles()
    return (
    <>
    {articles.map((article) => {
        return(
        <div className="bg-white flex flex-wrap ">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-4">
                <div className=" flex flex-wrap p-5 gap-5  gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    <div >
                        <Link
                            href={`articles/${article.slug}`}
                            className="group mb-2 block h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <Image src={article.meta?.ogImage.src} width={article.meta?.ogImage.width} height={article.meta?.ogImage.height}  alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </Link>
                    <div key={article._id} className="flex flex-col">
                        <a href={`articles/${article.slug}`} className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">{article.title}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)})}
    </>
)}