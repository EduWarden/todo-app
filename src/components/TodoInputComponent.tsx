'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/solid';

interface Props {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: Props) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`flex-1 p-4 rounded-lg
            bg-[var(--input-background)]
            border-2 border-[var(--input-border)]
            text-white
            placeholder:text-gray-400
            transition-all duration-200
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
            ${isFocused ? 'shadow-md' : 'hover:border-gray-400 dark:hover:border-gray-500'}`}
          placeholder="Добавить новую задачу..."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          aria-label="Добавить задачу"
        >
          <PlusIcon className="w-6 h-6" />
        </motion.button>
      </div>
    </form>
  );
};