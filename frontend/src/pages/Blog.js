import { Link } from 'react-router-dom'
import mdData from '../data/mdData.json'
import useTitle from '../hooks/useTitle'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Blog = () => {
  useTitle('Blog - Ricardo Chu')

  return (
    <div className="blog">
      <div className="breadcrum">
        <div className="flex align-center">
          <Link to="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          Blog
        </div>
      </div>

      <h1>Últimos artículos</h1>
      <hr />
      <div className="blog-list">
        {mdData.map((article, index) => (
          <div className="blog-item-wrapper" key={index}>
            <Link to={`/blog/${article.slug}`} className="blog-item">
              <div className="blog-item-cover">
                <img
                  className="blog-item-image"
                  src={article.image}
                  loading="lazy"
                />
              </div>
              <div className="blog-item-details">
                <h3>{article.title}</h3>
                <footer>
                  <p style={{ textAlign: 'right' }}>
                    <small>
                      Publicado el{' '}
                      <strong>
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          dateStyle: 'medium'
                        })}
                      </strong>
                    </small>
                  </p>
                </footer>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
