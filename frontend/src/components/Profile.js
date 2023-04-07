import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithubAlt,
  faLinkedinIn,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  return (
    <div className="rightHome">
      <div className="profile">
        <div className="profile-details">
          <h2 className="text-center">Ricardo Chu Zheng</h2>
          <pre>✨ Fullstack Web Developer ✨</pre>

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

          <h4>Tecnologías</h4>
          <ul>
            <li>React, Vue, Astro</li>
            <li>Node, Express, Strapi</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Bootstrap, TailwindCSS</li>
            <li>JSON Web Token (JWT)</li>
            <li>NPM, Git/Github</li>
            <li>Docker</li>
          </ul>

          <h4>Lenguajes</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript & Typescript</li>
            <li>Python, MATLAB</li>
            <li>SQL</li>
          </ul>

          <h4>Idiomas</h4>
          <ul>
            <li>Español nativo</li>
            <li>Inglés B2</li>
          </ul>

          <h4>Dispuesto a aprender</h4>
          <ul>
            <li>Next.js, etc.</li>
            <li>GraphQL, tRPC</li>
            <li>SEO</li>
            <li>AWS</li>
          </ul>

          <h4>Otras habilidades</h4>
          <ul>
            <li>Photoshop, Premiere Pro</li>
            <li>Affinity Designer</li>
            <li>Office Suite</li>
            <li>Web Scrapping with Python</li>
          </ul>
        </div>

        {/* <a href="/gallery"><img src="https://i.imgur.com/e58TIbF.png" alt="" /></a> */}
      </div>
    </div>
  )
}

export default Profile
