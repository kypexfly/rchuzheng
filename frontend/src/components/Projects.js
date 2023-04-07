import { React, useState } from 'react'
// components
import ProjectDetails from './ProjectDetails'
import { AlgorithmDetails } from './AlgorithmDetails'
// data
import { projectsData } from '../data/projectsData'
import { algorithmData } from '../data/algorithmData'

const Projects = () => {
  return (
    <div className="leftHome">
      <h1>Proyectos</h1>
      <hr />

      <span className="badge">
        Desarrollo web
      </span>

      <p>Algunos proyectos en los que he trabajado, puedes hacer click para ver una demo en vivo.
        En mi cuenta de <a href="https://github.com/kypexfly">GitHub</a> se encuentran algunos.</p>

      <div className='projects'>
        {projectsData &&
          projectsData.map((project, index) => (
            <ProjectDetails key={index} project={project} />
          ))}

      </div>

      <p><strong>Work In Progress:</strong> e-commerce (React + Strapi), To-Do app (React), Portfolio v3 (Astro)</p>

      <span className="badge">Algoritmos</span>

      <p>En el transcurso de la carrera de Ingeniería Eléctrica he realizado algunos proyectos de investigación
        con Python y MATLAB.</p>

      <div className='algos'>
        {algorithmData &&
          algorithmData.map((algorithm, index) => (
            <AlgorithmDetails algorithm={algorithm} key={index} />
          ))}
      </div>

    </div>
  )
}

export default Projects
