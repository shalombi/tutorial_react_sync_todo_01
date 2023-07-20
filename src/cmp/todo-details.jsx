import { useState } from "react"

export const TodoDetails = ({ selected, onSelectTodo }) => {



    return (
        <section className="todo-details">
            <h1>Todo details</h1>
            <h3>{selected.task}</h3>
            <h3>{selected.isDone ? '✅ Done' : '📌 Not done'}</h3>
            <button onClick={() => onSelectTodo(null)}>x</button>
        </section>
    )
}

