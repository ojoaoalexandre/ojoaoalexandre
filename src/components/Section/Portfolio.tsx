import { getRepositoriesAction } from "@/action/get-repositories.action"
import { title } from "@/app/utils/format"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SectionPortfolio = async () => {
  const repositories = await getRepositoriesAction({
    size: 9
  })

  return (
    <section>
      <header className="flex justify-between items-center py-4">
        <div>
          <h2 className="font-bold text-xl">Portifólio</h2>
          <p>Alguns projetos desenvolvidos por mim</p>
        </div>
        <Link href="/projects" className="px-4 py-2 bg-gray-300 rounded-md">Ver Mais</Link>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {repositories?.data?.map(repository => (
          <div key={repository.id} className="flex flex-col">
            {repository.cover ? (
              <Image alt={repository.name} src={repository.cover} width={920} height={920} className="object-cover object-top h-full max-h-60 rounded-lg" />
            ) : null}

            <footer className="flex justify-between pt-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-none">{title(repository.name)}</h3>
                <div>
                  {repository.topics?.map(topic => (
                    <span key={topic} className="text-xs bg-gray-950 text-white px-2 py-0.5 rounded-md">{title(topic, false)}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                  {repository.homepage ? (
                    <Link href={repository.homepage} target="_blank" className="text-gray-500 border-2 p-2 hover:bg-gray-200 rounded-full">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  ): null}
                  
                  {!repository.private ? (
                    <Link href={repository.html_url} target="_blank"  className="text-gray-500 border-2 p-2 hover:bg-gray-200 rounded-full">
                      <Github className="w-5 h-5" />
                    </Link>
                  ) : null}
              </div>
              {/* <p className="text-xs text-gray-400">{repository.updated_at}</p> */}
              {/* <p className="text-sm">{repository.description}</p> */}
            </footer>
          </div>
        ))}
      </div>
    </section>
  )
}

export { SectionPortfolio }