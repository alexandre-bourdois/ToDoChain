import React, { useState } from 'react';
import { FaPencilAlt, FaRegTrashAlt, FaSave } from "react-icons/fa";

const Task = ({ taskId, taskTime, taskText, deleteTask, changeTask }) => {
  const formattedDate = new Date(taskTime * 1000).toLocaleString();
  const [editedText, setEditedText] = useState(taskText);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    changeTask(taskId, editedText);
    setIsEditing(false);
  };

  return (
    <div className='flex items-center text-white'>
      <div className='bg-[#1d1d2b] text-[#b6c7db] flex w-[70%] rounded-[20px] mb-[2px] flex-1'>
        <div className='flex items-center justify-between w-full p-[15px] text-xl'>
          {!isEditing && (<FaPencilAlt 
            className='text-2xl cursor-pointer mr-4'
            onClick={handleEdit}
          />
          )}
          {isEditing && (
            <FaSave 
              onClick={handleSaveEdit}
              className='text-2xl cursor-pointer mr-4'
            />
          )}
          {isEditing ? (
            <input
              type="text"
              className="border-none outline-none bg-transparent text-white w-full"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <div className='flex flex-col'>
              <span>{taskText}</span>
              <span className='text-xs text-[#6c757d]'>{formattedDate}</span>
            </div>
          )}
          {!isEditing && (
          <FaRegTrashAlt 
            onClick={deleteTask}
            className='text-3xl cursor-pointer ml-auto' 
          />
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Task;
