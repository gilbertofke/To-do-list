"use client";

import { TodoItem } from "./TodoItem"; // Importing the TodoItem component
import { nanoid } from "nanoid"; // Importing the nanoid library for generating unique IDs
import { useState } from "react"; // Importing the useState hook from React
import { Todo } from "../types/todo"; // Importing the Todo type

// Defining the TodoList component as a functional component
export const TodoList: React.FC = () => {
   // State to hold the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // State to hold the current input value
  const [input, setInput] = useState("");


   // Function to add a new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      // Check if the input is not empty
      const newTodo: Todo = {
        id: nanoid(), // Generate a unique ID for the new todo
        text: input.trim(), // Trim the input text
        isCompleted: false, // Set the initial completion status to false
      };
      setTodos([...todos, newTodo]); // Add the new todo to the list
      setInput(""); // Clear the input field
    }
  };

  // Function to handle key press events
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Check if the Enter key was pressed
      addTodo(); // Add the todo
    }
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

    // Function to delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

    // Function to assign a person to a todo
  const assignPerson = (id: string, person: string | null) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, assignedTo: person ? person : undefined }
          : todo
      )
    );
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          className="border rounded-md p-2 flex-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // Add this to handle the Enter key press
        />
        <button
          className="bg-blue-500 rounded-md p-2 text-white"
          onClick={addTodo}>
          Add Todo
        </button>
      </div>
      {todos.length > 0 && ( // Check if there are any todos
        <div className="border rounded-lg">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id} // Unique key for each todo item
              todo={todo} // Pass the todo object as a prop
              toggleComplete={toggleComplete} // Pass the toggleComplete function as a prop
              deleteTodo={deleteTodo} // Pass the deleteTodo function as a prop
              assignPerson={assignPerson} // Pass the assignPerson function as a prop
              hasBorder={index !== todos.length - 1} // Conditionally add a border to all but the last item
            />
          ))}
        </div>
      )}
     </div>
  );
};