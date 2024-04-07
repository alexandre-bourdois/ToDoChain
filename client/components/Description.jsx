import React from 'react'
import { FaWallet } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";

const StepCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-col justify-start items-center white-glassmorphism p-10 m-2 cursor-pointer hover:shadow-xl w-full">
      <div className={`w-20 h-20 rounded-full flex justify-center items-center bg-[${color}]`}>
        {icon}
      </div>
      <div className="md:ml-0 ml-4 flex flex-col flex-1 p-2 items-center">
        <h1 className={`mt-2 text-sky-200 text-2xl items-center`}>{title}</h1>
        <p className="mt-2 text-white text-m md:w-9/12 md:text-center">{subtitle}</p>
      </div>
    </div>
  );
   
const Description = () => {
  return (
    <>
      <h1 className="mb-4 text-8xl font-bold text-white text-center">
      <span className="animate-pulse text-blue-500">To </span>
      <span className="animate-pulse text-green-500">Do </span>
      <span className="animate-pulse text-yellow-500">Chain </span>
      </h1>

      <p className="mb-8 text-2xl text-white text-center animate-pulse transition-colors duration-1000 ease-in-out">
        A decentralized to-do list on Ethereum
      </p>
      
      <div className="flex justify-center">
        <hr className="my-8 w-1/4 border-b-2 border-gray-300 rounded-full" />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row justify-start items-center">
              <StepCard
              color = "#2F7DC8"
              title = "Step 1: Connect your Wallet"
              icon={<FaWallet fontSize={40} className="text-white"/>}
              subtitle=" Connect your MetaMask wallet to the Ethereum blockchain to access ToDoChain."
              />
                <StepCard
              color = "#36A65F"
              title = "Step 2: Add Tasks"
              icon={<FaTasks fontSize={40} className="text-white"/>}
              subtitle="Safely and confidentially add your tasks to the Ethereum blockchain."
              />
              <StepCard
              color = "#EFB227"
              title = "Step 3: Manage your Tasks"
              icon={<MdManageHistory fontSize={40} className="text-white"/>}
              subtitle="Browse your previous tasks or delete them, securely manage your tasks with confidence."
              />   
        </div>
      </>
  )
}

export default Description