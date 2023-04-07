/* eslint-disable react/react-in-jsx-scope */
import Fancybox from '../hooks/fancybox'
import { galleryData } from '../data/galleryData'
import useTitle from '../hooks/useTitle'

const Gallery = () => {
  useTitle('Galería - Ricardo Chu')

  return (
    <div id="gallery">
      <h1>Galería de diseños</h1>
      <hr />
      <Fancybox options={{ infinite: false }}>
        <ul className="gallery">
          {galleryData && galleryData.map((src, index) => (
            <li key={index}>
              <a href={src}>
                <img alt="" data-fancybox="gallery" className="rounded hover-animate" loading="lazy" src={src} />
              </a>
            </li>
          ))}
        </ul>
      </Fancybox>

      <p className="text-center">Ver más en <a href="https://www.deviantart.com/kypexfly">deviantART</a></p>
    </div>
  )
}

export default Gallery
