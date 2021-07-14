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
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Going to Bed",
      day: "Feb 6th at 4:40pm",
      reminder: false,
    },
  ]);

  const onDelete = (id) => {
    //  we use the setState
    setTask(tasks.filter((task) => id !== task.id));
  };

  return (
    <div container>
      <Header title="passed in props" />
      <Tasks tasks={tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
