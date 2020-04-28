import React ,{useState} from "react";
import './App.css';
import EditComp from "./components/EditComp";
import AddComp from "./components/AddComp";
import TodoList from "./components/TodoList";


const App = (props) => {
const [inputName, setInputName]= useState("");
const [todo, setTodo] = useState([]);
const [editMode, setEditMode] = useState(true);
const [newTodo, setNewTodo] = useState([]);


const handleChange = (e) => {
  setInputName(e.target.value);
};

const handelAdd = (e) => {
  if (inputName){
    setTodo(todo.concat(inputName));
  }
  e.preventDefault();
  setInputName("");
};


const handleDelete = (id) => {
  setNewTodo({ ...newTodo, name: "" });
  setEditMode(true);
  return setTodo(
    todo.filter((el, idEl) => {
      return idEl !== id;
    })
  );
};
const handleClick = (el, i) => {
  setNewTodo({ name: el, id: i });
  setEditMode(false);
};
const handleEdit = () => {
  setTodo(todo.map((el, i) => (i === newTodo.id ? newTodo.name : el)));
  setEditMode(true);
};


  return(
    <div className="App">
<header className="App-header">
  <div style={{
            border: "2px solid #edf2f0",
            backgroundColor: "#d1cfcf",
            color: "black",
            width: "80%",
            padding: "20px",
            marginTop: "10px",
            marginBottom: "5px",
          }}>
<div className>
  <h2>Create Account</h2>
    <label>Name</label>
    <input value={inputName}
    onChange={(event)=>setInputName(event.target.value)}
     placeholder="...tape your name" />
</div>
{editMode ? (
          <AddComp
            name={inputName}
            handleChange={handleChange}
            handelAdd={handelAdd}
          />
        ) : (
          <EditComp
            handleEdit={handleEdit}
            setNewTodo={setNewTodo}
            newTodo={newTodo}
          />
        )}

        <TodoList
          todo={todo}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
        </div>
</header>
    </div>
  )
}
export default App;
