//  use React icons
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} {FaTimes}
        <FaTimes color="red" onClick={() => onDelete(task.id)} />
      </h3>
      <p> {task.day} </p>
      <p> {task.option} </p>
    </div>
  );
};

export default Task;
