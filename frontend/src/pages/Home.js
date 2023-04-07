// components
import Projects from '../components/Projects'
import Profile from '../components/Profile'
import useTitle from '../hooks/useTitle'

const Home = () => {
  useTitle('Proyectos - Ricardo Chu')
  return (
    <div className="home">
      <Projects />
      <Profile />
    </div>
  )
}

export default Home
