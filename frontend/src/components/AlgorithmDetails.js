import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const AlgorithmDetails = ({ algorithm }) => {
  return (
    <li>
      <a href={algorithm.git_url}>
        <FontAwesomeIcon icon={faLink} /> {algorithm.title}
      </a>
      <div className="tags">
        {algorithm.lang &&
          algorithm.lang.map((lang, index) => (
            <span key={index} className={lang.toLowerCase()}>
              {lang}
            </span>
          ))}
      </div>
    </li>
  )
}
