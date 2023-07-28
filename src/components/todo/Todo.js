import React from 'react'
import '../todo/Todo.css'

export default function Todo() {
  return (
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder='Add a Items' />
            <button> + </button>

            <ol>
                <li>ali</li>
            </ol>
        </div>
    </div>
  )
}
