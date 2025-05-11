'use client';

import { motion } from 'framer-motion';
import { Todo } from '@/types/TodoInterface';

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
      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-3 transition-all hover:shadow-md"
    >
      <div className="flex items-center space-x-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(todo.id)}
          className={`px-2 py-1 rounded text-sm font-medium
            ${todo.completed 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200'
            } transition-colors`}
        >
          {todo.completed ? '✓' : '-'}
        </motion.button>
        <span
          className={`${
            todo.completed 
              ? 'line-through text-gray-400' 
              : 'text-gray-700 dark:text-gray-200'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm font-medium"
      >
        Удалить
      </motion.button>
    </motion.div>
  );
};