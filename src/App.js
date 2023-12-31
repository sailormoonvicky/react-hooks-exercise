
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

export default ObjectState;
