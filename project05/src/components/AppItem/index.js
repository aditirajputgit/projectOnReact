// Write your code here
import './index.css'

function AppItem({appList}) {
  const {appName, imageUrl} = appList
  return (
    <>
      <li className="container1">
        <div className="appItem">
          <img src={imageUrl} alt={appName} className="images" />
          <p>{appName}</p>
        </div>
      </li>
    </>
  )
}
export default AppItem
