import { useParams, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// components
import Post from '../components/Post'
import Loader from '../components/Loader'
import TableOfContent from '../components/TableOfContent'

// hooks
import useGetPost from '../hooks/useGetPost'

const Article = () => {
  const { article } = useParams()

  const { isLoading, postContent, metadata } = useGetPost(article)

  if (isLoading) return <Loader/>

  return (
    <>
      <div className="breadcrum">
      <div className="flex align-center">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to="/blog">Blog</Link> <FontAwesomeIcon icon={faChevronRight} />
        {metadata.title}
      </div>
    </div>
      <div className="home">
        <div className="leftHome">
          {< Post postContent={postContent} metadata={metadata}></Post>}
        </div>
        <div className="rightHome">
          <TableOfContent/>
        </div>
      </div>
    </>
  )
}

export default Article
