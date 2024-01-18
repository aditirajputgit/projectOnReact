import './index.css'
import {useState} from 'react'
import SuggestionItem from '../SuggestionItem/index'

function GoogleSuggestions({suggestionsList}) {
  const [searchInput, setSearchInput] = useState('')
  const handleInputChange = event => {
    setSearchInput(event.target.value)
  }

  const filteredSuggestions = suggestionsList.filter(user =>
    user.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google"
          className="image"
        />

        <div className="container2">
          <div className="searchContainer" type="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search"
              className="searchImg"
            />
            <input
              type="search"
              className="search"
              onChange={handleInputChange}
              value={searchInput}
            />
          </div>

          <ul className="list-style">
            {filteredSuggestions.map(user => (
              <SuggestionItem key={user.id} suggestionsLists={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default GoogleSuggestions
