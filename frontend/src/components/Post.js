/* eslint-disable space-before-function-paren */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
// import Markdown from 'markdown-to-jsx'

// libraries
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'

// components
import Heading from './Heading'

// hooks
import { useThemeContext } from '../hooks/useThemeContext'
// import useHeadings from '../hooks/useHeadings'

const Post = ({ postContent, metadata }) => {
  const { title, date, tags } = metadata
  const { settings } = useThemeContext()
  const isDark = settings.theme === 'dark' ? 1 : 0
  const options = {
    dateStyle: 'full',
    timeZone: 'UTC'
  }
  // useHeadings()
  return (
    <article className="article">
      <header>
        <p className='article-tags'>
          {tags.map((tag) => <span className='tag' key={tag}>{tag}</span>)}
        </p>
        <h1>{title}</h1>
        <p>📆 {new Date(date).toLocaleDateString('es-ES', options)}</p>
        <hr />
      </header>

      <div className="container">
        <div className="post-wrapper">
          <ReactMarkdown
            children={postContent}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            components={{
              h2: ({ children }) => <Heading as='h2'>{children}</Heading>,
              h3: ({ children }) => <Heading as='h3'>{children}</Heading>,
              h4: ({ children }) => <Heading as='h4'>{children}</Heading>,
              h5: ({ children }) => <Heading as='h5'>{children}</Heading>,
              h6: ({ children }) => <Heading as='h6'>{children}</Heading>,

              img: ({ src, align, width, height }) => <figure className={align}><img src={src} width={width} height={height} loading="lazy" /></figure>,

              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match
                  ? (<SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    showLineNumbers
                    language={match[1]}
                    PreTag="div"
                    style={isDark ? nightOwl : prism}
                    className="syntaxhighlighter"
                    {...props}
                  />)
                  : (<code className={className} {...props}>
                    {children}
                  </code>)
              }
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default Post
