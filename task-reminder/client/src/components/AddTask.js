const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label> Task </label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-control">
        <label> Date </label>
        <input type="text" placeholder="" />
      </div>

      <div className="form-control">
        <label> Option </label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-control form-control-check">
        <label> Reminder </label>
        <input type="checkbox" />
      </div>
      <input className="btn btn-block" type="submit" value="saveTask" />
    </form>
  );
};

export default AddTask;
