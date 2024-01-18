// Write your code here
import './index.css'

function TodoItem(props) {
  const {todoList, onDeleteUser} = props
  const {title, id} = todoList

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <>
      <li>
        <div className="todo-item">
          <p>{title}</p>
          <button type="button" className="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </>
  )
}

export default TodoItem
