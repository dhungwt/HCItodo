import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState('')
//   const [task, setTask] = { name: "", dueDate: "" };

  function handleChange(e) {
    setName(e.target.value);
    // setTask()
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    const newTask = { name: name, dueDate: dueDate };
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
      
      <input
        type="text"
        id="floatingTextarea"
        class="form-control form-control-lg" 
        placeholder="What do you need to get done?"
        name="text"
        autoComplete="off"
        value = {name}
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
