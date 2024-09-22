import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [input, setInput] = useState({ email: '', password: '' }); // Initialize with specific fields

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log("Input Data: ", input);

    let api = "http://localhost:3001/user/userRegis";

    try {
      const res = await axios.post(api, input);
      console.log("Response from server: ", res);
    } catch (err) {
      console.error("Error occurred: ", err);
    }
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Registration;
