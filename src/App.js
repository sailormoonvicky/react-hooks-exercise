
import './App.css';
import React, { useState } from "react";

function ObjectState() {

  const [formState, setFormState] = useState({});


  const handleChange = ({target}) => {
    const {name, value, id, onChange, type} = target;
    setFormState(prev=>({
      ...prev,
      [name]:value
    }));
  };


  return (
    <div>
      <form>
        <label htmlFor='1'>First Name</label>
        <input
        id='1'
        name='firstName'
        type='text'
        value={formState.firstName}
        onChange={handleChange}
        />

        <label htmlFor='2'>Password</label>
        <input
        id='2'
        name='password'
        type='password'
        value={formState.password}
        onChange={handleChange}
        />
      </form>
    </div>
  )
}

export function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    // const name=target.name
    // const value=target.value

    setProfile(prevProfile => ({
      ...prevProfile,
      [name]:value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange = {handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange = {handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange = {handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange = {handleChange}
      />
      <button type="submit">Submit</button>
    </form>

  );
}

function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}

function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? <p>undefined</p> : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

export function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}



export default ObjectState;
