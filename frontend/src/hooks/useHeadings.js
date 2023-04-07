import { useEffect, useContext } from 'react'
import useHeadingsContext from './useHeadingsContext'

// eslint-disable-next-line space-before-function-paren
const useHeadings = () => {
  const { headings, setHeadings } = useHeadingsContext()
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.article h2, .article h3, .article h4, .article h5, .article h6'))
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1))
      }))
    setHeadings(elements)
  }, [])

  return headings
}

export default useHeadings
