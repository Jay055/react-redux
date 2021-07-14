import Task from './Task'; 

const Tasks = ({tasks, onDelete}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task ={task} key={task.id} onDelete= {onDelete}>  </Task>
      ))}
    
    </>
  );
};

export default Tasks;
