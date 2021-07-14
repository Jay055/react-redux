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
  // toggleReminder 
  //  once clicked set to the opposite of the previous state 
  // set it with false or true 
  // setState({ reminder : result})
  // const toggle = (id) => { 
  //   result = tasks.reminder
  //   cliked = !clicked 
    
  //   setTask()
  // }

  return (
    <div className="container">
      <Header title="passed in props" />
      {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={onDelete} onToggle = {onToggle}/> : <p>No tasks!!!</p> }
     
    </div>
  );
}

export default App;
