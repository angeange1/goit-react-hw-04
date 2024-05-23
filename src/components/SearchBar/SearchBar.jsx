import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [extractedInputValue, setExtractedInputValue] = useState("")
  console.log(extractedInputValue);
    const handleSubmit = (e) => {
      e.preventDefault()
      setExtractedInputValue (e.target.search.value.trim())
      if (!e.target.search.value.trim()) { return toast.error("This field must be filled!") }
      onSearch(extractedInputValue)
      e.target.reset()
  }

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