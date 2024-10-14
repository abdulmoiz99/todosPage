import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { List } from "./List/List";

function App() {
  return (
    <>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
