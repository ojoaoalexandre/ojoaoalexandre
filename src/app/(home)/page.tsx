import { getRepositoriesAction } from "@/action/get-repositories.action"

export default async function PageHome() {
  const repositories = await getRepositoriesAction()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-3 gap-4">
        {repositories?.data?.map(repository => (
          <div key={repository.id}>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
            <span>{repository.language}</span>
            <span>{repository.homepage}</span>
            {!repository.private ? <span>{repository.html_url}</span> : null}
          </div>
        ))}
      </section>
    </main>
  )
}
