import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const extractedInputValue = e.target.search.value.trim()
      if (!extractedInputValue) { return toast.error("Search field must be filled!") }
      
  onSearch(extractedInputValue)
  e.target.reset()}

    return (
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name='search'
    />
      <button type="submit">Search</button>
      <Toaster />
  </form>
</header>
    )
}

export default SearchBar