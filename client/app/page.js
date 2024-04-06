import NavBar from "@/components/NavBar";
import Description from "@/components/Description";
import PageBottom from "@/components/PageBottom";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen">

      {/* If not connected display */}
      <NavBar/>
      <Description/>
      {/* If connected display */}
        <ToDoList/>
      <PageBottom />
    </div>
  );
}
