import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./TodoItem.module.css";
import SaveIcon from '@mui/icons-material/Save';
import {useTodo} from "../../context/index"

export default function TodoItem({todo}) {
  const [isEdititable, setIsEdititable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const {editTodo, deleteTodo, completeTodo} = useTodo();

  const edit = () => {
    editTodo(todo.id, {...todo, todo: todoMsg});
  }

  return (
    <div className={styles.containerItem}>
      <div className={styles.checkboxContainer}>
        <input 
        type="checkbox" 
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
        />
      </div>
      <input 
      type="text" 
      value={todoMsg} 
      className={`${styles.input} ${isEdititable ? styles.noneditField : styles.editField} ${todo.completed && styles.strikeout}`}
      readOnly={!isEdititable}
      onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button 
      className={`${styles.button} ${styles.edit} ${todo.completed ? styles.disabled : styles.enabled}`
      }
      onClick={() => {
        if(todo.completed) return;
        if(isEdititable){
          edit(todo.id)
        }setIsEdititable((prev) => !prev)
      }}
      disabled={todo.completed}
      >
        {isEdititable ? <SaveIcon /> : <EditIcon />}
      </button>
      <button 
      className={`${styles.button} ${styles.delete}`}
      onClick={() => deleteTodo(todo.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
