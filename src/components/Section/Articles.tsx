import { getArticlesAction } from "@/action/get-articles.action"
import { slug } from "@/libs/slug"
import { MessageCircleMore } from "lucide-react"
import Link from "next/link"

const SectionArticles = async () => {
  const articles = await getArticlesAction()

  return (
    <section>
      {articles.data?.map(article => (
        <Link key={article.id} href={`/article/${slug(article.title)}`} className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-xs text-gray-500">{article.closed_at}</p>
          </div>
          <div className="flex">
            <p className="flex gap-1 items-center px-2 bg-gray-100 rounded-full">
              <MessageCircleMore className="w-4 h-4" />
              <span className="text-sm">{article.comments}</span>
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export { SectionArticles }