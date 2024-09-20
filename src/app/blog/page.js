import { Rss, FileJson } from 'lucide-react'
import { blogPosts } from '../../../posts'
import Link from "next/link"
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white px-8 font-mono">
      
      <main className="max-w-2xl mx-auto">
      <div className="text-2xl mb-4 font-bold">blog</div>

        {/* <div className="flex justify-end space-x-2 mb-4">
          <a href="#" className="text-green-400 hover:underline flex items-center">
            <Rss size={16} className="mr-1" />
            rss
          </a>
          <a href="#" className="text-green-400 hover:underline flex items-center">
            <FileJson size={16} className="mr-1" />
            json
          </a>
        </div> */}
    
        <ul className="space-y-6">
          {blogPosts.map((post, index) => (
            <li key={index} className="border-b border-gray-800 pb-6">
              <Link href={`/blog/${post.id}`} className="block hover:bg-gray-900 p-2 -m-2 rounded">
                <h2 className="text-green-400 text-lg mb-1">{post.title}</h2>
                <p className="text-gray-400 mb-2">{post.subtitle}</p>
                <time className="text-gray-500 text-sm">{post.date}</time>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 Kevin Sims
      </footer>
    </div>
  )
}