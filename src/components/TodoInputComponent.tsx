'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/solid';
import buttonStyles from '@/styles/Button.module.css';
import inputStyles from '@/styles/Input.module.css';

interface Props {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: Props) => {
  const [text, setText] = useState('');
  const labelText = "Добавить задачу";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <div className={inputStyles.inputContainer}>
      <form onSubmit={handleSubmit} className={inputStyles.inputWrapper}>
        <div className={inputStyles.inputBox}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={inputStyles.input}
            required
          />
          <label className={inputStyles.label}>
            {labelText.split('').map((char, idx) => (
              <span
                key={idx}
                className={inputStyles.labelChar}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </label>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={buttonStyles.addButton}
          aria-label="Add task"
        >
          <span>
            <PlusIcon className="w-6 h-6" />
          </span>
        </motion.button>
      </form>
    </div>
  );
};