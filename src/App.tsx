import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { List } from "./List/List";
import { Todo } from "./Model/Todo";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const getList = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodo(data);
    };

    getList();
  }, []);
  return (
    <>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todo={todo} />
          <Footer todo={todo} />
        </div>
      </div>
    </>
  );
}

export default App;
