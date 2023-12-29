import { getArticleById } from "@/action/get-article-by-id.action"

const PageArticlesSlug = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleById({
    slug: params.slug
  })
  
  return (
    <div>{JSON.stringify(article, null, 2)}</div>
  )
}

export default PageArticlesSlug