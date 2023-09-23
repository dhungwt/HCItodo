import React, { useState } from "react";

function Form(props) {
  // const [name, setName] = useState("");
  // const [dueDate, setDueDate] = useState('')
  const [task, setTask] = useState({ name: "", dueDate: "", category: ""});

  function handleChange(e) {
    const { name, value } = e.target;
    //updating the previous state of the task with the new info that was input
    console.log("CURRENT CHANGE: " + value); //debug for form fix
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevents refreshing the page every time the form is edited
    console.log("Inside HandleSubmit: " + task.name + "  " + task.dueDate+" "+ task.category);
    console.log("category " + task.category)
    props.addTask(task.name, task.dueDate, task.category); //pushes the new task on the tasklist array
    setTask({ name: "", dueDate: "" , category:""}); //resets the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          id="name"
          className="form-control form-control-lg"
          placeholder="What do you need to get done?"
          name="name"
          autoComplete="off"
          value={task.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          id="dueDate"
          className="form-control form-control-lg"
          placeholder="When do you need to finish it by?"
          name="dueDate"
          autoComplete="off"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      What category is this task?
      <div className="row align-items-start">
      <div className="col">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label htmlFor="flexRadioDefault1" className="schoolRadio form-check-label">
          School
        </label>
        </div>
      </div>
      <div className="col">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Personal
        </label>
        </div>
      </div>
      <div className="col">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Work
        </label>
        </div>
      </div>
      </div>
      <button type="submit " className="btn btn__primary btn__lg rounded-pill">
        Add
      </button>
    </form>
  );
}

export default Form;
