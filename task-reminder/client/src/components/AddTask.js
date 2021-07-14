import { useState } from "react";

const AddTask = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [option, setOption] = useState("");

  const [reminder, setReminder] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    if (!text || !day || !option) alert("Please fill up task");
    
    const newTask = {
      text: text,
      day: day,
      option: option,
      reminder: reminder,
    };
    onSubmit(newTask);
    console.log(newTask);
    setText('')
    setDay('')
    setOption('')
    setReminder(false)
  };

  return (
    <form className="add-form" onSubmit={onChange}>
      <div className="form-control">
        <label> Task </label>
        <input
          type="text"
          placeholder=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label> Date </label>
        <input
          type="text"
          placeholder=""
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label> Option </label>
        <input
          type="text"
          placeholder=""
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label> Reminder </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="saveTask" />
    </form>
  );
};

export default AddTask;
