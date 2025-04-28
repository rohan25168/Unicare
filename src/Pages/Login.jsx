import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const navigate =useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', formData)
    .then(result =>{console.log(result)
      if(result.data ==="success"){ 
      navigate('/home')}
    })
    .catch(err => console.log(err))
    // Handle form submission logic here (e.g., API call)
    // console.log('Form submitted:', formData);
  };
  const goToHome = () => {
    navigate('/home'); // Navigate to the LoginForm component
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card border-light p-4">
            <h2 className="text-center mb-4">Login Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block" onClick={goToHome}>
                Login
              </button>
              <p className="mt-3 text-center">
                Don't have an account? <a href="register">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
