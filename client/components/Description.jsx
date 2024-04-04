import React from 'react'
import { FaWallet } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";

const StepCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-col justify-start items-center white-glassmorphism p-10 m-2 cursor-pointer hover:shadow-xl w-full">
      <div className={`w-20 h-20 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="md:ml-0 ml-4 flex flex-col flex-1 p-2 md:items-center">
        <h1 className="mt-2 text-white text-lg items-center">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12 md:text-center">{subtitle}</p>
      </div>
    </div>
  );
   
const Description = () => {
  return (
        <div className="flex-1 flex flex-col lg:flex-row justify-start items-center">
                <StepCard
                color = "bg-[#2952e3]"
                title = "Step 1: Connect your Wallet"
                icon={<FaWallet fontSize={40} className="text-white"/>}
                subtitle="DESCRIPTION"
                />
                 <StepCard
                color = "bg-[#8945F8]"
                title = "Step 2: Add Tasks"
                icon={<FaTasks fontSize={40} className="text-white"/>}
                subtitle="DESCRIPTION"
                />
                <StepCard
                color = "bg-[#F84550]"
                title = "Step 3: Manage your Tasks"
                icon={<MdManageHistory fontSize={40} className="text-white"/>}
                subtitle="DESCRIPTION"
                />   
            </div>
  )
}

export default Description