import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className='w-[full] flex px-8 py-8 justify-between'>
      <div className='flex-1 flex md:place-content-end place-content-center '>
        <button
          className="h-[4rem] text-2xl bg-blue-500  hover:bg-blue-700 text-white font-bold px-10 rounded-lg transition duration-400 ease-linear"
          >
          Connect Wallet
        </button>
      </div>
    </div>
    </>
)
}

export default NavBar