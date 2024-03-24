import { Rocket } from "lucide-react"

export const SectionCallToAction = () => {
  return (
    <section className="py-8">
      <div className="flex gap-4 border border-black p-6 rounded-lg">
        <Rocket className="w-20 h-20" />
        <div>
        <h3 className="text-lg font-semibold">Quer lançar seu produto de software?</h3>
        <p>Está no lugar certo! Minha especialidade é criar sistemas a partir de suas especificações, com as mais atuais tecnologias do mercado, sempre pensando em escalabilidade e qualidade de experiência de seus usuários.</p>
        </div>
        <button>Vamos Conversar</button>
      </div>
    </section>
  )
}

// Está precisando de uma página de vendas?
// Vai lançar um produto? Quer divulgar um curso online ou um evento?
// Está no lugar certo! Minha especialidade é criar landing pages atraentes e com alta taxa de conversão, utilizando as principais e mais atuais tecnologias do mercado.
