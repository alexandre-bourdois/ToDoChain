"use client"

import ConnectWalletButton from "@/components/ConnectWalletButton";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import ToDoList from "@/components/ToDoList";
import { Contract, ethers } from "ethers";
import { useState } from "react";

import TaskContract from "../contract/TaskContract.json"
export default function Home() {
  
  const [connected,setConnected] = useState(false)
  const [currentAccount, setCurrentAccount]= useState(false)
  const [input, setInput] = useState(false)
  const [tasks, setTasks] = useState(false)

  const connectWallet = async () => {
    try {
        const {ethereum} = window
        if(!ethereum){
          console.log('Metamask not detected')
          alert('MetaMask not detected');

          return
        }
        let chainId = await ethereum.request({method: 'eth_chainId'})
        console.log('connected to chain:',chainId)

        const ethereumId = '0xaa36a7' //Currently Seppolia for test
        if (chainId !== ethereumId) {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: ethereumId}]
          })
        }
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        
        console.log('Found accound', accounts[0])
        setConnected(true)
        setCurrentAccount(accounts[0])

    } catch (error) {
      console.log(error)
    }
  };

  const disconnectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Metamask not detected');
        return;
      }
    
      setConnected(false);
      setCurrentAccount(null);
  
      console.log('Wallet disconnected');
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async e => {
    e.preventDefault()

    let task = {
      taskText: input,
      isDeleted: false
    }

    try {
      const {ethereum} = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const Contract = new ethers.Contract(
          TaskContract.network,
          TaskContract.abi,
          signer          
        )
        console.log("Account:", await signer.getAddress());

        Contract.addTask(task.taskText, task.isDeleted)
        .then(res =>{
          setTasks([...tasks,task])
          console.log('Added task')
        })
        .catch(err => {
          console.log(err)
        })

      } else{
        console.log('ethereum object does not exist')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">

        <ConnectWalletButton 
          connectWallet={connectWallet} 
          connected={connected}
          currentAccount={currentAccount}
          disconnectWallet={disconnectWallet}
        />

        {!connected && <Description />}
        {connected && <ToDoList input={setInput} addTask={addTask} />}

      </div>

      <Footer />
    </div>
  );
}