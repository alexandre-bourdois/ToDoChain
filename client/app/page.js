"use client"

import ConnectWalletButton from "@/components/NavBar";
import Description from "@/components/Description";
import PageBottom from "@/components/PageBottom";
import ToDoList from "@/components/ToDoList";
import { ethers } from "ethers";

export default function Home() {

  const connectWallet = async () => {
    try {
        const {ethereum} = window
        if(!ethereum){
          console.log('Metamask not detected')
          return
        }
        let chainId = await ethereum.request({method: 'eth_chainId'})
        console.log('connected to chain:',chainId)

        const ethereumId = '0xaa36a7'
        if(chainId !== ethereumId) {
          alert('You are not connected to Ethereum Mainet')
        }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* If not connected display */}
      <ConnectWalletButton connectWallet={connectWallet}/>
      <Description/>
      {/* If connected display */}
        <ToDoList/>
      <PageBottom />
    </div>
  );
}
