// import e from "express";
import React, { useState } from "react";
import axios from 'axios'

const initialValues = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [values, setValues] = useState(initialValues)

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', values)
      .then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={values.username}
          onChange={handleChanges}
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={values.password}
          onChange={handleChanges}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
