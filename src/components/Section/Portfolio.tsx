import { getRepositoriesAction } from "@/action/get-repositories.action"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const SectionPortfolio = async () => {
  const repositories = await getRepositoriesAction()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-3 gap-4">
        {repositories?.data?.map(repository => (
          <div key={repository.id} className="p-4 border rounded-md">
            <header className="flex justify-between">
              <h3>{repository.name}</h3>
              <div className="flex gap-2">
              {repository.homepage ? (
                <Link href={repository.homepage} target="_blank">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              ): null}
              
              {!repository.private ? (
                <Link href={repository.html_url} target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              ) : null}
              </div>
            </header>
            <p className="text-xs text-gray-400">{repository.updated_at}</p>
            <p>{repository.description}</p>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{repository.language}</span>
          </div>
        ))}
      </section>
    </main>
  )
}

export { SectionPortfolio }