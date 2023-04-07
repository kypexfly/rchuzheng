import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import metadataParser from 'markdown-yaml-metadata-parser'

const useGetPost = (article) => {
  const navigate = useNavigate()
  const [metadata, setMetadata] = useState({})
  const [postContent, setPostContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setPostContent('')
    setMetadata({})

    import(`../markdown/${article}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then((text) => {
            const result = metadataParser(text)
            document.title = result.metadata.title
            setMetadata(result.metadata)
            setPostContent(result.content)
            setIsLoading(false)
          })
          .catch(err => console.log(err))
      })
      .catch(() => navigate('/404', { replace: true }))

    return () => {
      setIsLoading(true)
      setPostContent('')
      setMetadata({})
    }
  }, [])

  return { isLoading, postContent, metadata }
}

export default useGetPost
