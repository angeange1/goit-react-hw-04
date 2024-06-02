import { useState, useEffect } from 'react'
import { getPhotos } from "../../../gallery-api";
import './App.css'

import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

function App() {
  const [galleryItems, setGalleryItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotLastPage, setIsNotLastPage] = useState(true)
  const [picToOpen, setPicToOpen] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (searchQuery === "") {return}
    async function fetchPhotos() {
      try {
        setIsLoading(true)
        setIsError(false)
        const {results, total} = await getPhotos(searchQuery, page)
        setIsNotLastPage(page < Math.ceil(total / 15))
        setGalleryItems((prevState) => [...prevState, ...results])
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPhotos();
  }, [page, searchQuery])

  const handleSearch = async (queryValue) => {
    setSearchQuery(queryValue);
    setPage(1);
    setGalleryItems([])
  }

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (regularSizeImg) =>
  {
    setPicToOpen(regularSizeImg);
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setPicToOpen("")
    setIsModalOpen(false)
  }
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage/>}
      {galleryItems.length > 0 && <ImageGallery items={galleryItems} onImageClick={openModal} />}
      {isLoading && <Loader />}
      {galleryItems.length > 0 && isNotLastPage && !isLoading && <LoadMoreBtn onClick={handleLoadMore}/>}
      <ImageModal isOpen={isModalOpen} picture={picToOpen} onClose={closeModal} />
    </>
  )
}

export default App
