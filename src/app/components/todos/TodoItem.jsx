import React from 'react';
import Image from 'next/image';
import Checked from '@/app/assests/checked.png'
import Unchecked from '@/app/assests/unchecked.png'
import Bin from '@/app/assests/Delete outline.png'

export default function TodoItem({ todo, completeTodo, deleteTodo }) {
  return (
    <div className='flex justify-between items-center bg-primary w-[80%] mx-auto p-2 border border-b-belowBorder '>
      <div className='flex items-center'>
        <Image
          src={todo.completed ? Checked : Unchecked
          } 
          alt={todo.completed ? 'Completed' : 'Not completed'}
          className="w-6 h-6 cursor-pointer" 
          onClick={() => completeTodo(todo.id)}
        />
        <span className={ todo.completed ? 'text-completedColor line-through ml-2' : 'ml-2 '}>{todo.task}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className=" text-white px-2 py-1 rounded-md">
        <Image
        src={Bin}
        alt="Delete"
        />
      </button>
    </div>
  );
}