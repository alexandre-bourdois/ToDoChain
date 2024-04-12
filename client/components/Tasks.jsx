import { BsFillTrashFill, BsArrowRepeat } from 'react-icons/bs';
import { FaPencilAlt,FaRegTrashAlt    } from "react-icons/fa";

const Task = () => {
  return (
    <div className='flex items-center text-white'>
      <div className=' bg-[#1d1d2b] text-[#b6c7db] flex w-[70%] rounded-[20px] mb-[2px] flex-1'>
        <div className='flex items-center justify-between w-full p-[15px] text-xl'>
          <FaPencilAlt  className='text-2xl cursor-pointer mr-4' />

          <div className="task-content">Task Content</div>
        </div>
      </div>

      <FaRegTrashAlt  className='text-3xl cursor-pointer ml-7 mr-2' />
    </div>
  )
}

export default Task;