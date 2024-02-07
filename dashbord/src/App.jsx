import React, { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todo, setTodo] = useState([])

  function handleChange(e) {
    e.preventDefault()
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    setNewItem('')
  }
  return (
    <div className="container">
      <form className="new-item-form" onSubmit={handleChange}>
        <div className="form-row">
          <label htmlFor="item" className="text-1">
            <h4>New item</h4>
          </label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="add">Add</button>
      </form>
      <div>
        <h1>Todo list :</h1>
        <ul className="list">
          {todo.map((todo) => {
            return (
              <li key={todo.id}>
                <label className="checkbox-wrapper-13">
                  <input type="checkbox" checked={todo.completed} />
                  {todo.title}
                </label>
                <button className="delete">Delete</button>
              </li>
            )
          })}
          {/* <li>
            <label className="checkbox-wrapper-13">
              <input type="checkbox" />
              item 1
            </label>
            <button className="delete">Delete</button>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default App
