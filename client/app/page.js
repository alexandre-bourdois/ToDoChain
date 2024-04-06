import NavBar from "@/components/NavBar";
import Description from "@/components/Description";
import PageBottom from "@/components/PageBottom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <h1 className="mb-4 text-8xl font-bold text-white text-center">
        <span className="animate-pulse text-blue-500">To </span>
        <span className="animate-pulse text-green-500">Do </span>
        <span className="animate-pulse text-yellow-500">Chain </span>
      </h1>
      
      <p className="mb-8 text-2xl text-white text-center animate-pulse transition-colors duration-1000 ease-in-out">A decentralized to-do list on Ethereum</p>
    
      <Description />

      <PageBottom />
    </div>
  );
}
