import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      option: 'Stay home',
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      option: 'Stay home',
      reminder: true,
    },
    {
      id: 3,
      text: "Going to Bed",
      day: "Feb 6th at 4:40pm",
      option: 'Stay home',
      reminder: false,
    },
  ]);

  const onDelete = (id) => {
    //  we use the setState
    setTask(tasks.filter((task) => id !== task.id));
  };

  const onToggle = (id) => { 
     console.log(id); 
     setTask(tasks.map((task) => task.id === id ? 
     {...task, reminder: !task.reminder, option: 'changed task'}  : task
     ))
     console.log(tasks)
  } 

 const  onSubmit =  (newTask) =>  { 

   const id = Math.floor(Math.random() * 10007) + 1 
   newTask = {id, ...newTask}
   setTask([...tasks, newTask])
   console.log(tasks)

  }


  return (
    <div className="container">
      <Header title="Task Reminder" onSubmit = {onSubmit} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} 
        onDelete={onDelete} 
        onToggle = {onToggle}
        

        /> 
        : <p>No tasks!!!</p> }
     
    </div>
  );
}

export default App;
