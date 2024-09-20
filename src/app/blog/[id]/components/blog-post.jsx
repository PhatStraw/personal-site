import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

export default function BlogPost({ title, subtitle, content, date }) {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      
      <main className="max-w-3xl mx-auto">
      <article className="prose prose-invert prose-green max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-green-400">{title}</h1>
          <p className="text-xl mb-4 text-gray-400">{subtitle}</p>
          <time className="text-sm text-gray-500 mb-8 block">{date}</time>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-green-400" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-green-400" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2 text-green-400" {...props} />,
              p: ({node, ...props}) => <p className="mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              a: ({node, ...props}) => <a className="text-green-400 hover:underline" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
              em: ({node, ...props}) => <em className="italic" {...props} />,
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="mb-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-800 rounded px-1 py-0.5" {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 Kevin Sims
      </footer>
    </div>
  )
}