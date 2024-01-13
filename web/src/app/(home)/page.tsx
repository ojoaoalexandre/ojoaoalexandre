import { SectionArticles } from "../../components/Section/Articles"
import { SectionBooks } from "../../components/Section/Books"
import { SectionCallToAction } from "../../components/Section/CallToAction"
import { SectionHero } from "../../components/Section/Hero"
import { SectionPortfolio } from "../../components/Section/Portfolio"
import Link from "next/link"

const PageHome = async () => {
  
  return (
    <main className="min-h-screen container">
      <header className="flex justify-between items-center py-8">
        <p className="flex gap-1 text-xl">
          <span className="font-medium text-white bg-black px-2 rounded-md">A.</span>
          <span className="font-bold">Bekor</span>
        </p>

        <nav className="flex items-center gap-8">
          <Link href="#" className="text-lg">Artigos</Link>
          <Link href="#" className="text-lg">Projetos</Link>
          <button className="font-semibold border rounded-md border-black px-3 py-1">Devkor League</button>
        </nav>
      </header>
      <SectionHero />
      <SectionArticles />
      <SectionPortfolio />
    </main>
  )
}

export default PageHome