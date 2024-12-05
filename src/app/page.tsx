import Header from "@/components/Header";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="border rounded-md max-w-2xl mx-auto p-4 mt-4">
        <h1 className="text-2xl text-white font-bold mb-4">
          Create a to-do list
        </h1>
        <TodoList />
      </div>
    </>
  );
}