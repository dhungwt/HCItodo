import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
 
    function addTask(name, dueDate) {
      const newTask = { id: `todo-${nanoid()}`, name, dueDate, completed: false };
      setTasks([...tasks, newTask]);
      console.log(tasks)
    }

    function deleteTask(id) {
      //filter out all tasks that do not match the id
      const remainingTasks = tasks.filter((task) => id !== task.id);
      //save a new version of tasks w/o the task that was deleted
      setTasks(remainingTasks);
    }
    
    function editTask(id, newName, newDate) {
      const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          //
          return { ...task, name: newName, dueDate: newDate };
        }
        return task;
      });
      setTasks(editedTaskList);
    }
    
    
    function toggleTaskCompleted(id) {
      const updatedTasks = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          // use object spread to make a new object
          // whose `completed` prop has been inverted
          return { ...task, completed: !task.completed };
        }
        //if ids dont match, return original obj
        return task;
      });
      //update our tasks w/ updated tasks
      setTasks(updatedTasks);
    }
    
    

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      dueDate={task.dueDate}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Diana Hung's To Do List Assignment</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception"></div>
      <h2 id="list-heading"><u>TASK LIST:</u></h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
