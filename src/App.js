
import './App.css';
import React, { useState } from "react";

function App() {

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

export default App;
