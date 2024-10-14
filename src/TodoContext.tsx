import React, { ReactNode, useState, createContext, useContext } from "react";
import { Todo } from "./Model/Todo";

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextType {
  Todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [Todo, setTodo] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ Todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};