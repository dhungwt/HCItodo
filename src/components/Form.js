import React, { useState } from "react";

function Form(props) {
  // const [name, setName] = useState("");
  // const [dueDate, setDueDate] = useState('')
  const [task, setTask] = useState({ name: "", dueDate: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    //updating the previous state of the task with the new info that was input
    console.log(value) //debug for form fix
    setTask((prevTask) => ({ 
      ...prevTask,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevents refreshing the page every time the form is edited
    props.addTask(task.name, task.dueDate); //pushes the new task on the tasklist array
    setTask({ name: "", dueDate: "" }); //resets the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <input
          type="text"
          id="name"
          class="form-control form-control-lg"
          placeholder="What do you need to get done?"
          name="name"
          autoComplete="off"
          value={task.name}
          onChange={handleChange}
        />
        <input
          type="date"
          id="dueDate"
          class="form-control form-control-lg"
          placeholder="When do you need to finish it by?"
          name="dueDate"
          autoComplete="off"
          value={task.dueDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit " className="btn btn__primary btn__lg rounded-pill">
        Add
      </button>
    </form>
  );
}

export default Form;
