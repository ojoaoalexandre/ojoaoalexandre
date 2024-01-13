import { getArticlesAction } from "../../action/get-articles.action"
import { slug } from "../../app/utils/format"
import { MessageCircleMore } from "lucide-react"
import Link from "next/link"

const SectionArticles = async () => {
  const articles = await getArticlesAction()

  return (
    <section className="pb-4">
      <header className="flex justify-between items-center py-4">
        <div>
          <h2 className="font-bold text-2xl">Últimos Artigos</h2>
        </div>
        <Link href="/projects"  className="font-semibold border rounded-md border-black px-3 py-1">Ver Mais</Link>
      </header>
      <div className="flex flex-col divide-y">
        {articles.data?.map(article => (
          <Link key={article.id} href={`/articles/${slug(article.title)}-${article.number}`} className="flex py-2 justify-between items-start">
            <div>
              <h3 className="text-xl">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.closed_at}</p>
            </div>
            <div className="flex">
              <p className="flex gap-1 items-center text-gray-500">
                <MessageCircleMore className="w-4 h-4" />
                <span className="text-sm">{article.comments}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export { SectionArticles }