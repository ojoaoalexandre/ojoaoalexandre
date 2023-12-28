import { getArticlesAction } from "@/action/get-articles.action"
import { SectionArticles } from "@/components/Section/Articles"
import { SectionPortfolio } from "@/components/Section/Portfolio"

export default async function PageHome() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SectionArticles />
      <SectionPortfolio />
    </main>
  )
}
