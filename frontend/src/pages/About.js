import useTitle from '../hooks/useTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubAlt,
  faLinkedinIn,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  useTitle('Sobre mí - Ricardo Chu')
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <div className="about-photo">
            <img src="/assets/me.png" alt="" />
          </div>
          <div className="about-details">
            <h1>Ricardo Chu</h1>
            <span>
              <p>FullStack Web Developer</p>
              <div className="socials">
                <a className="h-scale" href="https://github.com/kypexfly">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a className="h-scale" href="mailto:rczgraphics@live.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  className="h-scale"
                  href="https://www.linkedin.com/in/ricardo-chu-zheng/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="h-scale" href="https://telegram.me/ricardo_chu">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </div>
            </span>
            <p>Quevedo, Ecuador</p>
            {/* <p>
              <a href="/assets/ricardo-chu-cv.pdf">Descargar CV</a>
            </p> */}
          </div>
        </div>
        <div className="about-bio">
          <h1>Biografía</h1>
          <p>
            Desde pequeño ha tenido el interés de cómo se crean las páginas web,
            introduciendose al mundo de la programación con Javascript, pasando
            por Python como lenguaje favorito y utilizando MATLAB/R para
            aplicaciones en ciencia o ingeniería. Ha gestionado comunidades de
            diseño gráfico y participado activamente por más de 5 años.
          </p>
          <p>
            Ricardo se recibe como ingeniero en electricidad en la Universidad
            Técnica Estatal de Quevedo en 2023. Ha realizado varios proyectos de
            investigación durante su carrera universitaria en las cuales se
            encuentra el dimensionamiento de un sistema fotovoltaico residencial
            y el análisis de armónicos de vehículos eléctricos en redes de
            distribución. Posee una curiosidad intelectual por lo que siempre se
            encuentra aprendiendo cosas nuevas.
          </p>

          <div>
            <h3>Intereses</h3>
            <ul>
              <li>Desarrollo web</li>
              <li>Electrónica de potencia</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-left">
          <h1>Artículos Científicos</h1>
        </div>
        <div className="about-list-articles">
          <div className="about-article">
            <a href="https://centrosuragraria.com/index.php/revista/article/view/131">
              <h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
                Dimensionamiento de un Sistema Fotovoltaico en la Ciudad de
                Quevedo para Uso Residencial
              </h3>
            </a>
            <p className="article-desc">
              Se presenta el dimensionamiento de un pequeño sistema fotovoltaico
              de una residencia en la ciudad de Quevedo, con el objetivo de
              analizar las instalaciones solares fotovoltaicas como una medida
              para fomentar el uso de la generación distribuida en los hogares
            </p>
            <p>
              <small className="text-muted">
                Autores: Ricardo Chu, Jorge Merino, Yadyra Ortiz, Diego Peña
              </small>
            </p>
          </div>

          <div className="about-article">
            <a href="https://centrosuragraria.com/index.php/revista/article/view/131">
              <h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Análisis de
                los Efectos Causados por Armónicos Inyectados Debido a la Carga
                de Vehículos Eléctricos en el Sistema de Pruebas IEEE 34 Barras
              </h3>
            </a>
            <p className="article-desc">
              El estudio del comportamiento de los armónicos en la red es de
              suma importancia ya que de esa manera se podrá gestionar de mejor
              forma la inyección de armónicos, y ante la vista de un muy posible
              crecimiento porcentual de los vehículos eléctricos en el país se
              debe tomar en cuenta las consecuencias
            </p>
            <p>
              <small className="text-muted">
                Autores: Ricardo Chu, Leonardo Goyes, Ramón Mendoza, Omar
                Parrales, Diego Peña
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
