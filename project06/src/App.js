import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from "./components/index"

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

function App() {
  const [contactsList, setContactsList] = useState(initialContactsList)
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')

  const toggleIsFav = id => {
    setContactsList(prevContactsList =>
      prevContactsList.map(user => {
        if (id === user.id) {
          return {...user, isFavorite: !user.isFavorite}
        }
        return user
      }),
    )
  }

  const onAddContact = event => {
    event.preventDefault()
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    setContactsList(prevContactsList => [...prevContactsList, newContact])
    setName('')
    setMobileNo('')
  }

  const onChangeMobileNo = event => {
    setMobileNo(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Contacts</h1>
        <form className="contact-form-container" onSubmit={onAddContact}>
          <input
            value={name}
            onChange={onChangeName}
            className="input"
            placeholder="Name"
          />
          <input
            className="input"
            value={mobileNo}
            onChange={onChangeMobileNo}
            placeholder="Mobile Number"
          />
          <button type="submit" className="button">
            Add Contact
          </button>
        </form>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Mobile Number</p>
          </li>
          {contactsList.map(eachContact => (
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              toggleIsFav={toggleIsFav}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
