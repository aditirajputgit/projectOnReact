// Write your code here
import './index.css'

function TabItem(props) {
  const {eachItem, upadted} = props
  const {displayText, tabId} = eachItem

  const upadtedItem = () => {
    console.log('hello')
    upadted(tabId)
  }

  return (
    <>
      <li className="lists">
        <button type="button" onClick={upadtedItem}>
          <div>{displayText}</div>
        </button>
      </li>
    </>
  )
}

export default TabItem
