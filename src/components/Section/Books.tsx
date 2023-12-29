import { getBooksAction } from "@/action/get-books.action"
import { slug } from "@/app/utils/format"
import { MessageCircleMore } from "lucide-react"
import Link from "next/link"

const SectionBooks = async () => {
  const books = await getBooksAction()

  return (
    <div>
      {books.data?.map(book => (
        <Link key={book.id} href={`/books/${slug(book.title)}`} className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-xs text-gray-500">{book.closed_at}</p>
          </div>
          <div className="flex">
            <p className="flex gap-1 items-center px-2 bg-gray-100 rounded-full">
              <MessageCircleMore className="w-4 h-4" />
              <span className="text-sm">{book.comments}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { SectionBooks }