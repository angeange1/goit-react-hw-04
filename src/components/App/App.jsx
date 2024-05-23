import { useState } from 'react'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageModal from '../ImageModal/ImageModal'
import './App.css'
import axios from 'axios'

function App() {
  const [galleryItemsFound, setGalleryItemsFound] = useState(false)
  
  const handleQuery = (queryValue) => {
    axios.get('https://api.unsplash.com/photos/?client_id=WVvkoWB7pFdggoXbNMLId4SllYX7T7ZTvyTx777_Fak')
      .then(response => { console.log(response.data); })
      .catch(error => console.log(error))
    console.log(queryValue)
    setGalleryItemsFound(true)
  }
  
  return (
    <>
      <LoadMoreBtn />
      <SearchBar onSearch={handleQuery}/>
      {galleryItemsFound && <ImageGallery />}
      <Loader/>
      <ErrorMessage/>
      <ImageModal/>
    </>
  )
}

export default App
