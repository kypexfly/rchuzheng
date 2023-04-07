import { useState, useEffect } from 'react'

const TableOfContent = () => {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('.article h2, .article h3, .article h4')
    ).map((elem) => ({
      id: elem.id,
      text: elem.innerText,
      level: Number(elem.nodeName.charAt(1))
    }))
    setHeadings(elements)
  }, [])

  const handleAnchorClick = (e, heading) => {
    e.preventDefault()
    document.querySelector(`#${heading.id}`).scrollIntoView({
      behavior: 'smooth'
    })
  }

  const getClassName = (level) => {
    switch (level) {
      case 2:
        return 'head2'
      case 3:
        return 'head3'
      case 4:
        return 'head4'
      default:
        return null
    }
  }

  return (
    <nav id="tablecontent">
      <p className="toc">TABLA DE CONTENIDOS</p>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={getClassName(heading.level)}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleAnchorClick(e, heading)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContent
