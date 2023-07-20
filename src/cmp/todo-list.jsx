import { useState } from "react"
import { TodoPreview } from "./todo-preview"

export const TodoList = ({ todos, onRemoveTodo, onSelectTodo }) => {



    return (
        <section className="todo-list">
            {/* {todos.map(t => <h3> {t.task} </h3>)} */}
            {todos.map(todo => <TodoPreview
                onSelectTodo={onSelectTodo}
                onRemoveTodo={onRemoveTodo}
                todo={todo}
                key={todo._id}
            />)}

        </section>
    )
}

