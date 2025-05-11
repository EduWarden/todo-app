'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from '@/components/TodoItemComponent';
import { TodoInput } from '@/components/TodoInputComponent';
import { Todo } from '@/types/TodoInterface';
import { ThemeToggle } from '@/components/ThemeToggleComponent';
import styles from '@/styles/Title.module.css';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <ThemeToggle />
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className={styles.titleContainer}>
            <div className={styles.button}>
              Todo List
              <div className={styles.hoverText} data-text="Todo List"></div>
            </div>
          </div>
        </motion.div>

        <TodoInput onAdd={addTodo} />

        <AnimatePresence mode="popLayout">
          {todos
            .slice()
            .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
        </AnimatePresence>

        {todos.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 mt-8"
          >
          </motion.p>
        )}
      </div>
    </div>
  );
}