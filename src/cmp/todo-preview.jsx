import { useState } from "react"

export const TodoPreview = ({ todo, onRemoveTodo ,onSelectTodo}) => {



    return (
        <section className="todo-preview">
            <div className="flex gap_1">
                <h3>{todo.isDone ? '✅' : '📌'}</h3>
                <h3>{todo.task}</h3>
            </div>

            <button onClick={() => onRemoveTodo(todo._id)}>x</button>
            <button onClick={()=>onSelectTodo(todo)}> Details </button>

        </section>
    )
}

