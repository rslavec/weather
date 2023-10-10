import { useState } from 'react'
import GeocodingApi from '../services/GeocodingApi';
import SearchResults from './SearchResults';

function SearchCities() {
  const api = new GeocodingApi();

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null);

  const handleInputChange = (event) => { 
    setSearchTerm(event.target.value)
  }

  const handleSearch = async (event) => {
    event.preventDefault();

    api.init();
    const data = await api.getCitiesByName(searchTerm, 5);

    setSearchResults(data);
  }

  return (
    <div>      
      <input
        type="text"
        className="border rounded px-2 py-1"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search cities'
      />
      <button 
        type="submit"
        className="text-white bg-gray-500 rounded px-2 py-1"
        onClick={handleSearch}
      >Search</button>
      <SearchResults results={searchResults} />
    </div>
  )
}

export default SearchCities