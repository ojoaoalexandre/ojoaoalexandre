import { getUserAction } from "../../action/get-user.action"
import { Github, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

const SectionHero = async () => {
  const user = await getUserAction()

  return (
    <section className="flex flex-col relative gap-4 justify-center items-center min-h-[600px]">
      {user.data ? (
        <Image src={user.data.avatar_url} alt={user.data.login} width={900} height={900} className="w-40 h-40 rounded-full shadow-md" />
      ): null}
      
      <h2 className="text-3xl font-bold">{user.data?.name}</h2>
      <p className="text-xl max-w-2xl text-center font-light">{user.data?.bio}</p>

      <div className="flex gap-2 absolute left-0 bottom-8">
        <div className="bg-gray-200 p-2 rounded-lg">
          <Github className="w-6 h-6" />
        </div>
        <div className="bg-gray-200 p-2 rounded-lg">
          <Linkedin className="w-6 h-6" />
        </div>
        <div className="bg-gray-200 p-2 rounded-lg">
          <Youtube className="w-6 h-6" />
        </div>
        <div className="bg-gray-200 p-2 rounded-lg">
          <Instagram className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

export { SectionHero }