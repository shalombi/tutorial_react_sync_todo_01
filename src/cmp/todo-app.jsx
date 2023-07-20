import { useState } from "react"
import { utilService } from "../services/util.service"
import { TodoDetails } from "./todo-details"
import { TodoEdit } from "./todo-edit"
import { TodoList } from "./todo-list"
export const TodoApp = () => {


    const [todos, setTodos] = useState(
        [
            { _id: 't_101', task: 'wash the dishes', isDone: false },
            { _id: 't_102', task: 'throw the garbage', isDone: true },
            { _id: 't_103', task: 'to be happy', isDone: false },
        ]
    )


    const [selected, setSelected] = useState(null)

    const onRemoveTodo = (todoId) => {
        let newTodos = [...todos]
        newTodos = newTodos.filter(t => t._id !== todoId)
        setTodos(newTodos)
    }
    const onAddTodo = (ev, todo) => {
        ev.preventDefault()

        const newTodo = { ...todo, id: utilService.generateRandomId() }
        let newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    const onSelectTodo = (todo) => {
        setSelected(todo)
    }


    return (
        <section className="todo-app">


            <TodoList
                onRemoveTodo={onRemoveTodo}
                onSelectTodo={onSelectTodo}
                todos={todos}
            />

            {selected && <TodoDetails
                selected={selected}
                onSelectTodo={onSelectTodo}
            />}
            <TodoEdit onAddTodo={onAddTodo} />

        </section>
    )
}


