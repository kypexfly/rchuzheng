import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectDetails = ({ project }) => {
  return (
  <a className="project-details" href={project.demo} target="_blank" rel="noopener noreferrer">
    <div>
      <header>
        <h3>
          <img src={project.src} width={30} />{project.title}
        </h3>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </header>
      <p>{project.desc}</p>
      <p><small className="text-muted">Tecnologías: {project.lang}</small></p>
    </div>
  </a>
  )
}

export default ProjectDetails
