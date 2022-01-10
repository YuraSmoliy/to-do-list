import ToDoList from "./components/ToDoList/ToDoList"
import './App.css';
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";

function App() {
  return (
      <div>
        <Header></Header>
        <ToDoListContainer></ToDoListContainer>
      </div>
  );
}

export default App;
