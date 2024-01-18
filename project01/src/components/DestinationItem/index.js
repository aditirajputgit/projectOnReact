// Write your code here
import './index.css'

function DestinationItem({destinationsLists}) {
  const {name, imgUrl} = destinationsLists
  return (
    <>
      <li className="list-style">
        <div className="container">
          <div>
            <img className="profile-pic" src={imgUrl} alt="img" />
            <p>{name}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default DestinationItem
