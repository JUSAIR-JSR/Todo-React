import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if (todoString) {
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
      
    }
    
  }, [])
  

  const saveToLS= () => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
    saveToLS()
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);

    // ithinte adeel ulla code enthinaanennal...edit cheyyumbol..already ulla value avde thanne undavum ath update avoonathin pakaram...
    //puthiyathayi...create aavukayaan cheyyuka so  pazhaya value delete cheyth puthiyath mathram nirthanaan..ee delete nte code
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS()

  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS()

  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
    saveToLS()

  };

  return (
    <>
      <div className="container mx-auto my-5 max-w-5xl rounded-xl py-5 bg-violet-200 min-h-[70vh]">
        <div className="addTodo mx-4">
          <h2 className="text-lg font-bold ">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="outline-none rounded-md w-1/2 py-2 text-start px-2"
          />
          <button
            onClick={handleAdd}
            className="mx-3 bg-violet-700 py-2 hover:bg-violet-900 px-4 rounded-lg text-white text-sm font-bold"
          >
            save
          </button>
        </div>
        <h2 className="text-lg font-bold  mx-4 mt-5">Your Todo</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="flex gap-5 mx-5 text-red-600 font-mono font-bold">
              No Todos to Display
            </div>
          )}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex justify-between my-3 mx-4"
              >
                <div className="flex">
                  <input
                    type="checkbox"
                    onChange={handleCheckbox}
                    value={item.iscompleted}
                    name={item.id}
                    className="mr-2 "
                  />
                  <div className={item.iscompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons mx-3 flex gap-3">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className=" bg-violet-700 py-1 hover:bg-violet-900 px-4 rounded-lg text-white text-sm font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className=" bg-violet-700 py-1 hover:bg-violet-900 px-4 rounded-lg text-white text-sm font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
