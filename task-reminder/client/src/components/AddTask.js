import { useState } from "react";

const AddTask = () => {

  const [text, setText ] = useState('');
  const [day, setDay ] = useState('');
  const [option, setOption ] = useState('');
  
  const [reminder, setReminder ] = useState(false);
  
  const onChange = (e) => { 
    console.log(e.target.value)
  }

  return (
    <form className="add-form">
      <div className="form-control">
        <label> Task </label>
        <input type="text" placeholder=""
        value="text" onChange={(e)=> setText(e.target.value)}/>
      </div>
      <div className="form-contr ol">
        <label> Date </label>
        <input type="text" placeholder="" value = "day" onChange= {(e)=>setDay(e.target.value)} />
      </div>

      <div className="form-control">
        <label> Option </label>
        <input type="text" placeholder=""  value = {option} onChange= {(e)=>setOption(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label> Reminder </label>
        <input type="checkbox"  value = "reminder" onChange= {(e)=>setText(e.currentTarget.checked)}/>
      </div>
      <input className="btn btn-block" type="submit" value="saveTask" />
    </form>
  );
};

export default AddTask;
