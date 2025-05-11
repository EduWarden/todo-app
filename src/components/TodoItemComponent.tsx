'use client';

import { motion } from 'framer-motion';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Todo } from '@/types/TodoInterface';
import styles from '@/styles/TodoItem.module.css';
import deleteStyles from '@/styles/DeleteButton.module.css';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={styles.todoItem}
    >
      <div className={styles.itemContent}>
        <div className={styles.leftSection}>
          <div className={styles.cntr}>
            <input 
              id={`cbx-${todo.id}`} 
              type="checkbox" 
              className={`${styles.checkbox} ${styles.hidden}`}
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <label htmlFor={`cbx-${todo.id}`} className={styles.cbx} />
          </div>
          <label 
            htmlFor={`cbx-${todo.id}`}
            className={`${styles.taskText} ${todo.completed ? styles.completed : ''}`}
          >
            {todo.text}
          </label>
        </div>
        <button 
          onClick={() => onDelete(todo.id)}
          className={deleteStyles.deleteButtonWrapper}
        >
          <span className={deleteStyles.text}>Удалить</span>
          <div className={deleteStyles.icon}>
            <TrashIcon />
          </div>
        </button>
      </div>
    </motion.div>
  );
};