import React, { useState } from "react";



function Form(props) {

  const [name, setName] = useState("");
  const [dueDate, setDuedate] = useState(new Date())

  function handleChange(e) {
    setName(e.target.value);
}

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
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
