import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ taskTime, taskText }) => {
  const formattedDate = new Date(taskTime * 1000).toLocaleString();

  return (
    <div className='flex items-center text-white'>
      <div className='bg-[#1d1d2b] text-[#b6c7db] flex w-[70%] rounded-[20px] mb-[2px] flex-1'>
        <div className='flex items-center justify-between w-full p-[15px] text-xl'>
          <FaPencilAlt className='text-2xl cursor-pointer mr-4' />
          <div className='flex flex-col'>
            <span>{taskText}</span>
            <span className='text-xs text-[#6c757d]'>{formattedDate}</span>
          </div>
          <FaRegTrashAlt className='text-3xl cursor-pointer ml-auto' />
        </div>
      </div>
    </div>
  )
}

export default Task;
