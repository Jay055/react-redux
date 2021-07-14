import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  //  Toggle Add Button
  const [buttonToggle, setButtonToggle] = useState(true);

  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`http://localhost:5001/tasks`);
      const data = await res.json();
      setTask(data);
    };
    fetchTasks();
  }, []);

  const onDelete = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, { method: "DELETE" });
    //  DISPLAY
    setTask(tasks.filter((task) => id !== task.id));
  };

  // fetch Task 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`);
    const data = await res.json();
  
    return data; 
    
  };




  const onToggle = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}; 


    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
     method: 'PUT',
     headers: { 
       'Content-type' : 'application/json' 
     }, 
     body: JSON.stringify(updatedTask),
    })

    const data = await res.json();

    setTask(
      tasks.map((task) =>
        task.id === id
          ? { ...task, reminder: data.reminder, option: "changed task" }
          : task
      )
    );

  };

  const addTask = async (newTask) => {
    const res = await fetch(
      `http://localhost:5001/tasks`,

      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      }
    );
    const data = await res.json();

    setTask([...tasks, data]);

    // const id = Math.floor(Math.random() * 10007) + 1;
    // newTask = { id, ...newTask };
    // setTask([...tasks, newTask]);
    // console.log(tasks);
  };

  //  toggleButton
  const toggleButon = () => {
    setButtonToggle(!buttonToggle);
    console.log("toggle button");
  };

  return (
    <div className="container">
      <Header title="Task Reminder" toggleButton={toggleButon} />
      {buttonToggle && <AddTask onSubmit={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <p>No tasks!!!</p>
      )}
    </div>
  );
}

export default App;
