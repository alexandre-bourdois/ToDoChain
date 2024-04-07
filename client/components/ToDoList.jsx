import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

const ToDoList = () => {

  return (
    <div className='flex items-center justify-center w-full p-10'>
      <div className='w-[70%] bg-[#22223B] py-4 px-9 rounded-[20px]'>
        {/* Titre */}
        <h2 className='text-4xl font-bold text-[#2F7DC8] pb-8'>To Do Chain</h2>

        <div className='py-3 text-[#36A65F]'>Add a new task...</div>

        <form className='flex items-center justify-center'>
          <FaPlusCircle
            className='text-[#EFB227] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
          />
        </form>


      </div>
    </div>
  );
};

export default ToDoList;
