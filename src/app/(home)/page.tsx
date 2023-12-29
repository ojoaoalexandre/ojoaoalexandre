import { SectionArticles } from "@/components/Section/Articles"
import { SectionBooks } from "@/components/Section/Books"
import { SectionHero } from "@/components/Section/Hero"
import { SectionPortfolio } from "@/components/Section/Portfolio"
import { SectionServices } from "@/components/Section/Services"

const PageHome = async () => {
  
  return (
    <main className="min-h-screen container mx-auto">
      <SectionHero />
      <SectionServices />
      <SectionPortfolio />
      <SectionArticles />
      <SectionBooks />
    </main>
  )
}

export default PageHome