import { useState } from "react"


export const TodoEdit = ({ onAddTodo }) => {

    const [todo, setTodo] = useState({ task: '' })



    const handleChange = (ev) => {

        const value = ev.target.value
        const field = ev.target.name
        setTodo({ ...todo, [field]: value })

    }

    return (
        <section className="todo-app">

            <form onSubmit={(ev) => onAddTodo(ev, todo)}>
                <input
                    onChange={handleChange}
                    value={todo.task}
                    type="text"
                    name="task"
                />
                <button>save</button>
            </form>

        </section>
    )
}


