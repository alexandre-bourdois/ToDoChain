import NavBar from "@/components/NavBar";
import Description from "@/components/Description";
export default function Home() {
  return (
    <main className="w-full flex-center flex-col">
      <NavBar/>
      <p className="mb-12 pt-12 text-8xl font-bold text-white text-center ">To Do Chain</p>
      <Description/>
    </main>
  );
}