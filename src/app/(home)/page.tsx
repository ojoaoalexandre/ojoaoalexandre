import { SectionArticles } from "@/components/Section/Articles"
import { SectionBooks } from "@/components/Section/Books"
import { SectionPortfolio } from "@/components/Section/Portfolio"

const PageHome = async () => {
  
  return (
    <main className="min-h-screen container mx-auto">
      <SectionPortfolio />
      <SectionArticles />
      <SectionBooks />
    </main>
  )
}

export default PageHome