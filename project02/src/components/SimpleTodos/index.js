import './index.css'
import {useState} from 'react'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
function SimpleTodos() {
  const [todoList, setTodoList] = useState(initialTodosList)

  const onDeleteUser = id => {
    const filterUserDetailList = todoList.filter(user => user.id !== id)
    setTodoList(filterUserDetailList)
  }

  return (
    <>
      <div className="Container">
        <div className="container1">
          <h1>Simple Todos</h1>
          <ul className="list-style">
            {todoList.map(user => (
              <TodoItem todoList={user} onDeleteUser={onDeleteUser} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SimpleTodos
