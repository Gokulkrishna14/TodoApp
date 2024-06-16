import React, { useState } from 'react'
import { useTodo } from '../../context';
import styles from "./TodoForm.module.css"

export default function TodoForm() {
    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        console.log(todo);
        if(!todo) return
        addTodo({todo, completed: false})
        setTodo("");
    }


  return (
    <div className={styles.container}>
        <form onSubmit={add}>
            <input type="text" value={todo} className={styles.input} placeholder='Add a Todo...' onChange={(e) => setTodo(e.target.value)} />
            <button className={styles.button} type="submit">Add</button>
        </form>
    </div>
  )
}
