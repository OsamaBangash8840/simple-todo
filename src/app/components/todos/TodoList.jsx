'use client'
import TodoItem from '@/app/components/todos/TodoItem';
import { useState } from "react";
import Vector from '@/app/assests/Vector.png';
import Image from 'next/image';

export default function TodoList({ todos, addTodo, completeTodo, deleteTodo, clearCompletedTodos }) {
    const [newTodo, setNewTodos] = useState('');
    const [error, setError] = useState(''); 

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;

        // Check for duplicate todo
        const duplicate = todos.some(todo => todo.task.toLowerCase() === newTodo.toLowerCase());
        if (duplicate) {
            setError('This todo already exists.');
            return;
        }

        addTodo({ id: todos.length + 1, task: newTodo, completed: false });
        setNewTodos(''); // Clear the input
        setError(''); // Clear error message
    };

    return (
        <>
            {/* Input Form */}
            <div className='flex flex-1 bg-white justify-center mt-8'>
                <input
                    className='w-[80%] bg-primary rounded-[40px] px-5 gap-2 py-2 text-[32px] outline-none' 
                    type="text"
                    placeholder="What do you need to do?"
                    value={newTodo}
                    onChange={(e) => {
                        setNewTodos(e.target.value);
                        setError(''); 
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()} 
                />
                <span>
                    <button className='text-[38px] bg-buttonColor rounded-r-[40px] text-white ml-[-77px] z-10 px-3 py-3' onClick={handleAddTodo}>ADD</button>
                </span>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            {/* Todo List */}
            <div className='bg-primary mt-6 rounded-[40px] mx-[120px]'>
                <div className='text-[32px] uppercase px-9 py-12'>
                    {
                        todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))
                    }
                </div>

                {/* Clear Completed Todos */}
                <div className='flex justify-end py-8 px-28 text-clearItem text-[24px]'>
                    <Image src={Vector} alt="Clear icon" />
                    <button className='px-3' onClick={clearCompletedTodos}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </>
    );
}
