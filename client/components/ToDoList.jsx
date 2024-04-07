import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

const ToDoList = () => {

  return (
    <div className='flex items-center justify-center'style={{ height: '50vh' }}>
      <div className='w-[70%] bg-[#22223B] py-4 px-9 rounded-[20px]'>

        <h2 className='text-4xl font-bold text-[#2F7DC8] pb-8'>To Do Chain</h2>

        <form className='flex items-center justify-center'>
        <input
            className='rounded-[10px] w-full p-4 border-none outline-none text-[#36A65F]  bg-[#1d1d2b] '
            placeholder='Add a task for today...'
        />
          <FaPlusCircle
            className='text-[#EFB227] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
          />
        </form>
      </div>
    </div>
  );
};

export default ToDoList;
