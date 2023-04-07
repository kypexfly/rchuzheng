import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useThemeContext } from './hooks/useThemeContext'
import ScrollToTop from './utils/ScrollToTop'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import Loader from './components/Loader'

// pages
const Home = lazy(() => import('./pages/Home'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Article = lazy(() => import('./pages/Article'))
const Error = lazy(() => import('./components/Error'))

// eslint-disable-next-line space-before-function-paren
function App() {
  const { settings } = useThemeContext()
  const theme = settings.theme === 'dark' ? 'dark' : 'light'

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        {/* <Announcement /> */}
        <div className="container">
          <div className="pages">
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:article" element={<Article />} />
                <Route path="/about" element={<About />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="*" element={<Error />}></Route>
                {/* <Route path="/404" element={<Error />}></Route> */}
                {/* <Route path="*" element={<Navigate to="/404" replace />}></Route> */}
              </Routes>
            </Suspense>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
