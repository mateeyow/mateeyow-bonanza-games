import { useEffect, useState } from 'react'
import fetch from 'axios'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './app.scss'

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await fetch.get('https://picsum.photos/v2/list')
        setImages(data.slice(0, 11))
      } catch (err) {
        console.error(`Error fetching images: ${err}`)
      }
    }

    fetchImages()
  }, [])

  return (
    <div>
      <Header />
      <main className='container main-grid'>
        {images.map((record) =>
          <div key={record.id}>
            <img src={record.download_url} alt='cat' />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
