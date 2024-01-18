// Write your code here
import './index.css'

function SuggestionItem({suggestionsLists}) {
  const {suggestion} = suggestionsLists
  return (
    <>
      <li>
        <div className="container3">
          <p>{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="text1"
            className="arrow-icon"
          />
        </div>
      </li>
    </>
  )
}

export default SuggestionItem
