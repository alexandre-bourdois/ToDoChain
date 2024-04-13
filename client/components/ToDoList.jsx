import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Task from './Tasks';

const ToDoList = ({ tasks, input, setInput, addTask, deleteTask }) => {

  return (
    <div className='flex items-center justify-center pb-10'>
      <div className='w-[70%] bg-[#22223B] py-4 px-9 rounded-[20px]'>

        <h2 className='text-4xl font-bold text-[#2F7DC8] pb-8'>To Do Chain</h2>

        <form className='flex items-center justify-center'>
          <input
            className='rounded-[10px] w-full p-4 border-none outline-none text-[#36A65F]  bg-[#1d1d2b] '
            placeholder='Add a task for today...'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <FaPlusCircle
            onClick={addTask}
            className='text-[#EFB227] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
          />
        </form>

        <ul className='pt-10'>
          {tasks.map(item => (
            <Task
              key={item.id}
              taskTime={item.timestamp ? parseInt(item.timestamp.toString()) : null}
              taskText={item.text}
              deleteTask={deleteTask(item.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
