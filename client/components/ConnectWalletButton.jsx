import React from 'react';

const ConnectWalletButton = ({ connectWallet, connected, currentAccount, disconnectWallet }) => {
  
  const shortenAddress = (address) => {
    if (!address) return "";
    if (address.length <= 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <>
      <div className='w-[full] flex px-5 py-8 justify-between flex-1'>
        {connected && currentAccount && (
          <>
          <div className="flex items-center bg-violet-600 text-white p-2">
          <p className="text-white">{shortenAddress(currentAccount)}</p>
          </div>
          <div className="flex-1 flex place-content-center  p-2 items-center">
              <h1 className="mb-4 text-3xl font-bold text-white">
                <span className="animate-pulse text-blue-500">T </span>
                <span className="animate-pulse text-green-500">D </span>
                <span className="animate-pulse text-yellow-500">C </span>
              </h1>
            </div>                 
          </>
        )}

        <div className={` flex ${connected ? 'place-content-end' : 'flex-1 place-content-center  md:place-content-end'}`}>
          {!connected ? (
            <button
              className="h-[4rem] text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 rounded-lg transition duration-400 ease-linear"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className="h-[4rem] text-2xl bg-red-500 hover:bg-red-700 text-white font-bold px-8 rounded-lg transition duration-400 ease-linear"
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectWalletButton;
