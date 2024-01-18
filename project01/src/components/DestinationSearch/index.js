// Write your code here
import {useState} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

function DestinationSearch({destinationsList}) {
  const [searchInput, setSearchInput] = useState('')

  const searchvalue = event => {
    const seachval = event.target.value
    setSearchInput(seachval)
  }

  const searchResult = destinationsList.filter(user =>
    user.name.includes(searchInput),
  )

  return (
    <>
      <div className="destination-page">
        <h1>Destination List </h1>
        <input type="search" className="search" onChange={searchvalue} />
        <div className="container1">
          {searchResult.map(user => (
            <DestinationItem destinationsLists={user} />
          ))}
        </div>
      </div>
    </>
  )
}

export default DestinationSearch
