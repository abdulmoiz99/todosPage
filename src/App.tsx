import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { List } from "./List/List";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <>
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoProvider>
            <Header />
            <List />
            <Footer />
          </TodoProvider>
        </div>
      </div>
    </>
  );
}

export default App;
