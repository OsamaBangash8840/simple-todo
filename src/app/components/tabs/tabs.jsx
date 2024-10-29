'use client'
import { useState } from 'react';
import TodoList from '@/app/components/todos/TodoList';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="bg-gray-300 mt-[340px] flex justify-center w-full">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-6 text-[36px] mx-[160px] leading-[48px] focus:outline-none ${
                        activeTab === tab
                            ? 'text-black border-b-4 border-orange-300 bg-gray-300'
                            : 'text-gray-500 hover:text-black bg-gray-300'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default function TodoApp() {
    const [activeTab, setActiveTab] = useState('Personal');
    const tabs = ['Personal', 'Professional'];

    const [personalTodos, setPersonalTodos] = useState([]);
    const [professionalTodos, setProfessionalTodos] = useState([]);

    const addTodo = (newTodo) => {
        if (activeTab === 'Personal') {
            setPersonalTodos([...personalTodos, newTodo]);
        } else {
            setProfessionalTodos([...professionalTodos, newTodo]);
        }
    };

    const completeTodo = (id) => {
        if (activeTab === 'Personal') {
            setPersonalTodos(personalTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
        } else {
            setProfessionalTodos(professionalTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
        }
    };

    const deleteTodo = (id) => {
        if (activeTab === 'Personal') {
            setPersonalTodos(personalTodos.filter(todo => todo.id !== id));
        } else {
            setProfessionalTodos(professionalTodos.filter(todo => todo.id !== id));
        }
    };

    const clearCompletedTodos = () => {
        if (activeTab === 'Personal') {
            setPersonalTodos(personalTodos.filter(todo => !todo.completed));
        } else {
            setProfessionalTodos(professionalTodos.filter(todo => !todo.completed));
        }
    };

    return (
        <div className="w-full mt-2">
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* ToDo List Section */}
            <div className="bg-white">
                <TodoList
                    todos={activeTab === 'Personal' ? personalTodos : professionalTodos}
                    addTodo={addTodo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    clearCompletedTodos={clearCompletedTodos}
                />
            </div>
        </div>
    );
}
