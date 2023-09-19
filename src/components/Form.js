import React, { useState } from "react";



function Form(props) {

  const [name, setName] = useState("");

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
      <div class="form-floating mb-3">
      <input
        type="text"
        id="floatingTextarea"
        class="form-control"
        name="text"
        autoComplete="off"
        value = {name}
        onChange={handleChange}
        // style="height: 100px"
      />
       <label for="floatingTextarea">What do you need to get done?</label>
      </div>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
